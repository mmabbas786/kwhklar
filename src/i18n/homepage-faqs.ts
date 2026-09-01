import type { SupportedLanguage } from './languages';

export interface HomepageFaqItem {
  question: string;
  answer: string;
}

export const homepageFaqs: Record<SupportedLanguage, HomepageFaqItem[]> = {
  de: [
    {
      question: 'Wie berechne ich meine Stromkosten aus Watt und Nutzungsdauer?',
      answer: 'Die exakte Berechnungsformel lautet: Stromkosten (€) = (Leistung in Watt × Nutzungsdauer in Stunden ÷ 1.000) × Strompreis (€/kWh). Beispiel: Ein Heizlüfter mit 2.000 Watt läuft 3 Stunden täglich. Verbrauch: (2.000 × 3 ÷ 1.000) = 6 kWh pro Tag. Bei einem Strompreis von 0,35 €/kWh kostet das 2,10 € pro Tag, 63 € im Monat und 766,50 € im Jahr.'
    },
    {
      question: 'Was ist der genaue Unterschied zwischen Watt (W) und Kilowattstunde (kWh)?',
      answer: 'Watt (W) bzw. Kilowatt (1 kW = 1.000 W) bezeichnet die elektrische Momentanleistung – also wie viel Energie ein Gerät in der Sekunde benötigt. Die Kilowattstunde (kWh) ist die Maßeinheit für die geleistete Arbeit bzw. den Gesamtenergieverbrauch über die Zeit. Ein Gerät mit 1.000 Watt Leistung verbraucht bei einer Betriebsstunde exakt 1 kWh Strom.'
    },
    {
      question: 'Wie hoch ist der durchschnittliche Stromverbrauch für 1, 2, 3 und 4 Personen?',
      answer: 'Laut Bundesnetzagentur und aktuellem Stromspiegel gelten folgende Richtwerte für Wohnungen (ohne elektrische Warmwasserbereitung): 1 Person: ca. 1.300–1.500 kWh/Jahr (~38–44 €/Monat); 2 Personen: ca. 2.100–2.500 kWh/Jahr (~61–73 €/Monat); 3 Personen: ca. 2.600–3.200 kWh/Jahr (~76–93 €/Monat); 4 Personen: ca. 3.000–4.000 kWh/Jahr (~88–117 €/Monat). Mit elektrischem Durchlauferhitzer steigt der Verbrauch um ca. 25–35 %.'
    },
    {
      question: 'Wie viel kostet 1 kWh Strom in Deutschland aktuell im Jahr 2026?',
      answer: 'Der durchschnittliche Strompreis für Haushaltskunden in Deutschland liegt 2026 bei ca. 35 bis 37 Cent pro kWh. Neukundentarife beim Stromanbieterwechsel starten oft schon bei 28 bis 32 ct/kWh, während die örtliche Grundversorgung häufig 40 bis 45 ct/kWh verlangt. Der Preis setzt sich aus Beschaffung/Vertrieb (~40 %), Netzentgelten (~27 %) sowie Steuern, Abgaben und Umlagen (~33 %) zusammen.'
    },
    {
      question: 'Welche Elektrogeräte sind die größten Stromfresser im Haushalt?',
      answer: 'Die größten Stromverbraucher im typischen Haushalt sind: 1. Elektrische Warmwasserbereitung (Durchlauferhitzer/Boiler: 600–1.200 kWh/Jahr); 2. Veraltete Kühl- und Gefrierschränke (250–400 kWh/Jahr); 3. Kondenstrockner ohne Wärmepumpe (300–450 kWh/Jahr); 4. Ältere Umwälzpumpen der Heizung (300–500 kWh/Jahr); 5. High-End-Gaming-PCs und Multi-Monitor-Setups bei täglicher Dauernutzung (400–600 kWh/Jahr).'
    },
    {
      question: 'Wie viel Strom und Geld kosten Standby-Verluste pro Jahr?',
      answer: 'In einem durchschnittlichen Haushalt summieren sich die heimlichen Standby-Verluste (Fernseher, Router, Receiver, Spielekonsolen, Ladegeräte, Kaffeemaschinen) auf 20 bis 45 Watt Dauerleistung. Das entspricht ca. 175 bis 390 kWh pro Jahr bzw. 60 bis 135 € unnötigen Stromkosten. Mit schaltbaren Steckdosenleisten oder smarten Zwischensteckern lässt sich dieser Betrag zu 100 % einsparen.'
    },
    {
      question: 'Was kostet ein Waschgang und ein Trocknergang im Durchschnitt?',
      answer: 'Eine moderne Waschmaschine verbraucht im Eco-40/60-Programm ca. 0,5 bis 0,8 kWh (ca. 18 bis 28 Cent pro Waschgang). Bei 60 °C Normalwäsche sind es 1,1 bis 1,4 kWh (ca. 39 bis 49 Cent). Ein moderner Wärmepumpentrockner kostet ca. 45 bis 65 Cent pro Ladung (1,3–1,8 kWh), während ein alter Abluft- oder Kondenstrockner 1,20 bis 1,60 € pro Trocknung (3,5–4,5 kWh) verbraucht.'
    },
    {
      question: 'Wie viel Strom verbraucht ein Kühlschrank pro Tag und Jahr?',
      answer: 'Ein modernes Kühlgerät der Energieeffizienzklasse A bis C verbraucht rund 0,3 bis 0,45 kWh pro Tag bzw. 100 bis 160 kWh pro Jahr (ca. 35 bis 56 €/Jahr). Ältere Kühl-Gefrierkombinationen (über 10 Jahre alt) oder große Side-by-Side-Geräte benötigen oft 0,8 bis 1,3 kWh pro Tag (300–480 kWh/Jahr, bis zu 168 €/Jahr).'
    },
    {
      question: 'Was ist der Unterschied zwischen Arbeitspreis und Grundpreis auf der Stromrechnung?',
      answer: 'Der Arbeitspreis (Verbrauchspreis) wird in Cent pro Kilowattstunde (ct/kWh) abgerechnet und hängt direkt davon ab, wie viel Strom du verbrauchst. Der Grundpreis ist eine feste monatliche oder jährliche Grundgebühr (z. B. 10 bis 15 €/Monat bzw. 120 bis 180 €/Jahr) für Zählermiete, Messstellenbetrieb und Netznutzung, die unabhängig vom Verbrauch immer anfällt.'
    },
    {
      question: 'Wie viel Geld lässt sich durch einen Stromanbieterwechsel oder ein Balkonkraftwerk sparen?',
      answer: 'Ein Wechsel aus der teuren Grundversorgung in einen günstigen Ökostrom- oder Alternativtarif spart einem 3-Personen-Haushalt oft 250 bis 450 € pro Jahr. Ein Stecker-Solargerät (Balkonkraftwerk mit 800 W Einspeiseleistung) erzeugt jährlich ca. 650 bis 850 kWh Solarstrom und senkt die Stromrechnung bei hohem Eigenverbrauch dauerhaft um 180 bis 280 € jedes Jahr.'
    }
  ],
  en: [
    {
      question: 'How do I calculate electricity costs from Watt rating and usage hours?',
      answer: 'The exact formula is: Electricity Cost (€) = (Power in Watts × Operating Hours ÷ 1,000) × Electricity Rate (€/kWh). For example, a 2,000 Watt space heater running for 3 hours daily consumes (2,000 × 3 ÷ 1,000) = 6 kWh per day. At €0.35/kWh, this costs €2.10 per day, €63.00 per month, and €766.50 per year.'
    },
    {
      question: 'What is the exact difference between Watts (W) and Kilowatt-hours (kWh)?',
      answer: 'Watt (W) or Kilowatt (1 kW = 1,000 W) measures instantaneous electrical power—the rate at which a device consumes energy. A Kilowatt-hour (kWh) measures total energy consumed over time. If a 1,000 Watt appliance runs for 1 hour, it consumes exactly 1 kWh of electricity.'
    },
    {
      question: 'What is the average electricity consumption for 1, 2, 3, and 4-person households?',
      answer: 'Based on official energy benchmarks for apartments without electric water heating: 1 person: approx. 1,300–1,500 kWh/year (€38–€44/month); 2 people: approx. 2,100–2,500 kWh/year (€61–€73/month); 3 people: approx. 2,600–3,200 kWh/year (€76–€93/month); 4 people: approx. 3,000–4,000 kWh/year (€88–€117/month). Electric water heaters add approx. 25–35% more consumption.'
    },
    {
      question: 'How much does 1 kWh of electricity cost in 2026?',
      answer: 'In 2026, average European household electricity rates range between €0.28 and €0.37 per kWh (with Germany averaging around €0.35/kWh). Competitive new-customer contracts start around €0.28–€0.32/kWh, while default local utility tariffs cost up to €0.40–€0.45/kWh. The price comprises wholesale energy (~40%), grid fees (~27%), and government taxes/levies (~33%).'
    },
    {
      question: 'Which home appliances consume the most electricity?',
      answer: 'The largest energy consumers in a home are: 1. Electric water heaters / boilers (600–1,200 kWh/year); 2. Outdated refrigerators and freezers (250–400 kWh/year); 3. Older tumble dryers without heat pump technology (300–450 kWh/year); 4. Continuous heating circulation pumps (300–500 kWh/year); 5. High-end gaming PCs with extended daily gaming hours (400–600 kWh/year).'
    },
    {
      question: 'How much electricity and money is wasted by standby power annually?',
      answer: 'An average household maintains a continuous vampire draw (standby power) of 20 to 45 Watts from TVs, internet routers, audio gear, game consoles, and chargers. This totals 175 to 390 kWh annually, adding €60 to €135 to your yearly electric bill. Using switchable power strips completely eliminates this cost.'
    },
    {
      question: 'How much does a single load of washing machine or dryer cost?',
      answer: 'A modern washing machine running an Eco 40/60 cycle consumes 0.5 to 0.8 kWh (approx. €0.18 to €0.28 per load). Hot 60°C wash cycles consume 1.1 to 1.4 kWh (€0.39 to €0.49). A modern heat pump tumble dryer costs around €0.45 to €0.65 per cycle (1.3–1.8 kWh), whereas an old condenser dryer costs €1.20 to €1.60 per load (3.5–4.5 kWh).'
    },
    {
      question: 'How much electricity does a refrigerator use per day and year?',
      answer: 'A modern Class A–C refrigerator uses 0.3 to 0.45 kWh per day (100–160 kWh/year, costing €35–€56/year). Older fridge-freezer combinations (10+ years old) or oversized American side-by-side models often consume 0.8 to 1.3 kWh daily (300–480 kWh/year, costing up to €168/year).'
    },
    {
      question: 'What is the difference between unit rate and standing charge on an electricity bill?',
      answer: 'The unit rate (working price) is billed per kilowatt-hour consumed (e.g., 35 ct/kWh) and scales directly with usage. The standing charge (base fee) is a fixed monthly or annual fee (e.g., €10–€15/month) covering meter operation, grid maintenance, and billing administration, paid regardless of how much electricity you consume.'
    },
    {
      question: 'How much can you save with a balcony solar plant (plug-in solar)?',
      answer: 'An 800-Watt plug-in balcony solar system generates roughly 650 to 850 kWh of clean solar electricity annually. By covering baseload consumption (fridge, router, standby loads), it saves €180 to €280 every year, paying for itself in under 3 to 4 years.'
    }
  ],
  es: [
    {
      question: '¿Cómo calcular el coste de la electricidad a partir de los vatios y las horas de uso?',
      answer: 'La fórmula exacta es: Coste eléctrico (€) = (Potencia en vatios × Horas de uso ÷ 1.000) × Precio del kWh (€). Por ejemplo, un calefactor de 2.000 W encendido 3 horas al día consume (2.000 × 3 ÷ 1.000) = 6 kWh diarios. Con una tarifa de 0,35 €/kWh, cuesta 2,10 € al día, 63,00 € al mes y 766,50 € al año.'
    },
    {
      question: '¿Cuál es la diferencia entre vatios (W) y kilovatios-hora (kWh)?',
      answer: 'El vatio (W) o kilovatio (1 kW = 1.000 W) mide la potencia instantánea, es decir, la rapidez con la que un aparato consume energía en un momento dado. El kilovatio-hora (kWh) mide la cantidad total de energía consumida a lo largo del tiempo. Un aparato de 1.000 W encendido durante 1 hora consume exactamente 1 kWh de luz.'
    },
    {
      question: '¿Cuál es el consumo eléctrico medio de un hogar según el número de personas?',
      answer: 'Para viviendas estándar sin termo eléctrico de agua: 1 persona: 1.300–1.500 kWh/año (~38–44 €/mes); 2 personas: 2.100–2.500 kWh/año (~61–73 €/mes); 3 personas: 2.600–3.200 kWh/año (~76–93 €/mes); 4 personas: 3.000–4.000 kWh/año (~88–117 €/mes). Con termo eléctrico, el consumo aumenta entre un 25 % y un 35 % adicional.'
    },
    {
      question: '¿Cuánto cuesta 1 kWh de electricidad en 2026?',
      answer: 'En 2026, el precio medio de la electricidad para hogares ronda entre 0,28 y 0,37 € por kWh (con una referencia media de 0,35 €/kWh en Europa central). Las tarifas competitivas del mercado libre suelen rondar los 0,28–0,32 €/kWh, mientras que las tarifas reguladas o básicas sin descuento pueden superar los 0,40 €/kWh.'
    },
    {
      question: '¿Cuáles son los electrodomésticos que más luz gastan en una casa?',
      answer: 'Los mayores consumidores de energía son: 1. Termo eléctrico para agua caliente (600–1.200 kWh/año); 2. Frigoríficos y congeladores antiguos (250–400 kWh/año); 3. Secadoras de condensación sin bomba de calor (300–450 kWh/año); 4. Bombas de circulación de calefacción antiguas (300–500 kWh/año); 5. Ordenadores gaming de alta potencia (400–600 kWh/año).'
    },
    {
      question: '¿Cuánto dinero se pierde al año por el consumo fantasma (standby)?',
      answer: 'Un hogar medio mantiene un consumo continuo en espera de 20 a 45 vatios (televisores, routers, consolas, cargadores y aparatos con reloj). Esto supone entre 175 y 390 kWh al año, lo que equivale a pagar entre 60 y 135 € anuales de forma innecesaria. El uso de regletas con interruptor elimina este gasto por completo.'
    },
    {
      question: '¿Cuánto cuesta poner una lavadora y una secadora por ciclo?',
      answer: 'Una lavadora moderna en programa Eco 40/60 gasta 0,5 a 0,8 kWh (unos 0,18 a 0,28 € por lavado). A 60 °C el coste sube a 0,39–0,49 € (1,1–1,4 kWh). Una secadora moderna con bomba de calor cuesta unos 0,45–0,65 € por colada (1,3–1,8 kWh), frente a 1,20–1,60 € de una secadora antigua de condensación (3,5–4,5 kWh).'
    },
    {
      question: '¿Cuánta electricidad gasta una nevera al día y al año?',
      answer: 'Un frigorífico moderno clase A–C consume entre 0,3 y 0,45 kWh al día (100–160 kWh al año, unos 35–56 €/año). Un modelo antiguo de más de 10 años o un frigorífico americano puede superar los 0,8 a 1,3 kWh diarios (300–480 kWh/año, costando hasta 168 € al año).'
    },
    {
      question: '¿Cuál es la diferencia entre el término de energía y el término de potencia?',
      answer: 'El término de energía (precio por kWh) se factura en función de la cantidad exacta de electricidad consumida. El término de potencia (cuota fija) es un coste fijo mensual por la capacidad de potencia contratada en kW y el mantenimiento de red, que se paga siempre aunque el consumo sea cero.'
    },
    {
      question: '¿Cuánto se puede ahorrar con un kit solar para balcón (autoconsumo)?',
      answer: 'Un kit solar enchufable de 800 W genera entre 650 y 850 kWh de electricidad solar al año. Al cubrir los consumos base de la vivienda (nevera, router, reposo), ahorra entre 180 y 280 € al año en la factura de la luz, amortizándose en 3 o 4 años.'
    }
  ],
  ja: [
    {
      question: '消費電力（W）と使用時間から電気代を正確に計算する方法は？',
      answer: '計算式は次の通りです: 電気代 (€) = (消費電力W × 1日の使用時間h ÷ 1,000) × 電気料金単価 (€/kWh)。例えば、2,000Wのセラミックヒーターを毎日3時間使用した場合、(2,000 × 3 ÷ 1,000) = 1日あたり6 kWh。単価0.35 €/kWhで計算すると、1日あたり2.10 €、月額63.00 €、年間766.50 €となります。'
    },
    {
      question: 'ワット（W）とキロワット時（kWh）の決定的な違いとは？',
      answer: 'ワット（W）またはキロワット（1 kW = 1,000 W）は「瞬時の消費電力（仕事率）」を表します。一方、キロワット時（kWh）は「一定時間に使用した電気の総量（電力量）」を表します。1,000Wの電化製品を1時間動かすと、ちょうど1 kWhの電力を消費します。'
    },
    {
      question: '世帯人数別（1人〜4人暮らし）の年間平均電気消費量はどれくらい？',
      answer: '給湯器を除く集合住宅の標準的な目安: 1人世帯: 約1,300〜1,500 kWh/年（月額約38〜44 €）; 2人世帯: 約2,100〜2,500 kWh/年（月額約61〜73 €）; 3人世帯: 約2,600〜3,200 kWh/年（月額約76〜93 €）; 4人世帯: 約3,000〜4,000 kWh/年（月額約88〜117 €）。電気温水器を使用する場合は約25〜35%増加します。'
    },
    {
      question: '2026年現在の電気料金単価（1 kWhあたり）の目安は？',
      answer: '2026年の欧州・ドイツの標準的な家庭向け電気料金単価は1 kWhあたり約35〜37セント（0.35〜0.37 €/kWh）です。新規契約や電力会社の乗り換えプランでは28〜32 ct/kWh程度から見つかります。'
    },
    {
      question: '家庭内で最も電力を消費する家電（電気食い虫）ランキングは？',
      answer: '家庭内の主な電力消費源: 1. 電気温水器・ボイラー（年間600〜1,200 kWh）; 2. 10年以上前の旧型冷蔵庫・冷凍庫（年間250〜400 kWh）; 3. ヒートポンプ非搭載の乾燥機（年間300〜450 kWh）; 4. 旧型暖房循環ポンプ（年間300〜500 kWh）; 5. 長時間稼働のゲーミングPC（年間400〜600 kWh）。'
    },
    {
      question: '家電の待機電力によって年間いくら電気代が無駄になっている？',
      answer: '一般的な家庭ではテレビ、Wi-Fiルーター、ゲーム機、給湯リモコン等の待機電力として常時20〜45Wが消費されています。これは年間約175〜390 kWh、金額にして年間60〜135 €（約1万〜2万円以上）の無駄な支出に相当します。スイッチ付き電源タップで遮断可能です。'
    },
    {
      question: '洗濯機と乾燥機は1回あたりいくらの電気代がかかる？',
      answer: '最新の洗濯機（エココース）は1回あたり0.5〜0.8 kWh（約0.18〜0.28 €）。60℃の温水洗いは約1.1〜1.4 kWh（約0.39〜0.49 €）です。ヒートポンプ式乾燥機は1回約0.45〜0.65 €（1.3〜1.8 kWh）ですが、旧型のヒーター式乾燥機は1回約1.20〜1.60 €（3.5〜4.5 kWh）かかります。'
    },
    {
      question: '冷蔵庫は1日・1年間でどれくらいの電気を消費する？',
      answer: '最新の省エネ冷蔵庫（クラスA〜C）は1日約0.3〜0.45 kWh、年間約100〜160 kWh（年間約35〜56 €）です。10年以上前の旧型製品や大型サイドバイサイド型は1日0.8〜1.3 kWh（年間300〜480 kWh、最大168 €）を消費します。'
    },
    {
      question: '電気料金の「従量料金（電力量料金）」と「基本料金」の違いは？',
      answer: '従量料金は使用した電力量（kWh）に応じて課金される変動費です。基本料金は電力の使用量に関わらず、メーター設備や送電網の維持費として毎月定額（月額10〜15 €程度）で請求される固定費です。'
    },
    {
      question: 'ベランダ太陽光発電（プラグインソーラー）で年間どれくらい節約できる？',
      answer: '800W出力のベランダ太陽光発電システムは年間約650〜850 kWhの電力を発電します。冷蔵庫や待機電力などの自家消費に充てることで、年間180〜280 €の電気代を確実に削減でき、約3〜4年で元が取れます。'
    }
  ],
  fr: [
    {
      question: 'Comment calculer le coût de l\'électricité à partir des watts et des heures ?',
      answer: 'La formule exacte est : Coût (€) = (Puissance en Watts × Durée en heures ÷ 1 000) × Prix du kWh (€). Par exemple, un radiateur soufflant de 2 000 W fonctionnant 3 heures par jour consomme (2 000 × 3 ÷ 1 000) = 6 kWh par jour. À 0,35 €/kWh, cela coûte 2,10 € par jour, 63,00 € par mois et 766,50 € par an.'
    },
    {
      question: 'Quelle est la différence entre Watt (W) et Kilowatt-heure (kWh) ?',
      answer: 'Le Watt (W) ou Kilowatt (1 kW = 1 000 W) mesure la puissance instantanée, c\'est-à-dire le débit d\'énergie requis par un appareil à un instant précis. Le Kilowatt-heure (kWh) mesure la quantité totale d\'énergie consommée sur une durée donnée. Un appareil de 1 000 W allumé pendant 1 heure consomme exactement 1 kWh d\'électricité.'
    },
    {
      question: 'Quelle est la consommation moyenne d\'électricité pour 1, 2, 3 et 4 personnes ?',
      answer: 'Pour des logements standards sans chauffe-eau électrique : 1 personne : 1 300–1 500 kWh/an (~38–44 €/mois) ; 2 personnes : 2 100–2 500 kWh/an (~61–73 €/mois) ; 3 personnes : 2 600–3 200 kWh/an (~76–93 €/mois) ; 4 personnes : 3 000–4 000 kWh/an (~88–117 €/mois). Un ballon d\'eau chaude électrique ajoute environ 25 à 35 % de consommation supplémentaire.'
    },
    {
      question: 'Quel est le prix moyen de 1 kWh d\'électricité en 2026 ?',
      answer: 'En 2026, le tarif moyen de l\'électricité pour les ménages européens se situe entre 0,28 et 0,37 € par kWh (avec une moyenne de référence de 0,35 €/kWh). Les offres de marché les plus compétitives démarrent autour de 0,28 à 0,32 €/kWh.'
    },
    {
      question: 'Quels sont les appareils qui consomment le plus d\'électricité à la maison ?',
      answer: 'Les principaux postes de consommation électrique sont : 1. Le chauffe-eau électrique (600–1 200 kWh/an) ; 2. Les anciens réfrigérateurs et congélateurs (250–400 kWh/an) ; 3. Les sèche-linge à condensation sans pompe à chaleur (300–450 kWh/an) ; 4. Les pompes de circulation de chauffage vétustes (300–500 kWh/an) ; 5. Les PC de jeu puissants en utilisation intensive (400–600 kWh/an).'
    },
    {
      question: 'Combien coûte la consommation de veille (standby) chaque année ?',
      answer: 'Un foyer moyen cumule entre 20 et 45 Watts de veille permanente (téléviseurs, box internet, consoles, chargeurs branchés). Cela représente 175 à 390 kWh par an, soit 60 à 135 € de dépenses inutiles. L\'utilisation de multiprises coupe-veille permet d\'éliminer totalement ces pertes.'
    },
    {
      question: 'Combien coûte un cycle de lave-linge et de sèche-linge ?',
      answer: 'Un lave-linge récent en programme Éco 40/60 consomme entre 0,5 et 0,8 kWh (environ 0,18 à 0,28 € par lavage). À 60 °C classique, le coût monte à 0,39–0,49 € (1,1–1,4 kWh). Un sèche-linge pompe à chaleur moderne coûte environ 0,45 à 0,65 € par cycle (1,3–1,8 kWh), contre 1,20 à 1,60 € pour un ancien modèle à condensation (3,5–4,5 kWh).'
    },
    {
      question: 'Quelle est la consommation d\'un réfrigérateur par jour et par an ?',
      answer: 'Un réfrigérateur moderne (classe A à C) consomme environ 0,3 à 0,45 kWh par jour, soit 100 à 160 kWh par an (35 à 56 €/an). Un combiné frigo-congélateur de plus de 10 ans consomme souvent 0,8 à 1,3 kWh par jour (300 à 480 kWh/an, jusqu\'à 168 €/an).'
    },
    {
      question: 'Quelle est la différence entre le prix du kWh et l\'abonnement sur la facture ?',
      answer: 'Le prix du kWh (part variable) correspond à l\'électricité réellement consommée. L\'abonnement (part fixe) est un montant mensuel fixe couvrant l\'accès au réseau et l\'entretien du compteur, dû même en cas de consommation nulle.'
    },
    {
      question: 'Combien peut-on économiser avec un kit solaire de balcon (autoconsommation) ?',
      answer: 'Un kit solaire prêt à brancher de 800 W produit environ 650 à 850 kWh d\'électricité solaire gratuite par an. En absorbant le talon de consommation du logement, il permet d\'économiser entre 180 et 280 € chaque année sur la facture d\'électricité.'
    }
  ],
  pt: [
    {
      question: 'Como calcular os custos de eletricidade a partir da potência (Watts) e horas?',
      answer: 'A fórmula exata é: Custo de eletricidade (€) = (Potência em Watts × Horas de uso ÷ 1.000) × Preço do kWh (€). Por exemplo, um aquecedor de 2.000 W ligado 3 horas por dia consome (2.000 × 3 ÷ 1.000) = 6 kWh por dia. A 0,35 €/kWh, custa 2,10 € por dia, 63,00 € por mês e 766,50 € por ano.'
    },
    {
      question: 'Qual a diferença exata entre Watt (W) e Quilowatt-hora (kWh)?',
      answer: 'O Watt (W) ou Quilowatt (1 kW = 1.000 W) mede a potência instantânea do aparelho. O Quilowatt-hora (kWh) mede a quantidade total de energia consumida ao longo do tempo. Um aparelho de 1.000 W ligado durante 1 hora consome exatamente 1 kWh de eletricidade.'
    },
    {
      question: 'Qual é o consumo médio de eletricidade para 1, 2, 3 e 4 pessoas?',
      answer: 'Valores médios de referência para habitações sem termoacumulador elétrico: 1 pessoa: 1.300–1.500 kWh/ano (~38–44 €/mês); 2 pessoas: 2.100–2.500 kWh/ano (~61–73 €/mês); 3 pessoas: 2.600–3.200 kWh/ano (~76–93 €/mês); 4 pessoas: 3.000–4.000 kWh/ano (~88–117 €/mês).'
    },
    {
      question: 'Quanto custa 1 kWh de eletricidade em 2026?',
      answer: 'Em 2026, a tarifa média de eletricidade doméstica situa-se entre 0,28 e 0,37 € por kWh (referência de 0,35 €/kWh). Tarifas competitivas no mercado livre começam nos 0,28–0,32 €/kWh.'
    },
    {
      question: 'Quais são os aparelhos que mais consomem energia em casa?',
      answer: 'Os maiores consumidores de eletricidade são: 1. Termoacumuladores elétricos (600–1.200 kWh/ano); 2. Frigoríficos e arcas congeladoras antigas (250–400 kWh/ano); 3. Secadores de roupa sem bomba de calor (300–450 kWh/ano); 4. Aquecedores elétricos e termoventiladores; 5. Computadores gaming de alto desempenho (400–600 kWh/ano).'
    },
    {
      question: 'Quanto custa o consumo fantasma (standby) por ano?',
      answer: 'Um lar médio mantém um consumo permanente em standby de 20 a 45 Watts (televisores, routers, consolas, carregadores), somando 175 a 390 kWh por ano (60 a 135 € anuais desperdiçados). Réguas com interruptor eliminam este custo.'
    },
    {
      question: 'Quanto custa um ciclo de máquina de lavar e secar roupa?',
      answer: 'Uma máquina de lavar moderna em modo Eco 40/60 gasta 0,5 a 0,8 kWh (cerca de 0,18 a 0,28 € por lavagem). Uma secadora com bomba de calor custa cerca de 0,45 a 0,65 € por ciclo (1,3–1,8 kWh), contra 1,20 a 1,60 € de um modelo antigo de condensação.'
    },
    {
      question: 'Quanto gasta um frigorífico por dia e por ano?',
      answer: 'Um frigorífico moderno consome cerca de 0,3 a 0,45 kWh por dia (100 a 160 kWh/ano, custando 35 a 56 €/ano). Um equipamento com mais de 10 anos pode consumir 0,8 a 1,3 kWh por dia (300 a 480 kWh/ano, até 168 €/ano).'
    },
    {
      question: 'Qual a diferença entre o termo de energia e o termo de potência na fatura?',
      answer: 'O termo de energia é o valor pago por cada kWh consumido. O termo de potência é um valor fixo diário ou mensal pela potência contratada em kVA, pago independentemente do consumo.'
    },
    {
      question: 'Quanto se poupa com um kit solar de varanda (autoconsumo)?',
      answer: 'Um kit solar plug-in de 800 W produz entre 650 e 850 kWh por ano de eletricidade limpa. Ao cobrir consumos base como frigorífico e router, poupa entre 180 e 280 € anualmente na fatura de luz.'
    }
  ],
  ko: [
    {
      question: '소비전력(W)과 사용 시간으로 전기요금을 정확히 계산하는 공식은?',
      answer: '계산 공식은 다음과 같습니다: 전기요금 (€) = (소비전력W × 하루 사용시간h ÷ 1,000) × 전력량 단가 (€/kWh). 예를 들어 2,000W 전기온풍기를 하루 3시간씩 가동하면 (2,000 × 3 ÷ 1,000) = 하루 6 kWh를 소비합니다. 단가 0.35 €/kWh 적용 시 하루 2.10 €, 월 63.00 €, 연간 766.50 €가 발생합니다.'
    },
    {
      question: '와트(W)와 킬로와트시(kWh)의 차이점은 무엇인가요?',
      answer: '와트(W) 또는 킬로와트(1 kW = 1,000 W)는 기기가 작동하는 순간의 전력 크기를 나타내며, 킬로와트시(kWh)는 일정 시간 동안 소비한 총 전력량을 의미합니다. 1,000W 기기를 1시간 동안 작동시키면 정확히 1 kWh의 전기를 소비합니다.'
    },
    {
      question: '가구원 수별(1인~4인 가구) 연간 평균 전기 소비량은?',
      answer: '전기온수기를 제외한 일반 아파트 기준 평균 소비량: 1인 가구: 약 1,300~1,500 kWh/년(월 약 38~44 €); 2인 가구: 약 2,100~2,500 kWh/년(월 약 61~73 €); 3인 가구: 약 2,600~3,200 kWh/년(월 약 76~93 €); 4인 가구: 약 3,000~4,000 kWh/년(월 약 88~117 €).'
    },
    {
      question: '2026년 기준 1 kWh당 전기요금 단가는 얼마인가요?',
      answer: '2026년 기준 유럽 및 독일의 가정용 평균 전력 단가는 1 kWh당 약 35~37센트(0.35~0.37 €/kWh)입니다. 통신사 및 전력 공급사 변경 시 28~32 ct/kWh 요금제로 절약할 수 있습니다.'
    },
    {
      question: '가정에서 전기를 가장 많이 소비하는 가전제품 순위는?',
      answer: '가정 내 주요 전력 다소비 가전: 1. 전기온수기 및 보일러 (연간 600~1,200 kWh); 2. 10년 이상 된 노후 냉장고 및 냉동고 (연간 250~400 kWh); 3. 히터식 구형 의류건조기 (연간 300~450 kWh); 4. 전기히터 및 온풍기; 5. 고사양 게이밍 PC (연간 400~600 kWh).'
    },
    {
      question: '가정 내 대기전력으로 낭비되는 연간 전기요금은?',
      answer: '일반 가정에서 TV, 셋톱박스, 공유기, 충전기 등에서 발생하는 대기전력은 상시 20~45W에 달합니다. 이는 연간 약 175~390 kWh, 금액으로 연간 60~135 €(약 8만~18만 원)의 불필요한 지출로 이어집니다. 절전형 멀티탭으로 완벽히 차단할 수 있습니다.'
    },
    {
      question: '세탁기와 건조기 1회 작동 시 전기요금은 얼마인가요?',
      answer: '최신 세탁기 에코 코스는 1회 약 0.5~0.8 kWh(약 0.18~0.28 €), 60°C 고온 세탁 시 약 1.1~1.4 kWh(약 0.39~0.49 €)가 발생합니다. 히트펌프 건조기는 1회 약 0.45~0.65 €(1.3~1.8 kWh)인 반면 구형 건조기는 1회 1.20~1.60 €가 소모됩니다.'
    },
    {
      question: '냉장고의 하루 및 연간 전기 소비량은?',
      answer: '최신 1~2등급 냉장고는 하루 약 0.3~0.45 kWh, 연간 약 100~160 kWh(연간 약 35~56 €)를 소비합니다. 10년 이상 된 구형 모델은 하루 0.8~1.3 kWh(연간 300~480 kWh, 최대 168 €)를 사용합니다.'
    },
    {
      question: '전기요금 고지서의 전력량요금과 기본요금의 차이는?',
      answer: '전력량요금은 실제 사용한 전력량(kWh)에 따라 비례하여 부과되는 변동요금이며, 기본요금은 전력 사용 유무와 관계없이 계량기 관리 및 계통 유지비로 매월 고정 부과되는 금액입니다.'
    },
    {
      question: '베란다 미니 태양광 발전기로 연간 얼마나 절약할 수 있나요?',
      answer: '800W급 플러그인 베란다 태양광 발전기는 연간 약 650~850 kWh의 청정 전력을 생산합니다. 낮 시간대 상시 가전 소비를 대체하여 매년 180~280 €의 전기요금을 절감하며 약 3~4년 내 설치비가 회수됩니다.'
    }
  ],
  it: [
    {
      question: 'Come si calcola il costo dell\'energia elettrica da Watt e ore di utilizzo?',
      answer: 'La formula esatta è: Costo elettrico (€) = (Potenza in Watt × Ore di utilizzo ÷ 1.000) × Prezzo del kWh (€). Ad esempio, una stufetta elettrica da 2.000 W accesa 3 ore al giorno consuma (2.000 × 3 ÷ 1.000) = 6 kWh al giorno. A 0,35 €/kWh, costa 2,10 € al giorno, 63,00 € al mese e 766,50 € all\'anno.'
    },
    {
      question: 'Qual è la differenza esatta tra Watt (W) e Chilowattora (kWh)?',
      answer: 'Il Watt (W) o Chilowatt (1 kW = 1.000 W) misura la potenza istantanea assorbita da un apparecchio. Il Chilowattora (kWh) misura l\'energia totale consumata nel tempo. Un apparecchio da 1.000 W acceso per 1 ora consuma esattamente 1 kWh di elettricità.'
    },
    {
      question: 'Qual è il consumo medio di energia elettrica per 1, 2, 3 e 4 persone?',
      answer: 'Per abitazioni senza scaldabagno elettrico: 1 persona: 1.300–1.500 kWh/anno (~38–44 €/mese); 2 persone: 2.100–2.500 kWh/anno (~61–73 €/mese); 3 persone: 2.600–3.200 kWh/anno (~76–93 €/mese); 4 persone: 3.000–4.000 kWh/anno (~88–117 €/mese). Lo scaldabagno elettrico incrementa i consumi del 25–35%.'
    },
    {
      question: 'Quanto costa 1 kWh di energia elettrica nel 2026?',
      answer: 'Nel 2026, la tariffa media per le famiglie europee varia tra 0,28 e 0,37 € per kWh (con una media di riferimento di 0,35 €/kWh). Le migliori offerte sul mercato libero si attestano tra 0,28 e 0,32 €/kWh.'
    },
    {
      question: 'Quali sono gli elettrodomestici che consumano più energia in casa?',
      answer: 'I maggiori consumatori sono: 1. Scaldabagno elettrico / Boiler (600–1.200 kWh/anno); 2. Frigoriferi e congelatori datati (250–400 kWh/anno); 3. Asciugatrici a condensazione senza pompa di calore (300–450 kWh/anno); 4. Pompe di circolazione del riscaldamento obsolete (300–500 kWh/anno); 5. PC da gaming ad alte prestazioni (400–600 kWh/anno).'
    },
    {
      question: 'Quanto costa lo standby (consumo fantasma) ogni anno?',
      answer: 'Una famiglia media mantiene un consumo continuo in standby tra 20 e 45 Watt (TV, modem router, decoder, console, caricabatterie), pari a 175–390 kWh all\'anno (60–135 € sprecati in bolletta). L\'uso di ciabatte con interruttore elimina completamente questo spreco.'
    },
    {
      question: 'Quanto costa un ciclo di lavatrice e asciugatrice?',
      answer: 'Una lavatrice moderna in ciclo Eco 40/60 consuma 0,5–0,8 kWh (circa 0,18–0,28 € a lavaggio). A 60 °C il costo sale a 0,39–0,49 € (1,1–1,4 kWh). Un\'asciugatrice a pompa di calore costa circa 0,45–0,65 € a ciclo (1,3–1,8 kWh), contro 1,20–1,60 € di un modello vecchio a condensazione.'
    },
    {
      question: 'Quanto consuma un frigorifero al giorno e all\'anno?',
      answer: 'Un frigorifero moderno (classe A–C) consuma circa 0,3–0,45 kWh al giorno (100–160 kWh/anno, pari a 35–56 €/anno). Un modello vecchio di oltre 10 anni può consumare 0,8–1,3 kWh al giorno (300–480 kWh/anno, fino a 168 €/anno).'
    },
    {
      question: 'Qual è la differenza tra quota energia e quota fissa nella bolletta della luce?',
      answer: 'La quota energia (€/kWh) si paga in base all\'energia effettivamente consumata. La quota fissa (commercializzazione e potenza) è un costo fisso mensile indipendente dai consumi per la gestione della rete e del contatore.'
    },
    {
      question: 'Quanto si risparmia con un impianto fotovoltaico da balcone (plug and play)?',
      answer: 'Un kit fotovoltaico da balcone da 800 W produce circa 650–850 kWh di energia pulita all\'anno. Coprendo i consumi di base dell\'abitazione (frigorifero, router, standby), fa risparmiare tra 180 e 280 € all\'anno, ripagandosi in soli 3–4 anni.'
    }
  ]
};

export function getHomepageFaqs(lang: SupportedLanguage = 'de'): HomepageFaqItem[] {
  return homepageFaqs[lang] || homepageFaqs.de;
}
