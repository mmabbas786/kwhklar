export interface Appliance {
  slug: string;
  name: string;
  category: 'Küche' | 'Haushalt & Reinigung' | 'Unterhaltung & Büro' | 'Klima & Heizen' | 'Hobby & Spezial';
  icon: string;
  typicalWattage: number;
  wattageMin: number;
  wattageMax: number;
  typicalUsageHours: number; // daily hours
  typicalAnnualKwh: number;
  annualCostEuro: number; // with 35ct/kWh
  usageContext: string;
  calculationDefaults: {
    watt: number;
    hoursPerDay: number;
  };
  shortDescription: string;
  dutyCycleExplanation: string;
  measurementTips: string;
  savingAdvice: string[];
  factors: string[];
  faq: { question: string; answer: string }[];
  sourceIds: string[];
  relatedDevices: string[];
  relatedCalculators: string[];
}

export const appliances: Record<string, Appliance> = {
  kuehlschrank: {
    slug: 'kuehlschrank',
    name: 'Kühlschrank',
    category: 'Küche',
    icon: '❄️',
    typicalWattage: 90,
    wattageMin: 50,
    wattageMax: 160,
    typicalUsageHours: 24, // runs 24h with ~30% compressor duty cycle = ~8h effective
    typicalAnnualKwh: 120, // Modern A-class: 100-140 kWh, older: 250-350 kWh
    annualCostEuro: 42.0,
    usageContext: '24 Stunden Dauerbetrieb (Kompressor taktet bei ca. 30–40 % Einschaltdauer)',
    calculationDefaults: {
      watt: 40, // effective continuous average (or 100W with 8h compressor runtime)
      hoursPerDay: 24,
    },
    shortDescription: 'Ein moderner Kühlschrank (Klasse A–C) verbraucht ca. 100 bis 160 kWh pro Jahr (ca. 35 bis 56 €). Ältere Geräte oder Kühl-Gefrierkombinationen benötigen oft 250 bis 350 kWh.',
    dutyCycleExplanation: 'Ein Kühlschrank läuft zwar rund um die Uhr, der stromintensive Kompressor schaltet sich jedoch thermostatgesteuert nur etwa 20 bis 40 Minuten pro Stunde ein.',
    measurementTips: 'Stecke ein digitales Strommessgerät für mindestens 24 bis 48 Stunden zwischen Steckdose und Kühlschrank, da der Kompressor getaktet arbeitet.',
    savingAdvice: [
      'Optimale Temperatur wählen: 7 °C im Kühlraum reichen völlig aus (jedes Grad kälter kostet ca. 6 % mehr Strom).',
      'Regelmäßig abtauen: Eine 5 mm dicke Eisschicht im Eisfach steigert den Stromverbrauch um bis zu 30 %.',
      'Dichtungen prüfen: Eine undichte Türdichtung lässt warme Luft einströmen und zwingt den Kompressor zum Dauerlauf.',
      'Warme Speisen erst auf Raumtemperatur abkühlen lassen, bevor sie in den Kühlschrank gestellt werden.',
    ],
    factors: ['Energieeffizienzklasse', 'Nutzinhalt & Gefrierfach', 'Umgebungstemperatur', 'Öffnungshäufigkeit der Tür'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Kühlschrank pro Stunde, Tag und Jahr?",
            "answer": "Ein Kühlschrank hat eine typische Leistungsaufnahme von ca. 90 Watt. Im laufenden Betrieb verbraucht er ca. 0.090 kWh pro Stunde (ca. 0.01 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 120 kWh (42.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Kühlschrank pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,12 € / Tag. Pro Monat entspricht das etwa 3.50 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Kühlschrank am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Kühlschrank Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Kühlschrank gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bnetza', 'stromspiegel', 'uba'],
    relatedDevices: ['gefrierschrank', 'geschirrspueler', 'backofen'],
    relatedCalculators: ['/stromkosten-rechner', '/kwh-rechner', '/watt-rechner'],
  },
  waschmaschine: {
    slug: 'waschmaschine',
    name: 'Waschmaschine',
    category: 'Haushalt & Reinigung',
    icon: '🧺',
    typicalWattage: 2000,
    wattageMin: 1500,
    wattageMax: 2400,
    typicalUsageHours: 0.8, // ~4 cycles per week = ~0.6-0.8h/day
    typicalAnnualKwh: 140, // ~180-220 cycles @ 0.65 kWh
    annualCostEuro: 49.0,
    usageContext: 'Ca. 3–4 Waschgänge pro Woche (je nach Temperatur 0,4 bis 1,2 kWh pro Waschgang)',
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 0.2, // ~1h every 5 days or equivalent
    },
    shortDescription: 'Eine moderne Waschmaschine benötigt pro Waschgang bei 40 °C Eco ca. 0,5 bis 0,7 kWh (ca. 18–25 Cent). Bei 200 Waschgängen im Jahr entstehen Stromkosten von ca. 40 bis 60 €.',
    dutyCycleExplanation: 'Der Hauptstromverbraucher ist der Heizstab, der das Wasser erwärmt (zieht ca. 1.800–2.200 W während der ersten 15–25 Minuten). Das Schleudern und Drehen der Trommel benötigt nur 100–300 Watt.',
    measurementTips: 'Messe den Stromverbrauch eines kompletten Waschzyklus mit Vorwäsche, Hauptwäsche und Schleudern über ein Zwischensteck-Messgerät.',
    savingAdvice: [
      'Eco-Programm nutzen: Dauert länger, spart aber bis zu 40 % Strom, da das Wasser langsamer und schonender erwärmt wird.',
      '30 °C oder 40 °C statt 60 °C waschen: Reicht für normale Alltagskleidung vollkommen aus und halbiert den Stromverbrauch fast.',
      'Trommel optimal füllen: Zwei halbe Waschladungen verbrauchen mehr Strom und Wasser als eine volle Maschine.',
    ],
    factors: ['Gewählte Waschtemperatur', 'Beladungsmenge', 'Nutzung des Eco-Modus', 'Schleuderdrehzahl'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Waschmaschine pro Stunde, Tag und Jahr?",
            "answer": "Ein Waschmaschine hat eine typische Leistungsaufnahme von ca. 2000 Watt. Im laufenden Betrieb verbraucht er ca. 2.000 kWh pro Stunde (ca. 0.70 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 140 kWh (49.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Waschmaschine pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,25 € / Waschgang. Pro Monat entspricht das etwa 4.08 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Waschmaschine am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Waschmaschine Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Waschmaschine gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bdew', 'stromspiegel', 'uba'],
    relatedDevices: ['trockner', 'geschirrspueler', 'buegeleisen'],
    relatedCalculators: ['/stromkosten-rechner', '/stromverbrauch-rechner'],
  },
  trockner: {
    slug: 'trockner',
    name: 'Wäschetrockner',
    category: 'Haushalt & Reinigung',
    icon: '🌀',
    typicalWattage: 900, // Wärmepumpentrockner (Kondenstrockner: 2500W)
    wattageMin: 600,
    wattageMax: 2800,
    typicalUsageHours: 0.6,
    typicalAnnualKwh: 200, // Wärmepumpe: ~160 kWh, Kondenstrockner: ~450 kWh
    annualCostEuro: 70.0,
    usageContext: '120 bis 160 Trocknungsgänge pro Jahr',
    calculationDefaults: {
      watt: 800,
      hoursPerDay: 0.7,
    },
    shortDescription: 'Ein moderner Wärmepumpentrockner verbraucht pro Ladung ca. 1,2 bis 1,6 kWh (ca. 45–56 Cent). Ein alter Kondenstrockner benötigt mit 3,5 bis 4,5 kWh mehr als das Doppelte.',
    dutyCycleExplanation: 'Wärmepumpentrockner nutzen die Abwärme des Trocknungsprozesses mehrfach und arbeiten mit niedriger Anschlussleistung, während klassische Kondenstrockner rein elektrisch heizen.',
    measurementTips: 'Messe den Verbrauch eines vollständigen Trockenzyklus (schranktrocken) mit normal beladener Trommel.',
    savingAdvice: [
      'Wäsche vorher mit mindestens 1.200 oder 1.400 U/min schleudern – je trockener die Wäsche in den Trockner kommt, desto kürzer läuft er.',
      'Flusensieb nach jedem Durchgang reinigen, um den Luftstrom optimal zu halten.',
      'Im Frühjahr und Sommer die Wäscheleine oder den Wäscheständer an der frischen Luft nutzen (0 € Stromkosten).',
    ],
    factors: ['Trocknertechnologie (Wärmepumpe vs. Kondenstrockner)', 'Restfeuchte der Wäsche', 'Trockengrad (bügelfeucht vs. extra-trocken)'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Wäschetrockner pro Stunde, Tag und Jahr?",
            "answer": "Ein Wäschetrockner hat eine typische Leistungsaufnahme von ca. 1500 Watt. Im laufenden Betrieb verbraucht er ca. 1.500 kWh pro Stunde (ca. 0.53 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 180 kWh (63.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Wäschetrockner pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,45 € / Ladung. Pro Monat entspricht das etwa 5.25 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Wäschetrockner am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Wäschetrockner Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Wäschetrockner gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['stromspiegel', 'uba'],
    relatedDevices: ['waschmaschine', 'geschirrspueler'],
    relatedCalculators: ['/stromkosten-rechner', '/stromkosten-pro-jahr'],
  },
  geschirrspueler: {
    slug: 'geschirrspueler',
    name: 'Geschirrspüler',
    category: 'Küche',
    icon: '🍽️',
    typicalWattage: 2000,
    wattageMin: 1800,
    wattageMax: 2400,
    typicalUsageHours: 0.5,
    typicalAnnualKwh: 170, // 200 Spülgänge à 0.85 kWh
    annualCostEuro: 59.5,
    usageContext: 'Ca. 4–5 Spülgänge pro Woche',
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 0.25,
    },
    shortDescription: 'Ein moderner Geschirrspüler verbraucht im Eco-Programm ca. 0,7 bis 0,9 kWh pro Spülgang (ca. 25–32 Cent) und ist damit sparsamer als das Spülen von Hand unter fließendem Warmwasser.',
    dutyCycleExplanation: 'Der meiste Strom wird in der Aufheizphase des Wassers benötigt. Die Umwälzpumpe läuft während des gesamten Spülgangs mit moderaten 50 bis 100 Watt.',
    measurementTips: 'Zwischensteckdose für 2–3 typische Spülgänge mit verschiedenen Programmen (Auto, Eco, Intensiv) laufen lassen.',
    savingAdvice: [
      'Standardmäßig das Eco-50°C-Programm wählen.',
      'Geschirr nicht unter warmem Wasser von Hand vorspülen (Speisereste einfach trocken abstreifen).',
      'Geschirrspüler immer voll beladen starten.',
    ],
    factors: ['Programmwahl (Eco vs. Intensiv 70°C)', 'Wasserhärte & Dosierung', 'Warmwasser-Direktanschluss vorhanden'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Geschirrspüler pro Stunde, Tag und Jahr?",
            "answer": "Ein Geschirrspüler hat eine typische Leistungsaufnahme von ca. 1800 Watt. Im laufenden Betrieb verbraucht er ca. 1.800 kWh pro Stunde (ca. 0.63 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 160 kWh (56.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Geschirrspüler pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,28 € / Spülgang. Pro Monat entspricht das etwa 4.67 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Geschirrspüler am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Geschirrspüler Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Geschirrspüler gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['stromspiegel', 'bdew'],
    relatedDevices: ['kuehlschrank', 'backofen', 'wasserkocher'],
    relatedCalculators: ['/stromkosten-rechner', '/kwh-rechner'],
  },
  backofen: {
    slug: 'backofen',
    name: 'Backofen',
    category: 'Küche',
    icon: '🥧',
    typicalWattage: 2500,
    wattageMin: 1800,
    wattageMax: 3500,
    typicalUsageHours: 0.4,
    typicalAnnualKwh: 150,
    annualCostEuro: 52.5,
    usageContext: '1–2 Mal wöchentlich für ca. 45–60 Minuten',
    calculationDefaults: {
      watt: 2200,
      hoursPerDay: 0.2,
    },
    shortDescription: 'Ein Backofen verbraucht bei 200 °C Umluft ca. 0,8 bis 1,2 kWh pro Stunde (ca. 28–42 Cent). Bei Ober-/Unterhitze liegt der Verbrauch ca. 15–20 % höher.',
    dutyCycleExplanation: 'Beim Vorheizen heizt der Ofen unter Volllast. Sobald die Zieltemperatur erreicht ist, schaltet das Thermostat die Heizelemente nur noch intervallweise ein.',
    measurementTips: 'Backöfen sind meist fest angeschlossen; der Stromverbrauch lässt sich über die Leistungsangaben im Datenblatt oder den Hauptzähler ermitteln.',
    savingAdvice: [
      'Umluft statt Ober-/Unterhitze nutzen (ermöglicht 20–30 °C geringere Backtemperatur).',
      'Auf unnötiges Vorheizen verzichten, außer bei temperaturempfindlichen Teigen wie Biskuit.',
      'Restwärme nutzen und den Ofen 5–10 Minuten vor Ende der Garzeit ausschalten.',
    ],
    factors: ['Heizart (Umluft vs. Ober-/Unterhitze)', 'Temperatur', 'Öffnen der Ofentür während des Backens'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Backofen pro Stunde, Tag und Jahr?",
            "answer": "Ein Backofen hat eine typische Leistungsaufnahme von ca. 2500 Watt. Im laufenden Betrieb verbraucht er ca. 2.500 kWh pro Stunde (ca. 0.88 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 150 kWh (52.50 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Backofen pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,55 € / Nutzung. Pro Monat entspricht das etwa 4.38 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Backofen am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Backofen Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Backofen gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bdew', 'uba'],
    relatedDevices: ['herd', 'mikrowelle', 'geschirrspueler'],
    relatedCalculators: ['/stromkosten-pro-stunde', '/stromkosten-rechner'],
  },
  herd: {
    slug: 'herd',
    name: 'Elektroherd / Induktionsherd',
    category: 'Küche',
    icon: '🍳',
    typicalWattage: 3000,
    wattageMin: 1200,
    wattageMax: 7200,
    typicalUsageHours: 0.5,
    typicalAnnualKwh: 250,
    annualCostEuro: 87.5,
    usageContext: 'Tägliches Kochen auf 1–2 Kochfeldern für ca. 30–45 Minuten',
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 0.5,
    },
    shortDescription: 'Beim Kochen auf dem Elektro- oder Induktionsherd entstehen ca. 0,7 bis 1,2 kWh Stromverbrauch pro Tag (ca. 25–42 Cent). Induktionskochfelder sind ca. 20–30 % effizienter als klassische Massekochfelder.',
    dutyCycleExplanation: 'Eine einzelne Herdplatte zieht zwischen 1.200 und 2.500 Watt (Power-Stufe bis 3.500 W). Sobald Wasser kocht, wird auf eine kleinere Stufe mit getakteter Leistungsabgabe zurückgeschaltet.',
    measurementTips: 'Aufgrund des Starkstromanschlusses kann der Verbrauch über den Hausstromzähler vor und nach dem Kochen gemessen werden.',
    savingAdvice: [
      'Immer mit passendem Deckel kochen (spart bis zu 65 % Energie).',
      'Topfgröße passend zum Kochfeld wählen.',
      'Wasser im Wasserkocher vorkochen statt kalt auf dem Herd zu erhitzen.',
    ],
    factors: ['Induktion vs. Ceran/Gusseisen', 'Topfbodenqualität', 'Nutzung von Topfdeckeln'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Induktionsherd / Kochfeld pro Stunde, Tag und Jahr?",
            "answer": "Ein Induktionsherd / Kochfeld hat eine typische Leistungsaufnahme von ca. 3000 Watt. Im laufenden Betrieb verbraucht er ca. 3.000 kWh pro Stunde (ca. 1.05 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 220 kWh (77.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Induktionsherd / Kochfeld pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,35 € / Kochvorgang. Pro Monat entspricht das etwa 6.42 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Induktionsherd / Kochfeld am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Induktionsherd / Kochfeld Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Induktionsherd / Kochfeld gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bdew', 'uba'],
    relatedDevices: ['backofen', 'wasserkocher', 'mikrowelle'],
    relatedCalculators: ['/stromkosten-rechner', '/watt-rechner'],
  },
  wasserkocher: {
    slug: 'wasserkocher',
    name: 'Wasserkocher',
    category: 'Küche',
    icon: '🫖',
    typicalWattage: 2200,
    wattageMin: 1800,
    wattageMax: 3000,
    typicalUsageHours: 0.1, // ~6 minutes daily
    typicalAnnualKwh: 75,
    annualCostEuro: 26.25,
    usageContext: '3–4 Kochvorgänge à 1 Liter pro Tag (ca. 0,1 kWh pro Liter)',
    calculationDefaults: {
      watt: 2200,
      hoursPerDay: 0.1,
    },
    shortDescription: '1 Liter Wasser im Wasserkocher zum Kochen zu bringen benötigt ca. 0,1 kWh Strom (ca. 3,5 Cent). Das ist die energieeffizienteste Methode, um Wasser im Haushalt zu erhitzen.',
    dutyCycleExplanation: 'Wasserkocher arbeiten mit hoher Leistung (2.000–3.000 Watt), benötigen aber nur 2,5 bis 3,5 Minuten, um das Wasser zum Sieden zu bringen.',
    measurementTips: 'Mit einem Zwischensteckzähler den exakten Verbrauch für 1 Liter Wasser ermitteln.',
    savingAdvice: [
      'Nur die tatsächlich benötigte Wassermenge einfüllen (Skala am Wasserkocher beachten).',
      'Regelmäßig mit Essig oder Zitronensäure entkalken: Kalkablagerungen auf dem Heizelement verlängern die Kochzeit.',
    ],
    factors: ['Wassermenge', 'Ausgangstemperatur des Wassers', 'Verkalkungsgrad'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Wasserkocher pro Stunde, Tag und Jahr?",
            "answer": "Ein Wasserkocher hat eine typische Leistungsaufnahme von ca. 2200 Watt. Im laufenden Betrieb verbraucht er ca. 2.200 kWh pro Stunde (ca. 0.77 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 80 kWh (28.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Wasserkocher pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,03 € / 1 Liter Kochen. Pro Monat entspricht das etwa 2.33 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Wasserkocher am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Wasserkocher Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Wasserkocher gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'stromspiegel'],
    relatedDevices: ['kaffeemaschine', 'herd', 'mikrowelle'],
    relatedCalculators: ['/watt-rechner', '/stromkosten-pro-stunde'],
  },
  kaffeemaschine: {
    slug: 'kaffeemaschine',
    name: 'Kaffeemaschine / Kaffeevollautomat',
    category: 'Küche',
    icon: '☕',
    typicalWattage: 1450,
    wattageMin: 1000,
    wattageMax: 1800,
    typicalUsageHours: 0.3,
    typicalAnnualKwh: 110,
    annualCostEuro: 38.5,
    usageContext: 'Täglich ca. 4–6 Tassen Kaffee inklusive Vorheizen, Spülen und Warmhaltefunktion',
    calculationDefaults: {
      watt: 1400,
      hoursPerDay: 0.25,
    },
    shortDescription: 'Ein Kaffeevollautomat verbraucht pro Tasse ca. 0,015 bis 0,03 kWh Strom. Über das Jahr summiert sich der Verbrauch inklusive Standby und Aufheizphasen auf ca. 80 bis 140 kWh (28–49 €).',
    dutyCycleExplanation: 'Der Durchlauferhitzer heizt während des Brühvorgangs mit voller Leistung. Im Bereitschaftsmodus hält das Thermoblock-System die Temperatur mit geringer Dauerleistung aufrecht.',
    measurementTips: 'Ermittle den 24h-Verbrauch des Vollautomaten mit einem Messgerät, um den Standby-Anteil zu erfassen.',
    savingAdvice: [
      'Automatische Abschaltung (Auto-Off) auf 15 oder 30 Minuten nach dem letzten Bezug einstellen.',
      'Gerät regelmäßig entkalken.',
      'Bei Filterkaffeemaschinen die Warmhalteplatte ausschalten und den Kaffee in eine Isolierkanne umfüllen.',
    ],
    factors: ['Gerätetyp (Filter, Siebträger, Kapsel, Vollautomat)', 'Tassen pro Tag', 'Abschaltautomatik aktiviert'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Kaffeemaschine / Vollautomat pro Stunde, Tag und Jahr?",
            "answer": "Ein Kaffeemaschine / Vollautomat hat eine typische Leistungsaufnahme von ca. 1400 Watt. Im laufenden Betrieb verbraucht er ca. 1.400 kWh pro Stunde (ca. 0.49 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 65 kWh (22.75 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Kaffeemaschine / Vollautomat pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,02 € / Tasse Kaffee. Pro Monat entspricht das etwa 1.90 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Kaffeemaschine / Vollautomat am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Kaffeemaschine / Vollautomat Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Kaffeemaschine / Vollautomat gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'stromspiegel'],
    relatedDevices: ['wasserkocher', 'kuehlschrank'],
    relatedCalculators: ['/stromkosten-rechner', '/kwh-rechner'],
  },
  fernseher: {
    slug: 'fernseher',
    name: 'Fernseher / Smart TV',
    category: 'Unterhaltung & Büro',
    icon: '📺',
    typicalWattage: 120, // 55-65 Zoll OLED/QLED
    wattageMin: 50,
    wattageMax: 280,
    typicalUsageHours: 4,
    typicalAnnualKwh: 175,
    annualCostEuro: 61.25,
    usageContext: 'Ca. 3–4 Stunden Fernsehen oder Streaming pro Tag',
    calculationDefaults: {
      watt: 120,
      hoursPerDay: 4,
    },
    shortDescription: 'Ein 55- bis 65-Zoll-Fernseher verbraucht im Betrieb ca. 80 bis 180 Watt (bei HDR-Inhalten bis zu 220 Watt). Bei 4 Stunden täglicher Nutzung kostet das ca. 50 bis 80 € pro Jahr.',
    dutyCycleExplanation: 'LED-, OLED- und QLED-Displays verbrauchen kontinuierlich Strom; die Helligkeit und der HDR-Modus beeinflussen den Verbrauch um bis zu 50 %.',
    measurementTips: 'Messe bei typischer Raumhelligkeit mit deinem Standard-Bildmodus (Standard/Kino vs. Dynamisch).',
    savingAdvice: [
      'Bildmodus auf „Kino“, „Film“ oder „Eco“ stellen statt des überstrahlten „Dynamisch“-Modus (spart 20–35 % Strom).',
      'HDR-Helligkeit bei normalem Fernsehen reduzieren.',
      'Schnellstart-Modus / Netzwerk-Standby im Menü deaktivieren, falls nicht zwingend benötigt.',
    ],
    factors: ['Bildschirmdiagonale (55", 65", 75"+)', 'Panel-Technologie (OLED, QLED, LED)', 'HDR vs. SDR', 'Hintergrundbeleuchtung'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Fernseher (Smart TV 55-65\") pro Stunde, Tag und Jahr?",
            "answer": "Ein Fernseher (Smart TV 55-65\") hat eine typische Leistungsaufnahme von ca. 120 Watt. Im laufenden Betrieb verbraucht er ca. 0.120 kWh pro Stunde (ca. 0.04 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 175 kWh (61.25 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Fernseher (Smart TV 55-65\") pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,17 € / 4 Stunden. Pro Monat entspricht das etwa 5.10 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Fernseher (Smart TV 55-65\") am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Fernseher (Smart TV 55-65\") Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Fernseher (Smart TV 55-65\") gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'stromspiegel'],
    relatedDevices: ['ps5', 'xbox', 'gaming-pc', 'soundbar'],
    relatedCalculators: ['/stromkosten-pro-stunde', '/stromkosten-rechner'],
  },
  'gaming-pc': {
    slug: 'gaming-pc',
    name: 'Gaming-PC',
    category: 'Unterhaltung & Büro',
    icon: '🎮',
    typicalWattage: 400, // Gaming load (GPU + CPU + RGB + Fan)
    wattageMin: 200,
    wattageMax: 750,
    typicalUsageHours: 4,
    typicalAnnualKwh: 584,
    annualCostEuro: 204.4,
    usageContext: '3–4 Stunden intensives Gaming pro Tag bei 350–500 Watt Systemlast',
    calculationDefaults: {
      watt: 400,
      hoursPerDay: 4,
    },
    shortDescription: 'Ein moderner Gaming-PC (z.B. RTX 4070/4080 + Ryzen 7 / Core i7) zieht unter Volllast ca. 350 bis 550 Watt aus der Steckdose. Bei 4 Stunden täglichem Zocken entstehen Stromkosten von ca. 180 bis 280 € im Jahr.',
    dutyCycleExplanation: 'Im Leerlauf (Desktop) verbraucht das System ca. 50–80 Watt, bei rechenintensiven 3D-Spielen steigt der Verbrauch sprunghaft auf 300 bis 600+ Watt an.',
    measurementTips: 'Messe mit einem Strommessgerät über eine Gaming-Session hinweg den Durchschnitts- und Spitzenverbrauch.',
    savingAdvice: [
      'FPS-Begrenzung (Framerate Cap) im Treiber aktivieren (z.B. auf die Monitor-Refreshrate von 144 Hz)',
      'Grafikkarte leicht undervolten: spart oft 50–100 Watt bei identischer Performance.',
      'PC nach dem Spielen in den Energiesparmodus versetzen oder herunterfahren statt im Menü laufen zu lassen.',
    ],
    factors: ['Grafikkarte (GPU) & Prozessor (CPU)', 'Monitor-Auflösung & Detailstufe', 'FPS-Begrenzer aktiv', 'RGB-Beleuchtung & Lüfter'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Gaming-PC (High-End) im Durchschnitt pro Jahr?",
            "answer": "Ein moderner Gaming-PC (High-End) verbraucht im Schnitt ca. 490 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 171,50 Euro."
      },
      {
            "question": "Was kostet 1 Stunde Betrieb von Gaming-PC (High-End)?",
            "answer": "Bei einer durchschnittlichen Leistung von ca. 450 Watt kostet eine Stunde Laufzeit rund 0,158 € (ca. 15,8 Cent)."
      },
      {
            "question": "Wie hoch sind die monatlichen Stromkosten für Gaming-PC (High-End)?",
            "answer": "Die monatlichen Stromkosten für Gaming-PC (High-End) liegen bei durchschnittlicher Nutzung bei ca. 14,29 € pro Monat."
      },
      {
            "question": "Wie viel Watt Leistung hat ein typischer Gaming-PC (High-End)?",
            "answer": "Die typische Anschlussleistung liegt bei ca. 450 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 315 W und 675 W schwanken."
      },
      {
            "question": "Was kostet ein einzelner Nutzungsvorgang von Gaming-PC (High-End)?",
            "answer": "Ein typischer Einsatz von Gaming-PC (High-End) verursacht Stromkosten von ca. 0,47 € / Session (3h)."
      },
      {
            "question": "Wie kann man den Stromverbrauch von Gaming-PC (High-End) sofort um 15–25 % senken?",
            "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
            "question": "Verbraucht Gaming-PC (High-End) auch Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
            "question": "Lohnt sich der Neukauf eines energieeffizienten Gaming-PC (High-End)?",
            "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
            "question": "Wie berechne ich den Stromverbrauch von Gaming-PC (High-End) exakt selbst?",
            "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 450 W × 1 h ÷ 1.000 × 0,35 € = 0,158 €."
      },
      {
            "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Gaming-PC (High-End)?",
            "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
],
    sourceIds: ['uba', 'bnetza'],
    relatedDevices: ['pc', 'monitor', 'ps5', 'xbox', 'laptop'],
    relatedCalculators: ['/stromkosten-rechner', '/stromkosten-pro-stunde', '/watt-rechner'],
  },
  pc: {
    slug: 'pc',
    name: 'Office-PC / Desktop-Computer',
    category: 'Unterhaltung & Büro',
    icon: '🖥️',
    typicalWattage: 90,
    wattageMin: 40,
    wattageMax: 180,
    typicalUsageHours: 8,
    typicalAnnualKwh: 260,
    annualCostEuro: 91.0,
    usageContext: '8 Stunden Homeoffice oder Büroarbeit pro Werktag',
    calculationDefaults: {
      watt: 90,
      hoursPerDay: 8,
    },
    shortDescription: 'Ein klassischer Desktop-Office-PC verbraucht beim Arbeiten ca. 60 bis 120 Watt (ohne Monitor). Bei 8 Stunden Homeoffice pro Tag kostet das ca. 60 bis 100 € pro Jahr.',
    dutyCycleExplanation: 'Office-Anwendungen (Browser, Office, E-Mail) fordern moderne Mehrkern-Prozessoren kaum, sodass der PC die meiste Zeit in energieeffizienten Low-Power-States arbeitet.',
    measurementTips: 'Messe PC und Monitor zusammen an einer gemeinsamen Mehrfachsteckdose über einen ganzen Arbeitstag.',
    savingAdvice: [
      'Energiesparplan „Ausbalanciert“ in Windows oder macOS nutzen.',
      'Bildschirm-Standby nach 10 Minuten Inaktivität einstellen.',
      'Für reine Office-Arbeit auf einen sparsamen Mini-PC oder ein Laptop umsteigen.',
    ],
    factors: ['Integrierte vs. dedizierte Grafikkarte', 'Netzteil-Effizienzklasse (80 Plus Gold/Platinum)', 'Anzahl der Bildschirme'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Desktop-PC / Office-Rechner pro Stunde, Tag und Jahr?",
            "answer": "Ein Desktop-PC / Office-Rechner hat eine typische Leistungsaufnahme von ca. 120 Watt. Im laufenden Betrieb verbraucht er ca. 0.120 kWh pro Stunde (ca. 0.04 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 180 kWh (63.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Desktop-PC / Office-Rechner pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,25 € / 6 Stunden Arbeit. Pro Monat entspricht das etwa 5.25 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Desktop-PC / Office-Rechner am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Desktop-PC / Office-Rechner Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Desktop-PC / Office-Rechner gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'stromspiegel'],
    relatedDevices: ['laptop', 'monitor', 'gaming-pc', 'nas'],
    relatedCalculators: ['/stromkosten-rechner', '/stromkosten-pro-monat'],
  },
  laptop: {
    slug: 'laptop',
    name: 'Laptop / Notebook',
    category: 'Unterhaltung & Büro',
    icon: '💻',
    typicalWattage: 40,
    wattageMin: 15,
    wattageMax: 90,
    typicalUsageHours: 8,
    typicalAnnualKwh: 115,
    annualCostEuro: 40.25,
    usageContext: '8 Stunden tägliche Nutzung im Homeoffice oder Studium',
    calculationDefaults: {
      watt: 40,
      hoursPerDay: 8,
    },
    shortDescription: 'Ein Laptop verbraucht im Office-Betrieb lediglich 20 bis 50 Watt und ist damit um das 3- bis 5-Fache sparsamer als ein herkömmlicher Desktop-PC.',
    dutyCycleExplanation: 'Laptops sind von Grund auf auf maximale Akkulaufzeit und Energieeffizienz getrimmt (sparsame Mobilprozessoren und LED-Panels).',
    measurementTips: 'Das Netzteil an ein Strommessgerät anschließen und über einen Arbeitszyklus (inkl. Laden) messen.',
    savingAdvice: [
      'Bildschirmhelligkeit an die Umgebungsbeleuchtung anpassen.',
      'Nicht genutzte Peripheriegeräte (externe Festplatten, RGB-Zubehör) trennen.',
      'Netzteil nach vollständigem Laden vom Strom trennen, wenn das Laptop nicht genutzt wird.',
    ],
    factors: ['Displayhelligkeit', 'Office-Betrieb vs. Videobearbeitung/Rendering', 'Effizienz des Netzteils'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Laptop / Notebook pro Stunde, Tag und Jahr?",
            "answer": "Ein Laptop / Notebook hat eine typische Leistungsaufnahme von ca. 50 Watt. Im laufenden Betrieb verbraucht er ca. 0.050 kWh pro Stunde (ca. 0.02 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 75 kWh (26.25 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Laptop / Notebook pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,11 € / 6 Stunden Arbeit. Pro Monat entspricht das etwa 2.19 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Laptop / Notebook am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Laptop / Notebook Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Laptop / Notebook gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'stromspiegel'],
    relatedDevices: ['pc', 'monitor', 'gaming-pc'],
    relatedCalculators: ['/stromkosten-rechner', '/watt-rechner'],
  },
  monitor: {
    slug: 'monitor',
    name: 'Monitor / PC-Bildschirm',
    category: 'Unterhaltung & Büro',
    icon: '🖥️',
    typicalWattage: 35, // 27" 1440p
    wattageMin: 18,
    wattageMax: 90,
    typicalUsageHours: 8,
    typicalAnnualKwh: 100,
    annualCostEuro: 35.0,
    usageContext: '8 Stunden Homeoffice oder Gaming pro Tag',
    calculationDefaults: {
      watt: 35,
      hoursPerDay: 8,
    },
    shortDescription: 'Ein Standard-27-Zoll-Monitor verbraucht ca. 25 bis 45 Watt. Große Ultra-Wide- oder 4K-Bildschirme mit hoher Bildwiederholrate benötigen 50 bis 80 Watt.',
    dutyCycleExplanation: 'Die Leistungsaufnahme eines Monitors hängt fast ausschließlich von der eingestellten Hintergrundbeleuchtung (Backlight) und der Bildwiederholfrequenz (Hz) ab.',
    measurementTips: 'Messe die Leistungsaufnahme bei verschiedenen Helligkeitsstufen (z.B. 100 % vs. 50 %).',
    savingAdvice: [
      'Helligkeit von 100 % auf angenehme 40–60 % senken (spart bis zu 40 % Strom und schont die Augen).',
      'Automatischen Standby nach 5–10 Minuten Inaktivität im Betriebssystem aktivieren.',
    ],
    factors: ['Bildschirmdiagonale & Auflösung (Full HD vs. 4K)', 'Helligkeitseinstellung', 'Bildwiederholfrequenz (60 Hz vs. 144 Hz)'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein PC-Monitor (27-32\") pro Stunde, Tag und Jahr?",
            "answer": "Ein PC-Monitor (27-32\") hat eine typische Leistungsaufnahme von ca. 35 Watt. Im laufenden Betrieb verbraucht er ca. 0.035 kWh pro Stunde (ca. 0.01 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 60 kWh (21.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von PC-Monitor (27-32\") pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,07 € / 6 Stunden Betrieb. Pro Monat entspricht das etwa 1.75 € Stromkosten."
      },
      {
            "question": "Wie kann man beim PC-Monitor (27-32\") am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein PC-Monitor (27-32\") Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten PC-Monitor (27-32\") gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba'],
    relatedDevices: ['pc', 'gaming-pc', 'laptop'],
    relatedCalculators: ['/stromkosten-pro-stunde', '/watt-rechner'],
  },
  ps5: {
    slug: 'ps5',
    name: 'PlayStation 5 (PS5)',
    category: 'Unterhaltung & Büro',
    icon: '🕹️',
    typicalWattage: 200,
    wattageMin: 70,
    wattageMax: 230,
    typicalUsageHours: 3,
    typicalAnnualKwh: 219,
    annualCostEuro: 76.65,
    usageContext: '3 Stunden Gaming pro Tag bei ca. 180–210 Watt Leistungsaufnahme',
    calculationDefaults: {
      watt: 200,
      hoursPerDay: 3,
    },
    shortDescription: 'Die PlayStation 5 verbraucht beim Spielen moderner PS5-Titel ca. 180 bis 220 Watt. Bei 3 Stunden täglicher Spielzeit entstehen jährliche Stromkosten von ca. 70 bis 85 €.',
    dutyCycleExplanation: 'Im Hauptmenü verbraucht die PS5 ca. 50 Watt, beim Video-Streaming ca. 70 Watt und bei grafisch aufwendigen Spielen mit Raytracing bis zu 220 Watt.',
    measurementTips: 'Zwischensteckdose vor die Konsole schalten und während des Spielens ablesen.',
    savingAdvice: [
      'Video-Streaming (Netflix, YouTube) lieber über die TV-App statt über die PS5 laufen lassen (TV-App benötigt nur 5–10 W extra statt 70 W).',
      'Ruhezustand (Rest Mode) so konfigurieren, dass USB-Ports nach 3 Stunden Stromzufuhr abschalten.',
    ],
    factors: ['Gespieltes Spiel (PS4 vs. anspruchsvolle PS5-Titel mit Raytracing)', 'Video-Streaming vs. Gaming', 'Ruhezustand-Einstellungen'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein PlayStation 5 (PS5) pro Stunde, Tag und Jahr?",
            "answer": "Ein PlayStation 5 (PS5) hat eine typische Leistungsaufnahme von ca. 200 Watt. Im laufenden Betrieb verbraucht er ca. 0.200 kWh pro Stunde (ca. 0.07 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 150 kWh (52.50 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von PlayStation 5 (PS5) pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,21 € / 3 Stunden Spielen. Pro Monat entspricht das etwa 4.38 € Stromkosten."
      },
      {
            "question": "Wie kann man beim PlayStation 5 (PS5) am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein PlayStation 5 (PS5) Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten PlayStation 5 (PS5) gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba'],
    relatedDevices: ['xbox', 'gaming-pc', 'fernseher'],
    relatedCalculators: ['/stromkosten-rechner', '/watt-rechner'],
  },
  xbox: {
    slug: 'xbox',
    name: 'Xbox Series X / Series S',
    category: 'Unterhaltung & Büro',
    icon: '🎮',
    typicalWattage: 180, // Series X ~180W, Series S ~80W
    wattageMin: 60,
    wattageMax: 210,
    typicalUsageHours: 3,
    typicalAnnualKwh: 197,
    annualCostEuro: 69.0,
    usageContext: '3 Stunden tägliches Gaming',
    calculationDefaults: {
      watt: 180,
      hoursPerDay: 3,
    },
    shortDescription: 'Die Xbox Series X verbraucht beim Gaming ca. 160 bis 200 Watt, die kompaktere Series S begnügt sich mit ca. 70 bis 90 Watt.',
    dutyCycleExplanation: 'Ähnlich wie bei PCs skaliert die Leistungsaufnahme mit der grafischen Auslastung des Spiels.',
    measurementTips: 'Verbrauch während einer typischen Spielrunde mit einem Energiekosten-Messgerät ermitteln.',
    savingAdvice: [
      'Energieoptionen: „Herunterfahren (Energiesparmodus)“ wählen statt „Sofort einsatzbereit / Instant-On“ (spart ca. 10–13 Watt Dauer-Standby = ca. 35 €/Jahr).',
    ],
    factors: ['Modell (Series X vs. Series S)', 'Instant-On Standby Modus aktiviert', 'Grafikmodus (Performance vs. Quality)'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Xbox Series X pro Stunde, Tag und Jahr?",
            "answer": "Ein Xbox Series X hat eine typische Leistungsaufnahme von ca. 190 Watt. Im laufenden Betrieb verbraucht er ca. 0.190 kWh pro Stunde (ca. 0.07 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 140 kWh (49.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Xbox Series X pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,20 € / 3 Stunden Spielen. Pro Monat entspricht das etwa 4.08 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Xbox Series X am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Xbox Series X Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Xbox Series X gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba'],
    relatedDevices: ['ps5', 'gaming-pc', 'fernseher'],
    relatedCalculators: ['/stromkosten-rechner', '/standby-strom'],
  },
  klimaanlage: {
    slug: 'klimaanlage',
    name: 'Klimaanlage (Split & Mobil)',
    category: 'Klima & Heizen',
    icon: '❄️',
    typicalWattage: 1000,
    wattageMin: 600,
    wattageMax: 2500,
    typicalUsageHours: 6, // summer days
    typicalAnnualKwh: 360, // 60 days * 6h = 360 kWh
    annualCostEuro: 126.0,
    usageContext: 'Sommerbetrieb an heißen Tagen (ca. 40–60 Tage im Jahr für je 4–8 Stunden)',
    calculationDefaults: {
      watt: 1000,
      hoursPerDay: 6,
    },
    shortDescription: 'Eine mobile Klimaanlage (Monoblock) verbraucht ca. 800 bis 1.400 Watt pro Stunde (ca. 28–49 Cent/h). Eine fest eingebaute Split-Klimaanlage arbeitet mit Inverter-Technologie rund 40–60 % effizienter (ca. 400–800 Watt Durchschnittsaufnahme).',
    dutyCycleExplanation: 'Mobile Geräte schalten den Kompressor meist nur an/aus, während moderne Split-Klimageräte die Leistung stufenlos an den Kühlbedarf anpassen.',
    measurementTips: 'Messe über einen heißen Sommertag hinweg, da der Verbrauch stark von der Außentemperatur und Sonneneinstrahlung abhängt.',
    savingAdvice: [
      'Temperaturdifferenz zur Außentemperatur auf maximal 5–6 °C begrenzen (24–25 °C Raumtemperatur sind ideal).',
      'Fenster und Türen tagsüber geschlossen halten und außenliegende Rollos/Jalousien herunterlassen.',
      'Abluftschlauch bei mobilen Geräten mit einer dichten Fensterabdichtung isolieren.',
    ],
    factors: ['Bauart (Split-Gerät vs. Monoblock mit Abluftschlauch)', 'Raumgröße & Dämmung', 'Sonneneinstrahlung', 'Eingestellte Zieltemperatur'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Klimaanlage (Split-Gerät) pro Stunde, Tag und Jahr?",
            "answer": "Ein Klimaanlage (Split-Gerät) hat eine typische Leistungsaufnahme von ca. 800 Watt. Im laufenden Betrieb verbraucht er ca. 0.800 kWh pro Stunde (ca. 0.28 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 350 kWh (122.50 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Klimaanlage (Split-Gerät) pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 1,40 € / 5 Stunden Kühlung. Pro Monat entspricht das etwa 10.21 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Klimaanlage (Split-Gerät) am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Klimaanlage (Split-Gerät) Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Klimaanlage (Split-Gerät) gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bnetza', 'uba', 'stromspiegel'],
    relatedDevices: ['ventilator', 'luftentfeuchter', 'heizluefter'],
    relatedCalculators: ['/stromkosten-pro-stunde', '/stromkosten-rechner', '/watt-rechner'],
  },
  ventilator: {
    slug: 'ventilator',
    name: 'Ventilator (Stand- & Turmventilator)',
    category: 'Klima & Heizen',
    icon: '💨',
    typicalWattage: 45,
    wattageMin: 20,
    wattageMax: 80,
    typicalUsageHours: 8,
    typicalAnnualKwh: 35,
    annualCostEuro: 12.25,
    usageContext: 'Sommerbetrieb für ca. 8 Stunden pro Tag',
    calculationDefaults: {
      watt: 45,
      hoursPerDay: 8,
    },
    shortDescription: 'Ein Ventilator verbraucht auf mittlerer Stufe lediglich ca. 30 bis 50 Watt. Ein ganzer Tag Betrieb (8 Stunden) kostet nur ca. 10 bis 14 Cent.',
    dutyCycleExplanation: 'Ventilatoren kühlen nicht die Raumluft ab, sondern erzeugen einen kühlenden Windchill-Effekt auf der Haut durch Verdunstungskühlung.',
    measurementTips: 'Einfaches Messgerät zeigt die Leistung auf Stufe 1, 2 und 3 direkt an.',
    savingAdvice: [
      'Ventilator nur laufen lassen, wenn sich Personen im Raum aufhalten.',
      'Moderne Ventilatoren mit bürstenlosem Gleichstrommotor (DC-Motor) bevorzugen (brauchen oft nur 10–25 Watt).',
    ],
    factors: ['Geschwindigkeitsstufe', 'Motor-Typ (AC vs. DC)', 'Oszillation aktiv'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Ventilator / Standventilator pro Stunde, Tag und Jahr?",
            "answer": "Ein Ventilator / Standventilator hat eine typische Leistungsaufnahme von ca. 45 Watt. Im laufenden Betrieb verbraucht er ca. 0.045 kWh pro Stunde (ca. 0.02 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 35 kWh (12.25 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Ventilator / Standventilator pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,10 € / 6 Stunden. Pro Monat entspricht das etwa 1.02 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Ventilator / Standventilator am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Ventilator / Standventilator Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Ventilator / Standventilator gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba'],
    relatedDevices: ['klimaanlage', 'luftentfeuchter'],
    relatedCalculators: ['/watt-rechner', '/stromkosten-pro-stunde'],
  },
  heizluefter: {
    slug: 'heizluefter',
    name: 'Heizlüfter / Elektro-Radiator',
    category: 'Klima & Heizen',
    icon: '🔥',
    typicalWattage: 2000,
    wattageMin: 1000,
    wattageMax: 2500,
    typicalUsageHours: 4,
    typicalAnnualKwh: 480, // e.g. 60 days in winter * 4h = 480 kWh
    annualCostEuro: 168.0,
    usageContext: 'Zusatzheizung in Übergangszeiten oder im Winter für 2–4 Stunden täglich',
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 4,
    },
    shortDescription: 'Ein elektrischer Heizlüfter zieht auf Stufe 2 in der Regel 2.000 Watt. Eine Stunde Heizen kostet rund 70 Cent – bei täglicher Nutzung wird er schnell zum teuersten Stromfresser im Haus.',
    dutyCycleExplanation: 'Elektrische Direktheizungen wandeln Strom 1:1 in Wärme um (Wirkungsgrad 100 %, aber JAZ von nur 1 gegenüber einer Wärmepumpe mit JAZ 3–4).',
    measurementTips: 'Leistungsschalter prüfen: Meist gibt es Stufe 1 (ca. 1.000 W) und Stufe 2 (ca. 2.000 W).',
    savingAdvice: [
      'Heizlüfter nur kurzzeitig für akuten Wärmebedarf (z.B. Bad morgens) nutzen, niemals als Dauerheizung.',
      'Thermostat-Drehregler so einstellen, dass das Gerät bei Erreichen einer Grundwärme sofort abschaltet.',
    ],
    factors: ['Heizstufe (1.000 W vs. 2.000 W)', 'Thermostat-Einstellung', 'Raumgröße'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Heizlüfter / Elektro-Heizung pro Stunde, Tag und Jahr?",
            "answer": "Ein Heizlüfter / Elektro-Heizung hat eine typische Leistungsaufnahme von ca. 2000 Watt. Im laufenden Betrieb verbraucht er ca. 2.000 kWh pro Stunde (ca. 0.70 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 300 kWh (105.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Heizlüfter / Elektro-Heizung pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 1,40 € / 2 Stunden Heizen. Pro Monat entspricht das etwa 8.75 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Heizlüfter / Elektro-Heizung am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Heizlüfter / Elektro-Heizung Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Heizlüfter / Elektro-Heizung gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bnetza', 'stromspiegel'],
    relatedDevices: ['klimaanlage', 'waermepumpe', 'ventilator'],
    relatedCalculators: ['/stromkosten-pro-stunde', '/stromkosten-rechner', '/stromfresser'],
  },
  luftentfeuchter: {
    slug: 'luftentfeuchter',
    name: 'Luftentfeuchter / Bautrockner',
    category: 'Klima & Heizen',
    icon: '💧',
    typicalWattage: 300,
    wattageMin: 180,
    wattageMax: 650,
    typicalUsageHours: 8,
    typicalAnnualKwh: 450,
    annualCostEuro: 157.5,
    usageContext: 'Täglicher Betrieb im feuchten Keller oder nach Sanierungen für 6–10 Stunden',
    calculationDefaults: {
      watt: 320,
      hoursPerDay: 8,
    },
    shortDescription: 'Ein elektrischer Kondensations-Luftentfeuchter verbraucht ca. 250 bis 450 Watt. Bei 8 Stunden täglicher Entfeuchtung im Keller entstehen Stromkosten von ca. 70 bis 120 Cent pro Tag.',
    dutyCycleExplanation: 'Das Gerät arbeitet mit einem Kältekompressor, an dessen kalter Oberfläche die Feuchtigkeit kondensiert und abtropft.',
    measurementTips: 'Zwischensteckdose verwenden und den hygrostat-gesteuerten Gesamtverbrauch über 7 Tage protokollieren.',
    savingAdvice: [
      'Ziel-Luftfeuchtigkeit am Hygrostat auf 55–60 % einstellen (nicht auf Dauerlauf / 40 %).',
      'Türen und Fenster im Entfeuchtungsraum geschlossen halten, um nicht Außenfeuchte nachzuziehen.',
    ],
    factors: ['Raumfeuchtigkeit & Raumtemperatur', 'Hygrostat-Schwellenwert', 'Kompressor-Leistung'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Luftentfeuchter pro Stunde, Tag und Jahr?",
            "answer": "Ein Luftentfeuchter hat eine typische Leistungsaufnahme von ca. 350 Watt. Im laufenden Betrieb verbraucht er ca. 0.350 kWh pro Stunde (ca. 0.12 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 280 kWh (98.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Luftentfeuchter pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,74 € / 6 Stunden. Pro Monat entspricht das etwa 8.17 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Luftentfeuchter am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Luftentfeuchter Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Luftentfeuchter gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba'],
    relatedDevices: ['klimaanlage', 'ventilator', 'heizluefter'],
    relatedCalculators: ['/stromkosten-rechner', '/kwh-rechner'],
  },
  aquarium: {
    slug: 'aquarium',
    name: 'Aquarium (Filter, Heizung, Licht)',
    category: 'Hobby & Spezial',
    icon: '🐠',
    typicalWattage: 80, // 100-200 Liter Becken
    wattageMin: 25,
    wattageMax: 350,
    typicalUsageHours: 24, // Filter 24h, Light 10h, Heater pulsed
    typicalAnnualKwh: 350,
    annualCostEuro: 122.5,
    usageContext: '24h Filterbetrieb, 8–10h Beleuchtung, Heizstab getaktet auf 24–26 °C',
    calculationDefaults: {
      watt: 60, // continuous equivalent
      hoursPerDay: 24,
    },
    shortDescription: 'Ein typisches 120-Liter-Süßwasseraquarium verbraucht ca. 250 bis 400 kWh Strom pro Jahr (ca. 85 bis 140 €). Große Warmwasser- oder Meerwasseraquarien können über 1.000 kWh/Jahr benötigen.',
    dutyCycleExplanation: 'Der Filter läuft durchgehend (10–25 W), die LED-Beleuchtung ca. 8–10 Stunden (20–40 W) und der Heizstab (100–200 W) springt intervallweise je nach Raumtemperatur an.',
    measurementTips: 'Messe das gesamte Aquarium über mindestens 7 Tage an einer gemeinsamen Steckdosenleiste.',
    savingAdvice: [
      'Alte Leuchtstoffröhren (T5/T8) durch moderne Aquarien-LEDs ersetzen (spart bis zu 50 % Lichtstrom).',
      'Aquarium mit Abdeckscheibe betreiben: Reduziert Verdunstungskälte und spart bis zu 40 % Heizenergie.',
      'Rückwand und Bodenplatte mit Styropor oder Kork isolieren.',
    ],
    factors: ['Beckengröße (Liter)', 'Ziel-Wassertemperatur vs. Raumtemperatur', 'LED- vs. Röhrenbeleuchtung', 'Offenes vs. geschlossenes Becken'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Aquarium (100–200 Liter) pro Stunde, Tag und Jahr?",
            "answer": "Ein Aquarium (100–200 Liter) hat eine typische Leistungsaufnahme von ca. 60 Watt. Im laufenden Betrieb verbraucht er ca. 0.060 kWh pro Stunde (ca. 0.02 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 350 kWh (122.50 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Aquarium (100–200 Liter) pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,34 € / 24 Stunden Dauerbetrieb. Pro Monat entspricht das etwa 10.21 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Aquarium (100–200 Liter) am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Aquarium (100–200 Liter) Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Aquarium (100–200 Liter) gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'stromspiegel'],
    relatedDevices: ['pool', 'whirlpool', 'terrarium'],
    relatedCalculators: ['/stromkosten-rechner', '/stromkosten-pro-jahr'],
  },
  pool: {
    slug: 'pool',
    name: 'Poolpumpe / Swimmingpool',
    category: 'Hobby & Spezial',
    icon: '🏊',
    typicalWattage: 600,
    wattageMin: 250,
    wattageMax: 1500,
    typicalUsageHours: 8,
    typicalAnnualKwh: 720, // 150 summer days * 8h * 0.6 kW
    annualCostEuro: 252.0,
    usageContext: 'Sommersaison (Mai bis September) täglich ca. 6–10 Stunden Umwälzung',
    calculationDefaults: {
      watt: 600,
      hoursPerDay: 8,
    },
    shortDescription: 'Eine typische Sandfilteranlage für den Gartenpool verbraucht 400 bis 800 Watt. Bei 8 Stunden täglicher Filterzeit in der Badesaison entstehen Stromkosten von ca. 200 bis 350 €.',
    dutyCycleExplanation: 'Das Poolwasser sollte täglich mindestens 2- bis 3-mal komplett umgewälzt werden, um Algenbildung und Verschmutzung vorzubeugen.',
    measurementTips: 'Zeitschaltuhr und Messgerät kombinieren, um die tägliche Umwälzenergie zu erfassen.',
    savingAdvice: [
      'Drehzahlgeregelte Poolpumpe (Inverter-Pumpe) einsetzen: spart bis zu 70 % Strom durch langsamere, längere Filtration.',
      'Pool bei Nichtbenutzung mit Solarfolie abdecken (verhindert Auskühlen und Schmutzeintrag).',
    ],
    factors: ['Poolvolumen (m³)', 'Pumpenleistung (W)', 'Filterlaufzeit pro Tag', 'Zusätzliche Poolheizung/Wärmepumpe'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Poolpumpe / Filteranlage pro Stunde, Tag und Jahr?",
            "answer": "Ein Poolpumpe / Filteranlage hat eine typische Leistungsaufnahme von ca. 500 Watt. Im laufenden Betrieb verbraucht er ca. 0.500 kWh pro Stunde (ca. 0.17 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 480 kWh (168.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Poolpumpe / Filteranlage pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 1,05 € / 6 Stunden Filterung. Pro Monat entspricht das etwa 14.00 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Poolpumpe / Filteranlage am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Poolpumpe / Filteranlage Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Poolpumpe / Filteranlage gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bnetza', 'uba'],
    relatedDevices: ['whirlpool', 'aquarium', 'klimaanlage'],
    relatedCalculators: ['/stromkosten-pro-tag', '/stromkosten-rechner'],
  },
  whirlpool: {
    slug: 'whirlpool',
    name: 'Whirlpool / Hot Tub (Outdoor)',
    category: 'Hobby & Spezial',
    icon: '🛁',
    typicalWattage: 2500,
    wattageMin: 1500,
    wattageMax: 4000,
    typicalUsageHours: 4,
    typicalAnnualKwh: 2800,
    annualCostEuro: 980.0,
    usageContext: 'Ganzjahresbetrieb im Garten bei 37–39 °C Wassertemperatur',
    calculationDefaults: {
      watt: 2500,
      hoursPerDay: 3,
    },
    shortDescription: 'Ein ganzjährig beheizter Outdoor-Whirlpool verbraucht ca. 2.000 bis 4.000 kWh Strom pro Jahr. Das entspricht jährlichen Stromkosten von rund 700 bis 1.400 €.',
    dutyCycleExplanation: 'Der Hauptverbrauch entsteht durch das ständige Halten der Wassertemperatur bei kalten Außentemperaturen im Herbst und Winter.',
    measurementTips: 'Whirlpools haben meist einen festen Starkstromanschluss oder Sicherungsautomaten, an dem ein Hutschienenzähler angebracht werden kann.',
    savingAdvice: [
      'Hochwertige, passgenaue Thermoabdeckung mit mindestens 10–12 cm Stärke verwenden.',
      'Bei längerer Abwesenheit oder im tiefen Winter die Temperatur absenken (z.B. auf 25–30 °C).',
      'Whirlpool-Wärmepumpe nachrüsten: Reduziert die Heizkosten um bis zu 60–70 %.',
    ],
    factors: ['Dämmung der Wanne', 'Qualität der Thermoabdeckung', 'Außentemperatur (Winterbetrieb)', 'Nutzungshäufigkeit der Massagedüsen'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Whirlpool / Outdoor Hot Tub pro Stunde, Tag und Jahr?",
            "answer": "Ein Whirlpool / Outdoor Hot Tub hat eine typische Leistungsaufnahme von ca. 2500 Watt. Im laufenden Betrieb verbraucht er ca. 2.500 kWh pro Stunde (ca. 0.88 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 2200 kWh (770.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Whirlpool / Outdoor Hot Tub pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 2,10 € / Tag (Heizung & Zirkulation). Pro Monat entspricht das etwa 64.17 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Whirlpool / Outdoor Hot Tub am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Whirlpool / Outdoor Hot Tub Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Whirlpool / Outdoor Hot Tub gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['bnetza', 'stromspiegel'],
    relatedDevices: ['pool', 'sauna', 'heizluefter'],
    relatedCalculators: ['/stromkosten-pro-monat', '/stromkosten-rechner', '/stromfresser'],
  },
  '3d-drucker': {
    slug: '3d-drucker',
    name: '3D-Drucker (FDM & SLA)',
    category: 'Hobby & Spezial',
    icon: '🖨️',
    typicalWattage: 150,
    wattageMin: 60,
    wattageMax: 350,
    typicalUsageHours: 6,
    typicalAnnualKwh: 180,
    annualCostEuro: 63.0,
    usageContext: 'Drucksessions von 4–12 Stunden Dauer (Druckbett 60 °C, Düse 210 °C)',
    calculationDefaults: {
      watt: 120,
      hoursPerDay: 4,
    },
    shortDescription: 'Ein typischer FDM-3D-Drucker verbraucht beim Drucken ca. 100 bis 200 Watt. Ein 10-stündiger Druckauftrag kostet rund 35 bis 70 Cent Strom.',
    dutyCycleExplanation: 'Beim Aufheizen von Druckbett und Hotend zieht der Drucker ca. 250–350 Watt. Während des Druckens taktet das Heizbett, sodass der Schnitt bei 100–150 W liegt.',
    measurementTips: 'Zwischensteckdose anschließen und den Gesamt-kWh-Wert für einen kompletten Druckvorgang auslesen.',
    savingAdvice: [
      'Einhausung (Enclosure) verwenden: Hält die Wärme im Bauraum und reduziert die Heizleistung des Druckbetts um ca. 30 %.',
      'Druckbett-Temperatur nach den ersten Schichten um 5–10 °C absenken, wenn das Filament es erlaubt.',
    ],
    factors: ['Druckbett-Temperatur (PLA 60 °C vs. ABS/PETG 80–100 °C)', 'Gehäuse / Einhausung vorhanden', 'Druckgeschwindigkeit'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein 3D-Drucker (FDM) im Durchschnitt pro Jahr?",
            "answer": "Ein moderner 3D-Drucker (FDM) verbraucht im Schnitt ca. 120 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 42,00 Euro."
      },
      {
            "question": "Was kostet 1 Stunde Betrieb von 3D-Drucker (FDM)?",
            "answer": "Bei einer durchschnittlichen Leistung von ca. 150 Watt kostet eine Stunde Laufzeit rund 0,052 € (ca. 5,3 Cent)."
      },
      {
            "question": "Wie hoch sind die monatlichen Stromkosten für 3D-Drucker (FDM)?",
            "answer": "Die monatlichen Stromkosten für 3D-Drucker (FDM) liegen bei durchschnittlicher Nutzung bei ca. 3,50 € pro Monat."
      },
      {
            "question": "Wie viel Watt Leistung hat ein typischer 3D-Drucker (FDM)?",
            "answer": "Die typische Anschlussleistung liegt bei ca. 150 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 105 W und 225 W schwanken."
      },
      {
            "question": "Was kostet ein einzelner Nutzungsvorgang von 3D-Drucker (FDM)?",
            "answer": "Ein typischer Einsatz von 3D-Drucker (FDM) verursacht Stromkosten von ca. 0,42 € / Druck (8h)."
      },
      {
            "question": "Wie kann man den Stromverbrauch von 3D-Drucker (FDM) sofort um 15–25 % senken?",
            "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
            "question": "Verbraucht 3D-Drucker (FDM) auch Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
            "question": "Lohnt sich der Neukauf eines energieeffizienten 3D-Drucker (FDM)?",
            "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
            "question": "Wie berechne ich den Stromverbrauch von 3D-Drucker (FDM) exakt selbst?",
            "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 150 W × 1 h ÷ 1.000 × 0,35 € = 0,052 €."
      },
      {
            "question": "Welches ist das sparsamste Programm oder die beste Einstellung für 3D-Drucker (FDM)?",
            "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
],
    sourceIds: ['uba'],
    relatedDevices: ['gaming-pc', 'pc', 'server'],
    relatedCalculators: ['/stromkosten-rechner', '/watt-rechner'],
  },
  nas: {
    slug: 'nas',
    name: 'NAS (Netzwerkspeicher / Home Server)',
    category: 'Unterhaltung & Büro',
    icon: '💾',
    typicalWattage: 28, // 2-4 Bay NAS
    wattageMin: 12,
    wattageMax: 65,
    typicalUsageHours: 24,
    typicalAnnualKwh: 245,
    annualCostEuro: 85.75,
    usageContext: '24/7 Dauerbetrieb für Backups, Streaming und Cloud-Speicher',
    calculationDefaults: {
      watt: 28,
      hoursPerDay: 24,
    },
    shortDescription: 'Ein 2- bis 4-Bay-NAS verbraucht im Dauerbetrieb ca. 20 bis 40 Watt. Bei 24/7-Laufzeit summiert sich das auf ca. 175 bis 350 kWh bzw. 60 bis 120 € pro Jahr.',
    dutyCycleExplanation: 'Im Festplatten-Ruhezustand (HDD Spindown) sinkt der Verbrauch auf 8–15 Watt, bei aktivem Lese-/Schreibzugriff liegt er bei 25–45 Watt.',
    measurementTips: 'Messe das NAS über 48 Stunden, um den realen Mix aus Idle-, Spindown- und Zugriffszeiten zu erfassen.',
    savingAdvice: [
      'Festplatten-Ruhezustand (HDD Sleep / Spindown) nach 20 Minuten Inaktivität im Betriebssystem aktivieren.',
      'Zeitplan-Steuerung nutzen: NAS nachts zwischen 1:00 und 6:00 Uhr automatisch herunterfahren, falls keine nächtlichen Backups laufen.',
      'Sparsamen Prozessor (ARM oder Intel N100) bei Neuanschaffung wählen.',
    ],
    factors: ['Anzahl und Typ der Festplatten (HDDs vs. SSDs)', 'Festplatten-Spindown aktiv', 'CPU-Auslastung (Transcoding, Docker-Container)'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein NAS-Server / Netzwerkspeicher pro Stunde, Tag und Jahr?",
            "answer": "Ein NAS-Server / Netzwerkspeicher hat eine typische Leistungsaufnahme von ca. 30 Watt. Im laufenden Betrieb verbraucht er ca. 0.030 kWh pro Stunde (ca. 0.01 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 260 kWh (91.00 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von NAS-Server / Netzwerkspeicher pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,25 € / 24 Stunden Dauerbetrieb. Pro Monat entspricht das etwa 7.58 € Stromkosten."
      },
      {
            "question": "Wie kann man beim NAS-Server / Netzwerkspeicher am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein NAS-Server / Netzwerkspeicher Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten NAS-Server / Netzwerkspeicher gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba'],
    relatedDevices: ['server', 'pc', 'wlan-router'],
    relatedCalculators: ['/stromkosten-pro-jahr', '/stromkosten-rechner', '/watt-rechner'],
  },
  server: {
    slug: 'server',
    name: 'Home Server / Homelab',
    category: 'Unterhaltung & Büro',
    icon: '🖧',
    typicalWattage: 65,
    wattageMin: 25,
    wattageMax: 200,
    typicalUsageHours: 24,
    typicalAnnualKwh: 570,
    annualCostEuro: 199.5,
    usageContext: '24/7 Heimserver für Virtualisierung (Proxmox/Docker), Smart Home und Medien',
    calculationDefaults: {
      watt: 65,
      hoursPerDay: 24,
    },
    shortDescription: 'Ein kleiner Heimserver oder ein ausgemusterter PC verbraucht im 24/7-Betrieb ca. 40 bis 90 Watt. Das entspricht jährlichen Stromkosten von ca. 120 bis 280 €.',
    dutyCycleExplanation: 'Der meiste Verbrauch entsteht im Leerlauf (Idle), da viele Serverdienste zwar ständig lauschen, die CPU aber nur zu wenigen Prozent auslasten.',
    measurementTips: 'Zwischensteckdose vor das Netzteil schalten und die durchschnittliche Wattzahl über eine Woche ermitteln.',
    savingAdvice: [
      'C-States im BIOS aktivieren (ermöglicht der CPU, in tiefste Stromsparmodi zu wechseln).',
      'Alte Enterprise-Server (z.B. duale Xeon-CPUs) durch moderne Mini-PCs (Intel Core 12th/13th Gen oder AMD Ryzen) ersetzen (spart 50–150 Watt Dauerlast = 150–450 €/Jahr).',
      'Hocheffizientes Netzteil (80 Plus Gold oder Titanium) verwenden.',
    ],
    factors: ['Hardware-Plattform (Mini-PC vs. alter Enterprise-Server)', 'C-State-Konfiguration im BIOS/OS', 'Anzahl der 3,5"-Festplatten'],
    faq: [
      {
            "question": "Wie viel Strom verbraucht ein Heimserver / Home Server pro Stunde, Tag und Jahr?",
            "answer": "Ein Heimserver / Home Server hat eine typische Leistungsaufnahme von ca. 65 Watt. Im laufenden Betrieb verbraucht er ca. 0.065 kWh pro Stunde (ca. 0.02 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 570 kWh (199.50 €/Jahr)."
      },
      {
            "question": "Was kostet die Nutzung von Heimserver / Home Server pro Vorgang bzw. Monat?",
            "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,55 € / 24 Stunden Dauerbetrieb. Pro Monat entspricht das etwa 16.63 € Stromkosten."
      },
      {
            "question": "Wie kann man beim Heimserver / Home Server am effektivsten Strom sparen?",
            "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
      },
      {
            "question": "Zieht ein Heimserver / Home Server Strom im Standby-Modus?",
            "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
      },
      {
            "question": "Lohnt sich der Austausch eines alten Heimserver / Home Server gegen ein Neugerät?",
            "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
      }

    ],
    sourceIds: ['uba', 'bnetza'],
    relatedDevices: ['nas', 'pc', 'gaming-pc'],
    relatedCalculators: ['/watt-rechner', '/stromkosten-pro-jahr', '/stromkosten-rechner'],
  },
};
