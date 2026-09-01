export interface Appliance {
  slug: string;
  name: string;
  category: 'Küche' | 'Haushalt & Reinigung' | 'Unterhaltung & Büro' | 'Klima & Heizen' | 'Hobby & Spezial';
  icon: string;
  typicalWattage: number;
  wattageMin: number;
  wattageMax: number;
  typicalUsageHours: number;
  typicalAnnualKwh: number;
  annualCostEuro: number;
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
  "kuehlschrank": {
    "slug": "kuehlschrank",
    "name": "Kühlschrank",
    "category": "Küche",
    "icon": "❄️",
    "typicalWattage": 90,
    "wattageMin": 50,
    "wattageMax": 160,
    "typicalUsageHours": 24,
    "typicalAnnualKwh": 120,
    "annualCostEuro": 42,
    "usageContext": "24 Stunden Dauerbetrieb (Kompressor taktet bei ca. 30–40 % Einschaltdauer)",
    "calculationDefaults": {
      "watt": 40,
      "hoursPerDay": 24
    },
    "shortDescription": "Ein moderner Kühlschrank (Klasse A–C) verbraucht ca. 100 bis 160 kWh pro Jahr (ca. 35 bis 56 €). Ältere Geräte oder Kühl-Gefrierkombinationen benötigen oft 250 bis 350 kWh.",
    "dutyCycleExplanation": "Ein Kühlschrank läuft zwar rund um die Uhr, der stromintensive Kompressor schaltet sich jedoch thermostatgesteuert nur etwa 20 bis 40 Minuten pro Stunde ein.",
    "measurementTips": "Stecke ein digitales Strommessgerät für mindestens 24 bis 48 Stunden zwischen Steckdose und Kühlschrank, da der Kompressor getaktet arbeitet.",
    "savingAdvice": [
      "Optimale Temperatur wählen: 7 °C im Kühlraum reichen völlig aus (jedes Grad kälter kostet ca. 6 % mehr Strom).",
      "Regelmäßig abtauen: Eine 5 mm dicke Eisschicht im Eisfach steigert den Stromverbrauch um bis zu 30 %.",
      "Dichtungen prüfen: Eine undichte Türdichtung lässt warme Luft einströmen und zwingt den Kompressor zum Dauerlauf.",
      "Warme Speisen erst auf Raumtemperatur abkühlen lassen, bevor sie in den Kühlschrank gestellt werden."
    ],
    "factors": [
      "Energieeffizienzklasse",
      "Nutzinhalt & Gefrierfach",
      "Umgebungstemperatur",
      "Öffnungshäufigkeit der Tür"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Kühlschrank im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Kühlschrank verbraucht im Schnitt ca. 120 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 42,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Kühlschrank?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 90 Watt kostet eine Stunde Laufzeit rund 0,005 € (ca. 3,1 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Kühlschrank?",
        "answer": "Die monatlichen Stromkosten für Kühlschrank liegen bei durchschnittlicher Nutzung bei ca. 3,50 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Kühlschrank?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 90 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 63 W und 135 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Kühlschrank?",
        "answer": "Ein typischer Einsatz von Kühlschrank verursacht Stromkosten von ca. 0,12 € / Tag."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Kühlschrank sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Kühlschrank auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Kühlschrank?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Kühlschrank exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 90 W × 1 h ÷ 1.000 × 0,35 € = 0,005 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Kühlschrank?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bnetza",
      "stromspiegel",
      "uba"
    ],
    "relatedDevices": [
      "gefrierschrank",
      "geschirrspueler",
      "backofen"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/kwh-rechner",
      "/watt-rechner"
    ]
  },
  "waschmaschine": {
    "slug": "waschmaschine",
    "name": "Waschmaschine",
    "category": "Haushalt & Reinigung",
    "icon": "🧺",
    "typicalWattage": 2000,
    "wattageMin": 1500,
    "wattageMax": 2400,
    "typicalUsageHours": 0.8,
    "typicalAnnualKwh": 140,
    "annualCostEuro": 49,
    "usageContext": "Ca. 3–4 Waschgänge pro Woche (je nach Temperatur 0,4 bis 1,2 kWh pro Waschgang)",
    "calculationDefaults": {
      "watt": 2000,
      "hoursPerDay": 0.2
    },
    "shortDescription": "Eine moderne Waschmaschine benötigt pro Waschgang bei 40 °C Eco ca. 0,5 bis 0,7 kWh (ca. 18–25 Cent). Bei 200 Waschgängen im Jahr entstehen Stromkosten von ca. 40 bis 60 €.",
    "dutyCycleExplanation": "Der Hauptstromverbraucher ist der Heizstab, der das Wasser erwärmt (zieht ca. 1.800–2.200 W während der ersten 15–25 Minuten). Das Schleudern und Drehen der Trommel benötigt nur 100–300 Watt.",
    "measurementTips": "Messe den Stromverbrauch eines kompletten Waschzyklus mit Vorwäsche, Hauptwäsche und Schleudern über ein Zwischensteck-Messgerät.",
    "savingAdvice": [
      "Eco-Programm nutzen: Dauert länger, spart aber bis zu 40 % Strom, da das Wasser langsamer und schonender erwärmt wird.",
      "30 °C oder 40 °C statt 60 °C waschen: Reicht für normale Alltagskleidung vollkommen aus und halbiert den Stromverbrauch fast.",
      "Trommel optimal füllen: Zwei halbe Waschladungen verbrauchen mehr Strom und Wasser als eine volle Maschine."
    ],
    "factors": [
      "Gewählte Waschtemperatur",
      "Beladungsmenge",
      "Nutzung des Eco-Modus",
      "Schleuderdrehzahl"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Waschmaschine im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Waschmaschine verbraucht im Schnitt ca. 140 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 49,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Waschmaschine?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 2000 Watt kostet eine Stunde Laufzeit rund 0,700 € (ca. 70,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Waschmaschine?",
        "answer": "Die monatlichen Stromkosten für Waschmaschine liegen bei durchschnittlicher Nutzung bei ca. 4,08 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Waschmaschine?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 2000 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1400 W und 3000 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Waschmaschine?",
        "answer": "Ein typischer Einsatz von Waschmaschine verursacht Stromkosten von ca. 0,25 € / Waschgang."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Waschmaschine sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Waschmaschine auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Waschmaschine?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Waschmaschine exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Waschmaschine?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bdew",
      "stromspiegel",
      "uba"
    ],
    "relatedDevices": [
      "trockner",
      "geschirrspueler",
      "buegeleisen"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/stromverbrauch-rechner"
    ]
  },
  "trockner": {
    "slug": "trockner",
    "name": "Wäschetrockner",
    "category": "Haushalt & Reinigung",
    "icon": "🌀",
    "typicalWattage": 900,
    "wattageMin": 600,
    "wattageMax": 2800,
    "typicalUsageHours": 0.6,
    "typicalAnnualKwh": 200,
    "annualCostEuro": 70,
    "usageContext": "120 bis 160 Trocknungsgänge pro Jahr",
    "calculationDefaults": {
      "watt": 800,
      "hoursPerDay": 0.7
    },
    "shortDescription": "Ein moderner Wärmepumpentrockner verbraucht pro Ladung ca. 1,2 bis 1,6 kWh (ca. 45–56 Cent). Ein alter Kondenstrockner benötigt mit 3,5 bis 4,5 kWh mehr als das Doppelte.",
    "dutyCycleExplanation": "Wärmepumpentrockner nutzen die Abwärme des Trocknungsprozesses mehrfach und arbeiten mit niedriger Anschlussleistung, während klassische Kondenstrockner rein elektrisch heizen.",
    "measurementTips": "Messe den Verbrauch eines vollständigen Trockenzyklus (schranktrocken) mit normal beladener Trommel.",
    "savingAdvice": [
      "Wäsche vorher mit mindestens 1.200 oder 1.400 U/min schleudern – je trockener die Wäsche in den Trockner kommt, desto kürzer läuft er.",
      "Flusensieb nach jedem Durchgang reinigen, um den Luftstrom optimal zu halten.",
      "Im Frühjahr und Sommer die Wäscheleine oder den Wäscheständer an der frischen Luft nutzen (0 € Stromkosten)."
    ],
    "factors": [
      "Trocknertechnologie (Wärmepumpe vs. Kondenstrockner)",
      "Restfeuchte der Wäsche",
      "Trockengrad (bügelfeucht vs. extra-trocken)"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Wäschetrockner im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Wäschetrockner verbraucht im Schnitt ca. 180 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 63,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Wäschetrockner?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 1500 Watt kostet eine Stunde Laufzeit rund 0,525 € (ca. 52,5 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Wäschetrockner?",
        "answer": "Die monatlichen Stromkosten für Wäschetrockner liegen bei durchschnittlicher Nutzung bei ca. 5,25 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Wäschetrockner?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 1500 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1050 W und 2250 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Wäschetrockner?",
        "answer": "Ein typischer Einsatz von Wäschetrockner verursacht Stromkosten von ca. 0,45 € / Ladung."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Wäschetrockner sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Wäschetrockner auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Wäschetrockner?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Wäschetrockner exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 1500 W × 1 h ÷ 1.000 × 0,35 € = 0,525 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Wäschetrockner?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "stromspiegel",
      "uba"
    ],
    "relatedDevices": [
      "waschmaschine",
      "geschirrspueler"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/stromkosten-pro-jahr"
    ]
  },
  "geschirrspueler": {
    "slug": "geschirrspueler",
    "name": "Geschirrspüler",
    "category": "Küche",
    "icon": "🍽️",
    "typicalWattage": 2000,
    "wattageMin": 1800,
    "wattageMax": 2400,
    "typicalUsageHours": 0.5,
    "typicalAnnualKwh": 170,
    "annualCostEuro": 59.5,
    "usageContext": "Ca. 4–5 Spülgänge pro Woche",
    "calculationDefaults": {
      "watt": 2000,
      "hoursPerDay": 0.25
    },
    "shortDescription": "Ein moderner Geschirrspüler verbraucht im Eco-Programm ca. 0,7 bis 0,9 kWh pro Spülgang (ca. 25–32 Cent) und ist damit sparsamer als das Spülen von Hand unter fließendem Warmwasser.",
    "dutyCycleExplanation": "Der meiste Strom wird in der Aufheizphase des Wassers benötigt. Die Umwälzpumpe läuft während des gesamten Spülgangs mit moderaten 50 bis 100 Watt.",
    "measurementTips": "Zwischensteckdose für 2–3 typische Spülgänge mit verschiedenen Programmen (Auto, Eco, Intensiv) laufen lassen.",
    "savingAdvice": [
      "Standardmäßig das Eco-50°C-Programm wählen.",
      "Geschirr nicht unter warmem Wasser von Hand vorspülen (Speisereste einfach trocken abstreifen).",
      "Geschirrspüler immer voll beladen starten."
    ],
    "factors": [
      "Programmwahl (Eco vs. Intensiv 70°C)",
      "Wasserhärte & Dosierung",
      "Warmwasser-Direktanschluss vorhanden"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Geschirrspüler im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Geschirrspüler verbraucht im Schnitt ca. 160 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 56,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Geschirrspüler?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 1800 Watt kostet eine Stunde Laufzeit rund 0,630 € (ca. 63,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Geschirrspüler?",
        "answer": "Die monatlichen Stromkosten für Geschirrspüler liegen bei durchschnittlicher Nutzung bei ca. 4,67 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Geschirrspüler?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 1800 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1260 W und 2700 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Geschirrspüler?",
        "answer": "Ein typischer Einsatz von Geschirrspüler verursacht Stromkosten von ca. 0,28 € / Spülgang."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Geschirrspüler sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Geschirrspüler auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Geschirrspüler?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Geschirrspüler exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 1800 W × 1 h ÷ 1.000 × 0,35 € = 0,630 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Geschirrspüler?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "stromspiegel",
      "bdew"
    ],
    "relatedDevices": [
      "kuehlschrank",
      "backofen",
      "wasserkocher"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/kwh-rechner"
    ]
  },
  "backofen": {
    "slug": "backofen",
    "name": "Backofen",
    "category": "Küche",
    "icon": "🥧",
    "typicalWattage": 2500,
    "wattageMin": 1800,
    "wattageMax": 3500,
    "typicalUsageHours": 0.4,
    "typicalAnnualKwh": 150,
    "annualCostEuro": 52.5,
    "usageContext": "1–2 Mal wöchentlich für ca. 45–60 Minuten",
    "calculationDefaults": {
      "watt": 2200,
      "hoursPerDay": 0.2
    },
    "shortDescription": "Ein Backofen verbraucht bei 200 °C Umluft ca. 0,8 bis 1,2 kWh pro Stunde (ca. 28–42 Cent). Bei Ober-/Unterhitze liegt der Verbrauch ca. 15–20 % höher.",
    "dutyCycleExplanation": "Beim Vorheizen heizt der Ofen unter Volllast. Sobald die Zieltemperatur erreicht ist, schaltet das Thermostat die Heizelemente nur noch intervallweise ein.",
    "measurementTips": "Backöfen sind meist fest angeschlossen; der Stromverbrauch lässt sich über die Leistungsangaben im Datenblatt oder den Hauptzähler ermitteln.",
    "savingAdvice": [
      "Umluft statt Ober-/Unterhitze nutzen (ermöglicht 20–30 °C geringere Backtemperatur).",
      "Auf unnötiges Vorheizen verzichten, außer bei temperaturempfindlichen Teigen wie Biskuit.",
      "Restwärme nutzen und den Ofen 5–10 Minuten vor Ende der Garzeit ausschalten."
    ],
    "factors": [
      "Heizart (Umluft vs. Ober-/Unterhitze)",
      "Temperatur",
      "Öffnen der Ofentür während des Backens"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Backofen im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Backofen verbraucht im Schnitt ca. 150 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 52,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Backofen?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 2500 Watt kostet eine Stunde Laufzeit rund 0,875 € (ca. 87,5 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Backofen?",
        "answer": "Die monatlichen Stromkosten für Backofen liegen bei durchschnittlicher Nutzung bei ca. 4,38 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Backofen?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 2500 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1750 W und 3750 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Backofen?",
        "answer": "Ein typischer Einsatz von Backofen verursacht Stromkosten von ca. 0,55 € / Nutzung."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Backofen sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Backofen auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Backofen?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Backofen exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2500 W × 1 h ÷ 1.000 × 0,35 € = 0,875 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Backofen?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bdew",
      "uba"
    ],
    "relatedDevices": [
      "herd",
      "mikrowelle",
      "geschirrspueler"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-stunde",
      "/stromkosten-rechner"
    ]
  },
  "herd": {
    "slug": "herd",
    "name": "Elektroherd / Induktionsherd",
    "category": "Küche",
    "icon": "🍳",
    "typicalWattage": 3000,
    "wattageMin": 1200,
    "wattageMax": 7200,
    "typicalUsageHours": 0.5,
    "typicalAnnualKwh": 250,
    "annualCostEuro": 87.5,
    "usageContext": "Tägliches Kochen auf 1–2 Kochfeldern für ca. 30–45 Minuten",
    "calculationDefaults": {
      "watt": 2000,
      "hoursPerDay": 0.5
    },
    "shortDescription": "Beim Kochen auf dem Elektro- oder Induktionsherd entstehen ca. 0,7 bis 1,2 kWh Stromverbrauch pro Tag (ca. 25–42 Cent). Induktionskochfelder sind ca. 20–30 % effizienter als klassische Massekochfelder.",
    "dutyCycleExplanation": "Eine einzelne Herdplatte zieht zwischen 1.200 und 2.500 Watt (Power-Stufe bis 3.500 W). Sobald Wasser kocht, wird auf eine kleinere Stufe mit getakteter Leistungsabgabe zurückgeschaltet.",
    "measurementTips": "Aufgrund des Starkstromanschlusses kann der Verbrauch über den Hausstromzähler vor und nach dem Kochen gemessen werden.",
    "savingAdvice": [
      "Immer mit passendem Deckel kochen (spart bis zu 65 % Energie).",
      "Topfgröße passend zum Kochfeld wählen.",
      "Wasser im Wasserkocher vorkochen statt kalt auf dem Herd zu erhitzen."
    ],
    "factors": [
      "Induktion vs. Ceran/Gusseisen",
      "Topfbodenqualität",
      "Nutzung von Topfdeckeln"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Elektroherd & Induktion im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Elektroherd & Induktion verbraucht im Schnitt ca. 220 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 77,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Elektroherd & Induktion?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 2000 Watt kostet eine Stunde Laufzeit rund 0,700 € (ca. 70,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Elektroherd & Induktion?",
        "answer": "Die monatlichen Stromkosten für Elektroherd & Induktion liegen bei durchschnittlicher Nutzung bei ca. 6,42 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Elektroherd & Induktion?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 2000 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1400 W und 3000 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Elektroherd & Induktion?",
        "answer": "Ein typischer Einsatz von Elektroherd & Induktion verursacht Stromkosten von ca. 0,35 € / Kochen."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Elektroherd & Induktion sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Elektroherd & Induktion auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Elektroherd & Induktion?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Elektroherd & Induktion exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Elektroherd & Induktion?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bdew",
      "uba"
    ],
    "relatedDevices": [
      "backofen",
      "wasserkocher",
      "mikrowelle"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/watt-rechner"
    ]
  },
  "wasserkocher": {
    "slug": "wasserkocher",
    "name": "Wasserkocher",
    "category": "Küche",
    "icon": "🫖",
    "typicalWattage": 2200,
    "wattageMin": 1800,
    "wattageMax": 3000,
    "typicalUsageHours": 0.1,
    "typicalAnnualKwh": 75,
    "annualCostEuro": 26.25,
    "usageContext": "3–4 Kochvorgänge à 1 Liter pro Tag (ca. 0,1 kWh pro Liter)",
    "calculationDefaults": {
      "watt": 2200,
      "hoursPerDay": 0.1
    },
    "shortDescription": "1 Liter Wasser im Wasserkocher zum Kochen zu bringen benötigt ca. 0,1 kWh Strom (ca. 3,5 Cent). Das ist die energieeffizienteste Methode, um Wasser im Haushalt zu erhitzen.",
    "dutyCycleExplanation": "Wasserkocher arbeiten mit hoher Leistung (2.000–3.000 Watt), benötigen aber nur 2,5 bis 3,5 Minuten, um das Wasser zum Sieden zu bringen.",
    "measurementTips": "Mit einem Zwischensteckzähler den exakten Verbrauch für 1 Liter Wasser ermitteln.",
    "savingAdvice": [
      "Immer nur die exakt benötigte Menge Wasser erhitzen (spart bis zu 30 % Strom).",
      "Wasserkocher regelmäßig entkalken, da Kalkbelag die Wärmeübertragung massiv verschlechtert.",
      "Wasserkocher mit Temperaturwahl nutzen (z.B. 70–80 °C für Grüntee statt 100 °C Kochen)."
    ],
    "factors": [
      "Wassermenge",
      "Ausgangstemperatur des Wassers",
      "Verkalkungsgrad"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Wasserkocher im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Wasserkocher verbraucht im Schnitt ca. 80 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 28,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Wasserkocher?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 2200 Watt kostet eine Stunde Laufzeit rund 0,770 € (ca. 77,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Wasserkocher?",
        "answer": "Die monatlichen Stromkosten für Wasserkocher liegen bei durchschnittlicher Nutzung bei ca. 2,33 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Wasserkocher?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 2200 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1540 W und 3300 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Wasserkocher?",
        "answer": "Ein typischer Einsatz von Wasserkocher verursacht Stromkosten von ca. 0,03 € / Kochen."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Wasserkocher sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Wasserkocher auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Wasserkocher?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Wasserkocher exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2200 W × 1 h ÷ 1.000 × 0,35 € = 0,770 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Wasserkocher?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "kaffeemaschine",
      "herd",
      "mikrowelle"
    ],
    "relatedCalculators": [
      "/watt-rechner",
      "/stromkosten-pro-stunde"
    ]
  },
  "kaffeemaschine": {
    "slug": "kaffeemaschine",
    "name": "Kaffeemaschine / Kaffeevollautomat",
    "category": "Küche",
    "icon": "☕",
    "typicalWattage": 1450,
    "wattageMin": 1000,
    "wattageMax": 1800,
    "typicalUsageHours": 0.3,
    "typicalAnnualKwh": 110,
    "annualCostEuro": 38.5,
    "usageContext": "Täglich ca. 4–6 Tassen Kaffee inklusive Vorheizen, Spülen und Warmhaltefunktion",
    "calculationDefaults": {
      "watt": 1400,
      "hoursPerDay": 0.25
    },
    "shortDescription": "Ein Kaffeevollautomat verbraucht pro Tasse ca. 0,015 bis 0,03 kWh Strom. Über das Jahr summiert sich der Verbrauch inklusive Standby und Aufheizphasen auf ca. 80 bis 140 kWh (28–49 €).",
    "dutyCycleExplanation": "Der Durchlauferhitzer heizt während des Brühvorgangs mit voller Leistung. Im Bereitschaftsmodus hält das Thermoblock-System die Temperatur mit geringer Dauerleistung aufrecht.",
    "measurementTips": "Ermittle den 24h-Verbrauch des Vollautomaten mit einem Messgerät, um den Standby-Anteil zu erfassen.",
    "savingAdvice": [
      "Automatische Abschaltung (Auto-Off) auf 15 oder 30 Minuten nach dem letzten Bezug einstellen.",
      "Gerät regelmäßig entkalken.",
      "Bei Filterkaffeemaschinen die Warmhalteplatte ausschalten und den Kaffee in eine Isolierkanne umfüllen."
    ],
    "factors": [
      "Gerätetyp (Filter, Siebträger, Kapsel, Vollautomat)",
      "Tassen pro Tag",
      "Abschaltautomatik aktiviert"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Kaffeemaschine & Vollautomat im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Kaffeemaschine & Vollautomat verbraucht im Schnitt ca. 110 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 38,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Kaffeemaschine & Vollautomat?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 1400 Watt kostet eine Stunde Laufzeit rund 0,490 € (ca. 49,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Kaffeemaschine & Vollautomat?",
        "answer": "Die monatlichen Stromkosten für Kaffeemaschine & Vollautomat liegen bei durchschnittlicher Nutzung bei ca. 3,21 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Kaffeemaschine & Vollautomat?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 1400 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 980 W und 2100 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Kaffeemaschine & Vollautomat?",
        "answer": "Ein typischer Einsatz von Kaffeemaschine & Vollautomat verursacht Stromkosten von ca. 0,04 € / Zubereitung."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Kaffeemaschine & Vollautomat sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Kaffeemaschine & Vollautomat auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Kaffeemaschine & Vollautomat?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Kaffeemaschine & Vollautomat exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 1400 W × 1 h ÷ 1.000 × 0,35 € = 0,490 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Kaffeemaschine & Vollautomat?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "wasserkocher",
      "kuehlschrank"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/kwh-rechner"
    ]
  },
  "fernseher": {
    "slug": "fernseher",
    "name": "Fernseher / Smart TV",
    "category": "Unterhaltung & Büro",
    "icon": "📺",
    "typicalWattage": 120,
    "wattageMin": 50,
    "wattageMax": 280,
    "typicalUsageHours": 4,
    "typicalAnnualKwh": 175,
    "annualCostEuro": 61.25,
    "usageContext": "Ca. 3–4 Stunden Fernsehen oder Streaming pro Tag",
    "calculationDefaults": {
      "watt": 120,
      "hoursPerDay": 4
    },
    "shortDescription": "Ein 55- bis 65-Zoll-Fernseher verbraucht im Betrieb ca. 80 bis 180 Watt (bei HDR-Inhalten bis zu 220 Watt). Bei 4 Stunden täglicher Nutzung kostet das ca. 50 bis 80 € pro Jahr.",
    "dutyCycleExplanation": "LED-, OLED- und QLED-Displays verbrauchen kontinuierlich Strom; die Helligkeit und der HDR-Modus beeinflussen den Verbrauch um bis zu 50 %.",
    "measurementTips": "Messe bei typischer Raumhelligkeit mit deinem Standard-Bildmodus (Standard/Kino vs. Dynamisch).",
    "savingAdvice": [
      "Bildmodus auf „Kino“, „Film“ oder „Eco“ stellen statt des überstrahlten „Dynamisch“-Modus (spart 20–35 % Strom).",
      "HDR-Helligkeit bei normalem Fernsehen reduzieren.",
      "Schnellstart-Modus / Netzwerk-Standby im Menü deaktivieren, falls nicht zwingend benötigt."
    ],
    "factors": [
      "Bildschirmdiagonale (55\", 65\", 75\"+)",
      "Panel-Technologie (OLED, QLED, LED)",
      "HDR vs. SDR",
      "Hintergrundbeleuchtung"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Fernseher (Smart-TV 55-65\") im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Fernseher (Smart-TV 55-65\") verbraucht im Schnitt ca. 175 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 61,25 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Fernseher (Smart-TV 55-65\")?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 120 Watt kostet eine Stunde Laufzeit rund 0,042 € (ca. 4,2 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Fernseher (Smart-TV 55-65\")?",
        "answer": "Die monatlichen Stromkosten für Fernseher (Smart-TV 55-65\") liegen bei durchschnittlicher Nutzung bei ca. 5,10 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Fernseher (Smart-TV 55-65\")?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 120 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 84 W und 180 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Fernseher (Smart-TV 55-65\")?",
        "answer": "Ein typischer Einsatz von Fernseher (Smart-TV 55-65\") verursacht Stromkosten von ca. 0,17 € / 4 Stunden."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Fernseher (Smart-TV 55-65\") sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Fernseher (Smart-TV 55-65\") auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Fernseher (Smart-TV 55-65\")?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Fernseher (Smart-TV 55-65\") exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Fernseher (Smart-TV 55-65\")?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "ps5",
      "xbox",
      "gaming-pc",
      "soundbar"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-stunde",
      "/stromkosten-rechner"
    ]
  },
  "gaming-pc": {
    "slug": "gaming-pc",
    "name": "Gaming-PC",
    "category": "Unterhaltung & Büro",
    "icon": "🎮",
    "typicalWattage": 400,
    "wattageMin": 200,
    "wattageMax": 750,
    "typicalUsageHours": 4,
    "typicalAnnualKwh": 584,
    "annualCostEuro": 204.4,
    "usageContext": "3–4 Stunden intensives Gaming pro Tag bei 350–500 Watt Systemlast",
    "calculationDefaults": {
      "watt": 400,
      "hoursPerDay": 4
    },
    "shortDescription": "Ein moderner Gaming-PC (z.B. RTX 4070/4080 + Ryzen 7 / Core i7) zieht unter Volllast ca. 350 bis 550 Watt aus der Steckdose. Bei 4 Stunden täglichem Zocken entstehen Stromkosten von ca. 180 bis 280 € im Jahr.",
    "dutyCycleExplanation": "Im Leerlauf (Desktop) verbraucht das System ca. 50–80 Watt, bei rechenintensiven 3D-Spielen steigt der Verbrauch sprunghaft auf 300 bis 600+ Watt an.",
    "measurementTips": "Messe mit einem Strommessgerät über eine Gaming-Session hinweg den Durchschnitts- und Spitzenverbrauch.",
    "savingAdvice": [
      "FPS-Begrenzung (Framerate Cap) im Treiber aktivieren (z.B. auf die Monitor-Refreshrate von 144 Hz)",
      "Grafikkarte leicht undervolten: spart oft 50–100 Watt bei identischer Performance.",
      "PC nach dem Spielen in den Energiesparmodus versetzen oder herunterfahren statt im Menü laufen zu lassen."
    ],
    "factors": [
      "Grafikkarte (GPU) & Prozessor (CPU)",
      "Monitor-Auflösung & Detailstufe",
      "FPS-Begrenzer aktiv",
      "RGB-Beleuchtung & Lüfter"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Gaming-PC (High-End) im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Gaming-PC (High-End) verbraucht im Schnitt ca. 450 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 157,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Gaming-PC (High-End)?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 400 Watt kostet eine Stunde Laufzeit rund 0,140 € (ca. 14,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Gaming-PC (High-End)?",
        "answer": "Die monatlichen Stromkosten für Gaming-PC (High-End) liegen bei durchschnittlicher Nutzung bei ca. 13,13 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Gaming-PC (High-End)?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 400 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 280 W und 600 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Gaming-PC (High-End)?",
        "answer": "Ein typischer Einsatz von Gaming-PC (High-End) verursacht Stromkosten von ca. 0,56 € / 4 Stunden Session."
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
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 400 W × 1 h ÷ 1.000 × 0,35 € = 0,140 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Gaming-PC (High-End)?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "bnetza"
    ],
    "relatedDevices": [
      "pc",
      "monitor",
      "ps5",
      "xbox",
      "laptop"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/stromkosten-pro-stunde",
      "/watt-rechner"
    ]
  },
  "pc": {
    "slug": "pc",
    "name": "Office-PC / Desktop-Computer",
    "category": "Unterhaltung & Büro",
    "icon": "🖥️",
    "typicalWattage": 90,
    "wattageMin": 40,
    "wattageMax": 180,
    "typicalUsageHours": 8,
    "typicalAnnualKwh": 260,
    "annualCostEuro": 91,
    "usageContext": "8 Stunden Homeoffice oder Büroarbeit pro Werktag",
    "calculationDefaults": {
      "watt": 90,
      "hoursPerDay": 8
    },
    "shortDescription": "Ein klassischer Desktop-Office-PC verbraucht beim Arbeiten ca. 60 bis 120 Watt (ohne Monitor). Bei 8 Stunden Homeoffice pro Tag kostet das ca. 60 bis 100 € pro Jahr.",
    "dutyCycleExplanation": "Office-Anwendungen (Browser, Office, E-Mail) fordern moderne Mehrkern-Prozessoren kaum, sodass der PC die meiste Zeit in energieeffizienten Low-Power-States arbeitet.",
    "measurementTips": "Messe PC und Monitor zusammen an einer gemeinsamen Mehrfachsteckdose über einen ganzen Arbeitstag.",
    "savingAdvice": [
      "Energiesparplan „Ausbalanciert“ in Windows oder macOS nutzen.",
      "Bildschirm-Standby nach 10 Minuten Inaktivität einstellen.",
      "Für reine Office-Arbeit auf einen sparsamen Mini-PC oder ein Laptop umsteigen."
    ],
    "factors": [
      "Integrierte vs. dedizierte Grafikkarte",
      "Netzteil-Effizienzklasse (80 Plus Gold/Platinum)",
      "Anzahl der Bildschirme"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Desktop-PC / Office-Rechner im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Desktop-PC / Office-Rechner verbraucht im Schnitt ca. 180 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 63,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Desktop-PC / Office-Rechner?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 120 Watt kostet eine Stunde Laufzeit rund 0,042 € (ca. 4,2 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Desktop-PC / Office-Rechner?",
        "answer": "Die monatlichen Stromkosten für Desktop-PC / Office-Rechner liegen bei durchschnittlicher Nutzung bei ca. 5,25 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Desktop-PC / Office-Rechner?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 120 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 84 W und 180 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Desktop-PC / Office-Rechner?",
        "answer": "Ein typischer Einsatz von Desktop-PC / Office-Rechner verursacht Stromkosten von ca. 0,25 € / 6 Stunden Arbeit."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Desktop-PC / Office-Rechner sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Desktop-PC / Office-Rechner auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Desktop-PC / Office-Rechner?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Desktop-PC / Office-Rechner exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Desktop-PC / Office-Rechner?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "laptop",
      "monitor",
      "gaming-pc",
      "nas"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/stromkosten-pro-monat"
    ]
  },
  "laptop": {
    "slug": "laptop",
    "name": "Laptop / Notebook",
    "category": "Unterhaltung & Büro",
    "icon": "💻",
    "typicalWattage": 40,
    "wattageMin": 15,
    "wattageMax": 90,
    "typicalUsageHours": 8,
    "typicalAnnualKwh": 115,
    "annualCostEuro": 40.25,
    "usageContext": "8 Stunden tägliche Nutzung im Homeoffice oder Studium",
    "calculationDefaults": {
      "watt": 40,
      "hoursPerDay": 8
    },
    "shortDescription": "Ein Laptop verbraucht im Office-Betrieb lediglich 20 bis 50 Watt und ist damit um das 3- bis 5-Fache sparsamer als ein herkömmlicher Desktop-PC.",
    "dutyCycleExplanation": "Laptops sind von Grund auf auf maximale Akkulaufzeit und Energieeffizienz getrimmt (sparsame Mobilprozessoren und LED-Panels).",
    "measurementTips": "Das Netzteil an ein Strommessgerät anschließen und über einen Arbeitszyklus (inkl. Laden) messen.",
    "savingAdvice": [
      "Bildschirmhelligkeit an die Umgebungsbeleuchtung anpassen.",
      "Nicht genutzte Peripheriegeräte (externe Festplatten, RGB-Zubehör) trennen.",
      "Netzteil nach vollständigem Laden vom Strom trennen, wenn das Laptop nicht genutzt wird."
    ],
    "factors": [
      "Displayhelligkeit",
      "Office-Betrieb vs. Videobearbeitung/Rendering",
      "Effizienz des Netzteils"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Laptop / Notebook im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Laptop / Notebook verbraucht im Schnitt ca. 75 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 26,25 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Laptop / Notebook?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 50 Watt kostet eine Stunde Laufzeit rund 0,018 € (ca. 1,8 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Laptop / Notebook?",
        "answer": "Die monatlichen Stromkosten für Laptop / Notebook liegen bei durchschnittlicher Nutzung bei ca. 2,19 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Laptop / Notebook?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 50 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 35 W und 75 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Laptop / Notebook?",
        "answer": "Ein typischer Einsatz von Laptop / Notebook verursacht Stromkosten von ca. 0,11 € / 6 Stunden Arbeit."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Laptop / Notebook sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Laptop / Notebook auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Laptop / Notebook?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Laptop / Notebook exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 50 W × 1 h ÷ 1.000 × 0,35 € = 0,018 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Laptop / Notebook?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "pc",
      "monitor",
      "gaming-pc"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/watt-rechner"
    ]
  },
  "monitor": {
    "slug": "monitor",
    "name": "Monitor / PC-Bildschirm",
    "category": "Unterhaltung & Büro",
    "icon": "🖥️",
    "typicalWattage": 35,
    "wattageMin": 18,
    "wattageMax": 90,
    "typicalUsageHours": 8,
    "typicalAnnualKwh": 100,
    "annualCostEuro": 35,
    "usageContext": "8 Stunden Homeoffice oder Gaming pro Tag",
    "calculationDefaults": {
      "watt": 35,
      "hoursPerDay": 8
    },
    "shortDescription": "Ein Standard-27-Zoll-Monitor verbraucht ca. 25 bis 45 Watt. Große Ultra-Wide- oder 4K-Bildschirme mit hoher Bildwiederholrate benötigen 50 bis 80 Watt.",
    "dutyCycleExplanation": "Die Leistungsaufnahme eines Monitors hängt fast ausschließlich von der eingestellten Hintergrundbeleuchtung (Backlight) und der Bildwiederholfrequenz (Hz) ab.",
    "measurementTips": "Messe die Leistungsaufnahme bei verschiedenen Helligkeitsstufen (z.B. 100 % vs. 50 %).",
    "savingAdvice": [
      "Helligkeit auf ergonomische 60–70 % reduzieren statt 100 % (spart ca. 20–30 % Strom).",
      "Automatischen Ruhezustand nach 5–10 Minuten Inaktivität im Betriebssystem aktivieren.",
      "Monitor per schaltbarer Steckdosenleiste vom Netz trennen, um Standby-Verluste zu stoppen."
    ],
    "factors": [
      "Bildschirmdiagonale & Auflösung (Full HD vs. 4K)",
      "Helligkeitseinstellung",
      "Bildwiederholfrequenz (60 Hz vs. 144 Hz)"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein PC-Monitor (27-32\") im Durchschnitt pro Jahr?",
        "answer": "Ein moderner PC-Monitor (27-32\") verbraucht im Schnitt ca. 60 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 21,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von PC-Monitor (27-32\")?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 35 Watt kostet eine Stunde Laufzeit rund 0,012 € (ca. 1,2 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für PC-Monitor (27-32\")?",
        "answer": "Die monatlichen Stromkosten für PC-Monitor (27-32\") liegen bei durchschnittlicher Nutzung bei ca. 1,75 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer PC-Monitor (27-32\")?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 35 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 25 W und 53 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von PC-Monitor (27-32\")?",
        "answer": "Ein typischer Einsatz von PC-Monitor (27-32\") verursacht Stromkosten von ca. 0,07 € / 6 Stunden Betrieb."
      },
      {
        "question": "Wie kann man den Stromverbrauch von PC-Monitor (27-32\") sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht PC-Monitor (27-32\") auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten PC-Monitor (27-32\")?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von PC-Monitor (27-32\") exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 35 W × 1 h ÷ 1.000 × 0,35 € = 0,012 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für PC-Monitor (27-32\")?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "pc",
      "gaming-pc",
      "laptop"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-stunde",
      "/watt-rechner"
    ]
  },
  "ps5": {
    "slug": "ps5",
    "name": "PlayStation 5 (PS5)",
    "category": "Unterhaltung & Büro",
    "icon": "🕹️",
    "typicalWattage": 200,
    "wattageMin": 70,
    "wattageMax": 230,
    "typicalUsageHours": 3,
    "typicalAnnualKwh": 219,
    "annualCostEuro": 76.65,
    "usageContext": "3 Stunden Gaming pro Tag bei ca. 180–210 Watt Leistungsaufnahme",
    "calculationDefaults": {
      "watt": 200,
      "hoursPerDay": 3
    },
    "shortDescription": "Die PlayStation 5 verbraucht beim Spielen moderner PS5-Titel ca. 180 bis 220 Watt. Bei 3 Stunden täglicher Spielzeit entstehen jährliche Stromkosten von ca. 70 bis 85 €.",
    "dutyCycleExplanation": "Im Hauptmenü verbraucht die PS5 ca. 50 Watt, beim Video-Streaming ca. 70 Watt und bei grafisch aufwendigen Spielen mit Raytracing bis zu 220 Watt.",
    "measurementTips": "Zwischensteckdose vor die Konsole schalten und während des Spielens ablesen.",
    "savingAdvice": [
      "Energiesparmodus und Ruhemodus mit USB-Stromabschaltung nach 3 Stunden konfigurieren.",
      "Für Medien-Streaming (Netflix, YouTube) sparsamere Smart-TV-Apps oder Streaming-Sticks nutzen.",
      "Konsole nach längeren Spielpausen komplett ausschalten statt im Standby zu belassen."
    ],
    "factors": [
      "Gespieltes Spiel (PS4 vs. anspruchsvolle PS5-Titel mit Raytracing)",
      "Video-Streaming vs. Gaming",
      "Ruhezustand-Einstellungen"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein PlayStation 5 (PS5) im Durchschnitt pro Jahr?",
        "answer": "Ein moderner PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 52,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von PlayStation 5 (PS5)?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 200 Watt kostet eine Stunde Laufzeit rund 0,070 € (ca. 7,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für PlayStation 5 (PS5)?",
        "answer": "Die monatlichen Stromkosten für PlayStation 5 (PS5) liegen bei durchschnittlicher Nutzung bei ca. 4,38 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer PlayStation 5 (PS5)?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 200 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 140 W und 300 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von PlayStation 5 (PS5)?",
        "answer": "Ein typischer Einsatz von PlayStation 5 (PS5) verursacht Stromkosten von ca. 0,21 € / 3 Stunden Spielen."
      },
      {
        "question": "Wie kann man den Stromverbrauch von PlayStation 5 (PS5) sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht PlayStation 5 (PS5) auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten PlayStation 5 (PS5)?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von PlayStation 5 (PS5) exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 200 W × 1 h ÷ 1.000 × 0,35 € = 0,070 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für PlayStation 5 (PS5)?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "xbox",
      "gaming-pc",
      "fernseher"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/watt-rechner"
    ]
  },
  "xbox": {
    "slug": "xbox",
    "name": "Xbox Series X / Series S",
    "category": "Unterhaltung & Büro",
    "icon": "🎮",
    "typicalWattage": 180,
    "wattageMin": 60,
    "wattageMax": 210,
    "typicalUsageHours": 3,
    "typicalAnnualKwh": 197,
    "annualCostEuro": 69,
    "usageContext": "3 Stunden tägliches Gaming",
    "calculationDefaults": {
      "watt": 180,
      "hoursPerDay": 3
    },
    "shortDescription": "Die Xbox Series X verbraucht beim Gaming ca. 160 bis 200 Watt, die kompaktere Series S begnügt sich mit ca. 70 bis 90 Watt.",
    "dutyCycleExplanation": "Ähnlich wie bei PCs skaliert die Leistungsaufnahme mit der grafischen Auslastung des Spiels.",
    "measurementTips": "Verbrauch während einer typischen Spielrunde mit einem Energiekosten-Messgerät ermitteln.",
    "savingAdvice": [
      "Standardmäßig den Energiesparmodus „Herunterfahren (Energiesparmodus)“ statt „Standby (Sofortiges Einschalten)“ wählen.",
      "Automatische Abschaltung nach 60 Minuten Inaktivität in den Systemeinstellungen aktivieren.",
      "Controller-Ladezeiten begrenzen und Streaming-Apps lieber auf Smart-TVs nutzen."
    ],
    "factors": [
      "Modell (Series X vs. Series S)",
      "Instant-On Standby Modus aktiviert",
      "Grafikmodus (Performance vs. Quality)"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Xbox Series X im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Xbox Series X verbraucht im Schnitt ca. 140 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 49,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Xbox Series X?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 190 Watt kostet eine Stunde Laufzeit rund 0,067 € (ca. 6,7 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Xbox Series X?",
        "answer": "Die monatlichen Stromkosten für Xbox Series X liegen bei durchschnittlicher Nutzung bei ca. 4,08 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Xbox Series X?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 190 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 133 W und 285 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Xbox Series X?",
        "answer": "Ein typischer Einsatz von Xbox Series X verursacht Stromkosten von ca. 0,20 € / 3 Stunden Spielen."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Xbox Series X sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Xbox Series X auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Xbox Series X?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Xbox Series X exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 190 W × 1 h ÷ 1.000 × 0,35 € = 0,067 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Xbox Series X?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "ps5",
      "gaming-pc",
      "fernseher"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/standby-strom"
    ]
  },
  "klimaanlage": {
    "slug": "klimaanlage",
    "name": "Klimaanlage (Split & Mobil)",
    "category": "Klima & Heizen",
    "icon": "❄️",
    "typicalWattage": 1000,
    "wattageMin": 600,
    "wattageMax": 2500,
    "typicalUsageHours": 6,
    "typicalAnnualKwh": 360,
    "annualCostEuro": 126,
    "usageContext": "Sommerbetrieb an heißen Tagen (ca. 40–60 Tage im Jahr für je 4–8 Stunden)",
    "calculationDefaults": {
      "watt": 1000,
      "hoursPerDay": 6
    },
    "shortDescription": "Eine mobile Klimaanlage (Monoblock) verbraucht ca. 800 bis 1.400 Watt pro Stunde (ca. 28–49 Cent/h). Eine fest eingebaute Split-Klimaanlage arbeitet mit Inverter-Technologie rund 40–60 % effizienter (ca. 400–800 Watt Durchschnittsaufnahme).",
    "dutyCycleExplanation": "Mobile Geräte schalten den Kompressor meist nur an/aus, während moderne Split-Klimageräte die Leistung stufenlos an den Kühlbedarf anpassen.",
    "measurementTips": "Messe über einen heißen Sommertag hinweg, da der Verbrauch stark von der Außentemperatur und Sonneneinstrahlung abhängt.",
    "savingAdvice": [
      "Temperaturdifferenz zur Außentemperatur auf maximal 5–6 °C begrenzen (24–25 °C Raumtemperatur sind ideal).",
      "Fenster und Türen tagsüber geschlossen halten und außenliegende Rollos/Jalousien herunterlassen.",
      "Abluftschlauch bei mobilen Geräten mit einer dichten Fensterabdichtung isolieren."
    ],
    "factors": [
      "Bauart (Split-Gerät vs. Monoblock mit Abluftschlauch)",
      "Raumgröße & Dämmung",
      "Sonneneinstrahlung",
      "Eingestellte Zieltemperatur"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Klimaanlage (Split-Gerät) im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Klimaanlage (Split-Gerät) verbraucht im Schnitt ca. 350 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 122,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Klimaanlage (Split-Gerät)?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 800 Watt kostet eine Stunde Laufzeit rund 0,280 € (ca. 28,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Klimaanlage (Split-Gerät)?",
        "answer": "Die monatlichen Stromkosten für Klimaanlage (Split-Gerät) liegen bei durchschnittlicher Nutzung bei ca. 10,21 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Klimaanlage (Split-Gerät)?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 800 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 560 W und 1200 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Klimaanlage (Split-Gerät)?",
        "answer": "Ein typischer Einsatz von Klimaanlage (Split-Gerät) verursacht Stromkosten von ca. 1,40 € / 5 Stunden Kühlung."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Klimaanlage (Split-Gerät) sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Klimaanlage (Split-Gerät) auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Klimaanlage (Split-Gerät)?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Klimaanlage (Split-Gerät) exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 800 W × 1 h ÷ 1.000 × 0,35 € = 0,280 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Klimaanlage (Split-Gerät)?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bnetza",
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "ventilator",
      "luftentfeuchter",
      "heizluefter"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-stunde",
      "/stromkosten-rechner",
      "/watt-rechner"
    ]
  },
  "ventilator": {
    "slug": "ventilator",
    "name": "Ventilator (Stand- & Turmventilator)",
    "category": "Klima & Heizen",
    "icon": "💨",
    "typicalWattage": 45,
    "wattageMin": 20,
    "wattageMax": 80,
    "typicalUsageHours": 8,
    "typicalAnnualKwh": 35,
    "annualCostEuro": 12.25,
    "usageContext": "Sommerbetrieb für ca. 8 Stunden pro Tag",
    "calculationDefaults": {
      "watt": 45,
      "hoursPerDay": 8
    },
    "shortDescription": "Ein Ventilator verbraucht auf mittlerer Stufe lediglich ca. 30 bis 50 Watt. Ein ganzer Tag Betrieb (8 Stunden) kostet nur ca. 10 bis 14 Cent.",
    "dutyCycleExplanation": "Ventilatoren kühlen nicht die Raumluft ab, sondern erzeugen einen kühlenden Windchill-Effekt auf der Haut durch Verdunstungskühlung.",
    "measurementTips": "Einfaches Messgerät zeigt die Leistung auf Stufe 1, 2 und 3 direkt an.",
    "savingAdvice": [
      "Ventilator nur einschalten, wenn sich tatsächlich Personen im Raum aufhalten (er kühlt nur die Haut, nicht die Luft).",
      "Niedrigste angenehme Geschwindigkeitsstufe wählen (verbraucht oft 50 % weniger als Maximalstufe).",
      "Nachts kühle Außenluft durch gezieltes Querlüften hereinholen statt Dauerbetrieb am Tag."
    ],
    "factors": [
      "Geschwindigkeitsstufe",
      "Motor-Typ (AC vs. DC)",
      "Oszillation aktiv"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Ventilator / Standventilator im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Ventilator / Standventilator verbraucht im Schnitt ca. 35 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 12,25 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Ventilator / Standventilator?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 45 Watt kostet eine Stunde Laufzeit rund 0,016 € (ca. 1,6 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Ventilator / Standventilator?",
        "answer": "Die monatlichen Stromkosten für Ventilator / Standventilator liegen bei durchschnittlicher Nutzung bei ca. 1,02 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Ventilator / Standventilator?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 45 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 31 W und 68 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Ventilator / Standventilator?",
        "answer": "Ein typischer Einsatz von Ventilator / Standventilator verursacht Stromkosten von ca. 0,10 € / 6 Stunden."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Ventilator / Standventilator sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Ventilator / Standventilator auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Ventilator / Standventilator?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Ventilator / Standventilator exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 45 W × 1 h ÷ 1.000 × 0,35 € = 0,016 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Ventilator / Standventilator?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "klimaanlage",
      "luftentfeuchter"
    ],
    "relatedCalculators": [
      "/watt-rechner",
      "/stromkosten-pro-stunde"
    ]
  },
  "heizluefter": {
    "slug": "heizluefter",
    "name": "Heizlüfter / Elektro-Radiator",
    "category": "Klima & Heizen",
    "icon": "🔥",
    "typicalWattage": 2000,
    "wattageMin": 1000,
    "wattageMax": 2500,
    "typicalUsageHours": 4,
    "typicalAnnualKwh": 480,
    "annualCostEuro": 168,
    "usageContext": "Zusatzheizung in Übergangszeiten oder im Winter für 2–4 Stunden täglich",
    "calculationDefaults": {
      "watt": 2000,
      "hoursPerDay": 4
    },
    "shortDescription": "Ein elektrischer Heizlüfter zieht auf Stufe 2 in der Regel 2.000 Watt. Eine Stunde Heizen kostet rund 70 Cent – bei täglicher Nutzung wird er schnell zum teuersten Stromfresser im Haus.",
    "dutyCycleExplanation": "Elektrische Direktheizungen wandeln Strom 1:1 in Wärme um (Wirkungsgrad 100 %, aber JAZ von nur 1 gegenüber einer Wärmepumpe mit JAZ 3–4).",
    "measurementTips": "Leistungsschalter prüfen: Meist gibt es Stufe 1 (ca. 1.000 W) und Stufe 2 (ca. 2.000 W).",
    "savingAdvice": [
      "Heizlüfter ausschließlich als kurzzeitige Not- oder Zusatzheizung für 15–30 Minuten nutzen.",
      "Thermostat auf niedrigste Wohlfühltemperatur einstellen und Türen geschlossen halten.",
      "Auf dauerhafte Konvektoren oder moderne Infrarotheizungen setzen, wenn regelmäßiger Heizbedarf besteht."
    ],
    "factors": [
      "Heizstufe (1.000 W vs. 2.000 W)",
      "Thermostat-Einstellung",
      "Raumgröße"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Heizlüfter / Elektro-Heizung im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Heizlüfter / Elektro-Heizung verbraucht im Schnitt ca. 300 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 105,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Heizlüfter / Elektro-Heizung?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 2000 Watt kostet eine Stunde Laufzeit rund 0,700 € (ca. 70,0 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Heizlüfter / Elektro-Heizung?",
        "answer": "Die monatlichen Stromkosten für Heizlüfter / Elektro-Heizung liegen bei durchschnittlicher Nutzung bei ca. 8,75 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Heizlüfter / Elektro-Heizung?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 2000 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1400 W und 3000 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Heizlüfter / Elektro-Heizung?",
        "answer": "Ein typischer Einsatz von Heizlüfter / Elektro-Heizung verursacht Stromkosten von ca. 1,40 € / 2 Stunden Heizen."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Heizlüfter / Elektro-Heizung sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Heizlüfter / Elektro-Heizung auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Heizlüfter / Elektro-Heizung?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Heizlüfter / Elektro-Heizung exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Heizlüfter / Elektro-Heizung?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bnetza",
      "stromspiegel"
    ],
    "relatedDevices": [
      "klimaanlage",
      "waermepumpe",
      "ventilator"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-stunde",
      "/stromkosten-rechner",
      "/stromfresser"
    ]
  },
  "luftentfeuchter": {
    "slug": "luftentfeuchter",
    "name": "Luftentfeuchter / Bautrockner",
    "category": "Klima & Heizen",
    "icon": "💧",
    "typicalWattage": 300,
    "wattageMin": 180,
    "wattageMax": 650,
    "typicalUsageHours": 8,
    "typicalAnnualKwh": 450,
    "annualCostEuro": 157.5,
    "usageContext": "Täglicher Betrieb im feuchten Keller oder nach Sanierungen für 6–10 Stunden",
    "calculationDefaults": {
      "watt": 320,
      "hoursPerDay": 8
    },
    "shortDescription": "Ein elektrischer Kondensations-Luftentfeuchter verbraucht ca. 250 bis 450 Watt. Bei 8 Stunden täglicher Entfeuchtung im Keller entstehen Stromkosten von ca. 70 bis 120 Cent pro Tag.",
    "dutyCycleExplanation": "Das Gerät arbeitet mit einem Kältekompressor, an dessen kalter Oberfläche die Feuchtigkeit kondensiert und abtropft.",
    "measurementTips": "Zwischensteckdose verwenden und den hygrostat-gesteuerten Gesamtverbrauch über 7 Tage protokollieren.",
    "savingAdvice": [
      "Zielfeuchtigkeit auf gesunde 50–55 % rel. Feuchte einstellen (nicht unnötig auf 40 % Dauerlauf regeln).",
      "Fenster und Türen während des Betriebs geschlossen halten, um nicht Außenfeuchtigkeit anzusaugen.",
      "Luftfilter regelmäßig reinigen, um den Luftdurchsatz und die Energieeffizienz hochzuhalten."
    ],
    "factors": [
      "Raumfeuchtigkeit & Raumtemperatur",
      "Hygrostat-Schwellenwert",
      "Kompressor-Leistung"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Luftentfeuchter im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Luftentfeuchter verbraucht im Schnitt ca. 280 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 98,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Luftentfeuchter?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 350 Watt kostet eine Stunde Laufzeit rund 0,122 € (ca. 12,3 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Luftentfeuchter?",
        "answer": "Die monatlichen Stromkosten für Luftentfeuchter liegen bei durchschnittlicher Nutzung bei ca. 8,17 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Luftentfeuchter?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 350 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 245 W und 525 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Luftentfeuchter?",
        "answer": "Ein typischer Einsatz von Luftentfeuchter verursacht Stromkosten von ca. 0,74 € / 6 Stunden."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Luftentfeuchter sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Luftentfeuchter auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Luftentfeuchter?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Luftentfeuchter exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 350 W × 1 h ÷ 1.000 × 0,35 € = 0,122 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Luftentfeuchter?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "klimaanlage",
      "ventilator",
      "heizluefter"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/kwh-rechner"
    ]
  },
  "aquarium": {
    "slug": "aquarium",
    "name": "Aquarium (Filter, Heizung, Licht)",
    "category": "Hobby & Spezial",
    "icon": "🐠",
    "typicalWattage": 80,
    "wattageMin": 25,
    "wattageMax": 350,
    "typicalUsageHours": 24,
    "typicalAnnualKwh": 350,
    "annualCostEuro": 122.5,
    "usageContext": "24h Filterbetrieb, 8–10h Beleuchtung, Heizstab getaktet auf 24–26 °C",
    "calculationDefaults": {
      "watt": 60,
      "hoursPerDay": 24
    },
    "shortDescription": "Ein typisches 120-Liter-Süßwasseraquarium verbraucht ca. 250 bis 400 kWh Strom pro Jahr (ca. 85 bis 140 €). Große Warmwasser- oder Meerwasseraquarien können über 1.000 kWh/Jahr benötigen.",
    "dutyCycleExplanation": "Der Filter läuft durchgehend (10–25 W), die LED-Beleuchtung ca. 8–10 Stunden (20–40 W) und der Heizstab (100–200 W) springt intervallweise je nach Raumtemperatur an.",
    "measurementTips": "Messe das gesamte Aquarium über mindestens 7 Tage an einer gemeinsamen Steckdosenleiste.",
    "savingAdvice": [
      "Alte Leuchtstoffröhren (T5/T8) durch moderne Aquarien-LEDs ersetzen (spart bis zu 50 % Lichtstrom).",
      "Aquarium mit Abdeckscheibe betreiben: Reduziert Verdunstungskälte und spart bis zu 40 % Heizenergie.",
      "Rückwand und Bodenplatte mit Styropor oder Kork isolieren."
    ],
    "factors": [
      "Beckengröße (Liter)",
      "Ziel-Wassertemperatur vs. Raumtemperatur",
      "LED- vs. Röhrenbeleuchtung",
      "Offenes vs. geschlossenes Becken"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Aquarium (100–200 Liter) im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Aquarium (100–200 Liter) verbraucht im Schnitt ca. 350 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 122,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Aquarium (100–200 Liter)?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 60 Watt kostet eine Stunde Laufzeit rund 0,021 € (ca. 2,1 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Aquarium (100–200 Liter)?",
        "answer": "Die monatlichen Stromkosten für Aquarium (100–200 Liter) liegen bei durchschnittlicher Nutzung bei ca. 10,21 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Aquarium (100–200 Liter)?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 60 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 42 W und 90 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Aquarium (100–200 Liter)?",
        "answer": "Ein typischer Einsatz von Aquarium (100–200 Liter) verursacht Stromkosten von ca. 0,34 € / 24 Stunden Dauerbetrieb."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Aquarium (100–200 Liter) sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Aquarium (100–200 Liter) auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Aquarium (100–200 Liter)?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Aquarium (100–200 Liter) exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 60 W × 1 h ÷ 1.000 × 0,35 € = 0,021 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Aquarium (100–200 Liter)?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "stromspiegel"
    ],
    "relatedDevices": [
      "pool",
      "whirlpool",
      "terrarium"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/stromkosten-pro-jahr"
    ]
  },
  "pool": {
    "slug": "pool",
    "name": "Poolpumpe / Swimmingpool",
    "category": "Hobby & Spezial",
    "icon": "🏊",
    "typicalWattage": 600,
    "wattageMin": 250,
    "wattageMax": 1500,
    "typicalUsageHours": 8,
    "typicalAnnualKwh": 720,
    "annualCostEuro": 252,
    "usageContext": "Sommersaison (Mai bis September) täglich ca. 6–10 Stunden Umwälzung",
    "calculationDefaults": {
      "watt": 600,
      "hoursPerDay": 8
    },
    "shortDescription": "Eine typische Sandfilteranlage für den Gartenpool verbraucht 400 bis 800 Watt. Bei 8 Stunden täglicher Filterzeit in der Badesaison entstehen Stromkosten von ca. 200 bis 350 €.",
    "dutyCycleExplanation": "Das Poolwasser sollte täglich mindestens 2- bis 3-mal komplett umgewälzt werden, um Algenbildung und Verschmutzung vorzubeugen.",
    "measurementTips": "Zeitschaltuhr und Messgerät kombinieren, um die tägliche Umwälzenergie zu erfassen.",
    "savingAdvice": [
      "Filterlaufzeiten an Wassertemperatur anpassen (Faustregel: Wassertemperatur geteilt durch 2 = Filterstunden).",
      "Zeitschaltuhr nutzen und Pumpenlaufzeit in günstige Nebenzeiten oder Solar-Mittagsstunden legen.",
      "Pool mit einer Solarplane abdecken, um Verdunstung und Wärmeverlust nachts zu minimieren."
    ],
    "factors": [
      "Poolvolumen (m³)",
      "Pumpenleistung (W)",
      "Filterlaufzeit pro Tag",
      "Zusätzliche Poolheizung/Wärmepumpe"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Poolpumpe / Filteranlage im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Poolpumpe / Filteranlage verbraucht im Schnitt ca. 480 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 168,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Poolpumpe / Filteranlage?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 500 Watt kostet eine Stunde Laufzeit rund 0,175 € (ca. 17,5 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Poolpumpe / Filteranlage?",
        "answer": "Die monatlichen Stromkosten für Poolpumpe / Filteranlage liegen bei durchschnittlicher Nutzung bei ca. 14,00 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Poolpumpe / Filteranlage?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 500 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 350 W und 750 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Poolpumpe / Filteranlage?",
        "answer": "Ein typischer Einsatz von Poolpumpe / Filteranlage verursacht Stromkosten von ca. 1,05 € / 6 Stunden Filterung."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Poolpumpe / Filteranlage sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Poolpumpe / Filteranlage auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Poolpumpe / Filteranlage?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Poolpumpe / Filteranlage exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 500 W × 1 h ÷ 1.000 × 0,35 € = 0,175 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Poolpumpe / Filteranlage?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bnetza",
      "uba"
    ],
    "relatedDevices": [
      "whirlpool",
      "aquarium",
      "klimaanlage"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-tag",
      "/stromkosten-rechner"
    ]
  },
  "whirlpool": {
    "slug": "whirlpool",
    "name": "Whirlpool / Hot Tub (Outdoor)",
    "category": "Hobby & Spezial",
    "icon": "🛁",
    "typicalWattage": 2500,
    "wattageMin": 1500,
    "wattageMax": 4000,
    "typicalUsageHours": 4,
    "typicalAnnualKwh": 2800,
    "annualCostEuro": 980,
    "usageContext": "Ganzjahresbetrieb im Garten bei 37–39 °C Wassertemperatur",
    "calculationDefaults": {
      "watt": 2500,
      "hoursPerDay": 3
    },
    "shortDescription": "Ein ganzjährig beheizter Outdoor-Whirlpool verbraucht ca. 2.000 bis 4.000 kWh Strom pro Jahr. Das entspricht jährlichen Stromkosten von rund 700 bis 1.400 €.",
    "dutyCycleExplanation": "Der Hauptverbrauch entsteht durch das ständige Halten der Wassertemperatur bei kalten Außentemperaturen im Herbst und Winter.",
    "measurementTips": "Whirlpools haben meist einen festen Starkstromanschluss oder Sicherungsautomaten, an dem ein Hutschienenzähler angebracht werden kann.",
    "savingAdvice": [
      "Hochwertige, passgenaue Thermoabdeckung mit mindestens 10–12 cm Stärke verwenden.",
      "Bei längerer Abwesenheit oder im tiefen Winter die Temperatur absenken (z.B. auf 25–30 °C).",
      "Whirlpool-Wärmepumpe nachrüsten: Reduziert die Heizkosten um bis zu 60–70 %."
    ],
    "factors": [
      "Dämmung der Wanne",
      "Qualität der Thermoabdeckung",
      "Außentemperatur (Winterbetrieb)",
      "Nutzungshäufigkeit der Massagedüsen"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Whirlpool / Outdoor Hot Tub im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Whirlpool / Outdoor Hot Tub verbraucht im Schnitt ca. 2200 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 770,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Whirlpool / Outdoor Hot Tub?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 2500 Watt kostet eine Stunde Laufzeit rund 0,875 € (ca. 87,5 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Whirlpool / Outdoor Hot Tub?",
        "answer": "Die monatlichen Stromkosten für Whirlpool / Outdoor Hot Tub liegen bei durchschnittlicher Nutzung bei ca. 64,17 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Whirlpool / Outdoor Hot Tub?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 2500 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1750 W und 3750 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Whirlpool / Outdoor Hot Tub?",
        "answer": "Ein typischer Einsatz von Whirlpool / Outdoor Hot Tub verursacht Stromkosten von ca. 2,10 € / Tag (Heizung & Zirkulation)."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Whirlpool / Outdoor Hot Tub sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Whirlpool / Outdoor Hot Tub auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Whirlpool / Outdoor Hot Tub?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Whirlpool / Outdoor Hot Tub exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2500 W × 1 h ÷ 1.000 × 0,35 € = 0,875 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Whirlpool / Outdoor Hot Tub?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "bnetza",
      "stromspiegel"
    ],
    "relatedDevices": [
      "pool",
      "sauna",
      "heizluefter"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-monat",
      "/stromkosten-rechner",
      "/stromfresser"
    ]
  },
  "3d-drucker": {
    "slug": "3d-drucker",
    "name": "3D-Drucker (FDM & SLA)",
    "category": "Hobby & Spezial",
    "icon": "🖨️",
    "typicalWattage": 150,
    "wattageMin": 60,
    "wattageMax": 350,
    "typicalUsageHours": 6,
    "typicalAnnualKwh": 180,
    "annualCostEuro": 63,
    "usageContext": "Drucksessions von 4–12 Stunden Dauer (Druckbett 60 °C, Düse 210 °C)",
    "calculationDefaults": {
      "watt": 120,
      "hoursPerDay": 4
    },
    "shortDescription": "Ein typischer FDM-3D-Drucker verbraucht beim Drucken ca. 100 bis 200 Watt. Ein 10-stündiger Druckauftrag kostet rund 35 bis 70 Cent Strom.",
    "dutyCycleExplanation": "Beim Aufheizen von Druckbett und Hotend zieht der Drucker ca. 250–350 Watt. Während des Druckens taktet das Heizbett, sodass der Schnitt bei 100–150 W liegt.",
    "measurementTips": "Zwischensteckdose anschließen und den Gesamt-kWh-Wert für einen kompletten Druckvorgang auslesen.",
    "savingAdvice": [
      "Druckbett nach den ersten Schichten temperaturreduzieren oder beheiztes Gehäuse (Enclosure) nutzen.",
      "Druckaufträge bündeln, um Aufheizphasen von Bett und Nozzle zu reduzieren.",
      "Drucker nach Fertigstellung per smarter Steckdose oder Schalter automatisch abschalten."
    ],
    "factors": [
      "Druckbett-Temperatur (PLA 60 °C vs. ABS/PETG 80–100 °C)",
      "Gehäuse / Einhausung vorhanden",
      "Druckgeschwindigkeit"
    ],
    "faq": [
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
        "answer": "Ein typischer Einsatz von 3D-Drucker (FDM) verursacht Stromkosten von ca. 0,42 € / 8 Stunden Druck."
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
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "gaming-pc",
      "pc",
      "server"
    ],
    "relatedCalculators": [
      "/stromkosten-rechner",
      "/watt-rechner"
    ]
  },
  "nas": {
    "slug": "nas",
    "name": "NAS (Netzwerkspeicher / Home Server)",
    "category": "Unterhaltung & Büro",
    "icon": "💾",
    "typicalWattage": 28,
    "wattageMin": 12,
    "wattageMax": 65,
    "typicalUsageHours": 24,
    "typicalAnnualKwh": 245,
    "annualCostEuro": 85.75,
    "usageContext": "24/7 Dauerbetrieb für Backups, Streaming und Cloud-Speicher",
    "calculationDefaults": {
      "watt": 28,
      "hoursPerDay": 24
    },
    "shortDescription": "Ein 2- bis 4-Bay-NAS verbraucht im Dauerbetrieb ca. 20 bis 40 Watt. Bei 24/7-Laufzeit summiert sich das auf ca. 175 bis 350 kWh bzw. 60 bis 120 € pro Jahr.",
    "dutyCycleExplanation": "Im Festplatten-Ruhezustand (HDD Spindown) sinkt der Verbrauch auf 8–15 Watt, bei aktivem Lese-/Schreibzugriff liegt er bei 25–45 Watt.",
    "measurementTips": "Messe das NAS über 48 Stunden, um den realen Mix aus Idle-, Spindown- und Zugriffszeiten zu erfassen.",
    "savingAdvice": [
      "Festplatten-Ruhezustand (HDD Sleep / Spindown) nach 20 Minuten Inaktivität im Betriebssystem aktivieren.",
      "Zeitplan-Steuerung nutzen: NAS nachts zwischen 1:00 und 6:00 Uhr automatisch herunterfahren, falls keine nächtlichen Backups laufen.",
      "Sparsamen Prozessor (ARM oder Intel N100) bei Neuanschaffung wählen."
    ],
    "factors": [
      "Anzahl und Typ der Festplatten (HDDs vs. SSDs)",
      "Festplatten-Spindown aktiv",
      "CPU-Auslastung (Transcoding, Docker-Container)"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein NAS-Server / Netzwerkspeicher im Durchschnitt pro Jahr?",
        "answer": "Ein moderner NAS-Server / Netzwerkspeicher verbraucht im Schnitt ca. 260 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 91,00 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von NAS-Server / Netzwerkspeicher?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 30 Watt kostet eine Stunde Laufzeit rund 0,011 € (ca. 1,1 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für NAS-Server / Netzwerkspeicher?",
        "answer": "Die monatlichen Stromkosten für NAS-Server / Netzwerkspeicher liegen bei durchschnittlicher Nutzung bei ca. 7,58 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer NAS-Server / Netzwerkspeicher?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 30 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 21 W und 45 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von NAS-Server / Netzwerkspeicher?",
        "answer": "Ein typischer Einsatz von NAS-Server / Netzwerkspeicher verursacht Stromkosten von ca. 0,25 € / 24 Stunden Dauerbetrieb."
      },
      {
        "question": "Wie kann man den Stromverbrauch von NAS-Server / Netzwerkspeicher sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht NAS-Server / Netzwerkspeicher auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten NAS-Server / Netzwerkspeicher?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von NAS-Server / Netzwerkspeicher exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 30 W × 1 h ÷ 1.000 × 0,35 € = 0,011 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für NAS-Server / Netzwerkspeicher?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba"
    ],
    "relatedDevices": [
      "server",
      "pc",
      "wlan-router"
    ],
    "relatedCalculators": [
      "/stromkosten-pro-jahr",
      "/stromkosten-rechner",
      "/watt-rechner"
    ]
  },
  "server": {
    "slug": "server",
    "name": "Home Server / Homelab",
    "category": "Unterhaltung & Büro",
    "icon": "🖧",
    "typicalWattage": 65,
    "wattageMin": 25,
    "wattageMax": 200,
    "typicalUsageHours": 24,
    "typicalAnnualKwh": 570,
    "annualCostEuro": 199.5,
    "usageContext": "24/7 Heimserver für Virtualisierung (Proxmox/Docker), Smart Home und Medien",
    "calculationDefaults": {
      "watt": 65,
      "hoursPerDay": 24
    },
    "shortDescription": "Ein kleiner Heimserver oder ein ausgemusterter PC verbraucht im 24/7-Betrieb ca. 40 bis 90 Watt. Das entspricht jährlichen Stromkosten von ca. 120 bis 280 €.",
    "dutyCycleExplanation": "Der meiste Verbrauch entsteht im Leerlauf (Idle), da viele Serverdienste zwar ständig lauschen, die CPU aber nur zu wenigen Prozent auslasten.",
    "measurementTips": "Zwischensteckdose vor das Netzteil schalten und die durchschnittliche Wattzahl über eine Woche ermitteln.",
    "savingAdvice": [
      "C-States im BIOS aktivieren (ermöglicht der CPU, in tiefste Stromsparmodi zu wechseln).",
      "Alte Enterprise-Server (z.B. duale Xeon-CPUs) durch moderne Mini-PCs (Intel Core 12th/13th Gen oder AMD Ryzen) ersetzen (spart 50–150 Watt Dauerlast = 150–450 €/Jahr).",
      "Hocheffizientes Netzteil (80 Plus Gold oder Titanium) verwenden."
    ],
    "factors": [
      "Hardware-Plattform (Mini-PC vs. alter Enterprise-Server)",
      "C-State-Konfiguration im BIOS/OS",
      "Anzahl der 3,5\"-Festplatten"
    ],
    "faq": [
      {
        "question": "Wie viel Strom verbraucht ein Heimserver / Home Server im Durchschnitt pro Jahr?",
        "answer": "Ein moderner Heimserver / Home Server verbraucht im Schnitt ca. 570 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 199,50 Euro."
      },
      {
        "question": "Was kostet 1 Stunde Betrieb von Heimserver / Home Server?",
        "answer": "Bei einer durchschnittlichen Leistung von ca. 65 Watt kostet eine Stunde Laufzeit rund 0,023 € (ca. 2,3 Cent)."
      },
      {
        "question": "Wie hoch sind die monatlichen Stromkosten für Heimserver / Home Server?",
        "answer": "Die monatlichen Stromkosten für Heimserver / Home Server liegen bei durchschnittlicher Nutzung bei ca. 16,63 € pro Monat."
      },
      {
        "question": "Wie viel Watt Leistung hat ein typischer Heimserver / Home Server?",
        "answer": "Die typische Anschlussleistung liegt bei ca. 65 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 46 W und 98 W schwanken."
      },
      {
        "question": "Was kostet ein einzelner Nutzungsvorgang von Heimserver / Home Server?",
        "answer": "Ein typischer Einsatz von Heimserver / Home Server verursacht Stromkosten von ca. 0,55 € / 24 Stunden Dauerbetrieb."
      },
      {
        "question": "Wie kann man den Stromverbrauch von Heimserver / Home Server sofort um 15–25 % senken?",
        "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
      },
      {
        "question": "Verbraucht Heimserver / Home Server auch Strom im Standby-Modus?",
        "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
      },
      {
        "question": "Lohnt sich der Neukauf eines energieeffizienten Heimserver / Home Server?",
        "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
      },
      {
        "question": "Wie berechne ich den Stromverbrauch von Heimserver / Home Server exakt selbst?",
        "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 65 W × 1 h ÷ 1.000 × 0,35 € = 0,023 €."
      },
      {
        "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Heimserver / Home Server?",
        "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
      }
    ],
    "sourceIds": [
      "uba",
      "bnetza"
    ],
    "relatedDevices": [
      "nas",
      "pc",
      "gaming-pc"
    ],
    "relatedCalculators": [
      "/watt-rechner",
      "/stromkosten-pro-jahr",
      "/stromkosten-rechner"
    ]
  }
};
