export interface HouseholdBenchmark {
  persons: number;
  label: string;
  apartmentWithoutWarmWaterKwh: number;
  apartmentWithWarmWaterKwh: number;
  houseWithoutWarmWaterKwh: number;
  houseWithWarmWaterKwh: number;
  typicalRangeKwh: [number, number];
  typicalMonthlyCostEuro: number; // calculated with 35ct/kWh + 12.50 base fee
  description: string;
  savingTips: string[];
}

export const householdBenchmarks: Record<number, HouseholdBenchmark> = {
  1: {
    persons: 1,
    label: '1 Person (Single-Haushalt)',
    apartmentWithoutWarmWaterKwh: 1300,
    apartmentWithWarmWaterKwh: 1800,
    houseWithoutWarmWaterKwh: 2000,
    houseWithWarmWaterKwh: 2600,
    typicalRangeKwh: [1100, 1900],
    typicalMonthlyCostEuro: 53.33, // 1400 kWh * 0.35 / 12 + 12.50
    description: 'Ein Single-Haushalt verbraucht in einer Mietwohnung ohne elektrische Warmwasserbereitung durchschnittlich ca. 1.300 bis 1.500 kWh Strom pro Jahr. Grundlastgeräte wie Kühlschrank, Router und Beleuchtung machen einen hohen Anteil des Gesamtverbrauchs aus.',
    savingTips: [
      'Kühlschrank auf 7 °C einstellen statt 4 °C (spart ca. 10 % Strom).',
      'Standby-Verbrauch durch schaltbare Steckdosenleisten (Fernseher, PC, Soundsystem) eliminieren.',
      'Waschmaschine immer voll beladen und Eco-40-60-Programm nutzen.',
    ],
  },
  2: {
    persons: 2,
    label: '2 Personen (Paar-Haushalt)',
    apartmentWithoutWarmWaterKwh: 2100,
    apartmentWithWarmWaterKwh: 2900,
    houseWithoutWarmWaterKwh: 3000,
    houseWithWarmWaterKwh: 3800,
    typicalRangeKwh: [2000, 3100],
    typicalMonthlyCostEuro: 85.42, // 2500 kWh * 0.35 / 12 + 12.50
    description: 'Für einen 2-Personen-Haushalt liegt der Richtwert bei ca. 2.100 bis 2.500 kWh (ohne Warmwasser). Durch gemeinsame Nutzung von Großgeräten wie Kühlschrank, Herd und Geschirrspüler sinkt der Verbrauch pro Kopf deutlich gegenüber einem Single.',
    savingTips: [
      'Geschirrspüler erst starten, wenn er vollständig gefüllt ist (Eco-Modus spart bis zu 30 % Strom).',
      'Wasserkocher statt Herdplatte zum Vorkochen von Nudelwasser nutzen.',
      'LED-Leuchtmittel mit mind. 80-90 lm/W flächendeckend einsetzen.',
    ],
  },
  3: {
    persons: 3,
    label: '3 Personen (Kleine Familie / WG)',
    apartmentWithoutWarmWaterKwh: 2600,
    apartmentWithWarmWaterKwh: 3700,
    houseWithoutWarmWaterKwh: 3600,
    houseWithWarmWaterKwh: 4700,
    typicalRangeKwh: [2600, 3900],
    typicalMonthlyCostEuro: 105.83, // 3200 kWh * 0.35 / 12 + 12.50
    description: 'Bei 3 Personen steigt der Stromverbrauch durch häufigere Wasch- und Spülgänge sowie zusätzliche Unterhaltungselektronik auf ca. 2.600 bis 3.500 kWh im Mehrfamilienhaus.',
    savingTips: [
      'Wäschetrockner auf Wärmepumpen-Technologie umstellen oder im Sommer die Wäscheleine nutzen.',
      'Gaming-PCs und Konsolen nach dem Spielen komplett ausschalten.',
      'Warmwasserbereitung (Durchlauferhitzer) optimal einstellen (z.B. Eco-Stufe bei 38–42 °C).',
    ],
  },
  4: {
    persons: 4,
    label: '4 Personen (Familie mit 2 Kindern)',
    apartmentWithoutWarmWaterKwh: 3000,
    apartmentWithWarmWaterKwh: 4300,
    houseWithoutWarmWaterKwh: 4000,
    houseWithWarmWaterKwh: 5300,
    typicalRangeKwh: [3000, 4800],
    typicalMonthlyCostEuro: 120.42, // 3700 kWh * 0.35 / 12 + 12.50
    description: 'Eine vierköpfige Familie verbraucht durchschnittlich rund 3.000 bis 4.000 kWh Strom pro Jahr (ohne elektrische Warmwasserbereitung) bzw. 4.000 bis 5.300 kWh im Einfamilienhaus mit Warmwasser.',
    savingTips: [
      'Mehrere Waschladungen pro Woche bei 30 °C statt 60 °C waschen (spart bis zu 50 % Strom pro Waschgang).',
      'Backofen mit Umluft statt Ober-/Unterhitze nutzen (ca. 20–30 °C geringere Temperatur nötig).',
      'Kinderzimmer-Elektronik mit Zeitschaltuhren oder Master-Slave-Steckdosen automatisieren.',
    ],
  },
  5: {
    persons: 5,
    label: '5 Personen (Großfamilie)',
    apartmentWithoutWarmWaterKwh: 3600,
    apartmentWithWarmWaterKwh: 5200,
    houseWithoutWarmWaterKwh: 4800,
    houseWithWarmWaterKwh: 6300,
    typicalRangeKwh: [3800, 5800],
    typicalMonthlyCostEuro: 146.67, // 4600 kWh * 0.35 / 12 + 12.50
    description: 'Haushalte ab 5 Personen erreichen oft 4.500 bis über 6.000 kWh Stromverbrauch jährlich, vor allem bei intensiver Wäschepflege und mehreren TV-/Computer-Arbeitsplätzen.',
    savingTips: [
      'Großgeräte mit Energieeffizienzklasse A oder B bei Neuanschaffung bevorzugen.',
      'Zweitkühlschrank im Keller nur bei tatsächlichem Bedarf (Feiern, Sommer) einschalten.',
      'Balkonkraftwerk (Stecker-Solargerät) installieren, um die hohe Grundlast direkt tagsüber abzudecken.',
    ],
  },
};
