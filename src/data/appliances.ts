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
    slug: "kuehlschrank",
    name: "Kühlschrank",
    category: "Küche",
    icon: "❄️",
    typicalWattage: 90,
    wattageMin: 50,
    wattageMax: 160,
    typicalUsageHours: 24,
    typicalAnnualKwh: 120,
    annualCostEuro: 42.0,
    usageContext: "24 Stunden Dauerbetrieb (Kompressor taktet bei ca. 25–40 % Einschaltdauer)",
    calculationDefaults: {
      watt: 40,
      hoursPerDay: 24
    },
    shortDescription: "Ein moderner Kühlschrank (Effizienzklasse A–C) verbraucht ca. 90 bis 130 kWh pro Jahr (ca. 31 bis 46 € bei 35 ct/kWh). Ältere Modelle oder Kühl-Gefrierkombinationen benötigen oft 200 bis 350 kWh jährlich.",
    dutyCycleExplanation: "Ein Kühlschrank läuft 24 Stunden am Tag am Stromnetz, der stromintensive Kompressor arbeitet jedoch thermostatgesteuert nur ca. 15 bis 25 Minuten pro Stunde. Die reale durchschnittliche Leistungsaufnahme über den Tag gemittelt liegt daher bei nur ca. 12 bis 20 Watt.",
    measurementTips: "Schließe ein digitales Energiekostenmessgerät für mindestens 48 bis 72 Stunden an. Da der Kompressor getaktet anspringt und Abtauzyklen durchläuft, liefert nur eine Mehrtagesmessung den exakten Jahresdurchschnitt.",
    savingAdvice: [
      "Optimale Temperatur wählen: 7 °C im oberen Fach reichen für Frische völlig aus. Jedes Grad kälter erhöht den Stromverbrauch um rund 6 %.",
      "Regelmäßig abtauen: Eine Eisschicht von nur 5 mm im Gefrierfach steigert den Strombedarf um ca. 30 %.",
      "Türdichtungen prüfen: Eine undichte Gummidichtung lässt warme Luft einströmen und führt zu dauerhaftem Kompressorlauf.",
      "Warme Speisen niemals direkt hineinstellen, sondern erst auf Zimmertemperatur abkühlen lassen."
    ],
    factors: [
      "Energieeffizienzklasse (EU-Label A bis G)",
      "Nutzinhalt in Litern und Vorhandensein eines Gefrierfachs",
      "Umgebungstemperatur (z. B. neben Herd oder Heizung platziert)",
      "Häufigkeit und Dauer der Türöffnungen"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Kühlschrank im Durchschnitt pro Jahr?",
        answer: "Ein moderner freistehender Kühlschrank (ohne großes Gefrierfach) verbraucht ca. 100 bis 130 kWh pro Jahr (ca. 35 bis 45 € bei 35 ct/kWh). Größere Kühl-Gefrierkombinationen liegen bei 140 bis 220 kWh, ältere Geräte über 10 Jahre oft bei 300 kWh und mehr."
      },
      {
        question: "Was kostet 1 Stunde Betrieb beim Kühlschrank?",
        answer: "Über 24 Stunden gemittelt benötigt ein sparsamer Kühlschrank ca. 0,33 kWh pro Tag. Das entspricht rund 0,014 kWh pro Stunde, also ca. 0,5 Cent pro Stunde bei 35 ct/kWh. Läuft der Kompressor unter Volllast mit 90 Watt, sind es während dieser Phase ca. 3,15 Cent pro Stunde."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Kühlschrank?",
        answer: "Bei einem Jahresverbrauch von 120 kWh entstehen monatliche Stromkosten von ca. 3,50 € (bei 35 ct/kWh). Bei älteren Kühl-Gefrierkombinationen mit 300 kWh/Jahr liegen die monatlichen Kosten bei etwa 8,75 €."
      },
      {
        question: "Wie viel Watt Leistung hat ein typischer Kühlschrank?",
        answer: "Die Nennleistung des Kompressors liegt meist zwischen 60 und 150 Watt. Während der Ruhephasen sinkt die Leistungsaufnahme auf unter 1 Watt (Standby/Elektronik)."
      },
      {
        question: "Was ist der Stromfresser Nummer 1 in der Küche?",
        answer: "In der Küche sind veraltete Kühl- und Gefriergeräte, alte Elektroherde ohne Umluft sowie häufig genutzte Geschirrspüler bei 65 °C die größten Dauerstromfresser. Vor allem defekte Türdichtungen am Kühlschrank können den Verbrauch unbemerkt verdoppeln."
      },
      {
        question: "Warum darf man beim Kühlschrank nicht einfach Nennleistung × 24 Stunden rechnen?",
        answer: "Würde man 90 Watt × 24 h rechnen, käme man auf 2.160 Wh (2,16 kWh) pro Tag bzw. fast 788 kWh im Jahr. Da der Kompressor jedoch nur rund 20–30 % der Zeit aktiv läuft, verbraucht das Gerät real nur ca. 0,3 bis 0,4 kWh am Tag."
      },
      {
        question: "Verbraucht ein Kühlschrank im Sommer mehr Strom als im Winter?",
        answer: "Ja. Steigt die Raumtemperatur von 20 °C auf 25 °C an, muss das Kälteaggregat ca. 15 bis 25 % mehr Wärme abführen, was die Kompressorlaufzeiten spürbar verlängert."
      },
      {
        question: "Lohnt sich der Austausch eines funktionierenden alten Kühlschranks?",
        answer: "Ein über 12 Jahre altes Gerät verbraucht oft 300 kWh/Jahr (105 €/Jahr). Ein Neugerät der Klasse A oder B benötigt nur ca. 100 kWh (35 €/Jahr). Die jährliche Ersparnis von rund 70 € amortisiert ein 400-Euro-Neugerät in ca. 5 bis 6 Jahren."
      },
      {
        question: "Welche Temperatur sollte im Kühlschrank eingestellt sein?",
        answer: "Die ideale und energieeffizienteste Temperatur liegt bei 7 °C in der Mitte des Kühlraums. Eine Absenkung auf 5 °C oder 4 °C ist hygienisch für die meisten Lebensmittel nicht erforderlich und treibt die Stromrechnung in die Höhe."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Kühlschranks?",
        answer: "Lies den Jahresverbrauch in kWh auf dem EU-Energielabel ab und multipliziere ihn mit deinem Arbeitspreis: Jahreskosten = kWh × Strompreis (€/kWh). Beispiel: 120 kWh × 0,35 €/kWh = 42,00 € pro Jahr."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["geschirrspueler", "backofen", "herd"],
    relatedCalculators: ["/stromkosten-rechner", "/kwh-rechner", "/watt-rechner"]
  },

  "waschmaschine": {
    slug: "waschmaschine",
    name: "Waschmaschine",
    category: "Haushalt & Reinigung",
    icon: "🧺",
    typicalWattage: 2000,
    wattageMin: 1500,
    wattageMax: 2400,
    typicalUsageHours: 0.8,
    typicalAnnualKwh: 140,
    annualCostEuro: 49.0,
    usageContext: "Ca. 3–4 Waschgänge pro Woche (ca. 180–220 Zyklen im Jahr)",
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 0.2
    },
    shortDescription: "Eine moderne Waschmaschine (Klasse A) verbraucht im Eco-Programm (40–60 °C) ca. 0,45 bis 0,65 kWh pro Waschgang (ca. 16 bis 23 Cent). Bei 200 Waschgängen im Jahr entstehen Gesamtkosten von ca. 35 bis 55 €.",
    dutyCycleExplanation: "Rund 80 % des Stromverbrauchs entfallen auf das elektrische Aufheizen des Wassers durch den Heizstab (ca. 1.800–2.200 W während der ersten 15–25 Minuten). Die Trommeldrehung und das Schleudern benötigen lediglich 100 bis 350 Watt.",
    measurementTips: "Messe immer einen kompletten Waschzyklus von Start bis zum automatischen Abschalten, da die Leistungsaufnahme zwischen 2.000 Watt (Aufheizen) und 150 Watt (Spülen/Schleudern) extrem schwankt.",
    savingAdvice: [
      "Eco-40-60-Programm nutzen: Dauert länger, spart aber bis zu 40 % Strom, da das Wasser langsamer und schonender erwärmt wird.",
      "30 °C oder 40 °C statt 60 °C waschen: Für normal verschmutzte Alltagswäsche völlig ausreichend und spart über 45 % Energie gegenüber einem 60-Grad-Waschgang.",
      "Trommel stets voll beladen: Zwei halbe Maschinen verbrauchen deutlich mehr Strom und Wasser als ein voller Waschgang.",
      "Auf Vorwäsche verzichten: Ist bei modernen Waschmitteln nur bei extrem verschlammter Arbeitskleidung notwendig."
    ],
    factors: [
      "Gewählte Waschtemperatur (30 °C, 40 °C, 60 °C oder 90 °C)",
      "Nutzung des Eco-Programms",
      "Beladungsmenge und Trommelvolumen",
      "Schleuderdrehzahl (1.000 bis 1.600 U/min)"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht eine Waschmaschine im Durchschnitt pro Jahr?",
        answer: "Bei durchschnittlich 200 Waschgängen verbraucht eine moderne Waschmaschine der Energieeffizienzklasse A ca. 100 bis 140 kWh pro Jahr (ca. 35 bis 49 € bei 35 ct/kWh). Ältere Geräte (Klasse D oder schlechter) benötigen oft 200 bis 260 kWh (70 bis 90 €)."
      },
      {
        question: "Was kostet 1 Waschgang an Strom?",
        answer: "Ein 30-Grad- oder Eco-Waschgang kostet ca. 0,4 bis 0,6 kWh (rund 14 bis 21 Cent bei 35 ct/kWh). Ein 60-Grad-Normalprogramm benötigt ca. 1,0 bis 1,3 kWh (ca. 35 bis 45 Cent), während ein Kochwaschgang bei 90 °C mit ca. 1,8 bis 2,2 kWh rund 63 bis 77 Cent kostet."
      },
      {
        question: "Was kostet 1 Stunde Betrieb der Waschmaschine?",
        answer: "Läuft die Maschine in der ersten halben Stunde auf voller Heizleistung (2.000 W), fallen für diese Heizphase ca. 1 kWh Strom (35 Cent) an. Für einen gesamten 2-stündigen Eco-Waschgang liegt der Gesamtverbrauch bei nur ca. 0,55 kWh (ca. 19 Cent)."
      },
      {
        question: "Wie viel Watt Leistung hat eine Waschmaschine?",
        answer: "Die Spitzen-Anschlussleistung liegt bei 1.800 bis 2.400 Watt, welche primär für den elektrischen Heizstab beim Aufheizen des Wassers benötigt wird."
      },
      {
        question: "Warum spart ein langes Eco-Programm Strom?",
        answer: "Im Eco-Programm wird das Wasser auf eine niedrigere Temperatur erwärmt und die Wäsche dafür länger eingeweicht und mechanisch bewegt. Da das Heizen von Wasser extrem viel Energie benötigt, die Trommeldrehung jedoch sehr wenig, sinkt der Gesamtstromverbrauch um 30–50 %."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für eine Waschmaschine?",
        answer: "Bei 3 bis 4 Wäschen pro Woche (ca. 15 bis 18 Wäschen im Monat) betragen die monatlichen Stromkosten ca. 3,50 € bis 5,00 €."
      },
      {
        question: "Verbraucht die Waschmaschine im Standby Strom?",
        answer: "Moderne Waschmaschinen mit Display oder WLAN ziehen nach Programmende ca. 0,3 bis 2 Watt im Standby. Es empfiehlt sich, die Maschine nach der Wäsche per Netzschalter oder schaltbarer Steckdose komplett vom Strom zu trennen."
      },
      {
        question: "Wie berechne ich die Stromkosten pro Waschgang?",
        answer: "Formel: Verbrauch in kWh × Arbeitspreis in €/kWh = Kosten pro Waschgang. Beispiel: 0,6 kWh × 0,35 €/kWh = 0,21 € (21 Cent)."
      },
      {
        question: "Lohnt sich der Warmwasseranschluss für die Waschmaschine?",
        answer: "Wenn Warmwasser über eine hocheffiziente Wärmepumpe, Fernwärme oder Solarthermie erzeugt wird, kann ein Vorschaltgerät oder Warmwasseranschluss die Stromkosten pro Waschgang um 50 bis 70 % senken."
      },
      {
        question: "Welche Schleuderdrehzahl ist am sparsamsten?",
        answer: "Wird die Wäsche anschließend auf der Leine getrocknet, reicht eine schonende Schleuderzahl von 1.000–1.200 U/min. Kommt die Wäsche danach in den Wäschetrockner, sollte mit 1.400–1.600 U/min geschleudert werden, da der Trockner für die Wasserverdampfung wesentlich mehr Strom braucht als die Waschmaschine beim Schleudern."
      }
    ],
    sourceIds: ["bdew", "stromspiegel", "uba"],
    relatedDevices: ["trockner", "geschirrspueler", "kuehlschrank"],
    relatedCalculators: ["/stromkosten-rechner", "/stromverbrauch-rechner", "/kwh-rechner"]
  },

  "trockner": {
    slug: "trockner",
    name: "Wäschetrockner",
    category: "Haushalt & Reinigung",
    icon: "🌀",
    typicalWattage: 900,
    wattageMin: 600,
    wattageMax: 2800,
    typicalUsageHours: 0.6,
    typicalAnnualKwh: 200,
    annualCostEuro: 70.0,
    usageContext: "Ca. 120–160 Trocknungszyklen pro Jahr",
    calculationDefaults: {
      watt: 800,
      hoursPerDay: 0.7
    },
    shortDescription: "Ein moderner Wärmepumpentrockner (Klasse A+++) verbraucht ca. 1,2 bis 1,5 kWh pro Ladung (ca. 42 bis 53 Cent). Ein alter Kondenstrockner (Klasse B) zieht dagegen 3,5 bis 4,5 kWh (ca. 1,20 bis 1,60 €) pro Durchgang.",
    dutyCycleExplanation: "Wärmepumpentrockner nutzen einen Kältekreislauf, um die warme Abluft zu entfeuchten und die Wärme wieder in die Trommel zurückzuführen. Klassische Kondenstrockner heizen die Luft mit einem 2.500-Watt-Heizstab kontinuierlich auf.",
    measurementTips: "Messe einen vollen Zyklus mit Programm 'Schranktrocken' bei Standardbeladung (z. B. 7 kg Baumwolle).",
    savingAdvice: [
      "Wäsche vorher mit mindestens 1.400 U/min in der Waschmaschine schleudern: Das spart bis zu 25 % Trocknerzeit und Strom.",
      "Flusensieb nach jedem einzelnen Durchgang reinigen, um den optimalen Luftstrom zu gewährleisten.",
      "Im Sommer und bei gutem Wetter die Wäsche kostenlos auf dem Wäscheständer oder Balkon trocknen."
    ],
    factors: [
      "Gerätetechnologie (Wärmepumpe vs. Kondenstrockner vs. Ablufttrockner)",
      "Ausgangsfeuchte der Wäsche (Schleuderdrehzahl der Waschmaschine)",
      "Trockengrad (Bügelfeucht vs. Schranktrocken vs. Extratrocken)"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Wäschetrockner pro Jahr?",
        answer: "Ein Wärmepumpentrockner verbraucht bei 140 Durchgängen rund 160 bis 210 kWh im Jahr (ca. 56 bis 74 € bei 35 ct/kWh). Ein älterer Kondenstrockner benötigt für dieselbe Wäschemenge oft 450 bis 600 kWh (ca. 158 bis 210 €)."
      },
      {
        question: "Was kostet 1 Stunde Betrieb beim Trockner?",
        answer: "Ein moderner Wärmepumpentrockner mit 800 W Nennleistung kostet ca. 28 Cent pro Stunde (bei 35 ct/kWh). Ein klassischer Kondenstrockner mit 2.500 Watt kostet rund 88 Cent pro Stunde."
      },
      {
        question: "Was kostet eine komplette Trocknerladung?",
        answer: "Ein Zyklus im Wärmepumpentrockner kostet ca. 45 bis 55 Cent (1,3–1,6 kWh). Im Kondenstrockner kostet eine Ladung ca. 1,30 bis 1,60 € (3,7–4,5 kWh)."
      },
      {
        question: "Wie viel Watt Leistung hat ein Wäschetrockner?",
        answer: "Wärmepumpentrockner haben eine Leistungsaufnahme von 600 bis 900 Watt. Kondenstrockner und Ablufttrockner benötigen 2.000 bis 2.800 Watt."
      },
      {
        question: "Warum ist ein Wärmepumpentrockner so viel sparsamer?",
        answer: "Er arbeitet nach dem Prinzip einer Wärmepumpe: Die beim Abkühlen der feuchten Luft gewonnene Wärme wird nicht an den Raum abgegeben, sondern direkt zum Wiedererwärmen der Trocknungsluft genutzt."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Trockner?",
        answer: "Bei 12 Trocknungsgängen pro Monat betragen die Kosten mit Wärmepumpe ca. 5 bis 6,50 € monatlich. Mit einem Altgerät können es 15 bis 20 € im Monat sein."
      },
      {
        question: "Gehört der Trockner zu den größten Stromfressern im Haushalt?",
        answer: "Ja, insbesondere ältere Kondenstrockner zählen mit 400 bis 600 kWh/Jahr neben alten Kühlschränken zu den größten Einzelverbrauchern im Haushalt."
      },
      {
        question: "Lohnt sich der Neukauf eines Wärmepumpentrockners?",
        answer: "Wer seinen alten Kondenstrockner 3-mal wöchentlich nutzt, spart mit einem Wärmepumpentrockner ca. 350 kWh bzw. rund 120 € pro Jahr ein. Ein 500-Euro-Neugerät rechnet sich so in rund 4 Jahren."
      },
      {
        question: "Wie berechne ich die Jahreskosten eines Trockners?",
        answer: "Formel: Anzahl Trockengänge × kWh pro Gang × Strompreis (€/kWh). Beispiel: 140 × 1,4 kWh × 0,35 € = 68,60 € pro Jahr."
      },
      {
        question: "Welches Programm ist beim Trockner am sparsamsten?",
        answer: "Das Programm 'Bügelfeucht' verbraucht ca. 20–30 % weniger Strom als 'Schranktrocken', da die Restfeuchte für das anschließende Bügeln im Gewebe belassen wird."
      }
    ],
    sourceIds: ["bdew", "stromspiegel", "uba"],
    relatedDevices: ["waschmaschine", "geschirrspueler", "heizluefter"],
    relatedCalculators: ["/stromkosten-rechner", "/stromfresser", "/strom-sparen"]
  },

  "geschirrspueler": {
    slug: "geschirrspueler",
    name: "Geschirrspüler",
    category: "Küche",
    icon: "🍽️",
    typicalWattage: 1800,
    wattageMin: 1200,
    wattageMax: 2200,
    typicalUsageHours: 1.0,
    typicalAnnualKwh: 150,
    annualCostEuro: 52.5,
    usageContext: "Ca. 200–220 Spülgänge pro Jahr (ca. 4 Spülgänge pro Woche)",
    calculationDefaults: {
      watt: 1800,
      hoursPerDay: 0.25
    },
    shortDescription: "Ein moderner Geschirrspüler (Klasse A–C) benötigt im Eco-Programm ca. 0,65 bis 0,85 kWh Strom (ca. 23 bis 30 Cent) und 9 Liter Wasser pro Spülgang. Ältere Geräte verbrauchen oft 1,2 bis 1,6 kWh pro Spülgang.",
    dutyCycleExplanation: "Die meiste Energie wird in den ersten 20 Minuten zum Aufheizen des Spülwassers aufgewendet (Heizstab zieht 1.800–2.000 W). Die Umwälzpumpe und die Trocknungsphase benötigen lediglich ca. 60 bis 120 Watt.",
    measurementTips: "Messe den Stromverbrauch über den gesamten Ablauf eines Programms inklusive Trocknung mit einem Zwischenstecker.",
    savingAdvice: [
      "Stets das Eco-Programm (50 °C) wählen: Spart bis zu 30 % Strom im Vergleich zum Automatik- oder 65-Grad-Intensivprogramm.",
      "Maschine erst starten, wenn sie komplett voll ist.",
      "Geschirr nicht unter fließendem warmem Wasser vorspülen – grobe Reste einfach mit der Gabel in den Müll streifen."
    ],
    factors: [
      "Gewähltes Programm (Eco 50 °C vs. Auto 45–65 °C vs. Intensiv 70 °C vs. Kurzprogramm)",
      "Beladungszustand",
      "Energieeffizienzklasse nach neuem EU-Label"
    ],
    faq: [
      {
        question: "Was zieht eine Spülmaschine an Strom?",
        answer: "Ein moderner Geschirrspüler verbraucht pro Spülgang im Eco-Modus ca. 0,65 bis 0,85 kWh Strom. Im Intensiv- oder Kurzprogramm sind es 1,2 bis 1,6 kWh pro Durchgang."
      },
      {
        question: "Was kostet 1 Spülgang mit dem Geschirrspüler?",
        answer: "Bei einem Strompreis von 35 ct/kWh kostet ein Eco-Spülgang ca. 23 bis 30 Cent an Strom. Ein 70-Grad-Intensivgang schlägt mit ca. 45 bis 56 Cent zu Buche."
      },
      {
        question: "Wie viel Strom verbraucht ein Geschirrspüler im Jahr?",
        answer: "Bei 200 Spülgängen im Jahr verbraucht ein modernes Gerät ca. 140 bis 180 kWh (ca. 49 bis 63 €). Ältere Geschirrspüler benötigen oft 250 bis 320 kWh (ca. 88 bis 112 €)."
      },
      {
        question: "Ist Handspülen sparsamer als die Spülmaschine?",
        answer: "Nein. Ein voll beladener Geschirrspüler verbraucht im Eco-Modus nur ca. 9 Liter Wasser und unter 0,8 kWh Strom. Beim Spülen von Hand unter fließendem Warmwasser werden meist 30–50 Liter Wasser und über 2 kWh Energie für die Warmwasserbereitung benötigt."
      },
      {
        question: "Wie viel Watt Spitzenleistung hat ein Geschirrspüler?",
        answer: "Die Anschlussleistung liegt bei 1.800 bis 2.200 Watt während der Wasseraufheizung. Während des Pumpens und Trocknens sinkt der Verbrauch auf 60–120 Watt."
      },
      {
        question: "Warum verbraucht das Kurzprogramm mehr Strom als das Eco-Programm?",
        answer: "Im Kurzprogramm muss das Wasser in sehr kurzer Zeit auf hohe Temperaturen erhitzt werden, während das Eco-Programm das Wasser mit weniger Hitze erwärmt und die Einwirkzeit verlängert."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten einer Spülmaschine?",
        answer: "Bei 4 Spülgängen pro Woche (ca. 17 Zyklen pro Monat) entstehen monatliche Stromkosten von ca. 4,00 bis 5,50 €."
      },
      {
        question: "Sollte man den Geschirrspüler an das Warmwasser anschließen?",
        answer: "Wird das Warmwasser zentral und effizient über eine Wärmepumpe oder Solarthermie erzeugt, spart der direkte Warmwasseranschluss bis zu 50 % Strom beim Spülen."
      },
      {
        question: "Wie berechne ich die jährlichen Stromkosten meines Geschirrspülers?",
        answer: "Formel: Spülgänge pro Jahr × Verbrauch pro Spülgang (kWh) × Strompreis (€/kWh). Beispiel: 210 × 0,75 kWh × 0,35 € = 55,13 € pro Jahr."
      },
      {
        question: "Verbraucht ein Geschirrspüler im Standby Strom?",
        answer: "Ja, moderne Geräte mit Touch-Bedienung oder WLAN verbrauchen im Standby ca. 0,5 bis 1,5 Watt (ca. 1,50 bis 4,50 € pro Jahr)."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["waschmaschine", "kuehlschrank", "backofen"],
    relatedCalculators: ["/stromkosten-rechner", "/kwh-rechner", "/strom-sparen"]
  },

  "backofen": {
    slug: "backofen",
    name: "Backofen",
    category: "Küche",
    icon: "🥧",
    typicalWattage: 2300,
    wattageMin: 1800,
    wattageMax: 3500,
    typicalUsageHours: 0.4,
    typicalAnnualKwh: 120,
    annualCostEuro: 42.0,
    usageContext: "Ca. 80 bis 120 Backvorgänge pro Jahr (ca. 2-mal pro Woche für 45–60 Min.)",
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 0.16
    },
    shortDescription: "Ein moderner Backofen verbraucht bei 200 °C Umluft ca. 0,8 bis 1,0 kWh pro Stunde (ca. 28 bis 35 Cent). Bei Ober-/Unterhitze liegt der Verbrauch ca. 15 bis 20 % höher bei 1,0 bis 1,2 kWh pro Stunde.",
    dutyCycleExplanation: "Nach der intensiven Vorheizphase (Heizwiderstände ziehen volle 2.000–3.000 Watt) schaltet das Thermostat die Heizelemente nur noch intervallweise ein, um die Temperatur zu halten (durchschnittlich 800–1.200 W effektive Leistung).",
    measurementTips: "Messe einen typischen Backvorgang (z. B. Pizza oder Kuchen) inklusive Aufheizen und 30–45 Minuten Backzeit.",
    savingAdvice: [
      "Umluft statt Ober-/Unterhitze nutzen: Erlaubt eine um 20 °C niedrigere Backtemperatur und spart rund 20 % Energie.",
      "Auf Vorheizen verzichten: Spart bis zu 20 % Strom, es sei denn, ein Rezept (z. B. Biskuit) verlangt es zwingend.",
      "Backofentür während des Backens geschlossen halten: Jedes Öffnen entlässt Hitze und kostet extra Strom.",
      "Restwärme nutzen: Backofen 5–10 Minuten vor Ende der Garzeit ausschalten."
    ],
    factors: [
      "Betriebsart (Umluft / Heißluft vs. Ober-/Unterhitze vs. Grill)",
      "Backtemperatur (160 °C vs. 200 °C vs. 250 °C)",
      "Vorheizdauer und Öffnen der Backofentür",
      "Isolierung und Türverglasung (Dreifach- vs. Zweifachverglasung)"
    ],
    faq: [
      {
        question: "Was kostet 1 Stunde Backofen bei 200 Grad?",
        answer: "1 Stunde Backofen bei 200 °C Umluft verbraucht ca. 0,85 bis 1,0 kWh Strom, was bei 35 ct/kWh Stromkosten von ca. 30 bis 35 Cent entspricht. Bei 200 °C Ober-/Unterhitze sind es ca. 1,0 bis 1,2 kWh (ca. 35 bis 42 Cent)."
      },
      {
        question: "Wie viel Watt hat ein normaler Backofen?",
        answer: "Die maximale Nennleistung beim Aufheizen liegt zwischen 2.000 und 3.500 Watt. Zum Halten der Temperatur benötigt der Ofen getaktet im Schnitt ca. 800 bis 1.200 Watt."
      },
      {
        question: "Was kostet eine Pizza im Backofen zu backen?",
        answer: "Für eine Tiefkühlpizza (inkl. kurzem Aufheizen und 12–15 Minuten Backzeit bei 200 °C Umluft) werden ca. 0,4 bis 0,5 kWh Strom benötigt. Das kostet ca. 14 bis 18 Cent."
      },
      {
        question: "Wie viel Strom verbraucht ein Backofen im Jahr?",
        answer: "Bei 2 Backvorgängen pro Woche verbraucht ein moderner Ofen ca. 100 bis 140 kWh pro Jahr (ca. 35 bis 49 € bei 35 ct/kWh)."
      },
      {
        question: "Ist Umluft sparsamer als Ober- und Unterhitze?",
        answer: "Ja, Umluft verteilt die Wärme durch einen Ventilator schneller und gleichmäßiger. Dadurch kann die Temperatur um ca. 20 °C niedriger eingestellt werden (z. B. 180 °C statt 200 °C), was rund 20 % Strom spart."
      },
      {
        question: "Wie viel Strom verbraucht die Pyrolyse-Selbstreinigung?",
        answer: "Bei der Pyrolyse heizt der Ofen auf bis zu 500 °C auf. Ein Reinigungszyklus (2 bis 3 Stunden) verbraucht ca. 3 bis 5 kWh Strom und kostet rund 1,05 bis 1,75 €."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für den Backofen?",
        answer: "Bei 8 bis 10 Backvorgängen im Monat betragen die Stromkosten ca. 3,00 bis 4,50 € pro Monat."
      },
      {
        question: "Ist eine Heißluftfritteuse (Airfryer) sparsamer als ein Backofen?",
        answer: "Ja, für kleine bis mittlere Portionen (1–2 Personen) verbraucht ein Airfryer bis zu 50–70 % weniger Strom, da der Garraum viel kleiner ist und nicht vorgeheizt werden muss."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Backofens?",
        answer: "Formel: Durchschnittliche Leistung (in kW) × Backdauer (in Stunden) × Strompreis (€/kWh). Beispiel: 1,0 kW × 0,75 h × 0,35 € = 0,26 € (26 Cent)."
      },
      {
        question: "Verbraucht die Digitaluhr des Backofens viel Strom?",
        answer: "Die Uhr und Elektronik ziehen dauerhaft ca. 1 bis 3 Watt Standby-Leistung, was jährliche Kosten von ca. 3 bis 9 Euro verursacht."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["herd", "wasserkocher", "geschirrspueler"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromkosten-pro-stunde"]
  },

  "herd": {
    slug: "herd",
    name: "Elektroherd & Induktionskochfeld",
    category: "Küche",
    icon: "🍳",
    typicalWattage: 3000,
    wattageMin: 1500,
    wattageMax: 7400,
    typicalUsageHours: 0.5,
    typicalAnnualKwh: 200,
    annualCostEuro: 70.0,
    usageContext: "Tägliches Kochen von Mahlzeiten (ca. 30–45 Minuten pro Tag)",
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 0.27
    },
    shortDescription: "Ein Induktionskochfeld verbraucht beim Kochen ca. 20–30 % weniger Strom als ein herkömmliches Cerankochfeld und bis zu 40 % weniger als alte Gusskochplatten. Bei täglicher Nutzung entstehen jährliche Stromkosten von ca. 50 bis 90 €.",
    dutyCycleExplanation: "Eine Herdplatte zieht auf höchster Stufe 1.500–2.500 W. Nach dem Ankochen wird die Leistungsstufe heruntergeregelt, sodass im Fortkochbetrieb nur ca. 300–800 Watt pro Kochzone benötigt werden.",
    measurementTips: "Bei fest angeschlossenen Starkstromherden (400 V) lässt sich der Verbrauch am einfachsten über den Hauptstromzähler vor und nach einer 30-minütigen Kochsession ermitteln.",
    savingAdvice: [
      "Topfdeckel immer aufsetzen: Spart bis zu 65 % Strom und verkürzt die Kochzeit erheblich.",
      "Topfgröße passend zur Kochzone wählen: Ein zu kleiner Topf auf einer großen Herdplatte verschwendet Wärme.",
      "Wasser im Wasserkocher vorkochen: Geht schneller und spart Energie gegenüber dem Erhitzen im Topf.",
      "Restwärme bei Cerankochfeldern nutzen: 5 Minuten vor Kochende die Herdplatte ausschalten."
    ],
    factors: [
      "Kochfeld-Technologie (Induktion vs. Ceran/Glaskeramik vs. Gusseisen)",
      "Nutzung von passgenauen Töpfen und Deckeln",
      "Kochdauer und gewählte Leistungsstufen"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Elektroherd pro Jahr?",
        answer: "Ein durchschnittlicher Haushalt verbraucht beim Kochen auf dem Herd ca. 180 bis 250 kWh Strom pro Jahr (ca. 63 bis 88 € bei 35 ct/kWh)."
      },
      {
        question: "Was kostet 1 Stunde Kochen auf dem Herd?",
        answer: "Laufen zwei Kochzonen auf mittlerer Stufe (zusammen ca. 1.800 Watt), kostet eine Stunde Kochen ca. 0,63 € (63 Cent bei 35 ct/kWh)."
      },
      {
        question: "Wie viel Watt Leistung hat ein Kochfeld?",
        answer: "Einzelne Kochzonen haben eine Leistung von 1.200 bis 2.500 Watt (mit Booster bis 3.700 Watt). Die Gesamtnennleistung aller 4 Zonen liegt bei 7.000 bis 7.400 Watt."
      },
      {
        question: "Wie viel Strom spart ein Induktionskochfeld im Vergleich zu Ceran?",
        answer: "Induktion erwärmt direkt den Topfboden über elektromagnetische Wechselfelder ohne Wärmeübertragungsverluste. Das spart rund 20 bis 30 % Strom und fast 50 % der Aufheizzeit."
      },
      {
        question: "Was kostet Nudelkochen an Strom?",
        answer: "Das Erhitzen von 2 Litern Wasser mit Deckel und 10 Minuten Kochen verbraucht ca. 0,35 kWh, was Stromkosten von rund 12 Cent entspricht."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten fürs Kochen?",
        answer: "Bei täglichem Kochen liegen die Stromkosten für den Herd bei ca. 5 bis 8 Euro pro Monat."
      },
      {
        question: "Lohnt sich ein Schnellkochtopf zum Stromsparen?",
        answer: "Ja, bei Schmorgerichten, Kartoffeln oder Hülsenfrüchten verkürzt ein Schnellkochtopf die Garzeit um bis zu 70 % und spart dabei bis zu 50 % Strom."
      },
      {
        question: "Sollte man Wasser auf dem Herd oder im Wasserkocher erhitzen?",
        answer: "Immer im Wasserkocher: Der Wirkungsgrad liegt bei über 85 %, während auf dem Ceranfeld viel Wärme an Topf und Umgebung verloren geht."
      },
      {
        question: "Wie berechne ich die Stromkosten für ein Gericht?",
        answer: "Formel: Leistung der Zonen (kW) × Kochdauer (h) × Strompreis (€/kWh). Beispiel: 1,5 kW × 0,5 h × 0,35 € = 0,26 € (26 Cent)."
      },
      {
        question: "Verbraucht ein Induktionskochfeld Strom im Standby?",
        answer: "Ja, die Touch-Sensoren und Elektronik ziehen dauerhaft ca. 1 bis 2 Watt (rund 3 bis 6 € pro Jahr)."
      }
    ],
    sourceIds: ["bdew", "stromspiegel", "uba"],
    relatedDevices: ["backofen", "wasserkocher", "geschirrspueler"],
    relatedCalculators: ["/stromkosten-rechner", "/kwh-rechner", "/watt-rechner"]
  },

  "wasserkocher": {
    slug: "wasserkocher",
    name: "Wasserkocher",
    category: "Küche",
    icon: "🫖",
    typicalWattage: 2200,
    wattageMin: 1800,
    wattageMax: 3000,
    typicalUsageHours: 0.1,
    typicalAnnualKwh: 60,
    annualCostEuro: 21.0,
    usageContext: "Ca. 3–5 Kochvorgänge täglich (ca. 6–10 Minuten Gesamtlaufzeit pro Tag)",
    calculationDefaults: {
      watt: 2200,
      hoursPerDay: 0.08
    },
    shortDescription: "Ein 2.200-Watt-Wasserkocher benötigt ca. 3 Minuten, um 1 Liter Wasser zum Kochen zu bringen. Das verbraucht ca. 0,11 kWh Strom und kostet nur rund 3,8 Cent pro Liter.",
    dutyCycleExplanation: "Der Wasserkocher arbeitet während des Betriebs unter Volllast mit voller Nennleistung (1.800–2.400 Watt) und schaltet nach Erreichen des Siedepunkts per Dampfsensor automatisch ab.",
    measurementTips: "Messe den Verbrauch von genau 1 Liter kaltem Leitungswasser (ca. 15 °C) bis zur automatischen Abschaltung.",
    savingAdvice: [
      "Nur die tatsächlich benötigte Wassermenge erhitzen: 1 Liter statt 0,5 Liter zu kochen verdoppelt den Stromverbrauch jedes Mal.",
      "Regelmäßig entkalken: Eine Kalkschicht auf dem Heizelement wirkt wie ein Isolator und verlängert die Kochzeit spürbar.",
      "Wasserkocher mit Temperaturwahl nutzen (z. B. 70–80 °C für grünen Tee statt 100 °C)."
    ],
    factors: [
      "Erhitzte Wassermenge",
      "Ausgangstemperatur des Wassers",
      "Verkalkungsgrad des Heizelements",
      "Gehäuseisolierung"
    ],
    faq: [
      {
        question: "Was kostet 1 Liter Wasser kochen im Wasserkocher?",
        answer: "1 Liter Wasser von 15 °C auf 100 °C zu erhitzen benötigt ca. 0,10 bis 0,12 kWh Strom. Bei einem Strompreis von 35 ct/kWh kostet das ca. 3,5 bis 4,2 Cent."
      },
      {
        question: "Wie viel Watt Leistung hat ein Wasserkocher?",
        answer: "Handelsübliche Wasserkocher haben eine Leistung zwischen 1.800 und 2.400 Watt (Express-Modelle bis zu 3.000 Watt)."
      },
      {
        question: "Ist ein Wasserkocher mit hoher Wattzahl teurer im Stromverbrauch?",
        answer: "Nein. Ein 3.000-Watt-Gerät zieht zwar mehr Leistung, bringt das Wasser aber entsprechend schneller zum Kochen. Die benötigte Energie (kWh) für 1 Liter Wasser ist bei beiden nahezu identisch."
      },
      {
        question: "Wie viel Strom verbraucht ein Wasserkocher im Jahr?",
        answer: "Bei 3 bis 4 Kochvorgängen pro Tag verbraucht ein Wasserkocher ca. 50 bis 75 kWh pro Jahr (ca. 17,50 bis 26,25 € bei 35 ct/kWh)."
      },
      {
        question: "Was ist sparsamer: Wasserkocher oder Herd?",
        answer: "Der Wasserkocher ist ca. 30 bis 50 % sparsamer als ein Cerankochfeld und ca. 15 % sparsamer als ein Induktionsherd, weil das Heizelement direkt im Wasser liegt."
      },
      {
        question: "Verbraucht ein Wasserkocher im Standby Strom?",
        answer: "Einfache Wasserkocher mit Kippschalter verbrauchen 0 Watt im Standby. Modelle mit digitaler Temperaturanzeige oder Warmhaltefunktion ziehen ca. 0,5 bis 1 Watt."
      },
      {
        question: "Wie viel Strom spart regelmäßiges Entkalken?",
        answer: "Eine dicke Kalkschicht kann die Kochzeit um 10 bis 20 % verlängern und entsprechend mehr Strom kosten. Regelmäßiges Entkalken spart Energie und schont das Gerät."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für den Wasserkocher?",
        answer: "Bei täglicher Nutzung liegen die Kosten bei ca. 1,50 bis 2,20 € im Monat."
      },
      {
        question: "Wie berechne ich die Stromkosten pro Kochvorgang?",
        answer: "Formel: Leistung (kW) × Kochzeit (h) × Strompreis (€/kWh). Beispiel: 2,2 kW × 0,05 h (3 Min.) × 0,35 € = 0,0385 € (ca. 3,9 Cent)."
      },
      {
        question: "Lohnt sich die Warmhaltefunktion beim Wasserkocher?",
        answer: "Die Warmhaltefunktion verbraucht kontinuierlich 50–100 Watt. Es ist meist sparsamer, Wasser bei Bedarf frisch aufzukochen."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["kaffeemaschine", "herd", "backofen"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromkosten-pro-stunde"]
  },

  "kaffeemaschine": {
    slug: "kaffeemaschine",
    name: "Kaffeemaschine & Kaffeevollautomat",
    category: "Küche",
    icon: "☕",
    typicalWattage: 1450,
    wattageMin: 800,
    wattageMax: 1850,
    typicalUsageHours: 0.3,
    typicalAnnualKwh: 110,
    annualCostEuro: 38.5,
    usageContext: "Zubereitung von 4–6 Tassen Kaffee täglich inkl. Standby und Spülzyklen",
    calculationDefaults: {
      watt: 1400,
      hoursPerDay: 0.22
    },
    shortDescription: "Ein Kaffeevollautomat benötigt pro Tasse Kaffee ca. 0,02 bis 0,03 kWh (ca. 0,7 bis 1,0 Cent). Werden täglich 5 Tassen bezogen und die automatische Abschaltung genutzt, liegen die Jahresstromkosten bei ca. 30 bis 45 €.",
    dutyCycleExplanation: "Beim Aufheizen des Thermoblocks zieht die Maschine für ca. 45–90 Sekunden die volle Nennleistung (1.400–1.800 Watt). Im Bereitschaftsbetrieb sinkt die Leistungsaufnahme auf 2–5 Watt.",
    measurementTips: "Messe den Stromverbrauch über 24 Stunden inklusive morgendlichem Einschalten, Tassenbezug und automatischer Abschaltung.",
    savingAdvice: [
      "Automatische Abschaltung (Auto-Off) auf 15 oder 30 Minuten einstellen: Verhindert unnötiges Warmhalten des Thermoblocks.",
      "Filterkaffeemaschine: Kaffee sofort in eine Thermoskanne umfüllen, statt die stromfressende Warmhalteplatte laufen zu lassen.",
      "Regelmäßig entkalken für schnelle Aufheizzeiten."
    ],
    factors: [
      "Geräteart (Vollautomat vs. Siebträger vs. Kapselmaschine vs. Filterkaffeemaschine)",
      "Standby- und Warmhaltedauer",
      "Anzahl der zubereiteten Tassen pro Tag"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht eine Kaffeemaschine im Jahr?",
        answer: "Ein Kaffeevollautomat verbraucht ca. 90 bis 130 kWh pro Jahr (ca. 31,50 bis 45,50 € bei 35 ct/kWh). Eine klassische Filterkaffeemaschine benötigt ca. 40 bis 70 kWh jährlich."
      },
      {
        question: "Was kostet 1 Tasse Kaffee an Strom?",
        answer: "Der reine Stromverbrauch für eine Tasse Kaffee liegt bei ca. 0,025 kWh, was Stromkosten von unter 1 Cent (ca. 0,9 Cent bei 35 ct/kWh) entspricht."
      },
      {
        question: "Wie viel Watt Leistung hat eine Kaffeemaschine?",
        answer: "Kaffeevollautomaten und Siebträgermaschinen haben eine Spitzenleistung von 1.300 bis 1.850 Watt. Filterkaffeemaschinen liegen bei 800 bis 1.100 Watt."
      },
      {
        question: "Welche Kaffeemaschine verbraucht am meisten Strom?",
        answer: "Siebträgermaschinen mit großem Edelstahl-Heizkessel verbrauchen am meisten Strom, da sie oft 20–30 Minuten Vorheizzeit benötigen und viel Wärme abstrahlen."
      },
      {
        question: "Was kostet das Warmhalten von Filterkaffee?",
        answer: "Die Warmhalteplatte einer Kaffeemaschine verbraucht ca. 50 bis 80 Watt. Läuft sie 2 Stunden täglich, kostet das ca. 12 bis 20 Euro pro Jahr."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Kaffeevollautomaten?",
        answer: "Bei normalem Familien- oder Bürogebrauch liegen die monatlichen Stromkosten bei ca. 2,50 bis 4,00 €."
      },
      {
        question: "Verbraucht ein Kaffeevollautomat im Standby Strom?",
        answer: "Ja, im Standby-Modus (Uhr, Bereitschaft) ziehen moderne Geräte ca. 0,5 bis 2 Watt (rund 1,50 bis 6 € pro Jahr)."
      },
      {
        question: "Wie berechne ich die Stromkosten meiner Kaffeemaschine?",
        answer: "Formel: (Aufheiz- und Bezugsenergie in kWh + Standby-Energie in kWh) × Strompreis (€/kWh). Bei 110 kWh/Jahr × 0,35 € = 38,50 € pro Jahr."
      },
      {
        question: "Spart eine Kapsel- oder Padmaschine Strom?",
        answer: "Kapsel- und Padmaschinen heizen sehr schnell auf und verbrauchen pro Tasse sehr wenig Strom (ca. 0,02 kWh), sind jedoch bei den Kapselpreisen und der Müllbilanz teurer."
      },
      {
        question: "Lohnt sich das Ausschalten am Netzschalter?",
        answer: "Ja, das vollständige Ausschalten nach Gebrauch verhindert Phantom-Standby-Verbräuche und spart einige Euro im Jahr."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["wasserkocher", "kuehlschrank", "backofen"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/strompreis"]
  },

  "fernseher": {
    slug: "fernseher",
    name: "Fernseher (TV)",
    category: "Unterhaltung & Büro",
    icon: "📺",
    typicalWattage: 100,
    wattageMin: 45,
    wattageMax: 260,
    typicalUsageHours: 4.0,
    typicalAnnualKwh: 150,
    annualCostEuro: 52.5,
    usageContext: "Ca. 4 Stunden täglicher TV-Betrieb",
    calculationDefaults: {
      watt: 100,
      hoursPerDay: 4.0
    },
    shortDescription: "Ein moderner 55-Zoll-LED-Fernseher verbraucht im Schnitt 70 bis 110 Watt (ca. 2,5 bis 3,9 Cent pro Stunde). Bei 4 Stunden Fernsehen am Tag entstehen jährliche Stromkosten von ca. 35 bis 56 €.",
    dutyCycleExplanation: "Die Leistungsaufnahme bleibt während des Betriebs relativ konstant, schwankt jedoch je nach Bildhelligkeit und HDR-Inhalten (High Dynamic Range) um bis zu 40 %.",
    measurementTips: "Messe den Stromverbrauch während einer typischen Filmszene bei normaler Raumbeleuchtung und aktivierter Helligkeitsanpassung.",
    savingAdvice: [
      "Öko-Modus (Eco-Mode) und automatischen Helligkeitssensor aktivieren: Passt die Hintergrundbeleuchtung an das Raumlicht an und spart 20–40 % Strom.",
      "HDR-Helligkeit bei normalem Fernsehen reduzieren: HDR verdoppelt bei vielen OLED- und QLED-Fernsehern die Spitzenleistungsaufnahme.",
      "Standby mit schaltbarer Steckdosenleiste beenden (außer bei OLED-TVs während des Pixel-Refresher-Zyklus)."
    ],
    factors: [
      "Bildschirmdiagonale (z. B. 43 Zoll vs. 55 Zoll vs. 75 Zoll)",
      "Display-Technologie (OLED vs. QLED vs. Standard-LED)",
      "Bildhelligkeit und HDR-Wiedergabe",
      "Lautstärke und angeschlossene Soundbars"
    ],
    faq: [
      {
        question: "Was kostet 1 Std. Fernsehen an Strom?",
        answer: "1 Stunde Fernsehen kostet bei einem 55-Zoll-LED-TV (ca. 80–100 Watt) rund 2,8 bis 3,5 Cent (bei 35 ct/kWh). Bei einem sehr großen 75-Zoll-TV mit 180 Watt sind es ca. 6,3 Cent pro Stunde."
      },
      {
        question: "Was kosten 10 Stunden Fernsehen am Tag?",
        answer: "10 Stunden Fernsehen mit einem 100-Watt-Gerät verbrauchen genau 1,0 kWh Strom. Bei 35 ct/kWh kostet das 0,35 € (35 Cent) pro Tag bzw. rund 10,50 € im Monat (ca. 128 € pro Jahr)."
      },
      {
        question: "Was kostet es, wenn der TV den ganzen Tag läuft?",
        answer: "Läuft ein 100-Watt-Fernseher 24 Stunden durch, werden 2,4 kWh verbraucht, was tägliche Stromkosten von ca. 0,84 € (ca. 25 € im Monat) verursacht."
      },
      {
        question: "Wie viel Watt verbraucht ein Fernseher?",
        answer: "Ein 43-Zoll-TV verbraucht ca. 50–70 W, ein 55-Zoll-Gerät ca. 80–120 W und ein 65- bis 75-Zoll-TV ca. 130–220 W."
      },
      {
        question: "Verbraucht ein OLED-Fernseher mehr Strom als LCD/LED?",
        answer: "OLEDs verbrauchen bei dunklen Filmszenen sehr wenig Strom, da schwarze Pixel komplett ausgeschaltet sind. Bei vollflächig hellen Bildern und HDR-Wiedergabe ist der Verbrauch jedoch ähnlich hoch oder leicht höher als bei QLED/LED."
      },
      {
        question: "Wie viel Strom zieht ein Fernseher im Standby?",
        answer: "Moderne Fernseher dürfen laut EU-Verordnung im Standby maximal 0,5 Watt verbrauchen (unter 1,50 € pro Jahr). Ist jedoch Schnellstart (Fast Boot) oder Sprachsteuerung aktiv, kann der Standby-Verbrauch auf 5 bis 15 Watt steigen."
      },
      {
        question: "Warum sollte man OLED-Fernseher nicht direkt vom Strom trennen?",
        answer: "OLED-Geräte führen nach dem Ausschalten im Standby automatisch wichtige Pixel-Reinigungsroutinen (Pixel Refresher) durch, um Burn-In zu verhindern. Sie sollten daher nicht sofort per Steckerleiste stromlos geschaltet werden."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für den Fernseher?",
        answer: "Bei 4 Stunden TV-Konsum pro Tag betragen die monatlichen Stromkosten ca. 3,50 bis 5,00 €."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Fernsehers?",
        answer: "Formel: (Leistung in Watt × Stunden pro Tag × 365 ÷ 1.000) × Strompreis (€/kWh). Beispiel: 100 W × 4 h × 365 ÷ 1.000 × 0,35 € = 51,10 € pro Jahr."
      },
      {
        question: "Welchen Einfluss hat die Bildschirmgröße auf den Stromverbrauch?",
        answer: "Die Bildfläche wächst quadratisch: Ein 75-Zoll-Fernseher hat fast die dreifache Fläche eines 43-Zoll-Geräts und verbraucht typischerweise rund 2,5- bis 3-mal so viel Strom."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["gaming-pc", "ps5", "xbox", "monitor"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromkosten-pro-stunde"]
  },

  "gaming-pc": {
    slug: "gaming-pc",
    name: "Gaming-PC",
    category: "Unterhaltung & Büro",
    icon: "🎮",
    typicalWattage: 350,
    wattageMin: 180,
    wattageMax: 650,
    typicalUsageHours: 3.0,
    typicalAnnualKwh: 380,
    annualCostEuro: 133.0,
    usageContext: "Ca. 3 Stunden tägliches Gaming unter Last (plus Desktop-Office)",
    calculationDefaults: {
      watt: 350,
      hoursPerDay: 3.0
    },
    shortDescription: "Ein moderner Gaming-PC (z. B. mit RTX 4070/4080) zieht unter Volllast ca. 300 bis 500 Watt (ca. 11 bis 18 Cent pro Stunde). Bei 3 Stunden täglichem Zocken entstehen Jahresstromkosten von ca. 115 bis 190 €.",
    dutyCycleExplanation: "Im normalen Windows-Desktop-Betrieb (Idle / Office) verbraucht ein Gaming-PC nur 45 bis 70 Watt. Erst beim Starten anspruchsvoller 3D-Spiele schalten Grafikkarte (GPU) und Prozessor (CPU) auf volle Leistung (300–550 W).",
    measurementTips: "Messe den Verbrauch während einer intensiven 30-minütigen Spielsession mit offener Framerate.",
    savingAdvice: [
      "FPS-Begrenzung (Framerate Cap) im Grafikkartentreiber einstellen: Auf 60, 120 oder 144 FPS limitieren, damit die GPU nicht sinnlos 200+ FPS berechnet und 100 W mehr zieht.",
      "Undervolting bei GPU und CPU durchführen: Reduziert den Stromverbrauch um 15–30 % bei praktisch identischer Spieleleistung.",
      "Netzteil mit hoher Effizienz wählen (80 PLUS Gold oder Platinum)."
    ],
    factors: [
      "Grafikkarte (GPU) und Prozessor (CPU)",
      "Auflösung und Grafikeinstellungen (4K Ultra vs. 1080p)",
      "FPS-Limitierung vs. unbegrenzte Bildwiederholrate",
      "Lüfter- und RGB-Beleuchtung"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Gaming-PC pro Stunde?",
        answer: "Unter Spielelast verbraucht ein Mittelklasse- bis High-End-Gaming-PC ca. 250 bis 450 Watt (ca. 0,25 bis 0,45 kWh pro Stunde). Bei 35 ct/kWh entspricht das Stromkosten von rund 9 bis 16 Cent pro Stunde."
      },
      {
        question: "Was kostet 4 Stunden Gaming am Tag an Strom?",
        answer: "4 Stunden Gaming bei 350 Watt verbrauchen 1,4 kWh. Das kostet ca. 0,49 € am Tag bzw. rund 14,70 € im Monat (ca. 179 € pro Jahr)."
      },
      {
        question: "Wie viel Watt Leistung hat ein Gaming-PC?",
        answer: "Das verbaute Netzteil hat meist 650 bis 1.000 Watt. Der reale Verbrauch liegt im Desktop-Leerlauf bei 50–70 W und beim Spielen typischerweise bei 280–480 W."
      },
      {
        question: "Verbraucht ein Gaming-PC im Desktop-Betrieb viel Strom?",
        answer: "Nein, moderne Grafikkarten und Prozessoren takten im Leerlauf extrem weit herunter und verbrauchen beim Surfen oder Videoschauen nur ca. 45 bis 75 Watt."
      },
      {
        question: "Wie viel Strom spart FPS-Limiting beim Gaming-PC?",
        answer: "Begrenzt man die Bildrate auf die Bildwiederholfrequenz des Monitors (z. B. 120 FPS statt 220 FPS), sinkt die GPU-Auslastung und spart oft 80 bis 150 Watt Leistungsaufnahme."
      },
      {
        question: "Wie viel Strom verbraucht das gesamte Gaming-Setup?",
        answer: "Mit Gaming-Monitor (35–60 W), Soundanlage (20 W) und PC (350 W) liegt das Gesamtsystem unter Last bei ca. 400 bis 450 Watt (ca. 14 bis 16 Cent pro Stunde)."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Gaming-PC?",
        answer: "Bei 3 Stunden täglicher Spielzeit betragen die monatlichen Stromkosten ca. 10 bis 16 Euro."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Gaming-PCs?",
        answer: "Formel: Durchschnittliche Wattzahl × Spielstunden pro Tag × Tage × Strompreis ÷ 1.000. Beispiel: 350 W × 3 h × 365 ÷ 1.000 × 0,35 € = 134,23 € pro Jahr."
      },
      {
        question: "Ist ein Gaming-Laptop sparsamer als ein Desktop-Gaming-PC?",
        answer: "Ja, Gaming-Laptops sind auf maximale Energieeffizienz optimiert und ziehen unter Last meist nur 120 bis 230 Watt (rund 50 % weniger als ein Desktop-PC)."
      },
      {
        question: "Verbraucht ein Gaming-PC im Standby oder Ruhezustand Strom?",
        answer: "Im Windows-Ruhezustand verbraucht der PC unter 1 Watt, im 'Energie sparen'-Modus ca. 2 bis 4 Watt."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["pc", "monitor", "laptop", "ps5", "xbox"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromkosten-pro-stunde"]
  },

  "pc": {
    slug: "pc",
    name: "Office-PC & Desktop-Computer",
    category: "Unterhaltung & Büro",
    icon: "🖥️",
    typicalWattage: 70,
    wattageMin: 35,
    wattageMax: 140,
    typicalUsageHours: 8.0,
    typicalAnnualKwh: 145,
    annualCostEuro: 50.75,
    usageContext: "Ca. 8 Stunden tägliche Büronutzung / Homeoffice an Werktagen",
    calculationDefaults: {
      watt: 65,
      hoursPerDay: 6.0
    },
    shortDescription: "Ein normaler Büro-Desktop-PC benötigt im Office- und Surfbetrieb ca. 45 bis 80 Watt (ca. 1,6 bis 2,8 Cent pro Stunde). Bei 8 Stunden täglicher Homeoffice-Nutzung entstehen jährliche Stromkosten von ca. 40 bis 70 €.",
    dutyCycleExplanation: "Moderne Büro-PCs verfügen über integrierte Grafikchips und effiziente Prozessoren, die bei Schreibarbeiten und Tabellenkalkulation nur wenig Energie aufnehmen.",
    measurementTips: "Messe den Verbrauch über einen typischen 8-stündigen Arbeitstag inklusive Pausen.",
    savingAdvice: [
      "Energiesparplan 'Ausbalanciert' in Windows aktivieren.",
      "Ruhezustand nach 15 Minuten Inaktivität einstellen.",
      "Schaltbare Steckdosenleiste für PC, Monitor und Drucker nutzen."
    ],
    factors: [
      "Prozessorgeneration und Effizienzklasse des Netzteils",
      "Art der Programme (Word/Excel vs. Videokonferenzen vs. CAD)",
      "Anzahl angeschlossener USB-Geräte und Monitore"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Büro-PC am Tag?",
        answer: "Bei 8 Stunden Betrieb mit durchschnittlich 65 Watt verbraucht ein Office-PC rund 0,52 kWh pro Arbeitstag, was ca. 18 Cent entspricht."
      },
      {
        question: "Was kostet 1 Stunde Arbeiten am PC an Strom?",
        answer: "Ein Office-PC mit 65 Watt verursacht Stromkosten von ca. 2,3 Cent pro Stunde (bei 35 ct/kWh)."
      },
      {
        question: "Wie viel Strom verbraucht ein Homeoffice-Arbeitsplatz insgesamt?",
        answer: "Mit PC (65 W), 2 Monitoren (50 W), Laptop-Dockingstation (15 W) und Lampe (10 W) liegt die Gesamtleistung bei ca. 140 Watt (ca. 5 Cent pro Stunde / ca. 40 Cent pro 8-Stunden-Arbeitstag)."
      },
      {
        question: "Wie viel Watt hat ein normaler PC?",
        answer: "Ein Office-PC zieht im Schnitt 40 bis 80 Watt aus der Steckdose."
      },
      {
        question: "Wie viel Strom spart ein Laptop gegenüber einem Desktop-PC?",
        answer: "Ein Laptop benötigt im Schnitt nur 20 bis 45 Watt und spart somit rund 50 bis 70 % Strom gegenüber einem klassischen Desktop-PC."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Büro-PC?",
        answer: "Bei 20 Arbeitstagen à 8 Stunden liegen die monatlichen Stromkosten bei ca. 3,50 bis 5,50 €."
      },
      {
        question: "Verbraucht der PC im Standby Strom?",
        answer: "Im Windows-Ruhezustand zieht der PC unter 1 Watt, im Energiesparmodus ca. 1,5 bis 3 Watt."
      },
      {
        question: "Wie berechne ich die jährlichen Stromkosten meines PCs?",
        answer: "Formel: Leistung (W) × Stunden/Tag × Arbeitstage/Jahr ÷ 1.000 × Strompreis. Beispiel: 65 W × 8 h × 220 Tage ÷ 1.000 × 0,35 € = 40,04 €."
      },
      {
        question: "Erhöht Videokonferenz (Zoom, Teams) den Stromverbrauch spürbar?",
        answer: "Ja, durch Webcam-Kompression und Videodekodierung steigt die CPU-Auslastung, wodurch der Verbrauch um 15–30 Watt ansteigen kann."
      },
      {
        question: "Welches Netzteil ist am sparsamsten?",
        answer: "Ein Netzteil mit 80 PLUS Gold oder Platinum-Zertifizierung arbeitet bei 20–50 % Last mit einem Wirkungsgrad von über 90 % und erzeugt kaum Abwärme."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["laptop", "monitor", "gaming-pc", "server"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/strompreis"]
  },

  "laptop": {
    slug: "laptop",
    name: "Laptop & Notebook",
    category: "Unterhaltung & Büro",
    icon: "💻",
    typicalWattage: 35,
    wattageMin: 15,
    wattageMax: 90,
    typicalUsageHours: 6.0,
    typicalAnnualKwh: 75,
    annualCostEuro: 26.25,
    usageContext: "Tägliches Arbeiten, Surfen und Streaming (ca. 6 Stunden täglich)",
    calculationDefaults: {
      watt: 35,
      hoursPerDay: 6.0
    },
    shortDescription: "Ein modernes Notebook verbraucht im normalen Office-Betrieb lediglich 20 bis 45 Watt (ca. 0,7 bis 1,6 Cent pro Stunde). Es ist eines der sparsamsten Arbeitsgeräte im Haushalt mit Jahresstromkosten von nur ca. 20 bis 35 €.",
    dutyCycleExplanation: "Laptops sind auf Akkulaufzeit und maximale Energieeffizienz getrimmt. Displaybeleuchtung und Prozessor regeln ihren Energiebedarf in Millisekunden nach unten.",
    measurementTips: "Messe den Verbrauch des Netzteils an der Steckdose bei vollgeladenem Akku während normaler Office-Arbeit.",
    savingAdvice: [
      "Display-Helligkeit auf angenehme 70 % stellen: Das spart bis zu 30 % der gesamten Laptop-Energie.",
      "Netzteil nach dem Laden aus der Steckdose ziehen.",
      "Ungenutzte Hintergrundprogramme und Browser-Tabs schließen."
    ],
    factors: [
      "Displaygröße und Helligkeit",
      "Prozessorarchitektur (z. B. Apple Silicon ARM vs. x86)",
      "Rechenlast (Office vs. Videoschnitt)"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Laptop pro Stunde?",
        answer: "Ein moderner Office-Laptop verbraucht ca. 20 bis 40 Watt (0,02 bis 0,04 kWh/h). Das entspricht Stromkosten von ca. 0,7 bis 1,4 Cent pro Stunde bei 35 ct/kWh."
      },
      {
        question: "Was kostet es, einen Laptop aufzuladen?",
        answer: "Eine vollständige Akkuladung eines typischen 50- bis 70-Wh-Laptopakkus benötigt ca. 0,06 bis 0,08 kWh Strom (inkl. Ladeverlusten) und kostet rund 2 bis 3 Cent."
      },
      {
        question: "Wie viel Strom verbraucht ein Laptop im Jahr?",
        answer: "Bei 6 Stunden täglicher Nutzung verbraucht ein Laptop ca. 60 bis 90 kWh im Jahr (ca. 21 bis 31,50 € bei 35 ct/kWh)."
      },
      {
        question: "Wie viel Watt Leistung hat ein Laptop-Netzteil?",
        answer: "Office-Netzteile liefern 45 bis 65 Watt, stärkere Arbeitslaptops 90 bis 140 Watt. Die maximale Nennleistung wird jedoch nur beim gleichzeitigen Laden des leeren Akkus unter Volllast erreicht."
      },
      {
        question: "Verbraucht das Laptop-Netzteil Strom, wenn der Laptop nicht angeschlossen ist?",
        answer: "Moderne Netzteile ziehen im Leerlauf unter 0,1 bis 0,3 Watt (unter 1 Euro im Jahr)."
      },
      {
        question: "Ist ein MacBook sparsamer als ein Windows-Laptop?",
        answer: "MacBooks mit M-Prozessoren (ARM-Architektur) arbeiten extrem effizient und verbrauchen bei leichten Office-Tätigkeiten oft nur 10 bis 20 Watt."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Laptop?",
        answer: "Die monatlichen Stromkosten liegen bei intensiver Nutzung bei ca. 1,80 bis 3,00 €."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Laptops?",
        answer: "Formel: Leistung (W) × Stunden/Tag × 365 ÷ 1.000 × Strompreis (€/kWh). Beispiel: 35 W × 6 h × 365 ÷ 1.000 × 0,35 € = 26,83 € pro Jahr."
      },
      {
        question: "Schadet dauerhafter Netzbetrieb dem Stromverbrauch?",
        answer: "Sobald der Akku voll ist, versorgt das Netzteil den Laptop direkt. Es entstehen keine zusätzlichen Stromkosten, moderne Laderegler verhindern Überladen."
      },
      {
        question: "Wie viel Strom verbraucht der Ruhezustand beim Laptop?",
        answer: "Im Standby (Sleep) verbraucht ein Laptop ca. 0,3 bis 0,8 Watt, im echten Ruhezustand (Hibernate) nahezu 0 Watt."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["pc", "monitor", "gaming-pc"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/strompreis"]
  },

  "monitor": {
    slug: "monitor",
    name: "PC-Monitor & Bildschirm",
    category: "Unterhaltung & Büro",
    icon: "🖥️",
    typicalWattage: 30,
    wattageMin: 18,
    wattageMax: 80,
    typicalUsageHours: 8.0,
    typicalAnnualKwh: 65,
    annualCostEuro: 22.75,
    usageContext: "Ca. 8 Stunden tägliche Büronutzung im Homeoffice",
    calculationDefaults: {
      watt: 30,
      hoursPerDay: 6.0
    },
    shortDescription: "Ein moderner 24- bis 27-Zoll-Monitor verbraucht ca. 20 bis 35 Watt (ca. 0,7 bis 1,2 Cent pro Stunde). Bei 8 Stunden Homeoffice pro Tag entstehen Stromkosten von ca. 18 bis 30 € im Jahr.",
    dutyCycleExplanation: "Die Leistungsaufnahme wird primär durch die LED-Hintergrundbeleuchtung bestimmt und bleibt während des Betriebs weitgehend konstant.",
    measurementTips: "Messe den Verbrauch bei deiner üblichen Helligkeitseinstellung (z. B. 60 % Helligkeit).",
    savingAdvice: [
      "Helligkeit von 100 % auf 50–70 % drosseln: Spart rund 30 % Strom und schont die Augen.",
      "Automatischen Standby nach 10 Minuten ohne PC-Signal nutzen.",
      "Am Arbeitsende per Hauptschalter ausschalten."
    ],
    factors: [
      "Bildschirmdiagonale (24 Zoll vs. 27 Zoll vs. 34 Zoll Ultrawide)",
      "Panel-Technologie (IPS vs. VA vs. OLED)",
      "Bildwiederholfrequenz (60 Hz vs. 144 Hz vs. 240 Hz)",
      "Helligkeitseinstellung in Nits"
    ],
    faq: [
      {
        question: "Wie viel Watt verbraucht ein Monitor?",
        answer: "Ein 24-Zoll-Monitor verbraucht ca. 18–25 W, ein 27-Zoll-Bildschirm ca. 25–35 W und ein 34-Zoll-Ultrawide- oder 4K-Monitor ca. 45–75 W."
      },
      {
        question: "Was kostet 1 Stunde Monitor-Betrieb?",
        answer: "Bei 30 Watt Nennleistung kostet eine Stunde Betrieb ca. 1,05 Cent (bei 35 ct/kWh)."
      },
      {
        question: "Wie viel Strom verbrauchen 2 Monitore im Homeoffice?",
        answer: "Zwei 27-Zoll-Monitore (zusammen ca. 60 Watt) verbrauchen bei 8 Stunden Arbeit ca. 0,48 kWh pro Tag, was rund 17 Cent pro Tag bzw. ca. 37 € im Jahr (bei 220 Arbeitstagen) entspricht."
      },
      {
        question: "Wie viel Strom zieht ein Monitor im Standby?",
        answer: "Im Ruhezustand (schwarzer Bildschirm / kein Signal) verbrauchen moderne Monitore unter 0,5 Watt (unter 1,50 € pro Jahr)."
      },
      {
        question: "Verbrauchen 144-Hz- oder 240-Hz-Gaming-Monitore mehr Strom?",
        answer: "Ja, höhere Bildwiederholraten und G-Sync/FreeSync-Module erhöhen die Leistungsaufnahme um ca. 10 bis 25 Watt gegenüber Standard-60-Hz-Büromonitoren."
      },
      {
        question: "Wie hoch sind die jährlichen Stromkosten für einen Monitor?",
        answer: "Bei 8 Stunden täglicher Nutzung an 250 Tagen im Jahr betragen die Stromkosten ca. 18 bis 28 € pro Jahr."
      },
      {
        question: "Lohnt sich das Abschalten am Netzschalter?",
        answer: "Ja, insbesondere wenn am Monitor noch ein integrierter USB-Hub oder Lautsprecher betrieben werden."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Monitors?",
        answer: "Formel: Leistung (W) × Stunden/Tag × Tage/Jahr ÷ 1.000 × Strompreis. Beispiel: 30 W × 8 h × 250 ÷ 1.000 × 0,35 € = 21,00 € pro Jahr."
      },
      {
        question: "Spart ein OLED-Monitor Strom bei dunklen Designs?",
        answer: "Ja, bei OLEDs schalten schwarze Pixel komplett ab. Ein dunkles Farbschema (Dark Mode) spart bei OLED-Bildschirmen bis zu 40 % Strom."
      },
      {
        question: "Wie viel Strom spart das Dimmen der Helligkeit?",
        answer: "Das Absenken der Helligkeit von 100 % auf 50 % senkt die Leistungsaufnahme der Hintergrundbeleuchtung um ca. 25 bis 35 %."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["pc", "laptop", "gaming-pc"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/kwh-rechner"]
  },

  "ps5": {
    slug: "ps5",
    name: "PlayStation 5 (PS5)",
    category: "Unterhaltung & Büro",
    icon: "🎮",
    typicalWattage: 200,
    wattageMin: 150,
    wattageMax: 230,
    typicalUsageHours: 2.5,
    typicalAnnualKwh: 180,
    annualCostEuro: 63.0,
    usageContext: "Ca. 2,5 Stunden tägliches Gaming",
    calculationDefaults: {
      watt: 200,
      hoursPerDay: 2.5
    },
    shortDescription: "Die PlayStation 5 verbraucht beim Spielen anspruchsvoller PS5-Titel ca. 180 bis 220 Watt (ca. 6,3 bis 7,7 Cent pro Stunde). Bei 2,5 Stunden Zocken am Tag entstehen jährliche Stromkosten von ca. 55 bis 75 €.",
    dutyCycleExplanation: "Im Hauptmenü verbraucht die PS5 ca. 45–50 Watt, beim Streaming von Netflix ca. 30 Watt und bei grafikintensiven Spielen 180–220 Watt.",
    measurementTips: "Messe den Verbrauch während einer intensiven Spielsession eines grafisch aufwendigen PS5-Spiels.",
    savingAdvice: [
      "Ruhemodus-Einstellungen optimieren: USB-Stromversorgung im Ruhemodus nach 3 Stunden abschalten.",
      "Streaming-Apps lieber über den Fernseher nutzen: Der TV verbraucht beim Streamen deutlich weniger als die PS5 als Zuspieler.",
      "Automatische Abschaltung bei Inaktivität auf 20 Minuten stellen."
    ],
    factors: [
      "Gespielter Titel (PS5-Grafik-Hit vs. PS4-Klassiker vs. Indie-Game)",
      "Auflösung und Framerate (4K 60 FPS vs. 120 Hz Modus)",
      "Ruhemodus-Features (Download im Hintergrund, Remote Play)"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht die PS5 pro Stunde?",
        answer: "Beim Spielen verbraucht die PS5 ca. 180 bis 220 Watt (ca. 0,18 bis 0,22 kWh pro Stunde). Bei 35 ct/kWh entspricht das Stromkosten von rund 6,3 bis 7,7 Cent pro Stunde."
      },
      {
        question: "Was kostet 3 Stunden PS5 spielen an Strom?",
        answer: "3 Stunden Gaming auf der PS5 bei 200 Watt verbrauchen 0,6 kWh und kosten ca. 0,21 € (21 Cent bei 35 ct/kWh)."
      },
      {
        question: "Wie viel Strom verbraucht die PS5 im Ruhemodus?",
        answer: "Im normalen Ruhemodus (Standby) ohne Downloads zieht die PS5 ca. 1,5 bis 3 Watt (ca. 4,50 bis 9 € pro Jahr). Werden Controller geladen oder Spiele im Hintergrund heruntergeladen, steigt der Verbrauch auf 5 bis 15 Watt."
      },
      {
        question: "Wie hoch sind die jährlichen Stromkosten einer PS5?",
        answer: "Bei 2 bis 3 Stunden täglichem Spielen liegen die jährlichen Stromkosten bei ca. 50 bis 75 Euro."
      },
      {
        question: "Ist die PS5 Slim sparsamer als das Originalmodell?",
        answer: "Ja, die PS5 Slim verbraucht dank eines optimierten 6-nm-Chipsatzes ca. 10 bis 20 Watt weniger unter Volllast."
      },
      {
        question: "Sollte man Filme über die PS5 oder den Smart-TV streamen?",
        answer: "Immer über den Smart-TV: Die PS5 benötigt beim Videostreaming ca. 30–50 Watt, während die integrierte TV-App praktisch keine Extra-Energie benötigt."
      },
      {
        question: "Wie viel Strom verbraucht das Menü der PS5?",
        answer: "Im Dashboard / Homescreen verbraucht die Konsole ca. 45 bis 55 Watt."
      },
      {
        question: "Wie berechne ich die Stromkosten der PS5?",
        answer: "Formel: Leistung (W) × Spielstunden/Tag × 365 ÷ 1.000 × Strompreis. Beispiel: 200 W × 2,5 h × 365 ÷ 1.000 × 0,35 € = 63,88 € pro Jahr."
      },
      {
        question: "Wie viel Strom zieht die PS5 im komplett ausgeschalteten Zustand?",
        answer: "Vollständig heruntergefahren verbraucht die PS5 unter 0,5 Watt."
      },
      {
        question: "Wie viel Strom verbraucht das Laden des DualSense-Controllers?",
        answer: "Das Laden eines Controllers an der PS5 dauert ca. 2,5 Stunden und benötigt nur ca. 0,015 kWh (unter 1 Cent pro Ladung)."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["xbox", "fernseher", "gaming-pc"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromkosten-pro-stunde"]
  },

  "xbox": {
    slug: "xbox",
    name: "Xbox Series X / Series S",
    category: "Unterhaltung & Büro",
    icon: "🎮",
    typicalWattage: 160,
    wattageMin: 75,
    wattageMax: 210,
    typicalUsageHours: 2.5,
    typicalAnnualKwh: 150,
    annualCostEuro: 52.5,
    usageContext: "Ca. 2,5 Stunden tägliches Gaming",
    calculationDefaults: {
      watt: 160,
      hoursPerDay: 2.5
    },
    shortDescription: "Die Xbox Series X verbraucht unter Spielelast ca. 160 bis 210 Watt (ca. 5,6 bis 7,4 Cent pro Stunde). Die kompakte Xbox Series S ist mit nur 75 bis 95 Watt unter Last wesentlich sparsamer (ca. 2,6 bis 3,3 Cent pro Stunde).",
    dutyCycleExplanation: "Im Dashboard liegt der Verbrauch bei 35–45 Watt. Im Energiesparmodus sinkt die Leistungsaufnahme auf unter 0,5 Watt.",
    measurementTips: "Messe den Verbrauch während des Spielens eines aktuellen Xbox-Series-Titels.",
    savingAdvice: [
      "Energiesparmodus ('Herunterfahren') statt 'Schnelles Hochfahren' (Instant-On) aktivieren: Spart 10–13 Watt Dauer-Standby und ca. 35 € im Jahr!",
      "Streaming-Dienste direkt über die TV-App nutzen.",
      "Automatische Abschaltung nach 30 Minuten Inaktivität einrichten."
    ],
    factors: [
      "Modell (Xbox Series X vs. Xbox Series S vs. Xbox One)",
      "Gewählter Energiemodus (Energiesparmodus vs. Standby/Instant-On)",
      "Grafikauflösung des Spiels"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht die Xbox Series X pro Stunde?",
        answer: "Unter Spielelast verbraucht die Xbox Series X ca. 160 bis 210 Watt, was Stromkosten von ca. 5,6 bis 7,4 Cent pro Stunde (bei 35 ct/kWh) entspricht."
      },
      {
        question: "Wie viel Strom verbraucht die Xbox Series S?",
        answer: "Die Xbox Series S benötigt beim Spielen nur ca. 75 bis 95 Watt (ca. 2,6 bis 3,3 Cent pro Stunde) – weniger als die Hälfte der Series X."
      },
      {
        question: "Was kostet der Standby-Modus 'Schnelles Hochfahren' bei der Xbox?",
        answer: "Im Modus 'Schnelles Hochfahren' zieht die Xbox dauerhaft 10 bis 13 Watt. Das kostet ca. 30 bis 40 Euro pro Jahr nur für den Standby-Betrieb!"
      },
      {
        question: "Wie viel Strom zieht die Xbox im Energiesparmodus?",
        answer: "Im Energiesparmodus (Shutdown) verbraucht die Konsole lediglich ca. 0,4 bis 0,8 Watt (unter 2,50 € im Jahr)."
      },
      {
        question: "Was kostet 3 Stunden Xbox-Spielen am Tag?",
        answer: "3 Stunden Gaming auf der Series X verbrauchen ca. 0,55 kWh und kosten ca. 19 Cent pro Tag (ca. 5,80 € im Monat)."
      },
      {
        question: "Wie viel Strom verbraucht die Xbox im Dashboard?",
        answer: "Im Hauptmenü verbraucht die Series X ca. 40 bis 45 Watt."
      },
      {
        question: "Wie hoch sind die jährlichen Stromkosten für eine Xbox?",
        answer: "Bei 2,5 Stunden täglichem Spielen liegen die jährlichen Stromkosten der Series X bei ca. 45 bis 65 Euro (Series S: ca. 20 bis 35 Euro)."
      },
      {
        question: "Wie berechne ich die Stromkosten meiner Xbox?",
        answer: "Formel: Leistung (W) × Stunden/Tag × 365 ÷ 1.000 × Strompreis. Beispiel: 170 W × 2,5 h × 365 ÷ 1.000 × 0,35 € = 54,29 € pro Jahr."
      },
      {
        question: "Unterstützt die Xbox CO2-bewusste Downloads?",
        answer: "Ja, Microsoft bietet eine Funktion, bei der Updates nachts zu Zeiten mit hohem Anteil erneuerbarer Energien im Stromnetz heruntergeladen werden."
      },
      {
        question: "Verbraucht die Xbox beim Abspielen von Blu-rays viel Strom?",
        answer: "Beim Abspielen einer 4K-UHD-Blu-ray verbraucht die Xbox Series X ca. 45 bis 55 Watt."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["ps5", "fernseher", "gaming-pc"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/standby-strom"]
  },

  "klimaanlage": {
    slug: "klimaanlage",
    name: "Klimaanlage (Split-Klimagerät & Mobiles Klimagerät)",
    category: "Klima & Heizen",
    icon: "❄️",
    typicalWattage: 900,
    wattageMin: 500,
    wattageMax: 2200,
    typicalUsageHours: 5.0,
    typicalAnnualKwh: 350,
    annualCostEuro: 122.5,
    usageContext: "Sommerbetrieb an ca. 40–60 Hitzetagen für 4–6 Stunden täglich",
    calculationDefaults: {
      watt: 800,
      hoursPerDay: 5.0
    },
    shortDescription: "Ein fest installiertes Inverter-Split-Klimagerät benötigt ca. 400 bis 800 Watt elektrischer Leistung (ca. 14 bis 28 Cent pro Stunde). Ein ineffizientes mobiles Monoblock-Klimagerät mit Abluftschlauch zieht dagegen 1.000 bis 1.400 Watt (ca. 35 bis 49 Cent pro Stunde).",
    dutyCycleExplanation: "Moderne Split-Klimageräte mit Inverter-Technologie regeln die Kompressorleistung stufenlos herunter, sobald die Zieltemperatur erreicht ist (oft auf nur 200–350 Watt). Mobile Geräte takten meist nur simpel ein und aus.",
    measurementTips: "Messe den Stromverbrauch an einem heißen Sommertag über mehrere Stunden inklusive Herunterkühlen und Temperaturhalten.",
    savingAdvice: [
      "Zieltemperatur nicht zu tief einstellen: 24–25 °C reichen für angenehme Kühle vollkommen aus. Jedes Grad kühler kostet ca. 10 % mehr Strom.",
      "Räume tagsüber beschatten (Rollos/Jalousien schließen), damit keine solare Hitze eindringt.",
      "Fenster und Türen während des Betriebs geschlossen halten (bei mobilen Geräten Fensterabdichtungs-Sets nutzen)."
    ],
    factors: [
      "Bauart (Split-Klimaanlage vs. Mobiles Monoblock-Gerät)",
      "Inverter-Technologie und SEER-Effizienzwert",
      "Raumgröße und Wärmedämmung",
      "Temperaturdifferenz zwischen außen und innen"
    ],
    faq: [
      {
        question: "Was kostet 1 Stunde Klimaanlage an Strom?",
        answer: "Ein sparsames Split-Klimagerät kostet ca. 14 bis 28 Cent pro Stunde (400–800 W). Ein mobiles Klimagerät mit 1.200 Watt schlägt mit ca. 42 Cent pro Stunde (bei 35 ct/kWh) zu Buche."
      },
      {
        question: "Was kostet eine Klimaanlage im Monat im Sommer?",
        answer: "Läuft die Klimaanlage im Hochsommer an 30 Tagen jeweils 5 Stunden täglich (ca. 3,5 kWh pro Tag), entstehen monatliche Stromkosten von ca. 36 bis 55 Euro."
      },
      {
        question: "Wie viel Strom verbraucht eine Klimaanlage im Sommer insgesamt?",
        answer: "Bei 50 Sommertagen à 5 Stunden Betrieb verbraucht ein Split-Gerät ca. 200 bis 350 kWh (ca. 70 bis 122 €). Ein mobiles Monoblock-Gerät benötigt für denselben Zeitraum oft 500 bis 700 kWh (ca. 175 bis 245 €)."
      },
      {
        question: "Wie viel Watt Leistung hat eine Klimaanlage?",
        answer: "Die elektrische Leistungsaufnahme liegt typischerweise bei 600 bis 1.400 Watt. Die Kälteleistung ist dank Wärmepumpenprinzip rund 3- bis 5-mal so hoch (2.500 bis 3.500 Watt / 9.000 bis 12.000 BTU)."
      },
      {
        question: "Warum sind mobile Klimageräte mit Abluftschlauch so ineffizient?",
        answer: "Weil sie die warme Luft durch den Schlauch nach draußen blasen, wodurch im Raum ein Unterdruck entsteht, der kontinuierlich heiße Sommerluft durch Tür- und Fensterschlitze nachsaugt."
      },
      {
        question: "Was bedeutet der SEER-Wert bei Klimaanlagen?",
        answer: "SEER (Seasonal Energy Efficiency Ratio) gibt das Verhältnis von erzeugter Kälteenergie zu eingesetzter elektrischer Energie über die gesamte Saison an. Ein SEER von 8 bedeutet, dass aus 1 kWh Strom 8 kWh Kälte erzeugt werden."
      },
      {
        question: "Kann eine Klimaanlage auch sparsam heizen?",
        answer: "Ja, moderne Split-Klimaanlagen sind Luft-Luft-Wärmepumpen und können in der Übergangszeit (Herbst/Frühjahr) hocheffizient und kostengünstig heizen."
      },
      {
        question: "Wie berechne ich die Stromkosten meiner Klimaanlage?",
        answer: "Formel: Durchschnittliche Leistung (kW) × Betriebsstunden × Strompreis (€/kWh). Beispiel: 0,7 kW × 5 h × 0,35 € = 1,23 € pro Tag."
      },
      {
        question: "Lohnt sich die Kombination aus Klimaanlage und Photovoltaik?",
        answer: "Perfekte Synergie: Klimaanlagen werden genau dann gebraucht, wenn die Sonne intensiv scheint und eine PV-Anlage oder ein Balkonkraftwerk maximalen Strom liefert."
      },
      {
        question: "Verbraucht eine Klimaanlage im Standby Strom?",
        answer: "Ja, für Fernbedienungsempfänger und Standby-Heizung des Kompressors fallen ca. 2 bis 5 Watt an (ca. 6 bis 15 € im Jahr)."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["ventilator", "luftentfeuchter", "heizluefter"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/balkonkraftwerk/stromkosten-sparen"]
  },

  "ventilator": {
    slug: "ventilator",
    name: "Ventilator (Stand- & Deckenventilator)",
    category: "Klima & Heizen",
    icon: "💨",
    typicalWattage: 40,
    wattageMin: 15,
    wattageMax: 70,
    typicalUsageHours: 6.0,
    typicalAnnualKwh: 35,
    annualCostEuro: 12.25,
    usageContext: "Sommerbetrieb an ca. 45 heißen Tagen für 6–8 Stunden täglich",
    calculationDefaults: {
      watt: 40,
      hoursPerDay: 6.0
    },
    shortDescription: "Ein Stand- oder Tischventilator verbraucht nur ca. 25 bis 50 Watt (ca. 0,9 bis 1,8 Cent pro Stunde). Er ist bis zu 20-mal sparsamer als eine Klimaanlage und kostet bei sommerlicher Dauernutzung nur ca. 10 bis 18 € pro Saison.",
    dutyCycleExplanation: "Ventilatoren arbeiten mit einem einfachen Elektromotor, dessen Stromaufnahme direkt von der gewählten Geschwindigkeitsstufe abhängt.",
    measurementTips: "Messe den Verbrauch auf niedriger, mittlerer und höchster Oszillationsstufe.",
    savingAdvice: [
      "Ventilator nur laufen lassen, wenn sich Personen im Raum aufhalten: Ventilatoren kühlen nicht die Raumluft ab, sondern erzeugen nur einen kühlenden Windchill-Effekt auf der Haut.",
      "Niedrigste oder mittlere Stufe wählen: Bringt oft 80 % des Kühleffekts bei halbem Stromverbrauch.",
      "Nachts am offenen Fenster platzieren, um kühle Außenluft ins Zimmer zu blasen."
    ],
    factors: [
      "Ventilatortyp (Tisch-, Stand-, Turm- oder Deckenventilator)",
      "Geschwindigkeitsstufe (Stufe 1 vs. Stufe 3)",
      "Motortechnologie (moderner bürstenloser DC-Motor vs. klassischer AC-Motor)"
    ],
    faq: [
      {
        question: "Was kostet 1 Stunde Ventilator an Strom?",
        answer: "Ein normaler Standventilator (ca. 40 Watt) kostet rund 1,4 Cent pro Stunde (bei 35 ct/kWh). Moderne DC-Ventilatoren auf Stufe 1 verbrauchen nur ca. 5 bis 15 Watt (ca. 0,2 bis 0,5 Cent/h)."
      },
      {
        question: "Was kostet es, einen Ventilator die ganze Nacht laufen zu lassen?",
        answer: "8 Stunden Betrieb bei 35 Watt verbrauchen 0,28 kWh Strom und kosten rund 9,8 Cent pro Nacht."
      },
      {
        question: "Wie viel Watt hat ein normaler Ventilator?",
        answer: "Tischventilatoren haben 15–30 W, Stand- und Turmventilatoren 35–60 W, Deckenventilatoren ca. 25–70 W."
      },
      {
        question: "Wie viel Strom verbraucht ein Ventilator im gesamten Sommer?",
        answer: "Bei 50 Sommertagen à 8 Stunden Betrieb verbraucht ein 40-Watt-Ventilator ca. 16 kWh Strom, was Gesamtkosten von nur rund 5,60 € pro Sommer entspricht."
      },
      {
        question: "Kühlt ein Ventilator die Raumtemperatur ab?",
        answer: "Nein, physikalisch erwärmt der Motor den Raum sogar minimal. Der kühlende Effekt entsteht rein durch die Verdunstungskälte des Schweißes auf der menschlichen Haut."
      },
      {
        question: "Wie viel sparsamer ist ein Ventilator als eine Klimaanlage?",
        answer: "Ein Ventilator (40 W) verbraucht rund 95 % weniger Strom als ein mobiles Klimagerät (1.000 W) und ca. 90 % weniger als eine Split-Klimaanlage."
      },
      {
        question: "Was zeichnet DC-Gleichstrom-Ventilatoren aus?",
        answer: "Moderne Ventilatoren mit DC-Gleichstrommotor sind extrem leise und verbrauchen auf niedrigen Stufen oft nur 3 bis 8 Watt (bis zu 70 % sparsamer als AC-Motoren)."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Ventilators?",
        answer: "Formel: Leistung (W) × Betriebsstunden ÷ 1.000 × Strompreis (€/kWh). Beispiel: 40 W × 8 h ÷ 1.000 × 0,35 € = 0,112 € (11,2 Cent) pro Tag."
      },
      {
        question: "Verbraucht ein Deckenventilator im Winterbetrieb viel Strom?",
        answer: "Im Winterbetrieb (Rückwärtslauf) drückt ein Deckenventilator warme Deckenluft sanft nach unten. Bei ca. 15–25 Watt Leistung hilft er, Heizkosten zu sparen."
      },
      {
        question: "Zieht ein Ventilator mit Fernbedienung Standby-Strom?",
        answer: "Ja, Modelle mit Display oder Fernbedienung verbrauchen im Standby ca. 0,5 bis 1,5 Watt."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["klimaanlage", "luftentfeuchter", "heizluefter"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromkosten-pro-stunde"]
  },

  "heizluefter": {
    slug: "heizluefter",
    name: "Heizlüfter & Radiator",
    category: "Klima & Heizen",
    icon: "🔥",
    typicalWattage: 2000,
    wattageMin: 1000,
    wattageMax: 2500,
    typicalUsageHours: 1.5,
    typicalAnnualKwh: 300,
    annualCostEuro: 105.0,
    usageContext: "Zusatzheizung im Winter / Übergangszeit",
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 1.0
    },
    shortDescription: "Ein 2.000-Watt-Heizlüfter verbraucht genau 2,0 kWh Strom pro Stunde und kostet bei 35 ct/kWh stolze 70 Cent pro Stunde. Bei täglichem 3-Stunden-Betrieb entstehen enorme Monatskosten von ca. 63 Euro.",
    dutyCycleExplanation: "Auf Heizstufe 2 läuft der Heizdraht unter voller Nennleistung (2.000 W). Ist ein Thermostat verbaut, schaltet das Heizelement nach Erreichen der Raumtemperatur getaktet ab.",
    measurementTips: "Messe den Stromverbrauch über 2 Stunden im Zielraum bei gewünschter Thermostateinstellung.",
    savingAdvice: [
      "Heizlüfter nur kurzzeitig als Not- oder Schnellheizung nutzen (z. B. 15 Minuten im Badezimmer), niemals als Dauerheizung!",
      "Thermostat auf mittlere Stufe einstellen, damit das Gerät nicht ununterbrochen auf Volllast durchheizt.",
      "Für dauerhaftes Heizen auf moderne Wärmepumpen oder Infrarotheizungen mit Thermostatsteuerung setzen."
    ],
    factors: [
      "Heizstufe (1.000 W vs. 2.000 W)",
      "Thermostatsteuerung und Raumisolierung",
      "Betriebsdauer pro Tag"
    ],
    faq: [
      {
        question: "Was kostet 1 Stunde mit 2000 Watt Heizlüfter?",
        answer: "Ein 2.000-Watt-Heizlüfter verbraucht in einer Stunde genau 2,0 kWh Strom. Bei einem Strompreis von 35 ct/kWh kostet eine Stunde Heizen genau 0,70 € (70 Cent)."
      },
      {
        question: "Was kostet 3000 Watt Strom pro Stunde?",
        answer: "Ein 3.000-Watt-Gerät (z. B. ein starker Bauheizer) verbraucht 3,0 kWh pro Stunde und kostet bei 35 ct/kWh genau 1,05 € pro Stunde."
      },
      {
        question: "Was kostet ein Heizlüfter im Monat, wenn er täglich 4 Stunden läuft?",
        answer: "4 Stunden täglich bei 2.000 Watt entsprechen 8 kWh pro Tag (2,80 €/Tag). Im Monat (30 Tage) summiert sich das auf 240 kWh und stolze 84,00 Euro!"
      },
      {
        question: "Ist Heizen mit Heizlüfter teurer als mit Gas oder Fernwärme?",
        answer: "Ja, drastisch teurer: Strom kostet ca. 35 ct/kWh, während Heizgas oder Fernwärme meist nur 8 bis 14 ct/kWh kosten. Das Heizen mit Strom-Direktheizern ist rund 3-mal so teuer."
      },
      {
        question: "Wie viel Watt hat ein typischer Heizlüfter?",
        answer: "Die meisten Geräte besitzen zwei Heizstufen: Stufe 1 mit 1.000 Watt und Stufe 2 mit 2.000 Watt."
      },
      {
        question: "Was ist sparsamer: Keramik-Heizlüfter oder Ölradiator?",
        answer: "Beide wandeln 1 kWh Strom in exakt 1 kWh Wärme um (Wirkungsgrad 100 %). Keramiklüfter erwärmen die Luft schneller, Ölradiatoren speichern die Wärme länger und arbeiten geräuschlos."
      },
      {
        question: "Gehört der Heizlüfter zu den größten Stromfressern?",
        answer: "Ja! Durch die extrem hohe Nennleistung von 2.000 Watt kann ein unbemerkt durchlaufender Heizlüfter die Stromrechnung in wenigen Wochen um hunderte Euro in die Höhe treiben."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Heizlüfters?",
        answer: "Formel: Leistung in kW × Heizstunden × Strompreis in €/kWh. Beispiel: 2,0 kW × 2,5 h × 0,35 € = 1,75 € pro Tag."
      },
      {
        question: "Kann ein Heizlüfter den Raum im Dauerbetrieb warmhalten?",
        answer: "Ja, aber zu extrem hohen Betriebskosten. Ein durchlaufender 2.000-Watt-Heizer kostet rund 16,80 € pro Tag (über 500 € im Monat)."
      },
      {
        question: "Verbraucht die reine Ventilator-Kaltstufe viel Strom?",
        answer: "Nein, läuft nur der Lüfter ohne Heizelement, verbraucht das Gerät lediglich ca. 15 bis 30 Watt (ca. 0,5 bis 1 Cent pro Stunde)."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["klimaanlage", "ventilator", "luftentfeuchter"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromfresser", "/stromkosten-pro-stunde"]
  },

  "luftentfeuchter": {
    slug: "luftentfeuchter",
    name: "Luftentfeuchter",
    category: "Klima & Heizen",
    icon: "💧",
    typicalWattage: 280,
    wattageMin: 180,
    wattageMax: 650,
    typicalUsageHours: 6.0,
    typicalAnnualKwh: 300,
    annualCostEuro: 105.0,
    usageContext: "Keller- oder Bautrocknung an ca. 120–180 Tagen im Jahr",
    calculationDefaults: {
      watt: 280,
      hoursPerDay: 4.0
    },
    shortDescription: "Ein elektrischer Kompressor-Luftentfeuchter für Wohnräume verbraucht ca. 200 bis 350 Watt (ca. 7 bis 12 Cent pro Stunde). Läuft er zur Schimmelvermeidung 6 Stunden täglich, entstehen Monatskosten von ca. 18 bis 26 €.",
    dutyCycleExplanation: "Das Gerät besitzt einen Hygrostat: Erreicht die relative Luftfeuchtigkeit den Sollwert (z. B. 55 %), schaltet sich der stromintensive Kompressor automatisch ab.",
    measurementTips: "Messe den Verbrauch über 3 Tage bei voreingestellter Ziel-Luftfeuchtigkeit.",
    savingAdvice: [
      "Hygrostat-Automatik auf 55–60 % rel. Luftfeuchte einstellen: Ein Absenken auf 40 % verdoppelt den Stromverbrauch unnötig.",
      "Türen und Fenster des Zielluftraums geschlossen halten.",
      "Luftfilter regelmäßig absaugen."
    ],
    factors: [
      "Entfeuchtungsleistung in Litern/Tag",
      "Kompressor- vs. Peltier- vs. Adsorptions-Technologie",
      "Raumtemperatur und Feuchtigkeitslast"
    ],
    faq: [
      {
        question: "Was kostet 1 Stunde Betrieb eines Luftentfeuchters?",
        answer: "Ein 280-Watt-Kompressor-Luftentfeuchter verbraucht ca. 0,28 kWh pro Stunde, was rund 9,8 Cent pro Stunde (bei 35 ct/kWh) entspricht."
      },
      {
        question: "Was kostet ein Luftentfeuchter im Dauerbetrieb pro Tag?",
        answer: "Läuft ein 300-Watt-Gerät 24 Stunden durch, werden 7,2 kWh Strom verbraucht. Das kostet ca. 2,52 € pro Tag (rund 75 € im Monat)."
      },
      {
        question: "Wie viel Strom verbraucht ein Luftentfeuchter im Jahr?",
        answer: "Bei durchschnittlich 4 Stunden täglicher Laufzeit verbraucht das Gerät ca. 300 bis 450 kWh pro Jahr (ca. 105 bis 157 € bei 35 ct/kWh)."
      },
      {
        question: "Welcher Luftentfeuchter ist am sparsamsten?",
        answer: "Kompressor-Entfeuchter sind bei normalen Raumtemperaturen (über 15 °C) am energieeffizientesten. Günstige Peltier-Geräte entfeuchten kaum, Adsorptionstrockner brauchen viel Strom (500–800 W)."
      },
      {
        question: "Wie viel Watt hat ein normaler Raumentfeuchter?",
        answer: "Kompakte Raumluftentfeuchter (10–20 Liter/Tag) haben eine Leistungsaufnahme von 200 bis 380 Watt. Große Bautrockner ziehen 600 bis 1.000 Watt."
      },
      {
        question: "Welche Luftfeuchtigkeit sollte eingestellt werden?",
        answer: "Optimal für Wohnräume und Keller sind 50 bis 60 % relative Luftfeuchtigkeit. Dies verhindert Schimmelbildung zuverlässig und schont die Stromrechnung."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für Kellerentfeuchtung?",
        answer: "Im Sommer/Herbst bei 6 Stunden Betrieb täglich betragen die monatlichen Kosten ca. 15 bis 22 Euro."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Luftentfeuchters?",
        answer: "Formel: Leistung (kW) × Betriebsstunden × Strompreis (€/kWh). Beispiel: 0,28 kW × 6 h × 0,35 € = 0,59 € (59 Cent) pro Tag."
      },
      {
        question: "Kann regelmäßiges Stoßlüften den Entfeuchter ersetzen?",
        answer: "Im Winter ja: Kalte Außenluft ist absolut trocken und entfeuchtet beim Erwärmen. Im Sommer bringt Lüften im Keller oft Feuchtigkeit hinein, sodass ein Entfeuchter nötig ist."
      },
      {
        question: "Verbraucht der Entfeuchter im Standby Strom?",
        answer: "Ja, der elektronische Hygrostat und Sensor verbrauchen ca. 1 bis 2 Watt im Standby."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["klimaanlage", "ventilator", "heizluefter"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/strompreis"]
  },

  "aquarium": {
    slug: "aquarium",
    name: "Aquarium (100–200 Liter)",
    category: "Hobby & Spezial",
    icon: "🐠",
    typicalWattage: 75,
    wattageMin: 30,
    wattageMax: 300,
    typicalUsageHours: 24.0,
    typicalAnnualKwh: 350,
    annualCostEuro: 122.5,
    usageContext: "24-Stunden-Betrieb von Filter/Pumpe, getakteter Heizstab und 8–10 h Beleuchtung",
    calculationDefaults: {
      watt: 50,
      hoursPerDay: 24.0
    },
    shortDescription: "Ein 100- bis 150-Liter-Süßwasseraquarium verbraucht ca. 250 bis 450 kWh Strom pro Jahr (ca. 88 bis 158 € bei 35 ct/kWh). Größere Becken oder Meerwasseraquarien benötigen oft über 800 bis 1.500 kWh jährlich.",
    dutyCycleExplanation: "Der Filter läuft 24/7 (ca. 5–15 W), die LED-Beleuchtung ca. 8–10 h/Tag (20–40 W) und der Heizstab (100–150 W) taktet je nach Raumtemperatur ca. 4–8 Stunden täglich.",
    measurementTips: "Messe den Gesamtverbrauch aller Aquariumkomponenten über eine Woche an einer gemeinsamen Steckerleiste.",
    savingAdvice: [
      "Alte Leuchtstoffröhren (T5/T8) durch moderne LED-Aquarienleuchten ersetzen: Spart bis zu 50 % Beleuchtungsstrom.",
      "Aquarienabdeckung nutzen: Verhindert Verdunstung und Wärmeverlust nach oben um bis zu 40 %.",
      "Rück- und Bodenwand mit einer dünnen Styropor- oder Schaumstoffplatte dämmen."
    ],
    factors: [
      "Beckengröße und Wassertemperatur (z. B. 24 °C vs. 28 °C)",
      "Raumtemperatur des Aufstellorts",
      "Beleuchtungsart (LED vs. T5/HQI) und Beleuchtungsdauer",
      "Süßwasser vs. Meerwasser (Abschäumer, Strömungspumpen)"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein 100-Liter-Aquarium im Jahr?",
        answer: "Ein gut gedämmtes 100-Liter-Aquarium mit LED verbraucht ca. 200 bis 300 kWh Strom pro Jahr, was bei 35 ct/kWh jährlichen Stromkosten von ca. 70 bis 105 € entspricht."
      },
      {
        question: "Was ist der größte Stromverbraucher am Aquarium?",
        answer: "Der Regelheizer (Heizstab) ist für rund 60 bis 75 % des gesamten Stromverbrauchs verantwortlich, besonders wenn das Zimmer im Winter kühl ist."
      },
      {
        question: "Was kostet ein Aquarium im Monat an Strom?",
        answer: "Ein Standardbecken (100–200 Liter) verursacht monatliche Stromkosten von ca. 7 bis 15 Euro. Große 400-Liter-Becken liegen bei 25 bis 40 Euro im Monat."
      },
      {
        question: "Wie viel Watt Leistung hat die Aquarientechnik?",
        answer: "Pumpe/Filter: 5–15 W; LED-Licht: 15–45 W; Heizstab: 50–200 W (getaktet)."
      },
      {
        question: "Wie viel Strom spart eine Aquarien-Abdeckung?",
        answer: "Eine geschlossene Abdeckung reduziert den Wärmeverlust durch Wasserverdunstung drastisch und spart bis zu 30–40 % der Heizkosten gegenüber offenen Pools."
      },
      {
        question: "Wie viel Strom verbraucht ein Meerwasseraquarium?",
        answer: "Meerwasseraquarien benötigen starke Strömungspumpen, Eiweißabschäumer und extrem intensive Beleuchtung. Sie verbrauchen oft 1.000 bis 2.500 kWh/Jahr (350 bis 875 €/Jahr)."
      },
      {
        question: "Wie viele Stunden sollte das Aquarium-Licht brennen?",
        answer: "8 bis 10 Stunden täglich sind für gesundes Pflanzenwachstum optimal. Längere Beleuchtung fördert Algenwachstum und verschwendet Strom."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Aquariums?",
        answer: "Formel: (Filter-kWh + Licht-kWh + Heizungs-kWh) × Strompreis. Beispiel: (80 kWh + 70 kWh + 180 kWh) × 0,35 € = 115,50 € pro Jahr."
      },
      {
        question: "Lohnt sich die Absenkung der Wassertemperatur um 1 °C?",
        answer: "Ja, eine Reduzierung von 26 °C auf 25 °C spart rund 10 % der Heizenergie, sofern die Fischarten dies vertragen."
      },
      {
        question: "Wie viel Strom verbraucht eine Aquarien-Luftpumpe?",
        answer: "Membranpumpen für Sprudelsteine verbrauchen nur ca. 2 bis 5 Watt (ca. 6 bis 15 € im Jahr)."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["pool", "whirlpool", "luftentfeuchter"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/strompreis"]
  },

  "pool": {
    slug: "pool",
    name: "Gartenpool & Poolpumpe",
    category: "Hobby & Spezial",
    icon: "🏊",
    typicalWattage: 600,
    wattageMin: 250,
    wattageMax: 1200,
    typicalUsageHours: 8.0,
    typicalAnnualKwh: 800,
    annualCostEuro: 280.0,
    usageContext: "Saisonbetrieb (Mai bis September) für ca. 120–150 Tage à 6–8 Stunden Filterlaufzeit",
    calculationDefaults: {
      watt: 450,
      hoursPerDay: 7.0
    },
    shortDescription: "Eine Sandfilterpumpe für einen Standard-Gartenpool (20–30 m³) verbraucht ca. 400 bis 750 Watt (ca. 14 bis 26 Cent pro Stunde). Über eine 5-monatige Badesaison entstehen für die Filterung Stromkosten von ca. 180 bis 320 €.",
    dutyCycleExplanation: "Die Filterpumpe läuft zeitschaltuhrengesteuert ca. 6 bis 9 Stunden täglich. Kommt eine Pool-Wärmepumpe (1.500–3.000 W) hinzu, vervielfacht sich der Strombedarf.",
    measurementTips: "Messe den täglichen Verbrauch der Filteranlage und eventueller Wärmepumpen an einem durchschnittlichen Sommertag.",
    savingAdvice: [
      "Solarfolie / Solarplane auflegen: Hält die Wassertemperatur nachts im Becken und verhindert Verdunstung um 80 %.",
      "Regelbare Frequenzumrichter-Pumpe (Inverter) nutzen: Bei halber Drehzahl sinkt der Stromverbrauch um über 70 % bei optimaler Filterqualität.",
      "Pool-Wärmepumpe tagsüber mit Solarstrom vom Balkonkraftwerk oder PV-Dach betreiben."
    ],
    factors: [
      "Poolvolumen in Kubikmetern (m³)",
      "Pumpenleistung und Filterlaufzeit",
      "Wassererwärmung (Pool-Wärmepumpe vs. Solarabsorber vs. keine Heizung)",
      "Nutzung von Poolabdeckungen"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht eine Poolpumpe pro Tag?",
        answer: "Eine 500-Watt-Poolpumpe bei 8 Stunden Laufzeit verbraucht 4,0 kWh Strom pro Tag, was tägliche Kosten von ca. 1,40 € (ca. 42 € im Monat bei 35 ct/kWh) verursacht."
      },
      {
        question: "Was kostet eine Pool-Wärmepumpe an Strom?",
        answer: "Eine 2.000-Watt-Poolwärmepumpe verbraucht bei 4 Stunden täglichem Heizen ca. 8 kWh (ca. 2,80 € pro Tag / ca. 84 € im Monat)."
      },
      {
        question: "Wie viel Strom verbraucht ein Gartenpool in der gesamten Saison?",
        answer: "Nur für die Sandfilteranlage fallen in einer 5-monatigen Saison ca. 500 bis 900 kWh an (ca. 175 bis 315 €). Mit aktiver Poolheizung sind es oft 1.500 bis 3.500 kWh (525 bis 1.225 €)."
      },
      {
        question: "Wie viele Stunden muss die Poolpumpe täglich laufen?",
        answer: "Das gesamte Poolwasser sollte täglich 2- bis 2,5-mal umgewälzt werden. Je nach Pumpenleistung entspricht das ca. 6 bis 8 Stunden Laufzeit."
      },
      {
        question: "Wie viel Watt hat eine normale Sandfilterpumpe?",
        answer: "Für kleine bis mittlere Aufstellpools (10–25 m³) benötigt die Pumpe 250 bis 550 Watt, für größere Einbaupools 750 bis 1.200 Watt."
      },
      {
        question: "Lohnt sich eine regelbare Inverter-Poolpumpe?",
        answer: "Ja, wenn eine Pumpe 12 Stunden auf halber Leistung statt 6 Stunden auf Volllast läuft, sinkt der Stromverbrauch um rund 50 %, während das Filterergebnis besser ist."
      },
      {
        question: "Wie heizt man den Pool am günstigsten auf?",
        answer: "Mit Solar-Ripprohren / Solarabsorbern auf dem Garagendach entstehen 0 € zusätzliche Stromkosten, da die normale Filterpumpe das Wasser durch die schwarzen Schläuche drückt."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Pools?",
        answer: "Formel: Pumpenleistung (kW) × Stunden/Tag × Saisontage × Strompreis. Beispiel: 0,5 kW × 8 h × 130 Tage × 0,35 € = 182,00 € pro Saison."
      },
      {
        question: "Verbraucht ein Pool-Roboter viel Strom?",
        answer: "Elektrische Poolroboter verbrauchen nur ca. 100 bis 180 Watt und laufen ca. 1,5 bis 2 Stunden pro Reinigung (ca. 7 bis 12 Cent pro Reinigungsgang)."
      },
      {
        question: "Welchen Einfluss hat eine Pool-Abdeckung auf die Stromkosten?",
        answer: "Eine Solarabdeckung verhindert das Auskühlen des Wassers in kühlen Nächten und spart bei beheizten Pools bis zu 60 % der Heizenergie."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["whirlpool", "aquarium", "klimaanlage"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/photovoltaik/eigenverbrauch-rechner"]
  },

  "whirlpool": {
    slug: "whirlpool",
    name: "Whirlpool & Outdoor-Spa (Hot Tub)",
    category: "Hobby & Spezial",
    icon: "🛁",
    typicalWattage: 2500,
    wattageMin: 1500,
    wattageMax: 6000,
    typicalUsageHours: 4.0,
    typicalAnnualKwh: 2800,
    annualCostEuro: 980.0,
    usageContext: "Ganzjähriger Außenbetrieb bei 37–39 °C Wassertemperatur",
    calculationDefaults: {
      watt: 2000,
      hoursPerDay: 4.0
    },
    shortDescription: "Ein ganzjährig beheizter Outdoor-Whirlpool verbraucht ca. 2.000 bis 4.000 kWh Strom pro Jahr (ca. 700 bis 1.400 € bei 35 ct/kWh). Aufblasbare Whirlpools ohne dicke Isolierung ziehen im Winter oft noch mehr Strom.",
    dutyCycleExplanation: "Das elektrische Heizelement (2.000–3.000 W) springt mehrmals täglich thermostatgesteuert an, um die Temperatur auf 38 °C zu halten. Bei Massagebetrieb laufen zusätzlich starke Düsenpumpen (1.500–3.000 W).",
    measurementTips: "Messe den Stromverbrauch über mindestens eine volle Woche im Winter und im Sommer.",
    savingAdvice: [
      "Hochwertige Thermo-Abdeckung (mindestens 10 cm dicker Schaumstoffkern) verwenden und passgenau schließen.",
      "Zusätzliche Wannen- und Bodenisolierung anbringen.",
      "Temperatur bei längerer Nichtnutzung (z. B. Urlaub) auf 25–28 °C absenken."
    ],
    factors: [
      "Außentemperatur und Dämmqualität der Whirlpool-Schale",
      "Qualität und Zustand der Thermoabdeckung",
      "Nutzungshäufigkeit der Massagepumpen und des Gebläses"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Whirlpool im Monat?",
        answer: "Im Sommer verbraucht ein gut isolierter Whirlpool ca. 120 bis 200 kWh/Monat (ca. 42 bis 70 €). Im kalten Winter steigen die Monatskosten auf 300 bis 500 kWh (ca. 105 bis 175 € im Monat)."
      },
      {
        question: "Wie viel Strom verbraucht ein Outdoor-Whirlpool im Jahr?",
        answer: "Ein durchschnittlicher Außen-Whirlpool benötigt ca. 2.500 bis 3.500 kWh Strom pro Jahr, was jährlichen Stromkosten von rund 875 bis 1.225 € entspricht."
      },
      {
        question: "Warum verbrauchen aufblasbare Whirlpools so viel Strom?",
        answer: "Aufblasbare Modelle haben nur dünne PVC-Luftwände ohne Polyurethan-Dämmschaum. Sie kühlen bei Außentemperaturen unter 10 °C rasant aus und müssen fast dauerhaft mit 2.000 Watt nachheizen."
      },
      {
        question: "Was kostet 1 Stunde Whirlpool-Nutzung mit Massage?",
        answer: "Laufen Heizung und zwei Massagepumpen gleichzeitig (zusammen ca. 4.500 Watt), kostet eine Stunde Badespaß ca. 1,58 € an Strom."
      },
      {
        question: "Wie viel Watt Leistung hat ein Whirlpool?",
        answer: "Heizung: 2.000 bis 3.000 Watt; Massagepumpen: 1.000 bis 2.500 Watt; Zirkulationspumpe: 100 bis 250 Watt. Die Anschlussleistung liegt meist bei 3,5 bis 7,0 kW (Starkstromanschluss 400 V)."
      },
      {
        question: "Lohnt sich eine Wärmepumpe für den Whirlpool?",
        answer: "Ja, eine Luft-Wasser-Wärmepumpe spart bis zu 65–75 % der Heizenergie ein und senkt die jährlichen Stromkosten von 1.000 € auf rund 300–400 €."
      },
      {
        question: "Sollte man den Whirlpool im Winter ausschalten?",
        answer: "Wird er im Winter nicht genutzt, muss er professionell entleert und frostfrei geblasen werden, da gefrierendes Restwasser in Leitungen und Pumpen zu Totalschäden führt."
      },
      {
        question: "Wie berechne ich die jährlichen Stromkosten meines Whirlpools?",
        answer: "Formel: Durchschnittliche Tages-kWh × 365 × Strompreis. Beispiel: 8 kWh/Tag × 365 × 0,35 € = 1.022,00 € pro Jahr."
      },
      {
        question: "Wie viel Strom spart das Absenken der Temperatur um 2 °C?",
        answer: "Eine Absenkung von 39 °C auf 37 °C spart rund 10 bis 15 % der gesamten Standby-Heizenergie."
      },
      {
        question: "Wie viel Strom zieht die ständige Filter-Zirkulation?",
        answer: "Die Zirkulationspumpe (ca. 150 W) läuft ca. 4 bis 8 Stunden täglich für die Wasserfiltration (ca. 0,6 bis 1,2 kWh pro Tag)."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["pool", "aquarium", "heizluefter"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/stromfresser"]
  },

  "3d-drucker": {
    slug: "3d-drucker",
    name: "3D-Drucker (FDM & Resin)",
    category: "Hobby & Spezial",
    icon: "🖨️",
    typicalWattage: 120,
    wattageMin: 50,
    wattageMax: 350,
    typicalUsageHours: 3.0,
    typicalAnnualKwh: 130,
    annualCostEuro: 45.5,
    usageContext: "Regelmäßige Druckjobs für Prototypen und Hobby (ca. 1.000 Druckstunden im Jahr)",
    calculationDefaults: {
      watt: 120,
      hoursPerDay: 3.0
    },
    shortDescription: "Ein gängiger FDM-3D-Drucker verbraucht beim Drucken von PLA ca. 80 bis 130 Watt (ca. 2,8 bis 4,5 Cent pro Stunde). Ein 10-stündiger Druckjob kostet somit lediglich ca. 28 bis 45 Cent an Strom.",
    dutyCycleExplanation: "In den ersten 5 Minuten beim Aufheizen von Druckbett (60 °C) und Düse (210 °C) zieht der Drucker ca. 250–350 Watt. Beim anschließenden Drucken taktet das Heizbett und der Verbrauch sinkt auf ca. 80–120 Watt.",
    measurementTips: "Messe den Gesamtverbrauch über einen kompletten mehrstündigen Druckjob inklusive Aufheizphase.",
    savingAdvice: [
      "Drucker-Einhausung (Enclosure) nutzen: Hält die Wärme am Druckbett und senkt den Strombedarf des Heizbetts um 25–40 %.",
      "PLA statt ABS/PETG drucken: PLA benötigt nur 50–60 °C Betttemperatur, während ABS 100–110 °C braucht (doppelter Stromverbrauch).",
      "Drucker nach Fertigstellung per schaltbarer Steckdose ausschalten."
    ],
    factors: [
      "Druckbett-Temperatur (50 °C bei PLA vs. 80 °C bei PETG vs. 110 °C bei ABS)",
      "Düsentemperatur (Hotend)",
      "Offener Rahmen vs. geschlossenes Gehäuse (Einhausung)"
    ],
    faq: [
      {
        question: "Was kostet 1 Stunde 3D-Drucken an Strom?",
        answer: "Ein FDM-Drucker mit 100 Watt Durchschnittsleistung kostet rund 3,5 Cent pro Stunde (bei 35 ct/kWh). Bei technischen Filamenten mit heißem Druckbett (180 W) sind es ca. 6,3 Cent pro Stunde."
      },
      {
        question: "Was kostet ein 10-Stunden-Druckjob?",
        answer: "Ein 10-stündiger Druckjob mit PLA verbraucht ca. 1,0 bis 1,2 kWh Strom und kostet rund 35 bis 42 Cent."
      },
      {
        question: "Wie viel Watt Leistung hat ein 3D-Drucker?",
        answer: "Die Spitzenleistung beim Aufheizen liegt bei 250 bis 350 Watt. Während des Druckens liegt der Dauerverbrauch bei 70 bis 140 Watt."
      },
      {
        question: "Was verbraucht beim 3D-Drucker am meisten Strom?",
        answer: "Das beheizte Druckbett verbraucht über 80 % der gesamten Energie. Das Hotend (Düse) benötigt nur ca. 25–40 W, die Schrittmotoren ca. 10–20 W."
      },
      {
        question: "Wie viel Strom verbraucht ein Resin-3D-Drucker (SLA/MSLA)?",
        answer: "Resin-Drucker haben kein Heizbett und verbrauchen nur ca. 30 bis 60 Watt (UV-LED-Matrix und Z-Achsenmotor). Sie sind rund 50 % sparsamer als FDM-Drucker."
      },
      {
        question: "Wie hoch sind die jährlichen Stromkosten für einen 3D-Drucker?",
        answer: "Bei 500 Druckstunden pro Jahr betragen die Stromkosten ca. 18 bis 25 Euro, bei intensiver Nutzung (1.500 Stunden) ca. 50 bis 75 Euro."
      },
      {
        question: "Wie viel Strom spart eine Einhausung (Gehäuse)?",
        answer: "Eine isolierende Einhausung verhindert Wärmeverlust durch Zugluft und senkt die Heizleistung des Druckbetts um 25 bis 40 %."
      },
      {
        question: "Wie berechne ich die Stromkosten für ein 3D-Druckteil?",
        answer: "Formel: Durchschnittliche Wattzahl × Druckzeit in Stunden ÷ 1.000 × Strompreis (€/kWh). Beispiel: 110 W × 6 h ÷ 1.000 × 0,35 € = 0,23 € (23 Cent)."
      },
      {
        question: "Verbraucht ein 3D-Drucker im Leerlauf (Standby) viel Strom?",
        answer: "Im Leerlauf mit eingeschaltetem Display und Mainboardlüfter verbraucht der Drucker ca. 6 bis 12 Watt."
      },
      {
        question: "Sind Hochgeschwindigkeits-Drucker (z. B. Bambu Lab, Klipper) sparsamer?",
        answer: "Ja! Da der Druckjob bei hoher Geschwindigkeit in der halben Zeit fertig ist, muss das Heizbett nur halb so lange beheizt werden, was pro Druckteil bis zu 40 % Strom spart."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["pc", "laptop", "nas"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/kwh-rechner"]
  },

  "nas": {
    slug: "nas",
    name: "NAS-Netzwerkspeicher (Network Attached Storage)",
    category: "Unterhaltung & Büro",
    icon: "🗄️",
    typicalWattage: 25,
    wattageMin: 10,
    wattageMax: 60,
    typicalUsageHours: 24.0,
    typicalAnnualKwh: 220,
    annualCostEuro: 77.0,
    usageContext: "24/7 Dauerbetrieb als zentraler Datenspeicher und Medienserver",
    calculationDefaults: {
      watt: 25,
      hoursPerDay: 24.0
    },
    shortDescription: "Ein 2-Bay- bis 4-Bay-NAS-System verbraucht im 24/7-Dauerbetrieb ca. 20 bis 35 Watt (ca. 175 bis 300 kWh/Jahr). Das verursacht jährliche Stromkosten von ca. 60 bis 105 € bei 35 ct/kWh.",
    dutyCycleExplanation: "Das NAS läuft 24 Stunden am Tag. Werden die Festplatten bei Inaktivität in den Ruhezustand (HDD Spindown) geschickt, sinkt der Verbrauch von ca. 28 Watt auf 8–12 Watt.",
    measurementTips: "Messe den Verbrauch über eine volle Woche im typischen Mix aus Dateizugriff, Medienstreaming und nächtlichem HDD-Ruhezustand.",
    savingAdvice: [
      "Festplatten-Ruhezustand (HDD Spindown) nach 15–20 Minuten Inaktivität aktivieren: Spart rund 5–7 Watt pro mechanischer Festplatte.",
      "Zeitgesteuertes Ein-/Ausschalten: Das NAS nachts zwischen 01:00 und 06:00 Uhr automatisch herunterfahren lassen.",
      "SSDs statt HDDs für Cache und Standardanwendungen nutzen: SSDs verbrauchen im Leerlauf unter 0,5 Watt."
    ],
    factors: [
      "Anzahl der verbauten Festplatten (2-Bay vs. 4-Bay vs. 8-Bay)",
      "Festplattentyp (mechanische HDDs vs. NVMe/SATA-SSDs)",
      "Prozessorarchitektur (ARM vs. Intel Celeron/Xeon)",
      "Laufende Hintergrunddienste (Plex-Transcoding, Docker-Container, Backups)"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein NAS im 24/7-Dauerbetrieb?",
        answer: "Ein 2-Bay-NAS mit 2 HDDs verbraucht im Schnitt ca. 20–25 Watt (rund 175–220 kWh im Jahr). Das entspricht Stromkosten von ca. 61 bis 77 € pro Jahr."
      },
      {
        question: "Was kostet 1 Tag NAS-Betrieb?",
        answer: "Bei 25 Watt Dauerlast verbraucht das NAS 0,60 kWh pro Tag, was rund 21 Cent pro Tag (ca. 6,30 € im Monat) kostet."
      },
      {
        question: "Wie viel Watt verbraucht eine einzelne Festplatte im NAS?",
        answer: "Eine 3,5-Zoll-NAS-Festplatte zieht im Schreib-/Lesezugriff ca. 6 bis 9 Watt, im Leerlauf ca. 4 bis 6 Watt und im Spindown-Ruhezustand unter 0,5 Watt."
      },
      {
        question: "Wie viel Strom spart der automatische Zeitplan (Nachtabschaltung)?",
        answer: "Schaltet sich das NAS nachts für 7 Stunden aus, spart das rund 30 % des gesamten Jahresstromverbrauchs (ca. 20 bis 30 € Ersparnis pro Jahr)."
      },
      {
        question: "Sind ARM-basierte NAS-Systeme sparsamer als Intel/AMD?",
        answer: "Ja, einfache ARM-NAS-Geräte (z. B. Synology j-Serie) begnügen sich oft mit 10 bis 15 Watt, während x86-Systeme mit Intel-CPUs und Docker-Betrieb 25 bis 50 Watt ziehen."
      },
      {
        question: "Was kostet Plex-Videotranscoding an Strom?",
        answer: "Muss das NAS 4K-Videos in Echtzeit umrechnen (Transcoding), steigt die CPU- und GPU-Last auf 100 %, wodurch der Verbrauch um 15–30 Watt zulegt."
      },
      {
        question: "Wie berechne ich die jährlichen Stromkosten meines NAS?",
        answer: "Formel: Durchschnittliche Wattzahl × 24 h × 365 Tage ÷ 1.000 × Strompreis. Beispiel: 25 W × 24 × 365 ÷ 1.000 × 0,35 € = 76,65 € pro Jahr."
      },
      {
        question: "Verbrauchen reine SSD-NAS-Systeme weniger Strom?",
        answer: "Ja, reine Flash-NAS-Systeme mit M.2 NVMe SSDs verbrauchen im Leerlauf oft unter 6 Watt und arbeiten geräuschlos."
      },
      {
        question: "Lohnt sich Wake-on-LAN (WoL) beim NAS?",
        answer: "Mit WoL kann das NAS bei Nichtgebrauch komplett schlafen und bei Dateizugriff über das Netzwerk innerhalb weniger Sekunden aufgeweckt werden (Standby-Verbrauch unter 1 W)."
      },
      {
        question: "Welchen Einfluss hat das NAS-Netzteil auf die Effizienz?",
        answer: "Hochwertige externe Tischnetzteile mit Effizienzlevel VI arbeiten im optimalen Bereich von 88–92 % und vergeuden kaum Strom als Abwärme."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["server", "pc", "laptop"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/standby-strom"]
  },

  "server": {
    slug: "server",
    name: "Homeserver & Mini-PC-Server",
    category: "Unterhaltung & Büro",
    icon: "🖥️",
    typicalWattage: 40,
    wattageMin: 15,
    wattageMax: 150,
    typicalUsageHours: 24.0,
    typicalAnnualKwh: 350,
    annualCostEuro: 122.5,
    usageContext: "24/7 Dauerbetrieb für Heimautomatisierung (Home Assistant), Nextcloud, Docker und VMs",
    calculationDefaults: {
      watt: 40,
      hoursPerDay: 24.0
    },
    shortDescription: "Ein moderner Mini-PC-Homeserver (z. B. Intel N100) verbraucht im 24/7-Dauerbetrieb nur ca. 12 bis 25 Watt (ca. 37 bis 77 € pro Jahr). Veraltete Desktop-Server oder ausrangierte Workstations ziehen dagegen oft 60 bis 120 Watt (180 bis 370 € pro Jahr).",
    dutyCycleExplanation: "Im Idle-Betrieb (Home Assistant, AdGuard, Pi-hole) dümpelt ein effizienter Homeserver bei sehr geringer Auslastung. Lastspitzen treten nur bei Backups oder Medienkonvertierung auf.",
    measurementTips: "Messe den Stromverbrauch über mindestens 48 Stunden unter realer Dauerlast.",
    savingAdvice: [
      "Effiziente Mini-PCs (z. B. Intel N100 / AMD Ryzen U-Serie) statt ausrangierter alter Desktop-Tower nutzen: Spart oft über 50 Watt Dauerstrom (rund 150 €/Jahr Ersparnis).",
      "C-States im BIOS aktivieren (Package C-States bis C8/C10 erlauben).",
      "PowerTOP unter Linux installieren und Auto-Tune für alle PCIe- und USB-Geräte aktivieren."
    ],
    factors: [
      "Prozessor-TDP und BIOS-C-State-Konfiguration",
      "Art des Speichers (NVMe SSDs vs. 3,5-Zoll SATA Festplatten)",
      "Anzahl virtueller Maschinen (VMs) und Docker-Container"
    ],
    faq: [
      {
        question: "Wie viel Strom verbraucht ein Homeserver im 24/7-Betrieb?",
        answer: "Ein sparsamer Mini-PC-Server verbraucht ca. 12 bis 25 Watt (ca. 105 bis 220 kWh/Jahr, rund 37 bis 77 € bei 35 ct/kWh). Ein klassischer Server mit mehreren HDDs liegt bei 40 bis 80 Watt (ca. 120 bis 245 €/Jahr)."
      },
      {
        question: "Was kostet 1 Watt Dauerbetrieb (24/7) im Jahr?",
        answer: "1 Watt Dauerleistung rund um die Uhr verbraucht genau 8,76 kWh im Jahr. Bei 35 ct/kWh kostet jedes einzelne Watt Dauerstrom exakt 3,07 € pro Jahr!"
      },
      {
        question: "Wie viel Strom verbraucht ein Raspberry Pi als Server?",
        answer: "Ein Raspberry Pi 4 oder 5 verbraucht im Leerlauf nur ca. 3 bis 6 Watt, was jährliche Stromkosten von gerade einmal 9 bis 18 Euro verursacht."
      },
      {
        question: "Warum sind ausrangierte alte PCs als Homeserver oft eine Kostenfalle?",
        answer: "Ältere Desktop-PCs verbrauchen im Leerlauf oft 50 bis 80 Watt Dauerstrom. Das verursacht jährliche Stromkosten von 150 bis 245 Euro – ein sparsamer neuer Mini-PC für 150 € amortisiert sich somit in nur einem Jahr!"
      },
      {
        question: "Was kostet ein Home-Assistant-Server an Strom?",
        answer: "Auf einem Mini-PC (Intel N100) verbraucht Home Assistant im Schnitt ca. 8 bis 12 Watt, was jährliche Stromkosten von ca. 25 bis 37 € bedeutet."
      },
      {
        question: "Wie viel Strom zieht eine USV (Unterbrechungsfreie Stromversorgung)?",
        answer: "Eine USV für den Homeserver verbraucht für Eigenbedarf und Ladeerhaltung ca. 5 bis 15 Watt (rund 15 bis 45 € pro Jahr)."
      },
      {
        question: "Wie hoch sind die monatlichen Stromkosten für einen Homeserver?",
        answer: "Bei 30 Watt Durchschnittsverbrauch liegen die monatlichen Stromkosten bei ca. 7,50 bis 8,00 €."
      },
      {
        question: "Wie berechne ich die Stromkosten meines Homeservers?",
        answer: "Formel: Durchschnittliche Wattzahl × 8.760 Stunden ÷ 1.000 × Strompreis (€/kWh). Beispiel: 35 W × 8.760 ÷ 1.000 × 0,35 € = 107,31 € pro Jahr."
      },
      {
        question: "Welche Linux-Tools helfen beim Stromsparen auf dem Server?",
        answer: "Mit 'powertop --auto-tune', 'tlp' und der Überprüfung von 'powertop' auf C-States (C6/C8/C10) lässt sich der Leerlaufverbrauch oft um 30–50 % senken."
      },
      {
        question: "Lohnt sich die Stromversorgung des Homeservers über ein Balkonkraftwerk?",
        answer: "Hervorragend: Der Homeserver bildet die ideale Grundlast. Ein Balkonkraftwerk deckt den Serverbedarf tagsüber komplett kostenlos mit Solarstrom ab."
      }
    ],
    sourceIds: ["bnetza", "stromspiegel", "uba"],
    relatedDevices: ["nas", "pc", "laptop"],
    relatedCalculators: ["/stromkosten-rechner", "/watt-rechner", "/standby-strom"]
  }
};
