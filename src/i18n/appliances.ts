import type { SupportedLanguage } from './languages';

export interface LocalizedAppliance {
  name: string;
  category: string;
  shortDescription: string;
  dutyCycleExplanation: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const applianceTranslations: Record<SupportedLanguage, Record<string, LocalizedAppliance>> = {
  "de": {
    "kuehlschrank": {
      "name": "Kühlschrank",
      "category": "Küche",
      "shortDescription": "Ein typischer Kühlschrank verbraucht ca. 120 kWh pro Jahr (ca. 42.00 € bei 35 ct/kWh). Typische Leistung: 90 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "waschmaschine": {
      "name": "Waschmaschine",
      "category": "Haushalt & Reinigung",
      "shortDescription": "Ein typischer Waschmaschine verbraucht ca. 140 kWh pro Jahr (ca. 49.00 € bei 35 ct/kWh). Typische Leistung: 2000 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "trockner": {
      "name": "Wäschetrockner",
      "category": "Haushalt & Reinigung",
      "shortDescription": "Ein typischer Wäschetrockner verbraucht ca. 180 kWh pro Jahr (ca. 63.00 € bei 35 ct/kWh). Typische Leistung: 1500 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "geschirrspueler": {
      "name": "Geschirrspüler",
      "category": "Küche",
      "shortDescription": "Ein typischer Geschirrspüler verbraucht ca. 160 kWh pro Jahr (ca. 56.00 € bei 35 ct/kWh). Typische Leistung: 1800 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "backofen": {
      "name": "Backofen",
      "category": "Küche",
      "shortDescription": "Ein typischer Backofen verbraucht ca. 150 kWh pro Jahr (ca. 52.50 € bei 35 ct/kWh). Typische Leistung: 2500 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "herd": {
      "name": "Induktionsherd / Kochfeld",
      "category": "Küche",
      "shortDescription": "Ein typischer Induktionsherd / Kochfeld verbraucht ca. 220 kWh pro Jahr (ca. 77.00 € bei 35 ct/kWh). Typische Leistung: 3000 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "wasserkocher": {
      "name": "Wasserkocher",
      "category": "Küche",
      "shortDescription": "Ein typischer Wasserkocher verbraucht ca. 80 kWh pro Jahr (ca. 28.00 € bei 35 ct/kWh). Typische Leistung: 2200 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "kaffeemaschine": {
      "name": "Kaffeemaschine / Vollautomat",
      "category": "Küche",
      "shortDescription": "Ein typischer Kaffeemaschine / Vollautomat verbraucht ca. 65 kWh pro Jahr (ca. 22.75 € bei 35 ct/kWh). Typische Leistung: 1400 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "fernseher": {
      "name": "Fernseher (Smart TV 55-65\")",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer Fernseher (Smart TV 55-65\") verbraucht ca. 175 kWh pro Jahr (ca. 61.25 € bei 35 ct/kWh). Typische Leistung: 120 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "gaming-pc": {
      "name": "Gaming-PC (High-End)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer Gaming-PC (High-End) verbraucht ca. 450 kWh pro Jahr (ca. 157.50 € bei 35 ct/kWh). Typische Leistung: 400 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Gaming-PC (High-End) pro Stunde, Tag und Jahr?",
          "answer": "Ein Gaming-PC (High-End) hat eine typische Leistungsaufnahme von ca. 400 Watt. Im laufenden Betrieb verbraucht er ca. 0.400 kWh pro Stunde (ca. 0.14 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 450 kWh (157.50 €/Jahr)."
        },
        {
          "question": "Was kostet die Nutzung von Gaming-PC (High-End) pro Vorgang bzw. Monat?",
          "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,56 € / 4 Stunden Session. Pro Monat entspricht das etwa 13.13 € Stromkosten."
        },
        {
          "question": "Wie kann man beim Gaming-PC (High-End) am effektivsten Strom sparen?",
          "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
        },
        {
          "question": "Zieht ein Gaming-PC (High-End) Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
        },
        {
          "question": "Lohnt sich der Austausch eines alten Gaming-PC (High-End) gegen ein Neugerät?",
          "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
        }
      ]
    },
    "pc": {
      "name": "Desktop-PC / Office-Rechner",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer Desktop-PC / Office-Rechner verbraucht ca. 180 kWh pro Jahr (ca. 63.00 € bei 35 ct/kWh). Typische Leistung: 120 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "laptop": {
      "name": "Laptop / Notebook",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer Laptop / Notebook verbraucht ca. 75 kWh pro Jahr (ca. 26.25 € bei 35 ct/kWh). Typische Leistung: 50 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "monitor": {
      "name": "PC-Monitor (27-32\")",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer PC-Monitor (27-32\") verbraucht ca. 60 kWh pro Jahr (ca. 21.00 € bei 35 ct/kWh). Typische Leistung: 35 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer PlayStation 5 (PS5) verbraucht ca. 150 kWh pro Jahr (ca. 52.50 € bei 35 ct/kWh). Typische Leistung: 200 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer Xbox Series X verbraucht ca. 140 kWh pro Jahr (ca. 49.00 € bei 35 ct/kWh). Typische Leistung: 190 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "klimaanlage": {
      "name": "Klimaanlage (Split-Gerät)",
      "category": "Klima & Heizen",
      "shortDescription": "Ein typischer Klimaanlage (Split-Gerät) verbraucht ca. 350 kWh pro Jahr (ca. 122.50 € bei 35 ct/kWh). Typische Leistung: 800 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "ventilator": {
      "name": "Ventilator / Standventilator",
      "category": "Klima & Heizen",
      "shortDescription": "Ein typischer Ventilator / Standventilator verbraucht ca. 35 kWh pro Jahr (ca. 12.25 € bei 35 ct/kWh). Typische Leistung: 45 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "heizluefter": {
      "name": "Heizlüfter / Elektro-Heizung",
      "category": "Klima & Heizen",
      "shortDescription": "Ein typischer Heizlüfter / Elektro-Heizung verbraucht ca. 300 kWh pro Jahr (ca. 105.00 € bei 35 ct/kWh). Typische Leistung: 2000 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "luftentfeuchter": {
      "name": "Luftentfeuchter",
      "category": "Klima & Heizen",
      "shortDescription": "Ein typischer Luftentfeuchter verbraucht ca. 280 kWh pro Jahr (ca. 98.00 € bei 35 ct/kWh). Typische Leistung: 350 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "aquarium": {
      "name": "Aquarium (100–200 Liter)",
      "category": "Hobby & Spezial",
      "shortDescription": "Ein typischer Aquarium (100–200 Liter) verbraucht ca. 350 kWh pro Jahr (ca. 122.50 € bei 35 ct/kWh). Typische Leistung: 60 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "pool": {
      "name": "Poolpumpe / Filteranlage",
      "category": "Hobby & Spezial",
      "shortDescription": "Ein typischer Poolpumpe / Filteranlage verbraucht ca. 480 kWh pro Jahr (ca. 168.00 € bei 35 ct/kWh). Typische Leistung: 500 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "whirlpool": {
      "name": "Whirlpool / Outdoor Hot Tub",
      "category": "Hobby & Spezial",
      "shortDescription": "Ein typischer Whirlpool / Outdoor Hot Tub verbraucht ca. 2200 kWh pro Jahr (ca. 770.00 € bei 35 ct/kWh). Typische Leistung: 2500 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "3d-drucker": {
      "name": "3D-Drucker (FDM)",
      "category": "Hobby & Spezial",
      "shortDescription": "Ein typischer 3D-Drucker (FDM) verbraucht ca. 120 kWh pro Jahr (ca. 42.00 € bei 35 ct/kWh). Typische Leistung: 150 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein 3D-Drucker (FDM) pro Stunde, Tag und Jahr?",
          "answer": "Ein 3D-Drucker (FDM) hat eine typische Leistungsaufnahme von ca. 150 Watt. Im laufenden Betrieb verbraucht er ca. 0.150 kWh pro Stunde (ca. 0.05 € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa 120 kWh (42.00 €/Jahr)."
        },
        {
          "question": "Was kostet die Nutzung von 3D-Drucker (FDM) pro Vorgang bzw. Monat?",
          "answer": "Die durchschnittlichen Betriebskosten betragen ca. 0,42 € / 8 Stunden Druck. Pro Monat entspricht das etwa 3.50 € Stromkosten."
        },
        {
          "question": "Wie kann man beim 3D-Drucker (FDM) am effektivsten Strom sparen?",
          "answer": "Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab."
        },
        {
          "question": "Zieht ein 3D-Drucker (FDM) Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht."
        },
        {
          "question": "Lohnt sich der Austausch eines alten 3D-Drucker (FDM) gegen ein Neugerät?",
          "answer": "Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr."
        }
      ]
    },
    "nas": {
      "name": "NAS-Server / Netzwerkspeicher",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer NAS-Server / Netzwerkspeicher verbraucht ca. 260 kWh pro Jahr (ca. 91.00 € bei 35 ct/kWh). Typische Leistung: 30 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    },
    "server": {
      "name": "Heimserver / Home Server",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Ein typischer Heimserver / Home Server verbraucht ca. 570 kWh pro Jahr (ca. 199.50 € bei 35 ct/kWh). Typische Leistung: 65 Watt.",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.",
      "savingAdvice": [
        "Eco-Modi und energiesparende Programme nutzen.",
        "Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).",
        "Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden."
      ],
      "faq": [
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
      ]
    }
  },
  "en": {
    "kuehlschrank": {
      "name": "Refrigerator",
      "category": "Kitchen",
      "shortDescription": "A typical Refrigerator uses approx. 120 kWh per year (around €42.00 at €0.35/kWh). Power rating: 90 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Refrigerator use per hour, day, and year?",
          "answer": "A typical Refrigerator operates at approximately 90 Watts, consuming roughly 0.090 kWh per hour (about €0.01/hr at €0.35/kWh). Typical annual consumption is around 120 kWh, costing approx. €42.00 per year."
        },
        {
          "question": "How much does it cost to run a Refrigerator per cycle or per month?",
          "answer": "Running a Refrigerator costs approximately 0,12 € / Tag. On a monthly basis, this averages to around €3.50 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Refrigerator?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Refrigerator draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Refrigerator to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "waschmaschine": {
      "name": "Washing Machine",
      "category": "Household & Cleaning",
      "shortDescription": "A typical Washing Machine uses approx. 140 kWh per year (around €49.00 at €0.35/kWh). Power rating: 2000 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Washing Machine use per hour, day, and year?",
          "answer": "A typical Washing Machine operates at approximately 2000 Watts, consuming roughly 2.000 kWh per hour (about €0.70/hr at €0.35/kWh). Typical annual consumption is around 140 kWh, costing approx. €49.00 per year."
        },
        {
          "question": "How much does it cost to run a Washing Machine per cycle or per month?",
          "answer": "Running a Washing Machine costs approximately 0,25 € / Waschgang. On a monthly basis, this averages to around €4.08 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Washing Machine?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Washing Machine draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Washing Machine to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "trockner": {
      "name": "Tumble Dryer",
      "category": "Household & Cleaning",
      "shortDescription": "A typical Tumble Dryer uses approx. 180 kWh per year (around €63.00 at €0.35/kWh). Power rating: 1500 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Tumble Dryer use per hour, day, and year?",
          "answer": "A typical Tumble Dryer operates at approximately 1500 Watts, consuming roughly 1.500 kWh per hour (about €0.53/hr at €0.35/kWh). Typical annual consumption is around 180 kWh, costing approx. €63.00 per year."
        },
        {
          "question": "How much does it cost to run a Tumble Dryer per cycle or per month?",
          "answer": "Running a Tumble Dryer costs approximately 0,45 € / Ladung. On a monthly basis, this averages to around €5.25 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Tumble Dryer?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Tumble Dryer draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Tumble Dryer to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Dishwasher",
      "category": "Kitchen",
      "shortDescription": "A typical Dishwasher uses approx. 160 kWh per year (around €56.00 at €0.35/kWh). Power rating: 1800 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Dishwasher use per hour, day, and year?",
          "answer": "A typical Dishwasher operates at approximately 1800 Watts, consuming roughly 1.800 kWh per hour (about €0.63/hr at €0.35/kWh). Typical annual consumption is around 160 kWh, costing approx. €56.00 per year."
        },
        {
          "question": "How much does it cost to run a Dishwasher per cycle or per month?",
          "answer": "Running a Dishwasher costs approximately 0,28 € / Spülgang. On a monthly basis, this averages to around €4.67 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Dishwasher?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Dishwasher draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Dishwasher to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "backofen": {
      "name": "Electric Oven",
      "category": "Kitchen",
      "shortDescription": "A typical Electric Oven uses approx. 150 kWh per year (around €52.50 at €0.35/kWh). Power rating: 2500 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric Oven use per hour, day, and year?",
          "answer": "A typical Electric Oven operates at approximately 2500 Watts, consuming roughly 2.500 kWh per hour (about €0.88/hr at €0.35/kWh). Typical annual consumption is around 150 kWh, costing approx. €52.50 per year."
        },
        {
          "question": "How much does it cost to run a Electric Oven per cycle or per month?",
          "answer": "Running a Electric Oven costs approximately 0,55 € / Nutzung. On a monthly basis, this averages to around €4.38 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Electric Oven?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Electric Oven draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Electric Oven to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "herd": {
      "name": "Induction Cooktop / Stove",
      "category": "Kitchen",
      "shortDescription": "A typical Induction Cooktop / Stove uses approx. 220 kWh per year (around €77.00 at €0.35/kWh). Power rating: 3000 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Induction Cooktop / Stove use per hour, day, and year?",
          "answer": "A typical Induction Cooktop / Stove operates at approximately 3000 Watts, consuming roughly 3.000 kWh per hour (about €1.05/hr at €0.35/kWh). Typical annual consumption is around 220 kWh, costing approx. €77.00 per year."
        },
        {
          "question": "How much does it cost to run a Induction Cooktop / Stove per cycle or per month?",
          "answer": "Running a Induction Cooktop / Stove costs approximately 0,35 € / Kochvorgang. On a monthly basis, this averages to around €6.42 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Induction Cooktop / Stove?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Induction Cooktop / Stove draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Induction Cooktop / Stove to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "wasserkocher": {
      "name": "Electric Kettle",
      "category": "Kitchen",
      "shortDescription": "A typical Electric Kettle uses approx. 80 kWh per year (around €28.00 at €0.35/kWh). Power rating: 2200 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric Kettle use per hour, day, and year?",
          "answer": "A typical Electric Kettle operates at approximately 2200 Watts, consuming roughly 2.200 kWh per hour (about €0.77/hr at €0.35/kWh). Typical annual consumption is around 80 kWh, costing approx. €28.00 per year."
        },
        {
          "question": "How much does it cost to run a Electric Kettle per cycle or per month?",
          "answer": "Running a Electric Kettle costs approximately 0,03 € / 1 Liter Kochen. On a monthly basis, this averages to around €2.33 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Electric Kettle?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Electric Kettle draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Electric Kettle to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Coffee Maker / Espresso Machine",
      "category": "Kitchen",
      "shortDescription": "A typical Coffee Maker / Espresso Machine uses approx. 65 kWh per year (around €22.75 at €0.35/kWh). Power rating: 1400 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Coffee Maker / Espresso Machine use per hour, day, and year?",
          "answer": "A typical Coffee Maker / Espresso Machine operates at approximately 1400 Watts, consuming roughly 1.400 kWh per hour (about €0.49/hr at €0.35/kWh). Typical annual consumption is around 65 kWh, costing approx. €22.75 per year."
        },
        {
          "question": "How much does it cost to run a Coffee Maker / Espresso Machine per cycle or per month?",
          "answer": "Running a Coffee Maker / Espresso Machine costs approximately 0,02 € / Tasse Kaffee. On a monthly basis, this averages to around €1.90 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Coffee Maker / Espresso Machine?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Coffee Maker / Espresso Machine draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Coffee Maker / Espresso Machine to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "fernseher": {
      "name": "Smart TV (55-65 inch)",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Smart TV (55-65 inch) uses approx. 175 kWh per year (around €61.25 at €0.35/kWh). Power rating: 120 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Smart TV (55-65 inch) use per hour, day, and year?",
          "answer": "A typical Smart TV (55-65 inch) operates at approximately 120 Watts, consuming roughly 0.120 kWh per hour (about €0.04/hr at €0.35/kWh). Typical annual consumption is around 175 kWh, costing approx. €61.25 per year."
        },
        {
          "question": "How much does it cost to run a Smart TV (55-65 inch) per cycle or per month?",
          "answer": "Running a Smart TV (55-65 inch) costs approximately 0,17 € / 4 Stunden. On a monthly basis, this averages to around €5.10 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Smart TV (55-65 inch)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Smart TV (55-65 inch) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Smart TV (55-65 inch) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "gaming-pc": {
      "name": "Gaming PC (High-End)",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Gaming PC (High-End) uses approx. 450 kWh per year (around €157.50 at €0.35/kWh). Power rating: 400 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Gaming PC (High-End) use per hour, day, and year?",
          "answer": "A typical Gaming PC (High-End) operates at approximately 400 Watts, consuming roughly 0.400 kWh per hour (about €0.14/hr at €0.35/kWh). Typical annual consumption is around 450 kWh, costing approx. €157.50 per year."
        },
        {
          "question": "How much does it cost to run a Gaming PC (High-End) per cycle or per month?",
          "answer": "Running a Gaming PC (High-End) costs approximately 0,56 € / 4 Stunden Session. On a monthly basis, this averages to around €13.13 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Gaming PC (High-End)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Gaming PC (High-End) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Gaming PC (High-End) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "pc": {
      "name": "Desktop PC / Office Computer",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Desktop PC / Office Computer uses approx. 180 kWh per year (around €63.00 at €0.35/kWh). Power rating: 120 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Desktop PC / Office Computer use per hour, day, and year?",
          "answer": "A typical Desktop PC / Office Computer operates at approximately 120 Watts, consuming roughly 0.120 kWh per hour (about €0.04/hr at €0.35/kWh). Typical annual consumption is around 180 kWh, costing approx. €63.00 per year."
        },
        {
          "question": "How much does it cost to run a Desktop PC / Office Computer per cycle or per month?",
          "answer": "Running a Desktop PC / Office Computer costs approximately 0,25 € / 6 Stunden Arbeit. On a monthly basis, this averages to around €5.25 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Desktop PC / Office Computer?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Desktop PC / Office Computer draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Desktop PC / Office Computer to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "laptop": {
      "name": "Laptop / Notebook",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Laptop / Notebook uses approx. 75 kWh per year (around €26.25 at €0.35/kWh). Power rating: 50 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Laptop / Notebook use per hour, day, and year?",
          "answer": "A typical Laptop / Notebook operates at approximately 50 Watts, consuming roughly 0.050 kWh per hour (about €0.02/hr at €0.35/kWh). Typical annual consumption is around 75 kWh, costing approx. €26.25 per year."
        },
        {
          "question": "How much does it cost to run a Laptop / Notebook per cycle or per month?",
          "answer": "Running a Laptop / Notebook costs approximately 0,11 € / 6 Stunden Arbeit. On a monthly basis, this averages to around €2.19 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Laptop / Notebook?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Laptop / Notebook draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Laptop / Notebook to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "monitor": {
      "name": "Computer Monitor (27-32 inch)",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Computer Monitor (27-32 inch) uses approx. 60 kWh per year (around €21.00 at €0.35/kWh). Power rating: 35 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Computer Monitor (27-32 inch) use per hour, day, and year?",
          "answer": "A typical Computer Monitor (27-32 inch) operates at approximately 35 Watts, consuming roughly 0.035 kWh per hour (about €0.01/hr at €0.35/kWh). Typical annual consumption is around 60 kWh, costing approx. €21.00 per year."
        },
        {
          "question": "How much does it cost to run a Computer Monitor (27-32 inch) per cycle or per month?",
          "answer": "Running a Computer Monitor (27-32 inch) costs approximately 0,07 € / 6 Stunden Betrieb. On a monthly basis, this averages to around €1.75 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Computer Monitor (27-32 inch)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Computer Monitor (27-32 inch) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Computer Monitor (27-32 inch) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Entertainment & Office",
      "shortDescription": "A typical PlayStation 5 (PS5) uses approx. 150 kWh per year (around €52.50 at €0.35/kWh). Power rating: 200 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a PlayStation 5 (PS5) use per hour, day, and year?",
          "answer": "A typical PlayStation 5 (PS5) operates at approximately 200 Watts, consuming roughly 0.200 kWh per hour (about €0.07/hr at €0.35/kWh). Typical annual consumption is around 150 kWh, costing approx. €52.50 per year."
        },
        {
          "question": "How much does it cost to run a PlayStation 5 (PS5) per cycle or per month?",
          "answer": "Running a PlayStation 5 (PS5) costs approximately 0,21 € / 3 Stunden Spielen. On a monthly basis, this averages to around €4.38 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my PlayStation 5 (PS5)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a PlayStation 5 (PS5) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old PlayStation 5 (PS5) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Xbox Series X uses approx. 140 kWh per year (around €49.00 at €0.35/kWh). Power rating: 190 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Xbox Series X use per hour, day, and year?",
          "answer": "A typical Xbox Series X operates at approximately 190 Watts, consuming roughly 0.190 kWh per hour (about €0.07/hr at €0.35/kWh). Typical annual consumption is around 140 kWh, costing approx. €49.00 per year."
        },
        {
          "question": "How much does it cost to run a Xbox Series X per cycle or per month?",
          "answer": "Running a Xbox Series X costs approximately 0,20 € / 3 Stunden Spielen. On a monthly basis, this averages to around €4.08 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Xbox Series X?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Xbox Series X draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Xbox Series X to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "klimaanlage": {
      "name": "Air Conditioner (Split System)",
      "category": "Climate & Heating",
      "shortDescription": "A typical Air Conditioner (Split System) uses approx. 350 kWh per year (around €122.50 at €0.35/kWh). Power rating: 800 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Air Conditioner (Split System) use per hour, day, and year?",
          "answer": "A typical Air Conditioner (Split System) operates at approximately 800 Watts, consuming roughly 0.800 kWh per hour (about €0.28/hr at €0.35/kWh). Typical annual consumption is around 350 kWh, costing approx. €122.50 per year."
        },
        {
          "question": "How much does it cost to run a Air Conditioner (Split System) per cycle or per month?",
          "answer": "Running a Air Conditioner (Split System) costs approximately 1,40 € / 5 Stunden Kühlung. On a monthly basis, this averages to around €10.21 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Air Conditioner (Split System)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Air Conditioner (Split System) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Air Conditioner (Split System) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "ventilator": {
      "name": "Electric Fan / Pedestal Fan",
      "category": "Climate & Heating",
      "shortDescription": "A typical Electric Fan / Pedestal Fan uses approx. 35 kWh per year (around €12.25 at €0.35/kWh). Power rating: 45 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric Fan / Pedestal Fan use per hour, day, and year?",
          "answer": "A typical Electric Fan / Pedestal Fan operates at approximately 45 Watts, consuming roughly 0.045 kWh per hour (about €0.02/hr at €0.35/kWh). Typical annual consumption is around 35 kWh, costing approx. €12.25 per year."
        },
        {
          "question": "How much does it cost to run a Electric Fan / Pedestal Fan per cycle or per month?",
          "answer": "Running a Electric Fan / Pedestal Fan costs approximately 0,10 € / 6 Stunden. On a monthly basis, this averages to around €1.02 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Electric Fan / Pedestal Fan?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Electric Fan / Pedestal Fan draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Electric Fan / Pedestal Fan to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "heizluefter": {
      "name": "Fan Heater / Space Heater",
      "category": "Climate & Heating",
      "shortDescription": "A typical Fan Heater / Space Heater uses approx. 300 kWh per year (around €105.00 at €0.35/kWh). Power rating: 2000 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Fan Heater / Space Heater use per hour, day, and year?",
          "answer": "A typical Fan Heater / Space Heater operates at approximately 2000 Watts, consuming roughly 2.000 kWh per hour (about €0.70/hr at €0.35/kWh). Typical annual consumption is around 300 kWh, costing approx. €105.00 per year."
        },
        {
          "question": "How much does it cost to run a Fan Heater / Space Heater per cycle or per month?",
          "answer": "Running a Fan Heater / Space Heater costs approximately 1,40 € / 2 Stunden Heizen. On a monthly basis, this averages to around €8.75 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Fan Heater / Space Heater?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Fan Heater / Space Heater draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Fan Heater / Space Heater to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Dehumidifier",
      "category": "Climate & Heating",
      "shortDescription": "A typical Dehumidifier uses approx. 280 kWh per year (around €98.00 at €0.35/kWh). Power rating: 350 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Dehumidifier use per hour, day, and year?",
          "answer": "A typical Dehumidifier operates at approximately 350 Watts, consuming roughly 0.350 kWh per hour (about €0.12/hr at €0.35/kWh). Typical annual consumption is around 280 kWh, costing approx. €98.00 per year."
        },
        {
          "question": "How much does it cost to run a Dehumidifier per cycle or per month?",
          "answer": "Running a Dehumidifier costs approximately 0,74 € / 6 Stunden. On a monthly basis, this averages to around €8.17 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Dehumidifier?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Dehumidifier draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Dehumidifier to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "aquarium": {
      "name": "Aquarium (100–200L Fish Tank)",
      "category": "Hobby & Special",
      "shortDescription": "A typical Aquarium (100–200L Fish Tank) uses approx. 350 kWh per year (around €122.50 at €0.35/kWh). Power rating: 60 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Aquarium (100–200L Fish Tank) use per hour, day, and year?",
          "answer": "A typical Aquarium (100–200L Fish Tank) operates at approximately 60 Watts, consuming roughly 0.060 kWh per hour (about €0.02/hr at €0.35/kWh). Typical annual consumption is around 350 kWh, costing approx. €122.50 per year."
        },
        {
          "question": "How much does it cost to run a Aquarium (100–200L Fish Tank) per cycle or per month?",
          "answer": "Running a Aquarium (100–200L Fish Tank) costs approximately 0,34 € / 24 Stunden Dauerbetrieb. On a monthly basis, this averages to around €10.21 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Aquarium (100–200L Fish Tank)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Aquarium (100–200L Fish Tank) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Aquarium (100–200L Fish Tank) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "pool": {
      "name": "Swimming Pool Pump & Filter",
      "category": "Hobby & Special",
      "shortDescription": "A typical Swimming Pool Pump & Filter uses approx. 480 kWh per year (around €168.00 at €0.35/kWh). Power rating: 500 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Swimming Pool Pump & Filter use per hour, day, and year?",
          "answer": "A typical Swimming Pool Pump & Filter operates at approximately 500 Watts, consuming roughly 0.500 kWh per hour (about €0.17/hr at €0.35/kWh). Typical annual consumption is around 480 kWh, costing approx. €168.00 per year."
        },
        {
          "question": "How much does it cost to run a Swimming Pool Pump & Filter per cycle or per month?",
          "answer": "Running a Swimming Pool Pump & Filter costs approximately 1,05 € / 6 Stunden Filterung. On a monthly basis, this averages to around €14.00 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Swimming Pool Pump & Filter?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Swimming Pool Pump & Filter draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Swimming Pool Pump & Filter to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "whirlpool": {
      "name": "Hot Tub / Outdoor Jacuzzi",
      "category": "Hobby & Special",
      "shortDescription": "A typical Hot Tub / Outdoor Jacuzzi uses approx. 2200 kWh per year (around €770.00 at €0.35/kWh). Power rating: 2500 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Hot Tub / Outdoor Jacuzzi use per hour, day, and year?",
          "answer": "A typical Hot Tub / Outdoor Jacuzzi operates at approximately 2500 Watts, consuming roughly 2.500 kWh per hour (about €0.88/hr at €0.35/kWh). Typical annual consumption is around 2200 kWh, costing approx. €770.00 per year."
        },
        {
          "question": "How much does it cost to run a Hot Tub / Outdoor Jacuzzi per cycle or per month?",
          "answer": "Running a Hot Tub / Outdoor Jacuzzi costs approximately 2,10 € / Tag (Heizung & Zirkulation). On a monthly basis, this averages to around €64.17 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Hot Tub / Outdoor Jacuzzi?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Hot Tub / Outdoor Jacuzzi draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Hot Tub / Outdoor Jacuzzi to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "3d-drucker": {
      "name": "3D Printer (FDM)",
      "category": "Hobby & Special",
      "shortDescription": "A typical 3D Printer (FDM) uses approx. 120 kWh per year (around €42.00 at €0.35/kWh). Power rating: 150 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a 3D Printer (FDM) use per hour, day, and year?",
          "answer": "A typical 3D Printer (FDM) operates at approximately 150 Watts, consuming roughly 0.150 kWh per hour (about €0.05/hr at €0.35/kWh). Typical annual consumption is around 120 kWh, costing approx. €42.00 per year."
        },
        {
          "question": "How much does it cost to run a 3D Printer (FDM) per cycle or per month?",
          "answer": "Running a 3D Printer (FDM) costs approximately 0,42 € / 8 Stunden Druck. On a monthly basis, this averages to around €3.50 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my 3D Printer (FDM)?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a 3D Printer (FDM) draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old 3D Printer (FDM) to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "nas": {
      "name": "NAS Server / Network Storage",
      "category": "Entertainment & Office",
      "shortDescription": "A typical NAS Server / Network Storage uses approx. 260 kWh per year (around €91.00 at €0.35/kWh). Power rating: 30 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a NAS Server / Network Storage use per hour, day, and year?",
          "answer": "A typical NAS Server / Network Storage operates at approximately 30 Watts, consuming roughly 0.030 kWh per hour (about €0.01/hr at €0.35/kWh). Typical annual consumption is around 260 kWh, costing approx. €91.00 per year."
        },
        {
          "question": "How much does it cost to run a NAS Server / Network Storage per cycle or per month?",
          "answer": "Running a NAS Server / Network Storage costs approximately 0,25 € / 24 Stunden Dauerbetrieb. On a monthly basis, this averages to around €7.58 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my NAS Server / Network Storage?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a NAS Server / Network Storage draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old NAS Server / Network Storage to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    },
    "server": {
      "name": "Home Server / Homelab",
      "category": "Entertainment & Office",
      "shortDescription": "A typical Home Server / Homelab uses approx. 570 kWh per year (around €199.50 at €0.35/kWh). Power rating: 65 Watts.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "How much electricity does a Home Server / Homelab use per hour, day, and year?",
          "answer": "A typical Home Server / Homelab operates at approximately 65 Watts, consuming roughly 0.065 kWh per hour (about €0.02/hr at €0.35/kWh). Typical annual consumption is around 570 kWh, costing approx. €199.50 per year."
        },
        {
          "question": "How much does it cost to run a Home Server / Homelab per cycle or per month?",
          "answer": "Running a Home Server / Homelab costs approximately 0,55 € / 24 Stunden Dauerbetrieb. On a monthly basis, this averages to around €16.63 on your electricity bill."
        },
        {
          "question": "How can I reduce the electricity consumption of my Home Server / Homelab?",
          "answer": "Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw."
        },
        {
          "question": "Does a Home Server / Homelab draw standby power when turned off?",
          "answer": "Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs."
        },
        {
          "question": "Is it worth upgrading an old Home Server / Homelab to a modern energy-efficient model?",
          "answer": "If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually."
        }
      ]
    }
  },
  "es": {
    "kuehlschrank": {
      "name": "Frigorífico / Refrigerador",
      "category": "Cocina",
      "shortDescription": "Un Frigorífico / Refrigerador consume unos 120 kWh al año (aprox. 42.00 € con tarifa de 0,35 €/kWh). Potencia media: 90 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Frigorífico / Refrigerador por hora, día y año?",
          "answer": "Un Frigorífico / Refrigerador consume una potencia media de unos 90 vatios, lo que equivale a 0.090 kWh por hora (aprox. 0.01 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 120 kWh (42.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Frigorífico / Refrigerador al mes o por uso?",
          "answer": "El coste estimado es de unos 0,12 € / Tag. En el cómputo mensual, representa un gasto de luz de aproximadamente 3.50 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Frigorífico / Refrigerador?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Frigorífico / Refrigerador sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Frigorífico / Refrigerador antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "waschmaschine": {
      "name": "Lavadora",
      "category": "Hogar y Limpieza",
      "shortDescription": "Un Lavadora consume unos 140 kWh al año (aprox. 49.00 € con tarifa de 0,35 €/kWh). Potencia media: 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Lavadora por hora, día y año?",
          "answer": "Un Lavadora consume una potencia media de unos 2000 vatios, lo que equivale a 2.000 kWh por hora (aprox. 0.70 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 140 kWh (49.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Lavadora al mes o por uso?",
          "answer": "El coste estimado es de unos 0,25 € / Waschgang. En el cómputo mensual, representa un gasto de luz de aproximadamente 4.08 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Lavadora?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Lavadora sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Lavadora antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "trockner": {
      "name": "Secadora de Ropa",
      "category": "Hogar y Limpieza",
      "shortDescription": "Un Secadora de Ropa consume unos 180 kWh al año (aprox. 63.00 € con tarifa de 0,35 €/kWh). Potencia media: 1500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Secadora de Ropa por hora, día y año?",
          "answer": "Un Secadora de Ropa consume una potencia media de unos 1500 vatios, lo que equivale a 1.500 kWh por hora (aprox. 0.53 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 180 kWh (63.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Secadora de Ropa al mes o por uso?",
          "answer": "El coste estimado es de unos 0,45 € / Ladung. En el cómputo mensual, representa un gasto de luz de aproximadamente 5.25 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Secadora de Ropa?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Secadora de Ropa sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Secadora de Ropa antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Lavavajillas",
      "category": "Cocina",
      "shortDescription": "Un Lavavajillas consume unos 160 kWh al año (aprox. 56.00 € con tarifa de 0,35 €/kWh). Potencia media: 1800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Lavavajillas por hora, día y año?",
          "answer": "Un Lavavajillas consume una potencia media de unos 1800 vatios, lo que equivale a 1.800 kWh por hora (aprox. 0.63 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 160 kWh (56.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Lavavajillas al mes o por uso?",
          "answer": "El coste estimado es de unos 0,28 € / Spülgang. En el cómputo mensual, representa un gasto de luz de aproximadamente 4.67 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Lavavajillas?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Lavavajillas sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Lavavajillas antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "backofen": {
      "name": "Horno Eléctrico",
      "category": "Cocina",
      "shortDescription": "Un Horno Eléctrico consume unos 150 kWh al año (aprox. 52.50 € con tarifa de 0,35 €/kWh). Potencia media: 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Horno Eléctrico por hora, día y año?",
          "answer": "Un Horno Eléctrico consume una potencia media de unos 2500 vatios, lo que equivale a 2.500 kWh por hora (aprox. 0.88 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 150 kWh (52.50 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Horno Eléctrico al mes o por uso?",
          "answer": "El coste estimado es de unos 0,55 € / Nutzung. En el cómputo mensual, representa un gasto de luz de aproximadamente 4.38 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Horno Eléctrico?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Horno Eléctrico sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Horno Eléctrico antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "herd": {
      "name": "Placa de Inducción / Vitrocerámica",
      "category": "Cocina",
      "shortDescription": "Un Placa de Inducción / Vitrocerámica consume unos 220 kWh al año (aprox. 77.00 € con tarifa de 0,35 €/kWh). Potencia media: 3000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Placa de Inducción / Vitrocerámica por hora, día y año?",
          "answer": "Un Placa de Inducción / Vitrocerámica consume una potencia media de unos 3000 vatios, lo que equivale a 3.000 kWh por hora (aprox. 1.05 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 220 kWh (77.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Placa de Inducción / Vitrocerámica al mes o por uso?",
          "answer": "El coste estimado es de unos 0,35 € / Kochvorgang. En el cómputo mensual, representa un gasto de luz de aproximadamente 6.42 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Placa de Inducción / Vitrocerámica?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Placa de Inducción / Vitrocerámica sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Placa de Inducción / Vitrocerámica antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "wasserkocher": {
      "name": "Hervidor de Agua Eléctrico",
      "category": "Cocina",
      "shortDescription": "Un Hervidor de Agua Eléctrico consume unos 80 kWh al año (aprox. 28.00 € con tarifa de 0,35 €/kWh). Potencia media: 2200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Hervidor de Agua Eléctrico por hora, día y año?",
          "answer": "Un Hervidor de Agua Eléctrico consume una potencia media de unos 2200 vatios, lo que equivale a 2.200 kWh por hora (aprox. 0.77 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 80 kWh (28.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Hervidor de Agua Eléctrico al mes o por uso?",
          "answer": "El coste estimado es de unos 0,03 € / 1 Liter Kochen. En el cómputo mensual, representa un gasto de luz de aproximadamente 2.33 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Hervidor de Agua Eléctrico?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Hervidor de Agua Eléctrico sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Hervidor de Agua Eléctrico antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Cafetera Automática",
      "category": "Cocina",
      "shortDescription": "Un Cafetera Automática consume unos 65 kWh al año (aprox. 22.75 € con tarifa de 0,35 €/kWh). Potencia media: 1400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Cafetera Automática por hora, día y año?",
          "answer": "Un Cafetera Automática consume una potencia media de unos 1400 vatios, lo que equivale a 1.400 kWh por hora (aprox. 0.49 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 65 kWh (22.75 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Cafetera Automática al mes o por uso?",
          "answer": "El coste estimado es de unos 0,02 € / Tasse Kaffee. En el cómputo mensual, representa un gasto de luz de aproximadamente 1.90 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Cafetera Automática?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Cafetera Automática sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Cafetera Automática antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "fernseher": {
      "name": "Televisor Smart TV (55-65\")",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Televisor Smart TV (55-65\") consume unos 175 kWh al año (aprox. 61.25 € con tarifa de 0,35 €/kWh). Potencia media: 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Televisor Smart TV (55-65\") por hora, día y año?",
          "answer": "Un Televisor Smart TV (55-65\") consume una potencia media de unos 120 vatios, lo que equivale a 0.120 kWh por hora (aprox. 0.04 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 175 kWh (61.25 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Televisor Smart TV (55-65\") al mes o por uso?",
          "answer": "El coste estimado es de unos 0,17 € / 4 Stunden. En el cómputo mensual, representa un gasto de luz de aproximadamente 5.10 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Televisor Smart TV (55-65\")?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Televisor Smart TV (55-65\") sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Televisor Smart TV (55-65\") antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC Gaming de Alto Rendimiento",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un PC Gaming de Alto Rendimiento consume unos 450 kWh al año (aprox. 157.50 € con tarifa de 0,35 €/kWh). Potencia media: 400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un PC Gaming de Alto Rendimiento por hora, día y año?",
          "answer": "Un PC Gaming de Alto Rendimiento consume una potencia media de unos 400 vatios, lo que equivale a 0.400 kWh por hora (aprox. 0.14 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 450 kWh (157.50 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un PC Gaming de Alto Rendimiento al mes o por uso?",
          "answer": "El coste estimado es de unos 0,56 € / 4 Stunden Session. En el cómputo mensual, representa un gasto de luz de aproximadamente 13.13 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un PC Gaming de Alto Rendimiento?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un PC Gaming de Alto Rendimiento sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un PC Gaming de Alto Rendimiento antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "pc": {
      "name": "Ordenador de Sobremesa / PC de Oficina",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Ordenador de Sobremesa / PC de Oficina consume unos 180 kWh al año (aprox. 63.00 € con tarifa de 0,35 €/kWh). Potencia media: 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Ordenador de Sobremesa / PC de Oficina por hora, día y año?",
          "answer": "Un Ordenador de Sobremesa / PC de Oficina consume una potencia media de unos 120 vatios, lo que equivale a 0.120 kWh por hora (aprox. 0.04 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 180 kWh (63.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Ordenador de Sobremesa / PC de Oficina al mes o por uso?",
          "answer": "El coste estimado es de unos 0,25 € / 6 Stunden Arbeit. En el cómputo mensual, representa un gasto de luz de aproximadamente 5.25 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Ordenador de Sobremesa / PC de Oficina?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Ordenador de Sobremesa / PC de Oficina sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Ordenador de Sobremesa / PC de Oficina antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "laptop": {
      "name": "Portátil / Laptop",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Portátil / Laptop consume unos 75 kWh al año (aprox. 26.25 € con tarifa de 0,35 €/kWh). Potencia media: 50 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Portátil / Laptop por hora, día y año?",
          "answer": "Un Portátil / Laptop consume una potencia media de unos 50 vatios, lo que equivale a 0.050 kWh por hora (aprox. 0.02 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 75 kWh (26.25 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Portátil / Laptop al mes o por uso?",
          "answer": "El coste estimado es de unos 0,11 € / 6 Stunden Arbeit. En el cómputo mensual, representa un gasto de luz de aproximadamente 2.19 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Portátil / Laptop?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Portátil / Laptop sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Portátil / Laptop antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "monitor": {
      "name": "Monitor de Ordenador (27-32\")",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Monitor de Ordenador (27-32\") consume unos 60 kWh al año (aprox. 21.00 € con tarifa de 0,35 €/kWh). Potencia media: 35 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Monitor de Ordenador (27-32\") por hora, día y año?",
          "answer": "Un Monitor de Ordenador (27-32\") consume una potencia media de unos 35 vatios, lo que equivale a 0.035 kWh por hora (aprox. 0.01 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 60 kWh (21.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Monitor de Ordenador (27-32\") al mes o por uso?",
          "answer": "El coste estimado es de unos 0,07 € / 6 Stunden Betrieb. En el cómputo mensual, representa un gasto de luz de aproximadamente 1.75 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Monitor de Ordenador (27-32\")?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Monitor de Ordenador (27-32\") sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Monitor de Ordenador (27-32\") antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un PlayStation 5 (PS5) consume unos 150 kWh al año (aprox. 52.50 € con tarifa de 0,35 €/kWh). Potencia media: 200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un PlayStation 5 (PS5) por hora, día y año?",
          "answer": "Un PlayStation 5 (PS5) consume una potencia media de unos 200 vatios, lo que equivale a 0.200 kWh por hora (aprox. 0.07 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 150 kWh (52.50 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un PlayStation 5 (PS5) al mes o por uso?",
          "answer": "El coste estimado es de unos 0,21 € / 3 Stunden Spielen. En el cómputo mensual, representa un gasto de luz de aproximadamente 4.38 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un PlayStation 5 (PS5)?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un PlayStation 5 (PS5) sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un PlayStation 5 (PS5) antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Xbox Series X consume unos 140 kWh al año (aprox. 49.00 € con tarifa de 0,35 €/kWh). Potencia media: 190 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Xbox Series X por hora, día y año?",
          "answer": "Un Xbox Series X consume una potencia media de unos 190 vatios, lo que equivale a 0.190 kWh por hora (aprox. 0.07 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 140 kWh (49.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Xbox Series X al mes o por uso?",
          "answer": "El coste estimado es de unos 0,20 € / 3 Stunden Spielen. En el cómputo mensual, representa un gasto de luz de aproximadamente 4.08 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Xbox Series X?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Xbox Series X sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Xbox Series X antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "klimaanlage": {
      "name": "Aire Acondicionado (Split)",
      "category": "Climatización y Calefacción",
      "shortDescription": "Un Aire Acondicionado (Split) consume unos 350 kWh al año (aprox. 122.50 € con tarifa de 0,35 €/kWh). Potencia media: 800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Aire Acondicionado (Split) por hora, día y año?",
          "answer": "Un Aire Acondicionado (Split) consume una potencia media de unos 800 vatios, lo que equivale a 0.800 kWh por hora (aprox. 0.28 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 350 kWh (122.50 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Aire Acondicionado (Split) al mes o por uso?",
          "answer": "El coste estimado es de unos 1,40 € / 5 Stunden Kühlung. En el cómputo mensual, representa un gasto de luz de aproximadamente 10.21 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Aire Acondicionado (Split)?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Aire Acondicionado (Split) sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Aire Acondicionado (Split) antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilador de Pie",
      "category": "Climatización y Calefacción",
      "shortDescription": "Un Ventilador de Pie consume unos 35 kWh al año (aprox. 12.25 € con tarifa de 0,35 €/kWh). Potencia media: 45 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Ventilador de Pie por hora, día y año?",
          "answer": "Un Ventilador de Pie consume una potencia media de unos 45 vatios, lo que equivale a 0.045 kWh por hora (aprox. 0.02 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 35 kWh (12.25 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Ventilador de Pie al mes o por uso?",
          "answer": "El coste estimado es de unos 0,10 € / 6 Stunden. En el cómputo mensual, representa un gasto de luz de aproximadamente 1.02 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Ventilador de Pie?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Ventilador de Pie sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Ventilador de Pie antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "heizluefter": {
      "name": "Calefactor Eléctrico / Termoventilador",
      "category": "Climatización y Calefacción",
      "shortDescription": "Un Calefactor Eléctrico / Termoventilador consume unos 300 kWh al año (aprox. 105.00 € con tarifa de 0,35 €/kWh). Potencia media: 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Calefactor Eléctrico / Termoventilador por hora, día y año?",
          "answer": "Un Calefactor Eléctrico / Termoventilador consume una potencia media de unos 2000 vatios, lo que equivale a 2.000 kWh por hora (aprox. 0.70 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 300 kWh (105.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Calefactor Eléctrico / Termoventilador al mes o por uso?",
          "answer": "El coste estimado es de unos 1,40 € / 2 Stunden Heizen. En el cómputo mensual, representa un gasto de luz de aproximadamente 8.75 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Calefactor Eléctrico / Termoventilador?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Calefactor Eléctrico / Termoventilador sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Calefactor Eléctrico / Termoventilador antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Deshumidificador Eléctrico",
      "category": "Climatización y Calefacción",
      "shortDescription": "Un Deshumidificador Eléctrico consume unos 280 kWh al año (aprox. 98.00 € con tarifa de 0,35 €/kWh). Potencia media: 350 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Deshumidificador Eléctrico por hora, día y año?",
          "answer": "Un Deshumidificador Eléctrico consume una potencia media de unos 350 vatios, lo que equivale a 0.350 kWh por hora (aprox. 0.12 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 280 kWh (98.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Deshumidificador Eléctrico al mes o por uso?",
          "answer": "El coste estimado es de unos 0,74 € / 6 Stunden. En el cómputo mensual, representa un gasto de luz de aproximadamente 8.17 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Deshumidificador Eléctrico?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Deshumidificador Eléctrico sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Deshumidificador Eléctrico antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "aquarium": {
      "name": "Acuario (100–200 Litros)",
      "category": "Ocio y Especial",
      "shortDescription": "Un Acuario (100–200 Litros) consume unos 350 kWh al año (aprox. 122.50 € con tarifa de 0,35 €/kWh). Potencia media: 60 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Acuario (100–200 Litros) por hora, día y año?",
          "answer": "Un Acuario (100–200 Litros) consume una potencia media de unos 60 vatios, lo que equivale a 0.060 kWh por hora (aprox. 0.02 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 350 kWh (122.50 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Acuario (100–200 Litros) al mes o por uso?",
          "answer": "El coste estimado es de unos 0,34 € / 24 Stunden Dauerbetrieb. En el cómputo mensual, representa un gasto de luz de aproximadamente 10.21 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Acuario (100–200 Litros)?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Acuario (100–200 Litros) sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Acuario (100–200 Litros) antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "pool": {
      "name": "Bomba de Piscina y Filtro",
      "category": "Ocio y Especial",
      "shortDescription": "Un Bomba de Piscina y Filtro consume unos 480 kWh al año (aprox. 168.00 € con tarifa de 0,35 €/kWh). Potencia media: 500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Bomba de Piscina y Filtro por hora, día y año?",
          "answer": "Un Bomba de Piscina y Filtro consume una potencia media de unos 500 vatios, lo que equivale a 0.500 kWh por hora (aprox. 0.17 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 480 kWh (168.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Bomba de Piscina y Filtro al mes o por uso?",
          "answer": "El coste estimado es de unos 1,05 € / 6 Stunden Filterung. En el cómputo mensual, representa un gasto de luz de aproximadamente 14.00 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Bomba de Piscina y Filtro?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Bomba de Piscina y Filtro sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Bomba de Piscina y Filtro antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "whirlpool": {
      "name": "Jacuzzi / Spa de Exterior",
      "category": "Ocio y Especial",
      "shortDescription": "Un Jacuzzi / Spa de Exterior consume unos 2200 kWh al año (aprox. 770.00 € con tarifa de 0,35 €/kWh). Potencia media: 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Jacuzzi / Spa de Exterior por hora, día y año?",
          "answer": "Un Jacuzzi / Spa de Exterior consume una potencia media de unos 2500 vatios, lo que equivale a 2.500 kWh por hora (aprox. 0.88 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 2200 kWh (770.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Jacuzzi / Spa de Exterior al mes o por uso?",
          "answer": "El coste estimado es de unos 2,10 € / Tag (Heizung & Zirkulation). En el cómputo mensual, representa un gasto de luz de aproximadamente 64.17 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Jacuzzi / Spa de Exterior?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Jacuzzi / Spa de Exterior sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Jacuzzi / Spa de Exterior antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "3d-drucker": {
      "name": "Impresora 3D (FDM)",
      "category": "Ocio y Especial",
      "shortDescription": "Un Impresora 3D (FDM) consume unos 120 kWh al año (aprox. 42.00 € con tarifa de 0,35 €/kWh). Potencia media: 150 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Impresora 3D (FDM) por hora, día y año?",
          "answer": "Un Impresora 3D (FDM) consume una potencia media de unos 150 vatios, lo que equivale a 0.150 kWh por hora (aprox. 0.05 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 120 kWh (42.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Impresora 3D (FDM) al mes o por uso?",
          "answer": "El coste estimado es de unos 0,42 € / 8 Stunden Druck. En el cómputo mensual, representa un gasto de luz de aproximadamente 3.50 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Impresora 3D (FDM)?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Impresora 3D (FDM) sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Impresora 3D (FDM) antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "nas": {
      "name": "Servidor NAS / Almacenamiento en Red",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Servidor NAS / Almacenamiento en Red consume unos 260 kWh al año (aprox. 91.00 € con tarifa de 0,35 €/kWh). Potencia media: 30 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Servidor NAS / Almacenamiento en Red por hora, día y año?",
          "answer": "Un Servidor NAS / Almacenamiento en Red consume una potencia media de unos 30 vatios, lo que equivale a 0.030 kWh por hora (aprox. 0.01 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 260 kWh (91.00 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Servidor NAS / Almacenamiento en Red al mes o por uso?",
          "answer": "El coste estimado es de unos 0,25 € / 24 Stunden Dauerbetrieb. En el cómputo mensual, representa un gasto de luz de aproximadamente 7.58 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Servidor NAS / Almacenamiento en Red?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Servidor NAS / Almacenamiento en Red sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Servidor NAS / Almacenamiento en Red antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    },
    "server": {
      "name": "Servidor Doméstico / Home Server",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Un Servidor Doméstico / Home Server consume unos 570 kWh al año (aprox. 199.50 € con tarifa de 0,35 €/kWh). Potencia media: 65 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "¿Cuánta electricidad consume un Servidor Doméstico / Home Server por hora, día y año?",
          "answer": "Un Servidor Doméstico / Home Server consume una potencia media de unos 65 vatios, lo que equivale a 0.065 kWh por hora (aprox. 0.02 €/hora a 0,35 €/kWh). El consumo anual medio es de unos 570 kWh (199.50 €/año)."
        },
        {
          "question": "¿Cuánto cuesta utilizar un Servidor Doméstico / Home Server al mes o por uso?",
          "answer": "El coste estimado es de unos 0,55 € / 24 Stunden Dauerbetrieb. En el cómputo mensual, representa un gasto de luz de aproximadamente 16.63 € al mes."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Servidor Doméstico / Home Server?",
          "answer": "Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera."
        },
        {
          "question": "¿Un Servidor Doméstico / Home Server sigue gastando electricidad en modo reposo (standby)?",
          "answer": "Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura."
        },
        {
          "question": "¿Merece la pena renovar un Servidor Doméstico / Home Server antiguo por uno de bajo consumo?",
          "answer": "Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año."
        }
      ]
    }
  },
  "ja": {
    "kuehlschrank": {
      "name": "冷蔵庫",
      "category": "キッチン・台所",
      "shortDescription": "冷蔵庫の年間消費電力量は約120 kWh（年間電気代約42.00ユーロ）。平均消費電力は90Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "冷蔵庫の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "冷蔵庫の消費電力は約90W（ワット）です。1時間あたりの電気消費量は約0.090 kWh（約0.01ユーロ）です。年間の平均消費電力量は約120 kWhで、年間の電気代は約42.00ユーロ（月額約3.50ユーロ）となります。"
        },
        {
          "question": "冷蔵庫の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "冷蔵庫は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い冷蔵庫を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "waschmaschine": {
      "name": "洗濯機",
      "category": "生活家電・清掃",
      "shortDescription": "洗濯機の年間消費電力量は約140 kWh（年間電気代約49.00ユーロ）。平均消費電力は2000Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "洗濯機の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "洗濯機の消費電力は約2000W（ワット）です。1時間あたりの電気消費量は約2.000 kWh（約0.70ユーロ）です。年間の平均消費電力量は約140 kWhで、年間の電気代は約49.00ユーロ（月額約4.08ユーロ）となります。"
        },
        {
          "question": "洗濯機の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "洗濯機は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い洗濯機を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "trockner": {
      "name": "衣類乾燥機",
      "category": "生活家電・清掃",
      "shortDescription": "衣類乾燥機の年間消費電力量は約180 kWh（年間電気代約63.00ユーロ）。平均消費電力は1500Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "衣類乾燥機の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "衣類乾燥機の消費電力は約1500W（ワット）です。1時間あたりの電気消費量は約1.500 kWh（約0.53ユーロ）です。年間の平均消費電力量は約180 kWhで、年間の電気代は約63.00ユーロ（月額約5.25ユーロ）となります。"
        },
        {
          "question": "衣類乾燥機の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "衣類乾燥機は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い衣類乾燥機を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "geschirrspueler": {
      "name": "食器洗い機（食洗機）",
      "category": "キッチン・台所",
      "shortDescription": "食器洗い機（食洗機）の年間消費電力量は約160 kWh（年間電気代約56.00ユーロ）。平均消費電力は1800Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "食器洗い機（食洗機）の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "食器洗い機（食洗機）の消費電力は約1800W（ワット）です。1時間あたりの電気消費量は約1.800 kWh（約0.63ユーロ）です。年間の平均消費電力量は約160 kWhで、年間の電気代は約56.00ユーロ（月額約4.67ユーロ）となります。"
        },
        {
          "question": "食器洗い機（食洗機）の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "食器洗い機（食洗機）は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い食器洗い機（食洗機）を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "backofen": {
      "name": "オーブン",
      "category": "キッチン・台所",
      "shortDescription": "オーブンの年間消費電力量は約150 kWh（年間電気代約52.50ユーロ）。平均消費電力は2500Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "オーブンの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "オーブンの消費電力は約2500W（ワット）です。1時間あたりの電気消費量は約2.500 kWh（約0.88ユーロ）です。年間の平均消費電力量は約150 kWhで、年間の電気代は約52.50ユーロ（月額約4.38ユーロ）となります。"
        },
        {
          "question": "オーブンの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "オーブンは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いオーブンを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "herd": {
      "name": "IHクッキングヒーター",
      "category": "キッチン・台所",
      "shortDescription": "IHクッキングヒーターの年間消費電力量は約220 kWh（年間電気代約77.00ユーロ）。平均消費電力は3000Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "IHクッキングヒーターの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "IHクッキングヒーターの消費電力は約3000W（ワット）です。1時間あたりの電気消費量は約3.000 kWh（約1.05ユーロ）です。年間の平均消費電力量は約220 kWhで、年間の電気代は約77.00ユーロ（月額約6.42ユーロ）となります。"
        },
        {
          "question": "IHクッキングヒーターの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "IHクッキングヒーターは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いIHクッキングヒーターを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "wasserkocher": {
      "name": "電気ケトル",
      "category": "キッチン・台所",
      "shortDescription": "電気ケトルの年間消費電力量は約80 kWh（年間電気代約28.00ユーロ）。平均消費電力は2200Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "電気ケトルの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "電気ケトルの消費電力は約2200W（ワット）です。1時間あたりの電気消費量は約2.200 kWh（約0.77ユーロ）です。年間の平均消費電力量は約80 kWhで、年間の電気代は約28.00ユーロ（月額約2.33ユーロ）となります。"
        },
        {
          "question": "電気ケトルの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "電気ケトルは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い電気ケトルを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "kaffeemaschine": {
      "name": "コーヒーメーカー / 全自動エスプレッソマシン",
      "category": "キッチン・台所",
      "shortDescription": "コーヒーメーカー / 全自動エスプレッソマシンの年間消費電力量は約65 kWh（年間電気代約22.75ユーロ）。平均消費電力は1400Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "コーヒーメーカー / 全自動エスプレッソマシンの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "コーヒーメーカー / 全自動エスプレッソマシンの消費電力は約1400W（ワット）です。1時間あたりの電気消費量は約1.400 kWh（約0.49ユーロ）です。年間の平均消費電力量は約65 kWhで、年間の電気代は約22.75ユーロ（月額約1.90ユーロ）となります。"
        },
        {
          "question": "コーヒーメーカー / 全自動エスプレッソマシンの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "コーヒーメーカー / 全自動エスプレッソマシンは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いコーヒーメーカー / 全自動エスプレッソマシンを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "fernseher": {
      "name": "液晶テレビ / 有機ELテレビ (55-65型)",
      "category": "エンタメ・オフィス",
      "shortDescription": "液晶テレビ / 有機ELテレビ (55-65型)の年間消費電力量は約175 kWh（年間電気代約61.25ユーロ）。平均消費電力は120Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "液晶テレビ / 有機ELテレビ (55-65型)の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "液晶テレビ / 有機ELテレビ (55-65型)の消費電力は約120W（ワット）です。1時間あたりの電気消費量は約0.120 kWh（約0.04ユーロ）です。年間の平均消費電力量は約175 kWhで、年間の電気代は約61.25ユーロ（月額約5.10ユーロ）となります。"
        },
        {
          "question": "液晶テレビ / 有機ELテレビ (55-65型)の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "液晶テレビ / 有機ELテレビ (55-65型)は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い液晶テレビ / 有機ELテレビ (55-65型)を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "gaming-pc": {
      "name": "ゲーミングPC (高性能)",
      "category": "エンタメ・オフィス",
      "shortDescription": "ゲーミングPC (高性能)の年間消費電力量は約450 kWh（年間電気代約157.50ユーロ）。平均消費電力は400Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "ゲーミングPC (高性能)の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "ゲーミングPC (高性能)の消費電力は約400W（ワット）です。1時間あたりの電気消費量は約0.400 kWh（約0.14ユーロ）です。年間の平均消費電力量は約450 kWhで、年間の電気代は約157.50ユーロ（月額約13.13ユーロ）となります。"
        },
        {
          "question": "ゲーミングPC (高性能)の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "ゲーミングPC (高性能)は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いゲーミングPC (高性能)を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "pc": {
      "name": "デスクトップPC（事務・オフィス用）",
      "category": "エンタメ・オフィス",
      "shortDescription": "デスクトップPC（事務・オフィス用）の年間消費電力量は約180 kWh（年間電気代約63.00ユーロ）。平均消費電力は120Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "デスクトップPC（事務・オフィス用）の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "デスクトップPC（事務・オフィス用）の消費電力は約120W（ワット）です。1時間あたりの電気消費量は約0.120 kWh（約0.04ユーロ）です。年間の平均消費電力量は約180 kWhで、年間の電気代は約63.00ユーロ（月額約5.25ユーロ）となります。"
        },
        {
          "question": "デスクトップPC（事務・オフィス用）の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "デスクトップPC（事務・オフィス用）は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いデスクトップPC（事務・オフィス用）を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "laptop": {
      "name": "ノートパソコン（ノートPC）",
      "category": "エンタメ・オフィス",
      "shortDescription": "ノートパソコン（ノートPC）の年間消費電力量は約75 kWh（年間電気代約26.25ユーロ）。平均消費電力は50Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "ノートパソコン（ノートPC）の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "ノートパソコン（ノートPC）の消費電力は約50W（ワット）です。1時間あたりの電気消費量は約0.050 kWh（約0.02ユーロ）です。年間の平均消費電力量は約75 kWhで、年間の電気代は約26.25ユーロ（月額約2.19ユーロ）となります。"
        },
        {
          "question": "ノートパソコン（ノートPC）の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "ノートパソコン（ノートPC）は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いノートパソコン（ノートPC）を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "monitor": {
      "name": "PCモニター・ディスプレイ (27-32型)",
      "category": "エンタメ・オフィス",
      "shortDescription": "PCモニター・ディスプレイ (27-32型)の年間消費電力量は約60 kWh（年間電気代約21.00ユーロ）。平均消費電力は35Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "PCモニター・ディスプレイ (27-32型)の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "PCモニター・ディスプレイ (27-32型)の消費電力は約35W（ワット）です。1時間あたりの電気消費量は約0.035 kWh（約0.01ユーロ）です。年間の平均消費電力量は約60 kWhで、年間の電気代は約21.00ユーロ（月額約1.75ユーロ）となります。"
        },
        {
          "question": "PCモニター・ディスプレイ (27-32型)の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "PCモニター・ディスプレイ (27-32型)は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いPCモニター・ディスプレイ (27-32型)を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "エンタメ・オフィス",
      "shortDescription": "PlayStation 5 (PS5)の年間消費電力量は約150 kWh（年間電気代約52.50ユーロ）。平均消費電力は200Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "PlayStation 5 (PS5)の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "PlayStation 5 (PS5)の消費電力は約200W（ワット）です。1時間あたりの電気消費量は約0.200 kWh（約0.07ユーロ）です。年間の平均消費電力量は約150 kWhで、年間の電気代は約52.50ユーロ（月額約4.38ユーロ）となります。"
        },
        {
          "question": "PlayStation 5 (PS5)の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "PlayStation 5 (PS5)は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いPlayStation 5 (PS5)を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "エンタメ・オフィス",
      "shortDescription": "Xbox Series Xの年間消費電力量は約140 kWh（年間電気代約49.00ユーロ）。平均消費電力は190Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Xbox Series Xの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "Xbox Series Xの消費電力は約190W（ワット）です。1時間あたりの電気消費量は約0.190 kWh（約0.07ユーロ）です。年間の平均消費電力量は約140 kWhで、年間の電気代は約49.00ユーロ（月額約4.08ユーロ）となります。"
        },
        {
          "question": "Xbox Series Xの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "Xbox Series Xは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いXbox Series Xを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "klimaanlage": {
      "name": "エアコン（冷房・暖房）",
      "category": "冷暖房・空調",
      "shortDescription": "エアコン（冷房・暖房）の年間消費電力量は約350 kWh（年間電気代約122.50ユーロ）。平均消費電力は800Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "エアコン（冷房・暖房）の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "エアコン（冷房・暖房）の消費電力は約800W（ワット）です。1時間あたりの電気消費量は約0.800 kWh（約0.28ユーロ）です。年間の平均消費電力量は約350 kWhで、年間の電気代は約122.50ユーロ（月額約10.21ユーロ）となります。"
        },
        {
          "question": "エアコン（冷房・暖房）の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "エアコン（冷房・暖房）は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いエアコン（冷房・暖房）を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "ventilator": {
      "name": "扇風機 / サーキュレーター",
      "category": "冷暖房・空調",
      "shortDescription": "扇風機 / サーキュレーターの年間消費電力量は約35 kWh（年間電気代約12.25ユーロ）。平均消費電力は45Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "扇風機 / サーキュレーターの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "扇風機 / サーキュレーターの消費電力は約45W（ワット）です。1時間あたりの電気消費量は約0.045 kWh（約0.02ユーロ）です。年間の平均消費電力量は約35 kWhで、年間の電気代は約12.25ユーロ（月額約1.02ユーロ）となります。"
        },
        {
          "question": "扇風機 / サーキュレーターの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "扇風機 / サーキュレーターは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い扇風機 / サーキュレーターを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "heizluefter": {
      "name": "電気ファンヒーター / セラミックヒーター",
      "category": "冷暖房・空調",
      "shortDescription": "電気ファンヒーター / セラミックヒーターの年間消費電力量は約300 kWh（年間電気代約105.00ユーロ）。平均消費電力は2000Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "電気ファンヒーター / セラミックヒーターの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "電気ファンヒーター / セラミックヒーターの消費電力は約2000W（ワット）です。1時間あたりの電気消費量は約2.000 kWh（約0.70ユーロ）です。年間の平均消費電力量は約300 kWhで、年間の電気代は約105.00ユーロ（月額約8.75ユーロ）となります。"
        },
        {
          "question": "電気ファンヒーター / セラミックヒーターの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "電気ファンヒーター / セラミックヒーターは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い電気ファンヒーター / セラミックヒーターを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "luftentfeuchter": {
      "name": "除湿機",
      "category": "冷暖房・空調",
      "shortDescription": "除湿機の年間消費電力量は約280 kWh（年間電気代約98.00ユーロ）。平均消費電力は350Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "除湿機の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "除湿機の消費電力は約350W（ワット）です。1時間あたりの電気消費量は約0.350 kWh（約0.12ユーロ）です。年間の平均消費電力量は約280 kWhで、年間の電気代は約98.00ユーロ（月額約8.17ユーロ）となります。"
        },
        {
          "question": "除湿機の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "除湿機は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い除湿機を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "aquarium": {
      "name": "熱帯魚アクアリウム水槽 (100〜200L)",
      "category": "趣味・その他",
      "shortDescription": "熱帯魚アクアリウム水槽 (100〜200L)の年間消費電力量は約350 kWh（年間電気代約122.50ユーロ）。平均消費電力は60Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "熱帯魚アクアリウム水槽 (100〜200L)の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "熱帯魚アクアリウム水槽 (100〜200L)の消費電力は約60W（ワット）です。1時間あたりの電気消費量は約0.060 kWh（約0.02ユーロ）です。年間の平均消費電力量は約350 kWhで、年間の電気代は約122.50ユーロ（月額約10.21ユーロ）となります。"
        },
        {
          "question": "熱帯魚アクアリウム水槽 (100〜200L)の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "熱帯魚アクアリウム水槽 (100〜200L)は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い熱帯魚アクアリウム水槽 (100〜200L)を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "pool": {
      "name": "プール用循環ポンプ・ろ過装置",
      "category": "趣味・その他",
      "shortDescription": "プール用循環ポンプ・ろ過装置の年間消費電力量は約480 kWh（年間電気代約168.00ユーロ）。平均消費電力は500Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "プール用循環ポンプ・ろ過装置の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "プール用循環ポンプ・ろ過装置の消費電力は約500W（ワット）です。1時間あたりの電気消費量は約0.500 kWh（約0.17ユーロ）です。年間の平均消費電力量は約480 kWhで、年間の電気代は約168.00ユーロ（月額約14.00ユーロ）となります。"
        },
        {
          "question": "プール用循環ポンプ・ろ過装置の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "プール用循環ポンプ・ろ過装置は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いプール用循環ポンプ・ろ過装置を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "whirlpool": {
      "name": "ジャグジー / 屋外ホットタブ",
      "category": "趣味・その他",
      "shortDescription": "ジャグジー / 屋外ホットタブの年間消費電力量は約2200 kWh（年間電気代約770.00ユーロ）。平均消費電力は2500Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "ジャグジー / 屋外ホットタブの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "ジャグジー / 屋外ホットタブの消費電力は約2500W（ワット）です。1時間あたりの電気消費量は約2.500 kWh（約0.88ユーロ）です。年間の平均消費電力量は約2200 kWhで、年間の電気代は約770.00ユーロ（月額約64.17ユーロ）となります。"
        },
        {
          "question": "ジャグジー / 屋外ホットタブの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "ジャグジー / 屋外ホットタブは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いジャグジー / 屋外ホットタブを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "3d-drucker": {
      "name": "3Dプリンター (FDM方式)",
      "category": "趣味・その他",
      "shortDescription": "3Dプリンター (FDM方式)の年間消費電力量は約120 kWh（年間電気代約42.00ユーロ）。平均消費電力は150Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "3Dプリンター (FDM方式)の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "3Dプリンター (FDM方式)の消費電力は約150W（ワット）です。1時間あたりの電気消費量は約0.150 kWh（約0.05ユーロ）です。年間の平均消費電力量は約120 kWhで、年間の電気代は約42.00ユーロ（月額約3.50ユーロ）となります。"
        },
        {
          "question": "3Dプリンター (FDM方式)の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "3Dプリンター (FDM方式)は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い3Dプリンター (FDM方式)を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "nas": {
      "name": "NASサーバー（ネットワークHDD）",
      "category": "エンタメ・オフィス",
      "shortDescription": "NASサーバー（ネットワークHDD）の年間消費電力量は約260 kWh（年間電気代約91.00ユーロ）。平均消費電力は30Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "NASサーバー（ネットワークHDD）の消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "NASサーバー（ネットワークHDD）の消費電力は約30W（ワット）です。1時間あたりの電気消費量は約0.030 kWh（約0.01ユーロ）です。年間の平均消費電力量は約260 kWhで、年間の電気代は約91.00ユーロ（月額約7.58ユーロ）となります。"
        },
        {
          "question": "NASサーバー（ネットワークHDD）の電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "NASサーバー（ネットワークHDD）は使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古いNASサーバー（ネットワークHDD）を最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    },
    "server": {
      "name": "自宅サーバー / ホームラボ",
      "category": "エンタメ・オフィス",
      "shortDescription": "自宅サーバー / ホームラボの年間消費電力量は約570 kWh（年間電気代約199.50ユーロ）。平均消費電力は65Wです。",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "自宅サーバー / ホームラボの消費電力と1時間・年間あたりの電気代はいくら？",
          "answer": "自宅サーバー / ホームラボの消費電力は約65W（ワット）です。1時間あたりの電気消費量は約0.065 kWh（約0.02ユーロ）です。年間の平均消費電力量は約570 kWhで、年間の電気代は約199.50ユーロ（月額約16.63ユーロ）となります。"
        },
        {
          "question": "自宅サーバー / ホームラボの電気代を最も安く抑える節電方法は？",
          "answer": "エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。"
        },
        {
          "question": "自宅サーバー / ホームラボは使っていない待機状態でも電気を消費する？",
          "answer": "はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。"
        },
        {
          "question": "古い自宅サーバー / ホームラボを最新の省エネモデルに買い換えると節電になる？",
          "answer": "8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。"
        }
      ]
    }
  },
  "fr": {
    "kuehlschrank": {
      "name": "Réfrigérateur",
      "category": "Cuisine",
      "shortDescription": "Un Réfrigérateur consomme environ 120 kWh par an (environ 42.00 € à 35 ct/kWh). Puissance moyenne : 90 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Réfrigérateur par heure et par an ?",
          "answer": "Un Réfrigérateur consomme environ 90 Watts, soit environ 0.090 kWh par heure (environ 0.01 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 120 kWh (42.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Réfrigérateur par mois ?",
          "answer": "Le coût moyen est de 0,12 € / Tag, ce qui représente environ 3.50 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Réfrigérateur ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Réfrigérateur consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "waschmaschine": {
      "name": "Lave-linge",
      "category": "Ménage & Entretien",
      "shortDescription": "Un Lave-linge consomme environ 140 kWh par an (environ 49.00 € à 35 ct/kWh). Puissance moyenne : 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Lave-linge par heure et par an ?",
          "answer": "Un Lave-linge consomme environ 2000 Watts, soit environ 2.000 kWh par heure (environ 0.70 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 140 kWh (49.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Lave-linge par mois ?",
          "answer": "Le coût moyen est de 0,25 € / Waschgang, ce qui représente environ 4.08 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Lave-linge ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Lave-linge consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "trockner": {
      "name": "Sèche-linge",
      "category": "Ménage & Entretien",
      "shortDescription": "Un Sèche-linge consomme environ 180 kWh par an (environ 63.00 € à 35 ct/kWh). Puissance moyenne : 1500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Sèche-linge par heure et par an ?",
          "answer": "Un Sèche-linge consomme environ 1500 Watts, soit environ 1.500 kWh par heure (environ 0.53 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 180 kWh (63.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Sèche-linge par mois ?",
          "answer": "Le coût moyen est de 0,45 € / Ladung, ce qui représente environ 5.25 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Sèche-linge ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Sèche-linge consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Lave-vaisselle",
      "category": "Cuisine",
      "shortDescription": "Un Lave-vaisselle consomme environ 160 kWh par an (environ 56.00 € à 35 ct/kWh). Puissance moyenne : 1800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Lave-vaisselle par heure et par an ?",
          "answer": "Un Lave-vaisselle consomme environ 1800 Watts, soit environ 1.800 kWh par heure (environ 0.63 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 160 kWh (56.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Lave-vaisselle par mois ?",
          "answer": "Le coût moyen est de 0,28 € / Spülgang, ce qui représente environ 4.67 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Lave-vaisselle ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Lave-vaisselle consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "backofen": {
      "name": "Four électrique",
      "category": "Cuisine",
      "shortDescription": "Un Four électrique consomme environ 150 kWh par an (environ 52.50 € à 35 ct/kWh). Puissance moyenne : 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Four électrique par heure et par an ?",
          "answer": "Un Four électrique consomme environ 2500 Watts, soit environ 2.500 kWh par heure (environ 0.88 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 150 kWh (52.50 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Four électrique par mois ?",
          "answer": "Le coût moyen est de 0,55 € / Nutzung, ce qui représente environ 4.38 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Four électrique ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Four électrique consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "herd": {
      "name": "Plaque à induction / Cuisinière",
      "category": "Cuisine",
      "shortDescription": "Un Plaque à induction / Cuisinière consomme environ 220 kWh par an (environ 77.00 € à 35 ct/kWh). Puissance moyenne : 3000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Plaque à induction / Cuisinière par heure et par an ?",
          "answer": "Un Plaque à induction / Cuisinière consomme environ 3000 Watts, soit environ 3.000 kWh par heure (environ 1.05 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 220 kWh (77.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Plaque à induction / Cuisinière par mois ?",
          "answer": "Le coût moyen est de 0,35 € / Kochvorgang, ce qui représente environ 6.42 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Plaque à induction / Cuisinière ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Plaque à induction / Cuisinière consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "wasserkocher": {
      "name": "Bouilloire électrique",
      "category": "Cuisine",
      "shortDescription": "Un Bouilloire électrique consomme environ 80 kWh par an (environ 28.00 € à 35 ct/kWh). Puissance moyenne : 2200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Bouilloire électrique par heure et par an ?",
          "answer": "Un Bouilloire électrique consomme environ 2200 Watts, soit environ 2.200 kWh par heure (environ 0.77 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 80 kWh (28.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Bouilloire électrique par mois ?",
          "answer": "Le coût moyen est de 0,03 € / 1 Liter Kochen, ce qui représente environ 2.33 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Bouilloire électrique ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Bouilloire électrique consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Machine à café / Expresso",
      "category": "Cuisine",
      "shortDescription": "Un Machine à café / Expresso consomme environ 65 kWh par an (environ 22.75 € à 35 ct/kWh). Puissance moyenne : 1400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Machine à café / Expresso par heure et par an ?",
          "answer": "Un Machine à café / Expresso consomme environ 1400 Watts, soit environ 1.400 kWh par heure (environ 0.49 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 65 kWh (22.75 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Machine à café / Expresso par mois ?",
          "answer": "Le coût moyen est de 0,02 € / Tasse Kaffee, ce qui représente environ 1.90 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Machine à café / Expresso ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Machine à café / Expresso consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "fernseher": {
      "name": "Téléviseur Smart TV (55-65\")",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Téléviseur Smart TV (55-65\") consomme environ 175 kWh par an (environ 61.25 € à 35 ct/kWh). Puissance moyenne : 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Téléviseur Smart TV (55-65\") par heure et par an ?",
          "answer": "Un Téléviseur Smart TV (55-65\") consomme environ 120 Watts, soit environ 0.120 kWh par heure (environ 0.04 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 175 kWh (61.25 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Téléviseur Smart TV (55-65\") par mois ?",
          "answer": "Le coût moyen est de 0,17 € / 4 Stunden, ce qui représente environ 5.10 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Téléviseur Smart TV (55-65\") ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Téléviseur Smart TV (55-65\") consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC Gamer (Haut de Gamme)",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un PC Gamer (Haut de Gamme) consomme environ 450 kWh par an (environ 157.50 € à 35 ct/kWh). Puissance moyenne : 400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un PC Gamer (Haut de Gamme) par heure et par an ?",
          "answer": "Un PC Gamer (Haut de Gamme) consomme environ 400 Watts, soit environ 0.400 kWh par heure (environ 0.14 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 450 kWh (157.50 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un PC Gamer (Haut de Gamme) par mois ?",
          "answer": "Le coût moyen est de 0,56 € / 4 Stunden Session, ce qui représente environ 13.13 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un PC Gamer (Haut de Gamme) ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un PC Gamer (Haut de Gamme) consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "pc": {
      "name": "Ordinateur de Bureau / PC fixe",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Ordinateur de Bureau / PC fixe consomme environ 180 kWh par an (environ 63.00 € à 35 ct/kWh). Puissance moyenne : 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Ordinateur de Bureau / PC fixe par heure et par an ?",
          "answer": "Un Ordinateur de Bureau / PC fixe consomme environ 120 Watts, soit environ 0.120 kWh par heure (environ 0.04 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 180 kWh (63.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Ordinateur de Bureau / PC fixe par mois ?",
          "answer": "Le coût moyen est de 0,25 € / 6 Stunden Arbeit, ce qui représente environ 5.25 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Ordinateur de Bureau / PC fixe ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Ordinateur de Bureau / PC fixe consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "laptop": {
      "name": "Ordinateur Portable / Laptop",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Ordinateur Portable / Laptop consomme environ 75 kWh par an (environ 26.25 € à 35 ct/kWh). Puissance moyenne : 50 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Ordinateur Portable / Laptop par heure et par an ?",
          "answer": "Un Ordinateur Portable / Laptop consomme environ 50 Watts, soit environ 0.050 kWh par heure (environ 0.02 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 75 kWh (26.25 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Ordinateur Portable / Laptop par mois ?",
          "answer": "Le coût moyen est de 0,11 € / 6 Stunden Arbeit, ce qui représente environ 2.19 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Ordinateur Portable / Laptop ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Ordinateur Portable / Laptop consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "monitor": {
      "name": "Écran PC / Moniteur (27-32\")",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Écran PC / Moniteur (27-32\") consomme environ 60 kWh par an (environ 21.00 € à 35 ct/kWh). Puissance moyenne : 35 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Écran PC / Moniteur (27-32\") par heure et par an ?",
          "answer": "Un Écran PC / Moniteur (27-32\") consomme environ 35 Watts, soit environ 0.035 kWh par heure (environ 0.01 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 60 kWh (21.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Écran PC / Moniteur (27-32\") par mois ?",
          "answer": "Le coût moyen est de 0,07 € / 6 Stunden Betrieb, ce qui représente environ 1.75 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Écran PC / Moniteur (27-32\") ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Écran PC / Moniteur (27-32\") consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un PlayStation 5 (PS5) consomme environ 150 kWh par an (environ 52.50 € à 35 ct/kWh). Puissance moyenne : 200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un PlayStation 5 (PS5) par heure et par an ?",
          "answer": "Un PlayStation 5 (PS5) consomme environ 200 Watts, soit environ 0.200 kWh par heure (environ 0.07 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 150 kWh (52.50 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un PlayStation 5 (PS5) par mois ?",
          "answer": "Le coût moyen est de 0,21 € / 3 Stunden Spielen, ce qui représente environ 4.38 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un PlayStation 5 (PS5) ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un PlayStation 5 (PS5) consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Xbox Series X consomme environ 140 kWh par an (environ 49.00 € à 35 ct/kWh). Puissance moyenne : 190 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Xbox Series X par heure et par an ?",
          "answer": "Un Xbox Series X consomme environ 190 Watts, soit environ 0.190 kWh par heure (environ 0.07 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 140 kWh (49.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Xbox Series X par mois ?",
          "answer": "Le coût moyen est de 0,20 € / 3 Stunden Spielen, ce qui représente environ 4.08 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Xbox Series X ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Xbox Series X consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "klimaanlage": {
      "name": "Climatiseur (Split)",
      "category": "Climatisation & Chauffage",
      "shortDescription": "Un Climatiseur (Split) consomme environ 350 kWh par an (environ 122.50 € à 35 ct/kWh). Puissance moyenne : 800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Climatiseur (Split) par heure et par an ?",
          "answer": "Un Climatiseur (Split) consomme environ 800 Watts, soit environ 0.800 kWh par heure (environ 0.28 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 350 kWh (122.50 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Climatiseur (Split) par mois ?",
          "answer": "Le coût moyen est de 1,40 € / 5 Stunden Kühlung, ce qui représente environ 10.21 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Climatiseur (Split) ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Climatiseur (Split) consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilateur sur pied",
      "category": "Climatisation & Chauffage",
      "shortDescription": "Un Ventilateur sur pied consomme environ 35 kWh par an (environ 12.25 € à 35 ct/kWh). Puissance moyenne : 45 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Ventilateur sur pied par heure et par an ?",
          "answer": "Un Ventilateur sur pied consomme environ 45 Watts, soit environ 0.045 kWh par heure (environ 0.02 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 35 kWh (12.25 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Ventilateur sur pied par mois ?",
          "answer": "Le coût moyen est de 0,10 € / 6 Stunden, ce qui représente environ 1.02 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Ventilateur sur pied ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Ventilateur sur pied consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "heizluefter": {
      "name": "Radiateur Soufflant / Chauffage d'appoint",
      "category": "Climatisation & Chauffage",
      "shortDescription": "Un Radiateur Soufflant / Chauffage d'appoint consomme environ 300 kWh par an (environ 105.00 € à 35 ct/kWh). Puissance moyenne : 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Radiateur Soufflant / Chauffage d'appoint par heure et par an ?",
          "answer": "Un Radiateur Soufflant / Chauffage d'appoint consomme environ 2000 Watts, soit environ 2.000 kWh par heure (environ 0.70 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 300 kWh (105.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Radiateur Soufflant / Chauffage d'appoint par mois ?",
          "answer": "Le coût moyen est de 1,40 € / 2 Stunden Heizen, ce qui représente environ 8.75 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Radiateur Soufflant / Chauffage d'appoint ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Radiateur Soufflant / Chauffage d'appoint consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Déshumidificateur d'air",
      "category": "Climatisation & Chauffage",
      "shortDescription": "Un Déshumidificateur d'air consomme environ 280 kWh par an (environ 98.00 € à 35 ct/kWh). Puissance moyenne : 350 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Déshumidificateur d'air par heure et par an ?",
          "answer": "Un Déshumidificateur d'air consomme environ 350 Watts, soit environ 0.350 kWh par heure (environ 0.12 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 280 kWh (98.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Déshumidificateur d'air par mois ?",
          "answer": "Le coût moyen est de 0,74 € / 6 Stunden, ce qui représente environ 8.17 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Déshumidificateur d'air ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Déshumidificateur d'air consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "aquarium": {
      "name": "Aquarium (100–200 Litres)",
      "category": "Loisirs & Spécial",
      "shortDescription": "Un Aquarium (100–200 Litres) consomme environ 350 kWh par an (environ 122.50 € à 35 ct/kWh). Puissance moyenne : 60 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Aquarium (100–200 Litres) par heure et par an ?",
          "answer": "Un Aquarium (100–200 Litres) consomme environ 60 Watts, soit environ 0.060 kWh par heure (environ 0.02 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 350 kWh (122.50 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Aquarium (100–200 Litres) par mois ?",
          "answer": "Le coût moyen est de 0,34 € / 24 Stunden Dauerbetrieb, ce qui représente environ 10.21 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Aquarium (100–200 Litres) ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Aquarium (100–200 Litres) consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "pool": {
      "name": "Pompe de Piscine & Filtration",
      "category": "Loisirs & Spécial",
      "shortDescription": "Un Pompe de Piscine & Filtration consomme environ 480 kWh par an (environ 168.00 € à 35 ct/kWh). Puissance moyenne : 500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Pompe de Piscine & Filtration par heure et par an ?",
          "answer": "Un Pompe de Piscine & Filtration consomme environ 500 Watts, soit environ 0.500 kWh par heure (environ 0.17 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 480 kWh (168.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Pompe de Piscine & Filtration par mois ?",
          "answer": "Le coût moyen est de 1,05 € / 6 Stunden Filterung, ce qui représente environ 14.00 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Pompe de Piscine & Filtration ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Pompe de Piscine & Filtration consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "whirlpool": {
      "name": "Jacuzzi / Spa Extérieur",
      "category": "Loisirs & Spécial",
      "shortDescription": "Un Jacuzzi / Spa Extérieur consomme environ 2200 kWh par an (environ 770.00 € à 35 ct/kWh). Puissance moyenne : 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Jacuzzi / Spa Extérieur par heure et par an ?",
          "answer": "Un Jacuzzi / Spa Extérieur consomme environ 2500 Watts, soit environ 2.500 kWh par heure (environ 0.88 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 2200 kWh (770.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Jacuzzi / Spa Extérieur par mois ?",
          "answer": "Le coût moyen est de 2,10 € / Tag (Heizung & Zirkulation), ce qui représente environ 64.17 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Jacuzzi / Spa Extérieur ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Jacuzzi / Spa Extérieur consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "3d-drucker": {
      "name": "Imprimante 3D (FDM)",
      "category": "Loisirs & Spécial",
      "shortDescription": "Un Imprimante 3D (FDM) consomme environ 120 kWh par an (environ 42.00 € à 35 ct/kWh). Puissance moyenne : 150 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Imprimante 3D (FDM) par heure et par an ?",
          "answer": "Un Imprimante 3D (FDM) consomme environ 150 Watts, soit environ 0.150 kWh par heure (environ 0.05 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 120 kWh (42.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Imprimante 3D (FDM) par mois ?",
          "answer": "Le coût moyen est de 0,42 € / 8 Stunden Druck, ce qui représente environ 3.50 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Imprimante 3D (FDM) ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Imprimante 3D (FDM) consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "nas": {
      "name": "Serveur NAS / Stockage Réseau",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Serveur NAS / Stockage Réseau consomme environ 260 kWh par an (environ 91.00 € à 35 ct/kWh). Puissance moyenne : 30 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Serveur NAS / Stockage Réseau par heure et par an ?",
          "answer": "Un Serveur NAS / Stockage Réseau consomme environ 30 Watts, soit environ 0.030 kWh par heure (environ 0.01 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 260 kWh (91.00 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Serveur NAS / Stockage Réseau par mois ?",
          "answer": "Le coût moyen est de 0,25 € / 24 Stunden Dauerbetrieb, ce qui représente environ 7.58 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Serveur NAS / Stockage Réseau ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Serveur NAS / Stockage Réseau consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    },
    "server": {
      "name": "Serveur Domestique / Homelab",
      "category": "Divertissement & Bureau",
      "shortDescription": "Un Serveur Domestique / Homelab consomme environ 570 kWh par an (environ 199.50 € à 35 ct/kWh). Puissance moyenne : 65 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique d'un Serveur Domestique / Homelab par heure et par an ?",
          "answer": "Un Serveur Domestique / Homelab consomme environ 65 Watts, soit environ 0.065 kWh par heure (environ 0.02 €/h à 0,35 €/kWh). Sa consommation annuelle typique est de 570 kWh (199.50 €/an)."
        },
        {
          "question": "Combien coûte l'utilisation d'un Serveur Domestique / Homelab par mois ?",
          "answer": "Le coût moyen est de 0,55 € / 24 Stunden Dauerbetrieb, ce qui représente environ 16.63 € par mois sur la facture d'électricité."
        },
        {
          "question": "Comment faire des économies d'énergie avec un Serveur Domestique / Homelab ?",
          "answer": "Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille."
        },
        {
          "question": "Un Serveur Domestique / Homelab consomme-t-il de l'électricité en mode veille ?",
          "answer": "Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts."
        }
      ]
    }
  },
  "pt": {
    "kuehlschrank": {
      "name": "Frigorífico / Geladeira",
      "category": "Cozinha",
      "shortDescription": "Um Frigorífico / Geladeira consome cerca de 120 kWh por ano (cerca de 42.00 € a 35 ct/kWh). Potência média: 90 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Frigorífico / Geladeira por hora, dia e ano em eletricidade?",
          "answer": "Um Frigorífico / Geladeira consome em média cerca de 90 Watts, o que equivale a 0.090 kWh por hora (cerca de 0.01 €/hora a 35 ct/kWh). O consumo anual típico ronda os 120 kWh (42.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Frigorífico / Geladeira por mês?",
          "answer": "O custo médio de operação é de cerca de 0,12 € / Tag, totalizando cerca de 3.50 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Frigorífico / Geladeira?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "waschmaschine": {
      "name": "Máquina de Lavar Roupa",
      "category": "Casa e Limpeza",
      "shortDescription": "Um Máquina de Lavar Roupa consome cerca de 140 kWh por ano (cerca de 49.00 € a 35 ct/kWh). Potência média: 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Máquina de Lavar Roupa por hora, dia e ano em eletricidade?",
          "answer": "Um Máquina de Lavar Roupa consome em média cerca de 2000 Watts, o que equivale a 2.000 kWh por hora (cerca de 0.70 €/hora a 35 ct/kWh). O consumo anual típico ronda os 140 kWh (49.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Máquina de Lavar Roupa por mês?",
          "answer": "O custo médio de operação é de cerca de 0,25 € / Waschgang, totalizando cerca de 4.08 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Máquina de Lavar Roupa?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "trockner": {
      "name": "Secadora de Roupa",
      "category": "Casa e Limpeza",
      "shortDescription": "Um Secadora de Roupa consome cerca de 180 kWh por ano (cerca de 63.00 € a 35 ct/kWh). Potência média: 1500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Secadora de Roupa por hora, dia e ano em eletricidade?",
          "answer": "Um Secadora de Roupa consome em média cerca de 1500 Watts, o que equivale a 1.500 kWh por hora (cerca de 0.53 €/hora a 35 ct/kWh). O consumo anual típico ronda os 180 kWh (63.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Secadora de Roupa por mês?",
          "answer": "O custo médio de operação é de cerca de 0,45 € / Ladung, totalizando cerca de 5.25 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Secadora de Roupa?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Máquina de Lavar Louça",
      "category": "Cozinha",
      "shortDescription": "Um Máquina de Lavar Louça consome cerca de 160 kWh por ano (cerca de 56.00 € a 35 ct/kWh). Potência média: 1800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Máquina de Lavar Louça por hora, dia e ano em eletricidade?",
          "answer": "Um Máquina de Lavar Louça consome em média cerca de 1800 Watts, o que equivale a 1.800 kWh por hora (cerca de 0.63 €/hora a 35 ct/kWh). O consumo anual típico ronda os 160 kWh (56.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Máquina de Lavar Louça por mês?",
          "answer": "O custo médio de operação é de cerca de 0,28 € / Spülgang, totalizando cerca de 4.67 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Máquina de Lavar Louça?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "backofen": {
      "name": "Forno Elétrico",
      "category": "Cozinha",
      "shortDescription": "Um Forno Elétrico consome cerca de 150 kWh por ano (cerca de 52.50 € a 35 ct/kWh). Potência média: 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Forno Elétrico por hora, dia e ano em eletricidade?",
          "answer": "Um Forno Elétrico consome em média cerca de 2500 Watts, o que equivale a 2.500 kWh por hora (cerca de 0.88 €/hora a 35 ct/kWh). O consumo anual típico ronda os 150 kWh (52.50 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Forno Elétrico por mês?",
          "answer": "O custo médio de operação é de cerca de 0,55 € / Nutzung, totalizando cerca de 4.38 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Forno Elétrico?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "herd": {
      "name": "Placa de Indução / Fogão",
      "category": "Cozinha",
      "shortDescription": "Um Placa de Indução / Fogão consome cerca de 220 kWh por ano (cerca de 77.00 € a 35 ct/kWh). Potência média: 3000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Placa de Indução / Fogão por hora, dia e ano em eletricidade?",
          "answer": "Um Placa de Indução / Fogão consome em média cerca de 3000 Watts, o que equivale a 3.000 kWh por hora (cerca de 1.05 €/hora a 35 ct/kWh). O consumo anual típico ronda os 220 kWh (77.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Placa de Indução / Fogão por mês?",
          "answer": "O custo médio de operação é de cerca de 0,35 € / Kochvorgang, totalizando cerca de 6.42 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Placa de Indução / Fogão?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "wasserkocher": {
      "name": "Chaleira Elétrica",
      "category": "Cozinha",
      "shortDescription": "Um Chaleira Elétrica consome cerca de 80 kWh por ano (cerca de 28.00 € a 35 ct/kWh). Potência média: 2200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Chaleira Elétrica por hora, dia e ano em eletricidade?",
          "answer": "Um Chaleira Elétrica consome em média cerca de 2200 Watts, o que equivale a 2.200 kWh por hora (cerca de 0.77 €/hora a 35 ct/kWh). O consumo anual típico ronda os 80 kWh (28.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Chaleira Elétrica por mês?",
          "answer": "O custo médio de operação é de cerca de 0,03 € / 1 Liter Kochen, totalizando cerca de 2.33 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Chaleira Elétrica?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Máquina de Café / Expresso",
      "category": "Cozinha",
      "shortDescription": "Um Máquina de Café / Expresso consome cerca de 65 kWh por ano (cerca de 22.75 € a 35 ct/kWh). Potência média: 1400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Máquina de Café / Expresso por hora, dia e ano em eletricidade?",
          "answer": "Um Máquina de Café / Expresso consome em média cerca de 1400 Watts, o que equivale a 1.400 kWh por hora (cerca de 0.49 €/hora a 35 ct/kWh). O consumo anual típico ronda os 65 kWh (22.75 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Máquina de Café / Expresso por mês?",
          "answer": "O custo médio de operação é de cerca de 0,02 € / Tasse Kaffee, totalizando cerca de 1.90 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Máquina de Café / Expresso?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "fernseher": {
      "name": "Smart TV (55-65 polegadas)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Smart TV (55-65 polegadas) consome cerca de 175 kWh por ano (cerca de 61.25 € a 35 ct/kWh). Potência média: 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Smart TV (55-65 polegadas) por hora, dia e ano em eletricidade?",
          "answer": "Um Smart TV (55-65 polegadas) consome em média cerca de 120 Watts, o que equivale a 0.120 kWh por hora (cerca de 0.04 €/hora a 35 ct/kWh). O consumo anual típico ronda os 175 kWh (61.25 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Smart TV (55-65 polegadas) por mês?",
          "answer": "O custo médio de operação é de cerca de 0,17 € / 4 Stunden, totalizando cerca de 5.10 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Smart TV (55-65 polegadas)?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC Gamer de Alta Performance",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um PC Gamer de Alta Performance consome cerca de 450 kWh por ano (cerca de 157.50 € a 35 ct/kWh). Potência média: 400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um PC Gamer de Alta Performance por hora, dia e ano em eletricidade?",
          "answer": "Um PC Gamer de Alta Performance consome em média cerca de 400 Watts, o que equivale a 0.400 kWh por hora (cerca de 0.14 €/hora a 35 ct/kWh). O consumo anual típico ronda os 450 kWh (157.50 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um PC Gamer de Alta Performance por mês?",
          "answer": "O custo médio de operação é de cerca de 0,56 € / 4 Stunden Session, totalizando cerca de 13.13 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o PC Gamer de Alta Performance?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "pc": {
      "name": "Computador Desktop / PC de Escritório",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Computador Desktop / PC de Escritório consome cerca de 180 kWh por ano (cerca de 63.00 € a 35 ct/kWh). Potência média: 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Computador Desktop / PC de Escritório por hora, dia e ano em eletricidade?",
          "answer": "Um Computador Desktop / PC de Escritório consome em média cerca de 120 Watts, o que equivale a 0.120 kWh por hora (cerca de 0.04 €/hora a 35 ct/kWh). O consumo anual típico ronda os 180 kWh (63.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Computador Desktop / PC de Escritório por mês?",
          "answer": "O custo médio de operação é de cerca de 0,25 € / 6 Stunden Arbeit, totalizando cerca de 5.25 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Computador Desktop / PC de Escritório?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "laptop": {
      "name": "Portátil / Notebook",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Portátil / Notebook consome cerca de 75 kWh por ano (cerca de 26.25 € a 35 ct/kWh). Potência média: 50 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Portátil / Notebook por hora, dia e ano em eletricidade?",
          "answer": "Um Portátil / Notebook consome em média cerca de 50 Watts, o que equivale a 0.050 kWh por hora (cerca de 0.02 €/hora a 35 ct/kWh). O consumo anual típico ronda os 75 kWh (26.25 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Portátil / Notebook por mês?",
          "answer": "O custo médio de operação é de cerca de 0,11 € / 6 Stunden Arbeit, totalizando cerca de 2.19 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Portátil / Notebook?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "monitor": {
      "name": "Monitor de PC (27-32 polegadas)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Monitor de PC (27-32 polegadas) consome cerca de 60 kWh por ano (cerca de 21.00 € a 35 ct/kWh). Potência média: 35 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Monitor de PC (27-32 polegadas) por hora, dia e ano em eletricidade?",
          "answer": "Um Monitor de PC (27-32 polegadas) consome em média cerca de 35 Watts, o que equivale a 0.035 kWh por hora (cerca de 0.01 €/hora a 35 ct/kWh). O consumo anual típico ronda os 60 kWh (21.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Monitor de PC (27-32 polegadas) por mês?",
          "answer": "O custo médio de operação é de cerca de 0,07 € / 6 Stunden Betrieb, totalizando cerca de 1.75 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Monitor de PC (27-32 polegadas)?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um PlayStation 5 (PS5) consome cerca de 150 kWh por ano (cerca de 52.50 € a 35 ct/kWh). Potência média: 200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um PlayStation 5 (PS5) por hora, dia e ano em eletricidade?",
          "answer": "Um PlayStation 5 (PS5) consome em média cerca de 200 Watts, o que equivale a 0.200 kWh por hora (cerca de 0.07 €/hora a 35 ct/kWh). O consumo anual típico ronda os 150 kWh (52.50 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um PlayStation 5 (PS5) por mês?",
          "answer": "O custo médio de operação é de cerca de 0,21 € / 3 Stunden Spielen, totalizando cerca de 4.38 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o PlayStation 5 (PS5)?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Xbox Series X consome cerca de 140 kWh por ano (cerca de 49.00 € a 35 ct/kWh). Potência média: 190 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Xbox Series X por hora, dia e ano em eletricidade?",
          "answer": "Um Xbox Series X consome em média cerca de 190 Watts, o que equivale a 0.190 kWh por hora (cerca de 0.07 €/hora a 35 ct/kWh). O consumo anual típico ronda os 140 kWh (49.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Xbox Series X por mês?",
          "answer": "O custo médio de operação é de cerca de 0,20 € / 3 Stunden Spielen, totalizando cerca de 4.08 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Xbox Series X?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "klimaanlage": {
      "name": "Ar Condicionado (Split)",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Um Ar Condicionado (Split) consome cerca de 350 kWh por ano (cerca de 122.50 € a 35 ct/kWh). Potência média: 800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Ar Condicionado (Split) por hora, dia e ano em eletricidade?",
          "answer": "Um Ar Condicionado (Split) consome em média cerca de 800 Watts, o que equivale a 0.800 kWh por hora (cerca de 0.28 €/hora a 35 ct/kWh). O consumo anual típico ronda os 350 kWh (122.50 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Ar Condicionado (Split) por mês?",
          "answer": "O custo médio de operação é de cerca de 1,40 € / 5 Stunden Kühlung, totalizando cerca de 10.21 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Ar Condicionado (Split)?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilador de Pé",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Um Ventilador de Pé consome cerca de 35 kWh por ano (cerca de 12.25 € a 35 ct/kWh). Potência média: 45 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Ventilador de Pé por hora, dia e ano em eletricidade?",
          "answer": "Um Ventilador de Pé consome em média cerca de 45 Watts, o que equivale a 0.045 kWh por hora (cerca de 0.02 €/hora a 35 ct/kWh). O consumo anual típico ronda os 35 kWh (12.25 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Ventilador de Pé por mês?",
          "answer": "O custo médio de operação é de cerca de 0,10 € / 6 Stunden, totalizando cerca de 1.02 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Ventilador de Pé?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "heizluefter": {
      "name": "Termoventilador / Aquecedor Elétrico",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Um Termoventilador / Aquecedor Elétrico consome cerca de 300 kWh por ano (cerca de 105.00 € a 35 ct/kWh). Potência média: 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Termoventilador / Aquecedor Elétrico por hora, dia e ano em eletricidade?",
          "answer": "Um Termoventilador / Aquecedor Elétrico consome em média cerca de 2000 Watts, o que equivale a 2.000 kWh por hora (cerca de 0.70 €/hora a 35 ct/kWh). O consumo anual típico ronda os 300 kWh (105.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Termoventilador / Aquecedor Elétrico por mês?",
          "answer": "O custo médio de operação é de cerca de 1,40 € / 2 Stunden Heizen, totalizando cerca de 8.75 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Termoventilador / Aquecedor Elétrico?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Desumidificador de Ar",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Um Desumidificador de Ar consome cerca de 280 kWh por ano (cerca de 98.00 € a 35 ct/kWh). Potência média: 350 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Desumidificador de Ar por hora, dia e ano em eletricidade?",
          "answer": "Um Desumidificador de Ar consome em média cerca de 350 Watts, o que equivale a 0.350 kWh por hora (cerca de 0.12 €/hora a 35 ct/kWh). O consumo anual típico ronda os 280 kWh (98.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Desumidificador de Ar por mês?",
          "answer": "O custo médio de operação é de cerca de 0,74 € / 6 Stunden, totalizando cerca de 8.17 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Desumidificador de Ar?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "aquarium": {
      "name": "Aquário (100–200 Litros)",
      "category": "Hobbies e Especial",
      "shortDescription": "Um Aquário (100–200 Litros) consome cerca de 350 kWh por ano (cerca de 122.50 € a 35 ct/kWh). Potência média: 60 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Aquário (100–200 Litros) por hora, dia e ano em eletricidade?",
          "answer": "Um Aquário (100–200 Litros) consome em média cerca de 60 Watts, o que equivale a 0.060 kWh por hora (cerca de 0.02 €/hora a 35 ct/kWh). O consumo anual típico ronda os 350 kWh (122.50 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Aquário (100–200 Litros) por mês?",
          "answer": "O custo médio de operação é de cerca de 0,34 € / 24 Stunden Dauerbetrieb, totalizando cerca de 10.21 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Aquário (100–200 Litros)?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "pool": {
      "name": "Bomba de Piscina e Filtro",
      "category": "Hobbies e Especial",
      "shortDescription": "Um Bomba de Piscina e Filtro consome cerca de 480 kWh por ano (cerca de 168.00 € a 35 ct/kWh). Potência média: 500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Bomba de Piscina e Filtro por hora, dia e ano em eletricidade?",
          "answer": "Um Bomba de Piscina e Filtro consome em média cerca de 500 Watts, o que equivale a 0.500 kWh por hora (cerca de 0.17 €/hora a 35 ct/kWh). O consumo anual típico ronda os 480 kWh (168.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Bomba de Piscina e Filtro por mês?",
          "answer": "O custo médio de operação é de cerca de 1,05 € / 6 Stunden Filterung, totalizando cerca de 14.00 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Bomba de Piscina e Filtro?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "whirlpool": {
      "name": "Jacuzzi / Banheira de Hidromassagem",
      "category": "Hobbies e Especial",
      "shortDescription": "Um Jacuzzi / Banheira de Hidromassagem consome cerca de 2200 kWh por ano (cerca de 770.00 € a 35 ct/kWh). Potência média: 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Jacuzzi / Banheira de Hidromassagem por hora, dia e ano em eletricidade?",
          "answer": "Um Jacuzzi / Banheira de Hidromassagem consome em média cerca de 2500 Watts, o que equivale a 2.500 kWh por hora (cerca de 0.88 €/hora a 35 ct/kWh). O consumo anual típico ronda os 2200 kWh (770.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Jacuzzi / Banheira de Hidromassagem por mês?",
          "answer": "O custo médio de operação é de cerca de 2,10 € / Tag (Heizung & Zirkulation), totalizando cerca de 64.17 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Jacuzzi / Banheira de Hidromassagem?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "3d-drucker": {
      "name": "Impressora 3D (FDM)",
      "category": "Hobbies e Especial",
      "shortDescription": "Um Impressora 3D (FDM) consome cerca de 120 kWh por ano (cerca de 42.00 € a 35 ct/kWh). Potência média: 150 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Impressora 3D (FDM) por hora, dia e ano em eletricidade?",
          "answer": "Um Impressora 3D (FDM) consome em média cerca de 150 Watts, o que equivale a 0.150 kWh por hora (cerca de 0.05 €/hora a 35 ct/kWh). O consumo anual típico ronda os 120 kWh (42.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Impressora 3D (FDM) por mês?",
          "answer": "O custo médio de operação é de cerca de 0,42 € / 8 Stunden Druck, totalizando cerca de 3.50 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Impressora 3D (FDM)?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "nas": {
      "name": "Servidor NAS / Armazenamento em Rede",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Servidor NAS / Armazenamento em Rede consome cerca de 260 kWh por ano (cerca de 91.00 € a 35 ct/kWh). Potência média: 30 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Servidor NAS / Armazenamento em Rede por hora, dia e ano em eletricidade?",
          "answer": "Um Servidor NAS / Armazenamento em Rede consome em média cerca de 30 Watts, o que equivale a 0.030 kWh por hora (cerca de 0.01 €/hora a 35 ct/kWh). O consumo anual típico ronda os 260 kWh (91.00 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Servidor NAS / Armazenamento em Rede por mês?",
          "answer": "O custo médio de operação é de cerca de 0,25 € / 24 Stunden Dauerbetrieb, totalizando cerca de 7.58 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Servidor NAS / Armazenamento em Rede?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    },
    "server": {
      "name": "Servidor Doméstico / Home Server",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Um Servidor Doméstico / Home Server consome cerca de 570 kWh por ano (cerca de 199.50 € a 35 ct/kWh). Potência média: 65 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto gasta um Servidor Doméstico / Home Server por hora, dia e ano em eletricidade?",
          "answer": "Um Servidor Doméstico / Home Server consome em média cerca de 65 Watts, o que equivale a 0.065 kWh por hora (cerca de 0.02 €/hora a 35 ct/kWh). O consumo anual típico ronda os 570 kWh (199.50 €/ano)."
        },
        {
          "question": "Quanto custa utilizar um Servidor Doméstico / Home Server por mês?",
          "answer": "O custo médio de operação é de cerca de 0,55 € / 24 Stunden Dauerbetrieb, totalizando cerca de 16.63 € por mês na fatura de eletricidade."
        },
        {
          "question": "Como poupar energia e baixar a conta de luz com o Servidor Doméstico / Home Server?",
          "answer": "Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby."
        }
      ]
    }
  },
  "ko": {
    "kuehlschrank": {
      "name": "냉장고",
      "category": "주방 가전",
      "shortDescription": "냉장고의 연간 소비전력량은 약 120 kWh(연간 약 42.00유로)이며, 평균 소비전력은 90W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "냉장고의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "냉장고의 정격 소비전력은 약 90W입니다. 1시간 작동 시 약 0.090 kWh(약 0.01유로)를 소모하며, 연간 평균 소비전력량은 약 120 kWh(연간 약 42.00유로, 월 약 3.50유로)입니다."
        },
        {
          "question": "냉장고의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "냉장고을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "waschmaschine": {
      "name": "세탁기",
      "category": "생활/세탁 가전",
      "shortDescription": "세탁기의 연간 소비전력량은 약 140 kWh(연간 약 49.00유로)이며, 평균 소비전력은 2000W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "세탁기의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "세탁기의 정격 소비전력은 약 2000W입니다. 1시간 작동 시 약 2.000 kWh(약 0.70유로)를 소모하며, 연간 평균 소비전력량은 약 140 kWh(연간 약 49.00유로, 월 약 4.08유로)입니다."
        },
        {
          "question": "세탁기의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "세탁기을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "trockner": {
      "name": "의류건조기",
      "category": "생활/세탁 가전",
      "shortDescription": "의류건조기의 연간 소비전력량은 약 180 kWh(연간 약 63.00유로)이며, 평균 소비전력은 1500W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "의류건조기의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "의류건조기의 정격 소비전력은 약 1500W입니다. 1시간 작동 시 약 1.500 kWh(약 0.53유로)를 소모하며, 연간 평균 소비전력량은 약 180 kWh(연간 약 63.00유로, 월 약 5.25유로)입니다."
        },
        {
          "question": "의류건조기의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "의류건조기을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "geschirrspueler": {
      "name": "식기세척기",
      "category": "주방 가전",
      "shortDescription": "식기세척기의 연간 소비전력량은 약 160 kWh(연간 약 56.00유로)이며, 평균 소비전력은 1800W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "식기세척기의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "식기세척기의 정격 소비전력은 약 1800W입니다. 1시간 작동 시 약 1.800 kWh(약 0.63유로)를 소모하며, 연간 평균 소비전력량은 약 160 kWh(연간 약 56.00유로, 월 약 4.67유로)입니다."
        },
        {
          "question": "식기세척기의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "식기세척기을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "backofen": {
      "name": "전기오븐",
      "category": "주방 가전",
      "shortDescription": "전기오븐의 연간 소비전력량은 약 150 kWh(연간 약 52.50유로)이며, 평균 소비전력은 2500W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "전기오븐의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "전기오븐의 정격 소비전력은 약 2500W입니다. 1시간 작동 시 약 2.500 kWh(약 0.88유로)를 소모하며, 연간 평균 소비전력량은 약 150 kWh(연간 약 52.50유로, 월 약 4.38유로)입니다."
        },
        {
          "question": "전기오븐의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "전기오븐을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "herd": {
      "name": "인덕션 / 전기레인지",
      "category": "주방 가전",
      "shortDescription": "인덕션 / 전기레인지의 연간 소비전력량은 약 220 kWh(연간 약 77.00유로)이며, 평균 소비전력은 3000W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "인덕션 / 전기레인지의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "인덕션 / 전기레인지의 정격 소비전력은 약 3000W입니다. 1시간 작동 시 약 3.000 kWh(약 1.05유로)를 소모하며, 연간 평균 소비전력량은 약 220 kWh(연간 약 77.00유로, 월 약 6.42유로)입니다."
        },
        {
          "question": "인덕션 / 전기레인지의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "인덕션 / 전기레인지을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "wasserkocher": {
      "name": "전기포트 / 무선주전자",
      "category": "주방 가전",
      "shortDescription": "전기포트 / 무선주전자의 연간 소비전력량은 약 80 kWh(연간 약 28.00유로)이며, 평균 소비전력은 2200W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "전기포트 / 무선주전자의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "전기포트 / 무선주전자의 정격 소비전력은 약 2200W입니다. 1시간 작동 시 약 2.200 kWh(약 0.77유로)를 소모하며, 연간 평균 소비전력량은 약 80 kWh(연간 약 28.00유로, 월 약 2.33유로)입니다."
        },
        {
          "question": "전기포트 / 무선주전자의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "전기포트 / 무선주전자을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "커피머신 / 에스프레소 머신",
      "category": "주방 가전",
      "shortDescription": "커피머신 / 에스프레소 머신의 연간 소비전력량은 약 65 kWh(연간 약 22.75유로)이며, 평균 소비전력은 1400W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "커피머신 / 에스프레소 머신의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "커피머신 / 에스프레소 머신의 정격 소비전력은 약 1400W입니다. 1시간 작동 시 약 1.400 kWh(약 0.49유로)를 소모하며, 연간 평균 소비전력량은 약 65 kWh(연간 약 22.75유로, 월 약 1.90유로)입니다."
        },
        {
          "question": "커피머신 / 에스프레소 머신의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "커피머신 / 에스프레소 머신을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "fernseher": {
      "name": "스마트 TV (55-65인치)",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "스마트 TV (55-65인치)의 연간 소비전력량은 약 175 kWh(연간 약 61.25유로)이며, 평균 소비전력은 120W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "스마트 TV (55-65인치)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "스마트 TV (55-65인치)의 정격 소비전력은 약 120W입니다. 1시간 작동 시 약 0.120 kWh(약 0.04유로)를 소모하며, 연간 평균 소비전력량은 약 175 kWh(연간 약 61.25유로, 월 약 5.10유로)입니다."
        },
        {
          "question": "스마트 TV (55-65인치)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "스마트 TV (55-65인치)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "gaming-pc": {
      "name": "고성능 게이밍 PC",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "고성능 게이밍 PC의 연간 소비전력량은 약 450 kWh(연간 약 157.50유로)이며, 평균 소비전력은 400W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "고성능 게이밍 PC의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "고성능 게이밍 PC의 정격 소비전력은 약 400W입니다. 1시간 작동 시 약 0.400 kWh(약 0.14유로)를 소모하며, 연간 평균 소비전력량은 약 450 kWh(연간 약 157.50유로, 월 약 13.13유로)입니다."
        },
        {
          "question": "고성능 게이밍 PC의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "고성능 게이밍 PC을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "pc": {
      "name": "사무용 데스크톱 PC",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "사무용 데스크톱 PC의 연간 소비전력량은 약 180 kWh(연간 약 63.00유로)이며, 평균 소비전력은 120W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "사무용 데스크톱 PC의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "사무용 데스크톱 PC의 정격 소비전력은 약 120W입니다. 1시간 작동 시 약 0.120 kWh(약 0.04유로)를 소모하며, 연간 평균 소비전력량은 약 180 kWh(연간 약 63.00유로, 월 약 5.25유로)입니다."
        },
        {
          "question": "사무용 데스크톱 PC의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "사무용 데스크톱 PC을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "laptop": {
      "name": "노트북 / 랩톱",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "노트북 / 랩톱의 연간 소비전력량은 약 75 kWh(연간 약 26.25유로)이며, 평균 소비전력은 50W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "노트북 / 랩톱의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "노트북 / 랩톱의 정격 소비전력은 약 50W입니다. 1시간 작동 시 약 0.050 kWh(약 0.02유로)를 소모하며, 연간 평균 소비전력량은 약 75 kWh(연간 약 26.25유로, 월 약 2.19유로)입니다."
        },
        {
          "question": "노트북 / 랩톱의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "노트북 / 랩톱을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "monitor": {
      "name": "PC 모니터 (27-32인치)",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "PC 모니터 (27-32인치)의 연간 소비전력량은 약 60 kWh(연간 약 21.00유로)이며, 평균 소비전력은 35W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "PC 모니터 (27-32인치)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "PC 모니터 (27-32인치)의 정격 소비전력은 약 35W입니다. 1시간 작동 시 약 0.035 kWh(약 0.01유로)를 소모하며, 연간 평균 소비전력량은 약 60 kWh(연간 약 21.00유로, 월 약 1.75유로)입니다."
        },
        {
          "question": "PC 모니터 (27-32인치)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "PC 모니터 (27-32인치)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "ps5": {
      "name": "플레이스테이션 5 (PS5)",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "플레이스테이션 5 (PS5)의 연간 소비전력량은 약 150 kWh(연간 약 52.50유로)이며, 평균 소비전력은 200W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "플레이스테이션 5 (PS5)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "플레이스테이션 5 (PS5)의 정격 소비전력은 약 200W입니다. 1시간 작동 시 약 0.200 kWh(약 0.07유로)를 소모하며, 연간 평균 소비전력량은 약 150 kWh(연간 약 52.50유로, 월 약 4.38유로)입니다."
        },
        {
          "question": "플레이스테이션 5 (PS5)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "플레이스테이션 5 (PS5)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "xbox": {
      "name": "엑스박스 시리즈 X (Xbox Series X)",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "엑스박스 시리즈 X (Xbox Series X)의 연간 소비전력량은 약 140 kWh(연간 약 49.00유로)이며, 평균 소비전력은 190W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "엑스박스 시리즈 X (Xbox Series X)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "엑스박스 시리즈 X (Xbox Series X)의 정격 소비전력은 약 190W입니다. 1시간 작동 시 약 0.190 kWh(약 0.07유로)를 소모하며, 연간 평균 소비전력량은 약 140 kWh(연간 약 49.00유로, 월 약 4.08유로)입니다."
        },
        {
          "question": "엑스박스 시리즈 X (Xbox Series X)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "엑스박스 시리즈 X (Xbox Series X)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "klimaanlage": {
      "name": "에어컨 (스탠드/벽걸이)",
      "category": "냉난방/공조 가전",
      "shortDescription": "에어컨 (스탠드/벽걸이)의 연간 소비전력량은 약 350 kWh(연간 약 122.50유로)이며, 평균 소비전력은 800W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "에어컨 (스탠드/벽걸이)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "에어컨 (스탠드/벽걸이)의 정격 소비전력은 약 800W입니다. 1시간 작동 시 약 0.800 kWh(약 0.28유로)를 소모하며, 연간 평균 소비전력량은 약 350 kWh(연간 약 122.50유로, 월 약 10.21유로)입니다."
        },
        {
          "question": "에어컨 (스탠드/벽걸이)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "에어컨 (스탠드/벽걸이)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "ventilator": {
      "name": "선풍기 / 서큘레이터",
      "category": "냉난방/공조 가전",
      "shortDescription": "선풍기 / 서큘레이터의 연간 소비전력량은 약 35 kWh(연간 약 12.25유로)이며, 평균 소비전력은 45W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "선풍기 / 서큘레이터의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "선풍기 / 서큘레이터의 정격 소비전력은 약 45W입니다. 1시간 작동 시 약 0.045 kWh(약 0.02유로)를 소모하며, 연간 평균 소비전력량은 약 35 kWh(연간 약 12.25유로, 월 약 1.02유로)입니다."
        },
        {
          "question": "선풍기 / 서큘레이터의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "선풍기 / 서큘레이터을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "heizluefter": {
      "name": "온풍기 / 전기히터",
      "category": "냉난방/공조 가전",
      "shortDescription": "온풍기 / 전기히터의 연간 소비전력량은 약 300 kWh(연간 약 105.00유로)이며, 평균 소비전력은 2000W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "온풍기 / 전기히터의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "온풍기 / 전기히터의 정격 소비전력은 약 2000W입니다. 1시간 작동 시 약 2.000 kWh(약 0.70유로)를 소모하며, 연간 평균 소비전력량은 약 300 kWh(연간 약 105.00유로, 월 약 8.75유로)입니다."
        },
        {
          "question": "온풍기 / 전기히터의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "온풍기 / 전기히터을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "제습기",
      "category": "냉난방/공조 가전",
      "shortDescription": "제습기의 연간 소비전력량은 약 280 kWh(연간 약 98.00유로)이며, 평균 소비전력은 350W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "제습기의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "제습기의 정격 소비전력은 약 350W입니다. 1시간 작동 시 약 0.350 kWh(약 0.12유로)를 소모하며, 연간 평균 소비전력량은 약 280 kWh(연간 약 98.00유로, 월 약 8.17유로)입니다."
        },
        {
          "question": "제습기의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "제습기을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "aquarium": {
      "name": "어항 / 열대어 수조 (100~200L)",
      "category": "취미/기타 가전",
      "shortDescription": "어항 / 열대어 수조 (100~200L)의 연간 소비전력량은 약 350 kWh(연간 약 122.50유로)이며, 평균 소비전력은 60W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "어항 / 열대어 수조 (100~200L)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "어항 / 열대어 수조 (100~200L)의 정격 소비전력은 약 60W입니다. 1시간 작동 시 약 0.060 kWh(약 0.02유로)를 소모하며, 연간 평균 소비전력량은 약 350 kWh(연간 약 122.50유로, 월 약 10.21유로)입니다."
        },
        {
          "question": "어항 / 열대어 수조 (100~200L)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "어항 / 열대어 수조 (100~200L)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "pool": {
      "name": "수영장 순환 펌프 및 여과기",
      "category": "취미/기타 가전",
      "shortDescription": "수영장 순환 펌프 및 여과기의 연간 소비전력량은 약 480 kWh(연간 약 168.00유로)이며, 평균 소비전력은 500W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "수영장 순환 펌프 및 여과기의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "수영장 순환 펌프 및 여과기의 정격 소비전력은 약 500W입니다. 1시간 작동 시 약 0.500 kWh(약 0.17유로)를 소모하며, 연간 평균 소비전력량은 약 480 kWh(연간 약 168.00유로, 월 약 14.00유로)입니다."
        },
        {
          "question": "수영장 순환 펌프 및 여과기의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "수영장 순환 펌프 및 여과기을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "whirlpool": {
      "name": "야외 자쿠지 / 온수 스파",
      "category": "취미/기타 가전",
      "shortDescription": "야외 자쿠지 / 온수 스파의 연간 소비전력량은 약 2200 kWh(연간 약 770.00유로)이며, 평균 소비전력은 2500W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "야외 자쿠지 / 온수 스파의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "야외 자쿠지 / 온수 스파의 정격 소비전력은 약 2500W입니다. 1시간 작동 시 약 2.500 kWh(약 0.88유로)를 소모하며, 연간 평균 소비전력량은 약 2200 kWh(연간 약 770.00유로, 월 약 64.17유로)입니다."
        },
        {
          "question": "야외 자쿠지 / 온수 스파의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "야외 자쿠지 / 온수 스파을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "3d-drucker": {
      "name": "3D 프린터 (FDM 방식)",
      "category": "취미/기타 가전",
      "shortDescription": "3D 프린터 (FDM 방식)의 연간 소비전력량은 약 120 kWh(연간 약 42.00유로)이며, 평균 소비전력은 150W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "3D 프린터 (FDM 방식)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "3D 프린터 (FDM 방식)의 정격 소비전력은 약 150W입니다. 1시간 작동 시 약 0.150 kWh(약 0.05유로)를 소모하며, 연간 평균 소비전력량은 약 120 kWh(연간 약 42.00유로, 월 약 3.50유로)입니다."
        },
        {
          "question": "3D 프린터 (FDM 방식)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "3D 프린터 (FDM 방식)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "nas": {
      "name": "NAS 서버 (네트워크 스토리지)",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "NAS 서버 (네트워크 스토리지)의 연간 소비전력량은 약 260 kWh(연간 약 91.00유로)이며, 평균 소비전력은 30W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "NAS 서버 (네트워크 스토리지)의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "NAS 서버 (네트워크 스토리지)의 정격 소비전력은 약 30W입니다. 1시간 작동 시 약 0.030 kWh(약 0.01유로)를 소모하며, 연간 평균 소비전력량은 약 260 kWh(연간 약 91.00유로, 월 약 7.58유로)입니다."
        },
        {
          "question": "NAS 서버 (네트워크 스토리지)의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "NAS 서버 (네트워크 스토리지)을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    },
    "server": {
      "name": "홈 서버 / 홈랩",
      "category": "엔터테인먼트/사무 가전",
      "shortDescription": "홈 서버 / 홈랩의 연간 소비전력량은 약 570 kWh(연간 약 199.50유로)이며, 평균 소비전력은 65W입니다.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "홈 서버 / 홈랩의 소비전력과 시간당·연간 전기요금은 얼마인가요?",
          "answer": "홈 서버 / 홈랩의 정격 소비전력은 약 65W입니다. 1시간 작동 시 약 0.065 kWh(약 0.02유로)를 소모하며, 연간 평균 소비전력량은 약 570 kWh(연간 약 199.50유로, 월 약 16.63유로)입니다."
        },
        {
          "question": "홈 서버 / 홈랩의 전기요금을 효과적으로 줄이는 절약 팁은?",
          "answer": "에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요."
        },
        {
          "question": "홈 서버 / 홈랩을 최신 고효율 모델로 교체하면 얼마나 절약되나요?",
          "answer": "8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다."
        }
      ]
    }
  },
  "it": {
    "kuehlschrank": {
      "name": "Frigorifero",
      "category": "Cucina",
      "shortDescription": "Un Frigorifero consuma circa 120 kWh all'anno (circa 42.00 € a 35 ct/kWh). Potenza media: 90 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Frigorifero all'ora e all'anno in bolletta?",
          "answer": "Un Frigorifero assorbe una potenza media di circa 90 Watt, consumando 0.090 kWh all'ora (circa 0.01 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 120 kWh (42.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Frigorifero al mese?",
          "answer": "Il costo medio è di circa 0,12 € / Tag, pari a circa 3.50 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Frigorifero?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "waschmaschine": {
      "name": "Lavatrice",
      "category": "Casa & Pulizia",
      "shortDescription": "Un Lavatrice consuma circa 140 kWh all'anno (circa 49.00 € a 35 ct/kWh). Potenza media: 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Lavatrice all'ora e all'anno in bolletta?",
          "answer": "Un Lavatrice assorbe una potenza media di circa 2000 Watt, consumando 2.000 kWh all'ora (circa 0.70 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 140 kWh (49.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Lavatrice al mese?",
          "answer": "Il costo medio è di circa 0,25 € / Waschgang, pari a circa 4.08 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Lavatrice?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "trockner": {
      "name": "Asciugatrice",
      "category": "Casa & Pulizia",
      "shortDescription": "Un Asciugatrice consuma circa 180 kWh all'anno (circa 63.00 € a 35 ct/kWh). Potenza media: 1500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Asciugatrice all'ora e all'anno in bolletta?",
          "answer": "Un Asciugatrice assorbe una potenza media di circa 1500 Watt, consumando 1.500 kWh all'ora (circa 0.53 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 180 kWh (63.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Asciugatrice al mese?",
          "answer": "Il costo medio è di circa 0,45 € / Ladung, pari a circa 5.25 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Asciugatrice?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Lavastoviglie",
      "category": "Cucina",
      "shortDescription": "Un Lavastoviglie consuma circa 160 kWh all'anno (circa 56.00 € a 35 ct/kWh). Potenza media: 1800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Lavastoviglie all'ora e all'anno in bolletta?",
          "answer": "Un Lavastoviglie assorbe una potenza media di circa 1800 Watt, consumando 1.800 kWh all'ora (circa 0.63 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 160 kWh (56.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Lavastoviglie al mese?",
          "answer": "Il costo medio è di circa 0,28 € / Spülgang, pari a circa 4.67 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Lavastoviglie?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "backofen": {
      "name": "Forno Elettrico",
      "category": "Cucina",
      "shortDescription": "Un Forno Elettrico consuma circa 150 kWh all'anno (circa 52.50 € a 35 ct/kWh). Potenza media: 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Forno Elettrico all'ora e all'anno in bolletta?",
          "answer": "Un Forno Elettrico assorbe una potenza media di circa 2500 Watt, consumando 2.500 kWh all'ora (circa 0.88 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 150 kWh (52.50 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Forno Elettrico al mese?",
          "answer": "Il costo medio è di circa 0,55 € / Nutzung, pari a circa 4.38 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Forno Elettrico?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "herd": {
      "name": "Piano cottura a induzione",
      "category": "Cucina",
      "shortDescription": "Un Piano cottura a induzione consuma circa 220 kWh all'anno (circa 77.00 € a 35 ct/kWh). Potenza media: 3000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Piano cottura a induzione all'ora e all'anno in bolletta?",
          "answer": "Un Piano cottura a induzione assorbe una potenza media di circa 3000 Watt, consumando 3.000 kWh all'ora (circa 1.05 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 220 kWh (77.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Piano cottura a induzione al mese?",
          "answer": "Il costo medio è di circa 0,35 € / Kochvorgang, pari a circa 6.42 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Piano cottura a induzione?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "wasserkocher": {
      "name": "Bollitore Elettrico",
      "category": "Cucina",
      "shortDescription": "Un Bollitore Elettrico consuma circa 80 kWh all'anno (circa 28.00 € a 35 ct/kWh). Potenza media: 2200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Bollitore Elettrico all'ora e all'anno in bolletta?",
          "answer": "Un Bollitore Elettrico assorbe una potenza media di circa 2200 Watt, consumando 2.200 kWh all'ora (circa 0.77 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 80 kWh (28.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Bollitore Elettrico al mese?",
          "answer": "Il costo medio è di circa 0,03 € / 1 Liter Kochen, pari a circa 2.33 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Bollitore Elettrico?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Macchina da Caffè",
      "category": "Cucina",
      "shortDescription": "Un Macchina da Caffè consuma circa 65 kWh all'anno (circa 22.75 € a 35 ct/kWh). Potenza media: 1400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Macchina da Caffè all'ora e all'anno in bolletta?",
          "answer": "Un Macchina da Caffè assorbe una potenza media di circa 1400 Watt, consumando 1.400 kWh all'ora (circa 0.49 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 65 kWh (22.75 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Macchina da Caffè al mese?",
          "answer": "Il costo medio è di circa 0,02 € / Tasse Kaffee, pari a circa 1.90 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Macchina da Caffè?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "fernseher": {
      "name": "Smart TV (55-65 pollici)",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un Smart TV (55-65 pollici) consuma circa 175 kWh all'anno (circa 61.25 € a 35 ct/kWh). Potenza media: 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Smart TV (55-65 pollici) all'ora e all'anno in bolletta?",
          "answer": "Un Smart TV (55-65 pollici) assorbe una potenza media di circa 120 Watt, consumando 0.120 kWh all'ora (circa 0.04 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 175 kWh (61.25 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Smart TV (55-65 pollici) al mese?",
          "answer": "Il costo medio è di circa 0,17 € / 4 Stunden, pari a circa 5.10 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Smart TV (55-65 pollici)?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC da Gaming ad Alte Prestazioni",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un PC da Gaming ad Alte Prestazioni consuma circa 450 kWh all'anno (circa 157.50 € a 35 ct/kWh). Potenza media: 400 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un PC da Gaming ad Alte Prestazioni all'ora e all'anno in bolletta?",
          "answer": "Un PC da Gaming ad Alte Prestazioni assorbe una potenza media di circa 400 Watt, consumando 0.400 kWh all'ora (circa 0.14 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 450 kWh (157.50 € all'anno)."
        },
        {
          "question": "Quanto costa usare un PC da Gaming ad Alte Prestazioni al mese?",
          "answer": "Il costo medio è di circa 0,56 € / 4 Stunden Session, pari a circa 13.13 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio PC da Gaming ad Alte Prestazioni?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "pc": {
      "name": "PC Fisso / Computer da Ufficio",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un PC Fisso / Computer da Ufficio consuma circa 180 kWh all'anno (circa 63.00 € a 35 ct/kWh). Potenza media: 120 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un PC Fisso / Computer da Ufficio all'ora e all'anno in bolletta?",
          "answer": "Un PC Fisso / Computer da Ufficio assorbe una potenza media di circa 120 Watt, consumando 0.120 kWh all'ora (circa 0.04 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 180 kWh (63.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un PC Fisso / Computer da Ufficio al mese?",
          "answer": "Il costo medio è di circa 0,25 € / 6 Stunden Arbeit, pari a circa 5.25 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio PC Fisso / Computer da Ufficio?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "laptop": {
      "name": "Portatile / Laptop",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un Portatile / Laptop consuma circa 75 kWh all'anno (circa 26.25 € a 35 ct/kWh). Potenza media: 50 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Portatile / Laptop all'ora e all'anno in bolletta?",
          "answer": "Un Portatile / Laptop assorbe una potenza media di circa 50 Watt, consumando 0.050 kWh all'ora (circa 0.02 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 75 kWh (26.25 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Portatile / Laptop al mese?",
          "answer": "Il costo medio è di circa 0,11 € / 6 Stunden Arbeit, pari a circa 2.19 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Portatile / Laptop?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "monitor": {
      "name": "Monitor PC (27-32 pollici)",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un Monitor PC (27-32 pollici) consuma circa 60 kWh all'anno (circa 21.00 € a 35 ct/kWh). Potenza media: 35 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Monitor PC (27-32 pollici) all'ora e all'anno in bolletta?",
          "answer": "Un Monitor PC (27-32 pollici) assorbe una potenza media di circa 35 Watt, consumando 0.035 kWh all'ora (circa 0.01 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 60 kWh (21.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Monitor PC (27-32 pollici) al mese?",
          "answer": "Il costo medio è di circa 0,07 € / 6 Stunden Betrieb, pari a circa 1.75 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Monitor PC (27-32 pollici)?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un PlayStation 5 (PS5) consuma circa 150 kWh all'anno (circa 52.50 € a 35 ct/kWh). Potenza media: 200 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un PlayStation 5 (PS5) all'ora e all'anno in bolletta?",
          "answer": "Un PlayStation 5 (PS5) assorbe una potenza media di circa 200 Watt, consumando 0.200 kWh all'ora (circa 0.07 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 150 kWh (52.50 € all'anno)."
        },
        {
          "question": "Quanto costa usare un PlayStation 5 (PS5) al mese?",
          "answer": "Il costo medio è di circa 0,21 € / 3 Stunden Spielen, pari a circa 4.38 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio PlayStation 5 (PS5)?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un Xbox Series X consuma circa 140 kWh all'anno (circa 49.00 € a 35 ct/kWh). Potenza media: 190 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Xbox Series X all'ora e all'anno in bolletta?",
          "answer": "Un Xbox Series X assorbe una potenza media di circa 190 Watt, consumando 0.190 kWh all'ora (circa 0.07 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 140 kWh (49.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Xbox Series X al mese?",
          "answer": "Il costo medio è di circa 0,20 € / 3 Stunden Spielen, pari a circa 4.08 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Xbox Series X?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "klimaanlage": {
      "name": "Condizionatore / Climatizzatore",
      "category": "Climatizzazione & Riscaldamento",
      "shortDescription": "Un Condizionatore / Climatizzatore consuma circa 350 kWh all'anno (circa 122.50 € a 35 ct/kWh). Potenza media: 800 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Condizionatore / Climatizzatore all'ora e all'anno in bolletta?",
          "answer": "Un Condizionatore / Climatizzatore assorbe una potenza media di circa 800 Watt, consumando 0.800 kWh all'ora (circa 0.28 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 350 kWh (122.50 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Condizionatore / Climatizzatore al mese?",
          "answer": "Il costo medio è di circa 1,40 € / 5 Stunden Kühlung, pari a circa 10.21 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Condizionatore / Climatizzatore?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilatore a Piantana",
      "category": "Climatizzazione & Riscaldamento",
      "shortDescription": "Un Ventilatore a Piantana consuma circa 35 kWh all'anno (circa 12.25 € a 35 ct/kWh). Potenza media: 45 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Ventilatore a Piantana all'ora e all'anno in bolletta?",
          "answer": "Un Ventilatore a Piantana assorbe una potenza media di circa 45 Watt, consumando 0.045 kWh all'ora (circa 0.02 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 35 kWh (12.25 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Ventilatore a Piantana al mese?",
          "answer": "Il costo medio è di circa 0,10 € / 6 Stunden, pari a circa 1.02 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Ventilatore a Piantana?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "heizluefter": {
      "name": "Termoventilatore / Stufetta Elettrica",
      "category": "Climatizzazione & Riscaldamento",
      "shortDescription": "Un Termoventilatore / Stufetta Elettrica consuma circa 300 kWh all'anno (circa 105.00 € a 35 ct/kWh). Potenza media: 2000 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Termoventilatore / Stufetta Elettrica all'ora e all'anno in bolletta?",
          "answer": "Un Termoventilatore / Stufetta Elettrica assorbe una potenza media di circa 2000 Watt, consumando 2.000 kWh all'ora (circa 0.70 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 300 kWh (105.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Termoventilatore / Stufetta Elettrica al mese?",
          "answer": "Il costo medio è di circa 1,40 € / 2 Stunden Heizen, pari a circa 8.75 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Termoventilatore / Stufetta Elettrica?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Deumidificatore Elettrico",
      "category": "Climatizzazione & Riscaldamento",
      "shortDescription": "Un Deumidificatore Elettrico consuma circa 280 kWh all'anno (circa 98.00 € a 35 ct/kWh). Potenza media: 350 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Deumidificatore Elettrico all'ora e all'anno in bolletta?",
          "answer": "Un Deumidificatore Elettrico assorbe una potenza media di circa 350 Watt, consumando 0.350 kWh all'ora (circa 0.12 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 280 kWh (98.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Deumidificatore Elettrico al mese?",
          "answer": "Il costo medio è di circa 0,74 € / 6 Stunden, pari a circa 8.17 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Deumidificatore Elettrico?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "aquarium": {
      "name": "Acquario (100–200 Litri)",
      "category": "Hobby & Speciale",
      "shortDescription": "Un Acquario (100–200 Litri) consuma circa 350 kWh all'anno (circa 122.50 € a 35 ct/kWh). Potenza media: 60 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Acquario (100–200 Litri) all'ora e all'anno in bolletta?",
          "answer": "Un Acquario (100–200 Litri) assorbe una potenza media di circa 60 Watt, consumando 0.060 kWh all'ora (circa 0.02 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 350 kWh (122.50 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Acquario (100–200 Litri) al mese?",
          "answer": "Il costo medio è di circa 0,34 € / 24 Stunden Dauerbetrieb, pari a circa 10.21 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Acquario (100–200 Litri)?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "pool": {
      "name": "Pompa per Piscina & Filtro",
      "category": "Hobby & Speciale",
      "shortDescription": "Un Pompa per Piscina & Filtro consuma circa 480 kWh all'anno (circa 168.00 € a 35 ct/kWh). Potenza media: 500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Pompa per Piscina & Filtro all'ora e all'anno in bolletta?",
          "answer": "Un Pompa per Piscina & Filtro assorbe una potenza media di circa 500 Watt, consumando 0.500 kWh all'ora (circa 0.17 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 480 kWh (168.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Pompa per Piscina & Filtro al mese?",
          "answer": "Il costo medio è di circa 1,05 € / 6 Stunden Filterung, pari a circa 14.00 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Pompa per Piscina & Filtro?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "whirlpool": {
      "name": "Idromassaggio / Jacuzzi da Esterno",
      "category": "Hobby & Speciale",
      "shortDescription": "Un Idromassaggio / Jacuzzi da Esterno consuma circa 2200 kWh all'anno (circa 770.00 € a 35 ct/kWh). Potenza media: 2500 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Idromassaggio / Jacuzzi da Esterno all'ora e all'anno in bolletta?",
          "answer": "Un Idromassaggio / Jacuzzi da Esterno assorbe una potenza media di circa 2500 Watt, consumando 2.500 kWh all'ora (circa 0.88 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 2200 kWh (770.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Idromassaggio / Jacuzzi da Esterno al mese?",
          "answer": "Il costo medio è di circa 2,10 € / Tag (Heizung & Zirkulation), pari a circa 64.17 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Idromassaggio / Jacuzzi da Esterno?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "3d-drucker": {
      "name": "Stampante 3D (FDM)",
      "category": "Hobby & Speciale",
      "shortDescription": "Un Stampante 3D (FDM) consuma circa 120 kWh all'anno (circa 42.00 € a 35 ct/kWh). Potenza media: 150 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Stampante 3D (FDM) all'ora e all'anno in bolletta?",
          "answer": "Un Stampante 3D (FDM) assorbe una potenza media di circa 150 Watt, consumando 0.150 kWh all'ora (circa 0.05 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 120 kWh (42.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Stampante 3D (FDM) al mese?",
          "answer": "Il costo medio è di circa 0,42 € / 8 Stunden Druck, pari a circa 3.50 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Stampante 3D (FDM)?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "nas": {
      "name": "Server NAS / Storage di Rete",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un Server NAS / Storage di Rete consuma circa 260 kWh all'anno (circa 91.00 € a 35 ct/kWh). Potenza media: 30 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Server NAS / Storage di Rete all'ora e all'anno in bolletta?",
          "answer": "Un Server NAS / Storage di Rete assorbe una potenza media di circa 30 Watt, consumando 0.030 kWh all'ora (circa 0.01 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 260 kWh (91.00 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Server NAS / Storage di Rete al mese?",
          "answer": "Il costo medio è di circa 0,25 € / 24 Stunden Dauerbetrieb, pari a circa 7.58 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Server NAS / Storage di Rete?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    },
    "server": {
      "name": "Home Server Domestico",
      "category": "Intrattenimento & Ufficio",
      "shortDescription": "Un Home Server Domestico consuma circa 570 kWh all'anno (circa 199.50 € a 35 ct/kWh). Potenza media: 65 W.",
      "dutyCycleExplanation": "The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.",
      "savingAdvice": [
        "Use eco modes and power-saving settings whenever possible.",
        "Regularly clean and maintain filters, seals, and vents.",
        "Eliminate standby drain by using a switchable power strip."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Home Server Domestico all'ora e all'anno in bolletta?",
          "answer": "Un Home Server Domestico assorbe una potenza media di circa 65 Watt, consumando 0.065 kWh all'ora (circa 0.02 €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa 570 kWh (199.50 € all'anno)."
        },
        {
          "question": "Quanto costa usare un Home Server Domestico al mese?",
          "answer": "Il costo medio è di circa 0,55 € / 24 Stunden Dauerbetrieb, pari a circa 16.63 € al mese in bolletta."
        },
        {
          "question": "Come risparmiare corrente con il proprio Home Server Domestico?",
          "answer": "Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby."
        }
      ]
    }
  }
};

export function getLocalizedAppliance(slug: string, lang: SupportedLanguage = 'de'): LocalizedAppliance | null {
  const langData = applianceTranslations[lang];
  if (langData && langData[slug]) {
    return langData[slug];
  }
  return applianceTranslations['de']?.[slug] || null;
}
