export interface FaqItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FaqItem[] = [
  {
    "question": "Wie berechne ich meine Stromkosten aus Watt und Nutzungsdauer?",
    "answer": "Die exakte Berechnungsformel lautet: Stromkosten (€) = (Leistung in Watt × Nutzungsdauer in Stunden ÷ 1.000) × Strompreis (€/kWh). Beispiel: Ein Heizlüfter mit 2.000 Watt läuft 3 Stunden täglich. Verbrauch: (2.000 × 3 ÷ 1.000) = 6 kWh pro Tag. Bei einem Strompreis von 0,35 €/kWh kostet das 2,10 € pro Tag, 63 € im Monat und 766,50 € im Jahr."
  },
  {
    "question": "Was ist der genaue Unterschied zwischen Watt (W) und Kilowattstunde (kWh)?",
    "answer": "Watt (W) bzw. Kilowatt (1 kW = 1.000 W) bezeichnet die elektrische Momentanleistung – also wie viel Energie ein Gerät in der Sekunde benötigt. Die Kilowattstunde (kWh) ist die Maßeinheit für die geleistete Arbeit bzw. den Gesamtenergieverbrauch über die Zeit. Ein Gerät mit 1.000 Watt Leistung verbraucht bei einer Betriebsstunde exakt 1 kWh Strom."
  },
  {
    "question": "Wie hoch ist der durchschnittliche Stromverbrauch für 1, 2, 3 und 4 Personen?",
    "answer": "Laut Bundesnetzagentur und aktuellem Stromspiegel gelten folgende Richtwerte für Wohnungen (ohne elektrische Warmwasserbereitung): 1 Person: ca. 1.300–1.500 kWh/Jahr (~38–44 €/Monat); 2 Personen: ca. 2.100–2.500 kWh/Jahr (~61–73 €/Monat); 3 Personen: ca. 2.600–3.200 kWh/Jahr (~76–93 €/Monat); 4 Personen: ca. 3.000–4.000 kWh/Jahr (~88–117 €/Monat). Mit elektrischem Durchlauferhitzer steigt der Verbrauch um ca. 25–35 %."
  },
  {
    "question": "Wie viel kostet 1 kWh Strom in Deutschland aktuell im Jahr 2026?",
    "answer": "Der durchschnittliche Strompreis für Haushaltskunden in Deutschland liegt 2026 bei ca. 35 bis 37 Cent pro kWh. Neukundentarife beim Stromanbieterwechsel starten oft schon bei 28 bis 32 ct/kWh, während die örtliche Grundversorgung häufig 40 bis 45 ct/kWh verlangt. Der Preis setzt sich aus Beschaffung/Vertrieb (~40 %), Netzentgelten (~27 %) sowie Steuern, Abgaben und Umlagen (~33 %) zusammen."
  },
  {
    "question": "Welche Elektrogeräte sind die größten Stromfresser im Haushalt?",
    "answer": "Die größten Stromverbraucher im typischen Haushalt sind: 1. Elektrische Warmwasserbereitung (Durchlauferhitzer/Boiler: 600–1.200 kWh/Jahr); 2. Veraltete Kühl- und Gefrierschränke (250–400 kWh/Jahr); 3. Kondenstrockner ohne Wärmepumpe (300–450 kWh/Jahr); 4. Ältere Umwälzpumpen der Heizung (300–500 kWh/Jahr); 5. High-End-Gaming-PCs und Multi-Monitor-Setups bei täglicher Dauernutzung (400–600 kWh/Jahr)."
  },
  {
    "question": "Wie viel Strom und Geld kosten Standby-Verluste pro Jahr?",
    "answer": "In einem durchschnittlichen Haushalt summieren sich die heimlichen Standby-Verluste (Fernseher, Router, Receiver, Spielekonsolen, Ladegeräte, Kaffeemaschinen) auf 20 bis 45 Watt Dauerleistung. Das entspricht ca. 175 bis 390 kWh pro Jahr bzw. 60 bis 135 € unnötigen Stromkosten. Mit schaltbaren Steckdosenleisten oder smarten Zwischensteckern lässt sich dieser Betrag zu 100 % einsparen."
  },
  {
    "question": "Was kostet ein Waschgang und ein Trocknergang im Durchschnitt?",
    "answer": "Eine moderne Waschmaschine verbraucht im Eco-40/60-Programm ca. 0,5 bis 0,8 kWh (ca. 18 bis 28 Cent pro Waschgang). Bei 60 °C Normalwäsche sind es 1,1 bis 1,4 kWh (ca. 39 bis 49 Cent). Ein moderner Wärmepumpentrockner kostet ca. 45 bis 65 Cent pro Ladung (1,3–1,8 kWh), während ein alter Abluft- oder Kondenstrockner 1,20 bis 1,60 € pro Trocknung (3,5–4,5 kWh) verbraucht."
  },
  {
    "question": "Wie viel Strom verbraucht ein Kühlschrank pro Tag und Jahr?",
    "answer": "Ein modernes Kühlgerät der Energieeffizienzklasse A bis C verbraucht rund 0,3 bis 0,45 kWh pro Tag bzw. 100 bis 160 kWh pro Jahr (ca. 35 bis 56 €/Jahr). Ältere Kühl-Gefrierkombinationen (über 10 Jahre alt) oder große Side-by-Side-Geräte benötigen oft 0,8 bis 1,3 kWh pro Tag (300–480 kWh/Jahr, bis zu 168 €/Jahr)."
  },
  {
    "question": "Was ist der Unterschied zwischen Arbeitspreis und Grundpreis auf der Stromrechnung?",
    "answer": "Der Arbeitspreis (Verbrauchspreis) wird in Cent pro Kilowattstunde (ct/kWh) abgerechnet und hängt direkt davon ab, wie viel Strom du verbrauchst. Der Grundpreis ist eine feste monatliche oder jährliche Grundgebühr (z. B. 10 bis 15 €/Monat bzw. 120 bis 180 €/Jahr) für Zählermiete, Messstellenbetrieb und Netznutzung, die unabhängig vom Verbrauch immer anfällt."
  },
  {
    "question": "Wie viel Geld lässt sich durch einen Stromanbieterwechsel oder ein Balkonkraftwerk sparen?",
    "answer": "Ein Wechsel aus der teuren Grundversorgung in einen günstigen Ökostrom- oder Alternativtarif spart einem 3-Personen-Haushalt oft 250 bis 450 € pro Jahr. Ein Stecker-Solargerät (Balkonkraftwerk mit 800 W Einspeiseleistung) erzeugt jährlich ca. 650 bis 850 kWh Solarstrom und senkt die Stromrechnung bei hohem Eigenverbrauch dauerhaft um 180 bis 280 € jedes Jahr."
  }
];
