export interface PriceReference {
  valueCtPerKwh: number;
  currency: 'EUR';
  unit: 'ct/kWh';
  country: 'DE';
  scope: string;
  referenceDate: string;
  sourceId: string;
  methodology: string;
  notes?: string;
}

export interface ElectricityPriceData {
  currentReferencePrice: PriceReference;
  typicalBaseFeeMonthly: number; // EUR
  defaultCalculatorPriceCt: number; // 35.0 ct/kWh
  priceComposition: {
    category: string;
    sharePercent: number;
    valueCtPerKwh: number;
    description: string;
  }[];
  historicalTrends: {
    year: number;
    averagePriceCtPerKwh: number;
    note: string;
  }[];
}

export const electricityPriceData: ElectricityPriceData = {
  currentReferencePrice: {
    valueCtPerKwh: 35.0,
    currency: 'EUR',
    unit: 'ct/kWh',
    country: 'DE',
    scope: 'Haushaltsstrom Neukunden- & Bestandsdurchschnitt bei 3.500 kWh Jahresverbrauch',
    referenceDate: '2026-01-01',
    sourceId: 'bnetza',
    methodology: 'Gewichteter Durchschnitt aus Grundversorgung und Sonderverträgen privater Haushaltskunden laut BNetzA & BDEW.',
    notes: 'Tatsächliche Preise variieren je nach Netzgebiet, Anbieter und Tarif zwischen ca. 26 ct/kWh (günstige Neukundentarife) und 42 ct/kWh (örtliche Grundversorgung).',
  },
  typicalBaseFeeMonthly: 12.5, // 12,50 €/Monat bzw. 150 €/Jahr
  defaultCalculatorPriceCt: 35.0,
  priceComposition: [
    {
      category: 'Beschaffung, Vertrieb & Marge',
      sharePercent: 44.5,
      valueCtPerKwh: 15.58,
      description: 'Einkauf an der Strombörse (EEX/EPEX SPOT), Hedging, Kundenservice, IT-Infrastruktur und Gewinnmarge des Lieferanten.',
    },
    {
      category: 'Netzentgelte (inkl. Messstellenbetrieb)',
      sharePercent: 27.2,
      valueCtPerKwh: 9.52,
      description: 'Entgelte für Betrieb, Instandhaltung und Ausbau der Übertragungs- und Verteilnetze (gemäß Regulierung durch BNetzA).',
    },
    {
      category: 'Steuern, Abgaben & Umlagen',
      sharePercent: 28.3,
      valueCtPerKwh: 9.9,
      description: 'Stromsteuer (2,05 ct), Mehrwertsteuer (19 % auf Gesamtpreis), KWKG-Umlage, Offshore-Netzumlage und Konzessionsabgabe an Kommunen.',
    },
  ],
  historicalTrends: [
    { year: 2018, averagePriceCtPerKwh: 29.47, note: 'Stabile Marktphase mit moderaten Beschaffungskosten' },
    { year: 2019, averagePriceCtPerKwh: 30.46, note: 'Steigende CO2-Zertifikatspreise' },
    { year: 2020, averagePriceCtPerKwh: 31.81, note: 'Höhere Netzentgelte und EEG-Umlage' },
    { year: 2021, averagePriceCtPerKwh: 32.16, note: 'Beginnende Energiekrise im 4. Quartal' },
    { year: 2022, averagePriceCtPerKwh: 40.07, note: 'Extremer Preisschock durch Ukraine-Krieg und Gaspreiskrise (Abschaffung EEG-Umlage im Juli)' },
    { year: 2023, averagePriceCtPerKwh: 45.73, note: 'Historischer Höchststand, abgefedert durch gesetzliche Strompreisbremse (40 ct/kWh)' },
    { year: 2024, averagePriceCtPerKwh: 37.14, note: 'Deutliche Entspannung bei Großhandelspreisen und Neukundentarifen' },
    { year: 2025, averagePriceCtPerKwh: 35.80, note: 'Konsolidierung auf Vor-Krisen-Niveau mit gestiegenen Netzentgelten' },
    { year: 2026, averagePriceCtPerKwh: 35.00, note: 'Aktueller Referenzpreis für Haushaltskunden' },
  ],
};
