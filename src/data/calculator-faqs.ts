export interface FaqItem {
  question: string;
  answer: string;
}

export const calculatorFaqs: Record<string, FaqItem[]> = {
  "stromkosten-rechner": [
    {
      "question": "Welchen Strompreis sollte ich im Rechner eingeben?",
      "answer": "Standardmäßig ist der bundesweite Durchschnitt von 35 ct/kWh voreingestellt. Wenn du deinen genauen Arbeitspreis kennst (zu finden auf deiner Stromrechnung), trage ihn ein, um ein exaktes Ergebnis zu erhalten."
    },
    {
      "question": "Wie rechnet der Stromkostenrechner den Monat und das Jahr um?",
      "answer": "Der Rechner berechnet den Jahreswert auf Basis von 365 Tagen. Der Monatswert ist der Jahreswert geteilt durch 12 (entspricht durchschnittlich 30,42 Tagen/Monat)."
    },
    {
      "question": "Was ist der Unterschied zwischen Arbeitspreis und Grundpreis?",
      "answer": "Der Arbeitspreis (in ct/kWh) wird für jede bezogene Kilowattstunde berechnet. Der Grundpreis (in €/Monat) ist eine feste monatliche Gebühr für Netznutzung und Zähler."
    },
    {
      "question": "Wie rechne ich Watt in Kilowattstunden (kWh) um?",
      "answer": "Multipliziere die Leistung in Watt mit den Betriebsstunden und teile durch 1.000. Beispiel: 2.000 Watt × 3 Stunden ÷ 1.000 = 6,0 kWh."
    },
    {
      "question": "Wie viel Strom verbraucht ein 1.000-Watt-Gerät in einer Stunde?",
      "answer": "Ein Gerät mit 1.000 Watt Leistung (1 kW) verbraucht in genau einer Stunde exakt 1 kWh Strom, was bei 35 ct/kWh genau 0,35 € kostet."
    },
    {
      "question": "Wie messe ich den realen Stromverbrauch getakteter Geräte (z.B. Kühlschrank)?",
      "answer": "Verwende ein digitales Steckdosen-Strommessgerät für 10 bis 15 Euro aus dem Baumarkt. Es misst über 24 Stunden den echten Verbrauch inklusive Taktpausen."
    },
    {
      "question": "Verbraucht ein Gerät auch Strom, wenn es ausgeschaltet ist?",
      "answer": "Viele elektronische Geräte (Fernseher, Router, Kaffeemaschinen) ziehen im Standby-Modus weiterhin 0,5 bis 5 Watt. Schaltbare Steckdosenleisten trennen sie vollständig vom Netz."
    },
    {
      "question": "Wie viel Strom verbraucht ein Durchschnittshaushalt pro Jahr?",
      "answer": "Ein Single-Haushalt verbraucht ca. 1.300–1.500 kWh/Jahr, 2 Personen ca. 2.100–2.500 kWh/Jahr und eine 4-köpfige Familie ca. 3.500–4.200 kWh/Jahr."
    },
    {
      "question": "Welche Geräte sind die größten Stromfresser im Haushalt?",
      "answer": "Zu den größten Stromfressern gehören alte Kühl- und Gefriergeräte, elektrische Durchlauferhitzer, Wäschetrockner, alte Heizlüfter und High-End-Gaming-PCs."
    },
    {
      "question": "Wie viel Geld kann man durch einen Stromanbieterwechsel sparen?",
      "answer": "Durch den Wechsel aus der örtlichen Grundversorgung in einen günstigen Alternativtarif sparen Haushalte häufig 150 bis 450 Euro im Jahr."
    }
  ],
  "kwh-rechner": [
    {
      "question": "Was kosten 100, 500, 1.000 oder 3.500 kWh Strom?",
      "answer": "Bei 35 ct/kWh kosten 100 kWh = 35,00 €, 500 kWh = 175,00 €, 1.000 kWh = 350,00 € und 3.500 kWh = 1.225,00 € (zzgl. Grundpreis)."
    },
    {
      "question": "Was genau ist 1 Kilowattstunde (kWh)?",
      "answer": "1 kWh ist die Energie, die ein 1.000-Watt-Gerät in 1 Stunde verbraucht (z.B. 1 Waschgang oder 70 Tassen Kaffee)."
    },
    {
      "question": "Wie rechne ich Kilowattstunden in Euro um?",
      "answer": "Formel: kWh × (Strompreis in ct/kWh ÷ 100). Beispiel: 2.500 kWh × 0,35 € = 875,00 €."
    },
    {
      "question": "Wie viele kWh verbraucht ein 1-Personen-Haushalt?",
      "answer": "Ein Single verbraucht im Schnitt ca. 1.300 bis 1.500 kWh pro Jahr (ohne elektrische Warmwasserbereitung)."
    },
    {
      "question": "Wie viele kWh verbraucht eine 4-köpfige Familie?",
      "answer": "Eine 4-köpfige Familie verbraucht im Schnitt ca. 3.500 bis 4.200 kWh pro Jahr."
    },
    {
      "question": "Was kostet 1 kWh Strom in Deutschland aktuell?",
      "answer": "Der durchschnittliche Haushaltsstrompreis in Deutschland liegt 2026 bei ca. 35 bis 37 Cent pro kWh."
    },
    {
      "question": "Wie viel kostet 1 kWh bei dynamischen Stromtarifen?",
      "answer": "Bei dynamischen Tarifen schwankt der Börsenpreis stündlich – an sonnigen oder windigen Tagen oft zwischen 15 und 25 ct/kWh."
    },
    {
      "question": "Wie viel kWh erzeugt ein Balkonkraftwerk pro Jahr?",
      "answer": "Ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600 bis 800 kWh Solarstrom."
    },
    {
      "question": "Wie viel kWh verbraucht ein E-Auto auf 100 km?",
      "answer": "Ein typisches Elektroauto verbraucht ca. 15 bis 20 kWh Strom pro 100 km Fahrtstrecke."
    },
    {
      "question": "Wie viel kWh verbraucht eine Wärmepumpe im Jahr?",
      "answer": "Eine moderne Wärmepumpe im Einfamilienhaus verbraucht ca. 3.000 bis 5.000 kWh Strom pro Jahr."
    }
  ],
  "watt-rechner": [
    {
      "question": "Wie rechnet man Watt in Kilowattstunden (kWh) um?",
      "answer": "Teile die Watt-Zahl durch 1.000 und multipliziere mit den Betriebsstunden: (500 W ÷ 1.000) × 2 h = 1,0 kWh."
    },
    {
      "question": "Was kosten 100 Watt Strom pro Stunde, Tag und Jahr?",
      "answer": "Bei 35 ct/kWh kostet ein 100-Watt-Gerät: 3,5 Cent pro Stunde, 28 Cent bei 8h/Tag und ca. 102,20 Euro pro Jahr."
    },
    {
      "question": "Was kosten 1.000 Watt (1 kW) an Strom?",
      "answer": "1.000 Watt verbrauchen in 1 Stunde genau 1 kWh. Bei 35 ct/kWh kostet eine Betriebsstunde genau 35 Cent."
    },
    {
      "question": "Was kosten 2.000 Watt (z.B. Heizlüfter oder Wasserkocher)?",
      "answer": "2.000 Watt verbrauchen 2 kWh pro Stunde, was bei 35 ct/kWh genau 0,70 € pro Stunde entspricht."
    },
    {
      "question": "Wie viel Watt verbraucht ein Fernseher?",
      "answer": "Ein moderner 55-65 Zoll Smart-TV verbraucht ca. 80 bis 130 Watt im Betrieb."
    },
    {
      "question": "Wie viel Watt zieht ein Gaming-PC unter Last?",
      "answer": "Ein High-End Gaming-PC verbraucht unter Volllast ca. 350 bis 550 Watt."
    },
    {
      "question": "Wie viel Watt hat ein Kühlschrank?",
      "answer": "Ein Haushaltskühlschrank hat eine Kompressorleistung von ca. 70 bis 120 Watt, läuft aber nur ca. 20–30 Minuten pro Stunde."
    },
    {
      "question": "Wie viel Watt verbraucht eine LED-Lampe im Vergleich zur Glühbirne?",
      "answer": "Eine LED benötigt nur ca. 6 bis 9 Watt für die gleiche Helligkeit wie eine alte 60-Watt-Glühbirne (über 85 % Ersparnis)."
    },
    {
      "question": "Was ist der Unterschied zwischen Watt (W) und Wattstunden (Wh)?",
      "answer": "Watt (W) ist die Momentanleistung eines Geräts. Wattstunden (Wh) oder Kilowattstunden (kWh) beschreiben die über Zeit verbrauchte Energiemenge."
    },
    {
      "question": "Wie finde ich die Wattzahl eines Geräts heraus?",
      "answer": "Die Wattzahl steht auf dem Typenschild auf der Rück- oder Unterseite des Geräts oder auf dem Netzteil (z.B. „230V ~ 50Hz 1500W“)."
    }
  ]
};
