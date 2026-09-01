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
    kuehlschrank: {
      name: 'Kühlschrank',
      category: 'Küche',
      shortDescription: 'Ein moderner Kühlschrank verbraucht ca. 100 bis 160 kWh pro Jahr (ca. 35 bis 56 €). Ältere Geräte benötigen oft 250 bis 350 kWh.',
      dutyCycleExplanation: 'Ein Kühlschrank läuft zwar rund um die Uhr, der stromintensive Kompressor schaltet sich jedoch thermostatgesteuert nur etwa 20 bis 40 Minuten pro Stunde ein.',
      savingAdvice: [
        'Optimale Temperatur wählen: 7 °C im Kühlraum reichen völlig aus.',
        'Regelmäßig abtauen: Eine 5 mm Eisschicht steigert den Stromverbrauch um bis zu 30 %.',
        'Türdichtungen regelmäßig auf Risse und Dichtheit prüfen.',
      ],
      faq: [
        {
          question: 'Wie viel Strom verbraucht ein Kühlschrank pro Tag?',
          answer: 'Ein moderner Standard-Kühlschrank verbraucht ca. 0,3 bis 0,45 kWh pro Tag (ca. 10 bis 16 Cent).',
        },
      ],
    },
    waschmaschine: {
      name: 'Waschmaschine',
      category: 'Haushalt & Reinigung',
      shortDescription: 'Eine moderne Waschmaschine verbraucht ca. 0,5 bis 1,0 kWh pro Waschgang (ca. 18 bis 35 Cent bei 35 ct/kWh).',
      dutyCycleExplanation: 'Über 80 % des Stromverbrauchs entfallen auf das Aufheizen des Wassers. Das Schleudern und Drehen der Trommel benötigt nur wenig Energie.',
      savingAdvice: [
        'Eco-Programme nutzen: Waschen bei 30 °C spart bis zu 60 % Strom gegenüber 60 °C.',
        'Trommel immer voll beladen.',
        'Regelmäßig Flusensieb und Heizstäbe entkalken.',
      ],
      faq: [
        {
          question: 'Was kostet ein Waschgang bei 60 °C im Vergleich zu 30 °C?',
          answer: 'Ein Waschgang bei 60 °C kostet ca. 35 bis 50 Cent, während ein 30-°C-Eco-Waschgang nur ca. 15 bis 20 Cent kostet.',
        },
      ],
    },
    trockner: {
      name: 'Wäschetrockner',
      category: 'Haushalt & Reinigung',
      shortDescription: 'Wärmepumpentrockner verbrauchen ca. 1,2 bis 1,8 kWh pro Trocknung, während alte Kondenstrockner oft über 4 kWh benötigen.',
      dutyCycleExplanation: 'Wärmepumpentrockner nutzen die Abwärme im Kreislauf wieder und sparen dadurch über 60 % Energie gegenüber klassischen Kondenstrocknern.',
      savingAdvice: [
        'Wäsche in der Waschmaschine mit mindestens 1.200–1.400 U/min vorschleudern.',
        'Flusensieb nach jedem Trockenvorgang säubern.',
        'Wärmepumpentechnologie bei Neukauf bevorzugen.',
      ],
      faq: [
        {
          question: 'Was kostet eine Trocknerladung?',
          answer: 'Ein moderner Wärmepumpentrockner kostet ca. 45 bis 65 Cent pro Ladung, alte Kondenstrockner kosten bis zu 1,50 €.',
        },
      ],
    },
    geschirrspueler: {
      name: 'Geschirrspüler',
      category: 'Küche',
      shortDescription: 'Ein Spülgang im Eco-Modus verbraucht ca. 0,7 bis 0,9 kWh (ca. 25 bis 32 Cent). Das ist sparsamer als Spülen von Hand.',
      dutyCycleExplanation: 'Das Gerät erhitzt das Wasser hocheffizient. Im Eco-Programm wird die Einweichzeit verlängert, um Heizenergie einzusparen.',
      savingAdvice: [
        'Eco-50°C-Programm als Standard nutzen.',
        'Spülmaschine nur voll beladen starten.',
        'Geschirr nicht warm unter fließendem Wasser vorspülen.',
      ],
      faq: [
        {
          question: 'Ist der Geschirrspüler sparsamer als Handspülen?',
          answer: 'Ja, moderne Geschirrspüler verbrauchen bis zu 50 % weniger Strom und über 60 % weniger Wasser als das Spülen von Hand im Spülbecken.',
        },
      ],
    },
    gamingpc: {
      name: 'Gaming-PC',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Unter Volllast verbraucht ein High-End Gaming-PC ca. 350 bis 600 Watt (ca. 12 bis 21 Cent pro Spielstunde).',
      dutyCycleExplanation: 'Grafikkarte (GPU) und Prozessor (CPU) fordern bei anspruchsvollen Spielen die maximale Leistung des Netzteils ab.',
      savingAdvice: [
        'FPS-Cap oder G-Sync/FreeSync aktivieren, um unnötige GPU-Auslastung zu reduzieren.',
        'Undervolting der Grafikkarte durchführen.',
        'PC und Monitore bei Nichtgebrauch über abschaltbare Steckerleiste trennen.',
      ],
      faq: [
        {
          question: 'Was kostet 4 Stunden Gaming am Tag pro Monat?',
          answer: 'Bei 400 Watt Durchschnittsleistung und 4 Stunden täglichem Gaming entstehen monatlich rund 17 bis 20 Euro Stromkosten.',
        },
      ],
    },
    fernseher: {
      name: 'Fernseher (TV)',
      category: 'Unterhaltung & Büro',
      shortDescription: 'Ein moderner 55-Zoll-Fernseher (LED/OLED) verbraucht ca. 70 bis 130 Watt (ca. 2,5 bis 4,5 Cent pro Stunde).',
      dutyCycleExplanation: 'Bildschirmhelligkeit, HDR-Wiedergabe und Bilddiagonale bestimmen den Echtzeit-Stromverbrauch.',
      savingAdvice: [
        'Helligkeitssensor (Umgebungslichtanpassung) aktivieren.',
        'Dynamische Bildmodi vermeiden und Standard- oder Film-Modus wählen.',
        'Fernseher nachts komplett vom Stromnetz trennen.',
      ],
      faq: [
        {
          question: 'Verbrauchen OLED-Fernseher mehr Strom als LCD/LED?',
          answer: 'Bei sehr hellen Vollbildern verbraucht OLED etwas mehr Strom, bei dunklen Filmszenen schalten sich Pixel komplett ab und sparen Energie.',
        },
      ],
    },
    klimaanlage: {
      name: 'Klimaanlage (Split & Mobil)',
      category: 'Klima & Heizen',
      shortDescription: 'Mobile Monoblock-Klimageräte verbrauchen ca. 800 bis 1.200 Watt (ca. 28 bis 42 ct/h), Split-Klimageräte arbeiten rund 50 % effizienter.',
      dutyCycleExplanation: 'Der Kompressor schaltet nach Erreichen der Zieltemperatur in den energiesparenden Inverter-Teillastbetrieb.',
      savingAdvice: [
        'Solltemperatur nicht zu tief wählen: 23–25 °C genügen meist.',
        'Tagsüber Fenster und Rollläden geschlossen halten.',
        'Split-Geräte mit Inverter-Technik bevorzugen.',
      ],
      faq: [
        {
          question: 'Was kostet eine Klimaanlage im Sommer?',
          answer: 'Bei 30 Hitzetagen mit je 6 Stunden Betrieb kostet ein mobiles Klimagerät ca. 50 bis 75 €, eine Split-Klimaanlage ca. 25 bis 40 €.',
        },
      ],
    },
  },
  en: {
    kuehlschrank: {
      name: 'Refrigerator (Fridge)',
      category: 'Kitchen',
      shortDescription: 'A modern refrigerator consumes around 100 to 160 kWh per year (approx. €35 to €56 / year). Older units often draw 250 to 350 kWh.',
      dutyCycleExplanation: 'While a fridge runs 24/7, the energy-intensive compressor only operates thermostat-controlled for about 20 to 40 minutes per hour.',
      savingAdvice: [
        'Set optimal temperature: 7 °C (45 °F) in the fridge and -18 °C (0 °F) in the freezer.',
        'Defrost regularly: A 5 mm ice layer increases electricity consumption by up to 30%.',
        'Check door seals regularly to keep cold air locked in.',
      ],
      faq: [
        {
          question: 'How much electricity does a refrigerator consume per day?',
          answer: 'A modern standard refrigerator consumes approximately 0.3 to 0.45 kWh per day (about 10 to 16 cents).',
        },
      ],
    },
    waschmaschine: {
      name: 'Washing Machine',
      category: 'Household & Cleaning',
      shortDescription: 'A modern washing machine consumes approx. 0.5 to 1.0 kWh per cycle (about €0.18 to €0.35 at €0.35/kWh).',
      dutyCycleExplanation: 'Over 80% of the electricity is used to heat up the water. Drum spinning and pumping use comparatively little power.',
      savingAdvice: [
        'Use Eco programs: Washing at 30 °C (86 °F) saves up to 60% electricity compared to 60 °C.',
        'Always run full loads when possible.',
        'Descaling heating elements improves thermal efficiency.',
      ],
      faq: [
        {
          question: 'How much does a 60 °C wash cycle cost compared to 30 °C?',
          answer: 'A 60 °C cycle costs around €0.35–€0.50, whereas a 30 °C Eco cycle costs only about €0.15–€0.20.',
        },
      ],
    },
    trockner: {
      name: 'Tumble Dryer',
      category: 'Household & Cleaning',
      shortDescription: 'Heat pump dryers consume about 1.2 to 1.8 kWh per cycle, while older condenser dryers often exceed 4.0 kWh.',
      dutyCycleExplanation: 'Heat pump dryers recycle warm air continuously, reducing energy consumption by over 60% compared to traditional dryers.',
      savingAdvice: [
        'Spin clothes at high speed (1,200–1,400 RPM) in the washer before drying.',
        'Clean the lint filter after every drying cycle.',
        'Choose heat pump technology when buying a new dryer.',
      ],
      faq: [
        {
          question: 'How much does a single dryer cycle cost?',
          answer: 'A modern heat pump dryer costs approx. €0.45 to €0.65 per load, whereas older condenser models can cost over €1.50.',
        },
      ],
    },
    geschirrspueler: {
      name: 'Dishwasher',
      category: 'Kitchen',
      shortDescription: 'An Eco cycle consumes about 0.7 to 0.9 kWh (€0.25 to €0.32). It is far more energy and water efficient than hand washing.',
      dutyCycleExplanation: 'Water is heated efficiently with closed circulation. The Eco cycle extends soaking time to save significant heating energy.',
      savingAdvice: [
        'Use the Eco 50 °C setting as your default program.',
        'Only run the dishwasher when completely full.',
        'Do not pre-rinse dishes with hot running water.',
      ],
      faq: [
        {
          question: 'Is a dishwasher more economical than washing dishes by hand?',
          answer: 'Yes, modern dishwashers use up to 50% less electricity and over 60% less water than washing by hand in the sink.',
        },
      ],
    },
    gamingpc: {
      name: 'Gaming PC',
      category: 'Entertainment & Office',
      shortDescription: 'Under full gaming load, a high-end gaming PC draws 350 to 600 Watts (about €0.12 to €0.21 per gaming hour).',
      dutyCycleExplanation: 'The graphics card (GPU) and processor (CPU) draw peak electrical wattage during intense gaming and 3D rendering.',
      savingAdvice: [
        'Enable an FPS cap or G-Sync/FreeSync to prevent rendering unused frames.',
        'Undervolt the GPU for lower heat and power consumption.',
        'Use a switchable power strip to eliminate idle standby draw.',
      ],
      faq: [
        {
          question: 'How much does 4 hours of daily gaming cost per month?',
          answer: 'At an average power draw of 400 W and 4 hours of daily gaming, monthly electricity costs are around €17 to €20.',
        },
      ],
    },
    fernseher: {
      name: 'Television (TV)',
      category: 'Entertainment & Office',
      shortDescription: 'A 55-inch LED/OLED TV draws approx. 70 to 130 Watts (about 2.5 to 4.5 cents per operating hour).',
      dutyCycleExplanation: 'Screen brightness, ambient lighting sensors, and HDR dynamic range directly influence live power consumption.',
      savingAdvice: [
        'Activate ambient light detection to dim the backlight automatically in the evening.',
        'Avoid vivid/dynamic picture modes; choose standard or cinema mode.',
        'Disconnect TV peripherals or turn off power strip when sleeping.',
      ],
      faq: [
        {
          question: 'Do OLED TVs consume more electricity than LCD/LED?',
          answer: 'OLED draws slightly more power for pure white backgrounds, but shuts off pixels completely in dark scenes, saving power.',
        },
      ],
    },
    klimaanlage: {
      name: 'Air Conditioner',
      category: 'Climate & Heating',
      shortDescription: 'Portable ACs draw 800 to 1,200 Watts (approx. 28 to 42 ct/h), whereas mini-split inverter ACs are about 50% more efficient.',
      dutyCycleExplanation: 'The compressor ramps down into low-power inverter mode once the target room temperature is achieved.',
      savingAdvice: [
        'Set target temperature reasonably: 23–25 °C (73–77 °F) is comfortable and efficient.',
        'Keep windows, doors, and blinds closed during peak sunlight hours.',
        'Select split AC systems with inverter technology for optimal seasonal efficiency.',
      ],
      faq: [
        {
          question: 'How much does running an air conditioner cost in summer?',
          answer: 'For 30 hot days with 6 hours daily runtime, a portable unit costs approx. €50–€75, while an efficient split system costs €25–€40.',
        },
      ],
    },
  },
  es: {
    kuehlschrank: {
      name: 'Frigorífico / Refrigerador',
      category: 'Cocina',
      shortDescription: 'Un frigorífico moderno consume unos 100 a 160 kWh al año (aprox. 35 a 56 €/año). Modelos antiguos superan los 250–350 kWh.',
      dutyCycleExplanation: 'Aunque está enchufado 24 horas, el compresor solo se enciende durante 20 a 40 minutos por hora mediante termostato.',
      savingAdvice: [
        'Temperatura ideal: 7 °C en la nevera y -18 °C en el congelador.',
        'Descongelar periódicamente para evitar capas de hielo.',
        'Comprobar la goma y sellado de las puertas.',
      ],
      faq: [
        {
          question: '¿Cuánto consume una nevera al día?',
          answer: 'Un frigorífico estándar moderno consume entre 0,3 y 0,45 kWh al día (unos 10 a 16 céntimos de euro).',
        },
      ],
    },
    waschmaschine: {
      name: 'Lavadora',
      category: 'Hogar y Limpieza',
      shortDescription: 'Una lavadora moderna consume entre 0,5 y 1,0 kWh por ciclo (aprox. 0,18 a 0,35 € por lavado).',
      dutyCycleExplanation: 'Más del 80% de la energía se destina a calentar el agua; el centrifugado y el tambor consumen muy poco.',
      savingAdvice: [
        'Usa programas Eco a 30 °C para ahorrar hasta un 60% de energía.',
        'Llena el tambor a su capacidad recomendada.',
        'Limpia periódicamente el filtro de pelusas y la cal.',
      ],
      faq: [
        {
          question: '¿Cuánto cuesta lavar a 60 °C comparado con 30 °C?',
          answer: 'Lavar a 60 °C cuesta entre 0,35 y 0,50 €, mientras que un lavado Eco a 30 °C cuesta unos 0,15 a 0,20 €.',
        },
      ],
    },
    trockner: {
      name: 'Secadora de Ropa',
      category: 'Hogar y Limpieza',
      shortDescription: 'Las secadoras con bomba de calor consumen aprox. 1,2 a 1,8 kWh por secado, frente a más de 4 kWh en modelos antiguos.',
      dutyCycleExplanation: 'La tecnología de bomba de calor recircula el aire caliente, ahorrando más del 60% respecto a secadoras de condensación.',
      savingAdvice: [
        'Centrifugar bien la colada a 1.200–1.400 rpm en la lavadora.',
        'Limpiar el filtro de pelusas tras cada uso.',
        'Elegir siempre modelos con bomba de calor.',
      ],
      faq: [
        {
          question: '¿Cuánto cuesta poner la secadora?',
          answer: 'Un ciclo en una secadora con bomba de calor cuesta aprox. 0,45 a 0,65 €, frente a más de 1,50 € en secadoras antiguas.',
        },
      ],
    },
    geschirrspueler: {
      name: 'Lavavajillas',
      category: 'Cocina',
      shortDescription: 'El programa Eco consume entre 0,7 y 0,9 kWh (0,25 a 0,32 €). Es mucho más eficiente que fregar platos a mano.',
      dutyCycleExplanation: 'El agua se calienta en circuito cerrado. El modo Eco alarga el remojo para ahorrar energía de calentamiento.',
      savingAdvice: [
        'Usa el programa Eco a 50 °C habitualmente.',
        'Pon el lavavajillas solo cuando esté lleno.',
        'No enjuagues la vajilla con agua caliente antes de meterla.',
      ],
      faq: [
        {
          question: '¿Es más económico el lavavajillas que fregar a mano?',
          answer: 'Sí, los lavavajillas modernos consumen hasta un 50% menos electricidad y un 60% menos agua que fregar en el fregadero.',
        },
      ],
    },
    gamingpc: {
      name: 'PC Gaming',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'A pleno rendimiento en juegos, un PC gaming consume entre 350 y 600 W (unos 0,12 a 0,21 € por hora de juego).',
      dutyCycleExplanation: 'La tarjeta gráfica (GPU) y la CPU demandan la máxima potencia durante el renderizado 3D de alta carga.',
      savingAdvice: [
        'Limita los FPS o activa G-Sync/FreeSync para evitar renderizar fotogramas innecesarios.',
        'Haz undervolting a la tarjeta gráfica.',
        'Usa regletas con interruptor para cortar el consumo fantasma.',
      ],
      faq: [
        {
          question: '¿Cuánto cuesta jugar 4 horas al día al mes?',
          answer: 'Con un consumo medio de 400 W durante 4 horas diarias, el coste mensual de electricidad ronda los 17 a 20 euros.',
        },
      ],
    },
    fernseher: {
      name: 'Televisor (TV)',
      category: 'Entretenimiento y Oficina',
      shortDescription: 'Un televisor LED/OLED de 55 pulgadas consume entre 70 y 130 W (unos 2,5 a 4,5 céntimos por hora).',
      dutyCycleExplanation: 'El brillo de pantalla, los sensores de luz ambiente y los modos HDR determinan el consumo instantáneo.',
      savingAdvice: [
        'Activa el sensor de iluminación ambiental.',
        'Evita el modo de imagen dinámico y elige modo cine o estándar.',
        'Apaga completamente la regleta por la noche.',
      ],
      faq: [
        {
          question: '¿Consume más un televisor OLED que uno LED?',
          answer: 'OLED consume algo más en escenas muy brillantes, pero apaga los píxeles en escenas oscuras ahorrando energía.',
        },
      ],
    },
    klimaanlage: {
      name: 'Aire Acondicionado',
      category: 'Climatización',
      shortDescription: 'Los aires portátiles consumen entre 800 y 1.200 W (28 a 42 ct/h), mientras que los splits con inverter son un 50% más eficientes.',
      dutyCycleExplanation: 'El compresor modula a baja potencia una vez alcanzada la temperatura deseada.',
      savingAdvice: [
        'Fija una temperatura de confort entre 24 y 25 °C.',
        'Mantén persianas bajadas durante las horas de más sol.',
        'Elige equipos tipo split con clasificación energética A+++.',
      ],
      faq: [
        {
          question: '¿Cuánto cuesta poner el aire acondicionado en verano?',
          answer: 'Durante 30 días calurosos a 6 horas diarias, un portátil cuesta aprox. 50–75 €, mientras que un split cuesta 25–40 €.',
        },
      ],
    },
  },
  ja: {
    kuehlschrank: {
      name: '冷蔵庫',
      category: 'キッチン家電',
      shortDescription: '最新の冷蔵庫の年間消費電力量は約100〜160kWh（年間約35〜56€）。古い機器は250〜350kWhに達します。',
      dutyCycleExplanation: '24時間稼働していますが、コンプレッサーは温度調節により1時間あたり約20〜40分のみ作動します。',
      savingAdvice: [
        '設定温度を適切に保持（冷蔵室は「中」または7℃、冷凍室は-18℃）。',
        '定期的に霜取りを行い、パッキンの隙間がないか確認。',
        '温かい食品は十分に冷ましてから入れる。',
      ],
      faq: [
        {
          question: '冷蔵庫の1日あたりの電気代はいくらですか？',
          answer: '一般的な最新冷蔵庫で1日あたり約0.3〜0.45kWh（約10〜16セント）です。',
        },
      ],
    },
    waschmaschine: {
      name: '洗濯機',
      category: '生活・洗濯家電',
      shortDescription: '最新の洗濯機は1回あたり約0.5〜1.0kWhを消費します（1回あたり約18〜35セント）。',
      dutyCycleExplanation: '消費電力の80％以上は水温を上げるヒーターに使用され、モーター回転自体の電力消費は少なめです。',
      savingAdvice: [
        '節電コース（30℃以下での洗濯）を活用する。',
        '容量に合わせてまとめ洗いを行う。',
        '定期的にフィルターを清掃する。',
      ],
      faq: [
        {
          question: '水温による電気代の違いは？',
          answer: '60℃洗いはおよそ35〜50セントかかりますが、30℃以下のエコ運転なら約15〜20セントに抑えられます。',
        },
      ],
    },
    trockner: {
      name: '衣類乾燥機',
      category: '生活・洗濯家電',
      shortDescription: 'ヒートポンプ式乾燥機は1回あたり約1.2〜1.8kWh、従来のヒーター式は4kWh以上消費します。',
      dutyCycleExplanation: 'ヒートポンプ式は熱を再利用するため、従来の乾燥機と比べて60％以上の省エネが可能です。',
      savingAdvice: [
        '洗濯機でしっかり脱水（1200〜1400回転）してから乾燥機に入れる。',
        '使用後は毎回糸くずフィルターを掃除する。',
        '買い替え時はヒートポンプ式を選ぶ。',
      ],
      faq: [
        {
          question: '乾燥機1回の電気代はいくらですか？',
          answer: '最新のヒートポンプ式で約45〜65セント、旧型モデルでは1.50ユーロ以上かかる場合があります。',
        },
      ],
    },
    geschirrspueler: {
      name: '食器洗い乾燥機（食洗機）',
      category: 'キッチン家電',
      shortDescription: 'エコモードで1回あたり約0.7〜0.9kWh（約25〜32セント）。手洗いよりも水と電気の節約になります。',
      dutyCycleExplanation: '効率よく循環水を加熱し、エコモードではつけ置き時間を長くしてヒーターの電力を抑えます。',
      savingAdvice: [
        '普段使いには「エコモード（50℃）」を使用する。',
        '食器を庫内いっぱいにまとめて洗う。',
        'お湯で下洗いをしない。',
      ],
      faq: [
        {
          question: '手洗いと食洗機はどちらがお得ですか？',
          answer: '最新の食洗機は手洗いと比べて電気代・ガス代を最大50％、水の使用量を60％以上削減できます。',
        },
      ],
    },
    gamingpc: {
      name: 'ゲーミングPC',
      category: 'エンタメ・パソコン',
      shortDescription: '高負荷ゲームプレイ時の消費電力は約350〜600W（1時間あたり約12〜21セント）。',
      dutyCycleExplanation: 'グラフィックボード（GPU）とCPUが3D映像処理時に大量の電力を消費します。',
      savingAdvice: [
        'フレームレート制限（FPS上限設定）をかけて過剰なGPU負荷を抑制する。',
        'GPUの電圧調整（アンダーボルト）を行う。',
        '使わない時はスイッチ付き電源タップで待機電力をカットする。',
      ],
      faq: [
        {
          question: '1日4時間ゲームをすると1ヶ月の電気代はいくら？',
          answer: '平均400Wで毎日4時間プレイした場合、月々の電気代は約17〜20ユーロ（約2,700〜3,200円）となります。',
        },
      ],
    },
    fernseher: {
      name: 'テレビ（液晶・有機EL）',
      category: 'エンタメ・パソコン',
      shortDescription: '55インチの液晶・有機ELテレビは約70〜130W（1時間あたり約2.5〜4.5セント）を消費します。',
      dutyCycleExplanation: '画面の明るさ、HDR設定、部屋の明るさセンサーによって消費電力がリアルタイムに変動します。',
      savingAdvice: [
        '明るさ自動調整センサーを有効にする。',
        '「ダイナミック」などの超高輝度モードを避け「標準」や「シネマ」を選択。',
        '就寝時は主電源またはタップで切る。',
      ],
      faq: [
        {
          question: '有機ELテレビは液晶より電気代が高いですか？',
          answer: '明るい画面ではやや高くなりますが、暗いシーンでは素子が完全に消灯するため省エネになります。',
        },
      ],
    },
    klimaanlage: {
      name: 'エアコン（クーラー）',
      category: '空調・暖房',
      shortDescription: 'ポータブル式は約800〜1,200W（28〜42 ct/h）、セパレート型インバーター式は約50％省エネです。',
      dutyCycleExplanation: '設定温度に達するとコンプレッサーが低出力運転（インバーター制御）に切り替わります。',
      savingAdvice: [
        '冷房時は24〜26℃を目安に設定する。',
        '日中はカーテンやブラインドで直射日光を遮る。',
        '高効率インバーター搭載モデルを選ぶ。',
      ],
      faq: [
        {
          question: '夏のエアコン代はどれくらいかかりますか？',
          answer: '猛暑日30日間に1日6時間運転した場合、ポータブル型で約50〜75€、省エネ型セパレート式で約25〜40€です。',
        },
      ],
    },
  },
  fr: {
    kuehlschrank: {
      name: 'Réfrigérateur (Frigo)',
      category: 'Cuisine',
      shortDescription: 'Un réfrigérateur moderne consomme environ 100 à 160 kWh par an (environ 35 à 56 €/an). Les anciens modèles dépassent 250 à 350 kWh.',
      dutyCycleExplanation: 'Bien qu\'allumé 24h/24, le compresseur ne fonctionne que 20 à 40 minutes par heure grâce au thermostat.',
      savingAdvice: [
        'Réglez la température : 7 °C dans le réfrigérateur et -18 °C au congélateur.',
        'Dégivrez régulièrement pour éviter une surconsommation jusqu\'à 30 %.',
        'Vérifiez l\'étanchéité des joints de porte.',
      ],
      faq: [
        {
          question: 'Combien consomme un réfrigérateur par jour ?',
          answer: 'Un réfrigérateur moderne standard consomme environ 0,3 à 0,45 kWh par jour (environ 10 à 16 centimes).',
        },
      ],
    },
    waschmaschine: {
      name: 'Lave-linge',
      category: 'Ménage & Entretien',
      shortDescription: 'Un lave-linge moderne consomme environ 0,5 à 1,0 kWh par cycle (environ 0,18 à 0,35 € par lavage).',
      dutyCycleExplanation: 'Plus de 80 % de l\'électricité sert à chauffer l\'eau ; le moteur de rotation consomme très peu.',
      savingAdvice: [
        'Utilisez les programmes Éco à 30 °C pour économiser jusqu\'à 60 % d\'énergie.',
        'Remplissez le tambour à pleine charge.',
        'Détartrez régulièrement la résistance.',
      ],
      faq: [
        {
          question: 'Quel est le coût d\'un lavage à 60 °C comparé à 30 °C ?',
          answer: 'Un lavage à 60 °C coûte environ 0,35 à 0,50 €, contre 0,15 à 0,20 € en mode Éco 30 °C.',
        },
      ],
    },
    trockner: {
      name: 'Sèche-linge',
      category: 'Ménage & Entretien',
      shortDescription: 'Les sèche-linge avec pompe à chaleur consomment environ 1,2 à 1,8 kWh par cycle, contre plus de 4 kWh pour les anciens modèles.',
      dutyCycleExplanation: 'La pompe à chaleur recycle l\'air chaud, ce qui réduit la consommation de plus de 60 %.',
      savingAdvice: [
        'Essorez le linge à 1 200–1 400 tr/min dans le lave-linge avant séchage.',
        'Nettoyez le filtre à peluches après chaque cycle.',
        'Privilégiez les appareils à pompe à chaleur.',
      ],
      faq: [
        {
          question: 'Combien coûte un cycle de sèche-linge ?',
          answer: 'Un modèle avec pompe à chaleur coûte environ 0,45 à 0,65 € par cycle, contre plus de 1,50 € pour un modèle ancien.',
        },
      ],
    },
    geschirrspueler: {
      name: 'Lave-vaisselle',
      category: 'Cuisine',
      shortDescription: 'Le cycle Éco consomme environ 0,7 à 0,9 kWh (0,25 à 0,32 €). C\'est plus économique que la vaisselle à la main.',
      dutyCycleExplanation: 'L\'eau est chauffée en circuit fermé optimisé. Le mode Éco prolonge le trempage pour limiter l\'énergie de chauffe.',
      savingAdvice: [
        'Utilisez le programme Éco 50 °C au quotidien.',
        'Faites tourner le lave-vaisselle uniquement lorsqu\'il est plein.',
        'Ne pré-rincez pas la vaisselle à l\'eau chaude.',
      ],
      faq: [
        {
          question: 'Le lave-vaisselle est-il plus économique que la vaisselle à la main ?',
          answer: 'Oui, les lave-vaisselle modernes consomment jusqu\'à 50 % d\'électricité et 60 % d\'eau en moins que le lavage à l\'évier.',
        },
      ],
    },
    gamingpc: {
      name: 'PC Gamer',
      category: 'Multimédia & Bureau',
      shortDescription: 'En pleine charge de jeu, un PC gamer consomme entre 350 et 600 W (environ 0,12 à 0,21 € par heure de jeu).',
      dutyCycleExplanation: 'La carte graphique (GPU) et le processeur (CPU) tirent leur puissance maximale lors des rendus 3D exigeants.',
      savingAdvice: [
        'Limitez le taux de rafraîchissement (FPS cap) ou activez G-Sync/FreeSync.',
        'Effectuez un undervolting de la carte graphique.',
        'Utilisez une multiprise avec interrupteur pour couper la veille.',
      ],
      faq: [
        {
          question: 'Combien coûte 4 heures de jeu par jour sur un mois ?',
          answer: 'À une puissance moyenne de 400 W pendant 4 heures par jour, le coût mensuel d\'électricité est d\'environ 17 à 20 euros.',
        },
      ],
    },
    fernseher: {
      name: 'Téléviseur (TV)',
      category: 'Multimédia & Bureau',
      shortDescription: 'Un téléviseur 55 pouces LED/OLED consomme entre 70 et 130 W (environ 2,5 à 4,5 centimes par heure).',
      dutyCycleExplanation: 'La luminosité, les capteurs ambiants et les modes HDR influent directement sur la puissance instantanée.',
      savingAdvice: [
        'Activez le capteur de luminosité ambiante.',
        'Évitez le mode dynamique et privilégiez le mode cinéma ou standard.',
        'Éteignez complètement la multiprise la nuit.',
      ],
      faq: [
        {
          question: 'Les TV OLED consomment-elles plus que les TV LED ?',
          answer: 'L\'OLED consomme un peu plus sur les images très lumineuses, mais éteint complètement les pixels dans les scènes sombres.',
        },
      ],
    },
    klimaanlage: {
      name: 'Climatisation',
      category: 'Climat & Chauffage',
      shortDescription: 'Les climatiseurs mobiles consomment 800 à 1 200 W (28 à 42 ct/h), les systèmes split inverter sont 50 % plus économes.',
      dutyCycleExplanation: 'Le compresseur passe en régime réduit dès que la température de consigne est atteinte.',
      savingAdvice: [
        'Réglez la température entre 24 et 26 °C.',
        'Fermez les volets et fenêtres pendant la journée.',
        'Choisissez des climatiseurs split de classe A+++.',
      ],
      faq: [
        {
          question: 'Combien coûte l\'utilisation d\'un climatiseur en été ?',
          answer: 'Pour 30 jours chauds à raison de 6h/jour, un modèle mobile coûte environ 50–75 €, contre 25–40 € pour un split.',
        },
      ],
    },
  },
  pt: {
    kuehlschrank: {
      name: 'Geladeira / Frigorífico',
      category: 'Cozinha',
      shortDescription: 'Uma geladeira moderna consome cerca de 100 a 160 kWh por ano (aprox. 35 a 56 €/ano). Modelos antigos ultrapassam 250–350 kWh.',
      dutyCycleExplanation: 'Embora ligada 24 horas, o compressor só funciona cerca de 20 a 40 minutos por hora via termostato.',
      savingAdvice: [
        'Mantenha a temperatura ideal: 7 °C no refrigerador e -18 °C no congelador.',
        'Descongele periodicamente para evitar acúmulo de gelo.',
        'Verifique a borracha de vedação das portas.',
      ],
      faq: [
        {
          question: 'Quanto consome uma geladeira por dia?',
          answer: 'Uma geladeira padrão moderna consome cerca de 0,3 a 0,45 kWh por dia (aprox. 10 a 16 centavos).',
        },
      ],
    },
    waschmaschine: {
      name: 'Máquina de Lavar Roupa',
      category: 'Casa & Limpeza',
      shortDescription: 'Uma máquina de lavar moderna consome cerca de 0,5 a 1,0 kWh por ciclo (aprox. 0,18 a 0,35 € por lavagem).',
      dutyCycleExplanation: 'Mais de 80% da energia é usada para aquecer a água; a rotação do tambor consome pouca eletricidade.',
      savingAdvice: [
        'Use programas Eco a 30 °C para economizar até 60% de energia.',
        'Lave sempre com a capacidade total de roupas.',
        'Limpe regularmente o filtro de fiapos e resíduos.',
      ],
      faq: [
        {
          question: 'Qual o custo de lavar a 60 °C em comparação com 30 °C?',
          answer: 'Lavar a 60 °C custa cerca de 0,35 a 0,50 €, enquanto no modo Eco 30 °C custa apenas 0,15 a 0,20 €.',
        },
      ],
    },
    trockner: {
      name: 'Secadora de Roupas',
      category: 'Casa & Limpeza',
      shortDescription: 'Secadoras com bomba de calor consomem cerca de 1,2 a 1,8 kWh por ciclo, contra mais de 4 kWh em modelos antigos.',
      dutyCycleExplanation: 'A bomba de calor recicla o ar quente continuamente, economizando mais de 60% de energia.',
      savingAdvice: [
        'Centrifugue bem as roupas na máquina (1.200–1.400 RPM) antes de secar.',
        'Limpe o filtro de fiapos após cada ciclo.',
        'Prefira modelos com tecnologia de bomba de calor.',
      ],
      faq: [
        {
          question: 'Quanto custa usar a secadora?',
          answer: 'Um ciclo numa secadora com bomba de calor custa cerca de 0,45 a 0,65 €, contra mais de 1,50 € em secadoras antigas.',
        },
      ],
    },
    geschirrspueler: {
      name: 'Lava-Louças',
      category: 'Cozinha',
      shortDescription: 'O programa Eco consome cerca de 0,7 a 0,9 kWh (0,25 a 0,32 €). É muito mais econômico do que lavar à mão.',
      dutyCycleExplanation: 'A água é aquecida em circuito fechado. O modo Eco aumenta o tempo de molho para economizar energia de aquecimento.',
      savingAdvice: [
        'Utilize o programa Eco 50 °C no dia a dia.',
        'Ligue a lava-louças apenas quando estiver totalmente cheia.',
        'Não enxágue as louças com água quente antes de colocar na máquina.',
      ],
      faq: [
        {
          question: 'A lava-louças é mais econômica do que lavar na pia?',
          answer: 'Sim, lava-louças modernas utilizam até 50% menos energia e 60% menos água do que a lavagem manual na pia.',
        },
      ],
    },
    gamingpc: {
      name: 'PC Gamer',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Em jogos pesados, um PC gamer consome entre 350 e 600 W (cerca de 0,12 a 0,21 € por hora de jogo).',
      dutyCycleExplanation: 'A placa de vídeo (GPU) e o processador (CPU) demandam potência máxima durante gráficos 3D intensos.',
      savingAdvice: [
        'Limite a taxa de quadros (FPS cap) ou ative G-Sync/FreeSync.',
        'Faça undervolting na placa de vídeo para reduzir consumo e calor.',
        'Use filtro de linha com interruptor para desligar aparelhos em standby.',
      ],
      faq: [
        {
          question: 'Quanto custa jogar 4 horas por dia durante o mês?',
          answer: 'Com consumo médio de 400 W durante 4 horas diárias, a conta de luz mensal é de cerca de 17 a 20 euros.',
        },
      ],
    },
    fernseher: {
      name: 'Televisão (TV)',
      category: 'Entretenimento & Escritório',
      shortDescription: 'Uma TV 55 polegadas LED/OLED consome entre 70 e 130 W (cerca de 2,5 a 4,5 centavos por hora).',
      dutyCycleExplanation: 'Brilho da tela, sensores de luz ambiente e modos HDR determinam o consumo em tempo real.',
      savingAdvice: [
        'Ative o sensor de luz ambiente para diminuir o brilho à noite.',
        'Evite o modo dinâmico e escolha o modo cinema ou padrão.',
        'Desligue a régua de tomadas ao dormir.',
      ],
      faq: [
        {
          question: 'A TV OLED gasta mais energia que a LED?',
          answer: 'OLED gasta um pouco mais em telas muito claras, mas desliga totalmente os pixels em cenas escuras, poupando energia.',
        },
      ],
    },
    klimaanlage: {
      name: 'Ar-Condicionado',
      category: 'Climatização & Aquecimento',
      shortDescription: 'Aparelhos portáteis consomem 800 a 1.200 W (28 a 42 ct/h), enquanto modelos split inverter são 50% mais eficientes.',
      dutyCycleExplanation: 'O compressor reduz a potência automaticamente ao atingir a temperatura desejada.',
      savingAdvice: [
        'Ajuste a temperatura entre 23 e 25 °C.',
        'Feche janelas e cortinas durante as horas de sol forte.',
        'Prefira equipamentos split com classificação energética A+++.',
      ],
      faq: [
        {
          question: 'Quanto custa usar ar-condicionado no verão?',
          answer: 'Para 30 dias quentes usando 6 horas por dia, um modelo portátil custa cerca de 50–75 €, e um split eficiente custa 25–40 €.',
        },
      ],
    },
  },
  ko: {
    kuehlschrank: {
      name: '냉장고',
      category: '주방 가전',
      shortDescription: '최신 냉장고의 연간 소비전력량은 약 100~160kWh(연간 약 35~56€)입니다. 구형 모델은 250~350kWh에 달합니다.',
      dutyCycleExplanation: '24시간 내내 켜져 있지만, 컴프레서는 온도 센서 제어를 통해 시간당 약 20~40분만 작동합니다.',
      savingAdvice: [
        '적정 온도 유지: 냉장실 7℃, 냉동실 -18℃가 가장 효율적입니다.',
        '정기적으로 성에를 제거하여 냉각 효율을 유지하세요.',
        '도어 고무 패킹의 밀폐 상태를 점검하세요.',
      ],
      faq: [
        {
          question: '냉장고의 하루 전기요금은 얼마인가요?',
          answer: '최신 표준 냉장고는 하루 약 0.3~0.45kWh(약 10~16센트)를 소비합니다.',
        },
      ],
    },
    waschmaschine: {
      name: '세탁기',
      category: '생활·세탁 가전',
      shortDescription: '최신 세탁기는 1회 세탁 시 약 0.5~1.0kWh(약 18~35센트)의 전력을 소비합니다.',
      dutyCycleExplanation: '전력 소비의 80% 이상이 물을 데우는 데 쓰이며, 모터 회전에 필요한 전력은 상대적으로 적습니다.',
      savingAdvice: [
        '찬물 또는 30℃ 에코 코스를 사용하면 전력을 최대 60% 절약할 수 있습니다.',
        '세탁물을 모아서 정격 용량에 맞게 세탁하세요.',
        '배수 필터를 주기적으로 청소하세요.',
      ],
      faq: [
        {
          question: '60℃ 온수 세탁과 30℃ 에코 세탁의 비용 차이는?',
          answer: '60℃ 온수 세탁은 회당 약 35~50센트인 반면, 30℃ 에코 세탁은 약 15~20센트에 불과합니다.',
        },
      ],
    },
    trockner: {
      name: '의류 건조기',
      category: '생활·세탁 가전',
      shortDescription: '히트펌프 건조기는 1회당 약 1.2~1.8kWh를 소비하며, 구형 히터 건조기는 4kWh 이상 소비합니다.',
      dutyCycleExplanation: '히트펌프 기술은 폐열을 재활용하여 기존 건조기 대비 60% 이상의 에너지를 절약합니다.',
      savingAdvice: [
        '세탁기 탈수 시 분당 1200~1400회 고속 탈수를 진행하세요.',
        '건조 후 매번 보푸라기 필터를 청소하세요.',
        '새 기기 구매 시 히트펌프 방식을 선택하세요.',
      ],
      faq: [
        {
          question: '건조기 1회 사용 시 전기요금은 얼마인가요?',
          answer: '최신 히트펌프 건조기는 1회당 약 45~65센트이며, 구형 모델은 1.50유로 이상 발생할 수 있습니다.',
        },
      ],
    },
    geschirrspueler: {
      name: '식기세척기',
      category: '주방 가전',
      shortDescription: '에코 모드로 1회 작동 시 약 0.7~0.9kWh(약 25~32센트)를 소비하며 손설거지보다 훨씬 경제적입니다.',
      dutyCycleExplanation: '물을 밀폐 순환 가열하며, 에코 코스는 불림 시간을 늘려 가열 전력을 대폭 줄입니다.',
      savingAdvice: [
        '평소에는 에코 50℃ 표준 모드를 사용하세요.',
        '식기를 가득 채운 후 작동하세요.',
        '온수로 사전 헹굼을 하지 마세요.',
      ],
      faq: [
        {
          question: '식기세척기가 손설거지보다 경제적인가요?',
          answer: '네, 최신 식기세척기는 손설거지 대비 전기 에너지를 최대 50%, 물 사용량을 60% 이상 절약합니다.',
        },
      ],
    },
    gamingpc: {
      name: '게이밍 PC',
      category: '엔터테인먼트·사무',
      shortDescription: '고성능 게이밍 시 소비전력은 약 350~600W(게임 시간당 약 12~21센트)입니다.',
      dutyCycleExplanation: '고화질 3D 그래픽 렌더링 시 그래픽카드(GPU)와 CPU가 최대 전력을 소모합니다.',
      savingAdvice: [
        'FPS 상한을 설정하거나 G-Sync/FreeSync를 활성화하여 불필요한 GPU 과부하를 방지하세요.',
        '그래픽카드 언더볼팅을 적용하세요.',
        '사용하지 않을 때는 절전 멀티탭으로 대기전력을 차단하세요.',
      ],
      faq: [
        {
          question: '하루 4시간씩 게임을 하면 한 달 전기요금은 얼마인가요?',
          answer: '평균 400W로 매일 4시간 플레이할 경우 한 달 전기요금은 약 17~20유로(약 25,000~30,000원)입니다.',
        },
      ],
    },
    fernseher: {
      name: '텔레비전 (TV)',
      category: '엔터테인먼트·사무',
      shortDescription: '55인치 LED/OLED TV는 약 70~130W(시간당 약 2.5~4.5센트)의 전력을 소비합니다.',
      dutyCycleExplanation: '화면 밝기, 주변 조도 센서, HDR 설정에 따라 실시간 소비전력이 달라집니다.',
      savingAdvice: [
        '조도 자동 감지 센서를 켜두세요.',
        '선명한 모드 대신 표준 또는 영화 모드를 사용하세요.',
        '취침 시 멀티탭 전원을 끄세요.',
      ],
      faq: [
        {
          question: 'OLED TV가 LED TV보다 전기를 더 많이 쓰나요?',
          answer: '화면 전체가 밝은 영상에서는 전력을 조금 더 쓰지만, 어두운 장면에서는 픽셀이 꺼져 전력을 절약합니다.',
        },
      ],
    },
    klimaanlage: {
      name: '에어컨',
      category: '냉난방·공조',
      shortDescription: '이동식 에어컨은 약 800~1,200W(28~42 ct/h)를 소비하며, 스탠드/벽걸이 인버터는 50% 더 효율적입니다.',
      dutyCycleExplanation: '설정 온도에 도달하면 인버터 컴프레서가 저전력 절전 운전으로 전환됩니다.',
      savingAdvice: [
        '희망 온도를 24~26℃로 설정하세요.',
        '낮 동안 커튼이나 블라인드로 직사광선을 차단하세요.',
        '에너지 1등급 인버터 모델을 선택하세요.',
      ],
      faq: [
        {
          question: '여름철 에어컨 전기요금은 얼마나 나오나요?',
          answer: '한 달 중 30일간 하루 6시간 가동 시 이동식은 약 50~75€, 인버터 분리형은 약 25~40€입니다.',
        },
      ],
    },
  },
  it: {
    kuehlschrank: {
      name: 'Frigorifero',
      category: 'Cucina',
      shortDescription: 'Un frigorifero moderno consuma circa 100-160 kWh all\'anno (circa 35-56 €/anno). I modelli vecchi superano i 250-350 kWh.',
      dutyCycleExplanation: 'Anche se è collegato 24 ore su 24, il compressore funziona solo per circa 20-40 minuti all\'ora tramite termostato.',
      savingAdvice: [
        'Imposta la temperatura: 7 °C nel frigo e -18 °C nel congelatore.',
        'Sbrina regolarmente per evitare strati di ghiaccio.',
        'Controlla la tenuta delle guarnizioni delle porte.',
      ],
      faq: [
        {
          question: 'Quanto consuma un frigorifero al giorno?',
          answer: 'Un frigorifero standard moderno consuma circa 0,3-0,45 kWh al giorno (circa 10-16 centesimi).',
        },
      ],
    },
    waschmaschine: {
      name: 'Lavatrice',
      category: 'Casa e Pulizia',
      shortDescription: 'Una lavatrice moderna consuma circa 0,5-1,0 kWh per ciclo (circa 0,18-0,35 € per lavaggio).',
      dutyCycleExplanation: 'Oltre l\'80% dell\'elettricità serve a riscaldare l\'acqua; la centrifuga e la rotazione consumano pochissimo.',
      savingAdvice: [
        'Usa programmi Eco a 30 °C per risparmiare fino al 60% di energia.',
        'Lava sempre a pieno carico.',
        'Pulisci regolarmente il filtro e rimuovi il calcare.',
      ],
      faq: [
        {
          question: 'Quanto costa un lavaggio a 60 °C rispetto a 30 °C?',
          answer: 'Un lavaggio a 60 °C costa circa 0,35-0,50 €, mentre a 30 °C Eco costa solo circa 0,15-0,20 €.',
        },
      ],
    },
    trockner: {
      name: 'Asciugatrice',
      category: 'Casa e Pulizia',
      shortDescription: 'Le asciugatrici a pompa di calore consumano circa 1,2-1,8 kWh per ciclo, contro gli oltre 4 kWh dei modelli tradizionali.',
      dutyCycleExplanation: 'La pompa di calore ricicla l\'aria calda, riducendo il consumo energetico di oltre il 60%.',
      savingAdvice: [
        'Centrifuga bene i capi a 1.200–1.400 giri nella lavatrice prima dell\'asciugatura.',
        'Pulisci il filtro pelucchi dopo ogni ciclo.',
        'Scegli modelli con tecnologia a pompa di calore.',
      ],
      faq: [
        {
          question: 'Quanto costa un ciclo di asciugatrice?',
          answer: 'Un modello a pompa di calore costa circa 0,45-0,65 € per carico, mentre i vecchi modelli a condensazione costano oltre 1,50 €.',
        },
      ],
    },
    geschirrspueler: {
      name: 'Lavastoviglie',
      category: 'Cucina',
      shortDescription: 'Il ciclo Eco consuma circa 0,7-0,9 kWh (0,25-0,32 €). È molto più efficiente del lavaggio a mano.',
      dutyCycleExplanation: 'L\'acqua viene riscaldata in circuito chiuso. Il modo Eco allunga il tempo di ammollo per ridurre il riscaldamento.',
      savingAdvice: [
        'Usa il programma Eco 50 °C come impostazione predefinita.',
        'Avvia la lavastoviglie solo a pieno carico.',
        'Non sciacquare le stoviglie con acqua calda prima di caricarle.',
      ],
      faq: [
        {
          question: 'La lavastoviglie è più economica del lavaggio a mano?',
          answer: 'Sì, le lavastoviglie moderne usano fino al 50% in meno di elettricità e oltre il 60% in meno di acqua rispetto al lavaggio a mano.',
        },
      ],
    },
    gamingpc: {
      name: 'PC da Gaming',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'A pieno carico di gioco, un PC gaming consuma tra 350 e 600 W (circa 0,12-0,21 € per ora di gioco).',
      dutyCycleExplanation: 'La scheda video (GPU) e la CPU richiedono la massima potenza durante il rendering 3D impegnativo.',
      savingAdvice: [
        'Imposta un limite agli FPS o attiva G-Sync/FreeSync.',
        'Effettua l\'undervolting della scheda grafica.',
        'Usa una ciabatta con interruttore per azzerare lo standby.',
      ],
      faq: [
        {
          question: 'Quanto costano 4 ore di gioco al giorno al mese?',
          answer: 'Con un consumo medio di 400 W per 4 ore al giorno, il costo mensile dell\'elettricità è di circa 17-20 euro.',
        },
      ],
    },
    fernseher: {
      name: 'Televisore (TV)',
      category: 'Intrattenimento & Ufficio',
      shortDescription: 'Un televisore LED/OLED da 55 pollici consuma tra 70 e 130 W (circa 2,5-4,5 centesimi all\'ora).',
      dutyCycleExplanation: 'La luminosità, i sensori di luce ambientale e i profili HDR influenzano direttamente il consumo in tempo reale.',
      savingAdvice: [
        'Attiva il sensore di luce ambientale.',
        'Evita la modalità dinamica e scegli la modalità cinema o standard.',
        'Spegni la presa multipla la notte.',
      ],
      faq: [
        {
          question: 'I TV OLED consumano più dei LED?',
          answer: 'L\'OLED consuma leggermente di più sulle schermate molto chiare, ma spegne completamente i pixel nelle scene buie.',
        },
      ],
    },
    klimaanlage: {
      name: 'Condizionatore',
      category: 'Climatizzazione & Riscaldamento',
      shortDescription: 'I condizionatori portatili consumano 800-1.200 W (28-42 ct/h), mentre i sistemi split inverter sono più efficienti del 50%.',
      dutyCycleExplanation: 'Il compressore riduce automaticamente la potenza una volta raggiunta la temperatura desiderata.',
      savingAdvice: [
        'Imposta la temperatura tra 24 e 26 °C.',
        'Tieni chiuse tapparelle e finestre nelle ore più calde.',
        'Scegli climatizzatori split con classe energetica elevata.',
      ],
      faq: [
        {
          question: 'Quanto costa usare il condizionatore in estate?',
          answer: 'Per 30 giorni caldi con 6 ore al giorno, un modello portatile costa circa 50–75 €, mentre uno split efficiente costa 25–40 €.',
        },
      ],
    },
  },
};

export function getLocalizedAppliance(slug: string, lang: SupportedLanguage) {
  const langDict = applianceTranslations[lang] || applianceTranslations.en || applianceTranslations.de;
  return langDict[slug] || null;
}
