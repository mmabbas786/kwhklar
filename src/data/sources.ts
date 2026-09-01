export interface Source {
  id: string;
  name: string;
  publisher: string;
  url: string;
  accessedAt: string;
  publishedAt?: string;
  relevance: string;
  description: string;
}

export const sources: Record<string, Source> = {
  bnetza: {
    id: 'bnetza',
    name: 'Bundesnetzagentur & Bundeskartellamt Monitoringbericht',
    publisher: 'Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen',
    url: 'https://www.bundesnetzagentur.de',
    accessedAt: '2026-01-15',
    publishedAt: '2025-12-01',
    relevance: 'Offizielle Daten zu durchschnittlichen Haushaltsstrompreisen, Netzentgelten und Marktentwicklungen in Deutschland.',
    description: 'Jährlicher Marktbericht der Bundesnetzagentur zur Überwachung der Energiemärkte in Deutschland.',
  },
  smard: {
    id: 'smard',
    name: 'SMARD Strommarktdaten Deutschland',
    publisher: 'Bundesnetzagentur',
    url: 'https://www.smard.de',
    accessedAt: '2026-02-01',
    publishedAt: '2026-01-31',
    relevance: 'Großhandelspreise, Spotmarkt-Daten (Day-Ahead & Intraday) und Erneuerbare-Energien-Erzeugung.',
    description: 'Transparenzplattform der Bundesnetzagentur für Stromerzeugung, Verbrauch und Großhandelspreise.',
  },
  destatis: {
    id: 'destatis',
    name: 'Statistisches Bundesamt (Destatis) Energiepreise',
    publisher: 'Statistisches Bundesamt Deutschland',
    url: 'https://www.destatis.de',
    accessedAt: '2026-01-20',
    publishedAt: '2025-11-15',
    relevance: 'Verbraucherpreisindex für Strom, durchschnittliche Ausgaben privater Haushalte für Haushaltsenergie.',
    description: 'Amtliche Statistiken zu Energiepreisen und Lebenshaltungskosten in Deutschland.',
  },
  bdew: {
    id: 'bdew',
    name: 'BDEW Strompreisanalyse',
    publisher: 'Bundesverband der Energie- und Wasserwirtschaft e.V.',
    url: 'https://www.bdew.de',
    accessedAt: '2026-01-10',
    publishedAt: '2025-10-01',
    relevance: 'Detaillierte Zusammensetzung des Strompreises nach Steuern, Abgaben, Umlagen, Netzentgelten und Beschaffung.',
    description: 'Halbjährliche Analyse der Strompreise für Haushalte und Industrie in Deutschland.',
  },
  stromspiegel: {
    id: 'stromspiegel',
    name: 'Stromspiegel für Deutschland',
    publisher: 'co2online gemeinnützige GmbH (gefördert vom Bundesministerium für Wirtschaft und Klimaschutz)',
    url: 'https://www.stromspiegel.de',
    accessedAt: '2026-01-18',
    publishedAt: '2025-06-01',
    relevance: 'Bundesweite Vergleichswerte für den Stromverbrauch privater Haushalte nach Haushaltsgröße und Gebäudetyp.',
    description: 'Unabhängige Vergleichswerte für Stromverbrauch in Wohnungen und Einfamilienhäusern mit und ohne Warmwasserbereitung.',
  },
  uba: {
    id: 'uba',
    name: 'Umweltbundesamt (UBA) Energieeffizienz & Stromverbrauch',
    publisher: 'Umweltbundesamt',
    url: 'https://www.umweltbundesamt.de',
    accessedAt: '2026-01-25',
    publishedAt: '2025-08-15',
    relevance: 'Standby-Verluste, Energieverbrauch von Haushaltsgeräten und CO2-Emissionsfaktoren des deutschen Strommixes.',
    description: 'Leitfäden und Studien des Umweltbundesamts zur Energieeffizienz und Vermeidung von Leerlaufverlusten.',
  },
};
