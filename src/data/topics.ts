export interface Topic {
  title: string;
  category: string;
  shortDescription: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const topics: Record<string, Topic> = {
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
};
