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
  de: {
    'kuehlschrank': {
      name: 'Kühlschrank',
      category: 'Küche',
      shortDescription: 'Ein moderner Kühlschrank verbraucht ca. 100 bis 160 kWh pro Jahr (ca. 35 bis 56 €). Ältere Geräte benötigen oft 250 bis 350 kWh.',
      dutyCycleExplanation: 'Ein Kühlschrank läuft zwar rund um die Uhr, der stromintensive Kompressor schaltet sich jedoch thermostatgesteuert nur etwa 20 bis 40 Minuten pro Stunde ein.',
      savingAdvice: [
        'Optimale Temperatur: 7 °C im Kühlraum reichen völlig aus.',
        'Regelmäßig abtauen: 5 mm Eisschicht steigert den Stromverbrauch um bis zu 30 %.',
        'Türdichtungen regelmäßig auf Risse und Dichtheit prüfen.',
      ],
      faq: [
        { question: 'Wie viel Strom verbraucht ein Kühlschrank pro Tag?', answer: 'Ein moderner Standard-Kühlschrank verbraucht ca. 0,3 bis 0,45 kWh pro Tag (ca. 10 bis 16 Cent).' }
      ]
    },
    'waschmaschine': {
      name: 'Waschmaschine',
      category: 'Haushalt & Reinigung',
      shortDescription: 'Eine moderne Waschmaschine verbraucht ca. 0,5 bis 1,0 kWh pro Waschgang (ca. 18 bis 35 Cent bei 35 ct/kWh).',
      dutyCycleExplanation: 'Über 80 % des Stromverbrauchs entfallen auf das Aufheizen des Wassers.',
      savingAdvice: [
        'Eco-Programme nutzen: Waschen bei 30 °C spart bis zu 60 % Strom.',
        'Trommel immer voll beladen.',
      ],
      faq: [
        { question: 'Was kostet ein Waschgang bei 60 °C im Vergleich zu 30 °C?', answer: 'Ein Waschgang bei 60 °C kostet ca. 35 bis 50 Cent, während ein 30-°C-Eco-Waschgang nur ca. 15 bis 20 Cent kostet.' }
      ]
    },
    'trockner': {
      name: 'Wäschetrockner',
      category: 'Haushalt & Reinigung',
      shortDescription: 'Wärmepumpentrockner verbrauchen ca. 1,2 bis 1,8 kWh pro Trocknung, während alte Kondenstrockner oft über 4 kWh benötigen.',
      dutyCycleExplanation: 'Wärmepumpentrockner nutzen die Abwärme im Kreislauf wieder.',
      savingAdvice: [
        'Wäsche mit mindestens 1.200 U/min vorschleudern.',
        'Flusensieb nach jedem Trockenvorgang säubern.',
      ],
      faq: [
        { question: 'Was kostet eine Trocknerladung?', answer: 'Ein moderner Wärmepumpentrockner kostet ca. 45 bis 65 Cent pro Ladung.' }
      ]
    },
    'geschirrspueler': {
      name: 'Geschirrspüler',
      category: 'Küche',
      shortDescription: 'Ein Spülgang im Eco-Modus verbraucht ca. 0,7 bis 0,9 kWh (ca. 25 bis 32 Cent).',
      dutyCycleExplanation: 'Das Gerät erhitzt das Wasser hocheffizient im geschlossenen Kreislauf.',
      savingAdvice: [
        'Eco-50°C-Programm als Standard nutzen.',
        'Spülmaschine nur voll beladen starten.',
      ],
      faq: [
        { question: 'Ist der Geschirrspüler sparsamer als Handspülen?', answer: 'Ja, moderne Geschirrspüler verbrauchen bis zu 50 % weniger Strom und 60 % weniger Wasser.' }
      ]
    },
    'backofen': {
      name: 'Backofen',
      category: 'Küche',
      shortDescription: 'Ein moderner Elektrobackofen verbraucht ca. 0,8 bis 1,5 kWh pro Betriebsstunde (ca. 28 bis 52 Cent).',
      dutyCycleExplanation: 'Das Vorheizen verbraucht die meiste Energie, Umluft ist ca. 20 % sparsamer als Ober-/Unterhitze.',
      savingAdvice: [
        'Umluft statt Ober-/Unterhitze nutzen (ermöglicht 20 °C niedrigere Temperatur).',
        'Backofentür während des Backens möglichst geschlossen halten.',
      ],
      faq: [
        { question: 'Muss man den Backofen wirklich vorheizen?', answer: 'In den meisten Fällen nicht; ohne Vorheizen sparst du bis zu 20 % Energie.' }
      ]
    },
    'herd': {
      name: 'Elektroherd / Induktionskochfeld',
      category: 'Küche',
      shortDescription: 'Ein Induktionskochfeld verbraucht pro Kochvorgang ca. 0,3 bis 0,7 kWh und arbeitet rund 20–30 % effizienter als Ceran.',
      dutyCycleExplanation: 'Induktion erzeugt Hitze direkt im Topfboden ohne Abwärmeverluste.',
      savingAdvice: [
        'Immer mit passendem Deckel kochen.',
        'Wasser im Wasserkocher vorkochen.',
      ],
      faq: [
        { question: 'Wie viel Strom spart Induktion gegenüber Ceran?', answer: 'Induktion spart rund 20 bis 30 % Strom und kocht doppelt so schnell.' }
      ]
    },
    'wasserkocher': {
      name: 'Wasserkocher',
      category: 'Küche',
      shortDescription: '1 Liter Wasser zum Kochen zu bringen benötigt ca. 0,1 kWh (ca. 3,5 Cent).',
      dutyCycleExplanation: 'Direkte Wärmeübertragung mit hohem Wirkungsgrad (über 90 %).',
      savingAdvice: ['Nur die tatsächlich benötigte Wassermenge erhitzen.', 'Regelmäßig entkalken.'],
      faq: [
        { question: 'Ist der Wasserkocher sparsamer als der Herd?', answer: 'Ja, der Wasserkocher ist ca. 30–50 % sparsamer als ein Kochtopf auf dem Ceranfeld.' }
      ]
    },
    'kaffeemaschine': {
      name: 'Kaffeevollautomat',
      category: 'Küche',
      shortDescription: 'Ein Kaffeevollautomat verbraucht ca. 0,02 bis 0,04 kWh pro Tasse Kaffee (inkl. Aufheizen & Spülen).',
      dutyCycleExplanation: 'Heizblock schaltet bei Bedarf kurzzeitig auf ca. 1.400 W.',
      savingAdvice: ['Automatische Abschaltung nach 10–15 Minuten aktivieren.', 'Warmhaltefunktion meiden.'],
      faq: [
        { question: 'Was kostet eine Tasse Kaffee an Strom?', answer: 'Eine Tasse Kaffee kostet ca. 1 bis 1,5 Cent an reinem Strom.' }
      ]
    },
    'fernseher': {
      name: 'Fernseher (TV)',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Ein moderner 55-Zoll-TV verbraucht ca. 70 bis 130 Watt (ca. 2,5 bis 4,5 Cent pro Stunde).',
      dutyCycleExplanation: 'Helligkeit, HDR und Bildmodus steuern den Echtzeitverbrauch.',
      savingAdvice: ['Helligkeitssensor aktivieren.', 'Standard- oder Film-Modus statt Dynamik wählen.'],
      faq: [
        { question: 'Verbraucht OLED mehr Strom als LED?', answer: 'Bei hellen Bildern ja, bei dunklen Szenen schalten sich Pixel ab und sparen Strom.' }
      ]
    },
    'gaming-pc': {
      name: 'Gaming-PC',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Unter Last verbraucht ein Gaming-PC ca. 350 bis 600 Watt (ca. 12 bis 21 Cent pro Stunde).',
      dutyCycleExplanation: 'GPU und CPU takten bei Spielen unter voller Leistungsaufnahme.',
      savingAdvice: ['FPS-Cap aktivieren.', 'Grafikkarte undervolten.'],
      faq: [
        { question: 'Was kostet 4h Gaming am Tag pro Monat?', answer: 'Rund 17 bis 20 Euro Stromkosten monatlich.' }
      ]
    },
    'gamingpc': {
      name: 'Gaming-PC',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Unter Last verbraucht ein Gaming-PC ca. 350 bis 600 Watt (ca. 12 bis 21 Cent pro Stunde).',
      dutyCycleExplanation: 'GPU und CPU takten bei Spielen unter voller Leistungsaufnahme.',
      savingAdvice: ['FPS-Cap aktivieren.', 'Grafikkarte undervolten.'],
      faq: [
        { question: 'Was kostet 4h Gaming am Tag pro Monat?', answer: 'Rund 17 bis 20 Euro Stromkosten monatlich.' }
      ]
    },
    'pc': {
      name: 'Desktop PC (Office)',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Ein normaler Office-PC verbraucht ca. 50 bis 100 Watt (ca. 1,8 bis 3,5 Cent pro Stunde).',
      dutyCycleExplanation: 'Geringe Grundlast bei Schreibarbeiten und Surfen.',
      savingAdvice: ['Energiesparmodus nach 15 min Inaktivität aktivieren.', 'Steckerleiste nutzen.'],
      faq: [
        { question: 'Wie viel Strom verbraucht ein PC im Homeoffice?', answer: 'Bei 8h täglicher Arbeit ca. 0,5 bis 0,8 kWh pro Tag (ca. 18–28 Cent).' }
      ]
    },
    'laptop': {
      name: 'Laptop / Notebook',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Ein Laptop verbraucht nur ca. 20 bis 60 Watt und ist bis zu 70 % sparsamer als ein Desktop-PC.',
      dutyCycleExplanation: 'Auf Energieeffizienz optimierte Mobilprozessoren.',
      savingAdvice: ['Displayhelligkeit leicht reduzieren.', 'Akkuschonendes Laden aktivieren.'],
      faq: [
        { question: 'Was kostet ein Laptop im Betrieb?', answer: 'Bei 8 Stunden täglicher Nutzung nur ca. 6 bis 12 Cent pro Tag.' }
      ]
    },
    'monitor': {
      name: 'Monitor (Bildschirm)',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Ein 27-Zoll-Monitor verbraucht ca. 20 bis 40 Watt (ca. 0,7 bis 1,4 Cent pro Stunde).',
      dutyCycleExplanation: 'Hintergrundbeleuchtung erzeugt konstanten Verbrauch.',
      savingAdvice: ['Helligkeit an Raumlicht anpassen.', 'Monitor bei Pausen ausschalten.'],
      faq: [
        { question: 'Wie viel kostet ein zweiter Monitor im Homeoffice?', answer: 'Ein zweiter Bildschirm kostet ca. 10 bis 20 Euro pro Jahr an Strom.' }
      ]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Die PS5 verbraucht beim Spielen ca. 180 bis 220 Watt (ca. 6,3 bis 7,7 Cent pro Stunde).',
      dutyCycleExplanation: 'Im Dashboard ca. 50 W, bei Next-Gen-Spielen bis zu 220 W.',
      savingAdvice: ['Ruhemodus-Funktionen (USB-Strom) auf das Nötigste begrenzen.', 'Auto-Standby aktivieren.'],
      faq: [
        { question: 'Was verbraucht die PS5 im Ruhemodus?', answer: 'Im normalen Ruhemodus ca. 1,5–3 Watt, beim Herunterladen von Updates ca. 30 Watt.' }
      ]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Die Xbox Series X verbraucht beim Spielen ca. 150 bis 210 Watt (ca. 5,3 bis 7,4 Cent pro Stunde).',
      dutyCycleExplanation: 'Volle Auslastung im 4K-120Hz-Spielbetrieb.',
      savingAdvice: ['Energiemodus "Herunterfahren (Energiesparend)" statt Standby wählen.'],
      faq: [
        { question: 'Wie viel spart der Energiesparmodus der Xbox?', answer: 'Der Energiesparmodus verbraucht 0,5 W statt 10–13 W im Sofortstartmodus (spart ca. 30 €/Jahr).' }
      ]
    },
    'klimaanlage': {
      name: 'Klimaanlage (Split & Mobil)',
      category: 'Klima & Heizen',
      shortDescription: 'Mobile Klimageräte verbrauchen ca. 800 bis 1.200 W (ca. 28–42 ct/h), Split-Klimageräte sind 50 % sparsamer.',
      dutyCycleExplanation: 'Kompressor moduliert nach Erreichen der Zieltemperatur.',
      savingAdvice: ['Solltemperatur auf 24–25 °C einstellen.', 'Tagsüber Fenster schließen.'],
      faq: [
        { question: 'Was kostet eine Klimaanlage im Sommer?', answer: 'Bei 30 Hitzetagen mit je 6h Betrieb kostet ein mobiles Gerät ca. 50–75 €, ein Split-Gerät ca. 25–40 €.' }
      ]
    },
    'ventilator': {
      name: 'Ventilator',
      category: 'Klima & Heizen',
      shortDescription: 'Ein Standventilator verbraucht nur ca. 25 bis 50 Watt (ca. 0,9 bis 1,8 Cent pro Stunde).',
      dutyCycleExplanation: 'Effizienter Elektromotor ohne Kältemittelkompressor.',
      savingAdvice: ['Nur laufen lassen, wenn sich Personen im Raum aufhalten.'],
      faq: [
        { question: 'Ist ein Ventilator sparsamer als eine Klimaanlage?', answer: 'Ja, ein Ventilator verbraucht rund 95 % weniger Strom als ein Klimagerät.' }
      ]
    },
    'heizluefter': {
      name: 'Heizlüfter',
      category: 'Klima & Heizen',
      shortDescription: 'Ein Heizlüfter zieht ca. 1.500 bis 2.000 Watt (ca. 53 bis 70 Cent pro Stunde).',
      dutyCycleExplanation: 'Heizspirale wandelt elektrische Energie 1:1 in Wärme um.',
      savingAdvice: ['Nur für kurze Übergangsphasen als Notheizung nutzen.'],
      faq: [
        { question: 'Was kostet es, den ganzen Tag mit Heizlüfter zu heizen?', answer: '8 Stunden Betrieb kosten rund 4,20 bis 5,60 Euro pro Tag (über 150 Euro im Monat).' }
      ]
    },
    'luftentfeuchter': {
      name: 'Luftentfeuchter',
      category: 'Klima & Heizen',
      shortDescription: 'Ein elektrischer Luftentfeuchter verbraucht ca. 200 bis 400 Watt (ca. 7 bis 14 Cent pro Stunde).',
      dutyCycleExplanation: 'Kompressor kühlt Lamellen ab, um Feuchtigkeit zu kondensieren.',
      savingAdvice: ['Zielfeuchtigkeit auf 50–55 % einstellen.', 'Türen und Fenster während des Betriebs schließen.'],
      faq: [
        { question: 'Wie lange sollte ein Luftentfeuchter laufen?', answer: 'In der Regel reichen 2 bis 4 Stunden täglich bei geschlossenen Fenstern aus.' }
      ]
    },
    'aquarium': {
      name: 'Aquarium',
      category: 'Hobby & Spezial',
      shortDescription: 'Ein 100-Liter-Aquarium verbraucht ca. 150 bis 300 kWh pro Jahr (ca. 53 bis 105 €).',
      dutyCycleExplanation: 'Heizstab und Beleuchtung machen den Hauptteil des Stromverbrauchs aus.',
      savingAdvice: ['Auf LED-Beleuchtung umrüsten.', 'Aquarium mit Abdeckung betreiben.'],
      faq: [
        { question: 'Was verbraucht beim Aquarium am meisten Strom?', answer: 'Der Heizstab, besonders wenn die Wassertemperatur deutlich über der Raumtemperatur liegt.' }
      ]
    },
    'pool': {
      name: 'Poolpumpe',
      category: 'Hobby & Spezial',
      shortDescription: 'Eine Poolpumpe verbraucht ca. 400 bis 1.000 Watt (ca. 14 bis 35 Cent pro Betriebsstunde).',
      dutyCycleExplanation: 'Wälzt das Beckenvolumen 2- bis 3-mal täglich um.',
      savingAdvice: ['Zeitschaltuhr nutzen.', 'Frequenzgesteuerte Poolpumpe wählen.'],
      faq: [
        { question: 'Wie viele Stunden sollte die Poolpumpe laufen?', answer: 'Im Sommer ca. 6 bis 8 Stunden täglich.' }
      ]
    },
    'whirlpool': {
      name: 'Whirlpool / Hot Tub',
      category: 'Hobby & Spezial',
      shortDescription: 'Ein Outdoor-Whirlpool verbraucht ca. 2.000 bis 4.000 kWh pro Jahr (ca. 700 bis 1.400 €).',
      dutyCycleExplanation: 'Dauerhafte Temperaturhaltung bei 37–39 °C erfordert kontinuierliche Heizleistung.',
      savingAdvice: ['Hochwertige Thermoabdeckung verwenden.', 'Standort windgeschützt wählen.'],
      faq: [
        { question: 'Was kostet ein Whirlpool im Monat?', answer: 'Je nach Jahreszeit ca. 50 bis 120 Euro pro Monat an Stromkosten.' }
      ]
    },
    '3d-drucker': {
      name: '3D-Drucker',
      category: 'Hobby & Spezial',
      shortDescription: 'Ein 3D-Drucker (FDM) verbraucht ca. 100 bis 180 Watt (ca. 3,5 bis 6,3 Cent pro Druckstunde).',
      dutyCycleExplanation: 'Das beheizte Druckbett (Heatbed) zieht ca. 70 % der Gesamtenergie.',
      savingAdvice: ['Gehäuse (Enclosure) nutzen, um Wärmeverluste des Betts zu verringern.'],
      faq: [
        { question: 'Was kostet ein 10-Stunden-Druck?', answer: 'Ein 10-stündiger Druck kostet ca. 40 bis 60 Cent an Strom.' }
      ]
    },
    'nas': {
      name: 'NAS (Netzwerkspeicher)',
      category: 'Hobby & Spezial',
      shortDescription: 'Ein 2-Bay-NAS verbraucht ca. 15 bis 30 Watt im 24/7-Betrieb (ca. 45 bis 90 € pro Jahr).',
      dutyCycleExplanation: 'Festplatten im Spindown senken den Ruhestrom auf unter 8 W.',
      savingAdvice: ['Festplatten-Ruhezustand aktivieren.', 'Zeitgesteuertes Ein-/Ausschalten nachts.'],
      faq: [
        { question: 'Was kostet ein NAS im Dauerbetrieb pro Jahr?', answer: 'Bei 20 Watt Dauerleistung exakt 175 kWh bzw. rund 61 Euro pro Jahr.' }
      ]
    },
    'server': {
      name: 'Homeserver',
      category: 'Hobby & Spezial',
      shortDescription: 'Ein sparsamer Homeserver (z.B. Mini-PC) verbraucht ca. 10 bis 40 Watt (ca. 30 bis 120 €/Jahr).',
      dutyCycleExplanation: 'Geringe Idle-Leistungsaufnahme bei moderner Hardware.',
      savingAdvice: ['Effiziente Mini-PCs statt alter Desktop-Hardware nutzen.'],
      faq: [
        { question: 'Wie viel Strom verbraucht ein Homeserver?', answer: 'Ein moderner Mini-PC verbraucht ca. 10–15 W Idle (ca. 30–45 €/Jahr).' }
      ]
    }
  },
  en: {
    'kuehlschrank': {
      name: 'Refrigerator (Fridge)',
      category: 'Kitchen',
      shortDescription: 'A modern refrigerator consumes around 100 to 160 kWh per year (approx. €35 to €56 / year). Older units often draw 250 to 350 kWh.',
      dutyCycleExplanation: 'While a fridge runs 24/7, the compressor only operates for about 20 to 40 minutes per hour.',
      savingAdvice: [
        'Set optimal temperature: 7 °C (45 °F) in the fridge and -18 °C (0 °F) in the freezer.',
        'Defrost regularly: A 5 mm ice layer increases electricity consumption by up to 30%.',
        'Check door seals regularly to keep cold air locked in.',
      ],
      faq: [{ question: 'How much electricity does a refrigerator consume per day?', answer: 'A modern standard refrigerator consumes approximately 0.3 to 0.45 kWh per day (about 10 to 16 cents).' }]
    },
    'waschmaschine': {
      name: 'Washing Machine',
      category: 'Household & Cleaning',
      shortDescription: 'A modern washing machine consumes approx. 0.5 to 1.0 kWh per cycle (about €0.18 to €0.35 at €0.35/kWh).',
      dutyCycleExplanation: 'Over 80% of electricity is used to heat the water. Motor spinning uses very little power.',
      savingAdvice: ['Use Eco 30 °C programs to save up to 60% electricity.', 'Always run full loads when possible.'],
      faq: [{ question: 'How much does a 60 °C cycle cost compared to 30 °C?', answer: 'A 60 °C cycle costs around €0.35–€0.50, whereas a 30 °C Eco cycle costs only about €0.15–€0.20.' }]
    },
    'trockner': {
      name: 'Tumble Dryer',
      category: 'Household & Cleaning',
      shortDescription: 'Heat pump dryers consume about 1.2 to 1.8 kWh per cycle, while older condenser dryers often exceed 4.0 kWh.',
      dutyCycleExplanation: 'Heat pump dryers recycle warm air continuously, reducing energy consumption by over 60%.',
      savingAdvice: ['Spin clothes at high speed (1,200–1,400 RPM) in the washer before drying.', 'Clean the lint filter after every cycle.'],
      faq: [{ question: 'How much does a single dryer cycle cost?', answer: 'A modern heat pump dryer costs approx. €0.45 to €0.65 per load, whereas older condenser models can cost over €1.50.' }]
    },
    'geschirrspueler': {
      name: 'Dishwasher',
      category: 'Kitchen',
      shortDescription: 'An Eco cycle consumes about 0.7 to 0.9 kWh (€0.25 to €0.32). It is far more efficient than hand washing.',
      dutyCycleExplanation: 'Water is heated efficiently in a closed circuit. The Eco cycle extends soaking time to save heating energy.',
      savingAdvice: ['Use the Eco 50 °C setting as your default program.', 'Only run the dishwasher when completely full.'],
      faq: [{ question: 'Is a dishwasher more economical than washing by hand?', answer: 'Yes, modern dishwashers use up to 50% less electricity and over 60% less water than washing by hand in the sink.' }]
    },
    'backofen': {
      name: 'Oven',
      category: 'Kitchen',
      shortDescription: 'A modern electric oven consumes approx. 0.8 to 1.5 kWh per operating hour (approx. €0.28 to €0.52).',
      dutyCycleExplanation: 'Preheating uses the most power. Convection mode is ~20% more efficient than conventional heating.',
      savingAdvice: ['Use fan convection mode instead of top/bottom heat.', 'Keep the oven door closed during baking.'],
      faq: [{ question: 'Do you need to preheat the oven?', answer: 'In most everyday cooking, preheating is unnecessary and skipping it saves up to 20% electricity.' }]
    },
    'herd': {
      name: 'Cooktop / Induction Stove',
      category: 'Kitchen',
      shortDescription: 'An induction cooktop consumes approx. 0.3 to 0.7 kWh per meal and is 20–30% more efficient than glass-ceramic.',
      dutyCycleExplanation: 'Induction generates heat directly in the ferromagnetic cookware base without thermal loss.',
      savingAdvice: ['Always cook with a properly fitting lid.', 'Pre-boil water in a kettle.'],
      faq: [{ question: 'How much electricity does induction save compared to glass-ceramic?', answer: 'Induction saves 20 to 30% electricity and heats up twice as fast.' }]
    },
    'wasserkocher': {
      name: 'Electric Kettle',
      category: 'Kitchen',
      shortDescription: 'Boiling 1 liter of water draws approx. 0.1 kWh (approx. 3.5 cents).',
      dutyCycleExplanation: 'Direct submerged heating element provides over 90% thermal efficiency.',
      savingAdvice: ['Only boil the exact amount of water you need.', 'Descale regularly to preserve heating speed.'],
      faq: [{ question: 'Is a kettle more efficient than a stovetop?', answer: 'Yes, an electric kettle is 30–50% more efficient than boiling water in a pot on a glass-ceramic stove.' }]
    },
    'kaffeemaschine': {
      name: 'Coffee Machine',
      category: 'Kitchen',
      shortDescription: 'An automatic espresso machine uses approx. 0.02 to 0.04 kWh per cup (including heating and rinsing).',
      dutyCycleExplanation: 'The thermoblock switches briefly to 1,400 W to flash-heat water on demand.',
      savingAdvice: ['Enable auto-power-off after 10–15 minutes.', 'Avoid keeping hotplates on continuously.'],
      faq: [{ question: 'How much does the electricity for a cup of coffee cost?', answer: 'Electricity for a single cup of coffee costs only about 1 to 1.5 cents.' }]
    },
    'fernseher': {
      name: 'Television (TV)',
      category: 'Entertainment & Office',
      shortDescription: 'A 55-inch LED/OLED TV draws approx. 70 to 130 Watts (about 2.5 to 4.5 cents per operating hour).',
      dutyCycleExplanation: 'Screen brightness, ambient lighting sensors, and HDR mode directly determine live power draw.',
      savingAdvice: ['Activate the ambient light sensor for automatic evening dimming.', 'Use standard or cinema mode instead of dynamic/vivid.'],
      faq: [{ question: 'Do OLED TVs consume more electricity than LCD/LED?', answer: 'OLED draws slightly more power for full white screens, but turns off pixels completely in dark scenes.' }]
    },
    'gaming-pc': {
      name: 'Gaming PC',
      category: 'Entertainment & Office',
      shortDescription: 'Under full load, a gaming PC draws 350 to 600 Watts (approx. 12 to 21 cents per gaming hour).',
      dutyCycleExplanation: 'The GPU and CPU draw peak electrical wattage during intense 3D rendering.',
      savingAdvice: ['Enable an FPS cap or G-Sync/FreeSync.', 'Undervolt the GPU for lower heat and power draw.'],
      faq: [{ question: 'How much does 4 hours of daily gaming cost per month?', answer: 'At 400 W average draw and 4 hours daily, monthly electricity costs are around €17 to €20.' }]
    },
    'gamingpc': {
      name: 'Gaming PC',
      category: 'Entertainment & Office',
      shortDescription: 'Under full load, a gaming PC draws 350 to 600 Watts (approx. 12 to 21 cents per gaming hour).',
      dutyCycleExplanation: 'The GPU and CPU draw peak electrical wattage during intense 3D rendering.',
      savingAdvice: ['Enable an FPS cap or G-Sync/FreeSync.', 'Undervolt the GPU for lower heat and power draw.'],
      faq: [{ question: 'How much does 4 hours of daily gaming cost per month?', answer: 'At 400 W average draw and 4 hours daily, monthly electricity costs are around €17 to €20.' }]
    },
    'pc': {
      name: 'Desktop PC (Office)',
      category: 'Entertainment & Office',
      shortDescription: 'A standard office desktop consumes approx. 50 to 100 Watts (approx. 1.8 to 3.5 cents per hour).',
      dutyCycleExplanation: 'Low base power during writing, browsing, and office applications.',
      savingAdvice: ['Set automatic sleep mode after 15 minutes of inactivity.', 'Use switchable power strips.'],
      faq: [{ question: 'How much power does an office PC use when working from home?', answer: 'During an 8-hour workday, an office PC consumes approx. 0.5 to 0.8 kWh (approx. 18–28 cents).' }]
    },
    'laptop': {
      name: 'Laptop / Notebook',
      category: 'Entertainment & Office',
      shortDescription: 'A laptop consumes only 20 to 60 Watts and is up to 70% more efficient than a desktop PC.',
      dutyCycleExplanation: 'Highly optimized mobile processors designed for battery efficiency.',
      savingAdvice: ['Lower screen brightness slightly.', 'Disconnect external peripherals when not needed.'],
      faq: [{ question: 'What does running a laptop cost per day?', answer: 'For 8 hours of daily use, a laptop costs only about 6 to 12 cents per day.' }]
    },
    'monitor': {
      name: 'Monitor (Display)',
      category: 'Entertainment & Office',
      shortDescription: 'A 27-inch computer monitor draws approx. 20 to 40 Watts (approx. 0.7 to 1.4 cents per hour).',
      dutyCycleExplanation: 'LED backlighting produces a steady, continuous power draw.',
      savingAdvice: ['Adjust brightness to match room ambient light.', 'Turn off monitor during breaks.'],
      faq: [{ question: 'How much does a dual monitor setup cost per year?', answer: 'A second monitor adds approximately €10 to €20 per year in electricity costs.' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'Entertainment & Office',
      shortDescription: 'The PS5 consumes approx. 180 to 220 Watts during active gaming (approx. 6.3 to 7.7 cents per hour).',
      dutyCycleExplanation: 'Draws approx. 50 W on dashboard and up to 220 W during demanding next-gen games.',
      savingAdvice: ['Limit rest mode USB power to necessary hours.', 'Enable auto-shutdown timer.'],
      faq: [{ question: 'How much electricity does the PS5 draw in rest mode?', answer: 'In standard rest mode approx. 1.5–3 Watts; while downloading updates approx. 30 Watts.' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'Entertainment & Office',
      shortDescription: 'The Xbox Series X consumes approx. 150 to 210 Watts during gaming (approx. 5.3 to 7.4 cents per hour).',
      dutyCycleExplanation: 'Full load during 4K 120Hz gaming sessions.',
      savingAdvice: ['Choose "Shutdown (energy saving)" mode over Instant-on standby.'],
      faq: [{ question: 'How much does the Xbox energy saving mode save?', answer: 'Energy-saving mode consumes 0.5 W instead of 10–13 W in Instant-on, saving approx. €30/year.' }]
    },
    'klimaanlage': {
      name: 'Air Conditioner',
      category: 'Climate & Heating',
      shortDescription: 'Portable ACs draw 800 to 1,200 Watts (approx. 28 to 42 ct/h), whereas mini-split inverter ACs are about 50% more efficient.',
      dutyCycleExplanation: 'The compressor ramps down into low-power inverter mode once target temperature is reached.',
      savingAdvice: ['Set target temperature reasonably: 24–25 °C (75–77 °F).', 'Keep windows and blinds closed during daytime.'],
      faq: [{ question: 'How much does running an air conditioner cost in summer?', answer: 'For 30 hot days with 6h daily runtime, a portable unit costs approx. €50–€75, while an efficient split system costs €25–€40.' }]
    },
    'ventilator': {
      name: 'Electric Fan',
      category: 'Climate & Heating',
      shortDescription: 'A standing pedestal fan draws only 25 to 50 Watts (approx. 0.9 to 1.8 cents per hour).',
      dutyCycleExplanation: 'Direct mechanical air circulation without a power-hungry refrigeration compressor.',
      savingAdvice: ['Turn off when leaving the room since fans cool people, not empty rooms.'],
      faq: [{ question: 'Is a fan more economical than an air conditioner?', answer: 'Yes, a fan uses approx. 95% less electricity than an air conditioner.' }]
    },
    'heizluefter': {
      name: 'Fan Heater',
      category: 'Climate & Heating',
      shortDescription: 'A portable fan heater draws 1,500 to 2,000 Watts (approx. 53 to 70 cents per operating hour).',
      dutyCycleExplanation: 'Resistance heating elements convert electricity 1:1 directly into thermal heat.',
      savingAdvice: ['Use only for brief spot heating, never as a primary heating source.'],
      faq: [{ question: 'What does it cost to run a fan heater all day?', answer: '8 hours of daily use costs €4.20 to €5.60 per day (over €150 per month).' }]
    },
    'luftentfeuchter': {
      name: 'Dehumidifier',
      category: 'Climate & Heating',
      shortDescription: 'An electric dehumidifier draws approx. 200 to 400 Watts (approx. 7 to 14 cents per operating hour).',
      dutyCycleExplanation: 'Refrigeration coils condense moisture out of ambient air.',
      savingAdvice: ['Set target relative humidity to 50–55%.', 'Keep room doors and windows closed while running.'],
      faq: [{ question: 'How long should a dehumidifier run daily?', answer: 'In most moisture problems, 2 to 4 hours daily in closed rooms is sufficient.' }]
    },
    'aquarium': {
      name: 'Aquarium',
      category: 'Hobby & Special',
      shortDescription: 'A 100-liter aquarium consumes approx. 150 to 300 kWh per year (approx. €53 to €105 / year).',
      dutyCycleExplanation: 'Water heater and lighting account for the vast majority of electrical consumption.',
      savingAdvice: ['Switch to high-efficiency LED lights.', 'Use a snug aquarium lid to prevent heat loss.'],
      faq: [{ question: 'What uses the most electricity in an aquarium?', answer: 'The heating element, especially if the tank temperature is much higher than room temperature.' }]
    },
    'pool': {
      name: 'Pool Pump',
      category: 'Hobby & Special',
      shortDescription: 'A swimming pool pump draws approx. 400 to 1,000 Watts (approx. 14 to 35 cents per hour).',
      dutyCycleExplanation: 'Circulates the entire pool volume 2 to 3 times per day.',
      savingAdvice: ['Install a timer to prevent unnecessary runtime.', 'Use a variable speed pump.'],
      faq: [{ question: 'How many hours should a pool pump run in summer?', answer: 'In summer, 6 to 8 hours daily is typically ideal for proper water filtration.' }]
    },
    'whirlpool': {
      name: 'Hot Tub / Jacuzzi',
      category: 'Hobby & Special',
      shortDescription: 'An outdoor hot tub consumes approx. 2,000 to 4,000 kWh per year (approx. €700 to €1,400 / year).',
      dutyCycleExplanation: 'Maintaining water at 37–39 °C (99–102 °F) requires continuous heating against outdoor weather.',
      savingAdvice: ['Use a thick insulated thermal cover.', 'Place the hot tub in a wind-sheltered location.'],
      faq: [{ question: 'How much does running a hot tub cost per month?', answer: 'Depending on weather, electricity costs average €50 to €120 per month.' }]
    },
    '3d-drucker': {
      name: '3D Printer',
      category: 'Hobby & Special',
      shortDescription: 'An FDM 3D printer draws approx. 100 to 180 Watts (approx. 3.5 to 6.3 cents per printing hour).',
      dutyCycleExplanation: 'The heated print bed accounts for around 70% of total electrical power.',
      savingAdvice: ['Use an enclosure to maintain ambient heat and lower bed heater demand.'],
      faq: [{ question: 'How much does a 10-hour 3D print cost?', answer: 'A 10-hour print costs approx. 40 to 60 cents in electricity.' }]
    },
    'nas': {
      name: 'NAS Storage',
      category: 'Hobby & Special',
      shortDescription: 'A 2-bay NAS server draws approx. 15 to 30 Watts running 24/7 (approx. €45 to €90 per year).',
      dutyCycleExplanation: 'Hard drive spin-down reduces idle power draw to under 8 W.',
      savingAdvice: ['Enable hard drive sleep mode.', 'Set automated scheduled shutdown at night.'],
      faq: [{ question: 'What does running a NAS 24/7 cost per year?', answer: 'At 20 Watts continuous draw, a NAS uses 175 kWh per year (approx. €61 / year).' }]
    },
    'server': {
      name: 'Home Server',
      category: 'Hobby & Special',
      shortDescription: 'A low-power home server (e.g. mini PC) draws approx. 10 to 40 Watts (approx. €30 to €120 / year).',
      dutyCycleExplanation: 'Modern x86/ARM processors feature ultra-low idle wattage states.',
      savingAdvice: ['Use efficient mini PCs instead of repurposed old desktop towers.'],
      faq: [{ question: 'How much power does a home server consume?', answer: 'A modern mini PC server draws only 10–15 W at idle (approx. €30–€45 per year).' }]
    }
  },
  es: {
    'kuehlschrank': {
      name: 'Frigorífico / Refrigerador',
      category: 'Cocina',
      shortDescription: 'Un frigorífico moderno consume unos 100 a 160 kWh al año (aprox. 35 a 56 €/año). Modelos antiguos superan los 250–350 kWh.',
      dutyCycleExplanation: 'Aunque está enchufado 24h, el compresor funciona unos 20 a 40 minutos por hora mediante termostato.',
      savingAdvice: ['Temperatura ideal: 7 °C en la nevera y -18 °C en el congelador.', 'Descongelar periódicamente.', 'Comprobar las gomas de cierre.'],
      faq: [{ question: '¿Cuánto consume una nevera al día?', answer: 'Un frigorífico estándar moderno consume entre 0,3 y 0,45 kWh al día (unos 10 a 16 céntimos).' }]
    },
    'waschmaschine': {
      name: 'Lavadora',
      category: 'Hogar y Limpieza',
      shortDescription: 'Una lavadora moderna consume entre 0,5 y 1,0 kWh por ciclo (aprox. 0,18 a 0,35 € por lavado).',
      dutyCycleExplanation: 'Más del 80% de la energía se destina a calentar el agua.',
      savingAdvice: ['Usa programas Eco a 30 °C para ahorrar hasta un 60% de energía.', 'Llena el tambor a plena carga.'],
      faq: [{ question: '¿Cuánto cuesta lavar a 60 °C frente a 30 °C?', answer: 'Lavar a 60 °C cuesta unos 0,35 a 0,50 €, frente a 0,15 a 0,20 € en modo Eco 30 °C.' }]
    },
    'trockner': {
      name: 'Secadora de Ropa',
      category: 'Hogar y Limpieza',
      shortDescription: 'Las secadoras con bomba de calor consumen aprox. 1,2 a 1,8 kWh por secado, frente a más de 4 kWh en modelos antiguos.',
      dutyCycleExplanation: 'La bomba de calor recircula el aire caliente ahorrando más del 60% de energía.',
      savingAdvice: ['Centrifugar a 1.200–1.400 rpm en la lavadora.', 'Limpiar el filtro tras cada uso.'],
      faq: [{ question: '¿Cuánto cuesta poner la secadora?', answer: 'Un ciclo con bomba de calor cuesta aprox. 0,45 a 0,65 €, frente a más de 1,50 € en modelos antiguos.' }]
    },
    'geschirrspueler': {
      name: 'Lavavajillas',
      category: 'Cocina',
      shortDescription: 'El programa Eco consume entre 0,7 y 0,9 kWh (0,25 a 0,32 €). Es mucho más eficiente que fregar a mano.',
      dutyCycleExplanation: 'El agua se calienta en circuito cerrado y el remojo prolongado ahorra energía.',
      savingAdvice: ['Usa el programa Eco a 50 °C habitualmente.', 'Pon el lavavajillas solo lleno.'],
      faq: [{ question: '¿Es más económico el lavavajillas que fregar a mano?', answer: 'Sí, consume hasta un 50% menos electricidad y un 60% menos agua.' }]
    },
    'backofen': {
      name: 'Horno Eléctrico',
      category: 'Cocina',
      shortDescription: 'Un horno eléctrico moderno consume unos 0,8 a 1,5 kWh por hora de uso (aprox. 0,28 a 0,52 €).',
      dutyCycleExplanation: 'El precalentamiento es lo que más consume; el modo aire forzado ahorra un 20%.',
      savingAdvice: ['Usa calor con ventilador/aire.', 'Evita abrir la puerta innecesariamente.'],
      faq: [{ question: '¿Es necesario precalentar el horno?', answer: 'En la mayoría de recetas no es imprescindible y omitirlo ahorra hasta un 20% de energía.' }]
    },
    'herd': {
      name: 'Placa de Inducción / Vitrocerámica',
      category: 'Cocina',
      shortDescription: 'La inducción consume unos 0,3 a 0,7 kWh por comida y es un 20–30% más eficiente que la vitrocerámica.',
      dutyCycleExplanation: 'Calienta directamente la base de la sartén sin pérdidas de calor.',
      savingAdvice: ['Cocina siempre con tapa.', 'Hierve agua previamente en hervidor eléctrico.'],
      faq: [{ question: '¿Cuánto ahorra la inducción frente a la vitrocerámica?', answer: 'Ahorra entre un 20 y un 30% de luz y calienta en la mitad de tiempo.' }]
    },
    'wasserkocher': {
      name: 'Hervidor de Agua',
      category: 'Cocina',
      shortDescription: 'Hervir 1 litro de agua consume aprox. 0,1 kWh (unos 3,5 céntimos).',
      dutyCycleExplanation: 'Transferencia térmica directa con más del 90% de eficiencia.',
      savingAdvice: ['Hierve solo la cantidad de agua que vas a utilizar.', 'Descalcifica con regularidad.'],
      faq: [{ question: '¿Es más eficiente el hervidor que el fuego?', answer: 'Sí, es un 30–50% más eficiente que calentar agua en cazo sobre la placa vitrocerámica.' }]
    },
    'kaffeemaschine': {
      name: 'Cafetera Automática',
      category: 'Cocina',
      shortDescription: 'Una cafetera automática consume unos 0,02 a 0,04 kWh por taza (incluyendo enjuague).',
      dutyCycleExplanation: 'El termobloque calienta el agua instantáneamente a máxima potencia.',
      savingAdvice: ['Activa el apagado automático tras 10–15 min.'],
      faq: [{ question: '¿Cuánto cuesta en luz hacer un café?', answer: 'El coste eléctrico de un café es de solo 1 a 1,5 céntimos.' }]
    },
    'fernseher': {
      name: 'Televisor (TV)',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'Un televisor de 55 pulgadas LED/OLED consume entre 70 y 130 W (unos 2,5 a 4,5 céntimos por hora).',
      dutyCycleExplanation: 'El brillo, HDR y sensores ambientales regulan el consumo en tiempo real.',
      savingAdvice: ['Activa el sensor de luz ambiental.', 'Usa modo cine en vez de dinámico.'],
      faq: [{ question: '¿Consume más OLED que LED?', answer: 'En imágenes muy claras sí, pero en escenas oscuras apaga píxeles y ahorra luz.' }]
    },
    'gaming-pc': {
      name: 'PC Gaming',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'A plena carga jugando, consume entre 350 y 600 W (unos 0,12 a 0,21 € por hora de juego).',
      dutyCycleExplanation: 'La GPU y la CPU demandan máxima potencia en gráficos 3D exigentes.',
      savingAdvice: ['Limita los FPS con G-Sync/FreeSync.', 'Haz undervolting a la gráfica.'],
      faq: [{ question: '¿Cuánto cuesta jugar 4h al día al mes?', answer: 'Aproximadamente 17 a 20 euros al mes de electricidad.' }]
    },
    'gamingpc': {
      name: 'PC Gaming',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'A plena carga jugando, consume entre 350 y 600 W (unos 0,12 a 0,21 € por hora de juego).',
      dutyCycleExplanation: 'La GPU y la CPU demandan máxima potencia en gráficos 3D exigentes.',
      savingAdvice: ['Limita los FPS con G-Sync/FreeSync.', 'Haz undervolting a la gráfica.'],
      faq: [{ question: '¿Cuánto cuesta jugar 4h al día al mes?', answer: 'Aproximadamente 17 a 20 euros al mes de electricidad.' }]
    },
    'pc': {
      name: 'PC de Escritorio (Oficina)',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'Un ordenador de oficina consume entre 50 y 100 W (unos 1,8 a 3,5 céntimos por hora).',
      dutyCycleExplanation: 'Bajo consumo base en tareas ofimáticas y navegación.',
      savingAdvice: ['Activa suspensión automática tras 15 min de inactividad.'],
      faq: [{ question: '¿Cuánto gasta un PC teletrabajando?', answer: 'En 8 horas diarias consume unos 0,5 a 0,8 kWh (aprox. 18–28 céntimos).' }]
    },
    'laptop': {
      name: 'Portátil / Laptop',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'Un portátil consume solo de 20 a 60 W y es hasta un 70% más eficiente que un sobremesa.',
      dutyCycleExplanation: 'Procesadores móviles de bajo consumo.',
      savingAdvice: ['Reduce ligeramente el brillo de la pantalla.'],
      faq: [{ question: '¿Cuánto cuesta usar el portátil al día?', answer: 'Unas 8 horas de uso cuestan solo de 6 a 12 céntimos al día.' }]
    },
    'monitor': {
      name: 'Monitor de Ordenador',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'Un monitor de 27 pulgadas consume unos 20 a 40 W (unos 0,7 a 1,4 céntimos por hora).',
      dutyCycleExplanation: 'La retroiluminación LED genera un consumo constante.',
      savingAdvice: ['Ajusta el brillo a la luz de la habitación.'],
      faq: [{ question: '¿Cuánto cuesta un segundo monitor al año?', answer: 'Añadir un segundo monitor supone unos 10 a 20 € al año en electricidad.' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'La PS5 consume entre 180 y 220 W jugando (unos 6,3 a 7,7 céntimos por hora).',
      dutyCycleExplanation: 'En el menú consume 50 W y jugando a títulos 4K hasta 220 W.',
      savingAdvice: ['Limita las horas de alimentación USB en modo reposo.'],
      faq: [{ question: '¿Cuánto consume la PS5 en reposo?', answer: 'En reposo consume entre 1,5 y 3 W; descargando actualizaciones unos 30 W.' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'La Xbox Series X consume entre 150 y 210 W jugando (unos 5,3 a 7,4 céntimos por hora).',
      dutyCycleExplanation: 'Pleno rendimiento en juegos a 4K 120Hz.',
      savingAdvice: ['Usa el modo "Apagado (ahorro de energía)" en lugar de inicio instantáneo.'],
      faq: [{ question: '¿Cuánto ahorra el modo bajo consumo de Xbox?', answer: 'Consume 0,5 W frente a 10–13 W en reposo activo, ahorrando unos 30 €/año.' }]
    },
    'klimaanlage': {
      name: 'Aire Acondicionado',
      category: 'Climatización',
      shortDescription: 'Los portátiles consumen 800 a 1.200 W (28 a 42 ct/h); los splits inverter son un 50% más eficientes.',
      dutyCycleExplanation: 'El compresor modula la potencia al alcanzar la temperatura objetivo.',
      savingAdvice: ['Fija la temperatura en 24–25 °C.', 'Baja persianas durante las horas de más sol.'],
      faq: [{ question: '¿Cuánto cuesta el aire acondicionado en verano?', answer: 'En 30 días de calor a 6h diarias, un portátil cuesta aprox. 50–75 € y un split 25–40 €.' }]
    },
    'ventilator': {
      name: 'Ventilador',
      category: 'Climatización',
      shortDescription: 'Un ventilador de pie consume solo 25 a 50 W (unos 0,9 a 1,8 céntimos por hora).',
      dutyCycleExplanation: 'Motor directo sin compresor de refrigeración.',
      savingAdvice: ['Apágalo al salir de la habitación (refresca a las personas, no el aire).'],
      faq: [{ question: '¿Gasta mucho menos un ventilador que el aire acondicionado?', answer: 'Sí, gasta hasta un 95% menos de luz.' }]
    },
    'heizluefter': {
      name: 'Calefactor Eléctrico',
      category: 'Climatización',
      shortDescription: 'Un calefactor consume entre 1.500 y 2.000 W (unos 53 a 70 céntimos por hora de uso).',
      dutyCycleExplanation: 'Resistencia eléctrica que convierte electricidad en calor 1:1.',
      savingAdvice: ['Úsalo solo para calentar puntualmente unos minutos.'],
      faq: [{ question: '¿Cuánto cuesta encenderlo todo el día?', answer: '8 horas al día cuestan entre 4,20 y 5,60 € diarios (más de 150 € al mes).' }]
    },
    'luftentfeuchter': {
      name: 'Deshumidificador',
      category: 'Climatización',
      shortDescription: 'Un deshumidificador consume entre 200 y 400 W (unos 7 a 14 céntimos por hora).',
      dutyCycleExplanation: 'El compresor condensa la humedad del aire ambiente.',
      savingAdvice: ['Fija la humedad deseada en 50–55%.', 'Cierra puertas y ventanas durante su uso.'],
      faq: [{ question: '¿Cuántas horas debe funcionar al día?', answer: 'Con 2 a 4 horas al día con ventanas cerradas suele ser suficiente.' }]
    },
    'aquarium': {
      name: 'Acuario',
      category: 'Hobby y Especial',
      shortDescription: 'Un acuario de 100 litros consume aprox. 150 a 300 kWh al año (unos 53 a 105 €/año).',
      dutyCycleExplanation: 'El calentador y la iluminación suponen casi todo el consumo.',
      savingAdvice: ['Usa luces LED y mantén el acuario tapado.'],
      faq: [{ question: '¿Qué es lo que más gasta en un acuario?', answer: 'El calentador termostático de agua.' }]
    },
    'pool': {
      name: 'Bomba de Piscina',
      category: 'Hobby y Especial',
      shortDescription: 'Una bomba de piscina consume entre 400 y 1.000 W (unos 14 a 35 céntimos por hora).',
      dutyCycleExplanation: 'Filtra el volumen total de agua 2 a 3 veces al día.',
      savingAdvice: ['Usa un temporizador diario.', 'Elige bombas de velocidad variable.'],
      faq: [{ question: '¿Cuántas horas debe funcionar en verano?', answer: 'Entre 6 y 8 horas diarias en temporada de baño.' }]
    },
    'whirlpool': {
      name: 'Jacuzzi / Spa Exterior',
      category: 'Hobby y Especial',
      shortDescription: 'Un jacuzzi exterior consume entre 2.000 y 4.000 kWh al año (unos 700 a 1.400 €/año).',
      dutyCycleExplanation: 'Mantener el agua caliente a 38 °C requiere calefacción continua.',
      savingAdvice: ['Usa siempre una cubierta térmica gruesa.'],
      faq: [{ question: '¿Cuánto cuesta un jacuzzi al mes?', answer: 'Entre 50 y 120 euros al mes de electricidad según la época del año.' }]
    },
    '3d-drucker': {
      name: 'Impresora 3D',
      category: 'Hobby y Especial',
      shortDescription: 'Una impresora 3D consume entre 100 y 180 W (unos 3,5 a 6,3 céntimos por hora de impresión).',
      dutyCycleExplanation: 'La cama caliente consume el 70% de la energía.',
      savingAdvice: ['Usa un cerramiento (enclosure) para retener el calor.'],
      faq: [{ question: '¿Cuánto cuesta una impresión de 10 horas?', answer: 'Unos 40 a 60 céntimos de electricidad.' }]
    },
    'nas': {
      name: 'Servidor NAS',
      category: 'Hobby y Especial',
      shortDescription: 'Un NAS de 2 bahías consume entre 15 y 30 W encendido 24/7 (unos 45 a 90 € al año).',
      dutyCycleExplanation: 'El apagado de discos (spindown) reduce el reposo a menos de 8 W.',
      savingAdvice: ['Activa la hibernación de discos duros.'],
      faq: [{ question: '¿Cuánto cuesta tener un NAS encendido todo el año?', answer: 'A 20 W continuos son unos 61 euros al año.' }]
    },
    'server': {
      name: 'Servidor Doméstico',
      category: 'Hobby y Especial',
      shortDescription: 'Un servidor doméstico de bajo consumo (Mini PC) consume entre 10 y 40 W (unos 30 a 120 €/año).',
      dutyCycleExplanation: 'Procesadores modernos con consumo ultrabajo en reposo.',
      savingAdvice: ['Usa Mini PCs modernos en lugar de torres viejas.'],
      faq: [{ question: '¿Cuánto consume un servidor casero?', answer: 'Un Mini PC moderno gasta solo 10–15 W en reposo (unos 30–45 € al año).' }]
    }
  },
  ja: {
    'kuehlschrank': {
      name: '冷蔵庫',
      category: 'キッチン家電',
      shortDescription: '最新の冷蔵庫の年間消費電力量は約100〜160kWh（年間約35〜56€）。古い機器は250〜350kWhに達します。',
      dutyCycleExplanation: '24時間稼働していますが、コンプレッサーは1時間あたり約20〜40分のみ作動します。',
      savingAdvice: ['冷蔵室は7℃、冷凍室は-18℃を目安に設定。', '定期的に霜取りを行い、パッキンの密閉を確認。'],
      faq: [{ question: '冷蔵庫の1日あたりの電気代は？', answer: '最新の標準型で1日約0.3〜0.45kWh（約10〜16セント）です。' }]
    },
    'waschmaschine': {
      name: '洗濯機',
      category: '生活・洗濯家電',
      shortDescription: '最新の洗濯機は1回あたり約0.5〜1.0kWhを消費します（1回あたり約18〜35セント）。',
      dutyCycleExplanation: '電力の80％以上は水温を上げるヒーターに使われます。',
      savingAdvice: ['節電コース（30℃以下での洗濯）を活用する。', 'まとめ洗いを行う。'],
      faq: [{ question: '水温による電気代の違いは？', answer: '60℃洗いはおよそ35〜50セント、30℃以下のエコ運転なら約15〜20セントに抑えられます。' }]
    },
    'trockner': {
      name: '衣類乾燥機',
      category: '生活・洗濯家電',
      shortDescription: 'ヒートポンプ式乾燥機は1回あたり約1.2〜1.8kWh、従来のヒーター式は4kWh以上消費します。',
      dutyCycleExplanation: 'ヒートポンプ式は熱を再利用するため60％以上の省エネが可能です。',
      savingAdvice: ['洗濯機でしっかり脱水してから乾燥機に入れる。', '使用後は毎回フィルター掃除。'],
      faq: [{ question: '乾燥機1回の電気代はいくらですか？', answer: '最新のヒートポンプ式で約45〜65セント、旧型では1.50€以上かかります。' }]
    },
    'geschirrspueler': {
      name: '食器洗い乾燥機（食洗機）',
      category: 'キッチン家電',
      shortDescription: 'エコモードで1回あたり約0.7〜0.9kWh（約25〜32セント）。手洗いよりも水と電気の節約になります。',
      dutyCycleExplanation: '循環水を効率よく加熱し、つけ置き時間を長くして電力を抑えます。',
      savingAdvice: ['エコモード（50℃）を使用する。', '庫内いっぱいにまとめて洗う。'],
      faq: [{ question: '手洗いと食洗機はどちらがお得ですか？', answer: '食洗機は手洗いと比べて電気代・ガス代を最大50％、水の使用量を60％以上削減できます。' }]
    },
    'backofen': {
      name: '電気オーブン',
      category: 'キッチン家電',
      shortDescription: '1時間あたり約0.8〜1.5kWh（約28〜52セント）を消費します。',
      dutyCycleExplanation: '予熱時に最大電力を消費し、ファン対流（熱風）モードは従来比約20％省エネです。',
      savingAdvice: ['ファン対流モードを活用する。', '調理中に無駄に扉を開けない。'],
      faq: [{ question: 'オーブンの予熱は必須ですか？', answer: '多くの料理で予熱を省くことができ、最大20％の節電になります。' }]
    },
    'herd': {
      name: 'IHクッキングヒーター',
      category: 'キッチン家電',
      shortDescription: '1回の調理で約0.3〜0.7kWhを消費し、ラジエントヒーター比で20〜30％高効率です。',
      dutyCycleExplanation: '磁力線で鍋底自体を発熱させるため熱損失がほぼありません。',
      savingAdvice: ['鍋にフタをして調理する。', 'お湯は電気ケトルで沸かしてから使う。'],
      faq: [{ question: 'IHは従来の電気コンロより電気代が安い？', answer: '熱効率が約90％と非常に高いため、20〜30％の省エネになります。' }]
    },
    'wasserkocher': {
      name: '電気ケトル',
      category: 'キッチン家電',
      shortDescription: '1リットルのお湯を沸かすのに約0.1kWh（約3.5セント）を消費します。',
      dutyCycleExplanation: 'ヒーターが水に直接接触し90％以上の熱効率を実現。',
      savingAdvice: ['必要な分だけ水を沸かす。', '定期的にクエン酸で水垢を除去する。'],
      faq: [{ question: 'コンロで沸かすよりケトルの方がお得？', answer: 'はい、電気ケトルはコンロで沸かすより30〜50％効率的です。' }]
    },
    'kaffeemaschine': {
      name: '全自動コーヒーマシン',
      category: 'キッチン家電',
      shortDescription: '1杯あたり約0.02〜0.04kWh（加熱・自動洗浄含む）を消費します。',
      dutyCycleExplanation: '瞬間湯沸かしサーモブロックで必要時のみ瞬間加熱。',
      savingAdvice: ['10〜15分でのオートオフ機能を設定する。'],
      faq: [{ question: 'コーヒー1杯の電気代は？', answer: '1杯あたり約1〜1.5セント（約1.5〜2.5円）です。' }]
    },
    'fernseher': {
      name: 'テレビ（液晶・有機EL）',
      category: 'エンタメ・パソコン',
      shortDescription: '55インチのテレビは約70〜130W（1時間あたり約2.5〜4.5セント）を消費します。',
      dutyCycleExplanation: '画面の明るさ、HDR、周囲の明るさセンサーでリアルタイムに変動。',
      savingAdvice: ['明るさ自動調整センサーを有効にする。', '標準または映画モードを選択。'],
      faq: [{ question: '有機ELテレビは液晶より電気代が高い？', answer: '明るい画面ではやや高いですが、暗いシーンでは素子が消灯し省エネになります。' }]
    },
    'gaming-pc': {
      name: 'ゲーミングPC',
      category: 'エンタメ・パソコン',
      shortDescription: 'ゲームプレイ時の消費電力は約350〜600W（1時間あたり約12〜21セント）。',
      dutyCycleExplanation: 'グラフィックボード（GPU）とCPUが3D処理時に大電力を消費。',
      savingAdvice: ['FPS上限を設定して過剰なGPU負荷を抑制。', 'GPUのアンダーボルト。'],
      faq: [{ question: '1日4時間ゲームをすると1ヶ月の電気代は？', answer: '月々約17〜20ユーロ（約2,700〜3,200円）となります。' }]
    },
    'gamingpc': {
      name: 'ゲーミングPC',
      category: 'エンタメ・パソコン',
      shortDescription: 'ゲームプレイ時の消費電力は約350〜600W（1時間あたり約12〜21セント）。',
      dutyCycleExplanation: 'グラフィックボード（GPU）とCPUが3D処理時に大電力を消費。',
      savingAdvice: ['FPS上限を設定して過剰なGPU負荷を抑制。', 'GPUのアンダーボルト。'],
      faq: [{ question: '1日4時間ゲームをすると1ヶ月の電気代は？', answer: '月々約17〜20ユーロ（約2,700〜3,200円）となります。' }]
    },
    'pc': {
      name: 'デスクトップPC（事務用）',
      category: 'エンタメ・パソコン',
      shortDescription: '事務用PCは約50〜100W（1時間あたり約1.8〜3.5セント）を消費します。',
      dutyCycleExplanation: '書類作成やブラウジング時は低い待機電力を維持。',
      savingAdvice: ['15分でのスリープ設定を有効にする。'],
      faq: [{ question: '在宅勤務でのPC電気代は？', answer: '1日8時間で約0.5〜0.8kWh（約18〜28セント）です。' }]
    },
    'laptop': {
      name: 'ノートパソコン',
      category: 'エンタメ・パソコン',
      shortDescription: 'ノートPCはわずか20〜60Wしか消費せず、デスクトップより最大70％省エネです。',
      dutyCycleExplanation: 'バッテリー駆動に最適化された省電力CPUを搭載。',
      savingAdvice: ['画面の明るさを適度に下げる。'],
      faq: [{ question: 'ノートPCの1日の電気代は？', answer: '8時間使用しても1日あたり約6〜12セントです。' }]
    },
    'monitor': {
      name: 'PCモニター',
      category: 'エンタメ・パソコン',
      shortDescription: '27インチモニターは約20〜40W（1時間あたり約0.7〜1.4セント）を消費します。',
      dutyCycleExplanation: 'LEDバックライトによる一定の電力消費。',
      savingAdvice: ['部屋の明るさに合わせて輝度を調節。'],
      faq: [{ question: 'デュアルモニターにすると電気代はいくら増える？', answer: '年間で約10〜20ユーロ程度です。' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'エンタメ・パソコン',
      shortDescription: 'ゲームプレイ時に約180〜220W（1時間あたり約6.3〜7.7セント）を消費します。',
      dutyCycleExplanation: 'ホーム画面で約50W、4Kゲームプレイ時に最大220W。',
      savingAdvice: ['レストモード中のUSB給電時間を制限。'],
      faq: [{ question: 'PS5のレストモード待機電力は？', answer: '通常時約1.5〜3W、ダウンロード時約30Wです。' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'エンタメ・パソコン',
      shortDescription: 'ゲームプレイ時に約150〜210W（1時間あたり約5.3〜7.4セント）を消費します。',
      dutyCycleExplanation: '4K 120Hz駆動時に最大負荷。',
      savingAdvice: ['「省電力（完全シャットダウン）」モードを選択。'],
      faq: [{ question: '省電力モードでいくら節約できる？', answer: '待機電力が10〜13Wから0.5Wになり、年間約30€節約できます。' }]
    },
    'klimaanlage': {
      name: 'エアコン（クーラー）',
      category: '空調・暖房',
      shortDescription: 'ポータブル式は約800〜1,200W（28〜42 ct/h）、セパレート型インバーター式は約50％省エネです。',
      dutyCycleExplanation: '設定温度に達するとインバーター制御で低出力運転に移行。',
      savingAdvice: ['冷房時は24〜26℃を目安に設定。', '直射日光をカーテンで遮る。'],
      faq: [{ question: '夏のエアコン代はどれくらい？', answer: '30日間に1日6時間運転した場合、ポータブルで約50〜75€、セパレート型で約25〜40€です。' }]
    },
    'ventilator': {
      name: '扇風機 / サーキュレーター',
      category: '空調・暖房',
      shortDescription: '扇風機はわずか25〜50W（1時間あたり約0.9〜1.8セント）しか消費しません。',
      dutyCycleExplanation: 'コンプレッサーを使わずモーターのみで送風。',
      savingAdvice: ['部屋を空ける時は消す（風が当たっている人だけが涼しさを感じるため）。'],
      faq: [{ question: 'エアコンよりどれくらい節電になる？', answer: 'エアコンと比べて約95％の電力を削減できます。' }]
    },
    'heizluefter': {
      name: 'セラミックファンヒーター',
      category: '空調・暖房',
      shortDescription: '電気ファンヒーターは約1,500〜2,000W（1時間あたり約53〜70セント）を消費します。',
      dutyCycleExplanation: '電気を1:1で直接熱に変換するため大電力を消費。',
      savingAdvice: ['短時間のスポット暖房のみに使用する。'],
      faq: [{ question: '1日中つけっぱなしにするといくら？', answer: '1日8時間で約4.20〜5.60€（月額150€以上）かかります。' }]
    },
    'luftentfeuchter': {
      name: '除湿機',
      category: '空調・暖房',
      shortDescription: 'コンプレッサー式除湿機は約200〜400W（1時間あたり約7〜14セント）を消費します。',
      dutyCycleExplanation: '冷却器で湿気を結露させて除去。',
      savingAdvice: ['目標湿度を50〜55％に設定。', '部屋の窓やドアを閉めて運転。'],
      faq: [{ question: '1日何時間運転すれば良い？', answer: '密閉空間で1日2〜4時間稼働させれば十分に除湿できます。' }]
    },
    'aquarium': {
      name: 'アクアリウム（水槽）',
      category: '趣味・特殊設備',
      shortDescription: '100L水槽で年間約150〜300kWh（年間約53〜105€）を消費します。',
      dutyCycleExplanation: '水温ヒーターと照明が消費電力の大部分を占めます。',
      savingAdvice: ['LED照明を採用し、フタで放熱を防ぐ。'],
      faq: [{ question: '水槽で一番電気を食う器具は？', answer: '水温を室温より高く保つオートヒーターです。' }]
    },
    'pool': {
      name: 'プール循環ポンプ',
      category: '趣味・特殊設備',
      shortDescription: 'プールポンプは約400〜1,000W（1時間あたり約14〜35セント）を消費します。',
      dutyCycleExplanation: '1日にプール全体の水量を2〜3回循環ろ過。',
      savingAdvice: ['タイマーで運転時間を管理。', '可変速ポンプを導入。'],
      faq: [{ question: '夏場は何時間回すべき？', answer: '1日あたり6〜8時間が目安です。' }]
    },
    'whirlpool': {
      name: '屋外ジャグジー / スパ',
      category: '趣味・特殊設備',
      shortDescription: '年間約2,000〜4,000kWh（年間約700〜1,400€）を消費します。',
      dutyCycleExplanation: '水温38℃前後を年中維持するため常にヒーターが稼働。',
      savingAdvice: ['厚手の保温サーモカバーを使用。'],
      faq: [{ question: '1ヶ月の電気代はどれくらい？', answer: '季節により月額約50〜120€の電気代がかかります。' }]
    },
    '3d-drucker': {
      name: '3Dプリンター',
      category: '趣味・特殊設備',
      shortDescription: 'FDM方式で約100〜180W（1時間あたり約3.5〜6.3セント）を消費します。',
      dutyCycleExplanation: '加熱ヒートベッドが全電力の約70％を消費。',
      savingAdvice: ['エンクロージャー（囲い）で保温する。'],
      faq: [{ question: '10時間の造形で電気代はいくら？', answer: '約40〜60セント程度です。' }]
    },
    'nas': {
      name: 'NAS（ネットワークHDD）',
      category: '趣味・特殊設備',
      shortDescription: '2ベイNASで約15〜30W（年間約45〜90€）を消費します。',
      dutyCycleExplanation: 'HDDスピンダウン機能で待機電力を8W以下に低減。',
      savingAdvice: ['HDDハイバネーションを有効にする。'],
      faq: [{ question: '24時間つけっぱなしで年間いくら？', answer: '20W稼働で年間約61€（約9,700円）です。' }]
    },
    'server': {
      name: '自宅サーバー',
      category: '趣味・特殊設備',
      shortDescription: '省電力ミニPCサーバーで約10〜40W（年間約30〜120€）を消費します。',
      dutyCycleExplanation: '最新CPUはアイドル時の消費電力が極めて低く設計されています。',
      savingAdvice: ['古いタワーPCではなく最新のミニPCを活用。'],
      faq: [{ question: '常時稼働サーバーの電気代は？', answer: '最新ミニPCならアイドル時10〜15Wで年間約30〜45€です。' }]
    }
  },
  fr: {
    'kuehlschrank': {
      name: 'Réfrigérateur (Frigo)',
      category: 'Cuisine',
      shortDescription: 'Un réfrigérateur moderne consomme environ 100 à 160 kWh par an (environ 35 à 56 €/an).',
      dutyCycleExplanation: 'Le compresseur ne fonctionne que 20 à 40 minutes par heure grâce au thermostat.',
      savingAdvice: ['Réglez la température à 7 °C et -18 °C au congélateur.', 'Dégivrez régulièrement.'],
      faq: [{ question: 'Combien consomme un frigo par jour ?', answer: 'Environ 0,3 à 0,45 kWh par jour (10 à 16 centimes).' }]
    },
    'waschmaschine': {
      name: 'Lave-linge',
      category: 'Ménage & Entretien',
      shortDescription: 'Un lave-linge moderne consomme environ 0,5 à 1,0 kWh par cycle (environ 0,18 à 0,35 € par lavage).',
      dutyCycleExplanation: 'Plus de 80 % de l\'énergie sert à chauffer l\'eau.',
      savingAdvice: ['Utilisez les programmes Éco 30 °C.', 'Remplissez le tambour à pleine charge.'],
      faq: [{ question: 'Quel est le coût d\'un lavage à 60 °C comparé à 30 °C ?', answer: 'Un lavage à 60 °C coûte environ 0,35 à 0,50 €, contre 0,15 à 0,20 € en Éco 30 °C.' }]
    },
    'trockner': {
      name: 'Sèche-linge',
      category: 'Ménage & Entretien',
      shortDescription: 'Les sèche-linge pompe à chaleur consomment environ 1,2 à 1,8 kWh par cycle (contre 4 kWh pour les anciens).',
      dutyCycleExplanation: 'La pompe à chaleur recycle l\'air chaud et économise plus de 60 % d\'énergie.',
      savingAdvice: ['Essorez à 1 200–1 400 tr/min dans le lave-linge.', 'Nettoyez le filtre après chaque cycle.'],
      faq: [{ question: 'Combien coûte un cycle de sèche-linge ?', answer: 'Environ 0,45 à 0,65 € par cycle avec pompe à chaleur.' }]
    },
    'geschirrspueler': {
      name: 'Lave-vaisselle',
      category: 'Cuisine',
      shortDescription: 'Le cycle Éco consomme environ 0,7 à 0,9 kWh (0,25 à 0,32 €). C\'est plus économique que la vaisselle à la main.',
      dutyCycleExplanation: 'L\'eau est chauffée en circuit fermé optimisé.',
      savingAdvice: ['Utilisez le programme Éco 50 °C.', 'Ne lancez que plein.'],
      faq: [{ question: 'Est-il plus économique que la vaisselle à la main ?', answer: 'Oui, il consomme jusqu\'à 50 % d\'électricité et 60 % d\'eau en moins.' }]
    },
    'backofen': {
      name: 'Four Électrique',
      category: 'Cuisine',
      shortDescription: 'Un four électrique consomme environ 0,8 à 1,5 kWh par heure (environ 0,28 à 0,52 €).',
      dutyCycleExplanation: 'La chaleur tournante est environ 20 % plus économe que la convection naturelle.',
      savingAdvice: ['Privilégiez la chaleur tournante.', 'Gardez la porte fermée.'],
      faq: [{ question: 'Faut-il préchauffer le four ?', answer: 'La plupart du temps non, ce qui économise jusqu\'à 20 % d\'électricité.' }]
    },
    'herd': {
      name: 'Plaque à Induction',
      category: 'Cuisine',
      shortDescription: 'L\'induction consomme 0,3 à 0,7 kWh par repas et est 20–30 % plus efficace que la vitrocéramique.',
      dutyCycleExplanation: 'Chauffe directement le fond des récipients magnétiques sans déperdition.',
      savingAdvice: ['Cuisinez toujours avec un couvercle.', 'Chauffez l\'eau à la bouilloire avant.'],
      faq: [{ question: 'L\'induction est-elle plus économique que la vitrocéramique ?', answer: 'Oui, elle économise 20 à 30 % d\'énergie et chauffe deux fois plus vite.' }]
    },
    'wasserkocher': {
      name: 'Bouilloire Électrique',
      category: 'Cuisine',
      shortDescription: 'Faire bouillir 1 litre d\'eau consomme environ 0,1 kWh (environ 3,5 centimes).',
      dutyCycleExplanation: 'Transfert thermique direct avec plus de 90 % d\'efficacité.',
      savingAdvice: ['Ne chauffez que la quantité d\'eau nécessaire.', 'Détartrez régulièrement.'],
      faq: [{ question: 'La bouilloire est-elle plus économe que la plaque ?', answer: 'Oui, elle est 30 à 50 % plus économe qu\'une casserole sur plaque.' }]
    },
    'kaffeemaschine': {
      name: 'Machine à Café Automatique',
      category: 'Cuisine',
      shortDescription: 'Une machine à café consomme environ 0,02 à 0,04 kWh par tasse.',
      dutyCycleExplanation: 'Le thermobloc chauffe l\'eau instantanément à la demande.',
      savingAdvice: ['Activez l\'extinction automatique après 10–15 min.'],
      faq: [{ question: 'Combien coûte l\'électricité pour un café ?', answer: 'Environ 1 à 1,5 centime par tasse.' }]
    },
    'fernseher': {
      name: 'Téléviseur (TV)',
      category: 'Multimédia & Bureau',
      shortDescription: 'Un téléviseur 55 pouces LED/OLED consomme entre 70 et 130 W (environ 2,5 à 4,5 centimes par heure).',
      dutyCycleExplanation: 'La luminosité et les modes HDR influent sur la consommation.',
      savingAdvice: ['Activez le capteur de lumière ambiante.', 'Choisissez le mode cinéma.'],
      faq: [{ question: 'L\'OLED consomme-t-il plus que le LED ?', answer: 'Légèrement plus sur fond blanc, mais moins dans les scènes sombres.' }]
    },
    'gaming-pc': {
      name: 'PC Gamer',
      category: 'Multimédia & Bureau',
      shortDescription: 'En pleine charge de jeu, il consomme entre 350 et 600 W (environ 0,12 à 0,21 € par heure).',
      dutyCycleExplanation: 'La carte graphique et le processeur tournent à puissance maximale.',
      savingAdvice: ['Limitez le taux de rafraîchissement (FPS cap).', 'Undervoltez la carte graphique.'],
      faq: [{ question: 'Combien coûte 4h de jeu par jour sur un mois ?', answer: 'Environ 17 à 20 euros par mois.' }]
    },
    'gamingpc': {
      name: 'PC Gamer',
      category: 'Multimédia & Bureau',
      shortDescription: 'En pleine charge de jeu, il consomme entre 350 et 600 W (environ 0,12 à 0,21 € par heure).',
      dutyCycleExplanation: 'La carte graphique et le processeur tournent à puissance maximale.',
      savingAdvice: ['Limitez le taux de rafraîchissement (FPS cap).', 'Undervoltez la carte graphique.'],
      faq: [{ question: 'Combien coûte 4h de jeu par jour sur un mois ?', answer: 'Environ 17 à 20 euros par mois.' }]
    },
    'pc': {
      name: 'PC de Bureau (Bureautique)',
      category: 'Multimédia & Bureau',
      shortDescription: 'Un PC de bureau consomme environ 50 à 100 W (environ 1,8 à 3,5 centimes par heure).',
      dutyCycleExplanation: 'Faible consommation de base en bureautique.',
      savingAdvice: ['Activez la mise en veille après 15 min.'],
      faq: [{ question: 'Combien consomme un PC en télétravail ?', answer: 'Pour 8h par jour, environ 0,5 à 0,8 kWh (18 à 28 centimes).' }]
    },
    'laptop': {
      name: 'Ordinateur Portable',
      category: 'Multimédia & Bureau',
      shortDescription: 'Un ordinateur portable consomme seulement 20 à 60 W (jusqu\'à 70 % plus économe qu\'un fixe).',
      dutyCycleExplanation: 'Processeurs mobiles basse consommation.',
      savingAdvice: ['Diminuez légèrement la luminosité de l\'écran.'],
      faq: [{ question: 'Combien coûte un portable par jour ?', answer: 'Pour 8 heures de travail, seulement 6 à 12 centimes par jour.' }]
    },
    'monitor': {
      name: 'Écran / Moniteur',
      category: 'Multimédia & Bureau',
      shortDescription: 'Un moniteur 27 pouces consomme environ 20 à 40 W (environ 0,7 à 1,4 centime par heure).',
      dutyCycleExplanation: 'Rétroéclairage LED à consommation stable.',
      savingAdvice: ['Ajustez la luminosité à l\'éclairage de la pièce.'],
      faq: [{ question: 'Combien coûte un second écran par an ?', answer: 'Environ 10 à 20 € d\'électricité par an.' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'Multimédia & Bureau',
      shortDescription: 'La PS5 consomme environ 180 à 220 W en jeu (environ 6,3 à 7,7 centimes par heure).',
      dutyCycleExplanation: '50 W sur le menu, jusqu\'à 220 W en jeu 4K.',
      savingAdvice: ['Désactivez l\'alimentation USB continue en veille.'],
      faq: [{ question: 'Combien consomme la PS5 en veille ?', answer: '1,5 à 3 W en veille simple, 30 W lors des téléchargements.' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'Multimédia & Bureau',
      shortDescription: 'La Xbox Series X consomme environ 150 à 210 W en jeu (environ 5,3 à 7,4 centimes par heure).',
      dutyCycleExplanation: 'Pleine charge lors des jeux 4K 120Hz.',
      savingAdvice: ['Choisissez le mode extinction éco au lieu de l\'allumage instantané.'],
      faq: [{ question: 'Combien économise le mode éco ?', answer: 'Il consomme 0,5 W contre 10–13 W en veille active, économisant environ 30 €/an.' }]
    },
    'klimaanlage': {
      name: 'Climatisation',
      category: 'Climat & Chauffage',
      shortDescription: 'Les climatiseurs mobiles consomment 800 à 1 200 W (28 à 42 ct/h), les splits sont 50 % plus économes.',
      dutyCycleExplanation: 'Le compresseur réduit sa puissance une fois la consigne atteinte.',
      savingAdvice: ['Réglez entre 24 et 26 °C.', 'Fermez les volets le jour.'],
      faq: [{ question: 'Combien coûte la clim en été ?', answer: 'Pour 30 jours à 6h/jour, environ 50–75 € en mobile contre 25–40 € en split.' }]
    },
    'ventilator': {
      name: 'Ventilateur',
      category: 'Climat & Chauffage',
      shortDescription: 'Un ventilateur sur pied consomme seulement 25 à 50 W (environ 0,9 à 1,8 centime par heure).',
      dutyCycleExplanation: 'Moteur direct sans compresseur frigorifique.',
      savingAdvice: ['Éteignez-le quand vous quittez la pièce.'],
      faq: [{ question: 'Consomme-t-il beaucoup moins que la clim ?', answer: 'Oui, environ 95 % d\'électricité en moins.' }]
    },
    'heizluefter': {
      name: 'Radiateur Soufflant',
      category: 'Climat & Chauffage',
      shortDescription: 'Un radiateur soufflant consomme 1 500 à 2 000 W (environ 53 à 70 centimes par heure).',
      dutyCycleExplanation: 'Résistance électrique convertissant l\'électricité en chaleur 1:1.',
      savingAdvice: ['Utilisez uniquement comme chauffage d\'appoint ponctuel.'],
      faq: [{ question: 'Combien coûte son utilisation 8h par jour ?', answer: 'Environ 4,20 à 5,60 € par jour (plus de 150 € par mois).' }]
    },
    'luftentfeuchter': {
      name: 'Déshumidificateur',
      category: 'Climat & Chauffage',
      shortDescription: 'Un déshumidificateur consomme environ 200 à 400 W (environ 7 à 14 centimes par heure).',
      dutyCycleExplanation: 'Condense l\'humidité de l\'air ambiant.',
      savingAdvice: ['Réglez à 50–55 % d\'humidité relative.', 'Fermez portes et fenêtres.'],
      faq: [{ question: 'Combien de temps le faire tourner ?', answer: '2 à 4 heures par jour suffisent généralement.' }]
    },
    'aquarium': {
      name: 'Aquarium',
      category: 'Hobby & Spécial',
      shortDescription: 'Un aquarium de 100 L consomme environ 150 à 300 kWh par an (environ 53 à 105 €/an).',
      dutyCycleExplanation: 'Le chauffage et l\'éclairage constituent l\'essentiel du coût.',
      savingAdvice: ['Utilisez un éclairage LED et un couvercle thermique.'],
      faq: [{ question: 'Qu\'est-ce qui consomme le plus dans un aquarium ?', answer: 'Le thermoplongeur (chauffage de l\'eau).' }]
    },
    'pool': {
      name: 'Pompe de Piscine',
      category: 'Hobby & Spécial',
      shortDescription: 'Une pompe de piscine consomme 400 à 1 000 W (environ 14 à 35 centimes par heure).',
      dutyCycleExplanation: 'Recycle l\'eau du bassin 2 à 3 fois par jour.',
      savingAdvice: ['Installez une minuterie programmable.'],
      faq: [{ question: 'Combien d\'heures la faire tourner en été ?', answer: 'Environ 6 à 8 heures par jour.' }]
    },
    'whirlpool': {
      name: 'Spa / Jacuzzi Extérieur',
      category: 'Hobby & Spécial',
      shortDescription: 'Un spa extérieur consomme environ 2 000 à 4 000 kWh par an (environ 700 à 1 400 €/an).',
      dutyCycleExplanation: 'Maintenir l\'eau à 38 °C nécessite un chauffage permanent.',
      savingAdvice: ['Utilisez une couverture isothermique épaisse.'],
      faq: [{ question: 'Combien coûte un jacuzzi par mois ?', answer: 'Environ 50 à 120 € par mois selon la saison.' }]
    },
    '3d-drucker': {
      name: 'Imprimante 3D',
      category: 'Hobby & Spécial',
      shortDescription: 'Une imprimante 3D FDM consomme 100 à 180 W (environ 3,5 à 6,3 centimes par heure).',
      dutyCycleExplanation: 'Le plateau chauffant consomme 70 % de l\'énergie totale.',
      savingAdvice: ['Utilisez un caisson pour retenir la chaleur.'],
      faq: [{ question: 'Combien coûte une impression de 10 heures ?', answer: 'Environ 40 à 60 centimes d\'électricité.' }]
    },
    'nas': {
      name: 'Serveur NAS',
      category: 'Hobby & Spécial',
      shortDescription: 'Un NAS 2 baies consomme 15 à 30 W allumé 24h/24 (environ 45 à 90 € par an).',
      dutyCycleExplanation: 'La mise en veille des disques réduit la consommation à moins de 8 W.',
      savingAdvice: ['Activez l\'hibernation des disques durs.'],
      faq: [{ question: 'Combien coûte un NAS allumé toute l\'année ?', answer: 'À 20 W continus, environ 61 € par an.' }]
    },
    'server': {
      name: 'Serveur Domestique',
      category: 'Hobby & Spécial',
      shortDescription: 'Un serveur basse consommation (Mini PC) consomme 10 à 40 W (environ 30 à 120 €/an).',
      dutyCycleExplanation: 'Processeurs modernes à très faible consommation au repos.',
      savingAdvice: ['Privilégiez les Mini PC récents aux vieilles tours.'],
      faq: [{ question: 'Combien consomme un serveur maison ?', answer: 'Environ 10–15 W au repos (30 à 45 € par an).' }]
    }
  },
  pt: {
    'kuehlschrank': {
      name: 'Geladeira / Frigorífico',
      category: 'Cozinha',
      shortDescription: 'Uma geladeira moderna consome cerca de 100 a 160 kWh por ano (aprox. 35 a 56 €/ano).',
      dutyCycleExplanation: 'O compressor funciona de 20 a 40 minutos por hora via termostato.',
      savingAdvice: ['Ajuste para 7 °C no refrigerador e -18 °C no freezer.', 'Descongele periodicamente.'],
      faq: [{ question: 'Quanto consome uma geladeira por dia?', answer: 'Cerca de 0,3 a 0,45 kWh por dia (10 a 16 centavos).' }]
    },
    'waschmaschine': {
      name: 'Máquina de Lavar Roupa',
      category: 'Casa & Limpeza',
      shortDescription: 'Consome cerca de 0,5 a 1,0 kWh por ciclo (aprox. 0,18 a 0,35 € por lavagem).',
      dutyCycleExplanation: 'Mais de 80% da energia é usada no aquecimento da água.',
      savingAdvice: ['Use ciclos Eco a 30 °C.', 'Lave sempre com carga cheia.'],
      faq: [{ question: 'Qual a diferença entre lavar a 60 °C e 30 °C?', answer: 'Lavar a 60 °C custa cerca de 0,35 a 0,50 €, contra 0,15 a 0,20 € no modo Eco 30 °C.' }]
    },
    'trockner': {
      name: 'Secadora de Roupas',
      category: 'Casa & Limpeza',
      shortDescription: 'Secadoras com bomba de calor consomem 1,2 a 1,8 kWh por ciclo (contra mais de 4 kWh nas antigas).',
      dutyCycleExplanation: 'A bomba de calor recicla o ar quente economizando mais de 60%.',
      savingAdvice: ['Centrifugue a 1.200–1.400 RPM na lavadora.', 'Limpe o filtro de fiapos.'],
      faq: [{ question: 'Quanto custa usar a secadora?', answer: 'Aprox. 0,45 a 0,65 € por ciclo em modelos com bomba de calor.' }]
    },
    'geschirrspueler': {
      name: 'Lava-Louças',
      category: 'Cozinha',
      shortDescription: 'O programa Eco consome cerca de 0,7 a 0,9 kWh (0,25 a 0,32 €), sendo mais econômico que lavar à mão.',
      dutyCycleExplanation: 'Aquecimento eficiente em circuito fechado.',
      savingAdvice: ['Use o programa Eco 50 °C.', 'Ligue apenas cheia.'],
      faq: [{ question: 'Lava-louças é mais econômica que lavar na pia?', answer: 'Sim, consome até 50% menos energia e 60% menos água.' }]
    },
    'backofen': {
      name: 'Forno Elétrico',
      category: 'Cozinha',
      shortDescription: 'Consome cerca de 0,8 a 1,5 kWh por hora (aprox. 0,28 a 0,52 €).',
      dutyCycleExplanation: 'O modo convecção com ventilação economiza cerca de 20%.',
      savingAdvice: ['Use calor com convecção de ar.', 'Evite abrir a porta durante o preparo.'],
      faq: [{ question: 'É obrigatório pré-aquecer o forno?', answer: 'Geralmente não, e pular o pré-aquecimento economiza até 20% de energia.' }]
    },
    'herd': {
      name: 'Fogão de Indução',
      category: 'Cozinha',
      shortDescription: 'Consome cerca de 0,3 a 0,7 kWh por refeição e é 20–30% mais eficiente que o vitrocerâmico.',
      dutyCycleExplanation: 'Gera calor diretamente na panela magnética sem perdas térmicas.',
      savingAdvice: ['Cozinhe sempre com tampa.', 'Ferva a água na chaleira elétrica antes.'],
      faq: [{ question: 'Indução gasta menos energia?', answer: 'Sim, economiza de 20 a 30% de luz e ferve duas vezes mais rápido.' }]
    },
    'wasserkocher': {
      name: 'Chaleira Elétrica',
      category: 'Cozinha',
      shortDescription: 'Ferver 1 litro de água consome aprox. 0,1 kWh (cerca de 3,5 centavos).',
      dutyCycleExplanation: 'Elemento térmico direto com mais de 90% de eficiência.',
      savingAdvice: ['Ferva apenas o volume que for consumir.', 'Descalcifique regularmente.'],
      faq: [{ question: 'A chaleira é mais rápida e econômica que o fogão?', answer: 'Sim, é de 30 a 50% mais eficiente que esquentar água em panela.' }]
    },
    'kaffeemaschine': {
      name: 'Cafeteira Automática',
      category: 'Cozinha',
      shortDescription: 'Consome cerca de 0,02 a 0,04 kWh por xícara (incluindo enxágue).',
      dutyCycleExplanation: 'Bloco térmico aquece a água instantaneamente sob demanda.',
      savingAdvice: ['Ative o desligamento automático após 10–15 min.'],
      faq: [{ question: 'Quanto custa a eletricidade de um café?', answer: 'Cerca de 1 a 1,5 centavo por xícara.' }]
    },
    'fernseher': {
      name: 'Televisão (TV)',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Uma TV 55 polegadas LED/OLED consome entre 70 e 130 W (cerca de 2,5 a 4,5 centavos por hora).',
      dutyCycleExplanation: 'Brilho, HDR e sensores de iluminação determinam o consumo instantâneo.',
      savingAdvice: ['Ative o sensor de luz ambiente.', 'Escolha o modo cinema ou padrão.'],
      faq: [{ question: 'A TV OLED gasta mais que a LED?', answer: 'Gasta um pouco mais em telas muito claras, mas desliga pixels em cenas escuras.' }]
    },
    'gaming-pc': {
      name: 'PC Gamer',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Em jogos pesados, consome entre 350 e 600 W (cerca de 0,12 a 0,21 € por hora).',
      dutyCycleExplanation: 'Placa de vídeo e processador operam em capacidade máxima.',
      savingAdvice: ['Limite a taxa de quadros (FPS cap).', 'Faça undervolting na GPU.'],
      faq: [{ question: 'Quanto custa jogar 4h por dia no mês?', answer: 'Cerca de 17 a 20 euros mensais de energia.' }]
    },
    'gamingpc': {
      name: 'PC Gamer',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Em jogos pesados, consome entre 350 e 600 W (cerca de 0,12 a 0,21 € por hora).',
      dutyCycleExplanation: 'Placa de vídeo e processador operam em capacidade máxima.',
      savingAdvice: ['Limite a taxa de quadros (FPS cap).', 'Faça undervolting na GPU.'],
      faq: [{ question: 'Quanto custa jogar 4h por dia no mês?', answer: 'Cerca de 17 a 20 euros mensais de energia.' }]
    },
    'pc': {
      name: 'Computador de Mesa (Escritório)',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Consome cerca de 50 a 100 W (aprox. 1,8 a 3,5 centavos por hora).',
      dutyCycleExplanation: 'Baixo consumo contínuo em tarefas leves.',
      savingAdvice: ['Ative suspensão após 15 minutos.'],
      faq: [{ question: 'Quanto gasta um PC em home office?', answer: 'Em 8 horas de trabalho consome cerca de 0,5 a 0,8 kWh (18 a 28 centavos).' }]
    },
    'laptop': {
      name: 'Notebook / Laptop',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Consome apenas 20 a 60 W e é até 70% mais econômico que um desktop.',
      dutyCycleExplanation: 'Processadores móveis de alta eficiência energética.',
      savingAdvice: ['Diminua o brilho da tela.'],
      faq: [{ question: 'Quanto custa usar notebook por dia?', answer: 'Em 8 horas de uso custa apenas 6 a 12 centavos.' }]
    },
    'monitor': {
      name: 'Monitor de Computador',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Um monitor de 27 polegadas consome cerca de 20 a 40 W (cerca de 0,7 a 1,4 centavo por hora).',
      dutyCycleExplanation: 'Retroiluminação LED constante.',
      savingAdvice: ['Ajuste o brilho de acordo com a luz do ambiente.'],
      faq: [{ question: 'Quanto custa um segundo monitor por ano?', answer: 'Aproximadamente 10 a 20 € anuais de eletricidade.' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Consome cerca de 180 a 220 W durante o jogo (cerca de 6,3 a 7,7 centavos por hora).',
      dutyCycleExplanation: '50 W no menu e até 220 W em jogos 4K.',
      savingAdvice: ['Desative portas USB ligadas no modo repouso.'],
      faq: [{ question: 'Quanto gasta a PS5 no modo de repouso?', answer: '1,5 a 3 W em repouso simples, 30 W baixando atualizações.' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Consome cerca de 150 a 210 W jogando (cerca de 5,3 a 7,4 centavos por hora).',
      dutyCycleExplanation: 'Carga total em 4K 120Hz.',
      savingAdvice: ['Use o modo "Desligamento (economia de energia)".'],
      faq: [{ question: 'Quanto economiza o modo de economia da Xbox?', answer: 'Consome 0,5 W em vez de 10–13 W no standby ativo (economiza cerca de 30 €/ano).' }]
    },
    'klimaanlage': {
      name: 'Ar-Condicionado',
      category: 'Climatização & Aquecimento',
      shortDescription: 'Modelos portáteis consomem 800 a 1.200 W (28 a 42 ct/h); splits inverter são 50% mais eficientes.',
      dutyCycleExplanation: 'O compressor reduz a potência ao atingir a temperatura programada.',
      savingAdvice: ['Mantenha a temperatura em 24–25 °C.', 'Feche cortinas durante o sol forte.'],
      faq: [{ question: 'Quanto custa usar ar-condicionado no verão?', answer: 'Para 30 dias usando 6h/dia, cerca de 50–75 € em portáteis e 25–40 € em splits.' }]
    },
    'ventilator': {
      name: 'Ventilador',
      category: 'Climatização & Aquecimento',
      shortDescription: 'Um ventilador de coluna consome apenas 25 a 50 W (cerca de 0,9 a 1,8 centavo por hora).',
      dutyCycleExplanation: 'Motor direto sem compressor de refrigeração.',
      savingAdvice: ['Desligue ao sair do ambiente.'],
      faq: [{ question: 'Gasta muito menos que o ar-condicionado?', answer: 'Sim, consome cerca de 95% menos energia.' }]
    },
    'heizluefter': {
      name: 'Aquecedor Elétrico Portátil',
      category: 'Climatização & Aquecimento',
      shortDescription: 'Consome entre 1.500 e 2.000 W (cerca de 53 a 70 centavos por hora de uso).',
      dutyCycleExplanation: 'Resistência elétrica transformando energia em calor 1:1.',
      savingAdvice: ['Use apenas para aquecimento rápido de emergência.'],
      faq: [{ question: 'Quanto custa ligar 8h por dia?', answer: 'Cerca de 4,20 a 5,60 € diários (mais de 150 € por mês).' }]
    },
    'luftentfeuchter': {
      name: 'Desumidificador',
      category: 'Climatização & Aquecimento',
      shortDescription: 'Consome entre 200 e 400 W (cerca de 7 a 14 centavos por hora).',
      dutyCycleExplanation: 'Condensa a umidade do ar ambiente.',
      savingAdvice: ['Defina a umidade alvo para 50–55%.', 'Mantenha portas e janelas fechadas.'],
      faq: [{ question: 'Quantas horas deve funcionar por dia?', answer: 'De 2 a 4 horas diárias em cômodos fechados são suficientes.' }]
    },
    'aquarium': {
      name: 'Aquário',
      category: 'Hobby & Especial',
      shortDescription: 'Um aquário de 100 L consome cerca de 150 a 300 kWh por ano (aprox. 53 a 105 €/ano).',
      dutyCycleExplanation: 'Termostato e iluminação respondem por quase todo o consumo.',
      savingAdvice: ['Use iluminação LED e tampa de proteção.'],
      faq: [{ question: 'O que mais consome em um aquário?', answer: 'O aquecedor termostático de água.' }]
    },
    'pool': {
      name: 'Bomba de Piscina',
      category: 'Hobby & Especial',
      shortDescription: 'Consome entre 400 e 1.000 W (cerca de 14 a 35 centavos por hora).',
      dutyCycleExplanation: 'Filtra todo o volume da piscina 2 a 3 vezes ao dia.',
      savingAdvice: ['Use temporizador programável.'],
      faq: [{ question: 'Quantas horas deve funcionar no verão?', answer: 'Cerca de 6 a 8 horas por dia.' }]
    },
    'whirlpool': {
      name: 'Jacuzzi / Spa Externo',
      category: 'Hobby & Especial',
      shortDescription: 'Consome cerca de 2.000 a 4.000 kWh por ano (aprox. 700 a 1.400 €/ano).',
      dutyCycleExplanation: 'Manter a água a 38 °C exige aquecimento ininterrupto.',
      savingAdvice: ['Use cobertura térmica grossa.'],
      faq: [{ question: 'Quanto custa manter um jacuzzi por mês?', answer: 'Cerca de 50 a 120 € por mês em eletricidade.' }]
    },
    '3d-drucker': {
      name: 'Impressora 3D',
      category: 'Hobby & Especial',
      shortDescription: 'Consome de 100 a 180 W (cerca de 3,5 a 6,3 centavos por hora).',
      dutyCycleExplanation: 'A mesa aquecida consome 70% da energia.',
      savingAdvice: ['Use uma câmara fechada para reter calor.'],
      faq: [{ question: 'Quanto custa uma impressão de 10 horas?', answer: 'Cerca de 40 a 60 centavos de eletricidade.' }]
    },
    'nas': {
      name: 'Servidor NAS',
      category: 'Hobby & Especial',
      shortDescription: 'Consome 15 a 30 W ligado 24/7 (cerca de 45 a 90 € por ano).',
      dutyCycleExplanation: 'A suspensão de discos reduz para menos de 8 W em repouso.',
      savingAdvice: ['Ative a hibernação de discos.'],
      faq: [{ question: 'Quanto custa manter um NAS ligado o ano todo?', answer: 'A 20 W contínuos, cerca de 61 € ao ano.' }]
    },
    'server': {
      name: 'Servidor Doméstico',
      category: 'Hobby & Especial',
      shortDescription: 'Um Mini PC consome de 10 a 40 W (cerca de 30 a 120 € por ano).',
      dutyCycleExplanation: 'Processadores modernos com baixíssimo consumo em repouso.',
      savingAdvice: ['Use Mini PCs modernos.'],
      faq: [{ question: 'Quanto consome um servidor doméstico?', answer: 'Cerca de 10–15 W em repouso (30 a 45 € anuais).' }]
    }
  },
  ko: {
    'kuehlschrank': {
      name: '냉장고',
      category: '주방 가전',
      shortDescription: '최신 냉장고는 연간 약 100~160kWh(연간 약 35~56€)를 소비합니다.',
      dutyCycleExplanation: '컴프레서는 온도 센서에 따라 시간당 20~40분만 작동합니다.',
      savingAdvice: ['냉장실 7℃, 냉동실 -18℃로 설정하세요.', '성에를 정기적으로 제거하세요.'],
      faq: [{ question: '냉장고 하루 전기요금은?', answer: '최신 표준형 기준 하루 약 0.3~0.45kWh(약 10~16센트)입니다.' }]
    },
    'waschmaschine': {
      name: '세탁기',
      category: '생활·세탁 가전',
      shortDescription: '1회 세탁 시 약 0.5~1.0kWh(약 18~35센트)의 전력을 소비합니다.',
      dutyCycleExplanation: '전력의 80% 이상이 물을 가열하는 데 사용됩니다.',
      savingAdvice: ['30℃ 에코 코스를 활용하세요.', '세탁물을 모아서 가득 채워 세탁하세요.'],
      faq: [{ question: '60℃ 온수 세탁과 30℃ 에코 세탁의 비용 차이는?', answer: '60℃ 세탁은 약 35~50센트인 반면, 30℃ 에코 세탁은 약 15~20센트입니다.' }]
    },
    'trockner': {
      name: '의류 건조기',
      category: '생활·세탁 가전',
      shortDescription: '히트펌프 건조기는 1회당 약 1.2~1.8kWh를 소비하여 기존 방식 대비 60% 이상 절약합니다.',
      dutyCycleExplanation: '폐열을 재활용하는 히트펌프 기술을 사용합니다.',
      savingAdvice: ['세탁기 탈수 시 고속 탈수를 진행하세요.', '필터를 매번 청소하세요.'],
      faq: [{ question: '건조기 1회 전기요금은?', answer: '최신 히트펌프 기준 약 45~65센트입니다.' }]
    },
    'geschirrspueler': {
      name: '식기세척기',
      category: '주방 가전',
      shortDescription: '에코 모드 1회당 약 0.7~0.9kWh(약 25~32센트)를 소비하여 손설거지보다 경제적입니다.',
      dutyCycleExplanation: '밀폐 순환 가열 방식으로 물과 전력을 절약합니다.',
      savingAdvice: ['에코 50℃ 코스를 기본으로 사용하세요.', '가득 채운 후 작동하세요.'],
      faq: [{ question: '식기세척기가 손설거지보다 경제적인가요?', answer: '네, 전기 에너지를 최대 50%, 물을 60% 이상 절약합니다.' }]
    },
    'backofen': {
      name: '전기 오븐',
      category: '주방 가전',
      shortDescription: '1시간당 약 0.8~1.5kWh(약 28~52센트)를 소비합니다.',
      dutyCycleExplanation: '열풍 대류(컨벡션) 모드는 일반 모드 대비 약 20% 전력을 덜 씁니다.',
      savingAdvice: ['컨벡션 열풍 모드를 활용하세요.', '조리 중 문을 자주 열지 마세요.'],
      faq: [{ question: '오븐 예열이 꼭 필요한가요?', answer: '대부분의 일상 요리에서는 예열을 생략해도 무방하며 최대 20% 절약됩니다.' }]
    },
    'herd': {
      name: '인덕션 레인지',
      category: '주방 가전',
      shortDescription: '1회 조리당 약 0.3~0.7kWh를 소비하며 하이라이트 대비 20~30% 효율적입니다.',
      dutyCycleExplanation: '자력선으로 조리 용기 자체를 직접 가열하여 열 손실이 없습니다.',
      savingAdvice: ['뚜껑을 덮고 조리하세요.', '물은 전기포트로 먼저 끓여서 사용하세요.'],
      faq: [{ question: '인덕션이 일반 전기레인지보다 절전되나요?', answer: '네, 열효율이 90% 이상으로 20~30% 전력을 절약하고 2배 빠르게 가열합니다.' }]
    },
    'wasserkocher': {
      name: '전기포트 / 무선주전자',
      category: '주방 가전',
      shortDescription: '물 1리터를 끓이는 데 약 0.1kWh(약 3.5센트)가 소모됩니다.',
      dutyCycleExplanation: '열선 직접 가열로 90% 이상의 높은 열효율을 자랑합니다.',
      savingAdvice: ['필요한 만큼의 물만 끓이세요.', '물때를 정기적으로 세척하세요.'],
      faq: [{ question: '가스레인지나 인덕션보다 전기포트가 효율적인가요?', answer: '네, 냄비로 끓이는 것보다 30~50% 더 적은 에너지를 사용합니다.' }]
    },
    'kaffeemaschine': {
      name: '전자동 커피머신',
      category: '주방 가전',
      shortDescription: '1잔 추출 시 약 0.02~0.04kWh를 소비합니다.',
      dutyCycleExplanation: '순간 가열 써모블록으로 추출 시에만 최대 전력을 사용합니다.',
      savingAdvice: ['10~15분 자동 전원 꺼짐 기능을 설정하세요.'],
      faq: [{ question: '커피 1잔 추출 시 전기요금은?', answer: '1잔당 약 1~1.5센트에 불과합니다.' }]
    },
    'fernseher': {
      name: '텔레비전 (TV)',
      category: '엔터테인먼트·사무',
      shortDescription: '55인치 TV는 약 70~130W(시간당 약 2.5~4.5센트)의 전력을 소비합니다.',
      dutyCycleExplanation: '화면 밝기 및 HDR 모드에 따라 소비전력이 실시간 변동합니다.',
      savingAdvice: ['조도 센서를 켜두세요.', '표준 또는 영화 모드를 선택하세요.'],
      faq: [{ question: 'OLED TV가 LED TV보다 전기를 더 쓰나요?', answer: '밝은 화면에서는 조금 더 쓰지만, 어두운 장면에서는 픽셀이 꺼져 절전됩니다.' }]
    },
    'gaming-pc': {
      name: '게이밍 PC',
      category: '엔터테인먼트·사무',
      shortDescription: '게임 구동 시 약 350~600W(시간당 약 12~21센트)의 전력을 소비합니다.',
      dutyCycleExplanation: '고사양 3D 렌더링 시 그래픽카드와 CPU가 최대 전력을 소비합니다.',
      savingAdvice: ['FPS 상한을 설정하세요.', '그래픽카드 언더볼팅을 적용하세요.'],
      faq: [{ question: '하루 4시간 게임 시 월 요금은?', answer: '월 약 17~20유로(약 25,000~30,000원)입니다.' }]
    },
    'gamingpc': {
      name: '게이밍 PC',
      category: '엔터테인먼트·사무',
      shortDescription: '게임 구동 시 약 350~600W(시간당 약 12~21센트)의 전력을 소비합니다.',
      dutyCycleExplanation: '고사양 3D 렌더링 시 그래픽카드와 CPU가 최대 전력을 소비합니다.',
      savingAdvice: ['FPS 상한을 설정하세요.', '그래픽카드 언더볼팅을 적용하세요.'],
      faq: [{ question: '하루 4시간 게임 시 월 요금은?', answer: '월 약 17~20유로(약 25,000~30,000원)입니다.' }]
    },
    'pc': {
      name: '사무용 데스크톱 PC',
      category: '엔터테인먼트·사무',
      shortDescription: '사무용 PC는 약 50~100W(시간당 약 1.8~3.5센트)를 소비합니다.',
      dutyCycleExplanation: '문서 작업 및 웹서핑 시 낮은 전력을 유지합니다.',
      savingAdvice: ['15분 절전 모드를 설정하세요.'],
      faq: [{ question: '재택근무 시 PC 전기요금은?', answer: '하루 8시간 작업 시 약 0.5~0.8kWh(약 18~28센트)입니다.' }]
    },
    'laptop': {
      name: '노트북 / 랩톱',
      category: '엔터테인먼트·사무',
      shortDescription: '노트북은 20~60W만 소비하여 데스크톱 대비 최대 70% 절전됩니다.',
      dutyCycleExplanation: '배터리 효율에 최적화된 모바일 저전력 프로세서를 사용합니다.',
      savingAdvice: ['화면 밝기를 알맞게 조절하세요.'],
      faq: [{ question: '노트북 하루 사용 요금은?', answer: '8시간 작업 시 하루 약 6~12센트에 불과합니다.' }]
    },
    'monitor': {
      name: 'PC 모니터',
      category: '엔터테인먼트·사무',
      shortDescription: '27인치 모니터는 약 20~40W(시간당 약 0.7~1.4센트)를 소비합니다.',
      dutyCycleExplanation: 'LED 백라이트로 일정한 전력을 소비합니다.',
      savingAdvice: ['실내 밝기에 맞게 모니터 밝기를 조절하세요.'],
      faq: [{ question: '듀얼 모니터 사용 시 추가 요금은?', answer: '보조 모니터 1대당 연간 약 10~20유로입니다.' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: '엔터테인먼트·사무',
      shortDescription: '게임 플레이 시 약 180~220W(시간당 약 6.3~7.7센트)를 소비합니다.',
      dutyCycleExplanation: '대기 메뉴에서 50W, 4K 게임 구동 시 최대 220W.',
      savingAdvice: ['대기모드 시 USB 상시 전원을 필요한 시간으로 제한하세요.'],
      faq: [{ question: 'PS5 대기모드 전력은?', answer: '일반 대기 시 1.5~3W, 다운로드 시 약 30W입니다.' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: '엔터테인먼트·사무',
      shortDescription: '게임 플레이 시 약 150~210W(시간당 약 5.3~7.4센트)를 소비합니다.',
      dutyCycleExplanation: '4K 120Hz 구동 시 최대 전력을 소비합니다.',
      savingAdvice: ['즉시 켜기 대신 "절전 모드 (완전 종료)"를 선택하세요.'],
      faq: [{ question: '절전 모드 선택 시 절약 효과는?', answer: '대기전력이 10~13W에서 0.5W로 줄어 연간 약 30€ 절약됩니다.' }]
    },
    'klimaanlage': {
      name: '에어컨',
      category: '냉난방·공조',
      shortDescription: '이동식은 800~1,200W(28~42 ct/h), 인버터 분리형은 50% 더 효율적입니다.',
      dutyCycleExplanation: '희망 온도 도달 시 인버터 절전 모드로 자동 전환됩니다.',
      savingAdvice: ['희망 온도를 24~26℃로 설정하세요.', '낮에는 블라인드로 직사광선을 막으세요.'],
      faq: [{ question: '여름철 에어컨 전기요금은?', answer: '한 달 30일간 하루 6시간 가동 시 이동식은 약 50~75€, 인버터 분리형은 약 25~40€입니다.' }]
    },
    'ventilator': {
      name: '선풍기 / 서큘레이터',
      category: '냉난방·공조',
      shortDescription: '선풍기는 25~50W(시간당 약 0.9~1.8센트)만 소비합니다.',
      dutyCycleExplanation: '냉매 컴프레서 없이 모터로만 바람을 일으킵니다.',
      savingAdvice: ['방을 비울 때는 전원을 끄세요.'],
      faq: [{ question: '에어컨보다 전기를 얼마나 덜 쓰나요?', answer: '에어컨 대비 약 95%의 전력을 절약할 수 있습니다.' }]
    },
    'heizluefter': {
      name: '온풍기 / 전기 히터',
      category: '냉난방·공조',
      shortDescription: '온풍기는 1,500~2,000W(시간당 약 53~70센트)의 대전력을 소비합니다.',
      dutyCycleExplanation: '전기 에너지를 1:1로 직접 열로 변환합니다.',
      savingAdvice: ['단시간 보조 난방으로만 사용하세요.'],
      faq: [{ question: '온풍기를 하루 종일 틀면 요금이 얼마나 나오나요?', answer: '하루 8시간 가동 시 4.20~5.60€(월 150€ 이상)가 발생합니다.' }]
    },
    'luftentfeuchter': {
      name: '제습기',
      category: '냉난방·공조',
      shortDescription: '제습기는 약 200~400W(시간당 약 7~14센트)를 소비합니다.',
      dutyCycleExplanation: '컴프레서로 공기 중의 습기를 응축 제거합니다.',
      savingAdvice: ['희망 습도를 50~55%로 설정하세요.', '가동 중에는 창문을 닫으세요.'],
      faq: [{ question: '하루에 몇 시간 틀어야 하나요?', answer: '밀폐된 방에서 하루 2~4시간 가동하면 충분합니다.' }]
    },
    'aquarium': {
      name: '수족관 / 어항',
      category: '취미·특수설비',
      shortDescription: '100L 수조 기준 연간 약 150~300kWh(연간 약 53~105€)를 소비합니다.',
      dutyCycleExplanation: '수온 히터와 조명이 전력 소비의 대부분을 차지합니다.',
      savingAdvice: ['LED 조명으로 교체하고 뚜껑을 덮어 열 손실을 줄이세요.'],
      faq: [{ question: '어항에서 전기를 가장 많이 쓰는 장치는?', answer: '수온을 일정하게 유지하는 자동 히터입니다.' }]
    },
    'pool': {
      name: '수영장 여과 펌프',
      category: '취미·특수설비',
      shortDescription: '약 400~1,000W(시간당 약 14~35센트)를 소비합니다.',
      dutyCycleExplanation: '수영장 전체 물을 하루 2~3회 순환 여과합니다.',
      savingAdvice: ['타이머로 가동 시간을 제어하세요.'],
      faq: [{ question: '여름철 펌프는 몇 시간 돌려야 하나요?', answer: '하루 약 6~8시간 가동이 적당합니다.' }]
    },
    'whirlpool': {
      name: '야외 자쿠지 / 스파',
      category: '취미·특수설비',
      shortDescription: '연간 약 2,000~4,000kWh(연간 약 700~1,400€)를 소비합니다.',
      dutyCycleExplanation: '38℃ 수온을 유지하기 위해 지속적으로 가열합니다.',
      savingAdvice: ['두꺼운 단열 덮개를 사용하세요.'],
      faq: [{ question: '자쿠지 월 전기요금은?', answer: '계절에 따라 월 약 50~120€ 수준입니다.' }]
    },
    '3d-drucker': {
      name: '3D 프린터',
      category: '취미·특수설비',
      shortDescription: 'FDM 프린터는 약 100~180W(출력 시간당 약 3.5~6.3센트)를 소비합니다.',
      dutyCycleExplanation: '가열 히팅베드가 전체 전력의 약 70%를 소비합니다.',
      savingAdvice: ['챔버(인클로저)로 보온하세요.'],
      faq: [{ question: '10시간 출력 시 전기요금은?', answer: '약 40~60센트 수준입니다.' }]
    },
    'nas': {
      name: 'NAS 스토리지',
      category: '취미·특수설비',
      shortDescription: '2베이 NAS 기준 24시간 가동 시 약 15~30W(연간 약 45~90€)를 소비합니다.',
      dutyCycleExplanation: 'HDD 절전 모드 시 8W 이하로 낮아집니다.',
      savingAdvice: ['하드디스크 절전 기능을 활성화하세요.'],
      faq: [{ question: '24시간 켜둘 때 연간 전기요금은?', answer: '20W 기준 연간 약 61€입니다.' }]
    },
    'server': {
      name: '홈서버',
      category: '취미·특수설비',
      shortDescription: '저전력 미니 PC 서버는 약 10~40W(연간 약 30~120€)를 소비합니다.',
      dutyCycleExplanation: '최신 프로세서는 대기 시 매우 낮은 전력을 소비합니다.',
      savingAdvice: ['구형 데스크톱 대신 최신 미니 PC를 활용하세요.'],
      faq: [{ question: '홈서버 소비전력은 어느 정도인가요?', answer: '최신 미니 PC 기준 대기 시 10~15W(연간 30~45€)입니다.' }]
    }
  },
  it: {
    'kuehlschrank': {
      name: 'Frigorifero',
      category: 'Cucina',
      shortDescription: 'Un frigorifero moderno consuma circa 100-160 kWh all\'anno (circa 35-56 €/anno).',
      dutyCycleExplanation: 'Il compressore funziona solo per circa 20-40 minuti all\'ora tramite termostato.',
      savingAdvice: ['Imposta 7 °C nel frigo e -18 °C nel congelatore.', 'Sbrina regolarmente.'],
      faq: [{ question: 'Quanto consuma un frigo al giorno?', answer: 'Circa 0,3-0,45 kWh al giorno (10-16 centesimi).' }]
    },
    'waschmaschine': {
      name: 'Lavatrice',
      category: 'Casa e Pulizia',
      shortDescription: 'Consuma circa 0,5-1,0 kWh per ciclo (circa 0,18-0,35 € per lavaggio).',
      dutyCycleExplanation: 'Oltre l\'80% dell\'elettricità serve a scaldare l\'acqua.',
      savingAdvice: ['Usa programmi Eco a 30 °C.', 'Lava sempre a pieno carico.'],
      faq: [{ question: 'Quanto costa lavare a 60 °C rispetto a 30 °C?', answer: 'A 60 °C costa circa 0,35-0,50 €, contro 0,15-0,20 € in Eco 30 °C.' }]
    },
    'trockner': {
      name: 'Asciugatrice',
      category: 'Casa e Pulizia',
      shortDescription: 'Le asciugatrici a pompa di calore consumano 1,2-1,8 kWh per ciclo (contro oltre 4 kWh dei vecchi modelli).',
      dutyCycleExplanation: 'La pompa di calore ricicla l\'aria calda risparmiando oltre il 60%.',
      savingAdvice: ['Centrifuga a 1.200–1.400 giri nella lavatrice.', 'Pulisci il filtro pelucchi.'],
      faq: [{ question: 'Quanto costa un ciclo di asciugatrice?', answer: 'Circa 0,45-0,65 € a carico con pompa di calore.' }]
    },
    'geschirrspueler': {
      name: 'Lavastoviglie',
      category: 'Cucina',
      shortDescription: 'Il ciclo Eco consuma circa 0,7-0,9 kWh (0,25-0,32 €), risparmiando rispetto al lavaggio a mano.',
      dutyCycleExplanation: 'Riscaldamento efficiente in circuito chiuso.',
      savingAdvice: ['Usa il programma Eco 50 °C.', 'Avvia solo a pieno carico.'],
      faq: [{ question: 'La lavastoviglie consuma meno del lavaggio a mano?', answer: 'Sì, usa fino al 50% in meno di elettricità e il 60% in meno di acqua.' }]
    },
    'backofen': {
      name: 'Forno Elettrico',
      category: 'Cucina',
      shortDescription: 'Consuma circa 0,8-1,5 kWh per ora (circa 0,28-0,52 €).',
      dutyCycleExplanation: 'La modalità ventilata è circa il 20% più efficiente della statica.',
      savingAdvice: ['Usa il forno ventilato.', 'Evita di aprire lo sportello.'],
      faq: [{ question: 'È necessario preriscaldare il forno?', answer: 'Spesso no, ed evitarlo fa risparmiare fino al 20% di energia.' }]
    },
    'herd': {
      name: 'Piano Cottura a Induzione',
      category: 'Cucina',
      shortDescription: 'L\'induzione consuma 0,3-0,7 kWh per pasto ed è il 20–30% più efficiente del piano in vetroceramica.',
      dutyCycleExplanation: 'Genera calore direttamente nel fondo della pentola.',
      savingAdvice: ['Cucina sempre col coperchio.', 'Fai bollire prima l\'acqua nel bollitore.'],
      faq: [{ question: 'L\'induzione fa risparmiare rispetto al vetroceramica?', answer: 'Sì, risparmia il 20-30% di energia e scalda nella metà del tempo.' }]
    },
    'wasserkocher': {
      name: 'Bollitore Elettrico',
      category: 'Cucina',
      shortDescription: 'Far bollire 1 litro d\'acqua consuma circa 0,1 kWh (circa 3,5 centesimi).',
      dutyCycleExplanation: 'Riscaldamento diretto con oltre il 90% di rendimento termico.',
      savingAdvice: ['Fai bollire solo la quantità d\'acqua necessaria.', 'Decalcifica regolarmente.'],
      faq: [{ question: 'Il bollitore consuma meno del fornello?', answer: 'Sì, è del 30–50% più efficiente di una pentola su piano cottura.' }]
    },
    'kaffeemaschine': {
      name: 'Macchina da Caffè Automatica',
      category: 'Cucina',
      shortDescription: 'Consuma circa 0,02-0,04 kWh a tazzina (inclusi risciacqui).',
      dutyCycleExplanation: 'Il thermoblock riscalda l\'acqua all\'istante solo al bisogno.',
      savingAdvice: ['Attiva lo spegnimento automatico dopo 10–15 min.'],
      faq: [{ question: 'Quanto costa l\'elettricità per un caffè?', answer: 'Solo circa 1-1,5 centesimi a tazzina.' }]
    },
    'fernseher': {
      name: 'Televisore (TV)',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'Una TV 55 pollici LED/OLED consuma tra 70 e 130 W (circa 2,5-4,5 centesimi all\'ora).',
      dutyCycleExplanation: 'Luminosità, sensori e HDR regolano il consumo in tempo reale.',
      savingAdvice: ['Attiva il sensore di luce ambientale.', 'Scegli la modalità cinema o standard.'],
      faq: [{ question: 'I TV OLED consumano più dei LED?', answer: 'Leggermente di più su sfondi bianchi, ma meno nelle scene scure.' }]
    },
    'gaming-pc': {
      name: 'PC da Gaming',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'In gioco a pieno carico consuma tra 350 e 600 W (circa 0,12-0,21 € per ora).',
      dutyCycleExplanation: 'Scheda video e processore assorbono la massima potenza.',
      savingAdvice: ['Imposta un limite FPS con G-Sync/FreeSync.', 'Effettua l\'undervolting della GPU.'],
      faq: [{ question: 'Quanto costano 4 ore di gioco al giorno al mese?', answer: 'Circa 17-20 euro al mese di elettricità.' }]
    },
    'gamingpc': {
      name: 'PC da Gaming',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'In gioco a pieno carico consuma tra 350 e 600 W (circa 0,12-0,21 € per ora).',
      dutyCycleExplanation: 'Scheda video e processore assorbono la massima potenza.',
      savingAdvice: ['Imposta un limite FPS con G-Sync/FreeSync.', 'Effettua l\'undervolting della GPU.'],
      faq: [{ question: 'Quanto costano 4 ore di gioco al giorno al mese?', answer: 'Circa 17-20 euro al mese di elettricità.' }]
    },
    'pc': {
      name: 'PC Desktop (Ufficio)',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'Consuma circa 50-100 W (circa 1,8-3,5 centesimi all\'ora).',
      dutyCycleExplanation: 'Basso consumo base durante navigazione e lavoro d\'ufficio.',
      savingAdvice: ['Attiva la sospensione automatica dopo 15 min.'],
      faq: [{ question: 'Quanto consuma un PC in smart working?', answer: 'In 8 ore di lavoro circa 0,5-0,8 kWh (18-28 centesimi).' }]
    },
    'laptop': {
      name: 'Computer Portatile / Notebook',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'Consuma solo 20-60 W ed è fino al 70% più efficiente di un desktop.',
      dutyCycleExplanation: 'Processori mobili a bassissimo consumo.',
      savingAdvice: ['Riduci leggermente la luminosità dello schermo.'],
      faq: [{ question: 'Quanto costa usare il portatile al giorno?', answer: 'Per 8 ore di lavoro solo circa 6-12 centesimi.' }]
    },
    'monitor': {
      name: 'Monitor PC',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'Un monitor da 27 pollici consuma circa 20-40 W (circa 0,7-1,4 centesimi all\'ora).',
      dutyCycleExplanation: 'Retroilluminazione LED costante.',
      savingAdvice: ['Regola la luminosità in base alla luce della stanza.'],
      faq: [{ question: 'Quanto costa un secondo monitor all\'anno?', answer: 'Circa 10-20 € all\'anno di elettricità.' }]
    },
    'ps5': {
      name: 'PlayStation 5 (PS5)',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'La PS5 consuma circa 180-220 W in gioco (circa 6,3-7,7 centesimi all\'ora).',
      dutyCycleExplanation: '50 W nella home, fino a 220 W nei giochi in 4K.',
      savingAdvice: ['Disattiva l\'alimentazione USB fissa in modalità riposo.'],
      faq: [{ question: 'Quanto consuma la PS5 in riposo?', answer: '1,5-3 W in riposo semplice, 30 W durante i download.' }]
    },
    'xbox': {
      name: 'Xbox Series X',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'Consuma circa 150-210 W in gioco (circa 5,3-7,4 centesimi all\'ora).',
      dutyCycleExplanation: 'Pieno carico in 4K 120Hz.',
      savingAdvice: ['Scegli la modalità "Spegnimento (risparmio energetico)".'],
      faq: [{ question: 'Quanto fa risparmiare la modalità risparmio di Xbox?', answer: 'Consuma 0,5 W invece di 10–13 W in standby attivo (risparmia circa 30 €/anno).' }]
    },
    'klimaanlage': {
      name: 'Condizionatore',
      category: 'Climatizzazione & Riscaldamento',
      shortDescription: 'I modelli portatili consumano 800-1.200 W (28-42 ct/h); i modelli split inverter sono più efficienti del 50%.',
      dutyCycleExplanation: 'Il compressore riduce la potenza al raggiungimento della temperatura.',
      savingAdvice: ['Imposta 24-25 °C.', 'Chiudi tapparelle durante le ore di sole.'],
      faq: [{ question: 'Quanto costa il condizionatore in estate?', answer: 'Per 30 giorni a 6h/giorno, circa 50–75 € in portatile e 25–40 € in split.' }]
    },
    'ventilator': {
      name: 'Ventilatore',
      category: 'Climatizzazione & Riscaldamento',
      shortDescription: 'Un ventilatore a piantana consuma solo 25-50 W (circa 0,9-1,8 centesimi all\'ora).',
      dutyCycleExplanation: 'Motore diretto senza compressore frigorifero.',
      savingAdvice: ['Spegni quando esci dalla stanza.'],
      faq: [{ question: 'Consuma molto meno del condizionatore?', answer: 'Sì, consuma circa il 95% in meno di elettricità.' }]
    },
    'heizluefter': {
      name: 'Termoventilatore / Stufetta',
      category: 'Climatizzazione & Riscaldamento',
      shortDescription: 'Consuma tra 1.500 e 2.000 W (circa 53-70 centesimi per ora di utilizzo).',
      dutyCycleExplanation: 'Resistenza elettrica che converte l\'energia in calore 1:1.',
      savingAdvice: ['Usa solo come riscaldamento d\'emergenza per brevi periodi.'],
      faq: [{ question: 'Quanto costa tenerlo acceso tutto il giorno?', answer: '8 ore al giorno costano circa 4,20-5,60 € (oltre 150 € al mese).' }]
    },
    'luftentfeuchter': {
      name: 'Deumidificatore',
      category: 'Climatizzazione & Riscaldamento',
      shortDescription: 'Consuma circa 200-400 W (circa 7-14 centesimi all\'ora).',
      dutyCycleExplanation: 'Condensa l\'umidità presente nell\'aria ambiente.',
      savingAdvice: ['Imposta l\'umidità desiderata al 50–55%.', 'Chiudi porte e finestre.'],
      faq: [{ question: 'Quante ore deve funzionare al giorno?', answer: '2-4 ore al giorno in stanze chiuse sono di norma sufficienti.' }]
    },
    'aquarium': {
      name: 'Acquario',
      category: 'Hobby & Speciale',
      shortDescription: 'Un acquario da 100 litri consuma circa 150-300 kWh all\'anno (circa 53-105 €/anno).',
      dutyCycleExplanation: 'Il riscaldatore e le luci costituiscono la maggior parte dei consumi.',
      savingAdvice: ['Usa luci LED e tieni l\'acquario coperto.'],
      faq: [{ question: 'Cosa consuma di più in un acquario?', answer: 'Il riscaldatore termostatico dell\'acqua.' }]
    },
    'pool': {
      name: 'Pompa per Piscina',
      category: 'Hobby & Speciale',
      shortDescription: 'Consuma tra 400 e 1.000 W (circa 14-35 centesimi all\'ora).',
      dutyCycleExplanation: 'Filtra il volume della piscina 2-3 volte al giorno.',
      savingAdvice: ['Usa un timer programmabile.'],
      faq: [{ question: 'Quante ore deve funzionare in estate?', answer: 'Circa 6-8 ore al giorno.' }]
    },
    'whirlpool': {
      name: 'Idromassaggio / Spa da Esterno',
      category: 'Hobby & Speciale',
      shortDescription: 'Consuma circa 2.000-4.000 kWh all\'anno (circa 700-1.400 €/anno).',
      dutyCycleExplanation: 'Mantenere l\'acqua a 38 °C richiede riscaldamento costante.',
      savingAdvice: ['Usa una copertura termica spessa.'],
      faq: [{ question: 'Quanto costa un idromassaggio al mese?', answer: 'Circa 50-120 € al mese a seconda della stagione.' }]
    },
    '3d-drucker': {
      name: 'Stampante 3D',
      category: 'Hobby & Speciale',
      shortDescription: 'Consuma circa 100-180 W (circa 3,5-6,3 centesimi per ora di stampa).',
      dutyCycleExplanation: 'Il piano riscaldato assorbe il 70% dell\'energia totale.',
      savingAdvice: ['Usa una camera chiusa per trattenere il calore.'],
      faq: [{ question: 'Quanto costa una stampa di 10 ore?', answer: 'Circa 40-60 centesimi di elettricità.' }]
    },
    'nas': {
      name: 'Server NAS',
      category: 'Hobby & Speciale',
      shortDescription: 'Consuma 15-30 W acceso 24/7 (circa 45-90 € all\'anno).',
      dutyCycleExplanation: 'Lo standby dei dischi riduce il consumo a meno di 8 W.',
      savingAdvice: ['Attiva l\'ibernazione dei dischi rigidi.'],
      faq: [{ question: 'Quanto costa un NAS acceso tutto l\'anno?', answer: 'A 20 W continui, circa 61 € all\'anno.' }]
    },
    'server': {
      name: 'Server Domestico',
      category: 'Hobby & Speciale',
      shortDescription: 'Un Mini PC a basso consumo consuma 10-40 W (circa 30-120 € all\'anno).',
      dutyCycleExplanation: 'Processori moderni a bassissimo consumo in idle.',
      savingAdvice: ['Usa Mini PC moderni al posto di vecchi desktop.'],
      faq: [{ question: 'Quanto consuma un server casalingo?', answer: 'Circa 10–15 W in idle (30-45 € all\'anno).' }]
    }
  }
};

export function getLocalizedAppliance(slug: string, lang: SupportedLanguage): LocalizedAppliance | null {
  const langDict = applianceTranslations[lang] || applianceTranslations.en || applianceTranslations.de;
  return langDict[slug] || null;
}
