import type { SupportedLanguage } from './languages';

export interface LocalizedApplianceData {
  name: string;
  category: string;
  shortDescription: string;
  dutyCycleExplanation: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const applianceTranslations: Record<SupportedLanguage, Record<string, LocalizedApplianceData>> = {
  "de": {
    "kuehlschrank": {
      "name": "Kühlschrank",
      "category": "Küche",
      "shortDescription": "Kühlschrank verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Kühlschrank im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Kühlschrank verbraucht im Schnitt ca. 120 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 42,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Kühlschrank?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 90 Watt kostet eine Stunde Laufzeit rund 0,031 € (ca. 3,1 Cent)."
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
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 90 W × 1 h ÷ 1.000 × 0,35 € = 0,031 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Kühlschrank?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "waschmaschine": {
      "name": "Waschmaschine",
      "category": "Haushalt & Reinigung",
      "shortDescription": "Waschmaschine verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "trockner": {
      "name": "Wäschetrockner",
      "category": "Haushalt & Reinigung",
      "shortDescription": "Wäschetrockner verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "geschirrspueler": {
      "name": "Geschirrspüler",
      "category": "Küche",
      "shortDescription": "Geschirrspüler verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "backofen": {
      "name": "Backofen",
      "category": "Küche",
      "shortDescription": "Backofen verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "herd": {
      "name": "Elektroherd & Induktion",
      "category": "Küche",
      "shortDescription": "Elektroherd & Induktion verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "wasserkocher": {
      "name": "Wasserkocher",
      "category": "Küche",
      "shortDescription": "Wasserkocher verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "kaffeemaschine": {
      "name": "Kaffeevollautomat",
      "category": "Küche",
      "shortDescription": "Kaffeevollautomat verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Kaffeevollautomat im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Kaffeevollautomat verbraucht im Schnitt ca. 110 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 38,50 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Kaffeevollautomat?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 1450 Watt kostet eine Stunde Laufzeit rund 0,507 € (ca. 50,8 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Kaffeevollautomat?",
          "answer": "Die monatlichen Stromkosten für Kaffeevollautomat liegen bei durchschnittlicher Nutzung bei ca. 3,21 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Kaffeevollautomat?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 1450 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1015 W und 2175 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Kaffeevollautomat?",
          "answer": "Ein typischer Einsatz von Kaffeevollautomat verursacht Stromkosten von ca. 0,04 € / Tasse."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Kaffeevollautomat sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Kaffeevollautomat auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Kaffeevollautomat?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Kaffeevollautomat exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 1450 W × 1 h ÷ 1.000 × 0,35 € = 0,507 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Kaffeevollautomat?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "fernseher": {
      "name": "Fernseher (Smart TV)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Fernseher (Smart TV) verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Fernseher (Smart TV) im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Fernseher (Smart TV) verbraucht im Schnitt ca. 175 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 61,25 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Fernseher (Smart TV)?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 120 Watt kostet eine Stunde Laufzeit rund 0,042 € (ca. 4,2 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Fernseher (Smart TV)?",
          "answer": "Die monatlichen Stromkosten für Fernseher (Smart TV) liegen bei durchschnittlicher Nutzung bei ca. 5,10 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Fernseher (Smart TV)?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 120 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 84 W und 180 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Fernseher (Smart TV)?",
          "answer": "Ein typischer Einsatz von Fernseher (Smart TV) verursacht Stromkosten von ca. 0,17 € / Tag (4h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Fernseher (Smart TV) sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Fernseher (Smart TV) auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Fernseher (Smart TV)?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Fernseher (Smart TV) exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Fernseher (Smart TV)?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "gaming-pc": {
      "name": "Gaming-PC (High-End)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Gaming-PC (High-End) verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
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
      ]
    },
    "pc": {
      "name": "Desktop-PC (Office)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Desktop-PC (Office) verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Desktop-PC (Office) im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Desktop-PC (Office) verbraucht im Schnitt ca. 200 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 70,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Desktop-PC (Office)?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 120 Watt kostet eine Stunde Laufzeit rund 0,042 € (ca. 4,2 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Desktop-PC (Office)?",
          "answer": "Die monatlichen Stromkosten für Desktop-PC (Office) liegen bei durchschnittlicher Nutzung bei ca. 5,83 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Desktop-PC (Office)?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 120 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 84 W und 180 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Desktop-PC (Office)?",
          "answer": "Ein typischer Einsatz von Desktop-PC (Office) verursacht Stromkosten von ca. 0,34 € / Arbeitstag (8h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Desktop-PC (Office) sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Desktop-PC (Office) auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Desktop-PC (Office)?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Desktop-PC (Office) exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Desktop-PC (Office)?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "laptop": {
      "name": "Laptop / Notebook",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Laptop / Notebook verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Laptop / Notebook im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Laptop / Notebook verbraucht im Schnitt ca. 80 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 28,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Laptop / Notebook?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 50 Watt kostet eine Stunde Laufzeit rund 0,018 € (ca. 1,8 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Laptop / Notebook?",
          "answer": "Die monatlichen Stromkosten für Laptop / Notebook liegen bei durchschnittlicher Nutzung bei ca. 2,33 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Laptop / Notebook?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 50 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 35 W und 75 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Laptop / Notebook?",
          "answer": "Ein typischer Einsatz von Laptop / Notebook verursacht Stromkosten von ca. 0,14 € / Arbeitstag (8h)."
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
      ]
    },
    "monitor": {
      "name": "PC-Monitor (27-32\")",
      "category": "Unterhaltung & Büro",
      "shortDescription": "PC-Monitor (27-32\") verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
          "answer": "Ein typischer Einsatz von PC-Monitor (27-32\") verursacht Stromkosten von ca. 0,10 € / Tag."
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
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
          "answer": "Ein typischer Einsatz von PlayStation 5 (PS5) verursacht Stromkosten von ca. 0,14 € / Gaming (2h)."
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
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Xbox Series X im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Xbox Series X verbraucht im Schnitt ca. 140 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 49,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Xbox Series X?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 180 Watt kostet eine Stunde Laufzeit rund 0,063 € (ca. 6,3 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Xbox Series X?",
          "answer": "Die monatlichen Stromkosten für Xbox Series X liegen bei durchschnittlicher Nutzung bei ca. 4,08 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Xbox Series X?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 180 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 126 W und 270 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Xbox Series X?",
          "answer": "Ein typischer Einsatz von Xbox Series X verursacht Stromkosten von ca. 0,13 € / Gaming (2h)."
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
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 180 W × 1 h ÷ 1.000 × 0,35 € = 0,063 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Xbox Series X?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "klimaanlage": {
      "name": "Klimaanlage (Split-Gerät)",
      "category": "Klima & Heizen",
      "shortDescription": "Klimaanlage (Split-Gerät) verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Klimaanlage (Split-Gerät) im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Klimaanlage (Split-Gerät) verbraucht im Schnitt ca. 450 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 157,50 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Klimaanlage (Split-Gerät)?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 900 Watt kostet eine Stunde Laufzeit rund 0,315 € (ca. 31,5 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Klimaanlage (Split-Gerät)?",
          "answer": "Die monatlichen Stromkosten für Klimaanlage (Split-Gerät) liegen bei durchschnittlicher Nutzung bei ca. 13,13 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Klimaanlage (Split-Gerät)?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 900 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 630 W und 1350 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Klimaanlage (Split-Gerät)?",
          "answer": "Ein typischer Einsatz von Klimaanlage (Split-Gerät) verursacht Stromkosten von ca. 1,50 € / Hitzetag."
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
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 900 W × 1 h ÷ 1.000 × 0,35 € = 0,315 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Klimaanlage (Split-Gerät)?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilator (Standventilator)",
      "category": "Klima & Heizen",
      "shortDescription": "Ventilator (Standventilator) verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Ventilator (Standventilator) im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Ventilator (Standventilator) verbraucht im Schnitt ca. 35 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 12,25 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Ventilator (Standventilator)?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 45 Watt kostet eine Stunde Laufzeit rund 0,016 € (ca. 1,6 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Ventilator (Standventilator)?",
          "answer": "Die monatlichen Stromkosten für Ventilator (Standventilator) liegen bei durchschnittlicher Nutzung bei ca. 1,02 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Ventilator (Standventilator)?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 45 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 31 W und 68 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Ventilator (Standventilator)?",
          "answer": "Ein typischer Einsatz von Ventilator (Standventilator) verursacht Stromkosten von ca. 0,13 € / Tag (8h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Ventilator (Standventilator) sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Ventilator (Standventilator) auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Ventilator (Standventilator)?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Ventilator (Standventilator) exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 45 W × 1 h ÷ 1.000 × 0,35 € = 0,016 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Ventilator (Standventilator)?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "heizluefter": {
      "name": "Heizlüfter / Radiator",
      "category": "Klima & Heizen",
      "shortDescription": "Heizlüfter / Radiator verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Heizlüfter / Radiator im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Heizlüfter / Radiator verbraucht im Schnitt ca. 360 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 126,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Heizlüfter / Radiator?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 2000 Watt kostet eine Stunde Laufzeit rund 0,700 € (ca. 70,0 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Heizlüfter / Radiator?",
          "answer": "Die monatlichen Stromkosten für Heizlüfter / Radiator liegen bei durchschnittlicher Nutzung bei ca. 10,50 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Heizlüfter / Radiator?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 2000 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1400 W und 3000 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Heizlüfter / Radiator?",
          "answer": "Ein typischer Einsatz von Heizlüfter / Radiator verursacht Stromkosten von ca. 2,10 € / Tag (3h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Heizlüfter / Radiator sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Heizlüfter / Radiator auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Heizlüfter / Radiator?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Heizlüfter / Radiator exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Heizlüfter / Radiator?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Luftentfeuchter",
      "category": "Klima & Heizen",
      "shortDescription": "Luftentfeuchter verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Luftentfeuchter im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Luftentfeuchter verbraucht im Schnitt ca. 300 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 105,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Luftentfeuchter?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 250 Watt kostet eine Stunde Laufzeit rund 0,087 € (ca. 8,8 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Luftentfeuchter?",
          "answer": "Die monatlichen Stromkosten für Luftentfeuchter liegen bei durchschnittlicher Nutzung bei ca. 8,75 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Luftentfeuchter?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 250 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 175 W und 375 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Luftentfeuchter?",
          "answer": "Ein typischer Einsatz von Luftentfeuchter verursacht Stromkosten von ca. 0,52 € / Tag (6h)."
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
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 250 W × 1 h ÷ 1.000 × 0,35 € = 0,087 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Luftentfeuchter?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "aquarium": {
      "name": "Aquarium (100–200 L)",
      "category": "Hobby & Spezial",
      "shortDescription": "Aquarium (100–200 L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Aquarium (100–200 L) im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Aquarium (100–200 L) verbraucht im Schnitt ca. 400 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 140,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Aquarium (100–200 L)?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 120 Watt kostet eine Stunde Laufzeit rund 0,042 € (ca. 4,2 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Aquarium (100–200 L)?",
          "answer": "Die monatlichen Stromkosten für Aquarium (100–200 L) liegen bei durchschnittlicher Nutzung bei ca. 11,67 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Aquarium (100–200 L)?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 120 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 84 W und 180 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Aquarium (100–200 L)?",
          "answer": "Ein typischer Einsatz von Aquarium (100–200 L) verursacht Stromkosten von ca. 0,38 € / Tag."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Aquarium (100–200 L) sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Aquarium (100–200 L) auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Aquarium (100–200 L)?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Aquarium (100–200 L) exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Aquarium (100–200 L)?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "pool": {
      "name": "Poolpumpe & Filter",
      "category": "Hobby & Spezial",
      "shortDescription": "Poolpumpe & Filter verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Poolpumpe & Filter im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Poolpumpe & Filter verbraucht im Schnitt ca. 700 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 245,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Poolpumpe & Filter?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 600 Watt kostet eine Stunde Laufzeit rund 0,210 € (ca. 21,0 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Poolpumpe & Filter?",
          "answer": "Die monatlichen Stromkosten für Poolpumpe & Filter liegen bei durchschnittlicher Nutzung bei ca. 20,42 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Poolpumpe & Filter?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 600 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 420 W und 900 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Poolpumpe & Filter?",
          "answer": "Ein typischer Einsatz von Poolpumpe & Filter verursacht Stromkosten von ca. 1,26 € / Tag (6h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Poolpumpe & Filter sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Poolpumpe & Filter auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Poolpumpe & Filter?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Poolpumpe & Filter exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 600 W × 1 h ÷ 1.000 × 0,35 € = 0,210 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Poolpumpe & Filter?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "whirlpool": {
      "name": "Whirlpool / Hot Tub",
      "category": "Hobby & Spezial",
      "shortDescription": "Whirlpool / Hot Tub verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Whirlpool / Hot Tub im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Whirlpool / Hot Tub verbraucht im Schnitt ca. 2500 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 875,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Whirlpool / Hot Tub?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 2000 Watt kostet eine Stunde Laufzeit rund 0,700 € (ca. 70,0 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Whirlpool / Hot Tub?",
          "answer": "Die monatlichen Stromkosten für Whirlpool / Hot Tub liegen bei durchschnittlicher Nutzung bei ca. 72,92 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Whirlpool / Hot Tub?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 2000 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 1400 W und 3000 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Whirlpool / Hot Tub?",
          "answer": "Ein typischer Einsatz von Whirlpool / Hot Tub verursacht Stromkosten von ca. 2,40 € / Tag."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Whirlpool / Hot Tub sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Whirlpool / Hot Tub auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Whirlpool / Hot Tub?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Whirlpool / Hot Tub exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Whirlpool / Hot Tub?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "3d-drucker": {
      "name": "3D-Drucker (FDM)",
      "category": "Hobby & Spezial",
      "shortDescription": "3D-Drucker (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
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
      ]
    },
    "nas": {
      "name": "NAS-Server (Heimspeicher)",
      "category": "Unterhaltung & Büro",
      "shortDescription": "NAS-Server (Heimspeicher) verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein NAS-Server (Heimspeicher) im Durchschnitt pro Jahr?",
          "answer": "Ein moderner NAS-Server (Heimspeicher) verbraucht im Schnitt ca. 220 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 77,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von NAS-Server (Heimspeicher)?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 30 Watt kostet eine Stunde Laufzeit rund 0,011 € (ca. 1,1 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für NAS-Server (Heimspeicher)?",
          "answer": "Die monatlichen Stromkosten für NAS-Server (Heimspeicher) liegen bei durchschnittlicher Nutzung bei ca. 6,42 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer NAS-Server (Heimspeicher)?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 30 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 21 W und 45 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von NAS-Server (Heimspeicher)?",
          "answer": "Ein typischer Einsatz von NAS-Server (Heimspeicher) verursacht Stromkosten von ca. 0,21 € / Tag (24h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von NAS-Server (Heimspeicher) sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht NAS-Server (Heimspeicher) auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten NAS-Server (Heimspeicher)?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von NAS-Server (Heimspeicher) exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 30 W × 1 h ÷ 1.000 × 0,35 € = 0,011 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für NAS-Server (Heimspeicher)?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    },
    "server": {
      "name": "Home-Server / Homelab",
      "category": "Unterhaltung & Büro",
      "shortDescription": "Home-Server / Homelab verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Wie viel Strom verbraucht ein Home-Server / Homelab im Durchschnitt pro Jahr?",
          "answer": "Ein moderner Home-Server / Homelab verbraucht im Schnitt ca. 500 kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa 175,00 Euro."
        },
        {
          "question": "Was kostet 1 Stunde Betrieb von Home-Server / Homelab?",
          "answer": "Bei einer durchschnittlichen Leistung von ca. 65 Watt kostet eine Stunde Laufzeit rund 0,023 € (ca. 2,3 Cent)."
        },
        {
          "question": "Wie hoch sind die monatlichen Stromkosten für Home-Server / Homelab?",
          "answer": "Die monatlichen Stromkosten für Home-Server / Homelab liegen bei durchschnittlicher Nutzung bei ca. 14,58 € pro Monat."
        },
        {
          "question": "Wie viel Watt Leistung hat ein typischer Home-Server / Homelab?",
          "answer": "Die typische Anschlussleistung liegt bei ca. 65 Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen 46 W und 98 W schwanken."
        },
        {
          "question": "Was kostet ein einzelner Nutzungsvorgang von Home-Server / Homelab?",
          "answer": "Ein typischer Einsatz von Home-Server / Homelab verursacht Stromkosten von ca. 0,48 € / Tag (24h)."
        },
        {
          "question": "Wie kann man den Stromverbrauch von Home-Server / Homelab sofort um 15–25 % senken?",
          "answer": "Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus."
        },
        {
          "question": "Verbraucht Home-Server / Homelab auch Strom im Standby-Modus?",
          "answer": "Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr)."
        },
        {
          "question": "Lohnt sich der Neukauf eines energieeffizienten Home-Server / Homelab?",
          "answer": "Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert."
        },
        {
          "question": "Wie berechne ich den Stromverbrauch von Home-Server / Homelab exakt selbst?",
          "answer": "Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: 65 W × 1 h ÷ 1.000 × 0,35 € = 0,023 €."
        },
        {
          "question": "Welches ist das sparsamste Programm oder die beste Einstellung für Home-Server / Homelab?",
          "answer": "Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen."
        }
      ]
    }
  },
  "en": {
    "kuehlschrank": {
      "name": "Refrigerator",
      "category": "Kitchen",
      "shortDescription": "Refrigerator verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Refrigerator consume on average per year?",
          "answer": "A standard Refrigerator consumes approx. 120 kWh of electricity annually, which amounts to roughly €42,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Refrigerator cost?",
          "answer": "At an average power draw of 90 Watts, one hour of operation costs approximately €0,031."
        },
        {
          "question": "What are the typical monthly electricity costs for a Refrigerator?",
          "answer": "Monthly electricity expenses for a Refrigerator average around €3.50 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Refrigerator?",
          "answer": "The typical power rating is approximately 90 Watts, fluctuating between 63 W and 135 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Refrigerator cost?",
          "answer": "A single typical cycle or daily use of a Refrigerator costs roughly 0,12 € / Tag."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Refrigerator by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Refrigerator consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Refrigerator with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Refrigerator?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 90 W × 1 hr ÷ 1,000 × €0.35 = €0,031."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Refrigerator?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "waschmaschine": {
      "name": "Washing Machine",
      "category": "Household & Cleaning",
      "shortDescription": "Washing Machine verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Washing Machine consume on average per year?",
          "answer": "A standard Washing Machine consumes approx. 140 kWh of electricity annually, which amounts to roughly €49,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Washing Machine cost?",
          "answer": "At an average power draw of 2000 Watts, one hour of operation costs approximately €0,700."
        },
        {
          "question": "What are the typical monthly electricity costs for a Washing Machine?",
          "answer": "Monthly electricity expenses for a Washing Machine average around €4.08 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Washing Machine?",
          "answer": "The typical power rating is approximately 2000 Watts, fluctuating between 1400 W and 3000 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Washing Machine cost?",
          "answer": "A single typical cycle or daily use of a Washing Machine costs roughly 0,25 € / Waschgang."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Washing Machine by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Washing Machine consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Washing Machine with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Washing Machine?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 2000 W × 1 hr ÷ 1,000 × €0.35 = €0,700."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Washing Machine?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "trockner": {
      "name": "Tumble Dryer",
      "category": "Household & Cleaning",
      "shortDescription": "Tumble Dryer verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Tumble Dryer consume on average per year?",
          "answer": "A standard Tumble Dryer consumes approx. 180 kWh of electricity annually, which amounts to roughly €63,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Tumble Dryer cost?",
          "answer": "At an average power draw of 1500 Watts, one hour of operation costs approximately €0,525."
        },
        {
          "question": "What are the typical monthly electricity costs for a Tumble Dryer?",
          "answer": "Monthly electricity expenses for a Tumble Dryer average around €5.25 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Tumble Dryer?",
          "answer": "The typical power rating is approximately 1500 Watts, fluctuating between 1050 W and 2250 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Tumble Dryer cost?",
          "answer": "A single typical cycle or daily use of a Tumble Dryer costs roughly 0,45 € / Ladung."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Tumble Dryer by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Tumble Dryer consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Tumble Dryer with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Tumble Dryer?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 1500 W × 1 hr ÷ 1,000 × €0.35 = €0,525."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Tumble Dryer?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Dishwasher",
      "category": "Kitchen",
      "shortDescription": "Dishwasher verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Dishwasher consume on average per year?",
          "answer": "A standard Dishwasher consumes approx. 160 kWh of electricity annually, which amounts to roughly €56,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Dishwasher cost?",
          "answer": "At an average power draw of 1800 Watts, one hour of operation costs approximately €0,630."
        },
        {
          "question": "What are the typical monthly electricity costs for a Dishwasher?",
          "answer": "Monthly electricity expenses for a Dishwasher average around €4.67 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Dishwasher?",
          "answer": "The typical power rating is approximately 1800 Watts, fluctuating between 1260 W and 2700 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Dishwasher cost?",
          "answer": "A single typical cycle or daily use of a Dishwasher costs roughly 0,28 € / Spülgang."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Dishwasher by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Dishwasher consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Dishwasher with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Dishwasher?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 1800 W × 1 hr ÷ 1,000 × €0.35 = €0,630."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Dishwasher?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "backofen": {
      "name": "Electric Oven",
      "category": "Kitchen",
      "shortDescription": "Electric Oven verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric Oven consume on average per year?",
          "answer": "A standard Electric Oven consumes approx. 150 kWh of electricity annually, which amounts to roughly €52,50 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Electric Oven cost?",
          "answer": "At an average power draw of 2500 Watts, one hour of operation costs approximately €0,875."
        },
        {
          "question": "What are the typical monthly electricity costs for a Electric Oven?",
          "answer": "Monthly electricity expenses for a Electric Oven average around €4.38 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Electric Oven?",
          "answer": "The typical power rating is approximately 2500 Watts, fluctuating between 1750 W and 3750 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Electric Oven cost?",
          "answer": "A single typical cycle or daily use of a Electric Oven costs roughly 0,55 € / Nutzung."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Electric Oven by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Electric Oven consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Electric Oven with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Electric Oven?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 2500 W × 1 hr ÷ 1,000 × €0.35 = €0,875."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Electric Oven?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "herd": {
      "name": "Electric & Induction Cooktop",
      "category": "Kitchen",
      "shortDescription": "Electric & Induction Cooktop verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric & Induction Cooktop consume on average per year?",
          "answer": "A standard Electric & Induction Cooktop consumes approx. 220 kWh of electricity annually, which amounts to roughly €77,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Electric & Induction Cooktop cost?",
          "answer": "At an average power draw of 2000 Watts, one hour of operation costs approximately €0,700."
        },
        {
          "question": "What are the typical monthly electricity costs for a Electric & Induction Cooktop?",
          "answer": "Monthly electricity expenses for a Electric & Induction Cooktop average around €6.42 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Electric & Induction Cooktop?",
          "answer": "The typical power rating is approximately 2000 Watts, fluctuating between 1400 W and 3000 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Electric & Induction Cooktop cost?",
          "answer": "A single typical cycle or daily use of a Electric & Induction Cooktop costs roughly 0,35 € / Kochen."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Electric & Induction Cooktop by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Electric & Induction Cooktop consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Electric & Induction Cooktop with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Electric & Induction Cooktop?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 2000 W × 1 hr ÷ 1,000 × €0.35 = €0,700."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Electric & Induction Cooktop?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "wasserkocher": {
      "name": "Electric Kettle",
      "category": "Kitchen",
      "shortDescription": "Electric Kettle verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric Kettle consume on average per year?",
          "answer": "A standard Electric Kettle consumes approx. 80 kWh of electricity annually, which amounts to roughly €28,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Electric Kettle cost?",
          "answer": "At an average power draw of 2200 Watts, one hour of operation costs approximately €0,770."
        },
        {
          "question": "What are the typical monthly electricity costs for a Electric Kettle?",
          "answer": "Monthly electricity expenses for a Electric Kettle average around €2.33 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Electric Kettle?",
          "answer": "The typical power rating is approximately 2200 Watts, fluctuating between 1540 W and 3300 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Electric Kettle cost?",
          "answer": "A single typical cycle or daily use of a Electric Kettle costs roughly 0,03 € / Kochen."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Electric Kettle by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Electric Kettle consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Electric Kettle with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Electric Kettle?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 2200 W × 1 hr ÷ 1,000 × €0.35 = €0,770."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Electric Kettle?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Coffee Machine",
      "category": "Kitchen",
      "shortDescription": "Coffee Machine verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Coffee Machine consume on average per year?",
          "answer": "A standard Coffee Machine consumes approx. 110 kWh of electricity annually, which amounts to roughly €38,50 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Coffee Machine cost?",
          "answer": "At an average power draw of 1450 Watts, one hour of operation costs approximately €0,507."
        },
        {
          "question": "What are the typical monthly electricity costs for a Coffee Machine?",
          "answer": "Monthly electricity expenses for a Coffee Machine average around €3.21 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Coffee Machine?",
          "answer": "The typical power rating is approximately 1450 Watts, fluctuating between 1015 W and 2175 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Coffee Machine cost?",
          "answer": "A single typical cycle or daily use of a Coffee Machine costs roughly 0,04 € / Tasse."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Coffee Machine by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Coffee Machine consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Coffee Machine with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Coffee Machine?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 1450 W × 1 hr ÷ 1,000 × €0.35 = €0,507."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Coffee Machine?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "fernseher": {
      "name": "Smart TV (55-65\")",
      "category": "Entertainment & Office",
      "shortDescription": "Smart TV (55-65\") verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Smart TV (55-65\") consume on average per year?",
          "answer": "A standard Smart TV (55-65\") consumes approx. 175 kWh of electricity annually, which amounts to roughly €61,25 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Smart TV (55-65\") cost?",
          "answer": "At an average power draw of 120 Watts, one hour of operation costs approximately €0,042."
        },
        {
          "question": "What are the typical monthly electricity costs for a Smart TV (55-65\")?",
          "answer": "Monthly electricity expenses for a Smart TV (55-65\") average around €5.10 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Smart TV (55-65\")?",
          "answer": "The typical power rating is approximately 120 Watts, fluctuating between 84 W and 180 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Smart TV (55-65\") cost?",
          "answer": "A single typical cycle or daily use of a Smart TV (55-65\") costs roughly 0,17 € / Tag (4h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Smart TV (55-65\") by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Smart TV (55-65\") consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Smart TV (55-65\") with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Smart TV (55-65\")?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 120 W × 1 hr ÷ 1,000 × €0.35 = €0,042."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Smart TV (55-65\")?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "gaming-pc": {
      "name": "Gaming PC (High-End)",
      "category": "Entertainment & Office",
      "shortDescription": "Gaming PC (High-End) verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Gaming PC (High-End) consume on average per year?",
          "answer": "A standard Gaming PC (High-End) consumes approx. 490 kWh of electricity annually, which amounts to roughly €171,50 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Gaming PC (High-End) cost?",
          "answer": "At an average power draw of 450 Watts, one hour of operation costs approximately €0,158."
        },
        {
          "question": "What are the typical monthly electricity costs for a Gaming PC (High-End)?",
          "answer": "Monthly electricity expenses for a Gaming PC (High-End) average around €14.29 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Gaming PC (High-End)?",
          "answer": "The typical power rating is approximately 450 Watts, fluctuating between 315 W and 675 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Gaming PC (High-End) cost?",
          "answer": "A single typical cycle or daily use of a Gaming PC (High-End) costs roughly 0,47 € / Session (3h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Gaming PC (High-End) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Gaming PC (High-End) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Gaming PC (High-End) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Gaming PC (High-End)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 450 W × 1 hr ÷ 1,000 × €0.35 = €0,158."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Gaming PC (High-End)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "pc": {
      "name": "Desktop PC (Office)",
      "category": "Entertainment & Office",
      "shortDescription": "Desktop PC (Office) verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Desktop PC (Office) consume on average per year?",
          "answer": "A standard Desktop PC (Office) consumes approx. 200 kWh of electricity annually, which amounts to roughly €70,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Desktop PC (Office) cost?",
          "answer": "At an average power draw of 120 Watts, one hour of operation costs approximately €0,042."
        },
        {
          "question": "What are the typical monthly electricity costs for a Desktop PC (Office)?",
          "answer": "Monthly electricity expenses for a Desktop PC (Office) average around €5.83 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Desktop PC (Office)?",
          "answer": "The typical power rating is approximately 120 Watts, fluctuating between 84 W and 180 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Desktop PC (Office) cost?",
          "answer": "A single typical cycle or daily use of a Desktop PC (Office) costs roughly 0,34 € / Arbeitstag (8h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Desktop PC (Office) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Desktop PC (Office) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Desktop PC (Office) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Desktop PC (Office)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 120 W × 1 hr ÷ 1,000 × €0.35 = €0,042."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Desktop PC (Office)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "laptop": {
      "name": "Laptop / Notebook",
      "category": "Entertainment & Office",
      "shortDescription": "Laptop / Notebook verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Laptop / Notebook consume on average per year?",
          "answer": "A standard Laptop / Notebook consumes approx. 80 kWh of electricity annually, which amounts to roughly €28,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Laptop / Notebook cost?",
          "answer": "At an average power draw of 50 Watts, one hour of operation costs approximately €0,018."
        },
        {
          "question": "What are the typical monthly electricity costs for a Laptop / Notebook?",
          "answer": "Monthly electricity expenses for a Laptop / Notebook average around €2.33 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Laptop / Notebook?",
          "answer": "The typical power rating is approximately 50 Watts, fluctuating between 35 W and 75 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Laptop / Notebook cost?",
          "answer": "A single typical cycle or daily use of a Laptop / Notebook costs roughly 0,14 € / Arbeitstag (8h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Laptop / Notebook by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Laptop / Notebook consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Laptop / Notebook with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Laptop / Notebook?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 50 W × 1 hr ÷ 1,000 × €0.35 = €0,018."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Laptop / Notebook?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "monitor": {
      "name": "PC Monitor (27-32\")",
      "category": "Entertainment & Office",
      "shortDescription": "PC Monitor (27-32\") verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a PC Monitor (27-32\") consume on average per year?",
          "answer": "A standard PC Monitor (27-32\") consumes approx. 60 kWh of electricity annually, which amounts to roughly €21,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a PC Monitor (27-32\") cost?",
          "answer": "At an average power draw of 35 Watts, one hour of operation costs approximately €0,012."
        },
        {
          "question": "What are the typical monthly electricity costs for a PC Monitor (27-32\")?",
          "answer": "Monthly electricity expenses for a PC Monitor (27-32\") average around €1.75 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a PC Monitor (27-32\")?",
          "answer": "The typical power rating is approximately 35 Watts, fluctuating between 25 W and 53 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a PC Monitor (27-32\") cost?",
          "answer": "A single typical cycle or daily use of a PC Monitor (27-32\") costs roughly 0,10 € / Tag."
        },
        {
          "question": "How can you immediately cut electricity consumption of a PC Monitor (27-32\") by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a PC Monitor (27-32\") consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old PC Monitor (27-32\") with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a PC Monitor (27-32\")?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 35 W × 1 hr ÷ 1,000 × €0.35 = €0,012."
        },
        {
          "question": "What is the most energy-efficient setting or program for a PC Monitor (27-32\")?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Entertainment & Office",
      "shortDescription": "PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a PlayStation 5 (PS5) consume on average per year?",
          "answer": "A standard PlayStation 5 (PS5) consumes approx. 150 kWh of electricity annually, which amounts to roughly €52,50 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a PlayStation 5 (PS5) cost?",
          "answer": "At an average power draw of 200 Watts, one hour of operation costs approximately €0,070."
        },
        {
          "question": "What are the typical monthly electricity costs for a PlayStation 5 (PS5)?",
          "answer": "Monthly electricity expenses for a PlayStation 5 (PS5) average around €4.38 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a PlayStation 5 (PS5)?",
          "answer": "The typical power rating is approximately 200 Watts, fluctuating between 140 W and 300 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a PlayStation 5 (PS5) cost?",
          "answer": "A single typical cycle or daily use of a PlayStation 5 (PS5) costs roughly 0,14 € / Gaming (2h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a PlayStation 5 (PS5) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a PlayStation 5 (PS5) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old PlayStation 5 (PS5) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a PlayStation 5 (PS5)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 200 W × 1 hr ÷ 1,000 × €0.35 = €0,070."
        },
        {
          "question": "What is the most energy-efficient setting or program for a PlayStation 5 (PS5)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Entertainment & Office",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Xbox Series X consume on average per year?",
          "answer": "A standard Xbox Series X consumes approx. 140 kWh of electricity annually, which amounts to roughly €49,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Xbox Series X cost?",
          "answer": "At an average power draw of 180 Watts, one hour of operation costs approximately €0,063."
        },
        {
          "question": "What are the typical monthly electricity costs for a Xbox Series X?",
          "answer": "Monthly electricity expenses for a Xbox Series X average around €4.08 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Xbox Series X?",
          "answer": "The typical power rating is approximately 180 Watts, fluctuating between 126 W and 270 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Xbox Series X cost?",
          "answer": "A single typical cycle or daily use of a Xbox Series X costs roughly 0,13 € / Gaming (2h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Xbox Series X by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Xbox Series X consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Xbox Series X with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Xbox Series X?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 180 W × 1 hr ÷ 1,000 × €0.35 = €0,063."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Xbox Series X?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "klimaanlage": {
      "name": "Air Conditioner (Split System)",
      "category": "Climate & Heating",
      "shortDescription": "Air Conditioner (Split System) verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Air Conditioner (Split System) consume on average per year?",
          "answer": "A standard Air Conditioner (Split System) consumes approx. 450 kWh of electricity annually, which amounts to roughly €157,50 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Air Conditioner (Split System) cost?",
          "answer": "At an average power draw of 900 Watts, one hour of operation costs approximately €0,315."
        },
        {
          "question": "What are the typical monthly electricity costs for a Air Conditioner (Split System)?",
          "answer": "Monthly electricity expenses for a Air Conditioner (Split System) average around €13.13 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Air Conditioner (Split System)?",
          "answer": "The typical power rating is approximately 900 Watts, fluctuating between 630 W and 1350 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Air Conditioner (Split System) cost?",
          "answer": "A single typical cycle or daily use of a Air Conditioner (Split System) costs roughly 1,50 € / Hitzetag."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Air Conditioner (Split System) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Air Conditioner (Split System) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Air Conditioner (Split System) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Air Conditioner (Split System)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 900 W × 1 hr ÷ 1,000 × €0.35 = €0,315."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Air Conditioner (Split System)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "ventilator": {
      "name": "Standing Fan",
      "category": "Climate & Heating",
      "shortDescription": "Standing Fan verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Standing Fan consume on average per year?",
          "answer": "A standard Standing Fan consumes approx. 35 kWh of electricity annually, which amounts to roughly €12,25 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Standing Fan cost?",
          "answer": "At an average power draw of 45 Watts, one hour of operation costs approximately €0,016."
        },
        {
          "question": "What are the typical monthly electricity costs for a Standing Fan?",
          "answer": "Monthly electricity expenses for a Standing Fan average around €1.02 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Standing Fan?",
          "answer": "The typical power rating is approximately 45 Watts, fluctuating between 31 W and 68 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Standing Fan cost?",
          "answer": "A single typical cycle or daily use of a Standing Fan costs roughly 0,13 € / Tag (8h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Standing Fan by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Standing Fan consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Standing Fan with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Standing Fan?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 45 W × 1 hr ÷ 1,000 × €0.35 = €0,016."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Standing Fan?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "heizluefter": {
      "name": "Electric Fan Heater / Radiator",
      "category": "Climate & Heating",
      "shortDescription": "Electric Fan Heater / Radiator verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Electric Fan Heater / Radiator consume on average per year?",
          "answer": "A standard Electric Fan Heater / Radiator consumes approx. 360 kWh of electricity annually, which amounts to roughly €126,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Electric Fan Heater / Radiator cost?",
          "answer": "At an average power draw of 2000 Watts, one hour of operation costs approximately €0,700."
        },
        {
          "question": "What are the typical monthly electricity costs for a Electric Fan Heater / Radiator?",
          "answer": "Monthly electricity expenses for a Electric Fan Heater / Radiator average around €10.50 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Electric Fan Heater / Radiator?",
          "answer": "The typical power rating is approximately 2000 Watts, fluctuating between 1400 W and 3000 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Electric Fan Heater / Radiator cost?",
          "answer": "A single typical cycle or daily use of a Electric Fan Heater / Radiator costs roughly 2,10 € / Tag (3h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Electric Fan Heater / Radiator by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Electric Fan Heater / Radiator consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Electric Fan Heater / Radiator with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Electric Fan Heater / Radiator?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 2000 W × 1 hr ÷ 1,000 × €0.35 = €0,700."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Electric Fan Heater / Radiator?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Dehumidifier",
      "category": "Climate & Heating",
      "shortDescription": "Dehumidifier verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Dehumidifier consume on average per year?",
          "answer": "A standard Dehumidifier consumes approx. 300 kWh of electricity annually, which amounts to roughly €105,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Dehumidifier cost?",
          "answer": "At an average power draw of 250 Watts, one hour of operation costs approximately €0,087."
        },
        {
          "question": "What are the typical monthly electricity costs for a Dehumidifier?",
          "answer": "Monthly electricity expenses for a Dehumidifier average around €8.75 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Dehumidifier?",
          "answer": "The typical power rating is approximately 250 Watts, fluctuating between 175 W and 375 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Dehumidifier cost?",
          "answer": "A single typical cycle or daily use of a Dehumidifier costs roughly 0,52 € / Tag (6h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Dehumidifier by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Dehumidifier consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Dehumidifier with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Dehumidifier?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 250 W × 1 hr ÷ 1,000 × €0.35 = €0,087."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Dehumidifier?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "aquarium": {
      "name": "Aquarium (100–200 L)",
      "category": "Hobby & Special",
      "shortDescription": "Aquarium (100–200 L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Aquarium (100–200 L) consume on average per year?",
          "answer": "A standard Aquarium (100–200 L) consumes approx. 400 kWh of electricity annually, which amounts to roughly €140,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Aquarium (100–200 L) cost?",
          "answer": "At an average power draw of 120 Watts, one hour of operation costs approximately €0,042."
        },
        {
          "question": "What are the typical monthly electricity costs for a Aquarium (100–200 L)?",
          "answer": "Monthly electricity expenses for a Aquarium (100–200 L) average around €11.67 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Aquarium (100–200 L)?",
          "answer": "The typical power rating is approximately 120 Watts, fluctuating between 84 W and 180 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Aquarium (100–200 L) cost?",
          "answer": "A single typical cycle or daily use of a Aquarium (100–200 L) costs roughly 0,38 € / Tag."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Aquarium (100–200 L) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Aquarium (100–200 L) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Aquarium (100–200 L) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Aquarium (100–200 L)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 120 W × 1 hr ÷ 1,000 × €0.35 = €0,042."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Aquarium (100–200 L)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "pool": {
      "name": "Pool Pump & Filter System",
      "category": "Hobby & Special",
      "shortDescription": "Pool Pump & Filter System verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Pool Pump & Filter System consume on average per year?",
          "answer": "A standard Pool Pump & Filter System consumes approx. 700 kWh of electricity annually, which amounts to roughly €245,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Pool Pump & Filter System cost?",
          "answer": "At an average power draw of 600 Watts, one hour of operation costs approximately €0,210."
        },
        {
          "question": "What are the typical monthly electricity costs for a Pool Pump & Filter System?",
          "answer": "Monthly electricity expenses for a Pool Pump & Filter System average around €20.42 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Pool Pump & Filter System?",
          "answer": "The typical power rating is approximately 600 Watts, fluctuating between 420 W and 900 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Pool Pump & Filter System cost?",
          "answer": "A single typical cycle or daily use of a Pool Pump & Filter System costs roughly 1,26 € / Tag (6h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Pool Pump & Filter System by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Pool Pump & Filter System consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Pool Pump & Filter System with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Pool Pump & Filter System?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 600 W × 1 hr ÷ 1,000 × €0.35 = €0,210."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Pool Pump & Filter System?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "whirlpool": {
      "name": "Inflatable Hot Tub / Whirlpool",
      "category": "Hobby & Special",
      "shortDescription": "Inflatable Hot Tub / Whirlpool verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Inflatable Hot Tub / Whirlpool consume on average per year?",
          "answer": "A standard Inflatable Hot Tub / Whirlpool consumes approx. 2500 kWh of electricity annually, which amounts to roughly €875,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Inflatable Hot Tub / Whirlpool cost?",
          "answer": "At an average power draw of 2000 Watts, one hour of operation costs approximately €0,700."
        },
        {
          "question": "What are the typical monthly electricity costs for a Inflatable Hot Tub / Whirlpool?",
          "answer": "Monthly electricity expenses for a Inflatable Hot Tub / Whirlpool average around €72.92 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Inflatable Hot Tub / Whirlpool?",
          "answer": "The typical power rating is approximately 2000 Watts, fluctuating between 1400 W and 3000 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Inflatable Hot Tub / Whirlpool cost?",
          "answer": "A single typical cycle or daily use of a Inflatable Hot Tub / Whirlpool costs roughly 2,40 € / Tag."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Inflatable Hot Tub / Whirlpool by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Inflatable Hot Tub / Whirlpool consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Inflatable Hot Tub / Whirlpool with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Inflatable Hot Tub / Whirlpool?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 2000 W × 1 hr ÷ 1,000 × €0.35 = €0,700."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Inflatable Hot Tub / Whirlpool?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "3d-drucker": {
      "name": "3D Printer (FDM)",
      "category": "Hobby & Special",
      "shortDescription": "3D Printer (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a 3D Printer (FDM) consume on average per year?",
          "answer": "A standard 3D Printer (FDM) consumes approx. 120 kWh of electricity annually, which amounts to roughly €42,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a 3D Printer (FDM) cost?",
          "answer": "At an average power draw of 150 Watts, one hour of operation costs approximately €0,052."
        },
        {
          "question": "What are the typical monthly electricity costs for a 3D Printer (FDM)?",
          "answer": "Monthly electricity expenses for a 3D Printer (FDM) average around €3.50 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a 3D Printer (FDM)?",
          "answer": "The typical power rating is approximately 150 Watts, fluctuating between 105 W and 225 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a 3D Printer (FDM) cost?",
          "answer": "A single typical cycle or daily use of a 3D Printer (FDM) costs roughly 0,42 € / Druck (8h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a 3D Printer (FDM) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a 3D Printer (FDM) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old 3D Printer (FDM) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a 3D Printer (FDM)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 150 W × 1 hr ÷ 1,000 × €0.35 = €0,052."
        },
        {
          "question": "What is the most energy-efficient setting or program for a 3D Printer (FDM)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "nas": {
      "name": "NAS Storage Server (24/7)",
      "category": "Entertainment & Office",
      "shortDescription": "NAS Storage Server (24/7) verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a NAS Storage Server (24/7) consume on average per year?",
          "answer": "A standard NAS Storage Server (24/7) consumes approx. 220 kWh of electricity annually, which amounts to roughly €77,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a NAS Storage Server (24/7) cost?",
          "answer": "At an average power draw of 30 Watts, one hour of operation costs approximately €0,011."
        },
        {
          "question": "What are the typical monthly electricity costs for a NAS Storage Server (24/7)?",
          "answer": "Monthly electricity expenses for a NAS Storage Server (24/7) average around €6.42 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a NAS Storage Server (24/7)?",
          "answer": "The typical power rating is approximately 30 Watts, fluctuating between 21 W and 45 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a NAS Storage Server (24/7) cost?",
          "answer": "A single typical cycle or daily use of a NAS Storage Server (24/7) costs roughly 0,21 € / Tag (24h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a NAS Storage Server (24/7) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a NAS Storage Server (24/7) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old NAS Storage Server (24/7) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a NAS Storage Server (24/7)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 30 W × 1 hr ÷ 1,000 × €0.35 = €0,011."
        },
        {
          "question": "What is the most energy-efficient setting or program for a NAS Storage Server (24/7)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    },
    "server": {
      "name": "Home Server / Homelab (24/7)",
      "category": "Entertainment & Office",
      "shortDescription": "Home Server / Homelab (24/7) verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "How much electricity does a Home Server / Homelab (24/7) consume on average per year?",
          "answer": "A standard Home Server / Homelab (24/7) consumes approx. 500 kWh of electricity annually, which amounts to roughly €175,00 in power costs at €0.35/kWh."
        },
        {
          "question": "How much does 1 hour of running a Home Server / Homelab (24/7) cost?",
          "answer": "At an average power draw of 65 Watts, one hour of operation costs approximately €0,023."
        },
        {
          "question": "What are the typical monthly electricity costs for a Home Server / Homelab (24/7)?",
          "answer": "Monthly electricity expenses for a Home Server / Homelab (24/7) average around €14.58 under normal household usage."
        },
        {
          "question": "What is the typical power rating in Watts for a Home Server / Homelab (24/7)?",
          "answer": "The typical power rating is approximately 65 Watts, fluctuating between 46 W and 98 W depending on the active cycle."
        },
        {
          "question": "How much does a single cycle or use of a Home Server / Homelab (24/7) cost?",
          "answer": "A single typical cycle or daily use of a Home Server / Homelab (24/7) costs roughly 0,48 € / Tag (24h)."
        },
        {
          "question": "How can you immediately cut electricity consumption of a Home Server / Homelab (24/7) by 15–25%?",
          "answer": "Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings."
        },
        {
          "question": "Does a Home Server / Homelab (24/7) consume power in standby mode?",
          "answer": "Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill."
        },
        {
          "question": "Is it worth replacing an old Home Server / Homelab (24/7) with an energy-efficient model?",
          "answer": "If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years."
        },
        {
          "question": "How do you calculate the exact running costs of a Home Server / Homelab (24/7)?",
          "answer": "Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: 65 W × 1 hr ÷ 1,000 × €0.35 = €0,023."
        },
        {
          "question": "What is the most energy-efficient setting or program for a Home Server / Homelab (24/7)?",
          "answer": "Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw."
        }
      ]
    }
  },
  "es": {
    "kuehlschrank": {
      "name": "Frigorífico",
      "category": "Cocina",
      "shortDescription": "Frigorífico verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Frigorífico de media al año?",
          "answer": "Un Frigorífico moderno consume una media de 120 kWh de electricidad al año, lo que equivale a unos 42,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Frigorífico?",
          "answer": "Con una potencia media de unos 90 Vatios, una hora de uso cuesta aproximadamente 0,031 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Frigorífico?",
          "answer": "El coste mensual en la factura de la luz ronda los 3,50 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Frigorífico típico?",
          "answer": "La potencia media se sitúa en unos 90 Vatios, oscilando entre 63 W y 135 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Frigorífico?",
          "answer": "Un uso típico de Frigorífico supone un gasto de unos 0,12 € / Tag."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Frigorífico entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Frigorífico cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Frigorífico viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Frigorífico?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 90 W × 1 h ÷ 1.000 × 0,35 € = 0,031 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Frigorífico?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "waschmaschine": {
      "name": "Lavadora",
      "category": "Hogar y Limpieza",
      "shortDescription": "Lavadora verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Lavadora de media al año?",
          "answer": "Un Lavadora moderno consume una media de 140 kWh de electricidad al año, lo que equivale a unos 49,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Lavadora?",
          "answer": "Con una potencia media de unos 2000 Vatios, una hora de uso cuesta aproximadamente 0,700 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Lavadora?",
          "answer": "El coste mensual en la factura de la luz ronda los 4,08 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Lavadora típico?",
          "answer": "La potencia media se sitúa en unos 2000 Vatios, oscilando entre 1400 W y 3000 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Lavadora?",
          "answer": "Un uso típico de Lavadora supone un gasto de unos 0,25 € / Waschgang."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Lavadora entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Lavadora cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Lavadora viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Lavadora?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Lavadora?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "trockner": {
      "name": "Secadora de Ropa",
      "category": "Hogar y Limpieza",
      "shortDescription": "Secadora de Ropa verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Secadora de Ropa de media al año?",
          "answer": "Un Secadora de Ropa moderno consume una media de 180 kWh de electricidad al año, lo que equivale a unos 63,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Secadora de Ropa?",
          "answer": "Con una potencia media de unos 1500 Vatios, una hora de uso cuesta aproximadamente 0,525 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Secadora de Ropa?",
          "answer": "El coste mensual en la factura de la luz ronda los 5,25 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Secadora de Ropa típico?",
          "answer": "La potencia media se sitúa en unos 1500 Vatios, oscilando entre 1050 W y 2250 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Secadora de Ropa?",
          "answer": "Un uso típico de Secadora de Ropa supone un gasto de unos 0,45 € / Ladung."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Secadora de Ropa entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Secadora de Ropa cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Secadora de Ropa viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Secadora de Ropa?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 1500 W × 1 h ÷ 1.000 × 0,35 € = 0,525 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Secadora de Ropa?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Lavavajillas",
      "category": "Cocina",
      "shortDescription": "Lavavajillas verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Lavavajillas de media al año?",
          "answer": "Un Lavavajillas moderno consume una media de 160 kWh de electricidad al año, lo que equivale a unos 56,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Lavavajillas?",
          "answer": "Con una potencia media de unos 1800 Vatios, una hora de uso cuesta aproximadamente 0,630 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Lavavajillas?",
          "answer": "El coste mensual en la factura de la luz ronda los 4,67 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Lavavajillas típico?",
          "answer": "La potencia media se sitúa en unos 1800 Vatios, oscilando entre 1260 W y 2700 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Lavavajillas?",
          "answer": "Un uso típico de Lavavajillas supone un gasto de unos 0,28 € / Spülgang."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Lavavajillas entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Lavavajillas cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Lavavajillas viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Lavavajillas?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 1800 W × 1 h ÷ 1.000 × 0,35 € = 0,630 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Lavavajillas?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "backofen": {
      "name": "Horno Eléctrico",
      "category": "Cocina",
      "shortDescription": "Horno Eléctrico verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Horno Eléctrico de media al año?",
          "answer": "Un Horno Eléctrico moderno consume una media de 150 kWh de electricidad al año, lo que equivale a unos 52,50 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Horno Eléctrico?",
          "answer": "Con una potencia media de unos 2500 Vatios, una hora de uso cuesta aproximadamente 0,875 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Horno Eléctrico?",
          "answer": "El coste mensual en la factura de la luz ronda los 4,38 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Horno Eléctrico típico?",
          "answer": "La potencia media se sitúa en unos 2500 Vatios, oscilando entre 1750 W y 3750 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Horno Eléctrico?",
          "answer": "Un uso típico de Horno Eléctrico supone un gasto de unos 0,55 € / Nutzung."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Horno Eléctrico entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Horno Eléctrico cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Horno Eléctrico viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Horno Eléctrico?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 2500 W × 1 h ÷ 1.000 × 0,35 € = 0,875 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Horno Eléctrico?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "herd": {
      "name": "Placa de Cocina e Inducción",
      "category": "Cocina",
      "shortDescription": "Placa de Cocina e Inducción verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Placa de Cocina e Inducción de media al año?",
          "answer": "Un Placa de Cocina e Inducción moderno consume una media de 220 kWh de electricidad al año, lo que equivale a unos 77,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Placa de Cocina e Inducción?",
          "answer": "Con una potencia media de unos 2000 Vatios, una hora de uso cuesta aproximadamente 0,700 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Placa de Cocina e Inducción?",
          "answer": "El coste mensual en la factura de la luz ronda los 6,42 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Placa de Cocina e Inducción típico?",
          "answer": "La potencia media se sitúa en unos 2000 Vatios, oscilando entre 1400 W y 3000 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Placa de Cocina e Inducción?",
          "answer": "Un uso típico de Placa de Cocina e Inducción supone un gasto de unos 0,35 € / Kochen."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Placa de Cocina e Inducción entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Placa de Cocina e Inducción cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Placa de Cocina e Inducción viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Placa de Cocina e Inducción?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Placa de Cocina e Inducción?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "wasserkocher": {
      "name": "Hervidor de Agua",
      "category": "Cocina",
      "shortDescription": "Hervidor de Agua verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Hervidor de Agua de media al año?",
          "answer": "Un Hervidor de Agua moderno consume una media de 80 kWh de electricidad al año, lo que equivale a unos 28,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Hervidor de Agua?",
          "answer": "Con una potencia media de unos 2200 Vatios, una hora de uso cuesta aproximadamente 0,770 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Hervidor de Agua?",
          "answer": "El coste mensual en la factura de la luz ronda los 2,33 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Hervidor de Agua típico?",
          "answer": "La potencia media se sitúa en unos 2200 Vatios, oscilando entre 1540 W y 3300 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Hervidor de Agua?",
          "answer": "Un uso típico de Hervidor de Agua supone un gasto de unos 0,03 € / Kochen."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Hervidor de Agua entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Hervidor de Agua cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Hervidor de Agua viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Hervidor de Agua?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 2200 W × 1 h ÷ 1.000 × 0,35 € = 0,770 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Hervidor de Agua?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Cafetera Automática",
      "category": "Cocina",
      "shortDescription": "Cafetera Automática verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Cafetera Automática de media al año?",
          "answer": "Un Cafetera Automática moderno consume una media de 110 kWh de electricidad al año, lo que equivale a unos 38,50 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Cafetera Automática?",
          "answer": "Con una potencia media de unos 1450 Vatios, una hora de uso cuesta aproximadamente 0,507 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Cafetera Automática?",
          "answer": "El coste mensual en la factura de la luz ronda los 3,21 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Cafetera Automática típico?",
          "answer": "La potencia media se sitúa en unos 1450 Vatios, oscilando entre 1015 W y 2175 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Cafetera Automática?",
          "answer": "Un uso típico de Cafetera Automática supone un gasto de unos 0,04 € / Tasse."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Cafetera Automática entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Cafetera Automática cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Cafetera Automática viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Cafetera Automática?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 1450 W × 1 h ÷ 1.000 × 0,35 € = 0,507 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Cafetera Automática?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "fernseher": {
      "name": "Televisor Smart TV (55-65\")",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Televisor Smart TV (55-65\") verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Televisor Smart TV (55-65\") de media al año?",
          "answer": "Un Televisor Smart TV (55-65\") moderno consume una media de 175 kWh de electricidad al año, lo que equivale a unos 61,25 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Televisor Smart TV (55-65\")?",
          "answer": "Con una potencia media de unos 120 Vatios, una hora de uso cuesta aproximadamente 0,042 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Televisor Smart TV (55-65\")?",
          "answer": "El coste mensual en la factura de la luz ronda los 5,10 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Televisor Smart TV (55-65\") típico?",
          "answer": "La potencia media se sitúa en unos 120 Vatios, oscilando entre 84 W y 180 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Televisor Smart TV (55-65\")?",
          "answer": "Un uso típico de Televisor Smart TV (55-65\") supone un gasto de unos 0,17 € / Tag (4h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Televisor Smart TV (55-65\") entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Televisor Smart TV (55-65\") cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Televisor Smart TV (55-65\") viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Televisor Smart TV (55-65\")?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Televisor Smart TV (55-65\")?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC Gaming de Gama Alta",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "PC Gaming de Gama Alta verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un PC Gaming de Gama Alta de media al año?",
          "answer": "Un PC Gaming de Gama Alta moderno consume una media de 490 kWh de electricidad al año, lo que equivale a unos 171,50 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un PC Gaming de Gama Alta?",
          "answer": "Con una potencia media de unos 450 Vatios, una hora de uso cuesta aproximadamente 0,158 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un PC Gaming de Gama Alta?",
          "answer": "El coste mensual en la factura de la luz ronda los 14,29 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un PC Gaming de Gama Alta típico?",
          "answer": "La potencia media se sitúa en unos 450 Vatios, oscilando entre 315 W y 675 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de PC Gaming de Gama Alta?",
          "answer": "Un uso típico de PC Gaming de Gama Alta supone un gasto de unos 0,47 € / Session (3h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un PC Gaming de Gama Alta entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un PC Gaming de Gama Alta cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un PC Gaming de Gama Alta viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un PC Gaming de Gama Alta?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 450 W × 1 h ÷ 1.000 × 0,35 € = 0,158 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un PC Gaming de Gama Alta?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "pc": {
      "name": "PC de Sobremesa (Oficina)",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "PC de Sobremesa (Oficina) verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un PC de Sobremesa (Oficina) de media al año?",
          "answer": "Un PC de Sobremesa (Oficina) moderno consume una media de 200 kWh de electricidad al año, lo que equivale a unos 70,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un PC de Sobremesa (Oficina)?",
          "answer": "Con una potencia media de unos 120 Vatios, una hora de uso cuesta aproximadamente 0,042 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un PC de Sobremesa (Oficina)?",
          "answer": "El coste mensual en la factura de la luz ronda los 5,83 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un PC de Sobremesa (Oficina) típico?",
          "answer": "La potencia media se sitúa en unos 120 Vatios, oscilando entre 84 W y 180 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de PC de Sobremesa (Oficina)?",
          "answer": "Un uso típico de PC de Sobremesa (Oficina) supone un gasto de unos 0,34 € / Arbeitstag (8h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un PC de Sobremesa (Oficina) entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un PC de Sobremesa (Oficina) cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un PC de Sobremesa (Oficina) viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un PC de Sobremesa (Oficina)?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un PC de Sobremesa (Oficina)?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "laptop": {
      "name": "Portátil / Laptop",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Portátil / Laptop verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Portátil / Laptop de media al año?",
          "answer": "Un Portátil / Laptop moderno consume una media de 80 kWh de electricidad al año, lo que equivale a unos 28,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Portátil / Laptop?",
          "answer": "Con una potencia media de unos 50 Vatios, una hora de uso cuesta aproximadamente 0,018 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Portátil / Laptop?",
          "answer": "El coste mensual en la factura de la luz ronda los 2,33 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Portátil / Laptop típico?",
          "answer": "La potencia media se sitúa en unos 50 Vatios, oscilando entre 35 W y 75 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Portátil / Laptop?",
          "answer": "Un uso típico de Portátil / Laptop supone un gasto de unos 0,14 € / Arbeitstag (8h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Portátil / Laptop entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Portátil / Laptop cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Portátil / Laptop viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Portátil / Laptop?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 50 W × 1 h ÷ 1.000 × 0,35 € = 0,018 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Portátil / Laptop?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "monitor": {
      "name": "Monitor de PC (27-32\")",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Monitor de PC (27-32\") verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Monitor de PC (27-32\") de media al año?",
          "answer": "Un Monitor de PC (27-32\") moderno consume una media de 60 kWh de electricidad al año, lo que equivale a unos 21,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Monitor de PC (27-32\")?",
          "answer": "Con una potencia media de unos 35 Vatios, una hora de uso cuesta aproximadamente 0,012 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Monitor de PC (27-32\")?",
          "answer": "El coste mensual en la factura de la luz ronda los 1,75 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Monitor de PC (27-32\") típico?",
          "answer": "La potencia media se sitúa en unos 35 Vatios, oscilando entre 25 W y 53 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Monitor de PC (27-32\")?",
          "answer": "Un uso típico de Monitor de PC (27-32\") supone un gasto de unos 0,10 € / Tag."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Monitor de PC (27-32\") entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Monitor de PC (27-32\") cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Monitor de PC (27-32\") viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Monitor de PC (27-32\")?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 35 W × 1 h ÷ 1.000 × 0,35 € = 0,012 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Monitor de PC (27-32\")?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un PlayStation 5 (PS5) de media al año?",
          "answer": "Un PlayStation 5 (PS5) moderno consume una media de 150 kWh de electricidad al año, lo que equivale a unos 52,50 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un PlayStation 5 (PS5)?",
          "answer": "Con una potencia media de unos 200 Vatios, una hora de uso cuesta aproximadamente 0,070 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un PlayStation 5 (PS5)?",
          "answer": "El coste mensual en la factura de la luz ronda los 4,38 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un PlayStation 5 (PS5) típico?",
          "answer": "La potencia media se sitúa en unos 200 Vatios, oscilando entre 140 W y 300 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de PlayStation 5 (PS5)?",
          "answer": "Un uso típico de PlayStation 5 (PS5) supone un gasto de unos 0,14 € / Gaming (2h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un PlayStation 5 (PS5) entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un PlayStation 5 (PS5) cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un PlayStation 5 (PS5) viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un PlayStation 5 (PS5)?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 200 W × 1 h ÷ 1.000 × 0,35 € = 0,070 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un PlayStation 5 (PS5)?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Xbox Series X de media al año?",
          "answer": "Un Xbox Series X moderno consume una media de 140 kWh de electricidad al año, lo que equivale a unos 49,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Xbox Series X?",
          "answer": "Con una potencia media de unos 180 Vatios, una hora de uso cuesta aproximadamente 0,063 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Xbox Series X?",
          "answer": "El coste mensual en la factura de la luz ronda los 4,08 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Xbox Series X típico?",
          "answer": "La potencia media se sitúa en unos 180 Vatios, oscilando entre 126 W y 270 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Xbox Series X?",
          "answer": "Un uso típico de Xbox Series X supone un gasto de unos 0,13 € / Gaming (2h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Xbox Series X entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Xbox Series X cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Xbox Series X viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Xbox Series X?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 180 W × 1 h ÷ 1.000 × 0,35 € = 0,063 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Xbox Series X?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "klimaanlage": {
      "name": "Aire Acondicionado Split",
      "category": "Climatización y Calefacción",
      "shortDescription": "Aire Acondicionado Split verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Aire Acondicionado Split de media al año?",
          "answer": "Un Aire Acondicionado Split moderno consume una media de 450 kWh de electricidad al año, lo que equivale a unos 157,50 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Aire Acondicionado Split?",
          "answer": "Con una potencia media de unos 900 Vatios, una hora de uso cuesta aproximadamente 0,315 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Aire Acondicionado Split?",
          "answer": "El coste mensual en la factura de la luz ronda los 13,13 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Aire Acondicionado Split típico?",
          "answer": "La potencia media se sitúa en unos 900 Vatios, oscilando entre 630 W y 1350 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Aire Acondicionado Split?",
          "answer": "Un uso típico de Aire Acondicionado Split supone un gasto de unos 1,50 € / Hitzetag."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Aire Acondicionado Split entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Aire Acondicionado Split cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Aire Acondicionado Split viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Aire Acondicionado Split?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 900 W × 1 h ÷ 1.000 × 0,35 € = 0,315 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Aire Acondicionado Split?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilador de Pie",
      "category": "Climatización y Calefacción",
      "shortDescription": "Ventilador de Pie verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Ventilador de Pie de media al año?",
          "answer": "Un Ventilador de Pie moderno consume una media de 35 kWh de electricidad al año, lo que equivale a unos 12,25 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Ventilador de Pie?",
          "answer": "Con una potencia media de unos 45 Vatios, una hora de uso cuesta aproximadamente 0,016 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Ventilador de Pie?",
          "answer": "El coste mensual en la factura de la luz ronda los 1,02 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Ventilador de Pie típico?",
          "answer": "La potencia media se sitúa en unos 45 Vatios, oscilando entre 31 W y 68 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Ventilador de Pie?",
          "answer": "Un uso típico de Ventilador de Pie supone un gasto de unos 0,13 € / Tag (8h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Ventilador de Pie entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Ventilador de Pie cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Ventilador de Pie viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Ventilador de Pie?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 45 W × 1 h ÷ 1.000 × 0,35 € = 0,016 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Ventilador de Pie?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "heizluefter": {
      "name": "Calefactor Eléctrico / Termoventilador",
      "category": "Climatización y Calefacción",
      "shortDescription": "Calefactor Eléctrico / Termoventilador verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Calefactor Eléctrico / Termoventilador de media al año?",
          "answer": "Un Calefactor Eléctrico / Termoventilador moderno consume una media de 360 kWh de electricidad al año, lo que equivale a unos 126,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Calefactor Eléctrico / Termoventilador?",
          "answer": "Con una potencia media de unos 2000 Vatios, una hora de uso cuesta aproximadamente 0,700 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Calefactor Eléctrico / Termoventilador?",
          "answer": "El coste mensual en la factura de la luz ronda los 10,50 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Calefactor Eléctrico / Termoventilador típico?",
          "answer": "La potencia media se sitúa en unos 2000 Vatios, oscilando entre 1400 W y 3000 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Calefactor Eléctrico / Termoventilador?",
          "answer": "Un uso típico de Calefactor Eléctrico / Termoventilador supone un gasto de unos 2,10 € / Tag (3h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Calefactor Eléctrico / Termoventilador entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Calefactor Eléctrico / Termoventilador cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Calefactor Eléctrico / Termoventilador viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Calefactor Eléctrico / Termoventilador?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Calefactor Eléctrico / Termoventilador?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Deshumidificador de Aire",
      "category": "Climatización y Calefacción",
      "shortDescription": "Deshumidificador de Aire verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Deshumidificador de Aire de media al año?",
          "answer": "Un Deshumidificador de Aire moderno consume una media de 300 kWh de electricidad al año, lo que equivale a unos 105,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Deshumidificador de Aire?",
          "answer": "Con una potencia media de unos 250 Vatios, una hora de uso cuesta aproximadamente 0,087 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Deshumidificador de Aire?",
          "answer": "El coste mensual en la factura de la luz ronda los 8,75 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Deshumidificador de Aire típico?",
          "answer": "La potencia media se sitúa en unos 250 Vatios, oscilando entre 175 W y 375 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Deshumidificador de Aire?",
          "answer": "Un uso típico de Deshumidificador de Aire supone un gasto de unos 0,52 € / Tag (6h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Deshumidificador de Aire entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Deshumidificador de Aire cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Deshumidificador de Aire viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Deshumidificador de Aire?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 250 W × 1 h ÷ 1.000 × 0,35 € = 0,087 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Deshumidificador de Aire?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "aquarium": {
      "name": "Acuario (100-200 L)",
      "category": "Ocio y Especial",
      "shortDescription": "Acuario (100-200 L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Acuario (100-200 L) de media al año?",
          "answer": "Un Acuario (100-200 L) moderno consume una media de 400 kWh de electricidad al año, lo que equivale a unos 140,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Acuario (100-200 L)?",
          "answer": "Con una potencia media de unos 120 Vatios, una hora de uso cuesta aproximadamente 0,042 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Acuario (100-200 L)?",
          "answer": "El coste mensual en la factura de la luz ronda los 11,67 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Acuario (100-200 L) típico?",
          "answer": "La potencia media se sitúa en unos 120 Vatios, oscilando entre 84 W y 180 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Acuario (100-200 L)?",
          "answer": "Un uso típico de Acuario (100-200 L) supone un gasto de unos 0,38 € / Tag."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Acuario (100-200 L) entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Acuario (100-200 L) cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Acuario (100-200 L) viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Acuario (100-200 L)?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Acuario (100-200 L)?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "pool": {
      "name": "Bomba de Piscina y Filtro",
      "category": "Ocio y Especial",
      "shortDescription": "Bomba de Piscina y Filtro verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Bomba de Piscina y Filtro de media al año?",
          "answer": "Un Bomba de Piscina y Filtro moderno consume una media de 700 kWh de electricidad al año, lo que equivale a unos 245,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Bomba de Piscina y Filtro?",
          "answer": "Con una potencia media de unos 600 Vatios, una hora de uso cuesta aproximadamente 0,210 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Bomba de Piscina y Filtro?",
          "answer": "El coste mensual en la factura de la luz ronda los 20,42 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Bomba de Piscina y Filtro típico?",
          "answer": "La potencia media se sitúa en unos 600 Vatios, oscilando entre 420 W y 900 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Bomba de Piscina y Filtro?",
          "answer": "Un uso típico de Bomba de Piscina y Filtro supone un gasto de unos 1,26 € / Tag (6h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Bomba de Piscina y Filtro entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Bomba de Piscina y Filtro cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Bomba de Piscina y Filtro viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Bomba de Piscina y Filtro?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 600 W × 1 h ÷ 1.000 × 0,35 € = 0,210 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Bomba de Piscina y Filtro?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "whirlpool": {
      "name": "Jacuzzi Exterior / Spa Hinchable",
      "category": "Ocio y Especial",
      "shortDescription": "Jacuzzi Exterior / Spa Hinchable verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Jacuzzi Exterior / Spa Hinchable de media al año?",
          "answer": "Un Jacuzzi Exterior / Spa Hinchable moderno consume una media de 2500 kWh de electricidad al año, lo que equivale a unos 875,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Jacuzzi Exterior / Spa Hinchable?",
          "answer": "Con una potencia media de unos 2000 Vatios, una hora de uso cuesta aproximadamente 0,700 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Jacuzzi Exterior / Spa Hinchable?",
          "answer": "El coste mensual en la factura de la luz ronda los 72,92 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Jacuzzi Exterior / Spa Hinchable típico?",
          "answer": "La potencia media se sitúa en unos 2000 Vatios, oscilando entre 1400 W y 3000 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Jacuzzi Exterior / Spa Hinchable?",
          "answer": "Un uso típico de Jacuzzi Exterior / Spa Hinchable supone un gasto de unos 2,40 € / Tag."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Jacuzzi Exterior / Spa Hinchable entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Jacuzzi Exterior / Spa Hinchable cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Jacuzzi Exterior / Spa Hinchable viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Jacuzzi Exterior / Spa Hinchable?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Jacuzzi Exterior / Spa Hinchable?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "3d-drucker": {
      "name": "Impresora 3D (FDM)",
      "category": "Ocio y Especial",
      "shortDescription": "Impresora 3D (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Impresora 3D (FDM) de media al año?",
          "answer": "Un Impresora 3D (FDM) moderno consume una media de 120 kWh de electricidad al año, lo que equivale a unos 42,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Impresora 3D (FDM)?",
          "answer": "Con una potencia media de unos 150 Vatios, una hora de uso cuesta aproximadamente 0,052 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Impresora 3D (FDM)?",
          "answer": "El coste mensual en la factura de la luz ronda los 3,50 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Impresora 3D (FDM) típico?",
          "answer": "La potencia media se sitúa en unos 150 Vatios, oscilando entre 105 W y 225 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Impresora 3D (FDM)?",
          "answer": "Un uso típico de Impresora 3D (FDM) supone un gasto de unos 0,42 € / Druck (8h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Impresora 3D (FDM) entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Impresora 3D (FDM) cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Impresora 3D (FDM) viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Impresora 3D (FDM)?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 150 W × 1 h ÷ 1.000 × 0,35 € = 0,052 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Impresora 3D (FDM)?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "nas": {
      "name": "Servidor NAS Doméstico (24/7)",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Servidor NAS Doméstico (24/7) verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Servidor NAS Doméstico (24/7) de media al año?",
          "answer": "Un Servidor NAS Doméstico (24/7) moderno consume una media de 220 kWh de electricidad al año, lo que equivale a unos 77,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Servidor NAS Doméstico (24/7)?",
          "answer": "Con una potencia media de unos 30 Vatios, una hora de uso cuesta aproximadamente 0,011 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Servidor NAS Doméstico (24/7)?",
          "answer": "El coste mensual en la factura de la luz ronda los 6,42 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Servidor NAS Doméstico (24/7) típico?",
          "answer": "La potencia media se sitúa en unos 30 Vatios, oscilando entre 21 W y 45 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Servidor NAS Doméstico (24/7)?",
          "answer": "Un uso típico de Servidor NAS Doméstico (24/7) supone un gasto de unos 0,21 € / Tag (24h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Servidor NAS Doméstico (24/7) entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Servidor NAS Doméstico (24/7) cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Servidor NAS Doméstico (24/7) viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Servidor NAS Doméstico (24/7)?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 30 W × 1 h ÷ 1.000 × 0,35 € = 0,011 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Servidor NAS Doméstico (24/7)?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    },
    "server": {
      "name": "Servidor Doméstico / Homelab (24/7)",
      "category": "Entretenimiento y Oficina",
      "shortDescription": "Servidor Doméstico / Homelab (24/7) verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "¿Cuánto consume un Servidor Doméstico / Homelab (24/7) de media al año?",
          "answer": "Un Servidor Doméstico / Homelab (24/7) moderno consume una media de 500 kWh de electricidad al año, lo que equivale a unos 175,00 € anuales con una tarifa de 0,35 €/kWh."
        },
        {
          "question": "¿Cuánto cuesta 1 hora de funcionamiento de un Servidor Doméstico / Homelab (24/7)?",
          "answer": "Con una potencia media de unos 65 Vatios, una hora de uso cuesta aproximadamente 0,023 €."
        },
        {
          "question": "¿Cuánto cuesta al mes tener un Servidor Doméstico / Homelab (24/7)?",
          "answer": "El coste mensual en la factura de la luz ronda los 14,58 € al mes con un uso habitual."
        },
        {
          "question": "¿Cuántos vatios de potencia tiene un Servidor Doméstico / Homelab (24/7) típico?",
          "answer": "La potencia media se sitúa en unos 65 Vatios, oscilando entre 46 W y 98 W según la fase del ciclo."
        },
        {
          "question": "¿Cuánto cuesta un ciclo o uso individual de Servidor Doméstico / Homelab (24/7)?",
          "answer": "Un uso típico de Servidor Doméstico / Homelab (24/7) supone un gasto de unos 0,48 € / Tag (24h)."
        },
        {
          "question": "¿Cómo reducir el gasto de luz de un Servidor Doméstico / Homelab (24/7) entre un 15 % y un 25 %?",
          "answer": "Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar."
        },
        {
          "question": "¿Consume electricidad un Servidor Doméstico / Homelab (24/7) cuando está en modo reposo (standby)?",
          "answer": "Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año)."
        },
        {
          "question": "¿Merece la pena cambiar un Servidor Doméstico / Homelab (24/7) viejo por uno nuevo eficiente?",
          "answer": "Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años."
        },
        {
          "question": "¿Cómo calcular el consumo exacto de un Servidor Doméstico / Homelab (24/7)?",
          "answer": "Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: 65 W × 1 h ÷ 1.000 × 0,35 € = 0,023 €."
        },
        {
          "question": "¿Cuál es el programa más económico para un Servidor Doméstico / Homelab (24/7)?",
          "answer": "El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía."
        }
      ]
    }
  },
  "ja": {
    "kuehlschrank": {
      "name": "冷蔵庫",
      "category": "キッチン・調理家電",
      "shortDescription": "冷蔵庫 verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "冷蔵庫の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な冷蔵庫の年間消費電力量は約120 kWhで、単価0.35 €/kWhの場合、年間電気代は約42,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "冷蔵庫を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約90Wの場合、1時間あたりの電気代は約0,031 €となります。"
        },
        {
          "question": "冷蔵庫の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約3.50 €が目安となります。"
        },
        {
          "question": "一般的な冷蔵庫の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約90Wで、運転状態や負荷により約63W〜135Wの範囲で変動します。"
        },
        {
          "question": "冷蔵庫を1回使用したときの電気代は？",
          "answer": "冷蔵庫の1回あたりの標準使用コストは約0,12 € / Tagです。"
        },
        {
          "question": "冷蔵庫の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "冷蔵庫は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型冷蔵庫を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "冷蔵庫の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 90W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,031€。"
        },
        {
          "question": "冷蔵庫で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "waschmaschine": {
      "name": "洗濯機",
      "category": "生活・洗濯・掃除家電",
      "shortDescription": "洗濯機 verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "洗濯機の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な洗濯機の年間消費電力量は約140 kWhで、単価0.35 €/kWhの場合、年間電気代は約49,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "洗濯機を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約2000Wの場合、1時間あたりの電気代は約0,700 €となります。"
        },
        {
          "question": "洗濯機の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約4.08 €が目安となります。"
        },
        {
          "question": "一般的な洗濯機の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約2000Wで、運転状態や負荷により約1400W〜3000Wの範囲で変動します。"
        },
        {
          "question": "洗濯機を1回使用したときの電気代は？",
          "answer": "洗濯機の1回あたりの標準使用コストは約0,25 € / Waschgangです。"
        },
        {
          "question": "洗濯機の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "洗濯機は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型洗濯機を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "洗濯機の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 2000W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,700€。"
        },
        {
          "question": "洗濯機で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "trockner": {
      "name": "衣類乾燥機",
      "category": "生活・洗濯・掃除家電",
      "shortDescription": "衣類乾燥機 verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "衣類乾燥機の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な衣類乾燥機の年間消費電力量は約180 kWhで、単価0.35 €/kWhの場合、年間電気代は約63,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "衣類乾燥機を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約1500Wの場合、1時間あたりの電気代は約0,525 €となります。"
        },
        {
          "question": "衣類乾燥機の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約5.25 €が目安となります。"
        },
        {
          "question": "一般的な衣類乾燥機の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約1500Wで、運転状態や負荷により約1050W〜2250Wの範囲で変動します。"
        },
        {
          "question": "衣類乾燥機を1回使用したときの電気代は？",
          "answer": "衣類乾燥機の1回あたりの標準使用コストは約0,45 € / Ladungです。"
        },
        {
          "question": "衣類乾燥機の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "衣類乾燥機は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型衣類乾燥機を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "衣類乾燥機の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 1500W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,525€。"
        },
        {
          "question": "衣類乾燥機で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "geschirrspueler": {
      "name": "食器洗い機（食洗機）",
      "category": "キッチン・調理家電",
      "shortDescription": "食器洗い機（食洗機） verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "食器洗い機（食洗機）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な食器洗い機（食洗機）の年間消費電力量は約160 kWhで、単価0.35 €/kWhの場合、年間電気代は約56,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "食器洗い機（食洗機）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約1800Wの場合、1時間あたりの電気代は約0,630 €となります。"
        },
        {
          "question": "食器洗い機（食洗機）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約4.67 €が目安となります。"
        },
        {
          "question": "一般的な食器洗い機（食洗機）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約1800Wで、運転状態や負荷により約1260W〜2700Wの範囲で変動します。"
        },
        {
          "question": "食器洗い機（食洗機）を1回使用したときの電気代は？",
          "answer": "食器洗い機（食洗機）の1回あたりの標準使用コストは約0,28 € / Spülgangです。"
        },
        {
          "question": "食器洗い機（食洗機）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "食器洗い機（食洗機）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型食器洗い機（食洗機）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "食器洗い機（食洗機）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 1800W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,630€。"
        },
        {
          "question": "食器洗い機（食洗機）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "backofen": {
      "name": "オーブン",
      "category": "キッチン・調理家電",
      "shortDescription": "オーブン verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "オーブンの年間平均電気消費量と年間電気代は？",
          "answer": "一般的なオーブンの年間消費電力量は約150 kWhで、単価0.35 €/kWhの場合、年間電気代は約52,50 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "オーブンを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約2500Wの場合、1時間あたりの電気代は約0,875 €となります。"
        },
        {
          "question": "オーブンの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約4.38 €が目安となります。"
        },
        {
          "question": "一般的なオーブンの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約2500Wで、運転状態や負荷により約1750W〜3750Wの範囲で変動します。"
        },
        {
          "question": "オーブンを1回使用したときの電気代は？",
          "answer": "オーブンの1回あたりの標準使用コストは約0,55 € / Nutzungです。"
        },
        {
          "question": "オーブンの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "オーブンは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型オーブンを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "オーブンの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 2500W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,875€。"
        },
        {
          "question": "オーブンで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "herd": {
      "name": "IHクッキングヒーター・電気コンロ",
      "category": "キッチン・調理家電",
      "shortDescription": "IHクッキングヒーター・電気コンロ verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "IHクッキングヒーター・電気コンロの年間平均電気消費量と年間電気代は？",
          "answer": "一般的なIHクッキングヒーター・電気コンロの年間消費電力量は約220 kWhで、単価0.35 €/kWhの場合、年間電気代は約77,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約2000Wの場合、1時間あたりの電気代は約0,700 €となります。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約6.42 €が目安となります。"
        },
        {
          "question": "一般的なIHクッキングヒーター・電気コンロの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約2000Wで、運転状態や負荷により約1400W〜3000Wの範囲で変動します。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロを1回使用したときの電気代は？",
          "answer": "IHクッキングヒーター・電気コンロの1回あたりの標準使用コストは約0,35 € / Kochenです。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型IHクッキングヒーター・電気コンロを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 2000W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,700€。"
        },
        {
          "question": "IHクッキングヒーター・電気コンロで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "wasserkocher": {
      "name": "電気ケトル",
      "category": "キッチン・調理家電",
      "shortDescription": "電気ケトル verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "電気ケトルの年間平均電気消費量と年間電気代は？",
          "answer": "一般的な電気ケトルの年間消費電力量は約80 kWhで、単価0.35 €/kWhの場合、年間電気代は約28,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "電気ケトルを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約2200Wの場合、1時間あたりの電気代は約0,770 €となります。"
        },
        {
          "question": "電気ケトルの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約2.33 €が目安となります。"
        },
        {
          "question": "一般的な電気ケトルの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約2200Wで、運転状態や負荷により約1540W〜3300Wの範囲で変動します。"
        },
        {
          "question": "電気ケトルを1回使用したときの電気代は？",
          "answer": "電気ケトルの1回あたりの標準使用コストは約0,03 € / Kochenです。"
        },
        {
          "question": "電気ケトルの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "電気ケトルは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型電気ケトルを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "電気ケトルの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 2200W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,770€。"
        },
        {
          "question": "電気ケトルで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "kaffeemaschine": {
      "name": "全自動コーヒーメーカー",
      "category": "キッチン・調理家電",
      "shortDescription": "全自動コーヒーメーカー verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "全自動コーヒーメーカーの年間平均電気消費量と年間電気代は？",
          "answer": "一般的な全自動コーヒーメーカーの年間消費電力量は約110 kWhで、単価0.35 €/kWhの場合、年間電気代は約38,50 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "全自動コーヒーメーカーを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約1450Wの場合、1時間あたりの電気代は約0,507 €となります。"
        },
        {
          "question": "全自動コーヒーメーカーの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約3.21 €が目安となります。"
        },
        {
          "question": "一般的な全自動コーヒーメーカーの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約1450Wで、運転状態や負荷により約1015W〜2175Wの範囲で変動します。"
        },
        {
          "question": "全自動コーヒーメーカーを1回使用したときの電気代は？",
          "answer": "全自動コーヒーメーカーの1回あたりの標準使用コストは約0,04 € / Tasseです。"
        },
        {
          "question": "全自動コーヒーメーカーの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "全自動コーヒーメーカーは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型全自動コーヒーメーカーを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "全自動コーヒーメーカーの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 1450W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,507€。"
        },
        {
          "question": "全自動コーヒーメーカーで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "fernseher": {
      "name": "スマートテレビ（55〜65インチ）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "スマートテレビ（55〜65インチ） verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "スマートテレビ（55〜65インチ）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なスマートテレビ（55〜65インチ）の年間消費電力量は約175 kWhで、単価0.35 €/kWhの場合、年間電気代は約61,25 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約120Wの場合、1時間あたりの電気代は約0,042 €となります。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約5.10 €が目安となります。"
        },
        {
          "question": "一般的なスマートテレビ（55〜65インチ）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約120Wで、運転状態や負荷により約84W〜180Wの範囲で変動します。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）を1回使用したときの電気代は？",
          "answer": "スマートテレビ（55〜65インチ）の1回あたりの標準使用コストは約0,17 € / Tag (4h)です。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型スマートテレビ（55〜65インチ）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 120W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,042€。"
        },
        {
          "question": "スマートテレビ（55〜65インチ）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "gaming-pc": {
      "name": "ゲーミングPC（ハイエンド）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "ゲーミングPC（ハイエンド） verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "ゲーミングPC（ハイエンド）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なゲーミングPC（ハイエンド）の年間消費電力量は約490 kWhで、単価0.35 €/kWhの場合、年間電気代は約171,50 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約450Wの場合、1時間あたりの電気代は約0,158 €となります。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約14.29 €が目安となります。"
        },
        {
          "question": "一般的なゲーミングPC（ハイエンド）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約450Wで、運転状態や負荷により約315W〜675Wの範囲で変動します。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）を1回使用したときの電気代は？",
          "answer": "ゲーミングPC（ハイエンド）の1回あたりの標準使用コストは約0,47 € / Session (3h)です。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型ゲーミングPC（ハイエンド）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 450W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,158€。"
        },
        {
          "question": "ゲーミングPC（ハイエンド）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "pc": {
      "name": "デスクトップPC（事務用）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "デスクトップPC（事務用） verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "デスクトップPC（事務用）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なデスクトップPC（事務用）の年間消費電力量は約200 kWhで、単価0.35 €/kWhの場合、年間電気代は約70,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "デスクトップPC（事務用）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約120Wの場合、1時間あたりの電気代は約0,042 €となります。"
        },
        {
          "question": "デスクトップPC（事務用）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約5.83 €が目安となります。"
        },
        {
          "question": "一般的なデスクトップPC（事務用）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約120Wで、運転状態や負荷により約84W〜180Wの範囲で変動します。"
        },
        {
          "question": "デスクトップPC（事務用）を1回使用したときの電気代は？",
          "answer": "デスクトップPC（事務用）の1回あたりの標準使用コストは約0,34 € / Arbeitstag (8h)です。"
        },
        {
          "question": "デスクトップPC（事務用）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "デスクトップPC（事務用）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型デスクトップPC（事務用）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "デスクトップPC（事務用）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 120W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,042€。"
        },
        {
          "question": "デスクトップPC（事務用）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "laptop": {
      "name": "ノートパソコン",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "ノートパソコン verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "ノートパソコンの年間平均電気消費量と年間電気代は？",
          "answer": "一般的なノートパソコンの年間消費電力量は約80 kWhで、単価0.35 €/kWhの場合、年間電気代は約28,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "ノートパソコンを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約50Wの場合、1時間あたりの電気代は約0,018 €となります。"
        },
        {
          "question": "ノートパソコンの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約2.33 €が目安となります。"
        },
        {
          "question": "一般的なノートパソコンの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約50Wで、運転状態や負荷により約35W〜75Wの範囲で変動します。"
        },
        {
          "question": "ノートパソコンを1回使用したときの電気代は？",
          "answer": "ノートパソコンの1回あたりの標準使用コストは約0,14 € / Arbeitstag (8h)です。"
        },
        {
          "question": "ノートパソコンの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "ノートパソコンは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型ノートパソコンを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "ノートパソコンの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 50W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,018€。"
        },
        {
          "question": "ノートパソコンで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "monitor": {
      "name": "PCモニター（27〜32インチ）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "PCモニター（27〜32インチ） verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "PCモニター（27〜32インチ）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なPCモニター（27〜32インチ）の年間消費電力量は約60 kWhで、単価0.35 €/kWhの場合、年間電気代は約21,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "PCモニター（27〜32インチ）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約35Wの場合、1時間あたりの電気代は約0,012 €となります。"
        },
        {
          "question": "PCモニター（27〜32インチ）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約1.75 €が目安となります。"
        },
        {
          "question": "一般的なPCモニター（27〜32インチ）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約35Wで、運転状態や負荷により約25W〜53Wの範囲で変動します。"
        },
        {
          "question": "PCモニター（27〜32インチ）を1回使用したときの電気代は？",
          "answer": "PCモニター（27〜32インチ）の1回あたりの標準使用コストは約0,10 € / Tagです。"
        },
        {
          "question": "PCモニター（27〜32インチ）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "PCモニター（27〜32インチ）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型PCモニター（27〜32インチ）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "PCモニター（27〜32インチ）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 35W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,012€。"
        },
        {
          "question": "PCモニター（27〜32インチ）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5（PS5）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "PlayStation 5（PS5） verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "PlayStation 5（PS5）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なPlayStation 5（PS5）の年間消費電力量は約150 kWhで、単価0.35 €/kWhの場合、年間電気代は約52,50 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "PlayStation 5（PS5）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約200Wの場合、1時間あたりの電気代は約0,070 €となります。"
        },
        {
          "question": "PlayStation 5（PS5）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約4.38 €が目安となります。"
        },
        {
          "question": "一般的なPlayStation 5（PS5）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約200Wで、運転状態や負荷により約140W〜300Wの範囲で変動します。"
        },
        {
          "question": "PlayStation 5（PS5）を1回使用したときの電気代は？",
          "answer": "PlayStation 5（PS5）の1回あたりの標準使用コストは約0,14 € / Gaming (2h)です。"
        },
        {
          "question": "PlayStation 5（PS5）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "PlayStation 5（PS5）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型PlayStation 5（PS5）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "PlayStation 5（PS5）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 200W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,070€。"
        },
        {
          "question": "PlayStation 5（PS5）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Xbox Series Xの年間平均電気消費量と年間電気代は？",
          "answer": "一般的なXbox Series Xの年間消費電力量は約140 kWhで、単価0.35 €/kWhの場合、年間電気代は約49,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "Xbox Series Xを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約180Wの場合、1時間あたりの電気代は約0,063 €となります。"
        },
        {
          "question": "Xbox Series Xの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約4.08 €が目安となります。"
        },
        {
          "question": "一般的なXbox Series Xの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約180Wで、運転状態や負荷により約126W〜270Wの範囲で変動します。"
        },
        {
          "question": "Xbox Series Xを1回使用したときの電気代は？",
          "answer": "Xbox Series Xの1回あたりの標準使用コストは約0,13 € / Gaming (2h)です。"
        },
        {
          "question": "Xbox Series Xの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "Xbox Series Xは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型Xbox Series Xを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "Xbox Series Xの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 180W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,063€。"
        },
        {
          "question": "Xbox Series Xで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "klimaanlage": {
      "name": "エアコン（冷暖房）",
      "category": "空調・冷暖房・季節家電",
      "shortDescription": "エアコン（冷暖房） verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "エアコン（冷暖房）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なエアコン（冷暖房）の年間消費電力量は約450 kWhで、単価0.35 €/kWhの場合、年間電気代は約157,50 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "エアコン（冷暖房）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約900Wの場合、1時間あたりの電気代は約0,315 €となります。"
        },
        {
          "question": "エアコン（冷暖房）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約13.13 €が目安となります。"
        },
        {
          "question": "一般的なエアコン（冷暖房）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約900Wで、運転状態や負荷により約630W〜1350Wの範囲で変動します。"
        },
        {
          "question": "エアコン（冷暖房）を1回使用したときの電気代は？",
          "answer": "エアコン（冷暖房）の1回あたりの標準使用コストは約1,50 € / Hitzetagです。"
        },
        {
          "question": "エアコン（冷暖房）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "エアコン（冷暖房）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型エアコン（冷暖房）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "エアコン（冷暖房）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 900W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,315€。"
        },
        {
          "question": "エアコン（冷暖房）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "ventilator": {
      "name": "扇風機・サーキュレーター",
      "category": "空調・冷暖房・季節家電",
      "shortDescription": "扇風機・サーキュレーター verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "扇風機・サーキュレーターの年間平均電気消費量と年間電気代は？",
          "answer": "一般的な扇風機・サーキュレーターの年間消費電力量は約35 kWhで、単価0.35 €/kWhの場合、年間電気代は約12,25 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "扇風機・サーキュレーターを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約45Wの場合、1時間あたりの電気代は約0,016 €となります。"
        },
        {
          "question": "扇風機・サーキュレーターの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約1.02 €が目安となります。"
        },
        {
          "question": "一般的な扇風機・サーキュレーターの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約45Wで、運転状態や負荷により約31W〜68Wの範囲で変動します。"
        },
        {
          "question": "扇風機・サーキュレーターを1回使用したときの電気代は？",
          "answer": "扇風機・サーキュレーターの1回あたりの標準使用コストは約0,13 € / Tag (8h)です。"
        },
        {
          "question": "扇風機・サーキュレーターの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "扇風機・サーキュレーターは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型扇風機・サーキュレーターを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "扇風機・サーキュレーターの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 45W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,016€。"
        },
        {
          "question": "扇風機・サーキュレーターで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "heizluefter": {
      "name": "セラミックファンヒーター・電気ストーブ",
      "category": "空調・冷暖房・季節家電",
      "shortDescription": "セラミックファンヒーター・電気ストーブ verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "セラミックファンヒーター・電気ストーブの年間平均電気消費量と年間電気代は？",
          "answer": "一般的なセラミックファンヒーター・電気ストーブの年間消費電力量は約360 kWhで、単価0.35 €/kWhの場合、年間電気代は約126,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約2000Wの場合、1時間あたりの電気代は約0,700 €となります。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約10.50 €が目安となります。"
        },
        {
          "question": "一般的なセラミックファンヒーター・電気ストーブの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約2000Wで、運転状態や負荷により約1400W〜3000Wの範囲で変動します。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブを1回使用したときの電気代は？",
          "answer": "セラミックファンヒーター・電気ストーブの1回あたりの標準使用コストは約2,10 € / Tag (3h)です。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型セラミックファンヒーター・電気ストーブを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 2000W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,700€。"
        },
        {
          "question": "セラミックファンヒーター・電気ストーブで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "luftentfeuchter": {
      "name": "除湿機（コンプレッサー式）",
      "category": "空調・冷暖房・季節家電",
      "shortDescription": "除湿機（コンプレッサー式） verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "除湿機（コンプレッサー式）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な除湿機（コンプレッサー式）の年間消費電力量は約300 kWhで、単価0.35 €/kWhの場合、年間電気代は約105,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "除湿機（コンプレッサー式）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約250Wの場合、1時間あたりの電気代は約0,087 €となります。"
        },
        {
          "question": "除湿機（コンプレッサー式）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約8.75 €が目安となります。"
        },
        {
          "question": "一般的な除湿機（コンプレッサー式）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約250Wで、運転状態や負荷により約175W〜375Wの範囲で変動します。"
        },
        {
          "question": "除湿機（コンプレッサー式）を1回使用したときの電気代は？",
          "answer": "除湿機（コンプレッサー式）の1回あたりの標準使用コストは約0,52 € / Tag (6h)です。"
        },
        {
          "question": "除湿機（コンプレッサー式）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "除湿機（コンプレッサー式）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型除湿機（コンプレッサー式）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "除湿機（コンプレッサー式）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 250W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,087€。"
        },
        {
          "question": "除湿機（コンプレッサー式）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "aquarium": {
      "name": "熱帯魚水槽・アクアリウム（100〜200L）",
      "category": "趣味・特殊設備・屋外",
      "shortDescription": "熱帯魚水槽・アクアリウム（100〜200L） verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な熱帯魚水槽・アクアリウム（100〜200L）の年間消費電力量は約400 kWhで、単価0.35 €/kWhの場合、年間電気代は約140,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約120Wの場合、1時間あたりの電気代は約0,042 €となります。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約11.67 €が目安となります。"
        },
        {
          "question": "一般的な熱帯魚水槽・アクアリウム（100〜200L）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約120Wで、運転状態や負荷により約84W〜180Wの範囲で変動します。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）を1回使用したときの電気代は？",
          "answer": "熱帯魚水槽・アクアリウム（100〜200L）の1回あたりの標準使用コストは約0,38 € / Tagです。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型熱帯魚水槽・アクアリウム（100〜200L）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 120W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,042€。"
        },
        {
          "question": "熱帯魚水槽・アクアリウム（100〜200L）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "pool": {
      "name": "家庭用プール循環ポンプ・フィルター",
      "category": "趣味・特殊設備・屋外",
      "shortDescription": "家庭用プール循環ポンプ・フィルター verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "家庭用プール循環ポンプ・フィルターの年間平均電気消費量と年間電気代は？",
          "answer": "一般的な家庭用プール循環ポンプ・フィルターの年間消費電力量は約700 kWhで、単価0.35 €/kWhの場合、年間電気代は約245,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約600Wの場合、1時間あたりの電気代は約0,210 €となります。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約20.42 €が目安となります。"
        },
        {
          "question": "一般的な家庭用プール循環ポンプ・フィルターの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約600Wで、運転状態や負荷により約420W〜900Wの範囲で変動します。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターを1回使用したときの電気代は？",
          "answer": "家庭用プール循環ポンプ・フィルターの1回あたりの標準使用コストは約1,26 € / Tag (6h)です。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型家庭用プール循環ポンプ・フィルターを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 600W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,210€。"
        },
        {
          "question": "家庭用プール循環ポンプ・フィルターで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "whirlpool": {
      "name": "屋外ジャグジー・ホットタブ",
      "category": "趣味・特殊設備・屋外",
      "shortDescription": "屋外ジャグジー・ホットタブ verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "屋外ジャグジー・ホットタブの年間平均電気消費量と年間電気代は？",
          "answer": "一般的な屋外ジャグジー・ホットタブの年間消費電力量は約2500 kWhで、単価0.35 €/kWhの場合、年間電気代は約875,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "屋外ジャグジー・ホットタブを1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約2000Wの場合、1時間あたりの電気代は約0,700 €となります。"
        },
        {
          "question": "屋外ジャグジー・ホットタブの1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約72.92 €が目安となります。"
        },
        {
          "question": "一般的な屋外ジャグジー・ホットタブの定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約2000Wで、運転状態や負荷により約1400W〜3000Wの範囲で変動します。"
        },
        {
          "question": "屋外ジャグジー・ホットタブを1回使用したときの電気代は？",
          "answer": "屋外ジャグジー・ホットタブの1回あたりの標準使用コストは約2,40 € / Tagです。"
        },
        {
          "question": "屋外ジャグジー・ホットタブの電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "屋外ジャグジー・ホットタブは待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型屋外ジャグジー・ホットタブを買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "屋外ジャグジー・ホットタブの電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 2000W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,700€。"
        },
        {
          "question": "屋外ジャグジー・ホットタブで最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "3d-drucker": {
      "name": "3Dプリンター（熱溶解積層方式）",
      "category": "趣味・特殊設備・屋外",
      "shortDescription": "3Dプリンター（熱溶解積層方式） verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "3Dプリンター（熱溶解積層方式）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な3Dプリンター（熱溶解積層方式）の年間消費電力量は約120 kWhで、単価0.35 €/kWhの場合、年間電気代は約42,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約150Wの場合、1時間あたりの電気代は約0,052 €となります。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約3.50 €が目安となります。"
        },
        {
          "question": "一般的な3Dプリンター（熱溶解積層方式）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約150Wで、運転状態や負荷により約105W〜225Wの範囲で変動します。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）を1回使用したときの電気代は？",
          "answer": "3Dプリンター（熱溶解積層方式）の1回あたりの標準使用コストは約0,42 € / Druck (8h)です。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型3Dプリンター（熱溶解積層方式）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 150W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,052€。"
        },
        {
          "question": "3Dプリンター（熱溶解積層方式）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "nas": {
      "name": "家庭用NASサーバー（24時間稼働）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "家庭用NASサーバー（24時間稼働） verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "家庭用NASサーバー（24時間稼働）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的な家庭用NASサーバー（24時間稼働）の年間消費電力量は約220 kWhで、単価0.35 €/kWhの場合、年間電気代は約77,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約30Wの場合、1時間あたりの電気代は約0,011 €となります。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約6.42 €が目安となります。"
        },
        {
          "question": "一般的な家庭用NASサーバー（24時間稼働）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約30Wで、運転状態や負荷により約21W〜45Wの範囲で変動します。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）を1回使用したときの電気代は？",
          "answer": "家庭用NASサーバー（24時間稼働）の1回あたりの標準使用コストは約0,21 € / Tag (24h)です。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型家庭用NASサーバー（24時間稼働）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 30W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,011€。"
        },
        {
          "question": "家庭用NASサーバー（24時間稼働）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    },
    "server": {
      "name": "ホームサーバー・自宅ラボ（24時間常時稼働）",
      "category": "エンタメ・パソコン・オフィス",
      "shortDescription": "ホームサーバー・自宅ラボ（24時間常時稼働） verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）の年間平均電気消費量と年間電気代は？",
          "answer": "一般的なホームサーバー・自宅ラボ（24時間常時稼働）の年間消費電力量は約500 kWhで、単価0.35 €/kWhの場合、年間電気代は約175,00 €（約6,500〜8,500円）となります。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）を1時間稼働させたときの電気代はいくら？",
          "answer": "平均消費電力約65Wの場合、1時間あたりの電気代は約0,023 €となります。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）の1ヶ月あたりの電気代の目安は？",
          "answer": "標準的な使用頻度の場合、1ヶ月あたり約14.58 €が目安となります。"
        },
        {
          "question": "一般的なホームサーバー・自宅ラボ（24時間常時稼働）の定格消費電力（W）はどれくらい？",
          "answer": "平均定格電力は約65Wで、運転状態や負荷により約46W〜98Wの範囲で変動します。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）を1回使用したときの電気代は？",
          "answer": "ホームサーバー・自宅ラボ（24時間常時稼働）の1回あたりの標準使用コストは約0,48 € / Tag (24h)です。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）の電気代を今すぐ15〜25%節電するコツは？",
          "answer": "エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）は待機状態（スタンバイ）でも電気を消費する？",
          "answer": "はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。"
        },
        {
          "question": "10年以上前の旧型ホームサーバー・自宅ラボ（24時間常時稼働）を買い替えると節電になる？",
          "answer": "10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）の電気代を自分で計算する計算式は？",
          "answer": "計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: 65W × 1時間 ÷ 1,000 × 0.35€ ＝ 0,023€。"
        },
        {
          "question": "ホームサーバー・自宅ラボ（24時間常時稼働）で最も電気代が安くなるおすすめの運転設定は？",
          "answer": "メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。"
        }
      ]
    }
  },
  "fr": {
    "kuehlschrank": {
      "name": "Réfrigérateur",
      "category": "Cuisine",
      "shortDescription": "Réfrigérateur verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Réfrigérateur par an ?",
          "answer": "Un Réfrigérateur consomme en moyenne environ 120 kWh par an, soit un coût d'électricité d'environ 42,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Réfrigérateur ?",
          "answer": "Avec une puissance moyenne de 90 Watts, une heure de fonctionnement coûte environ 0,031 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Réfrigérateur sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 3,50 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Réfrigérateur ?",
          "answer": "La puissance nominale moyenne est d'environ 90 Watts, variant entre 63 W et 135 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Réfrigérateur ?",
          "answer": "Une utilisation type de Réfrigérateur revient à environ 0,12 € / Tag."
        },
        {
          "question": "Comment réduire la consommation d'un Réfrigérateur de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Réfrigérateur consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Réfrigérateur par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Réfrigérateur ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 90 W × 1 h ÷ 1 000 × 0,35 € = 0,031 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Réfrigérateur ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "waschmaschine": {
      "name": "Lave-linge",
      "category": "Ménage & Entretien",
      "shortDescription": "Lave-linge verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Lave-linge par an ?",
          "answer": "Un Lave-linge consomme en moyenne environ 140 kWh par an, soit un coût d'électricité d'environ 49,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Lave-linge ?",
          "answer": "Avec une puissance moyenne de 2000 Watts, une heure de fonctionnement coûte environ 0,700 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Lave-linge sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 4,08 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Lave-linge ?",
          "answer": "La puissance nominale moyenne est d'environ 2000 Watts, variant entre 1400 W et 3000 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Lave-linge ?",
          "answer": "Une utilisation type de Lave-linge revient à environ 0,25 € / Waschgang."
        },
        {
          "question": "Comment réduire la consommation d'un Lave-linge de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Lave-linge consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Lave-linge par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Lave-linge ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 2000 W × 1 h ÷ 1 000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Lave-linge ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "trockner": {
      "name": "Sèche-linge",
      "category": "Ménage & Entretien",
      "shortDescription": "Sèche-linge verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Sèche-linge par an ?",
          "answer": "Un Sèche-linge consomme en moyenne environ 180 kWh par an, soit un coût d'électricité d'environ 63,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Sèche-linge ?",
          "answer": "Avec une puissance moyenne de 1500 Watts, une heure de fonctionnement coûte environ 0,525 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Sèche-linge sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 5,25 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Sèche-linge ?",
          "answer": "La puissance nominale moyenne est d'environ 1500 Watts, variant entre 1050 W et 2250 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Sèche-linge ?",
          "answer": "Une utilisation type de Sèche-linge revient à environ 0,45 € / Ladung."
        },
        {
          "question": "Comment réduire la consommation d'un Sèche-linge de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Sèche-linge consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Sèche-linge par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Sèche-linge ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 1500 W × 1 h ÷ 1 000 × 0,35 € = 0,525 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Sèche-linge ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Lave-vaisselle",
      "category": "Cuisine",
      "shortDescription": "Lave-vaisselle verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Lave-vaisselle par an ?",
          "answer": "Un Lave-vaisselle consomme en moyenne environ 160 kWh par an, soit un coût d'électricité d'environ 56,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Lave-vaisselle ?",
          "answer": "Avec une puissance moyenne de 1800 Watts, une heure de fonctionnement coûte environ 0,630 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Lave-vaisselle sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 4,67 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Lave-vaisselle ?",
          "answer": "La puissance nominale moyenne est d'environ 1800 Watts, variant entre 1260 W et 2700 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Lave-vaisselle ?",
          "answer": "Une utilisation type de Lave-vaisselle revient à environ 0,28 € / Spülgang."
        },
        {
          "question": "Comment réduire la consommation d'un Lave-vaisselle de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Lave-vaisselle consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Lave-vaisselle par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Lave-vaisselle ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 1800 W × 1 h ÷ 1 000 × 0,35 € = 0,630 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Lave-vaisselle ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "backofen": {
      "name": "Four électrique",
      "category": "Cuisine",
      "shortDescription": "Four électrique verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Four électrique par an ?",
          "answer": "Un Four électrique consomme en moyenne environ 150 kWh par an, soit un coût d'électricité d'environ 52,50 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Four électrique ?",
          "answer": "Avec une puissance moyenne de 2500 Watts, une heure de fonctionnement coûte environ 0,875 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Four électrique sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 4,38 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Four électrique ?",
          "answer": "La puissance nominale moyenne est d'environ 2500 Watts, variant entre 1750 W et 3750 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Four électrique ?",
          "answer": "Une utilisation type de Four électrique revient à environ 0,55 € / Nutzung."
        },
        {
          "question": "Comment réduire la consommation d'un Four électrique de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Four électrique consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Four électrique par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Four électrique ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 2500 W × 1 h ÷ 1 000 × 0,35 € = 0,875 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Four électrique ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "herd": {
      "name": "Plaque de cuisson & Induction",
      "category": "Cuisine",
      "shortDescription": "Plaque de cuisson & Induction verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Plaque de cuisson & Induction par an ?",
          "answer": "Un Plaque de cuisson & Induction consomme en moyenne environ 220 kWh par an, soit un coût d'électricité d'environ 77,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Plaque de cuisson & Induction ?",
          "answer": "Avec une puissance moyenne de 2000 Watts, une heure de fonctionnement coûte environ 0,700 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Plaque de cuisson & Induction sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 6,42 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Plaque de cuisson & Induction ?",
          "answer": "La puissance nominale moyenne est d'environ 2000 Watts, variant entre 1400 W et 3000 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Plaque de cuisson & Induction ?",
          "answer": "Une utilisation type de Plaque de cuisson & Induction revient à environ 0,35 € / Kochen."
        },
        {
          "question": "Comment réduire la consommation d'un Plaque de cuisson & Induction de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Plaque de cuisson & Induction consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Plaque de cuisson & Induction par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Plaque de cuisson & Induction ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 2000 W × 1 h ÷ 1 000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Plaque de cuisson & Induction ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "wasserkocher": {
      "name": "Bouilloire électrique",
      "category": "Cuisine",
      "shortDescription": "Bouilloire électrique verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Bouilloire électrique par an ?",
          "answer": "Un Bouilloire électrique consomme en moyenne environ 80 kWh par an, soit un coût d'électricité d'environ 28,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Bouilloire électrique ?",
          "answer": "Avec une puissance moyenne de 2200 Watts, une heure de fonctionnement coûte environ 0,770 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Bouilloire électrique sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 2,33 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Bouilloire électrique ?",
          "answer": "La puissance nominale moyenne est d'environ 2200 Watts, variant entre 1540 W et 3300 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Bouilloire électrique ?",
          "answer": "Une utilisation type de Bouilloire électrique revient à environ 0,03 € / Kochen."
        },
        {
          "question": "Comment réduire la consommation d'un Bouilloire électrique de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Bouilloire électrique consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Bouilloire électrique par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Bouilloire électrique ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 2200 W × 1 h ÷ 1 000 × 0,35 € = 0,770 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Bouilloire électrique ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Machine à café",
      "category": "Cuisine",
      "shortDescription": "Machine à café verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Machine à café par an ?",
          "answer": "Un Machine à café consomme en moyenne environ 110 kWh par an, soit un coût d'électricité d'environ 38,50 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Machine à café ?",
          "answer": "Avec une puissance moyenne de 1450 Watts, une heure de fonctionnement coûte environ 0,507 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Machine à café sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 3,21 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Machine à café ?",
          "answer": "La puissance nominale moyenne est d'environ 1450 Watts, variant entre 1015 W et 2175 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Machine à café ?",
          "answer": "Une utilisation type de Machine à café revient à environ 0,04 € / Tasse."
        },
        {
          "question": "Comment réduire la consommation d'un Machine à café de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Machine à café consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Machine à café par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Machine à café ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 1450 W × 1 h ÷ 1 000 × 0,35 € = 0,507 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Machine à café ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "fernseher": {
      "name": "Téléviseur Smart TV (55-65\")",
      "category": "Divertissement & Bureau",
      "shortDescription": "Téléviseur Smart TV (55-65\") verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Téléviseur Smart TV (55-65\") par an ?",
          "answer": "Un Téléviseur Smart TV (55-65\") consomme en moyenne environ 175 kWh par an, soit un coût d'électricité d'environ 61,25 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Téléviseur Smart TV (55-65\") ?",
          "answer": "Avec une puissance moyenne de 120 Watts, une heure de fonctionnement coûte environ 0,042 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Téléviseur Smart TV (55-65\") sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 5,10 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Téléviseur Smart TV (55-65\") ?",
          "answer": "La puissance nominale moyenne est d'environ 120 Watts, variant entre 84 W et 180 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Téléviseur Smart TV (55-65\") ?",
          "answer": "Une utilisation type de Téléviseur Smart TV (55-65\") revient à environ 0,17 € / Tag (4h)."
        },
        {
          "question": "Comment réduire la consommation d'un Téléviseur Smart TV (55-65\") de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Téléviseur Smart TV (55-65\") consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Téléviseur Smart TV (55-65\") par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Téléviseur Smart TV (55-65\") ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 120 W × 1 h ÷ 1 000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Téléviseur Smart TV (55-65\") ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC Gamer Haute Performance",
      "category": "Divertissement & Bureau",
      "shortDescription": "PC Gamer Haute Performance verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un PC Gamer Haute Performance par an ?",
          "answer": "Un PC Gamer Haute Performance consomme en moyenne environ 490 kWh par an, soit un coût d'électricité d'environ 171,50 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un PC Gamer Haute Performance ?",
          "answer": "Avec une puissance moyenne de 450 Watts, une heure de fonctionnement coûte environ 0,158 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un PC Gamer Haute Performance sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 14,29 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un PC Gamer Haute Performance ?",
          "answer": "La puissance nominale moyenne est d'environ 450 Watts, variant entre 315 W et 675 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de PC Gamer Haute Performance ?",
          "answer": "Une utilisation type de PC Gamer Haute Performance revient à environ 0,47 € / Session (3h)."
        },
        {
          "question": "Comment réduire la consommation d'un PC Gamer Haute Performance de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un PC Gamer Haute Performance consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux PC Gamer Haute Performance par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un PC Gamer Haute Performance ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 450 W × 1 h ÷ 1 000 × 0,35 € = 0,158 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un PC Gamer Haute Performance ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "pc": {
      "name": "PC de Bureau (Bureautique)",
      "category": "Divertissement & Bureau",
      "shortDescription": "PC de Bureau (Bureautique) verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un PC de Bureau (Bureautique) par an ?",
          "answer": "Un PC de Bureau (Bureautique) consomme en moyenne environ 200 kWh par an, soit un coût d'électricité d'environ 70,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un PC de Bureau (Bureautique) ?",
          "answer": "Avec une puissance moyenne de 120 Watts, une heure de fonctionnement coûte environ 0,042 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un PC de Bureau (Bureautique) sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 5,83 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un PC de Bureau (Bureautique) ?",
          "answer": "La puissance nominale moyenne est d'environ 120 Watts, variant entre 84 W et 180 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de PC de Bureau (Bureautique) ?",
          "answer": "Une utilisation type de PC de Bureau (Bureautique) revient à environ 0,34 € / Arbeitstag (8h)."
        },
        {
          "question": "Comment réduire la consommation d'un PC de Bureau (Bureautique) de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un PC de Bureau (Bureautique) consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux PC de Bureau (Bureautique) par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un PC de Bureau (Bureautique) ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 120 W × 1 h ÷ 1 000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un PC de Bureau (Bureautique) ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "laptop": {
      "name": "Ordinateur Portable",
      "category": "Divertissement & Bureau",
      "shortDescription": "Ordinateur Portable verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Ordinateur Portable par an ?",
          "answer": "Un Ordinateur Portable consomme en moyenne environ 80 kWh par an, soit un coût d'électricité d'environ 28,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Ordinateur Portable ?",
          "answer": "Avec une puissance moyenne de 50 Watts, une heure de fonctionnement coûte environ 0,018 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Ordinateur Portable sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 2,33 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Ordinateur Portable ?",
          "answer": "La puissance nominale moyenne est d'environ 50 Watts, variant entre 35 W et 75 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Ordinateur Portable ?",
          "answer": "Une utilisation type de Ordinateur Portable revient à environ 0,14 € / Arbeitstag (8h)."
        },
        {
          "question": "Comment réduire la consommation d'un Ordinateur Portable de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Ordinateur Portable consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Ordinateur Portable par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Ordinateur Portable ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 50 W × 1 h ÷ 1 000 × 0,35 € = 0,018 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Ordinateur Portable ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "monitor": {
      "name": "Écran PC (27-32\")",
      "category": "Divertissement & Bureau",
      "shortDescription": "Écran PC (27-32\") verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Écran PC (27-32\") par an ?",
          "answer": "Un Écran PC (27-32\") consomme en moyenne environ 60 kWh par an, soit un coût d'électricité d'environ 21,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Écran PC (27-32\") ?",
          "answer": "Avec une puissance moyenne de 35 Watts, une heure de fonctionnement coûte environ 0,012 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Écran PC (27-32\") sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 1,75 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Écran PC (27-32\") ?",
          "answer": "La puissance nominale moyenne est d'environ 35 Watts, variant entre 25 W et 53 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Écran PC (27-32\") ?",
          "answer": "Une utilisation type de Écran PC (27-32\") revient à environ 0,10 € / Tag."
        },
        {
          "question": "Comment réduire la consommation d'un Écran PC (27-32\") de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Écran PC (27-32\") consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Écran PC (27-32\") par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Écran PC (27-32\") ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 35 W × 1 h ÷ 1 000 × 0,35 € = 0,012 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Écran PC (27-32\") ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Divertissement & Bureau",
      "shortDescription": "PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un PlayStation 5 (PS5) par an ?",
          "answer": "Un PlayStation 5 (PS5) consomme en moyenne environ 150 kWh par an, soit un coût d'électricité d'environ 52,50 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un PlayStation 5 (PS5) ?",
          "answer": "Avec une puissance moyenne de 200 Watts, une heure de fonctionnement coûte environ 0,070 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un PlayStation 5 (PS5) sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 4,38 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un PlayStation 5 (PS5) ?",
          "answer": "La puissance nominale moyenne est d'environ 200 Watts, variant entre 140 W et 300 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de PlayStation 5 (PS5) ?",
          "answer": "Une utilisation type de PlayStation 5 (PS5) revient à environ 0,14 € / Gaming (2h)."
        },
        {
          "question": "Comment réduire la consommation d'un PlayStation 5 (PS5) de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un PlayStation 5 (PS5) consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux PlayStation 5 (PS5) par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un PlayStation 5 (PS5) ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 200 W × 1 h ÷ 1 000 × 0,35 € = 0,070 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un PlayStation 5 (PS5) ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Divertissement & Bureau",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Xbox Series X par an ?",
          "answer": "Un Xbox Series X consomme en moyenne environ 140 kWh par an, soit un coût d'électricité d'environ 49,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Xbox Series X ?",
          "answer": "Avec une puissance moyenne de 180 Watts, une heure de fonctionnement coûte environ 0,063 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Xbox Series X sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 4,08 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Xbox Series X ?",
          "answer": "La puissance nominale moyenne est d'environ 180 Watts, variant entre 126 W et 270 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Xbox Series X ?",
          "answer": "Une utilisation type de Xbox Series X revient à environ 0,13 € / Gaming (2h)."
        },
        {
          "question": "Comment réduire la consommation d'un Xbox Series X de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Xbox Series X consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Xbox Series X par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Xbox Series X ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 180 W × 1 h ÷ 1 000 × 0,35 € = 0,063 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Xbox Series X ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "klimaanlage": {
      "name": "Climatiseur Split",
      "category": "Chauffage & Climatisation",
      "shortDescription": "Climatiseur Split verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Climatiseur Split par an ?",
          "answer": "Un Climatiseur Split consomme en moyenne environ 450 kWh par an, soit un coût d'électricité d'environ 157,50 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Climatiseur Split ?",
          "answer": "Avec une puissance moyenne de 900 Watts, une heure de fonctionnement coûte environ 0,315 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Climatiseur Split sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 13,13 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Climatiseur Split ?",
          "answer": "La puissance nominale moyenne est d'environ 900 Watts, variant entre 630 W et 1350 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Climatiseur Split ?",
          "answer": "Une utilisation type de Climatiseur Split revient à environ 1,50 € / Hitzetag."
        },
        {
          "question": "Comment réduire la consommation d'un Climatiseur Split de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Climatiseur Split consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Climatiseur Split par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Climatiseur Split ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 900 W × 1 h ÷ 1 000 × 0,35 € = 0,315 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Climatiseur Split ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilateur sur pied",
      "category": "Chauffage & Climatisation",
      "shortDescription": "Ventilateur sur pied verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Ventilateur sur pied par an ?",
          "answer": "Un Ventilateur sur pied consomme en moyenne environ 35 kWh par an, soit un coût d'électricité d'environ 12,25 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Ventilateur sur pied ?",
          "answer": "Avec une puissance moyenne de 45 Watts, une heure de fonctionnement coûte environ 0,016 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Ventilateur sur pied sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 1,02 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Ventilateur sur pied ?",
          "answer": "La puissance nominale moyenne est d'environ 45 Watts, variant entre 31 W et 68 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Ventilateur sur pied ?",
          "answer": "Une utilisation type de Ventilateur sur pied revient à environ 0,13 € / Tag (8h)."
        },
        {
          "question": "Comment réduire la consommation d'un Ventilateur sur pied de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Ventilateur sur pied consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Ventilateur sur pied par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Ventilateur sur pied ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 45 W × 1 h ÷ 1 000 × 0,35 € = 0,016 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Ventilateur sur pied ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "heizluefter": {
      "name": "Radiateur Soufflant Électrique",
      "category": "Chauffage & Climatisation",
      "shortDescription": "Radiateur Soufflant Électrique verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Radiateur Soufflant Électrique par an ?",
          "answer": "Un Radiateur Soufflant Électrique consomme en moyenne environ 360 kWh par an, soit un coût d'électricité d'environ 126,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Radiateur Soufflant Électrique ?",
          "answer": "Avec une puissance moyenne de 2000 Watts, une heure de fonctionnement coûte environ 0,700 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Radiateur Soufflant Électrique sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 10,50 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Radiateur Soufflant Électrique ?",
          "answer": "La puissance nominale moyenne est d'environ 2000 Watts, variant entre 1400 W et 3000 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Radiateur Soufflant Électrique ?",
          "answer": "Une utilisation type de Radiateur Soufflant Électrique revient à environ 2,10 € / Tag (3h)."
        },
        {
          "question": "Comment réduire la consommation d'un Radiateur Soufflant Électrique de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Radiateur Soufflant Électrique consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Radiateur Soufflant Électrique par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Radiateur Soufflant Électrique ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 2000 W × 1 h ÷ 1 000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Radiateur Soufflant Électrique ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Déshumidificateur d'air",
      "category": "Chauffage & Climatisation",
      "shortDescription": "Déshumidificateur d'air verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Déshumidificateur d'air par an ?",
          "answer": "Un Déshumidificateur d'air consomme en moyenne environ 300 kWh par an, soit un coût d'électricité d'environ 105,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Déshumidificateur d'air ?",
          "answer": "Avec une puissance moyenne de 250 Watts, une heure de fonctionnement coûte environ 0,087 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Déshumidificateur d'air sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 8,75 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Déshumidificateur d'air ?",
          "answer": "La puissance nominale moyenne est d'environ 250 Watts, variant entre 175 W et 375 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Déshumidificateur d'air ?",
          "answer": "Une utilisation type de Déshumidificateur d'air revient à environ 0,52 € / Tag (6h)."
        },
        {
          "question": "Comment réduire la consommation d'un Déshumidificateur d'air de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Déshumidificateur d'air consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Déshumidificateur d'air par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Déshumidificateur d'air ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 250 W × 1 h ÷ 1 000 × 0,35 € = 0,087 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Déshumidificateur d'air ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "aquarium": {
      "name": "Aquarium (100–200 L)",
      "category": "Loisirs & Spécial",
      "shortDescription": "Aquarium (100–200 L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Aquarium (100–200 L) par an ?",
          "answer": "Un Aquarium (100–200 L) consomme en moyenne environ 400 kWh par an, soit un coût d'électricité d'environ 140,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Aquarium (100–200 L) ?",
          "answer": "Avec une puissance moyenne de 120 Watts, une heure de fonctionnement coûte environ 0,042 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Aquarium (100–200 L) sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 11,67 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Aquarium (100–200 L) ?",
          "answer": "La puissance nominale moyenne est d'environ 120 Watts, variant entre 84 W et 180 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Aquarium (100–200 L) ?",
          "answer": "Une utilisation type de Aquarium (100–200 L) revient à environ 0,38 € / Tag."
        },
        {
          "question": "Comment réduire la consommation d'un Aquarium (100–200 L) de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Aquarium (100–200 L) consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Aquarium (100–200 L) par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Aquarium (100–200 L) ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 120 W × 1 h ÷ 1 000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Aquarium (100–200 L) ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "pool": {
      "name": "Pompe de piscine et filtration",
      "category": "Loisirs & Spécial",
      "shortDescription": "Pompe de piscine et filtration verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Pompe de piscine et filtration par an ?",
          "answer": "Un Pompe de piscine et filtration consomme en moyenne environ 700 kWh par an, soit un coût d'électricité d'environ 245,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Pompe de piscine et filtration ?",
          "answer": "Avec une puissance moyenne de 600 Watts, une heure de fonctionnement coûte environ 0,210 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Pompe de piscine et filtration sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 20,42 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Pompe de piscine et filtration ?",
          "answer": "La puissance nominale moyenne est d'environ 600 Watts, variant entre 420 W et 900 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Pompe de piscine et filtration ?",
          "answer": "Une utilisation type de Pompe de piscine et filtration revient à environ 1,26 € / Tag (6h)."
        },
        {
          "question": "Comment réduire la consommation d'un Pompe de piscine et filtration de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Pompe de piscine et filtration consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Pompe de piscine et filtration par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Pompe de piscine et filtration ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 600 W × 1 h ÷ 1 000 × 0,35 € = 0,210 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Pompe de piscine et filtration ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "whirlpool": {
      "name": "Spa gonflable / Jacuzzi",
      "category": "Loisirs & Spécial",
      "shortDescription": "Spa gonflable / Jacuzzi verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Spa gonflable / Jacuzzi par an ?",
          "answer": "Un Spa gonflable / Jacuzzi consomme en moyenne environ 2500 kWh par an, soit un coût d'électricité d'environ 875,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Spa gonflable / Jacuzzi ?",
          "answer": "Avec une puissance moyenne de 2000 Watts, une heure de fonctionnement coûte environ 0,700 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Spa gonflable / Jacuzzi sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 72,92 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Spa gonflable / Jacuzzi ?",
          "answer": "La puissance nominale moyenne est d'environ 2000 Watts, variant entre 1400 W et 3000 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Spa gonflable / Jacuzzi ?",
          "answer": "Une utilisation type de Spa gonflable / Jacuzzi revient à environ 2,40 € / Tag."
        },
        {
          "question": "Comment réduire la consommation d'un Spa gonflable / Jacuzzi de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Spa gonflable / Jacuzzi consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Spa gonflable / Jacuzzi par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Spa gonflable / Jacuzzi ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 2000 W × 1 h ÷ 1 000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Spa gonflable / Jacuzzi ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "3d-drucker": {
      "name": "Imprimante 3D (FDM)",
      "category": "Loisirs & Spécial",
      "shortDescription": "Imprimante 3D (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Imprimante 3D (FDM) par an ?",
          "answer": "Un Imprimante 3D (FDM) consomme en moyenne environ 120 kWh par an, soit un coût d'électricité d'environ 42,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Imprimante 3D (FDM) ?",
          "answer": "Avec une puissance moyenne de 150 Watts, une heure de fonctionnement coûte environ 0,052 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Imprimante 3D (FDM) sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 3,50 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Imprimante 3D (FDM) ?",
          "answer": "La puissance nominale moyenne est d'environ 150 Watts, variant entre 105 W et 225 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Imprimante 3D (FDM) ?",
          "answer": "Une utilisation type de Imprimante 3D (FDM) revient à environ 0,42 € / Druck (8h)."
        },
        {
          "question": "Comment réduire la consommation d'un Imprimante 3D (FDM) de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Imprimante 3D (FDM) consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Imprimante 3D (FDM) par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Imprimante 3D (FDM) ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 150 W × 1 h ÷ 1 000 × 0,35 € = 0,052 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Imprimante 3D (FDM) ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "nas": {
      "name": "Serveur NAS Domestique (24/7)",
      "category": "Divertissement & Bureau",
      "shortDescription": "Serveur NAS Domestique (24/7) verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Serveur NAS Domestique (24/7) par an ?",
          "answer": "Un Serveur NAS Domestique (24/7) consomme en moyenne environ 220 kWh par an, soit un coût d'électricité d'environ 77,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Serveur NAS Domestique (24/7) ?",
          "answer": "Avec une puissance moyenne de 30 Watts, une heure de fonctionnement coûte environ 0,011 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Serveur NAS Domestique (24/7) sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 6,42 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Serveur NAS Domestique (24/7) ?",
          "answer": "La puissance nominale moyenne est d'environ 30 Watts, variant entre 21 W et 45 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Serveur NAS Domestique (24/7) ?",
          "answer": "Une utilisation type de Serveur NAS Domestique (24/7) revient à environ 0,21 € / Tag (24h)."
        },
        {
          "question": "Comment réduire la consommation d'un Serveur NAS Domestique (24/7) de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Serveur NAS Domestique (24/7) consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Serveur NAS Domestique (24/7) par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Serveur NAS Domestique (24/7) ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 30 W × 1 h ÷ 1 000 × 0,35 € = 0,011 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Serveur NAS Domestique (24/7) ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    },
    "server": {
      "name": "Serveur Maison / Homelab (24/7)",
      "category": "Divertissement & Bureau",
      "shortDescription": "Serveur Maison / Homelab (24/7) verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quelle est la consommation électrique moyenne d'un Serveur Maison / Homelab (24/7) par an ?",
          "answer": "Un Serveur Maison / Homelab (24/7) consomme en moyenne environ 500 kWh par an, soit un coût d'électricité d'environ 175,00 € par an (à 0,35 €/kWh)."
        },
        {
          "question": "Combien coûte 1 heure d'utilisation d'un Serveur Maison / Homelab (24/7) ?",
          "answer": "Avec une puissance moyenne de 65 Watts, une heure de fonctionnement coûte environ 0,023 €."
        },
        {
          "question": "Quel est le coût moyen mensuel d'un Serveur Maison / Homelab (24/7) sur la facture ?",
          "answer": "Le coût mensuel moyen est d'environ 14,58 € par mois en usage standard."
        },
        {
          "question": "Quelle est la puissance typique en Watts d'un Serveur Maison / Homelab (24/7) ?",
          "answer": "La puissance nominale moyenne est d'environ 65 Watts, variant entre 46 W et 98 W selon les cycles."
        },
        {
          "question": "Combien coûte un cycle ou une utilisation typique de Serveur Maison / Homelab (24/7) ?",
          "answer": "Une utilisation type de Serveur Maison / Homelab (24/7) revient à environ 0,48 € / Tag (24h)."
        },
        {
          "question": "Comment réduire la consommation d'un Serveur Maison / Homelab (24/7) de 15 à 25 % ?",
          "answer": "Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs."
        },
        {
          "question": "Un Serveur Maison / Homelab (24/7) consomme-t-il de l'électricité en veille ?",
          "answer": "Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an)."
        },
        {
          "question": "Est-il rentable de remplacer un vieux Serveur Maison / Homelab (24/7) par un modèle récent ?",
          "answer": "Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans."
        },
        {
          "question": "Comment calculer soi-même la consommation d'un Serveur Maison / Homelab (24/7) ?",
          "answer": "Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : 65 W × 1 h ÷ 1 000 × 0,35 € = 0,023 €."
        },
        {
          "question": "Quel est le programme le plus économique pour un Serveur Maison / Homelab (24/7) ?",
          "answer": "Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale."
        }
      ]
    }
  },
  "pt": {
    "kuehlschrank": {
      "name": "Frigorífico",
      "category": "Cozinha",
      "shortDescription": "Frigorífico verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Frigorífico?",
          "answer": "Um Frigorífico consome em média cerca de 120 kWh por ano, o que representa um custo anual de aproximadamente 42,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Frigorífico?",
          "answer": "Com uma potência média de cerca de 90 Watts, uma hora de uso custa cerca de 0,031 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Frigorífico?",
          "answer": "O custo mensal situa-se em média nos 3,50 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Frigorífico?",
          "answer": "A potência média é de cerca de 90 Watts, oscilando entre 63 W e 135 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Frigorífico?",
          "answer": "Uma utilização típica de Frigorífico custa cerca de 0,12 € / Tag."
        },
        {
          "question": "Como reduzir o consumo de um Frigorífico em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Frigorífico consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Frigorífico antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Frigorífico?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 90 W × 1 h ÷ 1.000 × 0,35 € = 0,031 €."
        },
        {
          "question": "Qual é o programa mais económico para um Frigorífico?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "waschmaschine": {
      "name": "Máquina de Lavar Roupa",
      "category": "Casa e Limpeza",
      "shortDescription": "Máquina de Lavar Roupa verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Máquina de Lavar Roupa?",
          "answer": "Um Máquina de Lavar Roupa consome em média cerca de 140 kWh por ano, o que representa um custo anual de aproximadamente 49,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Máquina de Lavar Roupa?",
          "answer": "Com uma potência média de cerca de 2000 Watts, uma hora de uso custa cerca de 0,700 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Máquina de Lavar Roupa?",
          "answer": "O custo mensal situa-se em média nos 4,08 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Máquina de Lavar Roupa?",
          "answer": "A potência média é de cerca de 2000 Watts, oscilando entre 1400 W e 3000 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Máquina de Lavar Roupa?",
          "answer": "Uma utilização típica de Máquina de Lavar Roupa custa cerca de 0,25 € / Waschgang."
        },
        {
          "question": "Como reduzir o consumo de um Máquina de Lavar Roupa em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Máquina de Lavar Roupa consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Máquina de Lavar Roupa antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Máquina de Lavar Roupa?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual é o programa mais económico para um Máquina de Lavar Roupa?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "trockner": {
      "name": "Secadora de Roupa",
      "category": "Casa e Limpeza",
      "shortDescription": "Secadora de Roupa verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Secadora de Roupa?",
          "answer": "Um Secadora de Roupa consome em média cerca de 180 kWh por ano, o que representa um custo anual de aproximadamente 63,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Secadora de Roupa?",
          "answer": "Com uma potência média de cerca de 1500 Watts, uma hora de uso custa cerca de 0,525 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Secadora de Roupa?",
          "answer": "O custo mensal situa-se em média nos 5,25 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Secadora de Roupa?",
          "answer": "A potência média é de cerca de 1500 Watts, oscilando entre 1050 W e 2250 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Secadora de Roupa?",
          "answer": "Uma utilização típica de Secadora de Roupa custa cerca de 0,45 € / Ladung."
        },
        {
          "question": "Como reduzir o consumo de um Secadora de Roupa em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Secadora de Roupa consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Secadora de Roupa antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Secadora de Roupa?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 1500 W × 1 h ÷ 1.000 × 0,35 € = 0,525 €."
        },
        {
          "question": "Qual é o programa mais económico para um Secadora de Roupa?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Máquina de Lavar Louça",
      "category": "Cozinha",
      "shortDescription": "Máquina de Lavar Louça verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Máquina de Lavar Louça?",
          "answer": "Um Máquina de Lavar Louça consome em média cerca de 160 kWh por ano, o que representa um custo anual de aproximadamente 56,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Máquina de Lavar Louça?",
          "answer": "Com uma potência média de cerca de 1800 Watts, uma hora de uso custa cerca de 0,630 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Máquina de Lavar Louça?",
          "answer": "O custo mensal situa-se em média nos 4,67 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Máquina de Lavar Louça?",
          "answer": "A potência média é de cerca de 1800 Watts, oscilando entre 1260 W e 2700 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Máquina de Lavar Louça?",
          "answer": "Uma utilização típica de Máquina de Lavar Louça custa cerca de 0,28 € / Spülgang."
        },
        {
          "question": "Como reduzir o consumo de um Máquina de Lavar Louça em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Máquina de Lavar Louça consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Máquina de Lavar Louça antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Máquina de Lavar Louça?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 1800 W × 1 h ÷ 1.000 × 0,35 € = 0,630 €."
        },
        {
          "question": "Qual é o programa mais económico para um Máquina de Lavar Louça?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "backofen": {
      "name": "Forno Elétrico",
      "category": "Cozinha",
      "shortDescription": "Forno Elétrico verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Forno Elétrico?",
          "answer": "Um Forno Elétrico consome em média cerca de 150 kWh por ano, o que representa um custo anual de aproximadamente 52,50 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Forno Elétrico?",
          "answer": "Com uma potência média de cerca de 2500 Watts, uma hora de uso custa cerca de 0,875 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Forno Elétrico?",
          "answer": "O custo mensal situa-se em média nos 4,38 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Forno Elétrico?",
          "answer": "A potência média é de cerca de 2500 Watts, oscilando entre 1750 W e 3750 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Forno Elétrico?",
          "answer": "Uma utilização típica de Forno Elétrico custa cerca de 0,55 € / Nutzung."
        },
        {
          "question": "Como reduzir o consumo de um Forno Elétrico em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Forno Elétrico consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Forno Elétrico antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Forno Elétrico?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 2500 W × 1 h ÷ 1.000 × 0,35 € = 0,875 €."
        },
        {
          "question": "Qual é o programa mais económico para um Forno Elétrico?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "herd": {
      "name": "Placa de Fogão e Indução",
      "category": "Cozinha",
      "shortDescription": "Placa de Fogão e Indução verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Placa de Fogão e Indução?",
          "answer": "Um Placa de Fogão e Indução consome em média cerca de 220 kWh por ano, o que representa um custo anual de aproximadamente 77,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Placa de Fogão e Indução?",
          "answer": "Com uma potência média de cerca de 2000 Watts, uma hora de uso custa cerca de 0,700 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Placa de Fogão e Indução?",
          "answer": "O custo mensal situa-se em média nos 6,42 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Placa de Fogão e Indução?",
          "answer": "A potência média é de cerca de 2000 Watts, oscilando entre 1400 W e 3000 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Placa de Fogão e Indução?",
          "answer": "Uma utilização típica de Placa de Fogão e Indução custa cerca de 0,35 € / Kochen."
        },
        {
          "question": "Como reduzir o consumo de um Placa de Fogão e Indução em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Placa de Fogão e Indução consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Placa de Fogão e Indução antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Placa de Fogão e Indução?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual é o programa mais económico para um Placa de Fogão e Indução?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "wasserkocher": {
      "name": "Chaleira Elétrica",
      "category": "Cozinha",
      "shortDescription": "Chaleira Elétrica verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Chaleira Elétrica?",
          "answer": "Um Chaleira Elétrica consome em média cerca de 80 kWh por ano, o que representa um custo anual de aproximadamente 28,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Chaleira Elétrica?",
          "answer": "Com uma potência média de cerca de 2200 Watts, uma hora de uso custa cerca de 0,770 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Chaleira Elétrica?",
          "answer": "O custo mensal situa-se em média nos 2,33 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Chaleira Elétrica?",
          "answer": "A potência média é de cerca de 2200 Watts, oscilando entre 1540 W e 3300 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Chaleira Elétrica?",
          "answer": "Uma utilização típica de Chaleira Elétrica custa cerca de 0,03 € / Kochen."
        },
        {
          "question": "Como reduzir o consumo de um Chaleira Elétrica em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Chaleira Elétrica consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Chaleira Elétrica antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Chaleira Elétrica?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 2200 W × 1 h ÷ 1.000 × 0,35 € = 0,770 €."
        },
        {
          "question": "Qual é o programa mais económico para um Chaleira Elétrica?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Máquina de Café",
      "category": "Cozinha",
      "shortDescription": "Máquina de Café verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Máquina de Café?",
          "answer": "Um Máquina de Café consome em média cerca de 110 kWh por ano, o que representa um custo anual de aproximadamente 38,50 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Máquina de Café?",
          "answer": "Com uma potência média de cerca de 1450 Watts, uma hora de uso custa cerca de 0,507 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Máquina de Café?",
          "answer": "O custo mensal situa-se em média nos 3,21 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Máquina de Café?",
          "answer": "A potência média é de cerca de 1450 Watts, oscilando entre 1015 W e 2175 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Máquina de Café?",
          "answer": "Uma utilização típica de Máquina de Café custa cerca de 0,04 € / Tasse."
        },
        {
          "question": "Como reduzir o consumo de um Máquina de Café em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Máquina de Café consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Máquina de Café antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Máquina de Café?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 1450 W × 1 h ÷ 1.000 × 0,35 € = 0,507 €."
        },
        {
          "question": "Qual é o programa mais económico para um Máquina de Café?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "fernseher": {
      "name": "Smart TV (55-65\")",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Smart TV (55-65\") verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Smart TV (55-65\")?",
          "answer": "Um Smart TV (55-65\") consome em média cerca de 175 kWh por ano, o que representa um custo anual de aproximadamente 61,25 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Smart TV (55-65\")?",
          "answer": "Com uma potência média de cerca de 120 Watts, uma hora de uso custa cerca de 0,042 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Smart TV (55-65\")?",
          "answer": "O custo mensal situa-se em média nos 5,10 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Smart TV (55-65\")?",
          "answer": "A potência média é de cerca de 120 Watts, oscilando entre 84 W e 180 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Smart TV (55-65\")?",
          "answer": "Uma utilização típica de Smart TV (55-65\") custa cerca de 0,17 € / Tag (4h)."
        },
        {
          "question": "Como reduzir o consumo de um Smart TV (55-65\") em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Smart TV (55-65\") consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Smart TV (55-65\") antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Smart TV (55-65\")?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Qual é o programa mais económico para um Smart TV (55-65\")?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC Gamer High-End",
      "category": "Entretenimento e Escritório",
      "shortDescription": "PC Gamer High-End verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um PC Gamer High-End?",
          "answer": "Um PC Gamer High-End consome em média cerca de 490 kWh por ano, o que representa um custo anual de aproximadamente 171,50 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um PC Gamer High-End?",
          "answer": "Com uma potência média de cerca de 450 Watts, uma hora de uso custa cerca de 0,158 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um PC Gamer High-End?",
          "answer": "O custo mensal situa-se em média nos 14,29 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um PC Gamer High-End?",
          "answer": "A potência média é de cerca de 450 Watts, oscilando entre 315 W e 675 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um PC Gamer High-End?",
          "answer": "Uma utilização típica de PC Gamer High-End custa cerca de 0,47 € / Session (3h)."
        },
        {
          "question": "Como reduzir o consumo de um PC Gamer High-End em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um PC Gamer High-End consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um PC Gamer High-End antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um PC Gamer High-End?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 450 W × 1 h ÷ 1.000 × 0,35 € = 0,158 €."
        },
        {
          "question": "Qual é o programa mais económico para um PC Gamer High-End?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "pc": {
      "name": "Computador Desktop (Escritório)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Computador Desktop (Escritório) verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Computador Desktop (Escritório)?",
          "answer": "Um Computador Desktop (Escritório) consome em média cerca de 200 kWh por ano, o que representa um custo anual de aproximadamente 70,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Computador Desktop (Escritório)?",
          "answer": "Com uma potência média de cerca de 120 Watts, uma hora de uso custa cerca de 0,042 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Computador Desktop (Escritório)?",
          "answer": "O custo mensal situa-se em média nos 5,83 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Computador Desktop (Escritório)?",
          "answer": "A potência média é de cerca de 120 Watts, oscilando entre 84 W e 180 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Computador Desktop (Escritório)?",
          "answer": "Uma utilização típica de Computador Desktop (Escritório) custa cerca de 0,34 € / Arbeitstag (8h)."
        },
        {
          "question": "Como reduzir o consumo de um Computador Desktop (Escritório) em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Computador Desktop (Escritório) consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Computador Desktop (Escritório) antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Computador Desktop (Escritório)?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Qual é o programa mais económico para um Computador Desktop (Escritório)?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "laptop": {
      "name": "Portátil / Notebook",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Portátil / Notebook verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Portátil / Notebook?",
          "answer": "Um Portátil / Notebook consome em média cerca de 80 kWh por ano, o que representa um custo anual de aproximadamente 28,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Portátil / Notebook?",
          "answer": "Com uma potência média de cerca de 50 Watts, uma hora de uso custa cerca de 0,018 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Portátil / Notebook?",
          "answer": "O custo mensal situa-se em média nos 2,33 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Portátil / Notebook?",
          "answer": "A potência média é de cerca de 50 Watts, oscilando entre 35 W e 75 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Portátil / Notebook?",
          "answer": "Uma utilização típica de Portátil / Notebook custa cerca de 0,14 € / Arbeitstag (8h)."
        },
        {
          "question": "Como reduzir o consumo de um Portátil / Notebook em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Portátil / Notebook consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Portátil / Notebook antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Portátil / Notebook?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 50 W × 1 h ÷ 1.000 × 0,35 € = 0,018 €."
        },
        {
          "question": "Qual é o programa mais económico para um Portátil / Notebook?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "monitor": {
      "name": "Monitor de PC (27-32\")",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Monitor de PC (27-32\") verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Monitor de PC (27-32\")?",
          "answer": "Um Monitor de PC (27-32\") consome em média cerca de 60 kWh por ano, o que representa um custo anual de aproximadamente 21,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Monitor de PC (27-32\")?",
          "answer": "Com uma potência média de cerca de 35 Watts, uma hora de uso custa cerca de 0,012 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Monitor de PC (27-32\")?",
          "answer": "O custo mensal situa-se em média nos 1,75 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Monitor de PC (27-32\")?",
          "answer": "A potência média é de cerca de 35 Watts, oscilando entre 25 W e 53 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Monitor de PC (27-32\")?",
          "answer": "Uma utilização típica de Monitor de PC (27-32\") custa cerca de 0,10 € / Tag."
        },
        {
          "question": "Como reduzir o consumo de um Monitor de PC (27-32\") em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Monitor de PC (27-32\") consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Monitor de PC (27-32\") antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Monitor de PC (27-32\")?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 35 W × 1 h ÷ 1.000 × 0,35 € = 0,012 €."
        },
        {
          "question": "Qual é o programa mais económico para um Monitor de PC (27-32\")?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um PlayStation 5 (PS5)?",
          "answer": "Um PlayStation 5 (PS5) consome em média cerca de 150 kWh por ano, o que representa um custo anual de aproximadamente 52,50 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um PlayStation 5 (PS5)?",
          "answer": "Com uma potência média de cerca de 200 Watts, uma hora de uso custa cerca de 0,070 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um PlayStation 5 (PS5)?",
          "answer": "O custo mensal situa-se em média nos 4,38 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um PlayStation 5 (PS5)?",
          "answer": "A potência média é de cerca de 200 Watts, oscilando entre 140 W e 300 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um PlayStation 5 (PS5)?",
          "answer": "Uma utilização típica de PlayStation 5 (PS5) custa cerca de 0,14 € / Gaming (2h)."
        },
        {
          "question": "Como reduzir o consumo de um PlayStation 5 (PS5) em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um PlayStation 5 (PS5) consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um PlayStation 5 (PS5) antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um PlayStation 5 (PS5)?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 200 W × 1 h ÷ 1.000 × 0,35 € = 0,070 €."
        },
        {
          "question": "Qual é o programa mais económico para um PlayStation 5 (PS5)?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Xbox Series X?",
          "answer": "Um Xbox Series X consome em média cerca de 140 kWh por ano, o que representa um custo anual de aproximadamente 49,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Xbox Series X?",
          "answer": "Com uma potência média de cerca de 180 Watts, uma hora de uso custa cerca de 0,063 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Xbox Series X?",
          "answer": "O custo mensal situa-se em média nos 4,08 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Xbox Series X?",
          "answer": "A potência média é de cerca de 180 Watts, oscilando entre 126 W e 270 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Xbox Series X?",
          "answer": "Uma utilização típica de Xbox Series X custa cerca de 0,13 € / Gaming (2h)."
        },
        {
          "question": "Como reduzir o consumo de um Xbox Series X em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Xbox Series X consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Xbox Series X antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Xbox Series X?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 180 W × 1 h ÷ 1.000 × 0,35 € = 0,063 €."
        },
        {
          "question": "Qual é o programa mais económico para um Xbox Series X?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "klimaanlage": {
      "name": "Ar Condicionado Split",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Ar Condicionado Split verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Ar Condicionado Split?",
          "answer": "Um Ar Condicionado Split consome em média cerca de 450 kWh por ano, o que representa um custo anual de aproximadamente 157,50 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Ar Condicionado Split?",
          "answer": "Com uma potência média de cerca de 900 Watts, uma hora de uso custa cerca de 0,315 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Ar Condicionado Split?",
          "answer": "O custo mensal situa-se em média nos 13,13 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Ar Condicionado Split?",
          "answer": "A potência média é de cerca de 900 Watts, oscilando entre 630 W e 1350 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Ar Condicionado Split?",
          "answer": "Uma utilização típica de Ar Condicionado Split custa cerca de 1,50 € / Hitzetag."
        },
        {
          "question": "Como reduzir o consumo de um Ar Condicionado Split em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Ar Condicionado Split consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Ar Condicionado Split antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Ar Condicionado Split?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 900 W × 1 h ÷ 1.000 × 0,35 € = 0,315 €."
        },
        {
          "question": "Qual é o programa mais económico para um Ar Condicionado Split?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilador de Pé",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Ventilador de Pé verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Ventilador de Pé?",
          "answer": "Um Ventilador de Pé consome em média cerca de 35 kWh por ano, o que representa um custo anual de aproximadamente 12,25 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Ventilador de Pé?",
          "answer": "Com uma potência média de cerca de 45 Watts, uma hora de uso custa cerca de 0,016 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Ventilador de Pé?",
          "answer": "O custo mensal situa-se em média nos 1,02 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Ventilador de Pé?",
          "answer": "A potência média é de cerca de 45 Watts, oscilando entre 31 W e 68 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Ventilador de Pé?",
          "answer": "Uma utilização típica de Ventilador de Pé custa cerca de 0,13 € / Tag (8h)."
        },
        {
          "question": "Como reduzir o consumo de um Ventilador de Pé em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Ventilador de Pé consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Ventilador de Pé antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Ventilador de Pé?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 45 W × 1 h ÷ 1.000 × 0,35 € = 0,016 €."
        },
        {
          "question": "Qual é o programa mais económico para um Ventilador de Pé?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "heizluefter": {
      "name": "Termoventilador / Radiador Elétrico",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Termoventilador / Radiador Elétrico verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Termoventilador / Radiador Elétrico?",
          "answer": "Um Termoventilador / Radiador Elétrico consome em média cerca de 360 kWh por ano, o que representa um custo anual de aproximadamente 126,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Termoventilador / Radiador Elétrico?",
          "answer": "Com uma potência média de cerca de 2000 Watts, uma hora de uso custa cerca de 0,700 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Termoventilador / Radiador Elétrico?",
          "answer": "O custo mensal situa-se em média nos 10,50 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Termoventilador / Radiador Elétrico?",
          "answer": "A potência média é de cerca de 2000 Watts, oscilando entre 1400 W e 3000 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Termoventilador / Radiador Elétrico?",
          "answer": "Uma utilização típica de Termoventilador / Radiador Elétrico custa cerca de 2,10 € / Tag (3h)."
        },
        {
          "question": "Como reduzir o consumo de um Termoventilador / Radiador Elétrico em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Termoventilador / Radiador Elétrico consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Termoventilador / Radiador Elétrico antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Termoventilador / Radiador Elétrico?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual é o programa mais económico para um Termoventilador / Radiador Elétrico?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Desumidificador de Ar",
      "category": "Climatização e Aquecimento",
      "shortDescription": "Desumidificador de Ar verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Desumidificador de Ar?",
          "answer": "Um Desumidificador de Ar consome em média cerca de 300 kWh por ano, o que representa um custo anual de aproximadamente 105,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Desumidificador de Ar?",
          "answer": "Com uma potência média de cerca de 250 Watts, uma hora de uso custa cerca de 0,087 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Desumidificador de Ar?",
          "answer": "O custo mensal situa-se em média nos 8,75 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Desumidificador de Ar?",
          "answer": "A potência média é de cerca de 250 Watts, oscilando entre 175 W e 375 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Desumidificador de Ar?",
          "answer": "Uma utilização típica de Desumidificador de Ar custa cerca de 0,52 € / Tag (6h)."
        },
        {
          "question": "Como reduzir o consumo de um Desumidificador de Ar em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Desumidificador de Ar consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Desumidificador de Ar antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Desumidificador de Ar?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 250 W × 1 h ÷ 1.000 × 0,35 € = 0,087 €."
        },
        {
          "question": "Qual é o programa mais económico para um Desumidificador de Ar?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "aquarium": {
      "name": "Aquário (100–200 L)",
      "category": "Lazer e Especial",
      "shortDescription": "Aquário (100–200 L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Aquário (100–200 L)?",
          "answer": "Um Aquário (100–200 L) consome em média cerca de 400 kWh por ano, o que representa um custo anual de aproximadamente 140,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Aquário (100–200 L)?",
          "answer": "Com uma potência média de cerca de 120 Watts, uma hora de uso custa cerca de 0,042 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Aquário (100–200 L)?",
          "answer": "O custo mensal situa-se em média nos 11,67 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Aquário (100–200 L)?",
          "answer": "A potência média é de cerca de 120 Watts, oscilando entre 84 W e 180 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Aquário (100–200 L)?",
          "answer": "Uma utilização típica de Aquário (100–200 L) custa cerca de 0,38 € / Tag."
        },
        {
          "question": "Como reduzir o consumo de um Aquário (100–200 L) em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Aquário (100–200 L) consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Aquário (100–200 L) antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Aquário (100–200 L)?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Qual é o programa mais económico para um Aquário (100–200 L)?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "pool": {
      "name": "Bomba de Piscina e Filtro",
      "category": "Lazer e Especial",
      "shortDescription": "Bomba de Piscina e Filtro verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Bomba de Piscina e Filtro?",
          "answer": "Um Bomba de Piscina e Filtro consome em média cerca de 700 kWh por ano, o que representa um custo anual de aproximadamente 245,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Bomba de Piscina e Filtro?",
          "answer": "Com uma potência média de cerca de 600 Watts, uma hora de uso custa cerca de 0,210 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Bomba de Piscina e Filtro?",
          "answer": "O custo mensal situa-se em média nos 20,42 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Bomba de Piscina e Filtro?",
          "answer": "A potência média é de cerca de 600 Watts, oscilando entre 420 W e 900 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Bomba de Piscina e Filtro?",
          "answer": "Uma utilização típica de Bomba de Piscina e Filtro custa cerca de 1,26 € / Tag (6h)."
        },
        {
          "question": "Como reduzir o consumo de um Bomba de Piscina e Filtro em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Bomba de Piscina e Filtro consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Bomba de Piscina e Filtro antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Bomba de Piscina e Filtro?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 600 W × 1 h ÷ 1.000 × 0,35 € = 0,210 €."
        },
        {
          "question": "Qual é o programa mais económico para um Bomba de Piscina e Filtro?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "whirlpool": {
      "name": "Jacuzzi Insuflável / Spa",
      "category": "Lazer e Especial",
      "shortDescription": "Jacuzzi Insuflável / Spa verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Jacuzzi Insuflável / Spa?",
          "answer": "Um Jacuzzi Insuflável / Spa consome em média cerca de 2500 kWh por ano, o que representa um custo anual de aproximadamente 875,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Jacuzzi Insuflável / Spa?",
          "answer": "Com uma potência média de cerca de 2000 Watts, uma hora de uso custa cerca de 0,700 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Jacuzzi Insuflável / Spa?",
          "answer": "O custo mensal situa-se em média nos 72,92 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Jacuzzi Insuflável / Spa?",
          "answer": "A potência média é de cerca de 2000 Watts, oscilando entre 1400 W e 3000 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Jacuzzi Insuflável / Spa?",
          "answer": "Uma utilização típica de Jacuzzi Insuflável / Spa custa cerca de 2,40 € / Tag."
        },
        {
          "question": "Como reduzir o consumo de um Jacuzzi Insuflável / Spa em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Jacuzzi Insuflável / Spa consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Jacuzzi Insuflável / Spa antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Jacuzzi Insuflável / Spa?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual é o programa mais económico para um Jacuzzi Insuflável / Spa?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "3d-drucker": {
      "name": "Impressora 3D (FDM)",
      "category": "Lazer e Especial",
      "shortDescription": "Impressora 3D (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Impressora 3D (FDM)?",
          "answer": "Um Impressora 3D (FDM) consome em média cerca de 120 kWh por ano, o que representa um custo anual de aproximadamente 42,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Impressora 3D (FDM)?",
          "answer": "Com uma potência média de cerca de 150 Watts, uma hora de uso custa cerca de 0,052 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Impressora 3D (FDM)?",
          "answer": "O custo mensal situa-se em média nos 3,50 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Impressora 3D (FDM)?",
          "answer": "A potência média é de cerca de 150 Watts, oscilando entre 105 W e 225 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Impressora 3D (FDM)?",
          "answer": "Uma utilização típica de Impressora 3D (FDM) custa cerca de 0,42 € / Druck (8h)."
        },
        {
          "question": "Como reduzir o consumo de um Impressora 3D (FDM) em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Impressora 3D (FDM) consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Impressora 3D (FDM) antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Impressora 3D (FDM)?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 150 W × 1 h ÷ 1.000 × 0,35 € = 0,052 €."
        },
        {
          "question": "Qual é o programa mais económico para um Impressora 3D (FDM)?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "nas": {
      "name": "Servidor NAS Doméstico (24/7)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Servidor NAS Doméstico (24/7) verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Servidor NAS Doméstico (24/7)?",
          "answer": "Um Servidor NAS Doméstico (24/7) consome em média cerca de 220 kWh por ano, o que representa um custo anual de aproximadamente 77,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Servidor NAS Doméstico (24/7)?",
          "answer": "Com uma potência média de cerca de 30 Watts, uma hora de uso custa cerca de 0,011 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Servidor NAS Doméstico (24/7)?",
          "answer": "O custo mensal situa-se em média nos 6,42 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Servidor NAS Doméstico (24/7)?",
          "answer": "A potência média é de cerca de 30 Watts, oscilando entre 21 W e 45 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Servidor NAS Doméstico (24/7)?",
          "answer": "Uma utilização típica de Servidor NAS Doméstico (24/7) custa cerca de 0,21 € / Tag (24h)."
        },
        {
          "question": "Como reduzir o consumo de um Servidor NAS Doméstico (24/7) em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Servidor NAS Doméstico (24/7) consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Servidor NAS Doméstico (24/7) antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Servidor NAS Doméstico (24/7)?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 30 W × 1 h ÷ 1.000 × 0,35 € = 0,011 €."
        },
        {
          "question": "Qual é o programa mais económico para um Servidor NAS Doméstico (24/7)?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    },
    "server": {
      "name": "Servidor Caseiro / Homelab (24/7)",
      "category": "Entretenimento e Escritório",
      "shortDescription": "Servidor Caseiro / Homelab (24/7) verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Qual é o consumo médio anual de um Servidor Caseiro / Homelab (24/7)?",
          "answer": "Um Servidor Caseiro / Homelab (24/7) consome em média cerca de 500 kWh por ano, o que representa um custo anual de aproximadamente 175,00 € a 0,35 €/kWh."
        },
        {
          "question": "Quanto custa 1 hora de funcionamento de um Servidor Caseiro / Homelab (24/7)?",
          "answer": "Com uma potência média de cerca de 65 Watts, uma hora de uso custa cerca de 0,023 €."
        },
        {
          "question": "Qual é o custo mensal de eletricidade de um Servidor Caseiro / Homelab (24/7)?",
          "answer": "O custo mensal situa-se em média nos 14,58 € por mês com utilização normal."
        },
        {
          "question": "Qual a potência típica em Watts de um Servidor Caseiro / Homelab (24/7)?",
          "answer": "A potência média é de cerca de 65 Watts, oscilando entre 46 W e 98 W consoante a fase de trabalho."
        },
        {
          "question": "Quanto custa uma utilização individual de um Servidor Caseiro / Homelab (24/7)?",
          "answer": "Uma utilização típica de Servidor Caseiro / Homelab (24/7) custa cerca de 0,48 € / Tag (24h)."
        },
        {
          "question": "Como reduzir o consumo de um Servidor Caseiro / Homelab (24/7) em 15–25%?",
          "answer": "Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas."
        },
        {
          "question": "Um Servidor Caseiro / Homelab (24/7) consome energia em modo standby?",
          "answer": "Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais)."
        },
        {
          "question": "Compensa substituir um Servidor Caseiro / Homelab (24/7) antigo por um novo eficiente?",
          "answer": "Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade."
        },
        {
          "question": "Como calcular o consumo exato de um Servidor Caseiro / Homelab (24/7)?",
          "answer": "Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: 65 W × 1 h ÷ 1.000 × 0,35 € = 0,023 €."
        },
        {
          "question": "Qual é o programa mais económico para um Servidor Caseiro / Homelab (24/7)?",
          "answer": "O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho."
        }
      ]
    }
  },
  "ko": {
    "kuehlschrank": {
      "name": "냉장고",
      "category": "주방 가전",
      "shortDescription": "냉장고 verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "냉장고의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 냉장고의 연간 전력 소비량은 약 120 kWh이며, 단가 0.35 €/kWh 기준 연간 약 42,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "냉장고을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 90W 기준 1시간 사용 시 약 0,031 €의 요금이 부과됩니다."
        },
        {
          "question": "냉장고의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 3.50 € 수준입니다."
        },
        {
          "question": "일반적인 냉장고의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 90W이며, 작동 주기 및 부하에 따라 약 63W~135W 범위에서 변동합니다."
        },
        {
          "question": "냉장고 1회 사용당 발생하는 전기요금은?",
          "answer": "냉장고 1회 표준 가동당 비용은 약 0,12 € / Tag입니다."
        },
        {
          "question": "냉장고의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "냉장고은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 냉장고을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "냉장고의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 90W × 1시간 ÷ 1,000 × 0.35€ = 0,031€."
        },
        {
          "question": "냉장고에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "waschmaschine": {
      "name": "세탁기",
      "category": "생활/세탁 가전",
      "shortDescription": "세탁기 verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "세탁기의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 세탁기의 연간 전력 소비량은 약 140 kWh이며, 단가 0.35 €/kWh 기준 연간 약 49,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "세탁기을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 2000W 기준 1시간 사용 시 약 0,700 €의 요금이 부과됩니다."
        },
        {
          "question": "세탁기의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 4.08 € 수준입니다."
        },
        {
          "question": "일반적인 세탁기의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 2000W이며, 작동 주기 및 부하에 따라 약 1400W~3000W 범위에서 변동합니다."
        },
        {
          "question": "세탁기 1회 사용당 발생하는 전기요금은?",
          "answer": "세탁기 1회 표준 가동당 비용은 약 0,25 € / Waschgang입니다."
        },
        {
          "question": "세탁기의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "세탁기은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 세탁기을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "세탁기의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 2000W × 1시간 ÷ 1,000 × 0.35€ = 0,700€."
        },
        {
          "question": "세탁기에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "trockner": {
      "name": "의류건조기",
      "category": "생활/세탁 가전",
      "shortDescription": "의류건조기 verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "의류건조기의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 의류건조기의 연간 전력 소비량은 약 180 kWh이며, 단가 0.35 €/kWh 기준 연간 약 63,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "의류건조기을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 1500W 기준 1시간 사용 시 약 0,525 €의 요금이 부과됩니다."
        },
        {
          "question": "의류건조기의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 5.25 € 수준입니다."
        },
        {
          "question": "일반적인 의류건조기의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 1500W이며, 작동 주기 및 부하에 따라 약 1050W~2250W 범위에서 변동합니다."
        },
        {
          "question": "의류건조기 1회 사용당 발생하는 전기요금은?",
          "answer": "의류건조기 1회 표준 가동당 비용은 약 0,45 € / Ladung입니다."
        },
        {
          "question": "의류건조기의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "의류건조기은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 의류건조기을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "의류건조기의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 1500W × 1시간 ÷ 1,000 × 0.35€ = 0,525€."
        },
        {
          "question": "의류건조기에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "geschirrspueler": {
      "name": "식기세척기",
      "category": "주방 가전",
      "shortDescription": "식기세척기 verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "식기세척기의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 식기세척기의 연간 전력 소비량은 약 160 kWh이며, 단가 0.35 €/kWh 기준 연간 약 56,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "식기세척기을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 1800W 기준 1시간 사용 시 약 0,630 €의 요금이 부과됩니다."
        },
        {
          "question": "식기세척기의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 4.67 € 수준입니다."
        },
        {
          "question": "일반적인 식기세척기의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 1800W이며, 작동 주기 및 부하에 따라 약 1260W~2700W 범위에서 변동합니다."
        },
        {
          "question": "식기세척기 1회 사용당 발생하는 전기요금은?",
          "answer": "식기세척기 1회 표준 가동당 비용은 약 0,28 € / Spülgang입니다."
        },
        {
          "question": "식기세척기의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "식기세척기은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 식기세척기을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "식기세척기의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 1800W × 1시간 ÷ 1,000 × 0.35€ = 0,630€."
        },
        {
          "question": "식기세척기에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "backofen": {
      "name": "전기오븐",
      "category": "주방 가전",
      "shortDescription": "전기오븐 verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "전기오븐의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 전기오븐의 연간 전력 소비량은 약 150 kWh이며, 단가 0.35 €/kWh 기준 연간 약 52,50 €의 전기요금이 발생합니다."
        },
        {
          "question": "전기오븐을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 2500W 기준 1시간 사용 시 약 0,875 €의 요금이 부과됩니다."
        },
        {
          "question": "전기오븐의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 4.38 € 수준입니다."
        },
        {
          "question": "일반적인 전기오븐의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 2500W이며, 작동 주기 및 부하에 따라 약 1750W~3750W 범위에서 변동합니다."
        },
        {
          "question": "전기오븐 1회 사용당 발생하는 전기요금은?",
          "answer": "전기오븐 1회 표준 가동당 비용은 약 0,55 € / Nutzung입니다."
        },
        {
          "question": "전기오븐의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "전기오븐은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 전기오븐을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "전기오븐의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 2500W × 1시간 ÷ 1,000 × 0.35€ = 0,875€."
        },
        {
          "question": "전기오븐에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "herd": {
      "name": "전기레인지 및 인덕션",
      "category": "주방 가전",
      "shortDescription": "전기레인지 및 인덕션 verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "전기레인지 및 인덕션의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 전기레인지 및 인덕션의 연간 전력 소비량은 약 220 kWh이며, 단가 0.35 €/kWh 기준 연간 약 77,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "전기레인지 및 인덕션을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 2000W 기준 1시간 사용 시 약 0,700 €의 요금이 부과됩니다."
        },
        {
          "question": "전기레인지 및 인덕션의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 6.42 € 수준입니다."
        },
        {
          "question": "일반적인 전기레인지 및 인덕션의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 2000W이며, 작동 주기 및 부하에 따라 약 1400W~3000W 범위에서 변동합니다."
        },
        {
          "question": "전기레인지 및 인덕션 1회 사용당 발생하는 전기요금은?",
          "answer": "전기레인지 및 인덕션 1회 표준 가동당 비용은 약 0,35 € / Kochen입니다."
        },
        {
          "question": "전기레인지 및 인덕션의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "전기레인지 및 인덕션은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 전기레인지 및 인덕션을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "전기레인지 및 인덕션의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 2000W × 1시간 ÷ 1,000 × 0.35€ = 0,700€."
        },
        {
          "question": "전기레인지 및 인덕션에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "wasserkocher": {
      "name": "전기주전자",
      "category": "주방 가전",
      "shortDescription": "전기주전자 verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "전기주전자의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 전기주전자의 연간 전력 소비량은 약 80 kWh이며, 단가 0.35 €/kWh 기준 연간 약 28,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "전기주전자을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 2200W 기준 1시간 사용 시 약 0,770 €의 요금이 부과됩니다."
        },
        {
          "question": "전기주전자의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 2.33 € 수준입니다."
        },
        {
          "question": "일반적인 전기주전자의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 2200W이며, 작동 주기 및 부하에 따라 약 1540W~3300W 범위에서 변동합니다."
        },
        {
          "question": "전기주전자 1회 사용당 발생하는 전기요금은?",
          "answer": "전기주전자 1회 표준 가동당 비용은 약 0,03 € / Kochen입니다."
        },
        {
          "question": "전기주전자의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "전기주전자은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 전기주전자을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "전기주전자의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 2200W × 1시간 ÷ 1,000 × 0.35€ = 0,770€."
        },
        {
          "question": "전기주전자에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "전자동 커피머신",
      "category": "주방 가전",
      "shortDescription": "전자동 커피머신 verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "전자동 커피머신의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 전자동 커피머신의 연간 전력 소비량은 약 110 kWh이며, 단가 0.35 €/kWh 기준 연간 약 38,50 €의 전기요금이 발생합니다."
        },
        {
          "question": "전자동 커피머신을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 1450W 기준 1시간 사용 시 약 0,507 €의 요금이 부과됩니다."
        },
        {
          "question": "전자동 커피머신의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 3.21 € 수준입니다."
        },
        {
          "question": "일반적인 전자동 커피머신의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 1450W이며, 작동 주기 및 부하에 따라 약 1015W~2175W 범위에서 변동합니다."
        },
        {
          "question": "전자동 커피머신 1회 사용당 발생하는 전기요금은?",
          "answer": "전자동 커피머신 1회 표준 가동당 비용은 약 0,04 € / Tasse입니다."
        },
        {
          "question": "전자동 커피머신의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "전자동 커피머신은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 전자동 커피머신을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "전자동 커피머신의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 1450W × 1시간 ÷ 1,000 × 0.35€ = 0,507€."
        },
        {
          "question": "전자동 커피머신에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "fernseher": {
      "name": "스마트 TV (55~65인치)",
      "category": "엔터테인먼트/사무",
      "shortDescription": "스마트 TV (55~65인치) verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "스마트 TV (55~65인치)의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 스마트 TV (55~65인치)의 연간 전력 소비량은 약 175 kWh이며, 단가 0.35 €/kWh 기준 연간 약 61,25 €의 전기요금이 발생합니다."
        },
        {
          "question": "스마트 TV (55~65인치)을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 120W 기준 1시간 사용 시 약 0,042 €의 요금이 부과됩니다."
        },
        {
          "question": "스마트 TV (55~65인치)의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 5.10 € 수준입니다."
        },
        {
          "question": "일반적인 스마트 TV (55~65인치)의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 120W이며, 작동 주기 및 부하에 따라 약 84W~180W 범위에서 변동합니다."
        },
        {
          "question": "스마트 TV (55~65인치) 1회 사용당 발생하는 전기요금은?",
          "answer": "스마트 TV (55~65인치) 1회 표준 가동당 비용은 약 0,17 € / Tag (4h)입니다."
        },
        {
          "question": "스마트 TV (55~65인치)의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "스마트 TV (55~65인치)은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 스마트 TV (55~65인치)을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "스마트 TV (55~65인치)의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 120W × 1시간 ÷ 1,000 × 0.35€ = 0,042€."
        },
        {
          "question": "스마트 TV (55~65인치)에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "gaming-pc": {
      "name": "고사양 게이밍 PC",
      "category": "엔터테인먼트/사무",
      "shortDescription": "고사양 게이밍 PC verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "고사양 게이밍 PC의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 고사양 게이밍 PC의 연간 전력 소비량은 약 490 kWh이며, 단가 0.35 €/kWh 기준 연간 약 171,50 €의 전기요금이 발생합니다."
        },
        {
          "question": "고사양 게이밍 PC을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 450W 기준 1시간 사용 시 약 0,158 €의 요금이 부과됩니다."
        },
        {
          "question": "고사양 게이밍 PC의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 14.29 € 수준입니다."
        },
        {
          "question": "일반적인 고사양 게이밍 PC의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 450W이며, 작동 주기 및 부하에 따라 약 315W~675W 범위에서 변동합니다."
        },
        {
          "question": "고사양 게이밍 PC 1회 사용당 발생하는 전기요금은?",
          "answer": "고사양 게이밍 PC 1회 표준 가동당 비용은 약 0,47 € / Session (3h)입니다."
        },
        {
          "question": "고사양 게이밍 PC의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "고사양 게이밍 PC은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 고사양 게이밍 PC을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "고사양 게이밍 PC의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 450W × 1시간 ÷ 1,000 × 0.35€ = 0,158€."
        },
        {
          "question": "고사양 게이밍 PC에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "pc": {
      "name": "사무용 데스크톱 PC",
      "category": "엔터테인먼트/사무",
      "shortDescription": "사무용 데스크톱 PC verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "사무용 데스크톱 PC의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 사무용 데스크톱 PC의 연간 전력 소비량은 약 200 kWh이며, 단가 0.35 €/kWh 기준 연간 약 70,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "사무용 데스크톱 PC을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 120W 기준 1시간 사용 시 약 0,042 €의 요금이 부과됩니다."
        },
        {
          "question": "사무용 데스크톱 PC의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 5.83 € 수준입니다."
        },
        {
          "question": "일반적인 사무용 데스크톱 PC의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 120W이며, 작동 주기 및 부하에 따라 약 84W~180W 범위에서 변동합니다."
        },
        {
          "question": "사무용 데스크톱 PC 1회 사용당 발생하는 전기요금은?",
          "answer": "사무용 데스크톱 PC 1회 표준 가동당 비용은 약 0,34 € / Arbeitstag (8h)입니다."
        },
        {
          "question": "사무용 데스크톱 PC의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "사무용 데스크톱 PC은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 사무용 데스크톱 PC을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "사무용 데스크톱 PC의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 120W × 1시간 ÷ 1,000 × 0.35€ = 0,042€."
        },
        {
          "question": "사무용 데스크톱 PC에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "laptop": {
      "name": "노트북 컴퓨터",
      "category": "엔터테인먼트/사무",
      "shortDescription": "노트북 컴퓨터 verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "노트북 컴퓨터의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 노트북 컴퓨터의 연간 전력 소비량은 약 80 kWh이며, 단가 0.35 €/kWh 기준 연간 약 28,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "노트북 컴퓨터을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 50W 기준 1시간 사용 시 약 0,018 €의 요금이 부과됩니다."
        },
        {
          "question": "노트북 컴퓨터의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 2.33 € 수준입니다."
        },
        {
          "question": "일반적인 노트북 컴퓨터의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 50W이며, 작동 주기 및 부하에 따라 약 35W~75W 범위에서 변동합니다."
        },
        {
          "question": "노트북 컴퓨터 1회 사용당 발생하는 전기요금은?",
          "answer": "노트북 컴퓨터 1회 표준 가동당 비용은 약 0,14 € / Arbeitstag (8h)입니다."
        },
        {
          "question": "노트북 컴퓨터의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "노트북 컴퓨터은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 노트북 컴퓨터을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "노트북 컴퓨터의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 50W × 1시간 ÷ 1,000 × 0.35€ = 0,018€."
        },
        {
          "question": "노트북 컴퓨터에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "monitor": {
      "name": "PC 모니터 (27~32인치)",
      "category": "엔터테인먼트/사무",
      "shortDescription": "PC 모니터 (27~32인치) verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "PC 모니터 (27~32인치)의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 PC 모니터 (27~32인치)의 연간 전력 소비량은 약 60 kWh이며, 단가 0.35 €/kWh 기준 연간 약 21,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "PC 모니터 (27~32인치)을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 35W 기준 1시간 사용 시 약 0,012 €의 요금이 부과됩니다."
        },
        {
          "question": "PC 모니터 (27~32인치)의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 1.75 € 수준입니다."
        },
        {
          "question": "일반적인 PC 모니터 (27~32인치)의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 35W이며, 작동 주기 및 부하에 따라 약 25W~53W 범위에서 변동합니다."
        },
        {
          "question": "PC 모니터 (27~32인치) 1회 사용당 발생하는 전기요금은?",
          "answer": "PC 모니터 (27~32인치) 1회 표준 가동당 비용은 약 0,10 € / Tag입니다."
        },
        {
          "question": "PC 모니터 (27~32인치)의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "PC 모니터 (27~32인치)은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 PC 모니터 (27~32인치)을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "PC 모니터 (27~32인치)의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 35W × 1시간 ÷ 1,000 × 0.35€ = 0,012€."
        },
        {
          "question": "PC 모니터 (27~32인치)에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "ps5": {
      "name": "플레이스테이션 5 (PS5)",
      "category": "엔터테인먼트/사무",
      "shortDescription": "플레이스테이션 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "플레이스테이션 5 (PS5)의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 플레이스테이션 5 (PS5)의 연간 전력 소비량은 약 150 kWh이며, 단가 0.35 €/kWh 기준 연간 약 52,50 €의 전기요금이 발생합니다."
        },
        {
          "question": "플레이스테이션 5 (PS5)을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 200W 기준 1시간 사용 시 약 0,070 €의 요금이 부과됩니다."
        },
        {
          "question": "플레이스테이션 5 (PS5)의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 4.38 € 수준입니다."
        },
        {
          "question": "일반적인 플레이스테이션 5 (PS5)의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 200W이며, 작동 주기 및 부하에 따라 약 140W~300W 범위에서 변동합니다."
        },
        {
          "question": "플레이스테이션 5 (PS5) 1회 사용당 발생하는 전기요금은?",
          "answer": "플레이스테이션 5 (PS5) 1회 표준 가동당 비용은 약 0,14 € / Gaming (2h)입니다."
        },
        {
          "question": "플레이스테이션 5 (PS5)의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "플레이스테이션 5 (PS5)은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 플레이스테이션 5 (PS5)을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "플레이스테이션 5 (PS5)의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 200W × 1시간 ÷ 1,000 × 0.35€ = 0,070€."
        },
        {
          "question": "플레이스테이션 5 (PS5)에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "xbox": {
      "name": "엑스박스 시리즈 X",
      "category": "엔터테인먼트/사무",
      "shortDescription": "엑스박스 시리즈 X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "엑스박스 시리즈 X의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 엑스박스 시리즈 X의 연간 전력 소비량은 약 140 kWh이며, 단가 0.35 €/kWh 기준 연간 약 49,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "엑스박스 시리즈 X을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 180W 기준 1시간 사용 시 약 0,063 €의 요금이 부과됩니다."
        },
        {
          "question": "엑스박스 시리즈 X의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 4.08 € 수준입니다."
        },
        {
          "question": "일반적인 엑스박스 시리즈 X의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 180W이며, 작동 주기 및 부하에 따라 약 126W~270W 범위에서 변동합니다."
        },
        {
          "question": "엑스박스 시리즈 X 1회 사용당 발생하는 전기요금은?",
          "answer": "엑스박스 시리즈 X 1회 표준 가동당 비용은 약 0,13 € / Gaming (2h)입니다."
        },
        {
          "question": "엑스박스 시리즈 X의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "엑스박스 시리즈 X은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 엑스박스 시리즈 X을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "엑스박스 시리즈 X의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 180W × 1시간 ÷ 1,000 × 0.35€ = 0,063€."
        },
        {
          "question": "엑스박스 시리즈 X에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "klimaanlage": {
      "name": "스탠드/벽걸이 에어컨",
      "category": "냉난방/계절 가전",
      "shortDescription": "스탠드/벽걸이 에어컨 verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "스탠드/벽걸이 에어컨의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 스탠드/벽걸이 에어컨의 연간 전력 소비량은 약 450 kWh이며, 단가 0.35 €/kWh 기준 연간 약 157,50 €의 전기요금이 발생합니다."
        },
        {
          "question": "스탠드/벽걸이 에어컨을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 900W 기준 1시간 사용 시 약 0,315 €의 요금이 부과됩니다."
        },
        {
          "question": "스탠드/벽걸이 에어컨의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 13.13 € 수준입니다."
        },
        {
          "question": "일반적인 스탠드/벽걸이 에어컨의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 900W이며, 작동 주기 및 부하에 따라 약 630W~1350W 범위에서 변동합니다."
        },
        {
          "question": "스탠드/벽걸이 에어컨 1회 사용당 발생하는 전기요금은?",
          "answer": "스탠드/벽걸이 에어컨 1회 표준 가동당 비용은 약 1,50 € / Hitzetag입니다."
        },
        {
          "question": "스탠드/벽걸이 에어컨의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "스탠드/벽걸이 에어컨은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 스탠드/벽걸이 에어컨을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "스탠드/벽걸이 에어컨의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 900W × 1시간 ÷ 1,000 × 0.35€ = 0,315€."
        },
        {
          "question": "스탠드/벽걸이 에어컨에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "ventilator": {
      "name": "스탠드 선풍기/서큘레이터",
      "category": "냉난방/계절 가전",
      "shortDescription": "스탠드 선풍기/서큘레이터 verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "스탠드 선풍기/서큘레이터의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 스탠드 선풍기/서큘레이터의 연간 전력 소비량은 약 35 kWh이며, 단가 0.35 €/kWh 기준 연간 약 12,25 €의 전기요금이 발생합니다."
        },
        {
          "question": "스탠드 선풍기/서큘레이터을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 45W 기준 1시간 사용 시 약 0,016 €의 요금이 부과됩니다."
        },
        {
          "question": "스탠드 선풍기/서큘레이터의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 1.02 € 수준입니다."
        },
        {
          "question": "일반적인 스탠드 선풍기/서큘레이터의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 45W이며, 작동 주기 및 부하에 따라 약 31W~68W 범위에서 변동합니다."
        },
        {
          "question": "스탠드 선풍기/서큘레이터 1회 사용당 발생하는 전기요금은?",
          "answer": "스탠드 선풍기/서큘레이터 1회 표준 가동당 비용은 약 0,13 € / Tag (8h)입니다."
        },
        {
          "question": "스탠드 선풍기/서큘레이터의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "스탠드 선풍기/서큘레이터은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 스탠드 선풍기/서큘레이터을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "스탠드 선풍기/서큘레이터의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 45W × 1시간 ÷ 1,000 × 0.35€ = 0,016€."
        },
        {
          "question": "스탠드 선풍기/서큘레이터에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "heizluefter": {
      "name": "전기 온풍기 및 히터",
      "category": "냉난방/계절 가전",
      "shortDescription": "전기 온풍기 및 히터 verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "전기 온풍기 및 히터의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 전기 온풍기 및 히터의 연간 전력 소비량은 약 360 kWh이며, 단가 0.35 €/kWh 기준 연간 약 126,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "전기 온풍기 및 히터을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 2000W 기준 1시간 사용 시 약 0,700 €의 요금이 부과됩니다."
        },
        {
          "question": "전기 온풍기 및 히터의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 10.50 € 수준입니다."
        },
        {
          "question": "일반적인 전기 온풍기 및 히터의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 2000W이며, 작동 주기 및 부하에 따라 약 1400W~3000W 범위에서 변동합니다."
        },
        {
          "question": "전기 온풍기 및 히터 1회 사용당 발생하는 전기요금은?",
          "answer": "전기 온풍기 및 히터 1회 표준 가동당 비용은 약 2,10 € / Tag (3h)입니다."
        },
        {
          "question": "전기 온풍기 및 히터의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "전기 온풍기 및 히터은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 전기 온풍기 및 히터을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "전기 온풍기 및 히터의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 2000W × 1시간 ÷ 1,000 × 0.35€ = 0,700€."
        },
        {
          "question": "전기 온풍기 및 히터에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "제습기",
      "category": "냉난방/계절 가전",
      "shortDescription": "제습기 verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "제습기의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 제습기의 연간 전력 소비량은 약 300 kWh이며, 단가 0.35 €/kWh 기준 연간 약 105,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "제습기을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 250W 기준 1시간 사용 시 약 0,087 €의 요금이 부과됩니다."
        },
        {
          "question": "제습기의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 8.75 € 수준입니다."
        },
        {
          "question": "일반적인 제습기의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 250W이며, 작동 주기 및 부하에 따라 약 175W~375W 범위에서 변동합니다."
        },
        {
          "question": "제습기 1회 사용당 발생하는 전기요금은?",
          "answer": "제습기 1회 표준 가동당 비용은 약 0,52 € / Tag (6h)입니다."
        },
        {
          "question": "제습기의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "제습기은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 제습기을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "제습기의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 250W × 1시간 ÷ 1,000 × 0.35€ = 0,087€."
        },
        {
          "question": "제습기에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "aquarium": {
      "name": "어항 및 수족관 (100~200L)",
      "category": "취미/특수 기기",
      "shortDescription": "어항 및 수족관 (100~200L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "어항 및 수족관 (100~200L)의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 어항 및 수족관 (100~200L)의 연간 전력 소비량은 약 400 kWh이며, 단가 0.35 €/kWh 기준 연간 약 140,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "어항 및 수족관 (100~200L)을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 120W 기준 1시간 사용 시 약 0,042 €의 요금이 부과됩니다."
        },
        {
          "question": "어항 및 수족관 (100~200L)의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 11.67 € 수준입니다."
        },
        {
          "question": "일반적인 어항 및 수족관 (100~200L)의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 120W이며, 작동 주기 및 부하에 따라 약 84W~180W 범위에서 변동합니다."
        },
        {
          "question": "어항 및 수족관 (100~200L) 1회 사용당 발생하는 전기요금은?",
          "answer": "어항 및 수족관 (100~200L) 1회 표준 가동당 비용은 약 0,38 € / Tag입니다."
        },
        {
          "question": "어항 및 수족관 (100~200L)의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "어항 및 수족관 (100~200L)은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 어항 및 수족관 (100~200L)을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "어항 및 수족관 (100~200L)의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 120W × 1시간 ÷ 1,000 × 0.35€ = 0,042€."
        },
        {
          "question": "어항 및 수족관 (100~200L)에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "pool": {
      "name": "수영장 펌프 및 여과기",
      "category": "취미/특수 기기",
      "shortDescription": "수영장 펌프 및 여과기 verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "수영장 펌프 및 여과기의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 수영장 펌프 및 여과기의 연간 전력 소비량은 약 700 kWh이며, 단가 0.35 €/kWh 기준 연간 약 245,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "수영장 펌프 및 여과기을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 600W 기준 1시간 사용 시 약 0,210 €의 요금이 부과됩니다."
        },
        {
          "question": "수영장 펌프 및 여과기의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 20.42 € 수준입니다."
        },
        {
          "question": "일반적인 수영장 펌프 및 여과기의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 600W이며, 작동 주기 및 부하에 따라 약 420W~900W 범위에서 변동합니다."
        },
        {
          "question": "수영장 펌프 및 여과기 1회 사용당 발생하는 전기요금은?",
          "answer": "수영장 펌프 및 여과기 1회 표준 가동당 비용은 약 1,26 € / Tag (6h)입니다."
        },
        {
          "question": "수영장 펌프 및 여과기의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "수영장 펌프 및 여과기은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 수영장 펌프 및 여과기을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "수영장 펌프 및 여과기의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 600W × 1시간 ÷ 1,000 × 0.35€ = 0,210€."
        },
        {
          "question": "수영장 펌프 및 여과기에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "whirlpool": {
      "name": "스파 및 온수 자쿠지",
      "category": "취미/특수 기기",
      "shortDescription": "스파 및 온수 자쿠지 verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "스파 및 온수 자쿠지의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 스파 및 온수 자쿠지의 연간 전력 소비량은 약 2500 kWh이며, 단가 0.35 €/kWh 기준 연간 약 875,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "스파 및 온수 자쿠지을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 2000W 기준 1시간 사용 시 약 0,700 €의 요금이 부과됩니다."
        },
        {
          "question": "스파 및 온수 자쿠지의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 72.92 € 수준입니다."
        },
        {
          "question": "일반적인 스파 및 온수 자쿠지의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 2000W이며, 작동 주기 및 부하에 따라 약 1400W~3000W 범위에서 변동합니다."
        },
        {
          "question": "스파 및 온수 자쿠지 1회 사용당 발생하는 전기요금은?",
          "answer": "스파 및 온수 자쿠지 1회 표준 가동당 비용은 약 2,40 € / Tag입니다."
        },
        {
          "question": "스파 및 온수 자쿠지의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "스파 및 온수 자쿠지은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 스파 및 온수 자쿠지을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "스파 및 온수 자쿠지의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 2000W × 1시간 ÷ 1,000 × 0.35€ = 0,700€."
        },
        {
          "question": "스파 및 온수 자쿠지에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "3d-drucker": {
      "name": "3D 프린터 (FDM)",
      "category": "취미/특수 기기",
      "shortDescription": "3D 프린터 (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "3D 프린터 (FDM)의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 3D 프린터 (FDM)의 연간 전력 소비량은 약 120 kWh이며, 단가 0.35 €/kWh 기준 연간 약 42,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "3D 프린터 (FDM)을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 150W 기준 1시간 사용 시 약 0,052 €의 요금이 부과됩니다."
        },
        {
          "question": "3D 프린터 (FDM)의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 3.50 € 수준입니다."
        },
        {
          "question": "일반적인 3D 프린터 (FDM)의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 150W이며, 작동 주기 및 부하에 따라 약 105W~225W 범위에서 변동합니다."
        },
        {
          "question": "3D 프린터 (FDM) 1회 사용당 발생하는 전기요금은?",
          "answer": "3D 프린터 (FDM) 1회 표준 가동당 비용은 약 0,42 € / Druck (8h)입니다."
        },
        {
          "question": "3D 프린터 (FDM)의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "3D 프린터 (FDM)은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 3D 프린터 (FDM)을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "3D 프린터 (FDM)의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 150W × 1시간 ÷ 1,000 × 0.35€ = 0,052€."
        },
        {
          "question": "3D 프린터 (FDM)에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "nas": {
      "name": "가정용 NAS 스토리지 서버",
      "category": "엔터테인먼트/사무",
      "shortDescription": "가정용 NAS 스토리지 서버 verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "가정용 NAS 스토리지 서버의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 가정용 NAS 스토리지 서버의 연간 전력 소비량은 약 220 kWh이며, 단가 0.35 €/kWh 기준 연간 약 77,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "가정용 NAS 스토리지 서버을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 30W 기준 1시간 사용 시 약 0,011 €의 요금이 부과됩니다."
        },
        {
          "question": "가정용 NAS 스토리지 서버의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 6.42 € 수준입니다."
        },
        {
          "question": "일반적인 가정용 NAS 스토리지 서버의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 30W이며, 작동 주기 및 부하에 따라 약 21W~45W 범위에서 변동합니다."
        },
        {
          "question": "가정용 NAS 스토리지 서버 1회 사용당 발생하는 전기요금은?",
          "answer": "가정용 NAS 스토리지 서버 1회 표준 가동당 비용은 약 0,21 € / Tag (24h)입니다."
        },
        {
          "question": "가정용 NAS 스토리지 서버의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "가정용 NAS 스토리지 서버은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 가정용 NAS 스토리지 서버을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "가정용 NAS 스토리지 서버의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 30W × 1시간 ÷ 1,000 × 0.35€ = 0,011€."
        },
        {
          "question": "가정용 NAS 스토리지 서버에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    },
    "server": {
      "name": "홈 서버 및 홈랩 (24시간 상시 가동)",
      "category": "엔터테인먼트/사무",
      "shortDescription": "홈 서버 및 홈랩 (24시간 상시 가동) verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)의 연간 평균 전기 소비량과 연간 전기요금은?",
          "answer": "표준 홈 서버 및 홈랩 (24시간 상시 가동)의 연간 전력 소비량은 약 500 kWh이며, 단가 0.35 €/kWh 기준 연간 약 175,00 €의 전기요금이 발생합니다."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)을 1시간 가동했을 때 전기세는 얼마인가요?",
          "answer": "평균 소비전력 65W 기준 1시간 사용 시 약 0,023 €의 요금이 부과됩니다."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)의 월평균 전기요금은 어느 정도인가요?",
          "answer": "일반적인 가정 사용 환경에서 월평균 약 14.58 € 수준입니다."
        },
        {
          "question": "일반적인 홈 서버 및 홈랩 (24시간 상시 가동)의 정격 소비전력(W)은 몇 와트인가요?",
          "answer": "평균 정격 소비전력은 약 65W이며, 작동 주기 및 부하에 따라 약 46W~98W 범위에서 변동합니다."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동) 1회 사용당 발생하는 전기요금은?",
          "answer": "홈 서버 및 홈랩 (24시간 상시 가동) 1회 표준 가동당 비용은 약 0,48 € / Tag (24h)입니다."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)의 전기요금을 15~25% 즉시 절약하는 방법은?",
          "answer": "에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)은 대기전력(스탠바이)을 소비하나요?",
          "answer": "네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다."
        },
        {
          "question": "10년 이상 된 노후 홈 서버 및 홈랩 (24시간 상시 가동)을 신형으로 교체하면 경제적인가요?",
          "answer": "10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)의 전기요금을 직접 계산하는 공식은?",
          "answer": "계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: 65W × 1시간 ÷ 1,000 × 0.35€ = 0,023€."
        },
        {
          "question": "홈 서버 및 홈랩 (24시간 상시 가동)에서 가장 전기세가 적게 나오는 최적의 모드는?",
          "answer": "제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다."
        }
      ]
    }
  },
  "it": {
    "kuehlschrank": {
      "name": "Frigorifero",
      "category": "Cucina",
      "shortDescription": "Frigorifero verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Frigorifero in media all'anno?",
          "answer": "Un Frigorifero moderno consuma mediamente circa 120 kWh all'anno, pari a una spesa elettrica di circa 42,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Frigorifero?",
          "answer": "Con una potenza media di circa 90 Watt, un'ora di funzionamento costa circa 0,031 €."
        },
        {
          "question": "Qual è la spesa mensile per un Frigorifero in bolletta?",
          "answer": "La spesa media mensile è di circa 3,50 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Frigorifero?",
          "answer": "La potenza nominale media è di circa 90 Watt, oscillando tra 63 W e 135 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Frigorifero?",
          "answer": "Un utilizzo tipico di Frigorifero comporta una spesa di circa 0,12 € / Tag."
        },
        {
          "question": "Come ridurre i consumi di un Frigorifero del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Frigorifero consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Frigorifero vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Frigorifero?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 90 W × 1 h ÷ 1.000 × 0,35 € = 0,031 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Frigorifero?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "waschmaschine": {
      "name": "Lavatrice",
      "category": "Casa e Pulizia",
      "shortDescription": "Lavatrice verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Lavatrice in media all'anno?",
          "answer": "Un Lavatrice moderno consuma mediamente circa 140 kWh all'anno, pari a una spesa elettrica di circa 49,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Lavatrice?",
          "answer": "Con una potenza media di circa 2000 Watt, un'ora di funzionamento costa circa 0,700 €."
        },
        {
          "question": "Qual è la spesa mensile per un Lavatrice in bolletta?",
          "answer": "La spesa media mensile è di circa 4,08 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Lavatrice?",
          "answer": "La potenza nominale media è di circa 2000 Watt, oscillando tra 1400 W e 3000 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Lavatrice?",
          "answer": "Un utilizzo tipico di Lavatrice comporta una spesa di circa 0,25 € / Waschgang."
        },
        {
          "question": "Come ridurre i consumi di un Lavatrice del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Lavatrice consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Lavatrice vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Lavatrice?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Lavatrice?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "trockner": {
      "name": "Asciugatrice",
      "category": "Casa e Pulizia",
      "shortDescription": "Asciugatrice verbraucht im Schnitt ca. 180 kWh pro Jahr (63,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Asciugatrice in media all'anno?",
          "answer": "Un Asciugatrice moderno consuma mediamente circa 180 kWh all'anno, pari a una spesa elettrica di circa 63,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Asciugatrice?",
          "answer": "Con una potenza media di circa 1500 Watt, un'ora di funzionamento costa circa 0,525 €."
        },
        {
          "question": "Qual è la spesa mensile per un Asciugatrice in bolletta?",
          "answer": "La spesa media mensile è di circa 5,25 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Asciugatrice?",
          "answer": "La potenza nominale media è di circa 1500 Watt, oscillando tra 1050 W e 2250 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Asciugatrice?",
          "answer": "Un utilizzo tipico di Asciugatrice comporta una spesa di circa 0,45 € / Ladung."
        },
        {
          "question": "Come ridurre i consumi di un Asciugatrice del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Asciugatrice consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Asciugatrice vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Asciugatrice?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 1500 W × 1 h ÷ 1.000 × 0,35 € = 0,525 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Asciugatrice?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "geschirrspueler": {
      "name": "Lavastoviglie",
      "category": "Cucina",
      "shortDescription": "Lavastoviglie verbraucht im Schnitt ca. 160 kWh pro Jahr (56,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Lavastoviglie in media all'anno?",
          "answer": "Un Lavastoviglie moderno consuma mediamente circa 160 kWh all'anno, pari a una spesa elettrica di circa 56,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Lavastoviglie?",
          "answer": "Con una potenza media di circa 1800 Watt, un'ora di funzionamento costa circa 0,630 €."
        },
        {
          "question": "Qual è la spesa mensile per un Lavastoviglie in bolletta?",
          "answer": "La spesa media mensile è di circa 4,67 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Lavastoviglie?",
          "answer": "La potenza nominale media è di circa 1800 Watt, oscillando tra 1260 W e 2700 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Lavastoviglie?",
          "answer": "Un utilizzo tipico di Lavastoviglie comporta una spesa di circa 0,28 € / Spülgang."
        },
        {
          "question": "Come ridurre i consumi di un Lavastoviglie del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Lavastoviglie consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Lavastoviglie vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Lavastoviglie?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 1800 W × 1 h ÷ 1.000 × 0,35 € = 0,630 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Lavastoviglie?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "backofen": {
      "name": "Forno Elettrico",
      "category": "Cucina",
      "shortDescription": "Forno Elettrico verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Forno Elettrico in media all'anno?",
          "answer": "Un Forno Elettrico moderno consuma mediamente circa 150 kWh all'anno, pari a una spesa elettrica di circa 52,50 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Forno Elettrico?",
          "answer": "Con una potenza media di circa 2500 Watt, un'ora di funzionamento costa circa 0,875 €."
        },
        {
          "question": "Qual è la spesa mensile per un Forno Elettrico in bolletta?",
          "answer": "La spesa media mensile è di circa 4,38 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Forno Elettrico?",
          "answer": "La potenza nominale media è di circa 2500 Watt, oscillando tra 1750 W e 3750 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Forno Elettrico?",
          "answer": "Un utilizzo tipico di Forno Elettrico comporta una spesa di circa 0,55 € / Nutzung."
        },
        {
          "question": "Come ridurre i consumi di un Forno Elettrico del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Forno Elettrico consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Forno Elettrico vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Forno Elettrico?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 2500 W × 1 h ÷ 1.000 × 0,35 € = 0,875 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Forno Elettrico?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "herd": {
      "name": "Piano Cottura a Induzione",
      "category": "Cucina",
      "shortDescription": "Piano Cottura a Induzione verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Piano Cottura a Induzione in media all'anno?",
          "answer": "Un Piano Cottura a Induzione moderno consuma mediamente circa 220 kWh all'anno, pari a una spesa elettrica di circa 77,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Piano Cottura a Induzione?",
          "answer": "Con una potenza media di circa 2000 Watt, un'ora di funzionamento costa circa 0,700 €."
        },
        {
          "question": "Qual è la spesa mensile per un Piano Cottura a Induzione in bolletta?",
          "answer": "La spesa media mensile è di circa 6,42 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Piano Cottura a Induzione?",
          "answer": "La potenza nominale media è di circa 2000 Watt, oscillando tra 1400 W e 3000 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Piano Cottura a Induzione?",
          "answer": "Un utilizzo tipico di Piano Cottura a Induzione comporta una spesa di circa 0,35 € / Kochen."
        },
        {
          "question": "Come ridurre i consumi di un Piano Cottura a Induzione del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Piano Cottura a Induzione consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Piano Cottura a Induzione vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Piano Cottura a Induzione?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Piano Cottura a Induzione?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "wasserkocher": {
      "name": "Bollitore Elettrico",
      "category": "Cucina",
      "shortDescription": "Bollitore Elettrico verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Bollitore Elettrico in media all'anno?",
          "answer": "Un Bollitore Elettrico moderno consuma mediamente circa 80 kWh all'anno, pari a una spesa elettrica di circa 28,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Bollitore Elettrico?",
          "answer": "Con una potenza media di circa 2200 Watt, un'ora di funzionamento costa circa 0,770 €."
        },
        {
          "question": "Qual è la spesa mensile per un Bollitore Elettrico in bolletta?",
          "answer": "La spesa media mensile è di circa 2,33 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Bollitore Elettrico?",
          "answer": "La potenza nominale media è di circa 2200 Watt, oscillando tra 1540 W e 3300 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Bollitore Elettrico?",
          "answer": "Un utilizzo tipico di Bollitore Elettrico comporta una spesa di circa 0,03 € / Kochen."
        },
        {
          "question": "Come ridurre i consumi di un Bollitore Elettrico del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Bollitore Elettrico consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Bollitore Elettrico vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Bollitore Elettrico?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 2200 W × 1 h ÷ 1.000 × 0,35 € = 0,770 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Bollitore Elettrico?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "kaffeemaschine": {
      "name": "Macchina da Caffè",
      "category": "Cucina",
      "shortDescription": "Macchina da Caffè verbraucht im Schnitt ca. 110 kWh pro Jahr (38,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Macchina da Caffè in media all'anno?",
          "answer": "Un Macchina da Caffè moderno consuma mediamente circa 110 kWh all'anno, pari a una spesa elettrica di circa 38,50 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Macchina da Caffè?",
          "answer": "Con una potenza media di circa 1450 Watt, un'ora di funzionamento costa circa 0,507 €."
        },
        {
          "question": "Qual è la spesa mensile per un Macchina da Caffè in bolletta?",
          "answer": "La spesa media mensile è di circa 3,21 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Macchina da Caffè?",
          "answer": "La potenza nominale media è di circa 1450 Watt, oscillando tra 1015 W e 2175 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Macchina da Caffè?",
          "answer": "Un utilizzo tipico di Macchina da Caffè comporta una spesa di circa 0,04 € / Tasse."
        },
        {
          "question": "Come ridurre i consumi di un Macchina da Caffè del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Macchina da Caffè consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Macchina da Caffè vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Macchina da Caffè?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 1450 W × 1 h ÷ 1.000 × 0,35 € = 0,507 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Macchina da Caffè?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "fernseher": {
      "name": "Smart TV (55-65 pollici)",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "Smart TV (55-65 pollici) verbraucht im Schnitt ca. 175 kWh pro Jahr (61,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Smart TV (55-65 pollici) in media all'anno?",
          "answer": "Un Smart TV (55-65 pollici) moderno consuma mediamente circa 175 kWh all'anno, pari a una spesa elettrica di circa 61,25 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Smart TV (55-65 pollici)?",
          "answer": "Con una potenza media di circa 120 Watt, un'ora di funzionamento costa circa 0,042 €."
        },
        {
          "question": "Qual è la spesa mensile per un Smart TV (55-65 pollici) in bolletta?",
          "answer": "La spesa media mensile è di circa 5,10 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Smart TV (55-65 pollici)?",
          "answer": "La potenza nominale media è di circa 120 Watt, oscillando tra 84 W e 180 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Smart TV (55-65 pollici)?",
          "answer": "Un utilizzo tipico di Smart TV (55-65 pollici) comporta una spesa di circa 0,17 € / Tag (4h)."
        },
        {
          "question": "Come ridurre i consumi di un Smart TV (55-65 pollici) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Smart TV (55-65 pollici) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Smart TV (55-65 pollici) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Smart TV (55-65 pollici)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Smart TV (55-65 pollici)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "gaming-pc": {
      "name": "PC da Gaming High-End",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "PC da Gaming High-End verbraucht im Schnitt ca. 490 kWh pro Jahr (171,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un PC da Gaming High-End in media all'anno?",
          "answer": "Un PC da Gaming High-End moderno consuma mediamente circa 490 kWh all'anno, pari a una spesa elettrica di circa 171,50 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un PC da Gaming High-End?",
          "answer": "Con una potenza media di circa 450 Watt, un'ora di funzionamento costa circa 0,158 €."
        },
        {
          "question": "Qual è la spesa mensile per un PC da Gaming High-End in bolletta?",
          "answer": "La spesa media mensile è di circa 14,29 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un PC da Gaming High-End?",
          "answer": "La potenza nominale media è di circa 450 Watt, oscillando tra 315 W e 675 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di PC da Gaming High-End?",
          "answer": "Un utilizzo tipico di PC da Gaming High-End comporta una spesa di circa 0,47 € / Session (3h)."
        },
        {
          "question": "Come ridurre i consumi di un PC da Gaming High-End del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un PC da Gaming High-End consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un PC da Gaming High-End vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un PC da Gaming High-End?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 450 W × 1 h ÷ 1.000 × 0,35 € = 0,158 €."
        },
        {
          "question": "Qual è il programma più conveniente per un PC da Gaming High-End?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "pc": {
      "name": "PC Desktop (Ufficio)",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "PC Desktop (Ufficio) verbraucht im Schnitt ca. 200 kWh pro Jahr (70,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un PC Desktop (Ufficio) in media all'anno?",
          "answer": "Un PC Desktop (Ufficio) moderno consuma mediamente circa 200 kWh all'anno, pari a una spesa elettrica di circa 70,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un PC Desktop (Ufficio)?",
          "answer": "Con una potenza media di circa 120 Watt, un'ora di funzionamento costa circa 0,042 €."
        },
        {
          "question": "Qual è la spesa mensile per un PC Desktop (Ufficio) in bolletta?",
          "answer": "La spesa media mensile è di circa 5,83 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un PC Desktop (Ufficio)?",
          "answer": "La potenza nominale media è di circa 120 Watt, oscillando tra 84 W e 180 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di PC Desktop (Ufficio)?",
          "answer": "Un utilizzo tipico di PC Desktop (Ufficio) comporta una spesa di circa 0,34 € / Arbeitstag (8h)."
        },
        {
          "question": "Come ridurre i consumi di un PC Desktop (Ufficio) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un PC Desktop (Ufficio) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un PC Desktop (Ufficio) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un PC Desktop (Ufficio)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Qual è il programma più conveniente per un PC Desktop (Ufficio)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "laptop": {
      "name": "Computer Portatile / Laptop",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "Computer Portatile / Laptop verbraucht im Schnitt ca. 80 kWh pro Jahr (28,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Computer Portatile / Laptop in media all'anno?",
          "answer": "Un Computer Portatile / Laptop moderno consuma mediamente circa 80 kWh all'anno, pari a una spesa elettrica di circa 28,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Computer Portatile / Laptop?",
          "answer": "Con una potenza media di circa 50 Watt, un'ora di funzionamento costa circa 0,018 €."
        },
        {
          "question": "Qual è la spesa mensile per un Computer Portatile / Laptop in bolletta?",
          "answer": "La spesa media mensile è di circa 2,33 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Computer Portatile / Laptop?",
          "answer": "La potenza nominale media è di circa 50 Watt, oscillando tra 35 W e 75 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Computer Portatile / Laptop?",
          "answer": "Un utilizzo tipico di Computer Portatile / Laptop comporta una spesa di circa 0,14 € / Arbeitstag (8h)."
        },
        {
          "question": "Come ridurre i consumi di un Computer Portatile / Laptop del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Computer Portatile / Laptop consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Computer Portatile / Laptop vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Computer Portatile / Laptop?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 50 W × 1 h ÷ 1.000 × 0,35 € = 0,018 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Computer Portatile / Laptop?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "monitor": {
      "name": "Monitor PC (27-32 pollici)",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "Monitor PC (27-32 pollici) verbraucht im Schnitt ca. 60 kWh pro Jahr (21,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Monitor PC (27-32 pollici) in media all'anno?",
          "answer": "Un Monitor PC (27-32 pollici) moderno consuma mediamente circa 60 kWh all'anno, pari a una spesa elettrica di circa 21,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Monitor PC (27-32 pollici)?",
          "answer": "Con una potenza media di circa 35 Watt, un'ora di funzionamento costa circa 0,012 €."
        },
        {
          "question": "Qual è la spesa mensile per un Monitor PC (27-32 pollici) in bolletta?",
          "answer": "La spesa media mensile è di circa 1,75 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Monitor PC (27-32 pollici)?",
          "answer": "La potenza nominale media è di circa 35 Watt, oscillando tra 25 W e 53 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Monitor PC (27-32 pollici)?",
          "answer": "Un utilizzo tipico di Monitor PC (27-32 pollici) comporta una spesa di circa 0,10 € / Tag."
        },
        {
          "question": "Come ridurre i consumi di un Monitor PC (27-32 pollici) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Monitor PC (27-32 pollici) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Monitor PC (27-32 pollici) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Monitor PC (27-32 pollici)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 35 W × 1 h ÷ 1.000 × 0,35 € = 0,012 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Monitor PC (27-32 pollici)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "ps5": {
      "name": "PlayStation 5 (PS5)",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "PlayStation 5 (PS5) verbraucht im Schnitt ca. 150 kWh pro Jahr (52,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un PlayStation 5 (PS5) in media all'anno?",
          "answer": "Un PlayStation 5 (PS5) moderno consuma mediamente circa 150 kWh all'anno, pari a una spesa elettrica di circa 52,50 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un PlayStation 5 (PS5)?",
          "answer": "Con una potenza media di circa 200 Watt, un'ora di funzionamento costa circa 0,070 €."
        },
        {
          "question": "Qual è la spesa mensile per un PlayStation 5 (PS5) in bolletta?",
          "answer": "La spesa media mensile è di circa 4,38 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un PlayStation 5 (PS5)?",
          "answer": "La potenza nominale media è di circa 200 Watt, oscillando tra 140 W e 300 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di PlayStation 5 (PS5)?",
          "answer": "Un utilizzo tipico di PlayStation 5 (PS5) comporta una spesa di circa 0,14 € / Gaming (2h)."
        },
        {
          "question": "Come ridurre i consumi di un PlayStation 5 (PS5) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un PlayStation 5 (PS5) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un PlayStation 5 (PS5) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un PlayStation 5 (PS5)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 200 W × 1 h ÷ 1.000 × 0,35 € = 0,070 €."
        },
        {
          "question": "Qual è il programma più conveniente per un PlayStation 5 (PS5)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "xbox": {
      "name": "Xbox Series X",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "Xbox Series X verbraucht im Schnitt ca. 140 kWh pro Jahr (49,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Xbox Series X in media all'anno?",
          "answer": "Un Xbox Series X moderno consuma mediamente circa 140 kWh all'anno, pari a una spesa elettrica di circa 49,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Xbox Series X?",
          "answer": "Con una potenza media di circa 180 Watt, un'ora di funzionamento costa circa 0,063 €."
        },
        {
          "question": "Qual è la spesa mensile per un Xbox Series X in bolletta?",
          "answer": "La spesa media mensile è di circa 4,08 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Xbox Series X?",
          "answer": "La potenza nominale media è di circa 180 Watt, oscillando tra 126 W e 270 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Xbox Series X?",
          "answer": "Un utilizzo tipico di Xbox Series X comporta una spesa di circa 0,13 € / Gaming (2h)."
        },
        {
          "question": "Come ridurre i consumi di un Xbox Series X del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Xbox Series X consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Xbox Series X vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Xbox Series X?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 180 W × 1 h ÷ 1.000 × 0,35 € = 0,063 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Xbox Series X?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "klimaanlage": {
      "name": "Climatizzatore Split",
      "category": "Climatizzazione e Riscaldamento",
      "shortDescription": "Climatizzatore Split verbraucht im Schnitt ca. 450 kWh pro Jahr (157,50 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Climatizzatore Split in media all'anno?",
          "answer": "Un Climatizzatore Split moderno consuma mediamente circa 450 kWh all'anno, pari a una spesa elettrica di circa 157,50 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Climatizzatore Split?",
          "answer": "Con una potenza media di circa 900 Watt, un'ora di funzionamento costa circa 0,315 €."
        },
        {
          "question": "Qual è la spesa mensile per un Climatizzatore Split in bolletta?",
          "answer": "La spesa media mensile è di circa 13,13 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Climatizzatore Split?",
          "answer": "La potenza nominale media è di circa 900 Watt, oscillando tra 630 W e 1350 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Climatizzatore Split?",
          "answer": "Un utilizzo tipico di Climatizzatore Split comporta una spesa di circa 1,50 € / Hitzetag."
        },
        {
          "question": "Come ridurre i consumi di un Climatizzatore Split del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Climatizzatore Split consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Climatizzatore Split vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Climatizzatore Split?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 900 W × 1 h ÷ 1.000 × 0,35 € = 0,315 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Climatizzatore Split?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "ventilator": {
      "name": "Ventilatore a Piantana",
      "category": "Climatizzazione e Riscaldamento",
      "shortDescription": "Ventilatore a Piantana verbraucht im Schnitt ca. 35 kWh pro Jahr (12,25 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Ventilatore a Piantana in media all'anno?",
          "answer": "Un Ventilatore a Piantana moderno consuma mediamente circa 35 kWh all'anno, pari a una spesa elettrica di circa 12,25 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Ventilatore a Piantana?",
          "answer": "Con una potenza media di circa 45 Watt, un'ora di funzionamento costa circa 0,016 €."
        },
        {
          "question": "Qual è la spesa mensile per un Ventilatore a Piantana in bolletta?",
          "answer": "La spesa media mensile è di circa 1,02 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Ventilatore a Piantana?",
          "answer": "La potenza nominale media è di circa 45 Watt, oscillando tra 31 W e 68 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Ventilatore a Piantana?",
          "answer": "Un utilizzo tipico di Ventilatore a Piantana comporta una spesa di circa 0,13 € / Tag (8h)."
        },
        {
          "question": "Come ridurre i consumi di un Ventilatore a Piantana del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Ventilatore a Piantana consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Ventilatore a Piantana vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Ventilatore a Piantana?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 45 W × 1 h ÷ 1.000 × 0,35 € = 0,016 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Ventilatore a Piantana?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "heizluefter": {
      "name": "Termoventilatore / Stufetta Elettrica",
      "category": "Climatizzazione e Riscaldamento",
      "shortDescription": "Termoventilatore / Stufetta Elettrica verbraucht im Schnitt ca. 360 kWh pro Jahr (126,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Termoventilatore / Stufetta Elettrica in media all'anno?",
          "answer": "Un Termoventilatore / Stufetta Elettrica moderno consuma mediamente circa 360 kWh all'anno, pari a una spesa elettrica di circa 126,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Termoventilatore / Stufetta Elettrica?",
          "answer": "Con una potenza media di circa 2000 Watt, un'ora di funzionamento costa circa 0,700 €."
        },
        {
          "question": "Qual è la spesa mensile per un Termoventilatore / Stufetta Elettrica in bolletta?",
          "answer": "La spesa media mensile è di circa 10,50 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Termoventilatore / Stufetta Elettrica?",
          "answer": "La potenza nominale media è di circa 2000 Watt, oscillando tra 1400 W e 3000 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Termoventilatore / Stufetta Elettrica?",
          "answer": "Un utilizzo tipico di Termoventilatore / Stufetta Elettrica comporta una spesa di circa 2,10 € / Tag (3h)."
        },
        {
          "question": "Come ridurre i consumi di un Termoventilatore / Stufetta Elettrica del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Termoventilatore / Stufetta Elettrica consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Termoventilatore / Stufetta Elettrica vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Termoventilatore / Stufetta Elettrica?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Termoventilatore / Stufetta Elettrica?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "luftentfeuchter": {
      "name": "Deumidificatore",
      "category": "Climatizzazione e Riscaldamento",
      "shortDescription": "Deumidificatore verbraucht im Schnitt ca. 300 kWh pro Jahr (105,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Deumidificatore in media all'anno?",
          "answer": "Un Deumidificatore moderno consuma mediamente circa 300 kWh all'anno, pari a una spesa elettrica di circa 105,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Deumidificatore?",
          "answer": "Con una potenza media di circa 250 Watt, un'ora di funzionamento costa circa 0,087 €."
        },
        {
          "question": "Qual è la spesa mensile per un Deumidificatore in bolletta?",
          "answer": "La spesa media mensile è di circa 8,75 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Deumidificatore?",
          "answer": "La potenza nominale media è di circa 250 Watt, oscillando tra 175 W e 375 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Deumidificatore?",
          "answer": "Un utilizzo tipico di Deumidificatore comporta una spesa di circa 0,52 € / Tag (6h)."
        },
        {
          "question": "Come ridurre i consumi di un Deumidificatore del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Deumidificatore consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Deumidificatore vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Deumidificatore?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 250 W × 1 h ÷ 1.000 × 0,35 € = 0,087 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Deumidificatore?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "aquarium": {
      "name": "Acquario (100–200 L)",
      "category": "Hobby e Dispositivi Speciali",
      "shortDescription": "Acquario (100–200 L) verbraucht im Schnitt ca. 400 kWh pro Jahr (140,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Acquario (100–200 L) in media all'anno?",
          "answer": "Un Acquario (100–200 L) moderno consuma mediamente circa 400 kWh all'anno, pari a una spesa elettrica di circa 140,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Acquario (100–200 L)?",
          "answer": "Con una potenza media di circa 120 Watt, un'ora di funzionamento costa circa 0,042 €."
        },
        {
          "question": "Qual è la spesa mensile per un Acquario (100–200 L) in bolletta?",
          "answer": "La spesa media mensile è di circa 11,67 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Acquario (100–200 L)?",
          "answer": "La potenza nominale media è di circa 120 Watt, oscillando tra 84 W e 180 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Acquario (100–200 L)?",
          "answer": "Un utilizzo tipico di Acquario (100–200 L) comporta una spesa di circa 0,38 € / Tag."
        },
        {
          "question": "Come ridurre i consumi di un Acquario (100–200 L) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Acquario (100–200 L) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Acquario (100–200 L) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Acquario (100–200 L)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 120 W × 1 h ÷ 1.000 × 0,35 € = 0,042 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Acquario (100–200 L)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "pool": {
      "name": "Pompa per Piscina e Filtro",
      "category": "Hobby e Dispositivi Speciali",
      "shortDescription": "Pompa per Piscina e Filtro verbraucht im Schnitt ca. 700 kWh pro Jahr (245,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Pompa per Piscina e Filtro in media all'anno?",
          "answer": "Un Pompa per Piscina e Filtro moderno consuma mediamente circa 700 kWh all'anno, pari a una spesa elettrica di circa 245,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Pompa per Piscina e Filtro?",
          "answer": "Con una potenza media di circa 600 Watt, un'ora di funzionamento costa circa 0,210 €."
        },
        {
          "question": "Qual è la spesa mensile per un Pompa per Piscina e Filtro in bolletta?",
          "answer": "La spesa media mensile è di circa 20,42 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Pompa per Piscina e Filtro?",
          "answer": "La potenza nominale media è di circa 600 Watt, oscillando tra 420 W e 900 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Pompa per Piscina e Filtro?",
          "answer": "Un utilizzo tipico di Pompa per Piscina e Filtro comporta una spesa di circa 1,26 € / Tag (6h)."
        },
        {
          "question": "Come ridurre i consumi di un Pompa per Piscina e Filtro del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Pompa per Piscina e Filtro consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Pompa per Piscina e Filtro vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Pompa per Piscina e Filtro?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 600 W × 1 h ÷ 1.000 × 0,35 € = 0,210 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Pompa per Piscina e Filtro?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "whirlpool": {
      "name": "Idromassaggio / Spa Gonfiabile",
      "category": "Hobby e Dispositivi Speciali",
      "shortDescription": "Idromassaggio / Spa Gonfiabile verbraucht im Schnitt ca. 2500 kWh pro Jahr (875,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Idromassaggio / Spa Gonfiabile in media all'anno?",
          "answer": "Un Idromassaggio / Spa Gonfiabile moderno consuma mediamente circa 2500 kWh all'anno, pari a una spesa elettrica di circa 875,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Idromassaggio / Spa Gonfiabile?",
          "answer": "Con una potenza media di circa 2000 Watt, un'ora di funzionamento costa circa 0,700 €."
        },
        {
          "question": "Qual è la spesa mensile per un Idromassaggio / Spa Gonfiabile in bolletta?",
          "answer": "La spesa media mensile è di circa 72,92 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Idromassaggio / Spa Gonfiabile?",
          "answer": "La potenza nominale media è di circa 2000 Watt, oscillando tra 1400 W e 3000 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Idromassaggio / Spa Gonfiabile?",
          "answer": "Un utilizzo tipico di Idromassaggio / Spa Gonfiabile comporta una spesa di circa 2,40 € / Tag."
        },
        {
          "question": "Come ridurre i consumi di un Idromassaggio / Spa Gonfiabile del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Idromassaggio / Spa Gonfiabile consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Idromassaggio / Spa Gonfiabile vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Idromassaggio / Spa Gonfiabile?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 2000 W × 1 h ÷ 1.000 × 0,35 € = 0,700 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Idromassaggio / Spa Gonfiabile?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "3d-drucker": {
      "name": "Stampante 3D (FDM)",
      "category": "Hobby e Dispositivi Speciali",
      "shortDescription": "Stampante 3D (FDM) verbraucht im Schnitt ca. 120 kWh pro Jahr (42,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Stampante 3D (FDM) in media all'anno?",
          "answer": "Un Stampante 3D (FDM) moderno consuma mediamente circa 120 kWh all'anno, pari a una spesa elettrica di circa 42,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Stampante 3D (FDM)?",
          "answer": "Con una potenza media di circa 150 Watt, un'ora di funzionamento costa circa 0,052 €."
        },
        {
          "question": "Qual è la spesa mensile per un Stampante 3D (FDM) in bolletta?",
          "answer": "La spesa media mensile è di circa 3,50 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Stampante 3D (FDM)?",
          "answer": "La potenza nominale media è di circa 150 Watt, oscillando tra 105 W e 225 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Stampante 3D (FDM)?",
          "answer": "Un utilizzo tipico di Stampante 3D (FDM) comporta una spesa di circa 0,42 € / Druck (8h)."
        },
        {
          "question": "Come ridurre i consumi di un Stampante 3D (FDM) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Stampante 3D (FDM) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Stampante 3D (FDM) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Stampante 3D (FDM)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 150 W × 1 h ÷ 1.000 × 0,35 € = 0,052 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Stampante 3D (FDM)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "nas": {
      "name": "Server NAS Domestico (24/7)",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "Server NAS Domestico (24/7) verbraucht im Schnitt ca. 220 kWh pro Jahr (77,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Server NAS Domestico (24/7) in media all'anno?",
          "answer": "Un Server NAS Domestico (24/7) moderno consuma mediamente circa 220 kWh all'anno, pari a una spesa elettrica di circa 77,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Server NAS Domestico (24/7)?",
          "answer": "Con una potenza media di circa 30 Watt, un'ora di funzionamento costa circa 0,011 €."
        },
        {
          "question": "Qual è la spesa mensile per un Server NAS Domestico (24/7) in bolletta?",
          "answer": "La spesa media mensile è di circa 6,42 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Server NAS Domestico (24/7)?",
          "answer": "La potenza nominale media è di circa 30 Watt, oscillando tra 21 W e 45 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Server NAS Domestico (24/7)?",
          "answer": "Un utilizzo tipico di Server NAS Domestico (24/7) comporta una spesa di circa 0,21 € / Tag (24h)."
        },
        {
          "question": "Come ridurre i consumi di un Server NAS Domestico (24/7) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Server NAS Domestico (24/7) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Server NAS Domestico (24/7) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Server NAS Domestico (24/7)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 30 W × 1 h ÷ 1.000 × 0,35 € = 0,011 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Server NAS Domestico (24/7)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    },
    "server": {
      "name": "Home Server / Homelab (24/7)",
      "category": "Intrattenimento e Ufficio",
      "shortDescription": "Home Server / Homelab (24/7) verbraucht im Schnitt ca. 500 kWh pro Jahr (175,00 € bei 35 ct/kWh).",
      "dutyCycleExplanation": "Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.",
      "savingAdvice": [
        "Eco-Programme und energiesparende Einstellungen bevorzugen.",
        "Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.",
        "Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden."
      ],
      "faq": [
        {
          "question": "Quanto consuma un Home Server / Homelab (24/7) in media all'anno?",
          "answer": "Un Home Server / Homelab (24/7) moderno consuma mediamente circa 500 kWh all'anno, pari a una spesa elettrica di circa 175,00 € annui a 0,35 €/kWh."
        },
        {
          "question": "Quanto costa 1 ora di utilizzo di un Home Server / Homelab (24/7)?",
          "answer": "Con una potenza media di circa 65 Watt, un'ora di funzionamento costa circa 0,023 €."
        },
        {
          "question": "Qual è la spesa mensile per un Home Server / Homelab (24/7) in bolletta?",
          "answer": "La spesa media mensile è di circa 14,58 € al mese in condizioni di utilizzo standard."
        },
        {
          "question": "Qual è la potenza tipica in Watt di un Home Server / Homelab (24/7)?",
          "answer": "La potenza nominale media è di circa 65 Watt, oscillando tra 46 W e 98 W a seconda della fase."
        },
        {
          "question": "Quanto costa un singolo ciclo o utilizzo di Home Server / Homelab (24/7)?",
          "answer": "Un utilizzo tipico di Home Server / Homelab (24/7) comporta una spesa di circa 0,48 € / Tag (24h)."
        },
        {
          "question": "Come ridurre i consumi di un Home Server / Homelab (24/7) del 15–25%?",
          "answer": "Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive."
        },
        {
          "question": "Un Home Server / Homelab (24/7) consuma corrente in modalità standby?",
          "answer": "Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno)."
        },
        {
          "question": "Conviene sostituire un Home Server / Homelab (24/7) vecchio con uno nuovo a basso consumo?",
          "answer": "Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni."
        },
        {
          "question": "Come calcolare esattamente la spesa elettrica di un Home Server / Homelab (24/7)?",
          "answer": "Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: 65 W × 1 h ÷ 1.000 × 0,35 € = 0,023 €."
        },
        {
          "question": "Qual è il programma più conveniente per un Home Server / Homelab (24/7)?",
          "answer": "Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali."
        }
      ]
    }
  }
};

export function getLocalizedAppliance(slug: string, lang: SupportedLanguage = 'de'): LocalizedApplianceData | null {
  return applianceTranslations[lang]?.[slug] || applianceTranslations.de?.[slug] || null;
}
