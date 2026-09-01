export interface KeywordTarget {
  keyword: string;
  cluster: 'stromkosten' | 'stromverbrauch' | 'kwh' | 'watt' | 'strompreis' | 'geraete' | 'waermepumpe' | 'eauto' | 'sparen' | 'stromrechnung' | 'solar';
  intent: 'informational' | 'calculator' | 'commercial' | 'transactional';
  canonicalPath: string;
  primary: boolean;
  supportingTerms: string[];
  entities: string[];
  parentCluster: string;
  cannibalizationRisk: 'low' | 'medium' | 'high';
}

export const keywords: KeywordTarget[] = [
  // Stromkosten
  {
    keyword: 'Stromkostenrechner',
    cluster: 'stromkosten',
    intent: 'calculator',
    canonicalPath: '/stromkosten-rechner',
    primary: true,
    supportingTerms: ['Stromkosten berechnen', 'Stromkosten Rechner', 'Strompreis Rechner', 'Stromkosten berechnen Watt', 'Stromkosten berechnen kWh'],
    entities: ['Watt', 'kWh', 'Arbeitspreis', 'Grundpreis', 'Stromkosten'],
    parentCluster: 'stromkosten',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Stromverbrauch berechnen',
    cluster: 'stromverbrauch',
    intent: 'calculator',
    canonicalPath: '/stromverbrauch-rechner',
    primary: true,
    supportingTerms: ['Stromverbrauchsrechner', 'Stromverbrauch Rechner', 'Verbrauch berechnen Strom'],
    entities: ['Stromverbrauch', 'Kilowattstunden', 'Haushalt', 'Geräte'],
    parentCluster: 'stromverbrauch',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'kWh Rechner',
    cluster: 'kwh',
    intent: 'calculator',
    canonicalPath: '/kwh-rechner',
    primary: true,
    supportingTerms: ['kWh in Euro', '1 kWh Kosten', 'kWh berechnen', 'kWh Kosten Rechner', '500 kWh Kosten', '1000 kWh Kosten'],
    entities: ['kWh', 'Euro', 'Kilowattstunde', 'Strompreis'],
    parentCluster: 'kwh',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Watt Rechner',
    cluster: 'watt',
    intent: 'calculator',
    canonicalPath: '/watt-rechner',
    primary: true,
    supportingTerms: ['Watt in kWh', 'Watt Stromkosten', '100 Watt Stromkosten', '500 Watt Stromkosten', '1000 Watt Stromkosten', 'Watt umrechnen'],
    entities: ['Watt', 'Kilowatt', 'kWh', 'Leistung'],
    parentCluster: 'watt',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Stromkosten pro Stunde',
    cluster: 'stromkosten',
    intent: 'calculator',
    canonicalPath: '/stromkosten-pro-stunde',
    primary: true,
    supportingTerms: ['Kosten pro Betriebsstunde', 'Stromkosten 1 Stunde', 'Was kostet eine Stunde Strom'],
    entities: ['Betriebsstunde', 'Watt', 'Kosten pro Stunde'],
    parentCluster: 'stromkosten',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Stromkosten pro Tag',
    cluster: 'stromkosten',
    intent: 'calculator',
    canonicalPath: '/stromkosten-pro-tag',
    primary: true,
    supportingTerms: ['Tageskosten Strom', 'Stromverbrauch pro Tag', 'Was kostet Strom am Tag'],
    entities: ['Tag', 'Tagesverbrauch', 'Stromkosten'],
    parentCluster: 'stromkosten',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Stromkosten pro Woche',
    cluster: 'stromkosten',
    intent: 'calculator',
    canonicalPath: '/stromkosten-pro-woche',
    primary: true,
    supportingTerms: ['Wochenkosten Strom', 'Stromverbrauch pro Woche'],
    entities: ['Woche', 'Wochenverbrauch'],
    parentCluster: 'stromkosten',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Stromkosten pro Monat',
    cluster: 'stromkosten',
    intent: 'calculator',
    canonicalPath: '/stromkosten-pro-monat',
    primary: true,
    supportingTerms: ['Monatskosten Strom', 'monatlicher Abschlag', 'Stromkosten im Monat'],
    entities: ['Monat', 'Abschlag', 'Monatliche Stromkosten'],
    parentCluster: 'stromkosten',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Stromkosten pro Jahr',
    cluster: 'stromkosten',
    intent: 'calculator',
    canonicalPath: '/stromkosten-pro-jahr',
    primary: true,
    supportingTerms: ['Jahresstromkosten', 'Stromkosten im Jahr', 'jährliche Stromkosten'],
    entities: ['Jahr', 'Jahresverbrauch', 'Jahresabrechnung'],
    parentCluster: 'stromkosten',
    cannibalizationRisk: 'low',
  },
  {
    keyword: 'Strompreis Deutschland',
    cluster: 'strompreis',
    intent: 'informational',
    canonicalPath: '/strompreis',
    primary: true,
    supportingTerms: ['Strompreis aktuell', 'Strompreis pro kWh', 'durchschnittlicher Strompreis Deutschland', 'Strompreis Zusammensetzung'],
    entities: ['Strompreis', 'Arbeitspreis', 'Grundpreis', 'Bundesnetzagentur', 'BDEW'],
    parentCluster: 'strompreis',
    cannibalizationRisk: 'low',
  },
];
