import type { SupportedLanguage } from './languages';

export interface LocalizedTopic {
  title: string;
  category: string;
  shortDescription: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const topicTranslations: Record<SupportedLanguage, Record<string, LocalizedTopic>> = {
  "de": {
    "stromverbrauch-1-person": {
      "title": "Stromverbrauch 1-Personen-Haushalt",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch 1-Personen-Haushalt. Ermittle Richtwerte (ca. 1400 kWh/Jahr, ca. 53.33 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch 1-Personen-Haushalt?",
          "answer": "Für Stromverbrauch 1-Personen-Haushalt liegt der durchschnittliche Richtwert bei ca. 1400 kWh pro Jahr, was monatlichen Gesamtkosten von rund 53.33 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch 1-Personen-Haushalt?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 1400 kWh und 35 ct/kWh ergibt dies ca. 53.33 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch 1-Personen-Haushalt am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch 1-Personen-Haushalt durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 3,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch 1-Personen-Haushalt deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch 1-Personen-Haushalt sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch 1-Personen-Haushalt?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch 1-Personen-Haushalt?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch 1-Personen-Haushalt?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch 1-Personen-Haushalt?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "Stromverbrauch 2-Personen-Haushalt",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch 2-Personen-Haushalt. Ermittle Richtwerte (ca. 2500 kWh/Jahr, ca. 85.42 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch 2-Personen-Haushalt?",
          "answer": "Für Stromverbrauch 2-Personen-Haushalt liegt der durchschnittliche Richtwert bei ca. 2500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 85.42 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch 2-Personen-Haushalt?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 2500 kWh und 35 ct/kWh ergibt dies ca. 85.42 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch 2-Personen-Haushalt am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch 2-Personen-Haushalt durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 6,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch 2-Personen-Haushalt deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch 2-Personen-Haushalt sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch 2-Personen-Haushalt?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch 2-Personen-Haushalt?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch 2-Personen-Haushalt?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch 2-Personen-Haushalt?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "Stromverbrauch 3-Personen-Haushalt",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch 3-Personen-Haushalt. Ermittle Richtwerte (ca. 3200 kWh/Jahr, ca. 105.83 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch 3-Personen-Haushalt?",
          "answer": "Für Stromverbrauch 3-Personen-Haushalt liegt der durchschnittliche Richtwert bei ca. 3200 kWh pro Jahr, was monatlichen Gesamtkosten von rund 105.83 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch 3-Personen-Haushalt?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3200 kWh und 35 ct/kWh ergibt dies ca. 105.83 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch 3-Personen-Haushalt am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch 3-Personen-Haushalt durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch 3-Personen-Haushalt deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch 3-Personen-Haushalt sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch 3-Personen-Haushalt?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch 3-Personen-Haushalt?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch 3-Personen-Haushalt?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch 3-Personen-Haushalt?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "Stromverbrauch 4-Personen-Haushalt",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch 4-Personen-Haushalt. Ermittle Richtwerte (ca. 3700 kWh/Jahr, ca. 120.42 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch 4-Personen-Haushalt?",
          "answer": "Für Stromverbrauch 4-Personen-Haushalt liegt der durchschnittliche Richtwert bei ca. 3700 kWh pro Jahr, was monatlichen Gesamtkosten von rund 120.42 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch 4-Personen-Haushalt?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3700 kWh und 35 ct/kWh ergibt dies ca. 120.42 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch 4-Personen-Haushalt am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch 4-Personen-Haushalt durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 10,1 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch 4-Personen-Haushalt deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch 4-Personen-Haushalt sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch 4-Personen-Haushalt?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch 4-Personen-Haushalt?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch 4-Personen-Haushalt?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch 4-Personen-Haushalt?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "Stromverbrauch 5-Personen-Haushalt",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch 5-Personen-Haushalt. Ermittle Richtwerte (ca. 4600 kWh/Jahr, ca. 146.67 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch 5-Personen-Haushalt?",
          "answer": "Für Stromverbrauch 5-Personen-Haushalt liegt der durchschnittliche Richtwert bei ca. 4600 kWh pro Jahr, was monatlichen Gesamtkosten von rund 146.67 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch 5-Personen-Haushalt?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4600 kWh und 35 ct/kWh ergibt dies ca. 146.67 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch 5-Personen-Haushalt am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch 5-Personen-Haushalt durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 12,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch 5-Personen-Haushalt deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch 5-Personen-Haushalt sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch 5-Personen-Haushalt?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch 5-Personen-Haushalt?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch 5-Personen-Haushalt?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch 5-Personen-Haushalt?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "Stromverbrauch pro Person (Pro-Kopf)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch pro Person (Pro-Kopf). Ermittle Richtwerte (ca. 1400 kWh/Jahr, ca. 53.33 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch pro Person (Pro-Kopf)?",
          "answer": "Für Stromverbrauch pro Person (Pro-Kopf) liegt der durchschnittliche Richtwert bei ca. 1400 kWh pro Jahr, was monatlichen Gesamtkosten von rund 53.33 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch pro Person (Pro-Kopf)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 1400 kWh und 35 ct/kWh ergibt dies ca. 53.33 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch pro Person (Pro-Kopf) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch pro Person (Pro-Kopf) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 3,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch pro Person (Pro-Kopf) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch pro Person (Pro-Kopf) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch pro Person (Pro-Kopf)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch pro Person (Pro-Kopf)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch pro Person (Pro-Kopf)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch pro Person (Pro-Kopf)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "Stromverbrauch Mietwohnung",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch Mietwohnung. Ermittle Richtwerte (ca. 2200 kWh/Jahr, ca. 76.67 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch Mietwohnung?",
          "answer": "Für Stromverbrauch Mietwohnung liegt der durchschnittliche Richtwert bei ca. 2200 kWh pro Jahr, was monatlichen Gesamtkosten von rund 76.67 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch Mietwohnung?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 2200 kWh und 35 ct/kWh ergibt dies ca. 76.67 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch Mietwohnung am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch Mietwohnung durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 6,0 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch Mietwohnung deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch Mietwohnung sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch Mietwohnung?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch Mietwohnung?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch Mietwohnung?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch Mietwohnung?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "Stromverbrauch Einfamilienhaus",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromverbrauch Einfamilienhaus. Ermittle Richtwerte (ca. 4000 kWh/Jahr, ca. 129.17 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromverbrauch Einfamilienhaus?",
          "answer": "Für Stromverbrauch Einfamilienhaus liegt der durchschnittliche Richtwert bei ca. 4000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 129.17 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromverbrauch Einfamilienhaus?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4000 kWh und 35 ct/kWh ergibt dies ca. 129.17 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromverbrauch Einfamilienhaus am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromverbrauch Einfamilienhaus durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 11,0 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromverbrauch Einfamilienhaus deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromverbrauch Einfamilienhaus sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromverbrauch Einfamilienhaus?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromverbrauch Einfamilienhaus?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromverbrauch Einfamilienhaus?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromverbrauch Einfamilienhaus?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "Durchschnittlicher Stromverbrauch Deutschland",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Durchschnittlicher Stromverbrauch Deutschland. Ermittle Richtwerte (ca. 3000 kWh/Jahr, ca. 100 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Durchschnittlicher Stromverbrauch Deutschland?",
          "answer": "Für Durchschnittlicher Stromverbrauch Deutschland liegt der durchschnittliche Richtwert bei ca. 3000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 100 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Durchschnittlicher Stromverbrauch Deutschland?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3000 kWh und 35 ct/kWh ergibt dies ca. 100 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Durchschnittlicher Stromverbrauch Deutschland am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Durchschnittlicher Stromverbrauch Deutschland durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Durchschnittlicher Stromverbrauch Deutschland deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Durchschnittlicher Stromverbrauch Deutschland sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Durchschnittlicher Stromverbrauch Deutschland?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Durchschnittlicher Stromverbrauch Deutschland?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Durchschnittlicher Stromverbrauch Deutschland?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Durchschnittlicher Stromverbrauch Deutschland?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "Strompreis aktuell 2026",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Strompreis aktuell 2026. Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Strompreis aktuell 2026?",
          "answer": "Für Strompreis aktuell 2026 liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Strompreis aktuell 2026?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Strompreis aktuell 2026 am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Strompreis aktuell 2026 durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Strompreis aktuell 2026 deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Strompreis aktuell 2026 sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Strompreis aktuell 2026?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Strompreis aktuell 2026?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Strompreis aktuell 2026?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Strompreis aktuell 2026?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "Strompreise in Deutschland",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Strompreise in Deutschland. Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Strompreise in Deutschland?",
          "answer": "Für Strompreise in Deutschland liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Strompreise in Deutschland?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Strompreise in Deutschland am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Strompreise in Deutschland durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Strompreise in Deutschland deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Strompreise in Deutschland sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Strompreise in Deutschland?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Strompreise in Deutschland?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Strompreise in Deutschland?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Strompreise in Deutschland?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "Strompreis pro kWh (Arbeitspreis)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Strompreis pro kWh (Arbeitspreis). Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Strompreis pro kWh (Arbeitspreis)?",
          "answer": "Für Strompreis pro kWh (Arbeitspreis) liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Strompreis pro kWh (Arbeitspreis)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Strompreis pro kWh (Arbeitspreis) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Strompreis pro kWh (Arbeitspreis) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Strompreis pro kWh (Arbeitspreis) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Strompreis pro kWh (Arbeitspreis) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Strompreis pro kWh (Arbeitspreis)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Strompreis pro kWh (Arbeitspreis)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Strompreis pro kWh (Arbeitspreis)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Strompreis pro kWh (Arbeitspreis)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "Strompreisentwicklung (Prognose & Historie)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Strompreisentwicklung (Prognose & Historie). Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Strompreisentwicklung (Prognose & Historie)?",
          "answer": "Für Strompreisentwicklung (Prognose & Historie) liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Strompreisentwicklung (Prognose & Historie)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Strompreisentwicklung (Prognose & Historie) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Strompreisentwicklung (Prognose & Historie) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Strompreisentwicklung (Prognose & Historie) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Strompreisentwicklung (Prognose & Historie) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Strompreisentwicklung (Prognose & Historie)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Strompreisentwicklung (Prognose & Historie)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Strompreisentwicklung (Prognose & Historie)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Strompreisentwicklung (Prognose & Historie)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "Strompreis-Zusammensetzung",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Strompreis-Zusammensetzung. Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Strompreis-Zusammensetzung?",
          "answer": "Für Strompreis-Zusammensetzung liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Strompreis-Zusammensetzung?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Strompreis-Zusammensetzung am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Strompreis-Zusammensetzung durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Strompreis-Zusammensetzung deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Strompreis-Zusammensetzung sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Strompreis-Zusammensetzung?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Strompreis-Zusammensetzung?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Strompreis-Zusammensetzung?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Strompreis-Zusammensetzung?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "Dynamische Stromtarife (Börsenstrompreise)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Dynamische Stromtarife (Börsenstrompreise). Ermittle Richtwerte (ca. 4000 kWh/Jahr, ca. 129.17 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Dynamische Stromtarife (Börsenstrompreise)?",
          "answer": "Für Dynamische Stromtarife (Börsenstrompreise) liegt der durchschnittliche Richtwert bei ca. 4000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 129.17 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Dynamische Stromtarife (Börsenstrompreise)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4000 kWh und 35 ct/kWh ergibt dies ca. 129.17 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Dynamische Stromtarife (Börsenstrompreise) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Dynamische Stromtarife (Börsenstrompreise) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 11,0 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Dynamische Stromtarife (Börsenstrompreise) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Dynamische Stromtarife (Börsenstrompreise) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Dynamische Stromtarife (Börsenstrompreise)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Dynamische Stromtarife (Börsenstrompreise)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Dynamische Stromtarife (Börsenstrompreise)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Dynamische Stromtarife (Börsenstrompreise)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "Stromanbieter wechseln & sparen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromanbieter wechseln & sparen. Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromanbieter wechseln & sparen?",
          "answer": "Für Stromanbieter wechseln & sparen liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromanbieter wechseln & sparen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromanbieter wechseln & sparen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromanbieter wechseln & sparen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromanbieter wechseln & sparen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromanbieter wechseln & sparen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromanbieter wechseln & sparen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromanbieter wechseln & sparen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromanbieter wechseln & sparen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromanbieter wechseln & sparen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "Stromrechnung prüfen (Rechnungscheck)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromrechnung prüfen (Rechnungscheck). Ermittle Richtwerte (ca. 3000 kWh/Jahr, ca. 100 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromrechnung prüfen (Rechnungscheck)?",
          "answer": "Für Stromrechnung prüfen (Rechnungscheck) liegt der durchschnittliche Richtwert bei ca. 3000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 100 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromrechnung prüfen (Rechnungscheck)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3000 kWh und 35 ct/kWh ergibt dies ca. 100 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromrechnung prüfen (Rechnungscheck) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromrechnung prüfen (Rechnungscheck) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromrechnung prüfen (Rechnungscheck) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromrechnung prüfen (Rechnungscheck) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromrechnung prüfen (Rechnungscheck)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromrechnung prüfen (Rechnungscheck)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromrechnung prüfen (Rechnungscheck)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromrechnung prüfen (Rechnungscheck)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "Stromrechnung zu hoch? Ursachen & Lösungen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromrechnung zu hoch? Ursachen & Lösungen. Ermittle Richtwerte (ca. 4500 kWh/Jahr, ca. 143.75 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromrechnung zu hoch? Ursachen & Lösungen?",
          "answer": "Für Stromrechnung zu hoch? Ursachen & Lösungen liegt der durchschnittliche Richtwert bei ca. 4500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 143.75 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromrechnung zu hoch? Ursachen & Lösungen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4500 kWh und 35 ct/kWh ergibt dies ca. 143.75 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromrechnung zu hoch? Ursachen & Lösungen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromrechnung zu hoch? Ursachen & Lösungen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 12,3 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromrechnung zu hoch? Ursachen & Lösungen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromrechnung zu hoch? Ursachen & Lösungen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromrechnung zu hoch? Ursachen & Lösungen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromrechnung zu hoch? Ursachen & Lösungen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromrechnung zu hoch? Ursachen & Lösungen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromrechnung zu hoch? Ursachen & Lösungen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "Stromrechnung senken (Sofort-Tipps)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromrechnung senken (Sofort-Tipps). Ermittle Richtwerte (ca. 3000 kWh/Jahr, ca. 100 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromrechnung senken (Sofort-Tipps)?",
          "answer": "Für Stromrechnung senken (Sofort-Tipps) liegt der durchschnittliche Richtwert bei ca. 3000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 100 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromrechnung senken (Sofort-Tipps)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3000 kWh und 35 ct/kWh ergibt dies ca. 100 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromrechnung senken (Sofort-Tipps) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromrechnung senken (Sofort-Tipps) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromrechnung senken (Sofort-Tipps) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromrechnung senken (Sofort-Tipps) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromrechnung senken (Sofort-Tipps)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromrechnung senken (Sofort-Tipps)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromrechnung senken (Sofort-Tipps)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromrechnung senken (Sofort-Tipps)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "Stromrechnung selbst berechnen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromrechnung selbst berechnen. Ermittle Richtwerte (ca. 3000 kWh/Jahr, ca. 100 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromrechnung selbst berechnen?",
          "answer": "Für Stromrechnung selbst berechnen liegt der durchschnittliche Richtwert bei ca. 3000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 100 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromrechnung selbst berechnen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3000 kWh und 35 ct/kWh ergibt dies ca. 100 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromrechnung selbst berechnen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromrechnung selbst berechnen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromrechnung selbst berechnen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromrechnung selbst berechnen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromrechnung selbst berechnen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromrechnung selbst berechnen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromrechnung selbst berechnen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromrechnung selbst berechnen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "Muster-Stromrechnung & Erklärung",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Muster-Stromrechnung & Erklärung. Ermittle Richtwerte (ca. 3000 kWh/Jahr, ca. 100 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Muster-Stromrechnung & Erklärung?",
          "answer": "Für Muster-Stromrechnung & Erklärung liegt der durchschnittliche Richtwert bei ca. 3000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 100 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Muster-Stromrechnung & Erklärung?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3000 kWh und 35 ct/kWh ergibt dies ca. 100 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Muster-Stromrechnung & Erklärung am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Muster-Stromrechnung & Erklärung durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Muster-Stromrechnung & Erklärung deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Muster-Stromrechnung & Erklärung sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Muster-Stromrechnung & Erklärung?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Muster-Stromrechnung & Erklärung?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Muster-Stromrechnung & Erklärung?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Muster-Stromrechnung & Erklärung?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "Die 20 besten Stromspartipps für 2026",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Die 20 besten Stromspartipps für 2026. Ermittle Richtwerte (ca. 3000 kWh/Jahr, ca. 100 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Die 20 besten Stromspartipps für 2026?",
          "answer": "Für Die 20 besten Stromspartipps für 2026 liegt der durchschnittliche Richtwert bei ca. 3000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 100 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Die 20 besten Stromspartipps für 2026?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3000 kWh und 35 ct/kWh ergibt dies ca. 100 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Die 20 besten Stromspartipps für 2026 am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Die 20 besten Stromspartipps für 2026 durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 8,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Die 20 besten Stromspartipps für 2026 deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Die 20 besten Stromspartipps für 2026 sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Die 20 besten Stromspartipps für 2026?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Die 20 besten Stromspartipps für 2026?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Die 20 besten Stromspartipps für 2026?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Die 20 besten Stromspartipps für 2026?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "stromfresser": {
      "title": "Stromfresser im Haushalt entlarven",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Stromfresser im Haushalt entlarven. Ermittle Richtwerte (ca. 4000 kWh/Jahr, ca. 129.17 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Stromfresser im Haushalt entlarven?",
          "answer": "Für Stromfresser im Haushalt entlarven liegt der durchschnittliche Richtwert bei ca. 4000 kWh pro Jahr, was monatlichen Gesamtkosten von rund 129.17 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Stromfresser im Haushalt entlarven?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4000 kWh und 35 ct/kWh ergibt dies ca. 129.17 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Stromfresser im Haushalt entlarven am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Stromfresser im Haushalt entlarven durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 11,0 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Stromfresser im Haushalt entlarven deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Stromfresser im Haushalt entlarven sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Stromfresser im Haushalt entlarven?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Stromfresser im Haushalt entlarven?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Stromfresser im Haushalt entlarven?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Stromfresser im Haushalt entlarven?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "standby-strom": {
      "title": "Standby-Stromverbrauch berechnen & senken",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Standby-Stromverbrauch berechnen & senken. Ermittle Richtwerte (ca. 300 kWh/Jahr, ca. 8.75 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Standby-Stromverbrauch berechnen & senken?",
          "answer": "Für Standby-Stromverbrauch berechnen & senken liegt der durchschnittliche Richtwert bei ca. 300 kWh pro Jahr, was monatlichen Gesamtkosten von rund 8.75 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Standby-Stromverbrauch berechnen & senken?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 300 kWh und 35 ct/kWh ergibt dies ca. 8.75 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Standby-Stromverbrauch berechnen & senken am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Standby-Stromverbrauch berechnen & senken durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 0,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Standby-Stromverbrauch berechnen & senken deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Standby-Stromverbrauch berechnen & senken sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Standby-Stromverbrauch berechnen & senken?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Standby-Stromverbrauch berechnen & senken?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Standby-Stromverbrauch berechnen & senken?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Standby-Stromverbrauch berechnen & senken?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "E-Auto Stromkosten berechnen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für E-Auto Stromkosten berechnen. Ermittle Richtwerte (ca. 2500 kWh/Jahr, ca. 72.92 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für E-Auto Stromkosten berechnen?",
          "answer": "Für E-Auto Stromkosten berechnen liegt der durchschnittliche Richtwert bei ca. 2500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 72.92 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für E-Auto Stromkosten berechnen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 2500 kWh und 35 ct/kWh ergibt dies ca. 72.92 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei E-Auto Stromkosten berechnen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei E-Auto Stromkosten berechnen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 6,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei E-Auto Stromkosten berechnen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei E-Auto Stromkosten berechnen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei E-Auto Stromkosten berechnen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei E-Auto Stromkosten berechnen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für E-Auto Stromkosten berechnen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei E-Auto Stromkosten berechnen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "E-Auto Ladekosten-Rechner",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für E-Auto Ladekosten-Rechner. Ermittle Richtwerte (ca. 2500 kWh/Jahr, ca. 72.92 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für E-Auto Ladekosten-Rechner?",
          "answer": "Für E-Auto Ladekosten-Rechner liegt der durchschnittliche Richtwert bei ca. 2500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 72.92 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für E-Auto Ladekosten-Rechner?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 2500 kWh und 35 ct/kWh ergibt dies ca. 72.92 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei E-Auto Ladekosten-Rechner am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei E-Auto Ladekosten-Rechner durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 6,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei E-Auto Ladekosten-Rechner deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei E-Auto Ladekosten-Rechner sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei E-Auto Ladekosten-Rechner?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei E-Auto Ladekosten-Rechner?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für E-Auto Ladekosten-Rechner?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei E-Auto Ladekosten-Rechner?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "E-Auto Stromkosten pro 100 km",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für E-Auto Stromkosten pro 100 km. Ermittle Richtwerte (ca. 2500 kWh/Jahr, ca. 72.92 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für E-Auto Stromkosten pro 100 km?",
          "answer": "Für E-Auto Stromkosten pro 100 km liegt der durchschnittliche Richtwert bei ca. 2500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 72.92 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für E-Auto Stromkosten pro 100 km?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 2500 kWh und 35 ct/kWh ergibt dies ca. 72.92 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei E-Auto Stromkosten pro 100 km am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei E-Auto Stromkosten pro 100 km durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 6,8 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei E-Auto Stromkosten pro 100 km deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei E-Auto Stromkosten pro 100 km sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei E-Auto Stromkosten pro 100 km?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei E-Auto Stromkosten pro 100 km?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für E-Auto Stromkosten pro 100 km?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei E-Auto Stromkosten pro 100 km?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "Wärmepumpe Stromverbrauch berechnen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Wärmepumpe Stromverbrauch berechnen. Ermittle Richtwerte (ca. 4500 kWh/Jahr, ca. 131.25 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Wärmepumpe Stromverbrauch berechnen?",
          "answer": "Für Wärmepumpe Stromverbrauch berechnen liegt der durchschnittliche Richtwert bei ca. 4500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 131.25 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Wärmepumpe Stromverbrauch berechnen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4500 kWh und 35 ct/kWh ergibt dies ca. 131.25 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Wärmepumpe Stromverbrauch berechnen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Wärmepumpe Stromverbrauch berechnen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 12,3 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Wärmepumpe Stromverbrauch berechnen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Wärmepumpe Stromverbrauch berechnen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Wärmepumpe Stromverbrauch berechnen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Wärmepumpe Stromverbrauch berechnen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Wärmepumpe Stromverbrauch berechnen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Wärmepumpe Stromverbrauch berechnen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "Wärmepumpe Stromkosten berechnen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Wärmepumpe Stromkosten berechnen. Ermittle Richtwerte (ca. 4500 kWh/Jahr, ca. 131.25 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Wärmepumpe Stromkosten berechnen?",
          "answer": "Für Wärmepumpe Stromkosten berechnen liegt der durchschnittliche Richtwert bei ca. 4500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 131.25 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Wärmepumpe Stromkosten berechnen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4500 kWh und 35 ct/kWh ergibt dies ca. 131.25 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Wärmepumpe Stromkosten berechnen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Wärmepumpe Stromkosten berechnen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 12,3 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Wärmepumpe Stromkosten berechnen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Wärmepumpe Stromkosten berechnen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Wärmepumpe Stromkosten berechnen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Wärmepumpe Stromkosten berechnen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Wärmepumpe Stromkosten berechnen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Wärmepumpe Stromkosten berechnen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "Wärmepumpen-Stromkostenrechner",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Wärmepumpen-Stromkostenrechner. Ermittle Richtwerte (ca. 4500 kWh/Jahr, ca. 131.25 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Wärmepumpen-Stromkostenrechner?",
          "answer": "Für Wärmepumpen-Stromkostenrechner liegt der durchschnittliche Richtwert bei ca. 4500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 131.25 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Wärmepumpen-Stromkostenrechner?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 4500 kWh und 35 ct/kWh ergibt dies ca. 131.25 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Wärmepumpen-Stromkostenrechner am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Wärmepumpen-Stromkostenrechner durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 12,3 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Wärmepumpen-Stromkostenrechner deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Wärmepumpen-Stromkostenrechner sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Wärmepumpen-Stromkostenrechner?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Wärmepumpen-Stromkostenrechner?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Wärmepumpen-Stromkostenrechner?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Wärmepumpen-Stromkostenrechner?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "PV Eigenverbrauchsrechner (Solarstrom)",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für PV Eigenverbrauchsrechner (Solarstrom). Ermittle Richtwerte (ca. 3500 kWh/Jahr, ca. 114.58 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für PV Eigenverbrauchsrechner (Solarstrom)?",
          "answer": "Für PV Eigenverbrauchsrechner (Solarstrom) liegt der durchschnittliche Richtwert bei ca. 3500 kWh pro Jahr, was monatlichen Gesamtkosten von rund 114.58 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für PV Eigenverbrauchsrechner (Solarstrom)?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 3500 kWh und 35 ct/kWh ergibt dies ca. 114.58 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei PV Eigenverbrauchsrechner (Solarstrom) am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei PV Eigenverbrauchsrechner (Solarstrom) durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 9,6 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei PV Eigenverbrauchsrechner (Solarstrom) deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei PV Eigenverbrauchsrechner (Solarstrom) sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei PV Eigenverbrauchsrechner (Solarstrom)?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei PV Eigenverbrauchsrechner (Solarstrom)?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für PV Eigenverbrauchsrechner (Solarstrom)?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei PV Eigenverbrauchsrechner (Solarstrom)?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "Balkonkraftwerk Stromkosten sparen",
      "category": "Haushalt",
      "shortDescription": "Ausführlicher Ratgeber und interaktiver Rechner für Balkonkraftwerk Stromkosten sparen. Ermittle Richtwerte (ca. 800 kWh/Jahr, ca. 23.33 €/Monat) und optimiere deine laufenden Stromkosten.",
      "savingAdvice": [
        "Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.",
        "Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.",
        "Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).",
        "Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.",
        "Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen."
      ],
      "faq": [
        {
          "question": "Was ist ein normaler Richtwert für Balkonkraftwerk Stromkosten sparen?",
          "answer": "Für Balkonkraftwerk Stromkosten sparen liegt der durchschnittliche Richtwert bei ca. 800 kWh pro Jahr, was monatlichen Gesamtkosten von rund 23.33 € entspricht."
        },
        {
          "question": "Wie berechnen sich die monatlichen Stromkosten für Balkonkraftwerk Stromkosten sparen?",
          "answer": "Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei 800 kWh und 35 ct/kWh ergibt dies ca. 23.33 € im Monat."
        },
        {
          "question": "Welche Faktoren beeinflussen die Stromkosten bei Balkonkraftwerk Stromkosten sparen am stärksten?",
          "answer": "Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif."
        },
        {
          "question": "Wie viel Strom verbraucht man bei Balkonkraftwerk Stromkosten sparen durchschnittlich pro Tag?",
          "answer": "Der durchschnittliche tägliche Stromverbrauch liegt bei rund 2,2 kWh pro Tag."
        },
        {
          "question": "Warum verbrauchen manche Haushalte bei Balkonkraftwerk Stromkosten sparen deutlich mehr?",
          "answer": "Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen."
        },
        {
          "question": "Wie lässt sich der Stromverbrauch bei Balkonkraftwerk Stromkosten sparen sofort um 15–25 % senken?",
          "answer": "Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C)."
        },
        {
          "question": "Wie viel Geld spart ein Stromanbieterwechsel bei Balkonkraftwerk Stromkosten sparen?",
          "answer": "Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen."
        },
        {
          "question": "Welchen Anteil hat Warmwasser am Verbrauch bei Balkonkraftwerk Stromkosten sparen?",
          "answer": "Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus."
        },
        {
          "question": "Wie überprüfe ich meine Jahresstromabrechnung für Balkonkraftwerk Stromkosten sparen?",
          "answer": "Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln."
        },
        {
          "question": "Lohnt sich ein Balkonkraftwerk oder Solarmodul bei Balkonkraftwerk Stromkosten sparen?",
          "answer": "Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr."
        }
      ]
    }
  },
  "en": {
    "stromverbrauch-1-person": {
      "title": "Electricity Consumption: 1 Person",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Consumption: 1 Person. Calculate standard consumption benchmarks (approx. 1400 kWh/year, ~€53.33/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Consumption: 1 Person?",
          "answer": "For Electricity Consumption: 1 Person, standard annual consumption averages approx. 1400 kWh per year, resulting in monthly power costs of around €53.33."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Consumption: 1 Person?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 1400 kWh and €0.35/kWh, this totals approx. €53.33 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Consumption: 1 Person?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Consumption: 1 Person?",
          "answer": "Daily electricity consumption averages roughly 3.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Consumption: 1 Person?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Consumption: 1 Person?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Consumption: 1 Person?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Consumption: 1 Person?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Consumption: 1 Person?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Consumption: 1 Person?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "Electricity Consumption: 2 Persons",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Consumption: 2 Persons. Calculate standard consumption benchmarks (approx. 2500 kWh/year, ~€85.42/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Consumption: 2 Persons?",
          "answer": "For Electricity Consumption: 2 Persons, standard annual consumption averages approx. 2500 kWh per year, resulting in monthly power costs of around €85.42."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Consumption: 2 Persons?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 2500 kWh and €0.35/kWh, this totals approx. €85.42 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Consumption: 2 Persons?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Consumption: 2 Persons?",
          "answer": "Daily electricity consumption averages roughly 6.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Consumption: 2 Persons?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Consumption: 2 Persons?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Consumption: 2 Persons?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Consumption: 2 Persons?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Consumption: 2 Persons?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Consumption: 2 Persons?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "Electricity Consumption: 3 Persons",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Consumption: 3 Persons. Calculate standard consumption benchmarks (approx. 3200 kWh/year, ~€105.83/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Consumption: 3 Persons?",
          "answer": "For Electricity Consumption: 3 Persons, standard annual consumption averages approx. 3200 kWh per year, resulting in monthly power costs of around €105.83."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Consumption: 3 Persons?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3200 kWh and €0.35/kWh, this totals approx. €105.83 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Consumption: 3 Persons?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Consumption: 3 Persons?",
          "answer": "Daily electricity consumption averages roughly 8.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Consumption: 3 Persons?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Consumption: 3 Persons?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Consumption: 3 Persons?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Consumption: 3 Persons?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Consumption: 3 Persons?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Consumption: 3 Persons?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "Electricity Consumption: 4 Persons",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Consumption: 4 Persons. Calculate standard consumption benchmarks (approx. 3700 kWh/year, ~€120.42/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Consumption: 4 Persons?",
          "answer": "For Electricity Consumption: 4 Persons, standard annual consumption averages approx. 3700 kWh per year, resulting in monthly power costs of around €120.42."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Consumption: 4 Persons?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3700 kWh and €0.35/kWh, this totals approx. €120.42 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Consumption: 4 Persons?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Consumption: 4 Persons?",
          "answer": "Daily electricity consumption averages roughly 10.1 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Consumption: 4 Persons?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Consumption: 4 Persons?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Consumption: 4 Persons?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Consumption: 4 Persons?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Consumption: 4 Persons?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Consumption: 4 Persons?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "Electricity Consumption: 5+ Persons",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Consumption: 5+ Persons. Calculate standard consumption benchmarks (approx. 4600 kWh/year, ~€146.67/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Consumption: 5+ Persons?",
          "answer": "For Electricity Consumption: 5+ Persons, standard annual consumption averages approx. 4600 kWh per year, resulting in monthly power costs of around €146.67."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Consumption: 5+ Persons?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4600 kWh and €0.35/kWh, this totals approx. €146.67 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Consumption: 5+ Persons?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Consumption: 5+ Persons?",
          "answer": "Daily electricity consumption averages roughly 12.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Consumption: 5+ Persons?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Consumption: 5+ Persons?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Consumption: 5+ Persons?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Consumption: 5+ Persons?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Consumption: 5+ Persons?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Consumption: 5+ Persons?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "Electricity Consumption per Person",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Consumption per Person. Calculate standard consumption benchmarks (approx. 1400 kWh/year, ~€53.33/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Consumption per Person?",
          "answer": "For Electricity Consumption per Person, standard annual consumption averages approx. 1400 kWh per year, resulting in monthly power costs of around €53.33."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Consumption per Person?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 1400 kWh and €0.35/kWh, this totals approx. €53.33 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Consumption per Person?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Consumption per Person?",
          "answer": "Daily electricity consumption averages roughly 3.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Consumption per Person?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Consumption per Person?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Consumption per Person?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Consumption per Person?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Consumption per Person?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Consumption per Person?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "Apartment Electricity Consumption",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Apartment Electricity Consumption. Calculate standard consumption benchmarks (approx. 2200 kWh/year, ~€76.67/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Apartment Electricity Consumption?",
          "answer": "For Apartment Electricity Consumption, standard annual consumption averages approx. 2200 kWh per year, resulting in monthly power costs of around €76.67."
        },
        {
          "question": "How do you calculate monthly electricity costs for Apartment Electricity Consumption?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 2200 kWh and €0.35/kWh, this totals approx. €76.67 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Apartment Electricity Consumption?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Apartment Electricity Consumption?",
          "answer": "Daily electricity consumption averages roughly 6.0 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Apartment Electricity Consumption?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Apartment Electricity Consumption?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Apartment Electricity Consumption?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Apartment Electricity Consumption?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Apartment Electricity Consumption?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Apartment Electricity Consumption?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "Single-Family House Electricity Usage",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Single-Family House Electricity Usage. Calculate standard consumption benchmarks (approx. 4000 kWh/year, ~€129.17/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Single-Family House Electricity Usage?",
          "answer": "For Single-Family House Electricity Usage, standard annual consumption averages approx. 4000 kWh per year, resulting in monthly power costs of around €129.17."
        },
        {
          "question": "How do you calculate monthly electricity costs for Single-Family House Electricity Usage?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4000 kWh and €0.35/kWh, this totals approx. €129.17 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Single-Family House Electricity Usage?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Single-Family House Electricity Usage?",
          "answer": "Daily electricity consumption averages roughly 11.0 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Single-Family House Electricity Usage?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Single-Family House Electricity Usage?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Single-Family House Electricity Usage?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Single-Family House Electricity Usage?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Single-Family House Electricity Usage?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Single-Family House Electricity Usage?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "Average Household Electricity Consumption",
      "category": "Household Benchmarks",
      "shortDescription": "Comprehensive guide and live calculation tool for Average Household Electricity Consumption. Calculate standard consumption benchmarks (approx. 3000 kWh/year, ~€100/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Average Household Electricity Consumption?",
          "answer": "For Average Household Electricity Consumption, standard annual consumption averages approx. 3000 kWh per year, resulting in monthly power costs of around €100."
        },
        {
          "question": "How do you calculate monthly electricity costs for Average Household Electricity Consumption?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3000 kWh and €0.35/kWh, this totals approx. €100 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Average Household Electricity Consumption?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Average Household Electricity Consumption?",
          "answer": "Daily electricity consumption averages roughly 8.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Average Household Electricity Consumption?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Average Household Electricity Consumption?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Average Household Electricity Consumption?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Average Household Electricity Consumption?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Average Household Electricity Consumption?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Average Household Electricity Consumption?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "Current Electricity Price 2026",
      "category": "Electricity Rates",
      "shortDescription": "Comprehensive guide and live calculation tool for Current Electricity Price 2026. Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Current Electricity Price 2026?",
          "answer": "For Current Electricity Price 2026, standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Current Electricity Price 2026?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Current Electricity Price 2026?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Current Electricity Price 2026?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Current Electricity Price 2026?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Current Electricity Price 2026?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Current Electricity Price 2026?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Current Electricity Price 2026?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Current Electricity Price 2026?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Current Electricity Price 2026?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "Electricity Prices in Germany & Europe",
      "category": "Electricity Rates",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Prices in Germany & Europe. Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Prices in Germany & Europe?",
          "answer": "For Electricity Prices in Germany & Europe, standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Prices in Germany & Europe?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Prices in Germany & Europe?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Prices in Germany & Europe?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Prices in Germany & Europe?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Prices in Germany & Europe?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Prices in Germany & Europe?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Prices in Germany & Europe?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Prices in Germany & Europe?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Prices in Germany & Europe?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "Electricity Cost per kWh (Unit Rate)",
      "category": "Electricity Rates",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Cost per kWh (Unit Rate). Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Cost per kWh (Unit Rate)?",
          "answer": "For Electricity Cost per kWh (Unit Rate), standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Cost per kWh (Unit Rate)?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Cost per kWh (Unit Rate)?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Cost per kWh (Unit Rate)?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Cost per kWh (Unit Rate)?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Cost per kWh (Unit Rate)?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Cost per kWh (Unit Rate)?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Cost per kWh (Unit Rate)?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Cost per kWh (Unit Rate)?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Cost per kWh (Unit Rate)?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "Electricity Price Trends & Forecast",
      "category": "Electricity Rates",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Price Trends & Forecast. Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Price Trends & Forecast?",
          "answer": "For Electricity Price Trends & Forecast, standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Price Trends & Forecast?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Price Trends & Forecast?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Price Trends & Forecast?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Price Trends & Forecast?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Price Trends & Forecast?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Price Trends & Forecast?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Price Trends & Forecast?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Price Trends & Forecast?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Price Trends & Forecast?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "Electricity Price Breakdown & Components",
      "category": "Electricity Rates",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Price Breakdown & Components. Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Price Breakdown & Components?",
          "answer": "For Electricity Price Breakdown & Components, standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Price Breakdown & Components?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Price Breakdown & Components?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Price Breakdown & Components?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Price Breakdown & Components?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Price Breakdown & Components?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Price Breakdown & Components?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Price Breakdown & Components?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Price Breakdown & Components?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Price Breakdown & Components?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "Dynamic Electricity Tariffs & Smart Meters",
      "category": "Electricity Rates",
      "shortDescription": "Comprehensive guide and live calculation tool for Dynamic Electricity Tariffs & Smart Meters. Calculate standard consumption benchmarks (approx. 4000 kWh/year, ~€129.17/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "For Dynamic Electricity Tariffs & Smart Meters, standard annual consumption averages approx. 4000 kWh per year, resulting in monthly power costs of around €129.17."
        },
        {
          "question": "How do you calculate monthly electricity costs for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4000 kWh and €0.35/kWh, this totals approx. €129.17 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "Daily electricity consumption averages roughly 11.0 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Dynamic Electricity Tariffs & Smart Meters?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "Switching Energy Supplier to Save Money",
      "category": "Energy Guide",
      "shortDescription": "Comprehensive guide and live calculation tool for Switching Energy Supplier to Save Money. Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Switching Energy Supplier to Save Money?",
          "answer": "For Switching Energy Supplier to Save Money, standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Switching Energy Supplier to Save Money?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Switching Energy Supplier to Save Money?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Switching Energy Supplier to Save Money?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Switching Energy Supplier to Save Money?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Switching Energy Supplier to Save Money?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Switching Energy Supplier to Save Money?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Switching Energy Supplier to Save Money?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Switching Energy Supplier to Save Money?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Switching Energy Supplier to Save Money?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "Checking Your Electricity Bill for Errors",
      "category": "Energy Bill",
      "shortDescription": "Comprehensive guide and live calculation tool for Checking Your Electricity Bill for Errors. Calculate standard consumption benchmarks (approx. 3000 kWh/year, ~€100/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Checking Your Electricity Bill for Errors?",
          "answer": "For Checking Your Electricity Bill for Errors, standard annual consumption averages approx. 3000 kWh per year, resulting in monthly power costs of around €100."
        },
        {
          "question": "How do you calculate monthly electricity costs for Checking Your Electricity Bill for Errors?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3000 kWh and €0.35/kWh, this totals approx. €100 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Checking Your Electricity Bill for Errors?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Checking Your Electricity Bill for Errors?",
          "answer": "Daily electricity consumption averages roughly 8.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Checking Your Electricity Bill for Errors?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Checking Your Electricity Bill for Errors?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Checking Your Electricity Bill for Errors?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Checking Your Electricity Bill for Errors?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Checking Your Electricity Bill for Errors?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Checking Your Electricity Bill for Errors?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "Electricity Bill Too High? Causes & Fixes",
      "category": "Energy Bill",
      "shortDescription": "Comprehensive guide and live calculation tool for Electricity Bill Too High? Causes & Fixes. Calculate standard consumption benchmarks (approx. 4500 kWh/year, ~€143.75/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electricity Bill Too High? Causes & Fixes?",
          "answer": "For Electricity Bill Too High? Causes & Fixes, standard annual consumption averages approx. 4500 kWh per year, resulting in monthly power costs of around €143.75."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electricity Bill Too High? Causes & Fixes?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4500 kWh and €0.35/kWh, this totals approx. €143.75 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electricity Bill Too High? Causes & Fixes?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electricity Bill Too High? Causes & Fixes?",
          "answer": "Daily electricity consumption averages roughly 12.3 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electricity Bill Too High? Causes & Fixes?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electricity Bill Too High? Causes & Fixes?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electricity Bill Too High? Causes & Fixes?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electricity Bill Too High? Causes & Fixes?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electricity Bill Too High? Causes & Fixes?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electricity Bill Too High? Causes & Fixes?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "How to Lower Your Electricity Bill Quickly",
      "category": "Energy Bill",
      "shortDescription": "Comprehensive guide and live calculation tool for How to Lower Your Electricity Bill Quickly. Calculate standard consumption benchmarks (approx. 3000 kWh/year, ~€100/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for How to Lower Your Electricity Bill Quickly?",
          "answer": "For How to Lower Your Electricity Bill Quickly, standard annual consumption averages approx. 3000 kWh per year, resulting in monthly power costs of around €100."
        },
        {
          "question": "How do you calculate monthly electricity costs for How to Lower Your Electricity Bill Quickly?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3000 kWh and €0.35/kWh, this totals approx. €100 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for How to Lower Your Electricity Bill Quickly?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for How to Lower Your Electricity Bill Quickly?",
          "answer": "Daily electricity consumption averages roughly 8.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for How to Lower Your Electricity Bill Quickly?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for How to Lower Your Electricity Bill Quickly?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for How to Lower Your Electricity Bill Quickly?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for How to Lower Your Electricity Bill Quickly?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for How to Lower Your Electricity Bill Quickly?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for How to Lower Your Electricity Bill Quickly?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "Calculate Your Monthly Electricity Bill",
      "category": "Energy Bill",
      "shortDescription": "Comprehensive guide and live calculation tool for Calculate Your Monthly Electricity Bill. Calculate standard consumption benchmarks (approx. 3000 kWh/year, ~€100/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Calculate Your Monthly Electricity Bill?",
          "answer": "For Calculate Your Monthly Electricity Bill, standard annual consumption averages approx. 3000 kWh per year, resulting in monthly power costs of around €100."
        },
        {
          "question": "How do you calculate monthly electricity costs for Calculate Your Monthly Electricity Bill?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3000 kWh and €0.35/kWh, this totals approx. €100 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Calculate Your Monthly Electricity Bill?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Calculate Your Monthly Electricity Bill?",
          "answer": "Daily electricity consumption averages roughly 8.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Calculate Your Monthly Electricity Bill?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Calculate Your Monthly Electricity Bill?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Calculate Your Monthly Electricity Bill?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Calculate Your Monthly Electricity Bill?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Calculate Your Monthly Electricity Bill?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Calculate Your Monthly Electricity Bill?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "Sample Electricity Bill Explained",
      "category": "Energy Bill",
      "shortDescription": "Comprehensive guide and live calculation tool for Sample Electricity Bill Explained. Calculate standard consumption benchmarks (approx. 3000 kWh/year, ~€100/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Sample Electricity Bill Explained?",
          "answer": "For Sample Electricity Bill Explained, standard annual consumption averages approx. 3000 kWh per year, resulting in monthly power costs of around €100."
        },
        {
          "question": "How do you calculate monthly electricity costs for Sample Electricity Bill Explained?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3000 kWh and €0.35/kWh, this totals approx. €100 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Sample Electricity Bill Explained?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Sample Electricity Bill Explained?",
          "answer": "Daily electricity consumption averages roughly 8.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Sample Electricity Bill Explained?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Sample Electricity Bill Explained?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Sample Electricity Bill Explained?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Sample Electricity Bill Explained?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Sample Electricity Bill Explained?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Sample Electricity Bill Explained?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "Top 20 Energy Saving Tips for 2026",
      "category": "Energy Guide",
      "shortDescription": "Comprehensive guide and live calculation tool for Top 20 Energy Saving Tips for 2026. Calculate standard consumption benchmarks (approx. 3000 kWh/year, ~€100/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Top 20 Energy Saving Tips for 2026?",
          "answer": "For Top 20 Energy Saving Tips for 2026, standard annual consumption averages approx. 3000 kWh per year, resulting in monthly power costs of around €100."
        },
        {
          "question": "How do you calculate monthly electricity costs for Top 20 Energy Saving Tips for 2026?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3000 kWh and €0.35/kWh, this totals approx. €100 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Top 20 Energy Saving Tips for 2026?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Top 20 Energy Saving Tips for 2026?",
          "answer": "Daily electricity consumption averages roughly 8.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Top 20 Energy Saving Tips for 2026?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Top 20 Energy Saving Tips for 2026?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Top 20 Energy Saving Tips for 2026?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Top 20 Energy Saving Tips for 2026?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Top 20 Energy Saving Tips for 2026?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Top 20 Energy Saving Tips for 2026?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "stromfresser": {
      "title": "Detecting Power-Hungry Vampire Appliances",
      "category": "Energy Guide",
      "shortDescription": "Comprehensive guide and live calculation tool for Detecting Power-Hungry Vampire Appliances. Calculate standard consumption benchmarks (approx. 4000 kWh/year, ~€129.17/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Detecting Power-Hungry Vampire Appliances?",
          "answer": "For Detecting Power-Hungry Vampire Appliances, standard annual consumption averages approx. 4000 kWh per year, resulting in monthly power costs of around €129.17."
        },
        {
          "question": "How do you calculate monthly electricity costs for Detecting Power-Hungry Vampire Appliances?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4000 kWh and €0.35/kWh, this totals approx. €129.17 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Detecting Power-Hungry Vampire Appliances?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Detecting Power-Hungry Vampire Appliances?",
          "answer": "Daily electricity consumption averages roughly 11.0 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Detecting Power-Hungry Vampire Appliances?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Detecting Power-Hungry Vampire Appliances?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Detecting Power-Hungry Vampire Appliances?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Detecting Power-Hungry Vampire Appliances?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Detecting Power-Hungry Vampire Appliances?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Detecting Power-Hungry Vampire Appliances?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "standby-strom": {
      "title": "Standby Power & Vampire Draw Calculator",
      "category": "Energy Guide",
      "shortDescription": "Comprehensive guide and live calculation tool for Standby Power & Vampire Draw Calculator. Calculate standard consumption benchmarks (approx. 300 kWh/year, ~€8.75/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Standby Power & Vampire Draw Calculator?",
          "answer": "For Standby Power & Vampire Draw Calculator, standard annual consumption averages approx. 300 kWh per year, resulting in monthly power costs of around €8.75."
        },
        {
          "question": "How do you calculate monthly electricity costs for Standby Power & Vampire Draw Calculator?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 300 kWh and €0.35/kWh, this totals approx. €8.75 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Standby Power & Vampire Draw Calculator?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Standby Power & Vampire Draw Calculator?",
          "answer": "Daily electricity consumption averages roughly 0.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Standby Power & Vampire Draw Calculator?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Standby Power & Vampire Draw Calculator?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Standby Power & Vampire Draw Calculator?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Standby Power & Vampire Draw Calculator?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Standby Power & Vampire Draw Calculator?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Standby Power & Vampire Draw Calculator?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "Electric Vehicle (EV) Electricity Costs",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for Electric Vehicle (EV) Electricity Costs. Calculate standard consumption benchmarks (approx. 2500 kWh/year, ~€72.92/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Electric Vehicle (EV) Electricity Costs?",
          "answer": "For Electric Vehicle (EV) Electricity Costs, standard annual consumption averages approx. 2500 kWh per year, resulting in monthly power costs of around €72.92."
        },
        {
          "question": "How do you calculate monthly electricity costs for Electric Vehicle (EV) Electricity Costs?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 2500 kWh and €0.35/kWh, this totals approx. €72.92 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Electric Vehicle (EV) Electricity Costs?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Electric Vehicle (EV) Electricity Costs?",
          "answer": "Daily electricity consumption averages roughly 6.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Electric Vehicle (EV) Electricity Costs?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Electric Vehicle (EV) Electricity Costs?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Electric Vehicle (EV) Electricity Costs?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Electric Vehicle (EV) Electricity Costs?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Electric Vehicle (EV) Electricity Costs?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Electric Vehicle (EV) Electricity Costs?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "EV Charging Cost Calculator",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for EV Charging Cost Calculator. Calculate standard consumption benchmarks (approx. 2500 kWh/year, ~€72.92/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for EV Charging Cost Calculator?",
          "answer": "For EV Charging Cost Calculator, standard annual consumption averages approx. 2500 kWh per year, resulting in monthly power costs of around €72.92."
        },
        {
          "question": "How do you calculate monthly electricity costs for EV Charging Cost Calculator?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 2500 kWh and €0.35/kWh, this totals approx. €72.92 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for EV Charging Cost Calculator?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for EV Charging Cost Calculator?",
          "answer": "Daily electricity consumption averages roughly 6.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for EV Charging Cost Calculator?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for EV Charging Cost Calculator?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for EV Charging Cost Calculator?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for EV Charging Cost Calculator?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for EV Charging Cost Calculator?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for EV Charging Cost Calculator?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "EV Electricity Cost per 100 km",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for EV Electricity Cost per 100 km. Calculate standard consumption benchmarks (approx. 2500 kWh/year, ~€72.92/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for EV Electricity Cost per 100 km?",
          "answer": "For EV Electricity Cost per 100 km, standard annual consumption averages approx. 2500 kWh per year, resulting in monthly power costs of around €72.92."
        },
        {
          "question": "How do you calculate monthly electricity costs for EV Electricity Cost per 100 km?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 2500 kWh and €0.35/kWh, this totals approx. €72.92 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for EV Electricity Cost per 100 km?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for EV Electricity Cost per 100 km?",
          "answer": "Daily electricity consumption averages roughly 6.8 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for EV Electricity Cost per 100 km?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for EV Electricity Cost per 100 km?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for EV Electricity Cost per 100 km?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for EV Electricity Cost per 100 km?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for EV Electricity Cost per 100 km?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for EV Electricity Cost per 100 km?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "Heat Pump Electricity Consumption",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for Heat Pump Electricity Consumption. Calculate standard consumption benchmarks (approx. 4500 kWh/year, ~€131.25/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Heat Pump Electricity Consumption?",
          "answer": "For Heat Pump Electricity Consumption, standard annual consumption averages approx. 4500 kWh per year, resulting in monthly power costs of around €131.25."
        },
        {
          "question": "How do you calculate monthly electricity costs for Heat Pump Electricity Consumption?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4500 kWh and €0.35/kWh, this totals approx. €131.25 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Heat Pump Electricity Consumption?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Heat Pump Electricity Consumption?",
          "answer": "Daily electricity consumption averages roughly 12.3 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Heat Pump Electricity Consumption?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Heat Pump Electricity Consumption?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Heat Pump Electricity Consumption?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Heat Pump Electricity Consumption?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Heat Pump Electricity Consumption?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Heat Pump Electricity Consumption?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "Heat Pump Operating Electricity Costs",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for Heat Pump Operating Electricity Costs. Calculate standard consumption benchmarks (approx. 4500 kWh/year, ~€131.25/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Heat Pump Operating Electricity Costs?",
          "answer": "For Heat Pump Operating Electricity Costs, standard annual consumption averages approx. 4500 kWh per year, resulting in monthly power costs of around €131.25."
        },
        {
          "question": "How do you calculate monthly electricity costs for Heat Pump Operating Electricity Costs?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4500 kWh and €0.35/kWh, this totals approx. €131.25 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Heat Pump Operating Electricity Costs?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Heat Pump Operating Electricity Costs?",
          "answer": "Daily electricity consumption averages roughly 12.3 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Heat Pump Operating Electricity Costs?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Heat Pump Operating Electricity Costs?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Heat Pump Operating Electricity Costs?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Heat Pump Operating Electricity Costs?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Heat Pump Operating Electricity Costs?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Heat Pump Operating Electricity Costs?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "Heat Pump Power Cost Calculator",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for Heat Pump Power Cost Calculator. Calculate standard consumption benchmarks (approx. 4500 kWh/year, ~€131.25/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Heat Pump Power Cost Calculator?",
          "answer": "For Heat Pump Power Cost Calculator, standard annual consumption averages approx. 4500 kWh per year, resulting in monthly power costs of around €131.25."
        },
        {
          "question": "How do you calculate monthly electricity costs for Heat Pump Power Cost Calculator?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 4500 kWh and €0.35/kWh, this totals approx. €131.25 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Heat Pump Power Cost Calculator?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Heat Pump Power Cost Calculator?",
          "answer": "Daily electricity consumption averages roughly 12.3 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Heat Pump Power Cost Calculator?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Heat Pump Power Cost Calculator?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Heat Pump Power Cost Calculator?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Heat Pump Power Cost Calculator?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Heat Pump Power Cost Calculator?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Heat Pump Power Cost Calculator?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "Solar PV Self-Consumption & Savings Calculator",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for Solar PV Self-Consumption & Savings Calculator. Calculate standard consumption benchmarks (approx. 3500 kWh/year, ~€114.58/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "For Solar PV Self-Consumption & Savings Calculator, standard annual consumption averages approx. 3500 kWh per year, resulting in monthly power costs of around €114.58."
        },
        {
          "question": "How do you calculate monthly electricity costs for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 3500 kWh and €0.35/kWh, this totals approx. €114.58 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "Daily electricity consumption averages roughly 9.6 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Solar PV Self-Consumption & Savings Calculator?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "Balcony Solar Power Plant Savings Calculator",
      "category": "Clean Energy",
      "shortDescription": "Comprehensive guide and live calculation tool for Balcony Solar Power Plant Savings Calculator. Calculate standard consumption benchmarks (approx. 800 kWh/year, ~€23.33/month) and reduce your energy bills.",
      "savingAdvice": [
        "Eliminate continuous phantom standby power using switchable power strips.",
        "Always run dishwashers and washing machines with full loads in Eco mode.",
        "Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).",
        "Compare electricity tariffs annually to secure the best per-kWh unit rates.",
        "Replace all traditional bulbs with high-efficiency LED lights."
      ],
      "faq": [
        {
          "question": "What is a standard benchmark for Balcony Solar Power Plant Savings Calculator?",
          "answer": "For Balcony Solar Power Plant Savings Calculator, standard annual consumption averages approx. 800 kWh per year, resulting in monthly power costs of around €23.33."
        },
        {
          "question": "How do you calculate monthly electricity costs for Balcony Solar Power Plant Savings Calculator?",
          "answer": "Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At 800 kWh and €0.35/kWh, this totals approx. €23.33 per month."
        },
        {
          "question": "What factors have the biggest impact on electricity costs for Balcony Solar Power Plant Savings Calculator?",
          "answer": "The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate."
        },
        {
          "question": "How many kWh are consumed per day on average for Balcony Solar Power Plant Savings Calculator?",
          "answer": "Daily electricity consumption averages roughly 2.2 kWh per day."
        },
        {
          "question": "Why do some households use significantly more electricity for Balcony Solar Power Plant Savings Calculator?",
          "answer": "Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration."
        },
        {
          "question": "How can you immediately lower consumption by 15–25% for Balcony Solar Power Plant Savings Calculator?",
          "answer": "By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F)."
        },
        {
          "question": "How much money can you save by switching energy suppliers for Balcony Solar Power Plant Savings Calculator?",
          "answer": "Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year."
        },
        {
          "question": "What proportion of electricity goes to water heating for Balcony Solar Power Plant Savings Calculator?",
          "answer": "When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw."
        },
        {
          "question": "How do you properly check your annual electricity bill for Balcony Solar Power Plant Savings Calculator?",
          "answer": "Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage."
        },
        {
          "question": "Is a plug-in balcony solar system worth it for Balcony Solar Power Plant Savings Calculator?",
          "answer": "Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year."
        }
      ]
    }
  },
  "es": {
    "stromverbrauch-1-person": {
      "title": "Consumo Eléctrico de 1 Persona",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico de 1 Persona. Consulta valores de referencia oficiales (~1400 kWh/año, ~53.33 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico de 1 Persona?",
          "answer": "Para Consumo Eléctrico de 1 Persona, el consumo anual promedio ronda los 1400 kWh al año, lo que supone un coste mensual de unos 53.33 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico de 1 Persona?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 53.33 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico de 1 Persona?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico de 1 Persona?",
          "answer": "El consumo medio diario se sitúa en torno a 3,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico de 1 Persona?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico de 1 Persona?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico de 1 Persona?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico de 1 Persona?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico de 1 Persona para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico de 1 Persona?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "Consumo Eléctrico de 2 Personas",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico de 2 Personas. Consulta valores de referencia oficiales (~2500 kWh/año, ~85.42 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico de 2 Personas?",
          "answer": "Para Consumo Eléctrico de 2 Personas, el consumo anual promedio ronda los 2500 kWh al año, lo que supone un coste mensual de unos 85.42 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico de 2 Personas?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 85.42 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico de 2 Personas?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico de 2 Personas?",
          "answer": "El consumo medio diario se sitúa en torno a 6,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico de 2 Personas?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico de 2 Personas?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico de 2 Personas?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico de 2 Personas?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico de 2 Personas para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico de 2 Personas?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "Consumo Eléctrico de 3 Personas",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico de 3 Personas. Consulta valores de referencia oficiales (~3200 kWh/año, ~105.83 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico de 3 Personas?",
          "answer": "Para Consumo Eléctrico de 3 Personas, el consumo anual promedio ronda los 3200 kWh al año, lo que supone un coste mensual de unos 105.83 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico de 3 Personas?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 105.83 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico de 3 Personas?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico de 3 Personas?",
          "answer": "El consumo medio diario se sitúa en torno a 8,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico de 3 Personas?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico de 3 Personas?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico de 3 Personas?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico de 3 Personas?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico de 3 Personas para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico de 3 Personas?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "Consumo Eléctrico de 4 Personas",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico de 4 Personas. Consulta valores de referencia oficiales (~3700 kWh/año, ~120.42 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico de 4 Personas?",
          "answer": "Para Consumo Eléctrico de 4 Personas, el consumo anual promedio ronda los 3700 kWh al año, lo que supone un coste mensual de unos 120.42 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico de 4 Personas?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 120.42 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico de 4 Personas?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico de 4 Personas?",
          "answer": "El consumo medio diario se sitúa en torno a 10,1 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico de 4 Personas?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico de 4 Personas?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico de 4 Personas?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico de 4 Personas?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico de 4 Personas para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico de 4 Personas?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "Consumo Eléctrico de 5+ Personas",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico de 5+ Personas. Consulta valores de referencia oficiales (~4600 kWh/año, ~146.67 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico de 5+ Personas?",
          "answer": "Para Consumo Eléctrico de 5+ Personas, el consumo anual promedio ronda los 4600 kWh al año, lo que supone un coste mensual de unos 146.67 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico de 5+ Personas?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 146.67 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico de 5+ Personas?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico de 5+ Personas?",
          "answer": "El consumo medio diario se sitúa en torno a 12,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico de 5+ Personas?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico de 5+ Personas?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico de 5+ Personas?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico de 5+ Personas?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico de 5+ Personas para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico de 5+ Personas?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "Consumo Eléctrico por Persona",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico por Persona. Consulta valores de referencia oficiales (~1400 kWh/año, ~53.33 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico por Persona?",
          "answer": "Para Consumo Eléctrico por Persona, el consumo anual promedio ronda los 1400 kWh al año, lo que supone un coste mensual de unos 53.33 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico por Persona?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 53.33 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico por Persona?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico por Persona?",
          "answer": "El consumo medio diario se sitúa en torno a 3,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico por Persona?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico por Persona?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico por Persona?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico por Persona?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico por Persona para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico por Persona?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "Consumo Eléctrico en Piso / Apartamento",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico en Piso / Apartamento. Consulta valores de referencia oficiales (~2200 kWh/año, ~76.67 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Para Consumo Eléctrico en Piso / Apartamento, el consumo anual promedio ronda los 2200 kWh al año, lo que supone un coste mensual de unos 76.67 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 76.67 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico en Piso / Apartamento?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico en Piso / Apartamento?",
          "answer": "El consumo medio diario se sitúa en torno a 6,0 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico en Piso / Apartamento para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico en Piso / Apartamento?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "Consumo Eléctrico en Casa Unifamiliar",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico en Casa Unifamiliar. Consulta valores de referencia oficiales (~4000 kWh/año, ~129.17 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Para Consumo Eléctrico en Casa Unifamiliar, el consumo anual promedio ronda los 4000 kWh al año, lo que supone un coste mensual de unos 129.17 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 129.17 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "El consumo medio diario se sitúa en torno a 11,0 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico en Casa Unifamiliar para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico en Casa Unifamiliar?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "Consumo Eléctrico Medio del Hogar",
      "category": "Hogar",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico Medio del Hogar. Consulta valores de referencia oficiales (~3000 kWh/año, ~100 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico Medio del Hogar?",
          "answer": "Para Consumo Eléctrico Medio del Hogar, el consumo anual promedio ronda los 3000 kWh al año, lo que supone un coste mensual de unos 100 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico Medio del Hogar?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 100 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico Medio del Hogar?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico Medio del Hogar?",
          "answer": "El consumo medio diario se sitúa en torno a 8,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico Medio del Hogar?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico Medio del Hogar?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico Medio del Hogar?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico Medio del Hogar?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico Medio del Hogar para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico Medio del Hogar?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "Precio Actual de la Electricidad 2026",
      "category": "Tarifas Eléctricas",
      "shortDescription": "Guía completa y calculadora interactiva para Precio Actual de la Electricidad 2026. Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Precio Actual de la Electricidad 2026?",
          "answer": "Para Precio Actual de la Electricidad 2026, el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Precio Actual de la Electricidad 2026?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Precio Actual de la Electricidad 2026?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Precio Actual de la Electricidad 2026?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Precio Actual de la Electricidad 2026?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Precio Actual de la Electricidad 2026?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Precio Actual de la Electricidad 2026?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Precio Actual de la Electricidad 2026?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Precio Actual de la Electricidad 2026 para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Precio Actual de la Electricidad 2026?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "Precios de la Electricidad en Europa",
      "category": "Tarifas Eléctricas",
      "shortDescription": "Guía completa y calculadora interactiva para Precios de la Electricidad en Europa. Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Precios de la Electricidad en Europa?",
          "answer": "Para Precios de la Electricidad en Europa, el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Precios de la Electricidad en Europa?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Precios de la Electricidad en Europa?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Precios de la Electricidad en Europa?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Precios de la Electricidad en Europa?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Precios de la Electricidad en Europa?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Precios de la Electricidad en Europa?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Precios de la Electricidad en Europa?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Precios de la Electricidad en Europa para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Precios de la Electricidad en Europa?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "Precio por kWh (Término de Energía)",
      "category": "Tarifas Eléctricas",
      "shortDescription": "Guía completa y calculadora interactiva para Precio por kWh (Término de Energía). Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Precio por kWh (Término de Energía)?",
          "answer": "Para Precio por kWh (Término de Energía), el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Precio por kWh (Término de Energía)?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Precio por kWh (Término de Energía)?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Precio por kWh (Término de Energía)?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Precio por kWh (Término de Energía)?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Precio por kWh (Término de Energía)?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Precio por kWh (Término de Energía)?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Precio por kWh (Término de Energía)?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Precio por kWh (Término de Energía) para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Precio por kWh (Término de Energía)?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "Evolución del Precio de la Luz",
      "category": "Tarifas Eléctricas",
      "shortDescription": "Guía completa y calculadora interactiva para Evolución del Precio de la Luz. Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Evolución del Precio de la Luz?",
          "answer": "Para Evolución del Precio de la Luz, el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Evolución del Precio de la Luz?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Evolución del Precio de la Luz?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Evolución del Precio de la Luz?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Evolución del Precio de la Luz?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Evolución del Precio de la Luz?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Evolución del Precio de la Luz?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Evolución del Precio de la Luz?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Evolución del Precio de la Luz para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Evolución del Precio de la Luz?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "Desglose del Precio de la Electricidad",
      "category": "Tarifas Eléctricas",
      "shortDescription": "Guía completa y calculadora interactiva para Desglose del Precio de la Electricidad. Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Desglose del Precio de la Electricidad?",
          "answer": "Para Desglose del Precio de la Electricidad, el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Desglose del Precio de la Electricidad?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Desglose del Precio de la Electricidad?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Desglose del Precio de la Electricidad?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Desglose del Precio de la Electricidad?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Desglose del Precio de la Electricidad?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Desglose del Precio de la Electricidad?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Desglose del Precio de la Electricidad?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Desglose del Precio de la Electricidad para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Desglose del Precio de la Electricidad?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "Tarifas Eléctricas Dinámicas",
      "category": "Tarifas Eléctricas",
      "shortDescription": "Guía completa y calculadora interactiva para Tarifas Eléctricas Dinámicas. Consulta valores de referencia oficiales (~4000 kWh/año, ~129.17 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Tarifas Eléctricas Dinámicas?",
          "answer": "Para Tarifas Eléctricas Dinámicas, el consumo anual promedio ronda los 4000 kWh al año, lo que supone un coste mensual de unos 129.17 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Tarifas Eléctricas Dinámicas?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 129.17 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Tarifas Eléctricas Dinámicas?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Tarifas Eléctricas Dinámicas?",
          "answer": "El consumo medio diario se sitúa en torno a 11,0 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Tarifas Eléctricas Dinámicas?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Tarifas Eléctricas Dinámicas?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Tarifas Eléctricas Dinámicas?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Tarifas Eléctricas Dinámicas?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Tarifas Eléctricas Dinámicas para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Tarifas Eléctricas Dinámicas?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "Cambiar de Compañía Eléctrica",
      "category": "Guía de Ahorro",
      "shortDescription": "Guía completa y calculadora interactiva para Cambiar de Compañía Eléctrica. Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Cambiar de Compañía Eléctrica?",
          "answer": "Para Cambiar de Compañía Eléctrica, el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Cambiar de Compañía Eléctrica?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Cambiar de Compañía Eléctrica?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Cambiar de Compañía Eléctrica?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Cambiar de Compañía Eléctrica?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Cambiar de Compañía Eléctrica?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Cambiar de Compañía Eléctrica?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Cambiar de Compañía Eléctrica?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Cambiar de Compañía Eléctrica para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Cambiar de Compañía Eléctrica?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "Cómo Revisar la Factura de la Luz",
      "category": "Factura de Luz",
      "shortDescription": "Guía completa y calculadora interactiva para Cómo Revisar la Factura de la Luz. Consulta valores de referencia oficiales (~3000 kWh/año, ~100 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Cómo Revisar la Factura de la Luz?",
          "answer": "Para Cómo Revisar la Factura de la Luz, el consumo anual promedio ronda los 3000 kWh al año, lo que supone un coste mensual de unos 100 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Cómo Revisar la Factura de la Luz?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 100 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Cómo Revisar la Factura de la Luz?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Cómo Revisar la Factura de la Luz?",
          "answer": "El consumo medio diario se sitúa en torno a 8,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Cómo Revisar la Factura de la Luz?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Cómo Revisar la Factura de la Luz?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Cómo Revisar la Factura de la Luz?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Cómo Revisar la Factura de la Luz?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Cómo Revisar la Factura de la Luz para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Cómo Revisar la Factura de la Luz?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "¿Factura de luz muy alta? Soluciones",
      "category": "Factura de Luz",
      "shortDescription": "Guía completa y calculadora interactiva para ¿Factura de luz muy alta? Soluciones. Consulta valores de referencia oficiales (~4500 kWh/año, ~143.75 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para ¿Factura de luz muy alta? Soluciones?",
          "answer": "Para ¿Factura de luz muy alta? Soluciones, el consumo anual promedio ronda los 4500 kWh al año, lo que supone un coste mensual de unos 143.75 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para ¿Factura de luz muy alta? Soluciones?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 143.75 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de ¿Factura de luz muy alta? Soluciones?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en ¿Factura de luz muy alta? Soluciones?",
          "answer": "El consumo medio diario se sitúa en torno a 12,3 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en ¿Factura de luz muy alta? Soluciones?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en ¿Factura de luz muy alta? Soluciones?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para ¿Factura de luz muy alta? Soluciones?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en ¿Factura de luz muy alta? Soluciones?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en ¿Factura de luz muy alta? Soluciones para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para ¿Factura de luz muy alta? Soluciones?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "Cómo Reducir la Factura de la Luz",
      "category": "Factura de Luz",
      "shortDescription": "Guía completa y calculadora interactiva para Cómo Reducir la Factura de la Luz. Consulta valores de referencia oficiales (~3000 kWh/año, ~100 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Cómo Reducir la Factura de la Luz?",
          "answer": "Para Cómo Reducir la Factura de la Luz, el consumo anual promedio ronda los 3000 kWh al año, lo que supone un coste mensual de unos 100 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Cómo Reducir la Factura de la Luz?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 100 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Cómo Reducir la Factura de la Luz?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Cómo Reducir la Factura de la Luz?",
          "answer": "El consumo medio diario se sitúa en torno a 8,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Cómo Reducir la Factura de la Luz?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Cómo Reducir la Factura de la Luz?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Cómo Reducir la Factura de la Luz?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Cómo Reducir la Factura de la Luz?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Cómo Reducir la Factura de la Luz para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Cómo Reducir la Factura de la Luz?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "Calcular la Factura de la Luz",
      "category": "Factura de Luz",
      "shortDescription": "Guía completa y calculadora interactiva para Calcular la Factura de la Luz. Consulta valores de referencia oficiales (~3000 kWh/año, ~100 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Calcular la Factura de la Luz?",
          "answer": "Para Calcular la Factura de la Luz, el consumo anual promedio ronda los 3000 kWh al año, lo que supone un coste mensual de unos 100 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Calcular la Factura de la Luz?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 100 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Calcular la Factura de la Luz?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Calcular la Factura de la Luz?",
          "answer": "El consumo medio diario se sitúa en torno a 8,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Calcular la Factura de la Luz?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Calcular la Factura de la Luz?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Calcular la Factura de la Luz?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Calcular la Factura de la Luz?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Calcular la Factura de la Luz para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Calcular la Factura de la Luz?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "Ejemplo de Factura de la Luz Explicada",
      "category": "Factura de Luz",
      "shortDescription": "Guía completa y calculadora interactiva para Ejemplo de Factura de la Luz Explicada. Consulta valores de referencia oficiales (~3000 kWh/año, ~100 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Ejemplo de Factura de la Luz Explicada?",
          "answer": "Para Ejemplo de Factura de la Luz Explicada, el consumo anual promedio ronda los 3000 kWh al año, lo que supone un coste mensual de unos 100 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Ejemplo de Factura de la Luz Explicada?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 100 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Ejemplo de Factura de la Luz Explicada?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Ejemplo de Factura de la Luz Explicada?",
          "answer": "El consumo medio diario se sitúa en torno a 8,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Ejemplo de Factura de la Luz Explicada?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Ejemplo de Factura de la Luz Explicada?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Ejemplo de Factura de la Luz Explicada?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Ejemplo de Factura de la Luz Explicada?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Ejemplo de Factura de la Luz Explicada para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Ejemplo de Factura de la Luz Explicada?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "Los 20 Mejores Consejos para Ahorrar Luz",
      "category": "Guía de Ahorro",
      "shortDescription": "Guía completa y calculadora interactiva para Los 20 Mejores Consejos para Ahorrar Luz. Consulta valores de referencia oficiales (~3000 kWh/año, ~100 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Para Los 20 Mejores Consejos para Ahorrar Luz, el consumo anual promedio ronda los 3000 kWh al año, lo que supone un coste mensual de unos 100 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 100 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "El consumo medio diario se sitúa en torno a 8,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Los 20 Mejores Consejos para Ahorrar Luz para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Los 20 Mejores Consejos para Ahorrar Luz?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "stromfresser": {
      "title": "Electrodomésticos que Más Luz Gastan",
      "category": "Guía de Ahorro",
      "shortDescription": "Guía completa y calculadora interactiva para Electrodomésticos que Más Luz Gastan. Consulta valores de referencia oficiales (~4000 kWh/año, ~129.17 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Electrodomésticos que Más Luz Gastan?",
          "answer": "Para Electrodomésticos que Más Luz Gastan, el consumo anual promedio ronda los 4000 kWh al año, lo que supone un coste mensual de unos 129.17 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Electrodomésticos que Más Luz Gastan?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 129.17 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Electrodomésticos que Más Luz Gastan?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Electrodomésticos que Más Luz Gastan?",
          "answer": "El consumo medio diario se sitúa en torno a 11,0 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Electrodomésticos que Más Luz Gastan?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Electrodomésticos que Más Luz Gastan?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Electrodomésticos que Más Luz Gastan?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Electrodomésticos que Más Luz Gastan?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Electrodomésticos que Más Luz Gastan para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Electrodomésticos que Más Luz Gastan?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "standby-strom": {
      "title": "Calcular el Consumo en Modo Standby",
      "category": "Guía de Ahorro",
      "shortDescription": "Guía completa y calculadora interactiva para Calcular el Consumo en Modo Standby. Consulta valores de referencia oficiales (~300 kWh/año, ~8.75 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Calcular el Consumo en Modo Standby?",
          "answer": "Para Calcular el Consumo en Modo Standby, el consumo anual promedio ronda los 300 kWh al año, lo que supone un coste mensual de unos 8.75 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Calcular el Consumo en Modo Standby?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 8.75 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Calcular el Consumo en Modo Standby?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Calcular el Consumo en Modo Standby?",
          "answer": "El consumo medio diario se sitúa en torno a 0,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Calcular el Consumo en Modo Standby?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Calcular el Consumo en Modo Standby?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Calcular el Consumo en Modo Standby?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Calcular el Consumo en Modo Standby?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Calcular el Consumo en Modo Standby para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Calcular el Consumo en Modo Standby?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "Coste Eléctrico de Cargar un Coche Eléctrico",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Coste Eléctrico de Cargar un Coche Eléctrico. Consulta valores de referencia oficiales (~2500 kWh/año, ~72.92 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Para Coste Eléctrico de Cargar un Coche Eléctrico, el consumo anual promedio ronda los 2500 kWh al año, lo que supone un coste mensual de unos 72.92 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 72.92 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "El consumo medio diario se sitúa en torno a 6,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Coste Eléctrico de Cargar un Coche Eléctrico para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Coste Eléctrico de Cargar un Coche Eléctrico?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "Calculadora de Coste de Carga de Coche Eléctrico",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Calculadora de Coste de Carga de Coche Eléctrico. Consulta valores de referencia oficiales (~2500 kWh/año, ~72.92 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Para Calculadora de Coste de Carga de Coche Eléctrico, el consumo anual promedio ronda los 2500 kWh al año, lo que supone un coste mensual de unos 72.92 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 72.92 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "El consumo medio diario se sitúa en torno a 6,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Calculadora de Coste de Carga de Coche Eléctrico para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Calculadora de Coste de Carga de Coche Eléctrico?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "Coste Eléctrico por cada 100 km de Coche Eléctrico",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Coste Eléctrico por cada 100 km de Coche Eléctrico. Consulta valores de referencia oficiales (~2500 kWh/año, ~72.92 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Para Coste Eléctrico por cada 100 km de Coche Eléctrico, el consumo anual promedio ronda los 2500 kWh al año, lo que supone un coste mensual de unos 72.92 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 72.92 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "El consumo medio diario se sitúa en torno a 6,8 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Coste Eléctrico por cada 100 km de Coche Eléctrico para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Coste Eléctrico por cada 100 km de Coche Eléctrico?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "Consumo Eléctrico de una Bomba de Calor",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Consumo Eléctrico de una Bomba de Calor. Consulta valores de referencia oficiales (~4500 kWh/año, ~131.25 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Para Consumo Eléctrico de una Bomba de Calor, el consumo anual promedio ronda los 4500 kWh al año, lo que supone un coste mensual de unos 131.25 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 131.25 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Consumo Eléctrico de una Bomba de Calor?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Consumo Eléctrico de una Bomba de Calor?",
          "answer": "El consumo medio diario se sitúa en torno a 12,3 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Consumo Eléctrico de una Bomba de Calor para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Consumo Eléctrico de una Bomba de Calor?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "Costes de Electricidad de una Bomba de Calor",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Costes de Electricidad de una Bomba de Calor. Consulta valores de referencia oficiales (~4500 kWh/año, ~131.25 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Costes de Electricidad de una Bomba de Calor?",
          "answer": "Para Costes de Electricidad de una Bomba de Calor, el consumo anual promedio ronda los 4500 kWh al año, lo que supone un coste mensual de unos 131.25 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Costes de Electricidad de una Bomba de Calor?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 131.25 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Costes de Electricidad de una Bomba de Calor?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Costes de Electricidad de una Bomba de Calor?",
          "answer": "El consumo medio diario se sitúa en torno a 12,3 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Costes de Electricidad de una Bomba de Calor?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Costes de Electricidad de una Bomba de Calor?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Costes de Electricidad de una Bomba de Calor?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Costes de Electricidad de una Bomba de Calor?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Costes de Electricidad de una Bomba de Calor para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Costes de Electricidad de una Bomba de Calor?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "Calculadora de Consumo de Bomba de Calor",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Calculadora de Consumo de Bomba de Calor. Consulta valores de referencia oficiales (~4500 kWh/año, ~131.25 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Calculadora de Consumo de Bomba de Calor?",
          "answer": "Para Calculadora de Consumo de Bomba de Calor, el consumo anual promedio ronda los 4500 kWh al año, lo que supone un coste mensual de unos 131.25 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Calculadora de Consumo de Bomba de Calor?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 131.25 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Calculadora de Consumo de Bomba de Calor?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Calculadora de Consumo de Bomba de Calor?",
          "answer": "El consumo medio diario se sitúa en torno a 12,3 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Calculadora de Consumo de Bomba de Calor?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Calculadora de Consumo de Bomba de Calor?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Calculadora de Consumo de Bomba de Calor?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Calculadora de Consumo de Bomba de Calor?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Calculadora de Consumo de Bomba de Calor para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Calculadora de Consumo de Bomba de Calor?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "Calculadora de Autoconsumo Solar Fotovoltaico",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Calculadora de Autoconsumo Solar Fotovoltaico. Consulta valores de referencia oficiales (~3500 kWh/año, ~114.58 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Para Calculadora de Autoconsumo Solar Fotovoltaico, el consumo anual promedio ronda los 3500 kWh al año, lo que supone un coste mensual de unos 114.58 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 114.58 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "El consumo medio diario se sitúa en torno a 9,6 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Calculadora de Autoconsumo Solar Fotovoltaico para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Calculadora de Autoconsumo Solar Fotovoltaico?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "Ahorro con Kit Solar de Balcón (Plug-in)",
      "category": "Energía Limpia",
      "shortDescription": "Guía completa y calculadora interactiva para Ahorro con Kit Solar de Balcón (Plug-in). Consulta valores de referencia oficiales (~800 kWh/año, ~23.33 €/mes) y ahorra en tu factura de luz.",
      "savingAdvice": [
        "Elimina el consumo fantasma en reposo utilizando regletas con interruptor.",
        "Usa siempre programas Eco a carga completa en lavadora y lavavajillas.",
        "Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.",
        "Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.",
        "Sustituye toda la iluminación por bombillas LED de bajo consumo."
      ],
      "faq": [
        {
          "question": "¿Cuál es el valor medio de referencia para Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Para Ahorro con Kit Solar de Balcón (Plug-in), el consumo anual promedio ronda los 800 kWh al año, lo que supone un coste mensual de unos 23.33 €."
        },
        {
          "question": "¿Cómo se calculan los costes mensuales de electricidad para Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente 23.33 € al mes."
        },
        {
          "question": "¿Qué factores influyen más en el gasto eléctrico de Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada."
        },
        {
          "question": "¿Cuántos kWh se consumen al día de media en Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "El consumo medio diario se sitúa en torno a 2,2 kWh al día."
        },
        {
          "question": "¿Por qué algunas viviendas gastan el doble de luz en Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos."
        },
        {
          "question": "¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C."
        },
        {
          "question": "¿Cuánto se ahorra cambiando de compañía eléctrica para Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año."
        },
        {
          "question": "¿Qué porcentaje del consumo se debe al agua caliente en Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total."
        },
        {
          "question": "¿Cómo revisar la factura de la luz en Ahorro con Kit Solar de Balcón (Plug-in) para detectar errores?",
          "answer": "Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen."
        },
        {
          "question": "¿Merece la pena un kit solar de balcón para Ahorro con Kit Solar de Balcón (Plug-in)?",
          "answer": "Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura."
        }
      ]
    }
  },
  "ja": {
    "stromverbrauch-1-person": {
      "title": "一人暮らしの電気消費量",
      "category": "世帯別目安",
      "shortDescription": "一人暮らしの電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約1400 kWh、月額約53.33 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "一人暮らしの電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "一人暮らしの電気消費量における年間平均消費電力量は約1400 kWhで、月々の平均電気代は約53.33 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "一人暮らしの電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約53.33 €となります。"
        },
        {
          "question": "一人暮らしの電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "一人暮らしの電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約3.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "2人暮らしの電気消費量",
      "category": "世帯別目安",
      "shortDescription": "2人暮らしの電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約2500 kWh、月額約85.42 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "2人暮らしの電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "2人暮らしの電気消費量における年間平均消費電力量は約2500 kWhで、月々の平均電気代は約85.42 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "2人暮らしの電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約85.42 €となります。"
        },
        {
          "question": "2人暮らしの電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "2人暮らしの電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約6.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "3人家族の電気消費量",
      "category": "世帯別目安",
      "shortDescription": "3人家族の電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3200 kWh、月額約105.83 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "3人家族の電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "3人家族の電気消費量における年間平均消費電力量は約3200 kWhで、月々の平均電気代は約105.83 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "3人家族の電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約105.83 €となります。"
        },
        {
          "question": "3人家族の電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "3人家族の電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "4人家族の電気消費量",
      "category": "世帯別目安",
      "shortDescription": "4人家族の電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3700 kWh、月額約120.42 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "4人家族の電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "4人家族の電気消費量における年間平均消費電力量は約3700 kWhで、月々の平均電気代は約120.42 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "4人家族の電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約120.42 €となります。"
        },
        {
          "question": "4人家族の電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "4人家族の電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約10.1 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "5人以上家族の電気消費量",
      "category": "世帯別目安",
      "shortDescription": "5人以上家族の電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4600 kWh、月額約146.67 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "5人以上家族の電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "5人以上家族の電気消費量における年間平均消費電力量は約4600 kWhで、月々の平均電気代は約146.67 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "5人以上家族の電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約146.67 €となります。"
        },
        {
          "question": "5人以上家族の電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "5人以上家族の電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約12.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "1人あたりの平均電気消費量",
      "category": "世帯別目安",
      "shortDescription": "1人あたりの平均電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約1400 kWh、月額約53.33 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "1人あたりの平均電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "1人あたりの平均電気消費量における年間平均消費電力量は約1400 kWhで、月々の平均電気代は約53.33 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "1人あたりの平均電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約53.33 €となります。"
        },
        {
          "question": "1人あたりの平均電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "1人あたりの平均電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約3.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "マンション・アパートの電気消費量",
      "category": "世帯別目安",
      "shortDescription": "マンション・アパートの電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約2200 kWh、月額約76.67 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "マンション・アパートの電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "マンション・アパートの電気消費量における年間平均消費電力量は約2200 kWhで、月々の平均電気代は約76.67 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "マンション・アパートの電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約76.67 €となります。"
        },
        {
          "question": "マンション・アパートの電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "マンション・アパートの電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約6.0 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "一戸建て住宅の電気消費量",
      "category": "世帯別目安",
      "shortDescription": "一戸建て住宅の電気消費量に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4000 kWh、月額約129.17 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "一戸建て住宅の電気消費量における標準的な年間電力消費量の目安は？",
          "answer": "一戸建て住宅の電気消費量における年間平均消費電力量は約4000 kWhで、月々の平均電気代は約129.17 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "一戸建て住宅の電気消費量の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約129.17 €となります。"
        },
        {
          "question": "一戸建て住宅の電気消費量で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "一戸建て住宅の電気消費量では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約11.0 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "家庭の平均電気消費量ガイド",
      "category": "世帯別目安",
      "shortDescription": "家庭の平均電気消費量ガイドに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3000 kWh、月額約100 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "家庭の平均電気消費量ガイドにおける標準的な年間電力消費量の目安は？",
          "answer": "家庭の平均電気消費量ガイドにおける年間平均消費電力量は約3000 kWhで、月々の平均電気代は約100 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "家庭の平均電気消費量ガイドの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約100 €となります。"
        },
        {
          "question": "家庭の平均電気消費量ガイドで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "家庭の平均電気消費量ガイドでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "最新の電気料金単価 2026",
      "category": "電気料金単価",
      "shortDescription": "最新の電気料金単価 2026に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "最新の電気料金単価 2026における標準的な年間電力消費量の目安は？",
          "answer": "最新の電気料金単価 2026における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "最新の電気料金単価 2026の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "最新の電気料金単価 2026で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "最新の電気料金単価 2026では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "ドイツ・欧州の電気料金相場",
      "category": "電気料金単価",
      "shortDescription": "ドイツ・欧州の電気料金相場に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "ドイツ・欧州の電気料金相場における標準的な年間電力消費量の目安は？",
          "answer": "ドイツ・欧州の電気料金相場における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "ドイツ・欧州の電気料金相場の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "ドイツ・欧州の電気料金相場で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "ドイツ・欧州の電気料金相場では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "1kWhあたりの電気代単価",
      "category": "電気料金単価",
      "shortDescription": "1kWhあたりの電気代単価に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "1kWhあたりの電気代単価における標準的な年間電力消費量の目安は？",
          "answer": "1kWhあたりの電気代単価における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "1kWhあたりの電気代単価の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "1kWhあたりの電気代単価で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "1kWhあたりの電気代単価では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "電気料金の推移と将来予測",
      "category": "電気料金単価",
      "shortDescription": "電気料金の推移と将来予測に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気料金の推移と将来予測における標準的な年間電力消費量の目安は？",
          "answer": "電気料金の推移と将来予測における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気料金の推移と将来予測の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "電気料金の推移と将来予測で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気料金の推移と将来予測では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "電気料金の内訳・構成比率",
      "category": "電気料金単価",
      "shortDescription": "電気料金の内訳・構成比率に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気料金の内訳・構成比率における標準的な年間電力消費量の目安は？",
          "answer": "電気料金の内訳・構成比率における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気料金の内訳・構成比率の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "電気料金の内訳・構成比率で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気料金の内訳・構成比率では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "変動型ダイナミック電力プラン",
      "category": "電気料金単価",
      "shortDescription": "変動型ダイナミック電力プランに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4000 kWh、月額約129.17 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "変動型ダイナミック電力プランにおける標準的な年間電力消費量の目安は？",
          "answer": "変動型ダイナミック電力プランにおける年間平均消費電力量は約4000 kWhで、月々の平均電気代は約129.17 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "変動型ダイナミック電力プランの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約129.17 €となります。"
        },
        {
          "question": "変動型ダイナミック電力プランで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "変動型ダイナミック電力プランでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約11.0 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "電力会社の切り替えで電気代削減",
      "category": "省エネガイド",
      "shortDescription": "電力会社の切り替えで電気代削減に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電力会社の切り替えで電気代削減における標準的な年間電力消費量の目安は？",
          "answer": "電力会社の切り替えで電気代削減における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電力会社の切り替えで電気代削減の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "電力会社の切り替えで電気代削減で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電力会社の切り替えで電気代削減では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "電気料金の明細書・請求書の確認方法",
      "category": "請求書・明細",
      "shortDescription": "電気料金の明細書・請求書の確認方法に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3000 kWh、月額約100 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気料金の明細書・請求書の確認方法における標準的な年間電力消費量の目安は？",
          "answer": "電気料金の明細書・請求書の確認方法における年間平均消費電力量は約3000 kWhで、月々の平均電気代は約100 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気料金の明細書・請求書の確認方法の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約100 €となります。"
        },
        {
          "question": "電気料金の明細書・請求書の確認方法で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気料金の明細書・請求書の確認方法では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "電気代が高すぎる原因と即効対策",
      "category": "請求書・明細",
      "shortDescription": "電気代が高すぎる原因と即効対策に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4500 kWh、月額約143.75 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気代が高すぎる原因と即効対策における標準的な年間電力消費量の目安は？",
          "answer": "電気代が高すぎる原因と即効対策における年間平均消費電力量は約4500 kWhで、月々の平均電気代は約143.75 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気代が高すぎる原因と即効対策の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約143.75 €となります。"
        },
        {
          "question": "電気代が高すぎる原因と即効対策で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気代が高すぎる原因と即効対策では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約12.3 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "電気代を今すぐ安くする節電テクニック",
      "category": "請求書・明細",
      "shortDescription": "電気代を今すぐ安くする節電テクニックに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3000 kWh、月額約100 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気代を今すぐ安くする節電テクニックにおける標準的な年間電力消費量の目安は？",
          "answer": "電気代を今すぐ安くする節電テクニックにおける年間平均消費電力量は約3000 kWhで、月々の平均電気代は約100 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気代を今すぐ安くする節電テクニックの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約100 €となります。"
        },
        {
          "question": "電気代を今すぐ安くする節電テクニックで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気代を今すぐ安くする節電テクニックでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "月々の電気代を自分で計算するシミュレーター",
      "category": "請求書・明細",
      "shortDescription": "月々の電気代を自分で計算するシミュレーターに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3000 kWh、月額約100 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "月々の電気代を自分で計算するシミュレーターにおける標準的な年間電力消費量の目安は？",
          "answer": "月々の電気代を自分で計算するシミュレーターにおける年間平均消費電力量は約3000 kWhで、月々の平均電気代は約100 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "月々の電気代を自分で計算するシミュレーターの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約100 €となります。"
        },
        {
          "question": "月々の電気代を自分で計算するシミュレーターで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "月々の電気代を自分で計算するシミュレーターでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "電気料金請求書の見本と項目解説",
      "category": "請求書・明細",
      "shortDescription": "電気料金請求書の見本と項目解説に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3000 kWh、月額約100 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気料金請求書の見本と項目解説における標準的な年間電力消費量の目安は？",
          "answer": "電気料金請求書の見本と項目解説における年間平均消費電力量は約3000 kWhで、月々の平均電気代は約100 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気料金請求書の見本と項目解説の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約100 €となります。"
        },
        {
          "question": "電気料金請求書の見本と項目解説で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気料金請求書の見本と項目解説では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "今すぐできる節電対策・省エネ術20選",
      "category": "省エネガイド",
      "shortDescription": "今すぐできる節電対策・省エネ術20選に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3000 kWh、月額約100 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "今すぐできる節電対策・省エネ術20選における標準的な年間電力消費量の目安は？",
          "answer": "今すぐできる節電対策・省エネ術20選における年間平均消費電力量は約3000 kWhで、月々の平均電気代は約100 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "今すぐできる節電対策・省エネ術20選の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約100 €となります。"
        },
        {
          "question": "今すぐできる節電対策・省エネ術20選で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "今すぐできる節電対策・省エネ術20選では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約8.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "stromfresser": {
      "title": "家の中の隠れ電気食い虫家電ランキング",
      "category": "省エネガイド",
      "shortDescription": "家の中の隠れ電気食い虫家電ランキングに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4000 kWh、月額約129.17 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "家の中の隠れ電気食い虫家電ランキングにおける標準的な年間電力消費量の目安は？",
          "answer": "家の中の隠れ電気食い虫家電ランキングにおける年間平均消費電力量は約4000 kWhで、月々の平均電気代は約129.17 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "家の中の隠れ電気食い虫家電ランキングの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約129.17 €となります。"
        },
        {
          "question": "家の中の隠れ電気食い虫家電ランキングで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "家の中の隠れ電気食い虫家電ランキングでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約11.0 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "standby-strom": {
      "title": "待機電力の計算と無駄な電気代削減",
      "category": "省エネガイド",
      "shortDescription": "待機電力の計算と無駄な電気代削減に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約300 kWh、月額約8.75 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "待機電力の計算と無駄な電気代削減における標準的な年間電力消費量の目安は？",
          "answer": "待機電力の計算と無駄な電気代削減における年間平均消費電力量は約300 kWhで、月々の平均電気代は約8.75 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "待機電力の計算と無駄な電気代削減の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約8.75 €となります。"
        },
        {
          "question": "待機電力の計算と無駄な電気代削減で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "待機電力の計算と無駄な電気代削減では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約0.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "電気自動車（EV）の充電電気代シミュレーター",
      "category": "再エネ・EV",
      "shortDescription": "電気自動車（EV）の充電電気代シミュレーターに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約2500 kWh、月額約72.92 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "電気自動車（EV）の充電電気代シミュレーターにおける標準的な年間電力消費量の目安は？",
          "answer": "電気自動車（EV）の充電電気代シミュレーターにおける年間平均消費電力量は約2500 kWhで、月々の平均電気代は約72.92 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "電気自動車（EV）の充電電気代シミュレーターの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約72.92 €となります。"
        },
        {
          "question": "電気自動車（EV）の充電電気代シミュレーターで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "電気自動車（EV）の充電電気代シミュレーターでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約6.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "EV充電コスト計算機（自宅・急速充電）",
      "category": "再エネ・EV",
      "shortDescription": "EV充電コスト計算機（自宅・急速充電）に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約2500 kWh、月額約72.92 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "EV充電コスト計算機（自宅・急速充電）における標準的な年間電力消費量の目安は？",
          "answer": "EV充電コスト計算機（自宅・急速充電）における年間平均消費電力量は約2500 kWhで、月々の平均電気代は約72.92 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "EV充電コスト計算機（自宅・急速充電）の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約72.92 €となります。"
        },
        {
          "question": "EV充電コスト計算機（自宅・急速充電）で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "EV充電コスト計算機（自宅・急速充電）では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約6.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "EVの走行100kmあたりの電気代",
      "category": "再エネ・EV",
      "shortDescription": "EVの走行100kmあたりの電気代に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約2500 kWh、月額約72.92 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "EVの走行100kmあたりの電気代における標準的な年間電力消費量の目安は？",
          "answer": "EVの走行100kmあたりの電気代における年間平均消費電力量は約2500 kWhで、月々の平均電気代は約72.92 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "EVの走行100kmあたりの電気代の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約72.92 €となります。"
        },
        {
          "question": "EVの走行100kmあたりの電気代で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "EVの走行100kmあたりの電気代では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約6.8 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "ヒートポンプ式給湯・暖房の消費電力計算",
      "category": "再エネ・EV",
      "shortDescription": "ヒートポンプ式給湯・暖房の消費電力計算に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4500 kWh、月額約131.25 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "ヒートポンプ式給湯・暖房の消費電力計算における標準的な年間電力消費量の目安は？",
          "answer": "ヒートポンプ式給湯・暖房の消費電力計算における年間平均消費電力量は約4500 kWhで、月々の平均電気代は約131.25 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "ヒートポンプ式給湯・暖房の消費電力計算の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約131.25 €となります。"
        },
        {
          "question": "ヒートポンプ式給湯・暖房の消費電力計算で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "ヒートポンプ式給湯・暖房の消費電力計算では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約12.3 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "ヒートポンプ暖房の年間電気代シミュレーター",
      "category": "再エネ・EV",
      "shortDescription": "ヒートポンプ暖房の年間電気代シミュレーターに関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4500 kWh、月額約131.25 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "ヒートポンプ暖房の年間電気代シミュレーターにおける標準的な年間電力消費量の目安は？",
          "answer": "ヒートポンプ暖房の年間電気代シミュレーターにおける年間平均消費電力量は約4500 kWhで、月々の平均電気代は約131.25 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "ヒートポンプ暖房の年間電気代シミュレーターの月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約131.25 €となります。"
        },
        {
          "question": "ヒートポンプ暖房の年間電気代シミュレーターで電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "ヒートポンプ暖房の年間電気代シミュレーターでは1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約12.3 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "ヒートポンプ消費電力＆電気代計算機",
      "category": "再エネ・EV",
      "shortDescription": "ヒートポンプ消費電力＆電気代計算機に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約4500 kWh、月額約131.25 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "ヒートポンプ消費電力＆電気代計算機における標準的な年間電力消費量の目安は？",
          "answer": "ヒートポンプ消費電力＆電気代計算機における年間平均消費電力量は約4500 kWhで、月々の平均電気代は約131.25 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "ヒートポンプ消費電力＆電気代計算機の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約131.25 €となります。"
        },
        {
          "question": "ヒートポンプ消費電力＆電気代計算機で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "ヒートポンプ消費電力＆電気代計算機では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約12.3 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "太陽光発電自家消費率＆電気代削減計算機",
      "category": "再エネ・EV",
      "shortDescription": "太陽光発電自家消費率＆電気代削減計算機に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約3500 kWh、月額約114.58 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "太陽光発電自家消費率＆電気代削減計算機における標準的な年間電力消費量の目安は？",
          "answer": "太陽光発電自家消費率＆電気代削減計算機における年間平均消費電力量は約3500 kWhで、月々の平均電気代は約114.58 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "太陽光発電自家消費率＆電気代削減計算機の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約114.58 €となります。"
        },
        {
          "question": "太陽光発電自家消費率＆電気代削減計算機で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "太陽光発電自家消費率＆電気代削減計算機では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約9.6 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "ベランダ太陽光発電（プラグインソーラー）節約計算",
      "category": "再エネ・EV",
      "shortDescription": "ベランダ太陽光発電（プラグインソーラー）節約計算に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約800 kWh、月額約23.33 €）を確認し、無駄な電気代を確実に削減します。",
      "savingAdvice": [
        "スイッチ付き節電タップで待機電力を100%カットする。",
        "洗濯機や食洗機はまとめ洗いでエコモードを活用する。",
        "冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。",
        "電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。",
        "照明をすべて高効率なLED照明器具へ交換する。"
      ],
      "faq": [
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）節約計算における標準的な年間電力消費量の目安は？",
          "answer": "ベランダ太陽光発電（プラグインソーラー）節約計算における年間平均消費電力量は約800 kWhで、月々の平均電気代は約23.33 €（約7,500〜9,000円）が目安です。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）節約計算の月額電気料金の正確な計算式は？",
          "answer": "計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約23.33 €となります。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）節約計算で電気代が跳ね上がる最大の原因は何ですか？",
          "answer": "電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）節約計算では1日あたり何kWhの電気を消費しますか？",
          "answer": "1日あたりの平均消費電力量は約2.2 kWhとなります。"
        },
        {
          "question": "同じ条件なのに電気代が平均より高くなる理由は？",
          "answer": "高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。"
        },
        {
          "question": "電気代を今すぐ15〜25%カットする最も効果的な方法は？",
          "answer": "節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。"
        },
        {
          "question": "電力会社の乗り換え比較で年間いくら節約できますか？",
          "answer": "従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。"
        },
        {
          "question": "給湯（お湯）にかかる電気代の割合は全体のどれくらい？",
          "answer": "電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。"
        },
        {
          "question": "電気料金の請求書・明細書で確認すべき重要ポイントは？",
          "answer": "検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。"
        },
        {
          "question": "ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？",
          "answer": "はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。"
        }
      ]
    }
  },
  "fr": {
    "stromverbrauch-1-person": {
      "title": "Consommation électrique 1 personne",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique 1 personne. Estimez vos besoins énergétiques moyens (~1400 kWh/an, ~53.33 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique 1 personne ?",
          "answer": "Pour Consommation électrique 1 personne, la consommation annuelle moyenne est d'environ 1400 kWh par an, soit un coût mensuel moyen de 53.33 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique 1 personne ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 53.33 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique 1 personne ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique 1 personne ?",
          "answer": "La consommation moyenne quotidienne est d'environ 3,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique 1 personne ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique 1 personne ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique 1 personne ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique 1 personne ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique 1 personne ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique 1 personne ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "Consommation électrique 2 personnes",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique 2 personnes. Estimez vos besoins énergétiques moyens (~2500 kWh/an, ~85.42 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique 2 personnes ?",
          "answer": "Pour Consommation électrique 2 personnes, la consommation annuelle moyenne est d'environ 2500 kWh par an, soit un coût mensuel moyen de 85.42 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique 2 personnes ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 85.42 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique 2 personnes ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique 2 personnes ?",
          "answer": "La consommation moyenne quotidienne est d'environ 6,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique 2 personnes ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique 2 personnes ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique 2 personnes ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique 2 personnes ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique 2 personnes ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique 2 personnes ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "Consommation électrique 3 personnes",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique 3 personnes. Estimez vos besoins énergétiques moyens (~3200 kWh/an, ~105.83 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique 3 personnes ?",
          "answer": "Pour Consommation électrique 3 personnes, la consommation annuelle moyenne est d'environ 3200 kWh par an, soit un coût mensuel moyen de 105.83 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique 3 personnes ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 105.83 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique 3 personnes ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique 3 personnes ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique 3 personnes ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique 3 personnes ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique 3 personnes ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique 3 personnes ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique 3 personnes ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique 3 personnes ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "Consommation électrique 4 personnes",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique 4 personnes. Estimez vos besoins énergétiques moyens (~3700 kWh/an, ~120.42 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique 4 personnes ?",
          "answer": "Pour Consommation électrique 4 personnes, la consommation annuelle moyenne est d'environ 3700 kWh par an, soit un coût mensuel moyen de 120.42 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique 4 personnes ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 120.42 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique 4 personnes ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique 4 personnes ?",
          "answer": "La consommation moyenne quotidienne est d'environ 10,1 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique 4 personnes ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique 4 personnes ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique 4 personnes ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique 4 personnes ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique 4 personnes ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique 4 personnes ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "Consommation électrique 5+ personnes",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique 5+ personnes. Estimez vos besoins énergétiques moyens (~4600 kWh/an, ~146.67 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique 5+ personnes ?",
          "answer": "Pour Consommation électrique 5+ personnes, la consommation annuelle moyenne est d'environ 4600 kWh par an, soit un coût mensuel moyen de 146.67 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique 5+ personnes ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 146.67 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique 5+ personnes ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique 5+ personnes ?",
          "answer": "La consommation moyenne quotidienne est d'environ 12,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique 5+ personnes ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique 5+ personnes ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique 5+ personnes ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique 5+ personnes ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique 5+ personnes ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique 5+ personnes ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "Consommation électrique par personne",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique par personne. Estimez vos besoins énergétiques moyens (~1400 kWh/an, ~53.33 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique par personne ?",
          "answer": "Pour Consommation électrique par personne, la consommation annuelle moyenne est d'environ 1400 kWh par an, soit un coût mensuel moyen de 53.33 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique par personne ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 53.33 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique par personne ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique par personne ?",
          "answer": "La consommation moyenne quotidienne est d'environ 3,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique par personne ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique par personne ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique par personne ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique par personne ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique par personne ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique par personne ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "Consommation électrique en appartement",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique en appartement. Estimez vos besoins énergétiques moyens (~2200 kWh/an, ~76.67 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique en appartement ?",
          "answer": "Pour Consommation électrique en appartement, la consommation annuelle moyenne est d'environ 2200 kWh par an, soit un coût mensuel moyen de 76.67 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique en appartement ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 76.67 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique en appartement ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique en appartement ?",
          "answer": "La consommation moyenne quotidienne est d'environ 6,0 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique en appartement ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique en appartement ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique en appartement ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique en appartement ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique en appartement ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique en appartement ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "Consommation électrique en maison individuelle",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique en maison individuelle. Estimez vos besoins énergétiques moyens (~4000 kWh/an, ~129.17 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique en maison individuelle ?",
          "answer": "Pour Consommation électrique en maison individuelle, la consommation annuelle moyenne est d'environ 4000 kWh par an, soit un coût mensuel moyen de 129.17 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique en maison individuelle ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 129.17 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique en maison individuelle ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique en maison individuelle ?",
          "answer": "La consommation moyenne quotidienne est d'environ 11,0 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique en maison individuelle ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique en maison individuelle ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique en maison individuelle ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique en maison individuelle ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique en maison individuelle ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique en maison individuelle ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "Consommation électrique moyenne d'un foyer",
      "category": "Foyer",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique moyenne d'un foyer. Estimez vos besoins énergétiques moyens (~3000 kWh/an, ~100 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique moyenne d'un foyer ?",
          "answer": "Pour Consommation électrique moyenne d'un foyer, la consommation annuelle moyenne est d'environ 3000 kWh par an, soit un coût mensuel moyen de 100 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique moyenne d'un foyer ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 100 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique moyenne d'un foyer ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique moyenne d'un foyer ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique moyenne d'un foyer ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique moyenne d'un foyer ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique moyenne d'un foyer ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique moyenne d'un foyer ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique moyenne d'un foyer ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique moyenne d'un foyer ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "Prix actuel de l'électricité 2026",
      "category": "Tarifs d'électricité",
      "shortDescription": "Guide complet et simulateur de calcul pour Prix actuel de l'électricité 2026. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Prix actuel de l'électricité 2026 ?",
          "answer": "Pour Prix actuel de l'électricité 2026, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Prix actuel de l'électricité 2026 ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Prix actuel de l'électricité 2026 ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Prix actuel de l'électricité 2026 ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Prix actuel de l'électricité 2026 ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Prix actuel de l'électricité 2026 ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Prix actuel de l'électricité 2026 ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Prix actuel de l'électricité 2026 ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Prix actuel de l'électricité 2026 ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Prix actuel de l'électricité 2026 ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "Tarifs de l'électricité en Europe",
      "category": "Tarifs d'électricité",
      "shortDescription": "Guide complet et simulateur de calcul pour Tarifs de l'électricité en Europe. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Tarifs de l'électricité en Europe ?",
          "answer": "Pour Tarifs de l'électricité en Europe, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Tarifs de l'électricité en Europe ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Tarifs de l'électricité en Europe ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Tarifs de l'électricité en Europe ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Tarifs de l'électricité en Europe ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Tarifs de l'électricité en Europe ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Tarifs de l'électricité en Europe ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Tarifs de l'électricité en Europe ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Tarifs de l'électricité en Europe ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Tarifs de l'électricité en Europe ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "Prix du kWh d'électricité",
      "category": "Tarifs d'électricité",
      "shortDescription": "Guide complet et simulateur de calcul pour Prix du kWh d'électricité. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Prix du kWh d'électricité ?",
          "answer": "Pour Prix du kWh d'électricité, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Prix du kWh d'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Prix du kWh d'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Prix du kWh d'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Prix du kWh d'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Prix du kWh d'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Prix du kWh d'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Prix du kWh d'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Prix du kWh d'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Prix du kWh d'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "Évolution et prévisions des prix de l'électricité",
      "category": "Tarifs d'électricité",
      "shortDescription": "Guide complet et simulateur de calcul pour Évolution et prévisions des prix de l'électricité. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "Pour Évolution et prévisions des prix de l'électricité, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Évolution et prévisions des prix de l'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Évolution et prévisions des prix de l'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "Composition du tarif de l'électricité",
      "category": "Tarifs d'électricité",
      "shortDescription": "Guide complet et simulateur de calcul pour Composition du tarif de l'électricité. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Composition du tarif de l'électricité ?",
          "answer": "Pour Composition du tarif de l'électricité, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Composition du tarif de l'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Composition du tarif de l'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Composition du tarif de l'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Composition du tarif de l'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Composition du tarif de l'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Composition du tarif de l'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Composition du tarif de l'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Composition du tarif de l'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Composition du tarif de l'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "Tarifs dynamiques de l'électricité",
      "category": "Tarifs d'électricité",
      "shortDescription": "Guide complet et simulateur de calcul pour Tarifs dynamiques de l'électricité. Estimez vos besoins énergétiques moyens (~4000 kWh/an, ~129.17 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Tarifs dynamiques de l'électricité ?",
          "answer": "Pour Tarifs dynamiques de l'électricité, la consommation annuelle moyenne est d'environ 4000 kWh par an, soit un coût mensuel moyen de 129.17 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Tarifs dynamiques de l'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 129.17 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Tarifs dynamiques de l'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Tarifs dynamiques de l'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 11,0 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Tarifs dynamiques de l'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Tarifs dynamiques de l'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Tarifs dynamiques de l'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Tarifs dynamiques de l'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Tarifs dynamiques de l'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Tarifs dynamiques de l'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "Changer de fournisseur d'électricité",
      "category": "Guide Éco",
      "shortDescription": "Guide complet et simulateur de calcul pour Changer de fournisseur d'électricité. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Changer de fournisseur d'électricité ?",
          "answer": "Pour Changer de fournisseur d'électricité, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Changer de fournisseur d'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Changer de fournisseur d'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Changer de fournisseur d'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Changer de fournisseur d'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Changer de fournisseur d'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Changer de fournisseur d'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Changer de fournisseur d'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Changer de fournisseur d'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Changer de fournisseur d'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "Vérifier sa facture d'électricité",
      "category": "Facture",
      "shortDescription": "Guide complet et simulateur de calcul pour Vérifier sa facture d'électricité. Estimez vos besoins énergétiques moyens (~3000 kWh/an, ~100 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Vérifier sa facture d'électricité ?",
          "answer": "Pour Vérifier sa facture d'électricité, la consommation annuelle moyenne est d'environ 3000 kWh par an, soit un coût mensuel moyen de 100 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Vérifier sa facture d'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 100 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Vérifier sa facture d'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Vérifier sa facture d'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Vérifier sa facture d'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Vérifier sa facture d'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Vérifier sa facture d'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Vérifier sa facture d'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Vérifier sa facture d'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Vérifier sa facture d'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "Facture d'électricité trop élevée ? Solutions",
      "category": "Facture",
      "shortDescription": "Guide complet et simulateur de calcul pour Facture d'électricité trop élevée ? Solutions. Estimez vos besoins énergétiques moyens (~4500 kWh/an, ~143.75 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "Pour Facture d'électricité trop élevée ? Solutions, la consommation annuelle moyenne est d'environ 4500 kWh par an, soit un coût mensuel moyen de 143.75 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 143.75 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "La consommation moyenne quotidienne est d'environ 12,3 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Facture d'électricité trop élevée ? Solutions ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Facture d'électricité trop élevée ? Solutions ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "Réduire sa facture d'électricité rapidement",
      "category": "Facture",
      "shortDescription": "Guide complet et simulateur de calcul pour Réduire sa facture d'électricité rapidement. Estimez vos besoins énergétiques moyens (~3000 kWh/an, ~100 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Réduire sa facture d'électricité rapidement ?",
          "answer": "Pour Réduire sa facture d'électricité rapidement, la consommation annuelle moyenne est d'environ 3000 kWh par an, soit un coût mensuel moyen de 100 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Réduire sa facture d'électricité rapidement ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 100 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Réduire sa facture d'électricité rapidement ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Réduire sa facture d'électricité rapidement ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Réduire sa facture d'électricité rapidement ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Réduire sa facture d'électricité rapidement ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Réduire sa facture d'électricité rapidement ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Réduire sa facture d'électricité rapidement ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Réduire sa facture d'électricité rapidement ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Réduire sa facture d'électricité rapidement ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "Calculer sa facture d'électricité",
      "category": "Facture",
      "shortDescription": "Guide complet et simulateur de calcul pour Calculer sa facture d'électricité. Estimez vos besoins énergétiques moyens (~3000 kWh/an, ~100 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Calculer sa facture d'électricité ?",
          "answer": "Pour Calculer sa facture d'électricité, la consommation annuelle moyenne est d'environ 3000 kWh par an, soit un coût mensuel moyen de 100 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Calculer sa facture d'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 100 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Calculer sa facture d'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Calculer sa facture d'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Calculer sa facture d'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Calculer sa facture d'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Calculer sa facture d'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Calculer sa facture d'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Calculer sa facture d'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Calculer sa facture d'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "Exemple et explication d'une facture d'électricité",
      "category": "Facture",
      "shortDescription": "Guide complet et simulateur de calcul pour Exemple et explication d'une facture d'électricité. Estimez vos besoins énergétiques moyens (~3000 kWh/an, ~100 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Exemple et explication d'une facture d'électricité ?",
          "answer": "Pour Exemple et explication d'une facture d'électricité, la consommation annuelle moyenne est d'environ 3000 kWh par an, soit un coût mensuel moyen de 100 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Exemple et explication d'une facture d'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 100 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Exemple et explication d'une facture d'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Exemple et explication d'une facture d'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Exemple et explication d'une facture d'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Exemple et explication d'une facture d'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Exemple et explication d'une facture d'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Exemple et explication d'une facture d'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Exemple et explication d'une facture d'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Exemple et explication d'une facture d'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "Les 20 meilleurs conseils pour économiser l'électricité",
      "category": "Guide Éco",
      "shortDescription": "Guide complet et simulateur de calcul pour Les 20 meilleurs conseils pour économiser l'électricité. Estimez vos besoins énergétiques moyens (~3000 kWh/an, ~100 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "Pour Les 20 meilleurs conseils pour économiser l'électricité, la consommation annuelle moyenne est d'environ 3000 kWh par an, soit un coût mensuel moyen de 100 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 100 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "La consommation moyenne quotidienne est d'environ 8,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Les 20 meilleurs conseils pour économiser l'électricité ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "stromfresser": {
      "title": "Détecter les appareils les plus énergivores",
      "category": "Guide Éco",
      "shortDescription": "Guide complet et simulateur de calcul pour Détecter les appareils les plus énergivores. Estimez vos besoins énergétiques moyens (~4000 kWh/an, ~129.17 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Détecter les appareils les plus énergivores ?",
          "answer": "Pour Détecter les appareils les plus énergivores, la consommation annuelle moyenne est d'environ 4000 kWh par an, soit un coût mensuel moyen de 129.17 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Détecter les appareils les plus énergivores ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 129.17 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Détecter les appareils les plus énergivores ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Détecter les appareils les plus énergivores ?",
          "answer": "La consommation moyenne quotidienne est d'environ 11,0 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Détecter les appareils les plus énergivores ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Détecter les appareils les plus énergivores ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Détecter les appareils les plus énergivores ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Détecter les appareils les plus énergivores ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Détecter les appareils les plus énergivores ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Détecter les appareils les plus énergivores ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "standby-strom": {
      "title": "Calculer et réduire la consommation de veille",
      "category": "Guide Éco",
      "shortDescription": "Guide complet et simulateur de calcul pour Calculer et réduire la consommation de veille. Estimez vos besoins énergétiques moyens (~300 kWh/an, ~8.75 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Calculer et réduire la consommation de veille ?",
          "answer": "Pour Calculer et réduire la consommation de veille, la consommation annuelle moyenne est d'environ 300 kWh par an, soit un coût mensuel moyen de 8.75 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Calculer et réduire la consommation de veille ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 8.75 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Calculer et réduire la consommation de veille ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Calculer et réduire la consommation de veille ?",
          "answer": "La consommation moyenne quotidienne est d'environ 0,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Calculer et réduire la consommation de veille ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Calculer et réduire la consommation de veille ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Calculer et réduire la consommation de veille ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Calculer et réduire la consommation de veille ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Calculer et réduire la consommation de veille ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Calculer et réduire la consommation de veille ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "Coût de l'électricité pour voiture électrique (VE)",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Coût de l'électricité pour voiture électrique (VE). Estimez vos besoins énergétiques moyens (~2500 kWh/an, ~72.92 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "Pour Coût de l'électricité pour voiture électrique (VE), la consommation annuelle moyenne est d'environ 2500 kWh par an, soit un coût mensuel moyen de 72.92 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 72.92 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "La consommation moyenne quotidienne est d'environ 6,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Coût de l'électricité pour voiture électrique (VE) ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "Calculateur de coût de recharge pour véhicule électrique",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Calculateur de coût de recharge pour véhicule électrique. Estimez vos besoins énergétiques moyens (~2500 kWh/an, ~72.92 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "Pour Calculateur de coût de recharge pour véhicule électrique, la consommation annuelle moyenne est d'environ 2500 kWh par an, soit un coût mensuel moyen de 72.92 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 72.92 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "La consommation moyenne quotidienne est d'environ 6,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Calculateur de coût de recharge pour véhicule électrique ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "Coût en électricité par 100 km en voiture électrique",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Coût en électricité par 100 km en voiture électrique. Estimez vos besoins énergétiques moyens (~2500 kWh/an, ~72.92 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "Pour Coût en électricité par 100 km en voiture électrique, la consommation annuelle moyenne est d'environ 2500 kWh par an, soit un coût mensuel moyen de 72.92 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 72.92 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "La consommation moyenne quotidienne est d'environ 6,8 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Coût en électricité par 100 km en voiture électrique ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Coût en électricité par 100 km en voiture électrique ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "Consommation électrique d'une pompe à chaleur (PAC)",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Consommation électrique d'une pompe à chaleur (PAC). Estimez vos besoins énergétiques moyens (~4500 kWh/an, ~131.25 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "Pour Consommation électrique d'une pompe à chaleur (PAC), la consommation annuelle moyenne est d'environ 4500 kWh par an, soit un coût mensuel moyen de 131.25 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 131.25 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "La consommation moyenne quotidienne est d'environ 12,3 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Consommation électrique d'une pompe à chaleur (PAC) ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "Coût de l'électricité pour pompe à chaleur",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Coût de l'électricité pour pompe à chaleur. Estimez vos besoins énergétiques moyens (~4500 kWh/an, ~131.25 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "Pour Coût de l'électricité pour pompe à chaleur, la consommation annuelle moyenne est d'environ 4500 kWh par an, soit un coût mensuel moyen de 131.25 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 131.25 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "La consommation moyenne quotidienne est d'environ 12,3 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Coût de l'électricité pour pompe à chaleur ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Coût de l'électricité pour pompe à chaleur ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "Calculateur de consommation pour pompe à chaleur",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Calculateur de consommation pour pompe à chaleur. Estimez vos besoins énergétiques moyens (~4500 kWh/an, ~131.25 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "Pour Calculateur de consommation pour pompe à chaleur, la consommation annuelle moyenne est d'environ 4500 kWh par an, soit un coût mensuel moyen de 131.25 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 131.25 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "La consommation moyenne quotidienne est d'environ 12,3 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Calculateur de consommation pour pompe à chaleur ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Calculateur de consommation pour pompe à chaleur ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "Calculateur d'autoconsommation solaire photovoltaïque",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Calculateur d'autoconsommation solaire photovoltaïque. Estimez vos besoins énergétiques moyens (~3500 kWh/an, ~114.58 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "Pour Calculateur d'autoconsommation solaire photovoltaïque, la consommation annuelle moyenne est d'environ 3500 kWh par an, soit un coût mensuel moyen de 114.58 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 114.58 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "La consommation moyenne quotidienne est d'environ 9,6 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Calculateur d'autoconsommation solaire photovoltaïque ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "Économies avec un kit solaire de balcon prêt à brancher",
      "category": "Énergie Verte",
      "shortDescription": "Guide complet et simulateur de calcul pour Économies avec un kit solaire de balcon prêt à brancher. Estimez vos besoins énergétiques moyens (~800 kWh/an, ~23.33 €/mois) et diminuez vos factures.",
      "savingAdvice": [
        "Supprimer les veilles grâce à des multiprises coupe-veille.",
        "Utiliser systématiquement les programmes Éco sur les appareils de lavage.",
        "Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.",
        "Comparer les offres d'électricité pour trouver le tarif au kWh le plus avantageux.",
        "Équiper l'ensemble du logement d'ampoules LED performantes."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation moyenne de référence pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "Pour Économies avec un kit solaire de balcon prêt à brancher, la consommation annuelle moyenne est d'environ 800 kWh par an, soit un coût mensuel moyen de 23.33 €."
        },
        {
          "question": "Comment calculer le coût mensuel de l'électricité pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ 23.33 € par mois."
        },
        {
          "question": "Quels facteurs influencent le plus la facture d'électricité pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite."
        },
        {
          "question": "Combien de kWh consomme-t-on en moyenne par jour pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "La consommation moyenne quotidienne est d'environ 2,2 kWh par jour."
        },
        {
          "question": "Pourquoi certains foyers consomment-ils le double pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés."
        },
        {
          "question": "Comment réduire immédiatement sa consommation de 15 à 25 % pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C."
        },
        {
          "question": "Combien économise-t-on en changeant de fournisseur pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année."
        },
        {
          "question": "Quelle part représente l'eau chaude dans la consommation de Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement."
        },
        {
          "question": "Comment vérifier sa facture annuelle pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités."
        },
        {
          "question": "Un kit solaire de balcon est-il rentable pour Économies avec un kit solaire de balcon prêt à brancher ?",
          "answer": "Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an."
        }
      ]
    }
  },
  "pt": {
    "stromverbrauch-1-person": {
      "title": "Consumo de eletricidade 1 pessoa",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade 1 pessoa. Calcule consumos de referência (~1400 kWh/ano, ~53.33 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade 1 pessoa?",
          "answer": "Para Consumo de eletricidade 1 pessoa, o consumo médio anual ronda os 1400 kWh por ano, correspondendo a uma despesa mensal de cerca de 53.33 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade 1 pessoa?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 53.33 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade 1 pessoa?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade 1 pessoa?",
          "answer": "O consumo médio diário situa-se em cerca de 3,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade 1 pessoa?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade 1 pessoa?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade 1 pessoa?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade 1 pessoa?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade 1 pessoa?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade 1 pessoa?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "Consumo de eletricidade 2 pessoas",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade 2 pessoas. Calcule consumos de referência (~2500 kWh/ano, ~85.42 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade 2 pessoas?",
          "answer": "Para Consumo de eletricidade 2 pessoas, o consumo médio anual ronda os 2500 kWh por ano, correspondendo a uma despesa mensal de cerca de 85.42 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade 2 pessoas?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 85.42 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade 2 pessoas?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade 2 pessoas?",
          "answer": "O consumo médio diário situa-se em cerca de 6,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade 2 pessoas?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade 2 pessoas?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade 2 pessoas?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade 2 pessoas?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade 2 pessoas?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade 2 pessoas?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "Consumo de eletricidade 3 pessoas",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade 3 pessoas. Calcule consumos de referência (~3200 kWh/ano, ~105.83 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade 3 pessoas?",
          "answer": "Para Consumo de eletricidade 3 pessoas, o consumo médio anual ronda os 3200 kWh por ano, correspondendo a uma despesa mensal de cerca de 105.83 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade 3 pessoas?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 105.83 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade 3 pessoas?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade 3 pessoas?",
          "answer": "O consumo médio diário situa-se em cerca de 8,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade 3 pessoas?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade 3 pessoas?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade 3 pessoas?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade 3 pessoas?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade 3 pessoas?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade 3 pessoas?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "Consumo de eletricidade 4 pessoas",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade 4 pessoas. Calcule consumos de referência (~3700 kWh/ano, ~120.42 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade 4 pessoas?",
          "answer": "Para Consumo de eletricidade 4 pessoas, o consumo médio anual ronda os 3700 kWh por ano, correspondendo a uma despesa mensal de cerca de 120.42 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade 4 pessoas?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 120.42 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade 4 pessoas?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade 4 pessoas?",
          "answer": "O consumo médio diário situa-se em cerca de 10,1 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade 4 pessoas?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade 4 pessoas?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade 4 pessoas?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade 4 pessoas?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade 4 pessoas?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade 4 pessoas?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "Consumo de eletricidade 5+ pessoas",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade 5+ pessoas. Calcule consumos de referência (~4600 kWh/ano, ~146.67 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade 5+ pessoas?",
          "answer": "Para Consumo de eletricidade 5+ pessoas, o consumo médio anual ronda os 4600 kWh por ano, correspondendo a uma despesa mensal de cerca de 146.67 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade 5+ pessoas?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 146.67 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade 5+ pessoas?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade 5+ pessoas?",
          "answer": "O consumo médio diário situa-se em cerca de 12,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade 5+ pessoas?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade 5+ pessoas?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade 5+ pessoas?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade 5+ pessoas?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade 5+ pessoas?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade 5+ pessoas?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "Consumo de eletricidade por pessoa",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade por pessoa. Calcule consumos de referência (~1400 kWh/ano, ~53.33 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade por pessoa?",
          "answer": "Para Consumo de eletricidade por pessoa, o consumo médio anual ronda os 1400 kWh por ano, correspondendo a uma despesa mensal de cerca de 53.33 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade por pessoa?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 53.33 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade por pessoa?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade por pessoa?",
          "answer": "O consumo médio diário situa-se em cerca de 3,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade por pessoa?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade por pessoa?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade por pessoa?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade por pessoa?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade por pessoa?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade por pessoa?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "Consumo de eletricidade em apartamento",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade em apartamento. Calcule consumos de referência (~2200 kWh/ano, ~76.67 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade em apartamento?",
          "answer": "Para Consumo de eletricidade em apartamento, o consumo médio anual ronda os 2200 kWh por ano, correspondendo a uma despesa mensal de cerca de 76.67 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade em apartamento?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 76.67 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade em apartamento?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade em apartamento?",
          "answer": "O consumo médio diário situa-se em cerca de 6,0 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade em apartamento?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade em apartamento?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade em apartamento?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade em apartamento?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade em apartamento?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade em apartamento?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "Consumo de eletricidade em moradia",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade em moradia. Calcule consumos de referência (~4000 kWh/ano, ~129.17 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade em moradia?",
          "answer": "Para Consumo de eletricidade em moradia, o consumo médio anual ronda os 4000 kWh por ano, correspondendo a uma despesa mensal de cerca de 129.17 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade em moradia?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 129.17 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade em moradia?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade em moradia?",
          "answer": "O consumo médio diário situa-se em cerca de 11,0 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade em moradia?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade em moradia?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade em moradia?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade em moradia?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade em moradia?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade em moradia?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "Consumo médio de eletricidade doméstico",
      "category": "Habitação",
      "shortDescription": "Guia detalhado e simulador para Consumo médio de eletricidade doméstico. Calcule consumos de referência (~3000 kWh/ano, ~100 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo médio de eletricidade doméstico?",
          "answer": "Para Consumo médio de eletricidade doméstico, o consumo médio anual ronda os 3000 kWh por ano, correspondendo a uma despesa mensal de cerca de 100 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo médio de eletricidade doméstico?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 100 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo médio de eletricidade doméstico?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo médio de eletricidade doméstico?",
          "answer": "O consumo médio diário situa-se em cerca de 8,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo médio de eletricidade doméstico?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo médio de eletricidade doméstico?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo médio de eletricidade doméstico?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo médio de eletricidade doméstico?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo médio de eletricidade doméstico?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo médio de eletricidade doméstico?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "Tarifa atual de eletricidade 2026",
      "category": "Tarifas de Luz",
      "shortDescription": "Guia detalhado e simulador para Tarifa atual de eletricidade 2026. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Tarifa atual de eletricidade 2026?",
          "answer": "Para Tarifa atual de eletricidade 2026, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Tarifa atual de eletricidade 2026?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Tarifa atual de eletricidade 2026?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Tarifa atual de eletricidade 2026?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Tarifa atual de eletricidade 2026?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Tarifa atual de eletricidade 2026?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Tarifa atual de eletricidade 2026?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Tarifa atual de eletricidade 2026?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Tarifa atual de eletricidade 2026?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Tarifa atual de eletricidade 2026?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "Preços de eletricidade na Europa",
      "category": "Tarifas de Luz",
      "shortDescription": "Guia detalhado e simulador para Preços de eletricidade na Europa. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Preços de eletricidade na Europa?",
          "answer": "Para Preços de eletricidade na Europa, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Preços de eletricidade na Europa?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Preços de eletricidade na Europa?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Preços de eletricidade na Europa?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Preços de eletricidade na Europa?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Preços de eletricidade na Europa?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Preços de eletricidade na Europa?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Preços de eletricidade na Europa?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Preços de eletricidade na Europa?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Preços de eletricidade na Europa?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "Preço por kWh de eletricidade",
      "category": "Tarifas de Luz",
      "shortDescription": "Guia detalhado e simulador para Preço por kWh de eletricidade. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Preço por kWh de eletricidade?",
          "answer": "Para Preço por kWh de eletricidade, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Preço por kWh de eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Preço por kWh de eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Preço por kWh de eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Preço por kWh de eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Preço por kWh de eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Preço por kWh de eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Preço por kWh de eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Preço por kWh de eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Preço por kWh de eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "Evolução dos preços de eletricidade",
      "category": "Tarifas de Luz",
      "shortDescription": "Guia detalhado e simulador para Evolução dos preços de eletricidade. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Evolução dos preços de eletricidade?",
          "answer": "Para Evolução dos preços de eletricidade, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Evolução dos preços de eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Evolução dos preços de eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Evolução dos preços de eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Evolução dos preços de eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Evolução dos preços de eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Evolução dos preços de eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Evolução dos preços de eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Evolução dos preços de eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Evolução dos preços de eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "Composição da fatura de eletricidade",
      "category": "Tarifas de Luz",
      "shortDescription": "Guia detalhado e simulador para Composição da fatura de eletricidade. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Composição da fatura de eletricidade?",
          "answer": "Para Composição da fatura de eletricidade, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Composição da fatura de eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Composição da fatura de eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Composição da fatura de eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Composição da fatura de eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Composição da fatura de eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Composição da fatura de eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Composição da fatura de eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Composição da fatura de eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Composição da fatura de eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "Tarifas dinâmicas de eletricidade",
      "category": "Tarifas de Luz",
      "shortDescription": "Guia detalhado e simulador para Tarifas dinâmicas de eletricidade. Calcule consumos de referência (~4000 kWh/ano, ~129.17 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Tarifas dinâmicas de eletricidade?",
          "answer": "Para Tarifas dinâmicas de eletricidade, o consumo médio anual ronda os 4000 kWh por ano, correspondendo a uma despesa mensal de cerca de 129.17 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Tarifas dinâmicas de eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 129.17 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Tarifas dinâmicas de eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Tarifas dinâmicas de eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 11,0 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Tarifas dinâmicas de eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Tarifas dinâmicas de eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Tarifas dinâmicas de eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Tarifas dinâmicas de eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Tarifas dinâmicas de eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Tarifas dinâmicas de eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "Mudar de fornecedor de eletricidade",
      "category": "Dicas de Poupança",
      "shortDescription": "Guia detalhado e simulador para Mudar de fornecedor de eletricidade. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Mudar de fornecedor de eletricidade?",
          "answer": "Para Mudar de fornecedor de eletricidade, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Mudar de fornecedor de eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Mudar de fornecedor de eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Mudar de fornecedor de eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Mudar de fornecedor de eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Mudar de fornecedor de eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Mudar de fornecedor de eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Mudar de fornecedor de eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Mudar de fornecedor de eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Mudar de fornecedor de eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "Como verificar a fatura da luz",
      "category": "Fatura",
      "shortDescription": "Guia detalhado e simulador para Como verificar a fatura da luz. Calcule consumos de referência (~3000 kWh/ano, ~100 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Como verificar a fatura da luz?",
          "answer": "Para Como verificar a fatura da luz, o consumo médio anual ronda os 3000 kWh por ano, correspondendo a uma despesa mensal de cerca de 100 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Como verificar a fatura da luz?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 100 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Como verificar a fatura da luz?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Como verificar a fatura da luz?",
          "answer": "O consumo médio diário situa-se em cerca de 8,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Como verificar a fatura da luz?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Como verificar a fatura da luz?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Como verificar a fatura da luz?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Como verificar a fatura da luz?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Como verificar a fatura da luz?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Como verificar a fatura da luz?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "Fatura de eletricidade muito alta? O que fazer",
      "category": "Fatura",
      "shortDescription": "Guia detalhado e simulador para Fatura de eletricidade muito alta? O que fazer. Calcule consumos de referência (~4500 kWh/ano, ~143.75 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Para Fatura de eletricidade muito alta? O que fazer, o consumo médio anual ronda os 4500 kWh por ano, correspondendo a uma despesa mensal de cerca de 143.75 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 143.75 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Fatura de eletricidade muito alta? O que fazer?",
          "answer": "O consumo médio diário situa-se em cerca de 12,3 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Fatura de eletricidade muito alta? O que fazer?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "Como baixar a fatura da eletricidade",
      "category": "Fatura",
      "shortDescription": "Guia detalhado e simulador para Como baixar a fatura da eletricidade. Calcule consumos de referência (~3000 kWh/ano, ~100 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Como baixar a fatura da eletricidade?",
          "answer": "Para Como baixar a fatura da eletricidade, o consumo médio anual ronda os 3000 kWh por ano, correspondendo a uma despesa mensal de cerca de 100 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Como baixar a fatura da eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 100 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Como baixar a fatura da eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Como baixar a fatura da eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 8,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Como baixar a fatura da eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Como baixar a fatura da eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Como baixar a fatura da eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Como baixar a fatura da eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Como baixar a fatura da eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Como baixar a fatura da eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "Calcular a fatura de luz",
      "category": "Fatura",
      "shortDescription": "Guia detalhado e simulador para Calcular a fatura de luz. Calcule consumos de referência (~3000 kWh/ano, ~100 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Calcular a fatura de luz?",
          "answer": "Para Calcular a fatura de luz, o consumo médio anual ronda os 3000 kWh por ano, correspondendo a uma despesa mensal de cerca de 100 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Calcular a fatura de luz?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 100 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Calcular a fatura de luz?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Calcular a fatura de luz?",
          "answer": "O consumo médio diário situa-se em cerca de 8,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Calcular a fatura de luz?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Calcular a fatura de luz?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Calcular a fatura de luz?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Calcular a fatura de luz?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Calcular a fatura de luz?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Calcular a fatura de luz?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "Exemplo explicado de fatura de eletricidade",
      "category": "Fatura",
      "shortDescription": "Guia detalhado e simulador para Exemplo explicado de fatura de eletricidade. Calcule consumos de referência (~3000 kWh/ano, ~100 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Exemplo explicado de fatura de eletricidade?",
          "answer": "Para Exemplo explicado de fatura de eletricidade, o consumo médio anual ronda os 3000 kWh por ano, correspondendo a uma despesa mensal de cerca de 100 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Exemplo explicado de fatura de eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 100 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Exemplo explicado de fatura de eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Exemplo explicado de fatura de eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 8,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Exemplo explicado de fatura de eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Exemplo explicado de fatura de eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Exemplo explicado de fatura de eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Exemplo explicado de fatura de eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Exemplo explicado de fatura de eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Exemplo explicado de fatura de eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "As 20 melhores dicas para poupar eletricidade",
      "category": "Dicas de Poupança",
      "shortDescription": "Guia detalhado e simulador para As 20 melhores dicas para poupar eletricidade. Calcule consumos de referência (~3000 kWh/ano, ~100 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para As 20 melhores dicas para poupar eletricidade?",
          "answer": "Para As 20 melhores dicas para poupar eletricidade, o consumo médio anual ronda os 3000 kWh por ano, correspondendo a uma despesa mensal de cerca de 100 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para As 20 melhores dicas para poupar eletricidade?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 100 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em As 20 melhores dicas para poupar eletricidade?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para As 20 melhores dicas para poupar eletricidade?",
          "answer": "O consumo médio diário situa-se em cerca de 8,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em As 20 melhores dicas para poupar eletricidade?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em As 20 melhores dicas para poupar eletricidade?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para As 20 melhores dicas para poupar eletricidade?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em As 20 melhores dicas para poupar eletricidade?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para As 20 melhores dicas para poupar eletricidade?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para As 20 melhores dicas para poupar eletricidade?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "stromfresser": {
      "title": "Aparelhos que mais consomem energia em casa",
      "category": "Dicas de Poupança",
      "shortDescription": "Guia detalhado e simulador para Aparelhos que mais consomem energia em casa. Calcule consumos de referência (~4000 kWh/ano, ~129.17 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Aparelhos que mais consomem energia em casa?",
          "answer": "Para Aparelhos que mais consomem energia em casa, o consumo médio anual ronda os 4000 kWh por ano, correspondendo a uma despesa mensal de cerca de 129.17 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Aparelhos que mais consomem energia em casa?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 129.17 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Aparelhos que mais consomem energia em casa?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Aparelhos que mais consomem energia em casa?",
          "answer": "O consumo médio diário situa-se em cerca de 11,0 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Aparelhos que mais consomem energia em casa?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Aparelhos que mais consomem energia em casa?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Aparelhos que mais consomem energia em casa?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Aparelhos que mais consomem energia em casa?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Aparelhos que mais consomem energia em casa?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Aparelhos que mais consomem energia em casa?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "standby-strom": {
      "title": "Calcular o consumo em modo de espera (standby)",
      "category": "Dicas de Poupança",
      "shortDescription": "Guia detalhado e simulador para Calcular o consumo em modo de espera (standby). Calcule consumos de referência (~300 kWh/ano, ~8.75 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Calcular o consumo em modo de espera (standby)?",
          "answer": "Para Calcular o consumo em modo de espera (standby), o consumo médio anual ronda os 300 kWh por ano, correspondendo a uma despesa mensal de cerca de 8.75 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Calcular o consumo em modo de espera (standby)?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 8.75 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Calcular o consumo em modo de espera (standby)?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Calcular o consumo em modo de espera (standby)?",
          "answer": "O consumo médio diário situa-se em cerca de 0,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Calcular o consumo em modo de espera (standby)?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Calcular o consumo em modo de espera (standby)?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Calcular o consumo em modo de espera (standby)?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Calcular o consumo em modo de espera (standby)?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Calcular o consumo em modo de espera (standby)?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Calcular o consumo em modo de espera (standby)?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "Custos de eletricidade para carros elétricos (VE)",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Custos de eletricidade para carros elétricos (VE). Calcule consumos de referência (~2500 kWh/ano, ~72.92 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Para Custos de eletricidade para carros elétricos (VE), o consumo médio anual ronda os 2500 kWh por ano, correspondendo a uma despesa mensal de cerca de 72.92 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 72.92 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Custos de eletricidade para carros elétricos (VE)?",
          "answer": "O consumo médio diário situa-se em cerca de 6,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Custos de eletricidade para carros elétricos (VE)?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "Calculadora de custos de carregamento de veículos elétricos",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Calculadora de custos de carregamento de veículos elétricos. Calcule consumos de referência (~2500 kWh/ano, ~72.92 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Para Calculadora de custos de carregamento de veículos elétricos, o consumo médio anual ronda os 2500 kWh por ano, correspondendo a uma despesa mensal de cerca de 72.92 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 72.92 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "O consumo médio diário situa-se em cerca de 6,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Calculadora de custos de carregamento de veículos elétricos?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "Custo de eletricidade por 100 km em carro elétrico",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Custo de eletricidade por 100 km em carro elétrico. Calcule consumos de referência (~2500 kWh/ano, ~72.92 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Para Custo de eletricidade por 100 km em carro elétrico, o consumo médio anual ronda os 2500 kWh por ano, correspondendo a uma despesa mensal de cerca de 72.92 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 72.92 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "O consumo médio diário situa-se em cerca de 6,8 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Custo de eletricidade por 100 km em carro elétrico?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "Consumo de eletricidade de bomba de calor",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Consumo de eletricidade de bomba de calor. Calcule consumos de referência (~4500 kWh/ano, ~131.25 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Consumo de eletricidade de bomba de calor?",
          "answer": "Para Consumo de eletricidade de bomba de calor, o consumo médio anual ronda os 4500 kWh por ano, correspondendo a uma despesa mensal de cerca de 131.25 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Consumo de eletricidade de bomba de calor?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 131.25 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Consumo de eletricidade de bomba de calor?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Consumo de eletricidade de bomba de calor?",
          "answer": "O consumo médio diário situa-se em cerca de 12,3 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Consumo de eletricidade de bomba de calor?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Consumo de eletricidade de bomba de calor?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Consumo de eletricidade de bomba de calor?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Consumo de eletricidade de bomba de calor?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Consumo de eletricidade de bomba de calor?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Consumo de eletricidade de bomba de calor?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "Custos de eletricidade da bomba de calor",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Custos de eletricidade da bomba de calor. Calcule consumos de referência (~4500 kWh/ano, ~131.25 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Custos de eletricidade da bomba de calor?",
          "answer": "Para Custos de eletricidade da bomba de calor, o consumo médio anual ronda os 4500 kWh por ano, correspondendo a uma despesa mensal de cerca de 131.25 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Custos de eletricidade da bomba de calor?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 131.25 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Custos de eletricidade da bomba de calor?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Custos de eletricidade da bomba de calor?",
          "answer": "O consumo médio diário situa-se em cerca de 12,3 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Custos de eletricidade da bomba de calor?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Custos de eletricidade da bomba de calor?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Custos de eletricidade da bomba de calor?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Custos de eletricidade da bomba de calor?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Custos de eletricidade da bomba de calor?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Custos de eletricidade da bomba de calor?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "Calculadora de eletricidade para bomba de calor",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Calculadora de eletricidade para bomba de calor. Calcule consumos de referência (~4500 kWh/ano, ~131.25 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Calculadora de eletricidade para bomba de calor?",
          "answer": "Para Calculadora de eletricidade para bomba de calor, o consumo médio anual ronda os 4500 kWh por ano, correspondendo a uma despesa mensal de cerca de 131.25 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Calculadora de eletricidade para bomba de calor?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 131.25 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Calculadora de eletricidade para bomba de calor?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Calculadora de eletricidade para bomba de calor?",
          "answer": "O consumo médio diário situa-se em cerca de 12,3 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Calculadora de eletricidade para bomba de calor?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Calculadora de eletricidade para bomba de calor?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Calculadora de eletricidade para bomba de calor?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Calculadora de eletricidade para bomba de calor?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Calculadora de eletricidade para bomba de calor?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Calculadora de eletricidade para bomba de calor?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "Calculadora de autoconsumo solar fotovoltaico",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Calculadora de autoconsumo solar fotovoltaico. Calcule consumos de referência (~3500 kWh/ano, ~114.58 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Para Calculadora de autoconsumo solar fotovoltaico, o consumo médio anual ronda os 3500 kWh por ano, correspondendo a uma despesa mensal de cerca de 114.58 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 114.58 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "O consumo médio diário situa-se em cerca de 9,6 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Calculadora de autoconsumo solar fotovoltaico?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "Poupança com kit solar de varanda plug-in",
      "category": "Energia Limpa",
      "shortDescription": "Guia detalhado e simulador para Poupança com kit solar de varanda plug-in. Calcule consumos de referência (~800 kWh/ano, ~23.33 €/mês) e reduza os custos com energia elétrica.",
      "savingAdvice": [
        "Eliminar o consumo em modo de espera através de tomadas com interruptor.",
        "Utilizar os programas Eco com carga completa na máquina de lavar.",
        "Manter o frigorífico a 7 °C e o congelador a -18 °C.",
        "Comparar tarifas de eletricidade no mercado livre periodicamente.",
        "Substituir a iluminação por lâmpadas LED de alta eficiência."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de referência para Poupança com kit solar de varanda plug-in?",
          "answer": "Para Poupança com kit solar de varanda plug-in, o consumo médio anual ronda os 800 kWh por ano, correspondendo a uma despesa mensal de cerca de 23.33 €."
        },
        {
          "question": "Como calcular a fatura mensal de eletricidade para Poupança com kit solar de varanda plug-in?",
          "answer": "Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de 23.33 € mensais."
        },
        {
          "question": "Quais os fatores que mais aumentam a fatura em Poupança com kit solar de varanda plug-in?",
          "answer": "Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada."
        },
        {
          "question": "Quantos kWh se consomem por dia em média para Poupança com kit solar de varanda plug-in?",
          "answer": "O consumo médio diário situa-se em cerca de 2,2 kWh por dia."
        },
        {
          "question": "Porque é que algumas habitações gastam muito mais eletricidade em Poupança com kit solar de varanda plug-in?",
          "answer": "Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos."
        },
        {
          "question": "Como poupar de 15% a 25% na fatura de eletricidade em Poupança com kit solar de varanda plug-in?",
          "answer": "Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C."
        },
        {
          "question": "Quanto se poupa ao mudar de fornecedor de eletricidade para Poupança com kit solar de varanda plug-in?",
          "answer": "Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano."
        },
        {
          "question": "Qual a percentagem gasta em aquecimento de água em Poupança com kit solar de varanda plug-in?",
          "answer": "Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta."
        },
        {
          "question": "Como verificar a fatura de eletricidade para Poupança com kit solar de varanda plug-in?",
          "answer": "Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada."
        },
        {
          "question": "Compensa instalar um kit solar de varanda para Poupança com kit solar de varanda plug-in?",
          "answer": "Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais."
        }
      ]
    }
  },
  "ko": {
    "stromverbrauch-1-person": {
      "title": "1인 가구 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "1인 가구 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 1400 kWh, 월 약 53.33 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "1인 가구 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "1인 가구 전기 소비량의 경우 연간 표준 전력 소비량은 약 1400 kWh이며, 월평균 전기요금은 약 53.33 € 수준입니다."
        },
        {
          "question": "1인 가구 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 53.33 €가 산출됩니다."
        },
        {
          "question": "1인 가구 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "1인 가구 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 3.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "1인 가구 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "2인 가구 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "2인 가구 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 2500 kWh, 월 약 85.42 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "2인 가구 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "2인 가구 전기 소비량의 경우 연간 표준 전력 소비량은 약 2500 kWh이며, 월평균 전기요금은 약 85.42 € 수준입니다."
        },
        {
          "question": "2인 가구 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 85.42 €가 산출됩니다."
        },
        {
          "question": "2인 가구 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "2인 가구 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 6.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "2인 가구 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "3인 가구 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "3인 가구 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3200 kWh, 월 약 105.83 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "3인 가구 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "3인 가구 전기 소비량의 경우 연간 표준 전력 소비량은 약 3200 kWh이며, 월평균 전기요금은 약 105.83 € 수준입니다."
        },
        {
          "question": "3인 가구 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 105.83 €가 산출됩니다."
        },
        {
          "question": "3인 가구 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "3인 가구 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "3인 가구 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "4인 가구 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "4인 가구 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3700 kWh, 월 약 120.42 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "4인 가구 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "4인 가구 전기 소비량의 경우 연간 표준 전력 소비량은 약 3700 kWh이며, 월평균 전기요금은 약 120.42 € 수준입니다."
        },
        {
          "question": "4인 가구 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 120.42 €가 산출됩니다."
        },
        {
          "question": "4인 가구 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "4인 가구 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 10.1 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "4인 가구 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "5인 이상 가구 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "5인 이상 가구 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4600 kWh, 월 약 146.67 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "5인 이상 가구 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "5인 이상 가구 전기 소비량의 경우 연간 표준 전력 소비량은 약 4600 kWh이며, 월평균 전기요금은 약 146.67 € 수준입니다."
        },
        {
          "question": "5인 이상 가구 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 146.67 €가 산출됩니다."
        },
        {
          "question": "5인 이상 가구 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "5인 이상 가구 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 12.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "5인 이상 가구 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "1인당 평균 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "1인당 평균 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 1400 kWh, 월 약 53.33 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "1인당 평균 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "1인당 평균 전기 소비량의 경우 연간 표준 전력 소비량은 약 1400 kWh이며, 월평균 전기요금은 약 53.33 € 수준입니다."
        },
        {
          "question": "1인당 평균 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 53.33 €가 산출됩니다."
        },
        {
          "question": "1인당 평균 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "1인당 평균 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 3.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "1인당 평균 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "아파트 평균 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "아파트 평균 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 2200 kWh, 월 약 76.67 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "아파트 평균 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "아파트 평균 전기 소비량의 경우 연간 표준 전력 소비량은 약 2200 kWh이며, 월평균 전기요금은 약 76.67 € 수준입니다."
        },
        {
          "question": "아파트 평균 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 76.67 €가 산출됩니다."
        },
        {
          "question": "아파트 평균 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "아파트 평균 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 6.0 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "아파트 평균 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "단독주택 평균 전기 소비량",
      "category": "가구별 기준",
      "shortDescription": "단독주택 평균 전기 소비량에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4000 kWh, 월 약 129.17 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "단독주택 평균 전기 소비량의 연간 표준 전력 소비량 기준은?",
          "answer": "단독주택 평균 전기 소비량의 경우 연간 표준 전력 소비량은 약 4000 kWh이며, 월평균 전기요금은 약 129.17 € 수준입니다."
        },
        {
          "question": "단독주택 평균 전기 소비량의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 129.17 €가 산출됩니다."
        },
        {
          "question": "단독주택 평균 전기 소비량에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "단독주택 평균 전기 소비량에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 11.0 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "단독주택 평균 전기 소비량 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "가정용 평균 전기 소비량 가이드",
      "category": "가구별 기준",
      "shortDescription": "가정용 평균 전기 소비량 가이드에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3000 kWh, 월 약 100 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "가정용 평균 전기 소비량 가이드의 연간 표준 전력 소비량 기준은?",
          "answer": "가정용 평균 전기 소비량 가이드의 경우 연간 표준 전력 소비량은 약 3000 kWh이며, 월평균 전기요금은 약 100 € 수준입니다."
        },
        {
          "question": "가정용 평균 전기 소비량 가이드의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 100 €가 산출됩니다."
        },
        {
          "question": "가정용 평균 전기 소비량 가이드에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "가정용 평균 전기 소비량 가이드에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "가정용 평균 전기 소비량 가이드 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "2026년 최신 전력 단가",
      "category": "전력 요금",
      "shortDescription": "2026년 최신 전력 단가에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "2026년 최신 전력 단가의 연간 표준 전력 소비량 기준은?",
          "answer": "2026년 최신 전력 단가의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "2026년 최신 전력 단가의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "2026년 최신 전력 단가에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "2026년 최신 전력 단가에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "2026년 최신 전력 단가 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "독일 및 유럽 전력 요금 비교",
      "category": "전력 요금",
      "shortDescription": "독일 및 유럽 전력 요금 비교에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "독일 및 유럽 전력 요금 비교의 연간 표준 전력 소비량 기준은?",
          "answer": "독일 및 유럽 전력 요금 비교의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "독일 및 유럽 전력 요금 비교의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "독일 및 유럽 전력 요금 비교에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "독일 및 유럽 전력 요금 비교에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "독일 및 유럽 전력 요금 비교 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "1kWh당 전기요금 단가",
      "category": "전력 요금",
      "shortDescription": "1kWh당 전기요금 단가에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "1kWh당 전기요금 단가의 연간 표준 전력 소비량 기준은?",
          "answer": "1kWh당 전기요금 단가의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "1kWh당 전기요금 단가의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "1kWh당 전기요금 단가에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "1kWh당 전기요금 단가에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "1kWh당 전기요금 단가 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "전기요금 추이 및 향후 전망",
      "category": "전력 요금",
      "shortDescription": "전기요금 추이 및 향후 전망에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기요금 추이 및 향후 전망의 연간 표준 전력 소비량 기준은?",
          "answer": "전기요금 추이 및 향후 전망의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "전기요금 추이 및 향후 전망의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "전기요금 추이 및 향후 전망에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기요금 추이 및 향후 전망에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기요금 추이 및 향후 전망 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "전기요금 세부 구성 요소",
      "category": "전력 요금",
      "shortDescription": "전기요금 세부 구성 요소에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기요금 세부 구성 요소의 연간 표준 전력 소비량 기준은?",
          "answer": "전기요금 세부 구성 요소의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "전기요금 세부 구성 요소의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "전기요금 세부 구성 요소에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기요금 세부 구성 요소에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기요금 세부 구성 요소 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "다이내믹 변동형 전력 요금제",
      "category": "전력 요금",
      "shortDescription": "다이내믹 변동형 전력 요금제에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4000 kWh, 월 약 129.17 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "다이내믹 변동형 전력 요금제의 연간 표준 전력 소비량 기준은?",
          "answer": "다이내믹 변동형 전력 요금제의 경우 연간 표준 전력 소비량은 약 4000 kWh이며, 월평균 전기요금은 약 129.17 € 수준입니다."
        },
        {
          "question": "다이내믹 변동형 전력 요금제의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 129.17 €가 산출됩니다."
        },
        {
          "question": "다이내믹 변동형 전력 요금제에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "다이내믹 변동형 전력 요금제에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 11.0 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "다이내믹 변동형 전력 요금제 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "전력 공급사 변경 및 요금 절감",
      "category": "절전 가이드",
      "shortDescription": "전력 공급사 변경 및 요금 절감에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전력 공급사 변경 및 요금 절감의 연간 표준 전력 소비량 기준은?",
          "answer": "전력 공급사 변경 및 요금 절감의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "전력 공급사 변경 및 요금 절감의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "전력 공급사 변경 및 요금 절감에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전력 공급사 변경 및 요금 절감에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전력 공급사 변경 및 요금 절감 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "전기요금 고지서 및 명세서 검토",
      "category": "고지서",
      "shortDescription": "전기요금 고지서 및 명세서 검토에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3000 kWh, 월 약 100 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기요금 고지서 및 명세서 검토의 연간 표준 전력 소비량 기준은?",
          "answer": "전기요금 고지서 및 명세서 검토의 경우 연간 표준 전력 소비량은 약 3000 kWh이며, 월평균 전기요금은 약 100 € 수준입니다."
        },
        {
          "question": "전기요금 고지서 및 명세서 검토의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 100 €가 산출됩니다."
        },
        {
          "question": "전기요금 고지서 및 명세서 검토에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기요금 고지서 및 명세서 검토에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기요금 고지서 및 명세서 검토 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "전기요금이 너무 많이 나온 원인과 해결책",
      "category": "고지서",
      "shortDescription": "전기요금이 너무 많이 나온 원인과 해결책에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4500 kWh, 월 약 143.75 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기요금이 너무 많이 나온 원인과 해결책의 연간 표준 전력 소비량 기준은?",
          "answer": "전기요금이 너무 많이 나온 원인과 해결책의 경우 연간 표준 전력 소비량은 약 4500 kWh이며, 월평균 전기요금은 약 143.75 € 수준입니다."
        },
        {
          "question": "전기요금이 너무 많이 나온 원인과 해결책의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 143.75 €가 산출됩니다."
        },
        {
          "question": "전기요금이 너무 많이 나온 원인과 해결책에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기요금이 너무 많이 나온 원인과 해결책에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 12.3 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기요금이 너무 많이 나온 원인과 해결책 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "전기요금 절감 즉효 가이드",
      "category": "고지서",
      "shortDescription": "전기요금 절감 즉효 가이드에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3000 kWh, 월 약 100 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기요금 절감 즉효 가이드의 연간 표준 전력 소비량 기준은?",
          "answer": "전기요금 절감 즉효 가이드의 경우 연간 표준 전력 소비량은 약 3000 kWh이며, 월평균 전기요금은 약 100 € 수준입니다."
        },
        {
          "question": "전기요금 절감 즉효 가이드의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 100 €가 산출됩니다."
        },
        {
          "question": "전기요금 절감 즉효 가이드에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기요금 절감 즉효 가이드에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기요금 절감 즉효 가이드 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "월 전기요금 셀프 시뮬레이션",
      "category": "고지서",
      "shortDescription": "월 전기요금 셀프 시뮬레이션에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3000 kWh, 월 약 100 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "월 전기요금 셀프 시뮬레이션의 연간 표준 전력 소비량 기준은?",
          "answer": "월 전기요금 셀프 시뮬레이션의 경우 연간 표준 전력 소비량은 약 3000 kWh이며, 월평균 전기요금은 약 100 € 수준입니다."
        },
        {
          "question": "월 전기요금 셀프 시뮬레이션의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 100 €가 산출됩니다."
        },
        {
          "question": "월 전기요금 셀프 시뮬레이션에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "월 전기요금 셀프 시뮬레이션에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "월 전기요금 셀프 시뮬레이션 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "전기요금 고지서 샘플 및 상세 설명",
      "category": "고지서",
      "shortDescription": "전기요금 고지서 샘플 및 상세 설명에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3000 kWh, 월 약 100 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기요금 고지서 샘플 및 상세 설명의 연간 표준 전력 소비량 기준은?",
          "answer": "전기요금 고지서 샘플 및 상세 설명의 경우 연간 표준 전력 소비량은 약 3000 kWh이며, 월평균 전기요금은 약 100 € 수준입니다."
        },
        {
          "question": "전기요금 고지서 샘플 및 상세 설명의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 100 €가 산출됩니다."
        },
        {
          "question": "전기요금 고지서 샘플 및 상세 설명에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기요금 고지서 샘플 및 상세 설명에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기요금 고지서 샘플 및 상세 설명 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "2026년 최고의 전기 절약 팁 20선",
      "category": "절전 가이드",
      "shortDescription": "2026년 최고의 전기 절약 팁 20선에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3000 kWh, 월 약 100 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "2026년 최고의 전기 절약 팁 20선의 연간 표준 전력 소비량 기준은?",
          "answer": "2026년 최고의 전기 절약 팁 20선의 경우 연간 표준 전력 소비량은 약 3000 kWh이며, 월평균 전기요금은 약 100 € 수준입니다."
        },
        {
          "question": "2026년 최고의 전기 절약 팁 20선의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 100 €가 산출됩니다."
        },
        {
          "question": "2026년 최고의 전기 절약 팁 20선에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "2026년 최고의 전기 절약 팁 20선에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 8.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "2026년 최고의 전기 절약 팁 20선 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "stromfresser": {
      "title": "가정 내 전력 도둑 가전제품 찾기",
      "category": "절전 가이드",
      "shortDescription": "가정 내 전력 도둑 가전제품 찾기에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4000 kWh, 월 약 129.17 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "가정 내 전력 도둑 가전제품 찾기의 연간 표준 전력 소비량 기준은?",
          "answer": "가정 내 전력 도둑 가전제품 찾기의 경우 연간 표준 전력 소비량은 약 4000 kWh이며, 월평균 전기요금은 약 129.17 € 수준입니다."
        },
        {
          "question": "가정 내 전력 도둑 가전제품 찾기의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 129.17 €가 산출됩니다."
        },
        {
          "question": "가정 내 전력 도둑 가전제품 찾기에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "가정 내 전력 도둑 가전제품 찾기에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 11.0 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "가정 내 전력 도둑 가전제품 찾기 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "standby-strom": {
      "title": "대기전력 계산 및 대기전력 차단법",
      "category": "절전 가이드",
      "shortDescription": "대기전력 계산 및 대기전력 차단법에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 300 kWh, 월 약 8.75 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "대기전력 계산 및 대기전력 차단법의 연간 표준 전력 소비량 기준은?",
          "answer": "대기전력 계산 및 대기전력 차단법의 경우 연간 표준 전력 소비량은 약 300 kWh이며, 월평균 전기요금은 약 8.75 € 수준입니다."
        },
        {
          "question": "대기전력 계산 및 대기전력 차단법의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 8.75 €가 산출됩니다."
        },
        {
          "question": "대기전력 계산 및 대기전력 차단법에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "대기전력 계산 및 대기전력 차단법에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 0.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "대기전력 계산 및 대기전력 차단법 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "전기차(EV) 충전 요금 및 전기세 계산",
      "category": "친환경 기술",
      "shortDescription": "전기차(EV) 충전 요금 및 전기세 계산에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 2500 kWh, 월 약 72.92 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기차(EV) 충전 요금 및 전기세 계산의 연간 표준 전력 소비량 기준은?",
          "answer": "전기차(EV) 충전 요금 및 전기세 계산의 경우 연간 표준 전력 소비량은 약 2500 kWh이며, 월평균 전기요금은 약 72.92 € 수준입니다."
        },
        {
          "question": "전기차(EV) 충전 요금 및 전기세 계산의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 72.92 €가 산출됩니다."
        },
        {
          "question": "전기차(EV) 충전 요금 및 전기세 계산에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기차(EV) 충전 요금 및 전기세 계산에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 6.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기차(EV) 충전 요금 및 전기세 계산 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "전기차 충전 비용 계산기",
      "category": "친환경 기술",
      "shortDescription": "전기차 충전 비용 계산기에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 2500 kWh, 월 약 72.92 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기차 충전 비용 계산기의 연간 표준 전력 소비량 기준은?",
          "answer": "전기차 충전 비용 계산기의 경우 연간 표준 전력 소비량은 약 2500 kWh이며, 월평균 전기요금은 약 72.92 € 수준입니다."
        },
        {
          "question": "전기차 충전 비용 계산기의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 72.92 €가 산출됩니다."
        },
        {
          "question": "전기차 충전 비용 계산기에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기차 충전 비용 계산기에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 6.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기차 충전 비용 계산기 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "전기차 100km 주행당 전기요금",
      "category": "친환경 기술",
      "shortDescription": "전기차 100km 주행당 전기요금에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 2500 kWh, 월 약 72.92 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "전기차 100km 주행당 전기요금의 연간 표준 전력 소비량 기준은?",
          "answer": "전기차 100km 주행당 전기요금의 경우 연간 표준 전력 소비량은 약 2500 kWh이며, 월평균 전기요금은 약 72.92 € 수준입니다."
        },
        {
          "question": "전기차 100km 주행당 전기요금의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 72.92 €가 산출됩니다."
        },
        {
          "question": "전기차 100km 주행당 전기요금에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "전기차 100km 주행당 전기요금에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 6.8 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "전기차 100km 주행당 전기요금 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "히트펌프 전력 소비량 계산기",
      "category": "친환경 기술",
      "shortDescription": "히트펌프 전력 소비량 계산기에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4500 kWh, 월 약 131.25 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "히트펌프 전력 소비량 계산기의 연간 표준 전력 소비량 기준은?",
          "answer": "히트펌프 전력 소비량 계산기의 경우 연간 표준 전력 소비량은 약 4500 kWh이며, 월평균 전기요금은 약 131.25 € 수준입니다."
        },
        {
          "question": "히트펌프 전력 소비량 계산기의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 131.25 €가 산출됩니다."
        },
        {
          "question": "히트펌프 전력 소비량 계산기에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "히트펌프 전력 소비량 계산기에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 12.3 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "히트펌프 전력 소비량 계산기 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "히트펌프 연간 난방 전기세",
      "category": "친환경 기술",
      "shortDescription": "히트펌프 연간 난방 전기세에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4500 kWh, 월 약 131.25 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "히트펌프 연간 난방 전기세의 연간 표준 전력 소비량 기준은?",
          "answer": "히트펌프 연간 난방 전기세의 경우 연간 표준 전력 소비량은 약 4500 kWh이며, 월평균 전기요금은 약 131.25 € 수준입니다."
        },
        {
          "question": "히트펌프 연간 난방 전기세의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 131.25 €가 산출됩니다."
        },
        {
          "question": "히트펌프 연간 난방 전기세에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "히트펌프 연간 난방 전기세에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 12.3 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "히트펌프 연간 난방 전기세 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "히트펌프 전력 요금 계산기",
      "category": "친환경 기술",
      "shortDescription": "히트펌프 전력 요금 계산기에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 4500 kWh, 월 약 131.25 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "히트펌프 전력 요금 계산기의 연간 표준 전력 소비량 기준은?",
          "answer": "히트펌프 전력 요금 계산기의 경우 연간 표준 전력 소비량은 약 4500 kWh이며, 월평균 전기요금은 약 131.25 € 수준입니다."
        },
        {
          "question": "히트펌프 전력 요금 계산기의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 131.25 €가 산출됩니다."
        },
        {
          "question": "히트펌프 전력 요금 계산기에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "히트펌프 전력 요금 계산기에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 12.3 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "히트펌프 전력 요금 계산기 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "태양광 발전 자가소비 및 전기요금 절감 계산기",
      "category": "친환경 기술",
      "shortDescription": "태양광 발전 자가소비 및 전기요금 절감 계산기에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 3500 kWh, 월 약 114.58 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "태양광 발전 자가소비 및 전기요금 절감 계산기의 연간 표준 전력 소비량 기준은?",
          "answer": "태양광 발전 자가소비 및 전기요금 절감 계산기의 경우 연간 표준 전력 소비량은 약 3500 kWh이며, 월평균 전기요금은 약 114.58 € 수준입니다."
        },
        {
          "question": "태양광 발전 자가소비 및 전기요금 절감 계산기의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 114.58 €가 산출됩니다."
        },
        {
          "question": "태양광 발전 자가소비 및 전기요금 절감 계산기에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "태양광 발전 자가소비 및 전기요금 절감 계산기에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 9.6 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "태양광 발전 자가소비 및 전기요금 절감 계산기 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "베란다 미니 태양광 발전기 절감액 계산기",
      "category": "친환경 기술",
      "shortDescription": "베란다 미니 태양광 발전기 절감액 계산기에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 800 kWh, 월 약 23.33 €)을 확인하고 전기요금을 효과적으로 절감하세요.",
      "savingAdvice": [
        "스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.",
        "세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.",
        "냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.",
        "전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.",
        "실내 모든 조명을 고효율 LED 조명으로 교체합니다."
      ],
      "faq": [
        {
          "question": "베란다 미니 태양광 발전기 절감액 계산기의 연간 표준 전력 소비량 기준은?",
          "answer": "베란다 미니 태양광 발전기 절감액 계산기의 경우 연간 표준 전력 소비량은 약 800 kWh이며, 월평균 전기요금은 약 23.33 € 수준입니다."
        },
        {
          "question": "베란다 미니 태양광 발전기 절감액 계산기의 월 전기요금 계산 공식은?",
          "answer": "계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 23.33 €가 산출됩니다."
        },
        {
          "question": "베란다 미니 태양광 발전기 절감액 계산기에서 전기요금이 과다 청구되는 주원인은?",
          "answer": "전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다."
        },
        {
          "question": "베란다 미니 태양광 발전기 절감액 계산기에서는 하루에 전기를 평균 몇 kWh 소비하나요?",
          "answer": "하루 평균 전력 소비량은 약 2.2 kWh입니다."
        },
        {
          "question": "동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?",
          "answer": "단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다."
        },
        {
          "question": "일상에서 전기요금을 15~25% 즉시 절감하는 방법은?",
          "answer": "절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다."
        },
        {
          "question": "전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?",
          "answer": "저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다."
        },
        {
          "question": "온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?",
          "answer": "전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다."
        },
        {
          "question": "베란다 미니 태양광 발전기 절감액 계산기 전기요금 고지서에서 반드시 확인할 항목은?",
          "answer": "실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다."
        },
        {
          "question": "베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?",
          "answer": "네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다."
        }
      ]
    }
  },
  "it": {
    "stromverbrauch-1-person": {
      "title": "Consumo elettrico 1 persona",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico 1 persona. Scopri i dati di riferimento (~1400 kWh/anno, ~53.33 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico 1 persona?",
          "answer": "Per Consumo elettrico 1 persona, il consumo medio annuo è di circa 1400 kWh, pari a una spesa mensile stimata di circa 53.33 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico 1 persona?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 53.33 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico 1 persona?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico 1 persona?",
          "answer": "Il consumo medio giornaliero è di circa 3,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico 1 persona?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico 1 persona?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico 1 persona?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico 1 persona?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico 1 persona?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico 1 persona?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-2-personen": {
      "title": "Consumo elettrico 2 persone",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico 2 persone. Scopri i dati di riferimento (~2500 kWh/anno, ~85.42 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico 2 persone?",
          "answer": "Per Consumo elettrico 2 persone, il consumo medio annuo è di circa 2500 kWh, pari a una spesa mensile stimata di circa 85.42 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico 2 persone?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 85.42 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico 2 persone?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico 2 persone?",
          "answer": "Il consumo medio giornaliero è di circa 6,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico 2 persone?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico 2 persone?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico 2 persone?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico 2 persone?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico 2 persone?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico 2 persone?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-3-personen": {
      "title": "Consumo elettrico 3 persone",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico 3 persone. Scopri i dati di riferimento (~3200 kWh/anno, ~105.83 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico 3 persone?",
          "answer": "Per Consumo elettrico 3 persone, il consumo medio annuo è di circa 3200 kWh, pari a una spesa mensile stimata di circa 105.83 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico 3 persone?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 105.83 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico 3 persone?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico 3 persone?",
          "answer": "Il consumo medio giornaliero è di circa 8,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico 3 persone?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico 3 persone?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico 3 persone?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico 3 persone?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico 3 persone?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico 3 persone?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-4-personen": {
      "title": "Consumo elettrico 4 persone",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico 4 persone. Scopri i dati di riferimento (~3700 kWh/anno, ~120.42 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico 4 persone?",
          "answer": "Per Consumo elettrico 4 persone, il consumo medio annuo è di circa 3700 kWh, pari a una spesa mensile stimata di circa 120.42 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico 4 persone?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 120.42 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico 4 persone?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico 4 persone?",
          "answer": "Il consumo medio giornaliero è di circa 10,1 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico 4 persone?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico 4 persone?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico 4 persone?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico 4 persone?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico 4 persone?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico 4 persone?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-5-personen": {
      "title": "Consumo elettrico 5+ persone",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico 5+ persone. Scopri i dati di riferimento (~4600 kWh/anno, ~146.67 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico 5+ persone?",
          "answer": "Per Consumo elettrico 5+ persone, il consumo medio annuo è di circa 4600 kWh, pari a una spesa mensile stimata di circa 146.67 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico 5+ persone?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 146.67 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico 5+ persone?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico 5+ persone?",
          "answer": "Il consumo medio giornaliero è di circa 12,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico 5+ persone?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico 5+ persone?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico 5+ persone?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico 5+ persone?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico 5+ persone?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico 5+ persone?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-pro-person": {
      "title": "Consumo elettrico per persona",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico per persona. Scopri i dati di riferimento (~1400 kWh/anno, ~53.33 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico per persona?",
          "answer": "Per Consumo elettrico per persona, il consumo medio annuo è di circa 1400 kWh, pari a una spesa mensile stimata di circa 53.33 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico per persona?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 53.33 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico per persona?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico per persona?",
          "answer": "Il consumo medio giornaliero è di circa 3,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico per persona?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico per persona?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico per persona?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico per persona?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico per persona?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico per persona?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-wohnung": {
      "title": "Consumo elettrico in appartamento",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico in appartamento. Scopri i dati di riferimento (~2200 kWh/anno, ~76.67 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico in appartamento?",
          "answer": "Per Consumo elettrico in appartamento, il consumo medio annuo è di circa 2200 kWh, pari a una spesa mensile stimata di circa 76.67 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico in appartamento?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 76.67 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico in appartamento?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico in appartamento?",
          "answer": "Il consumo medio giornaliero è di circa 6,0 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico in appartamento?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico in appartamento?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico in appartamento?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico in appartamento?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico in appartamento?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico in appartamento?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromverbrauch-einfamilienhaus": {
      "title": "Consumo elettrico in casa singola",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo elettrico in casa singola. Scopri i dati di riferimento (~4000 kWh/anno, ~129.17 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo elettrico in casa singola?",
          "answer": "Per Consumo elettrico in casa singola, il consumo medio annuo è di circa 4000 kWh, pari a una spesa mensile stimata di circa 129.17 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo elettrico in casa singola?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 129.17 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo elettrico in casa singola?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo elettrico in casa singola?",
          "answer": "Il consumo medio giornaliero è di circa 11,0 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo elettrico in casa singola?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo elettrico in casa singola?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo elettrico in casa singola?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo elettrico in casa singola?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo elettrico in casa singola?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo elettrico in casa singola?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "durchschnittlicher-stromverbrauch": {
      "title": "Consumo medio di energia elettrica per famiglia",
      "category": "Famiglia",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo medio di energia elettrica per famiglia. Scopri i dati di riferimento (~3000 kWh/anno, ~100 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo medio di energia elettrica per famiglia?",
          "answer": "Per Consumo medio di energia elettrica per famiglia, il consumo medio annuo è di circa 3000 kWh, pari a una spesa mensile stimata di circa 100 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo medio di energia elettrica per famiglia?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 100 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo medio di energia elettrica per famiglia?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo medio di energia elettrica per famiglia?",
          "answer": "Il consumo medio giornaliero è di circa 8,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo medio di energia elettrica per famiglia?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo medio di energia elettrica per famiglia?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo medio di energia elettrica per famiglia?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo medio di energia elettrica per famiglia?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo medio di energia elettrica per famiglia?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo medio di energia elettrica per famiglia?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "strompreis-aktuell": {
      "title": "Prezzo attuale dell'energia elettrica 2026",
      "category": "Tariffe Luce",
      "shortDescription": "Guida dettagliata e calcolatore per Prezzo attuale dell'energia elettrica 2026. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Per Prezzo attuale dell'energia elettrica 2026, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Prezzo attuale dell'energia elettrica 2026?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "strompreis-deutschland": {
      "title": "Prezzi dell'energia elettrica in Europa",
      "category": "Tariffe Luce",
      "shortDescription": "Guida dettagliata e calcolatore per Prezzi dell'energia elettrica in Europa. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Prezzi dell'energia elettrica in Europa?",
          "answer": "Per Prezzi dell'energia elettrica in Europa, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Prezzi dell'energia elettrica in Europa?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Prezzi dell'energia elettrica in Europa?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Prezzi dell'energia elettrica in Europa?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Prezzi dell'energia elettrica in Europa?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Prezzi dell'energia elettrica in Europa?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Prezzi dell'energia elettrica in Europa?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Prezzi dell'energia elettrica in Europa?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Prezzi dell'energia elettrica in Europa?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Prezzi dell'energia elettrica in Europa?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "strompreis-pro-kwh": {
      "title": "Prezzo per kWh di energia elettrica",
      "category": "Tariffe Luce",
      "shortDescription": "Guida dettagliata e calcolatore per Prezzo per kWh di energia elettrica. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Prezzo per kWh di energia elettrica?",
          "answer": "Per Prezzo per kWh di energia elettrica, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Prezzo per kWh di energia elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Prezzo per kWh di energia elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Prezzo per kWh di energia elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Prezzo per kWh di energia elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Prezzo per kWh di energia elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Prezzo per kWh di energia elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Prezzo per kWh di energia elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Prezzo per kWh di energia elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Prezzo per kWh di energia elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "strompreis-entwicklung": {
      "title": "Andamento storico del prezzo dell'energia",
      "category": "Tariffe Luce",
      "shortDescription": "Guida dettagliata e calcolatore per Andamento storico del prezzo dell'energia. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Andamento storico del prezzo dell'energia?",
          "answer": "Per Andamento storico del prezzo dell'energia, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Andamento storico del prezzo dell'energia?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Andamento storico del prezzo dell'energia?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Andamento storico del prezzo dell'energia?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Andamento storico del prezzo dell'energia?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Andamento storico del prezzo dell'energia?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Andamento storico del prezzo dell'energia?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Andamento storico del prezzo dell'energia?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Andamento storico del prezzo dell'energia?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Andamento storico del prezzo dell'energia?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "strompreis-zusammensetzung": {
      "title": "Composizione della bolletta elettrica",
      "category": "Tariffe Luce",
      "shortDescription": "Guida dettagliata e calcolatore per Composizione della bolletta elettrica. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Composizione della bolletta elettrica?",
          "answer": "Per Composizione della bolletta elettrica, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Composizione della bolletta elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Composizione della bolletta elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Composizione della bolletta elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Composizione della bolletta elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Composizione della bolletta elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Composizione della bolletta elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Composizione della bolletta elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Composizione della bolletta elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Composizione della bolletta elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "dynamische-stromtarife": {
      "title": "Tariffe elettriche dinamiche",
      "category": "Tariffe Luce",
      "shortDescription": "Guida dettagliata e calcolatore per Tariffe elettriche dinamiche. Scopri i dati di riferimento (~4000 kWh/anno, ~129.17 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Tariffe elettriche dinamiche?",
          "answer": "Per Tariffe elettriche dinamiche, il consumo medio annuo è di circa 4000 kWh, pari a una spesa mensile stimata di circa 129.17 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Tariffe elettriche dinamiche?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 129.17 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Tariffe elettriche dinamiche?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Tariffe elettriche dinamiche?",
          "answer": "Il consumo medio giornaliero è di circa 11,0 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Tariffe elettriche dinamiche?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Tariffe elettriche dinamiche?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Tariffe elettriche dinamiche?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Tariffe elettriche dinamiche?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Tariffe elettriche dinamiche?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Tariffe elettriche dinamiche?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromanbieter-wechseln": {
      "title": "Cambiare fornitore di energia elettrica",
      "category": "Guida Risparmio",
      "shortDescription": "Guida dettagliata e calcolatore per Cambiare fornitore di energia elettrica. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Cambiare fornitore di energia elettrica?",
          "answer": "Per Cambiare fornitore di energia elettrica, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Cambiare fornitore di energia elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Cambiare fornitore di energia elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Cambiare fornitore di energia elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Cambiare fornitore di energia elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Cambiare fornitore di energia elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Cambiare fornitore di energia elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Cambiare fornitore di energia elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Cambiare fornitore di energia elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Cambiare fornitore di energia elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromrechnung-pruefen": {
      "title": "Come verificare la bolletta della luce",
      "category": "Bolletta",
      "shortDescription": "Guida dettagliata e calcolatore per Come verificare la bolletta della luce. Scopri i dati di riferimento (~3000 kWh/anno, ~100 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Come verificare la bolletta della luce?",
          "answer": "Per Come verificare la bolletta della luce, il consumo medio annuo è di circa 3000 kWh, pari a una spesa mensile stimata di circa 100 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Come verificare la bolletta della luce?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 100 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Come verificare la bolletta della luce?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Come verificare la bolletta della luce?",
          "answer": "Il consumo medio giornaliero è di circa 8,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Come verificare la bolletta della luce?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Come verificare la bolletta della luce?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Come verificare la bolletta della luce?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Come verificare la bolletta della luce?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Come verificare la bolletta della luce?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Come verificare la bolletta della luce?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromrechnung-zu-hoch": {
      "title": "Bolletta troppo alta? Cause e soluzioni",
      "category": "Bolletta",
      "shortDescription": "Guida dettagliata e calcolatore per Bolletta troppo alta? Cause e soluzioni. Scopri i dati di riferimento (~4500 kWh/anno, ~143.75 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Per Bolletta troppo alta? Cause e soluzioni, il consumo medio annuo è di circa 4500 kWh, pari a una spesa mensile stimata di circa 143.75 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 143.75 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Il consumo medio giornaliero è di circa 12,3 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Bolletta troppo alta? Cause e soluzioni?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromrechnung-senken": {
      "title": "Come abbassare la bolletta elettrica",
      "category": "Bolletta",
      "shortDescription": "Guida dettagliata e calcolatore per Come abbassare la bolletta elettrica. Scopri i dati di riferimento (~3000 kWh/anno, ~100 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Come abbassare la bolletta elettrica?",
          "answer": "Per Come abbassare la bolletta elettrica, il consumo medio annuo è di circa 3000 kWh, pari a una spesa mensile stimata di circa 100 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Come abbassare la bolletta elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 100 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Come abbassare la bolletta elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Come abbassare la bolletta elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 8,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Come abbassare la bolletta elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Come abbassare la bolletta elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Come abbassare la bolletta elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Come abbassare la bolletta elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Come abbassare la bolletta elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Come abbassare la bolletta elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromrechnung-berechnen": {
      "title": "Calcolare la bolletta dell'energia elettrica",
      "category": "Bolletta",
      "shortDescription": "Guida dettagliata e calcolatore per Calcolare la bolletta dell'energia elettrica. Scopri i dati di riferimento (~3000 kWh/anno, ~100 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Per Calcolare la bolletta dell'energia elettrica, il consumo medio annuo è di circa 3000 kWh, pari a una spesa mensile stimata di circa 100 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 100 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Calcolare la bolletta dell'energia elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 8,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Calcolare la bolletta dell'energia elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Calcolare la bolletta dell'energia elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Calcolare la bolletta dell'energia elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromrechnung-beispiel": {
      "title": "Esempio di bolletta elettrica spiegata",
      "category": "Bolletta",
      "shortDescription": "Guida dettagliata e calcolatore per Esempio di bolletta elettrica spiegata. Scopri i dati di riferimento (~3000 kWh/anno, ~100 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Esempio di bolletta elettrica spiegata?",
          "answer": "Per Esempio di bolletta elettrica spiegata, il consumo medio annuo è di circa 3000 kWh, pari a una spesa mensile stimata di circa 100 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Esempio di bolletta elettrica spiegata?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 100 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Esempio di bolletta elettrica spiegata?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Esempio di bolletta elettrica spiegata?",
          "answer": "Il consumo medio giornaliero è di circa 8,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Esempio di bolletta elettrica spiegata?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Esempio di bolletta elettrica spiegata?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Esempio di bolletta elettrica spiegata?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Esempio di bolletta elettrica spiegata?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Esempio di bolletta elettrica spiegata?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Esempio di bolletta elettrica spiegata?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "strom-sparen-tipps": {
      "title": "I 20 migliori consigli per risparmiare energia",
      "category": "Guida Risparmio",
      "shortDescription": "Guida dettagliata e calcolatore per I 20 migliori consigli per risparmiare energia. Scopri i dati di riferimento (~3000 kWh/anno, ~100 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per I 20 migliori consigli per risparmiare energia?",
          "answer": "Per I 20 migliori consigli per risparmiare energia, il consumo medio annuo è di circa 3000 kWh, pari a una spesa mensile stimata di circa 100 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per I 20 migliori consigli per risparmiare energia?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 100 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su I 20 migliori consigli per risparmiare energia?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per I 20 migliori consigli per risparmiare energia?",
          "answer": "Il consumo medio giornaliero è di circa 8,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per I 20 migliori consigli per risparmiare energia?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per I 20 migliori consigli per risparmiare energia?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per I 20 migliori consigli per risparmiare energia?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di I 20 migliori consigli per risparmiare energia?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per I 20 migliori consigli per risparmiare energia?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per I 20 migliori consigli per risparmiare energia?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "stromfresser": {
      "title": "Scoprire gli elettrodomestici che consumano di più",
      "category": "Guida Risparmio",
      "shortDescription": "Guida dettagliata e calcolatore per Scoprire gli elettrodomestici che consumano di più. Scopri i dati di riferimento (~4000 kWh/anno, ~129.17 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Per Scoprire gli elettrodomestici che consumano di più, il consumo medio annuo è di circa 4000 kWh, pari a una spesa mensile stimata di circa 129.17 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 129.17 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Il consumo medio giornaliero è di circa 11,0 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Scoprire gli elettrodomestici che consumano di più?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "standby-strom": {
      "title": "Calcolare e ridurre i consumi in standby",
      "category": "Guida Risparmio",
      "shortDescription": "Guida dettagliata e calcolatore per Calcolare e ridurre i consumi in standby. Scopri i dati di riferimento (~300 kWh/anno, ~8.75 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Calcolare e ridurre i consumi in standby?",
          "answer": "Per Calcolare e ridurre i consumi in standby, il consumo medio annuo è di circa 300 kWh, pari a una spesa mensile stimata di circa 8.75 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Calcolare e ridurre i consumi in standby?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 8.75 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Calcolare e ridurre i consumi in standby?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Calcolare e ridurre i consumi in standby?",
          "answer": "Il consumo medio giornaliero è di circa 0,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Calcolare e ridurre i consumi in standby?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Calcolare e ridurre i consumi in standby?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Calcolare e ridurre i consumi in standby?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Calcolare e ridurre i consumi in standby?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Calcolare e ridurre i consumi in standby?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Calcolare e ridurre i consumi in standby?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "e-auto/stromkosten": {
      "title": "Costi di ricarica per auto elettrica",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Costi di ricarica per auto elettrica. Scopri i dati di riferimento (~2500 kWh/anno, ~72.92 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Costi di ricarica per auto elettrica?",
          "answer": "Per Costi di ricarica per auto elettrica, il consumo medio annuo è di circa 2500 kWh, pari a una spesa mensile stimata di circa 72.92 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Costi di ricarica per auto elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 72.92 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Costi di ricarica per auto elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Costi di ricarica per auto elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 6,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Costi di ricarica per auto elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Costi di ricarica per auto elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Costi di ricarica per auto elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Costi di ricarica per auto elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Costi di ricarica per auto elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Costi di ricarica per auto elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "e-auto/ladekosten-rechner": {
      "title": "Calcolatore costi di ricarica auto elettrica",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Calcolatore costi di ricarica auto elettrica. Scopri i dati di riferimento (~2500 kWh/anno, ~72.92 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Per Calcolatore costi di ricarica auto elettrica, il consumo medio annuo è di circa 2500 kWh, pari a una spesa mensile stimata di circa 72.92 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 72.92 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Calcolatore costi di ricarica auto elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 6,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Calcolatore costi di ricarica auto elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Calcolatore costi di ricarica auto elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Calcolatore costi di ricarica auto elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "e-auto/kosten-pro-100-km": {
      "title": "Costo elettrico per 100 km in auto elettrica",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Costo elettrico per 100 km in auto elettrica. Scopri i dati di riferimento (~2500 kWh/anno, ~72.92 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Per Costo elettrico per 100 km in auto elettrica, il consumo medio annuo è di circa 2500 kWh, pari a una spesa mensile stimata di circa 72.92 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 72.92 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Costo elettrico per 100 km in auto elettrica?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Il consumo medio giornaliero è di circa 6,8 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Costo elettrico per 100 km in auto elettrica?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Costo elettrico per 100 km in auto elettrica?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Costo elettrico per 100 km in auto elettrica?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "waermepumpe/stromverbrauch": {
      "title": "Consumo di energia elettrica della pompa di calore",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Consumo di energia elettrica della pompa di calore. Scopri i dati di riferimento (~4500 kWh/anno, ~131.25 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Consumo di energia elettrica della pompa di calore?",
          "answer": "Per Consumo di energia elettrica della pompa di calore, il consumo medio annuo è di circa 4500 kWh, pari a una spesa mensile stimata di circa 131.25 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Consumo di energia elettrica della pompa di calore?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 131.25 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Consumo di energia elettrica della pompa di calore?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Consumo di energia elettrica della pompa di calore?",
          "answer": "Il consumo medio giornaliero è di circa 12,3 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Consumo di energia elettrica della pompa di calore?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Consumo di energia elettrica della pompa di calore?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Consumo di energia elettrica della pompa di calore?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Consumo di energia elettrica della pompa di calore?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Consumo di energia elettrica della pompa di calore?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Consumo di energia elettrica della pompa di calore?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "waermepumpe/stromkosten": {
      "title": "Costi annuali dell'energia per pompa di calore",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Costi annuali dell'energia per pompa di calore. Scopri i dati di riferimento (~4500 kWh/anno, ~131.25 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Costi annuali dell'energia per pompa di calore?",
          "answer": "Per Costi annuali dell'energia per pompa di calore, il consumo medio annuo è di circa 4500 kWh, pari a una spesa mensile stimata di circa 131.25 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Costi annuali dell'energia per pompa di calore?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 131.25 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Costi annuali dell'energia per pompa di calore?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Costi annuali dell'energia per pompa di calore?",
          "answer": "Il consumo medio giornaliero è di circa 12,3 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Costi annuali dell'energia per pompa di calore?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Costi annuali dell'energia per pompa di calore?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Costi annuali dell'energia per pompa di calore?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Costi annuali dell'energia per pompa di calore?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Costi annuali dell'energia per pompa di calore?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Costi annuali dell'energia per pompa di calore?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "waermepumpe/stromverbrauch-rechner": {
      "title": "Calcolatore consumi per pompa di calore",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Calcolatore consumi per pompa di calore. Scopri i dati di riferimento (~4500 kWh/anno, ~131.25 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Calcolatore consumi per pompa di calore?",
          "answer": "Per Calcolatore consumi per pompa di calore, il consumo medio annuo è di circa 4500 kWh, pari a una spesa mensile stimata di circa 131.25 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Calcolatore consumi per pompa di calore?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 131.25 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Calcolatore consumi per pompa di calore?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Calcolatore consumi per pompa di calore?",
          "answer": "Il consumo medio giornaliero è di circa 12,3 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Calcolatore consumi per pompa di calore?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Calcolatore consumi per pompa di calore?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Calcolatore consumi per pompa di calore?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Calcolatore consumi per pompa di calore?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Calcolatore consumi per pompa di calore?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Calcolatore consumi per pompa di calore?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "photovoltaik/eigenverbrauch-rechner": {
      "title": "Calcolatore autoconsumo solare fotovoltaico",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Calcolatore autoconsumo solare fotovoltaico. Scopri i dati di riferimento (~3500 kWh/anno, ~114.58 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Per Calcolatore autoconsumo solare fotovoltaico, il consumo medio annuo è di circa 3500 kWh, pari a una spesa mensile stimata di circa 114.58 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 114.58 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Il consumo medio giornaliero è di circa 9,6 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Calcolatore autoconsumo solare fotovoltaico?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    },
    "balkonkraftwerk/stromkosten-sparen": {
      "title": "Risparmio con impianto fotovoltaico da balcone plug-and-play",
      "category": "Energia Rinnovabile",
      "shortDescription": "Guida dettagliata e calcolatore per Risparmio con impianto fotovoltaico da balcone plug-and-play. Scopri i dati di riferimento (~800 kWh/anno, ~23.33 €/mese) e riduci i consumi della bolletta elettrica.",
      "savingAdvice": [
        "Eliminare i consumi in standby utilizzando ciabatte con interruttore.",
        "Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.",
        "Impostare il frigorifero a 7 °C e il congelatore a -18 °C.",
        "Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.",
        "Installare lampadine a LED ad alta efficienza energetica."
      ],
      "faq": [
        {
          "question": "Qual è il valore di riferimento medio per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Per Risparmio con impianto fotovoltaico da balcone plug-and-play, il consumo medio annuo è di circa 800 kWh, pari a una spesa mensile stimata di circa 23.33 €."
        },
        {
          "question": "Come si calcola la spesa mensile di luce per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa 23.33 € al mese."
        },
        {
          "question": "Quali sono i fattori che incidono maggiormente su Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata."
        },
        {
          "question": "Quanti kWh si consumano in media al giorno per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Il consumo medio giornaliero è di circa 2,2 kWh al giorno."
        },
        {
          "question": "Perché alcune famiglie consumano molto di più per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate."
        },
        {
          "question": "Come ridurre subito i consumi elettrici del 15–25% per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C."
        },
        {
          "question": "Quanto si risparmia cambiando fornitore di energia per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno."
        },
        {
          "question": "Che percentuale rappresenta l'acqua calda nei consumi di Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali."
        },
        {
          "question": "Come controllare la bolletta dell'energia elettrica per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata."
        },
        {
          "question": "Conviene installare un kit fotovoltaico da balcone per Risparmio con impianto fotovoltaico da balcone plug-and-play?",
          "answer": "Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno."
        }
      ]
    }
  }
};

export function getLocalizedTopic(slug: string, lang: SupportedLanguage = 'de'): LocalizedTopic | null {
  return topicTranslations[lang]?.[slug] || topicTranslations.de?.[slug] || null;
}
