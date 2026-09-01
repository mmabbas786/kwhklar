import type { SupportedLanguage } from './languages';

export interface LocalizedTopic {
  title: string;
  category: string;
  shortDescription: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const topicTranslations: Record<SupportedLanguage, Record<string, LocalizedTopic>> = {
  de: {
    'stromverbrauch-1-person': {
      title: 'Stromverbrauch 1-Personen-Haushalt',
      category: 'Haushalt',
      shortDescription: 'Ein 1-Personen-Haushalt in Deutschland verbraucht durchschnittlich 1.300 bis 1.500 kWh Strom pro Jahr (ca. 455 bis 525 €).',
      savingAdvice: ['Standby-Verbrauch durch schaltbare Steckerleisten senken.', 'Eco-Programme bei Waschmaschine und Geschirrspüler nutzen.'],
      faq: [{ question: 'Was ist ein normaler Stromverbrauch für 1 Person?', answer: 'In einer Wohnung ohne elektrische Warmwasserbereitung sind 1.000 bis 1.400 kWh/Jahr ein guter Richtwert.' }]
    },
    'stromverbrauch-2-personen': {
      title: 'Stromverbrauch 2-Personen-Haushalt',
      category: 'Haushalt',
      shortDescription: 'Ein 2-Personen-Haushalt verbraucht im Schnitt 2.100 bis 2.500 kWh pro Jahr (ca. 735 bis 875 €).',
      savingAdvice: ['Gemeinsam kochen und Backofen energieeffizient nutzen.', 'Kühlschrank optimal auf 7 °C einstellen.'],
      faq: [{ question: 'Wie viel Strom verbrauchen 2 Personen im Monat?', answer: 'Der Monatsverbrauch liegt bei ca. 175 bis 210 kWh (rund 60 bis 75 Euro).' }]
    },
    'stromverbrauch-3-personen': {
      title: 'Stromverbrauch 3-Personen-Haushalt',
      category: 'Haushalt',
      shortDescription: 'Ein 3-Personen-Haushalt verbraucht im Schnitt 2.600 bis 3.200 kWh Strom pro Jahr (ca. 910 bis 1.120 €).',
      savingAdvice: ['Wäschetrockner mit Wärmepumpentechnik bevorzugen.', 'LED-Leuchtmittel im gesamten Wohnraum einsetzen.'],
      faq: [{ question: 'Was kostet der Strom für 3 Personen im Monat?', answer: 'Die monatlichen Stromkosten liegen bei durchschnittlich ca. 75 bis 95 Euro.' }]
    },
    'stromverbrauch-4-personen': {
      title: 'Stromverbrauch 4-Personen-Haushalt',
      category: 'Haushalt',
      shortDescription: 'Eine 4-köpfige Familie verbraucht in einer Wohnung ca. 3.000 bis 3.500 kWh/Jahr, im Einfamilienhaus ca. 4.000 bis 5.000 kWh/Jahr.',
      savingAdvice: ['Großgeräte voll beladen betreiben.', 'Standby-Stromfresser im Jugend- und Wohnzimmer identifizieren.'],
      faq: [{ question: 'Wie viel kWh verbraucht eine 4-köpfige Familie?', answer: 'Ohne Warmwasser ca. 3.000 bis 3.800 kWh, mit elektrischem Durchlauferhitzer bis zu 5.200 kWh/Jahr.' }]
    },
    'stromverbrauch-5-personen': {
      title: 'Stromverbrauch 5-Personen-Haushalt',
      category: 'Haushalt',
      shortDescription: 'Ein 5-Personen-Haushalt verbraucht im Schnitt 4.000 bis 5.500 kWh Strom pro Jahr (ca. 1.400 bis 1.925 €).',
      savingAdvice: ['Warmwasserverbrauch optimieren (Sparduschköpfe nutzen).', 'Stromtarif regelmäßig vergleichen.'],
      faq: [{ question: 'Was kostet der Strom für 5 Personen im Jahr?', answer: 'Bei 35 ct/kWh liegen die jährlichen Gesamtkosten zwischen 1.400 und 1.950 Euro.' }]
    },
    'standby-strom': {
      title: 'Standby-Stromverbrauch berechnen & senken',
      category: 'Ratgeber',
      shortDescription: 'Versteckte Standby-Verluste machen in deutschen Haushalten bis zu 10–15 % der gesamten Stromrechnung aus (ca. 100–150 €/Jahr).',
      savingAdvice: ['Master-Slave-Steckdosenleisten für TV- und PC-Setups nutzen.', 'Ladekabel nach dem Laden aus der Steckdose ziehen.'],
      faq: [{ question: 'Welche Geräte verbrauchen im Standby am meisten?', answer: 'Alte Fernseher, AV-Receiver, Spielekonsolen, WLAN-Router und Kaffeevollautomaten mit Warmhaltefunktion.' }]
    },
    'stromfresser': {
      title: 'Die größten Stromfresser im Haushalt entlarven',
      category: 'Ratgeber',
      shortDescription: 'Finde heraus, welche Geräte in deiner Wohnung unbemerkt die Stromkosten in die Höhe treiben und wie du sie bändigst.',
      savingAdvice: ['Alte Kühlgeräte mit Strommessgerät überprüfen.', 'Heizlüfter und Durchlauferhitzer sparsam einsetzen.'],
      faq: [{ question: 'Was ist der größte Stromfresser im Haus?', answer: 'Alte Kühl- und Gefriergeräte, elektrische Durchlauferhitzer sowie Wäschetrockner ohne Wärmepumpe.' }]
    },
    'dynamische-stromtarife': {
      title: 'Dynamische Stromtarife (Börsenstrompreise)',
      category: 'Tarife',
      shortDescription: 'Mit stündlich variablen Stromtarifen nutzt du günstige Börsenstrompreise bei viel Wind- und Sonnenenergie gezielt aus.',
      savingAdvice: ['E-Auto und Waschmaschine in günstige Nacht- oder Mittagsstunden programmieren.', 'Smart Meter installieren.'],
      faq: [{ question: 'Für wen lohnt sich ein dynamischer Stromtarif?', answer: 'Besonders für Besitzer von E-Autos, Wärmepumpen oder steuerbaren Großverbrauchern mit Smart Meter.' }]
    },
    'stromanbieter-wechseln': {
      title: 'Stromanbieter wechseln & bis zu 500 € sparen',
      category: 'Tarife',
      shortDescription: 'Durch den Wechsel aus der teuren Grundversorgung in einen günstigen Sondertarif sparen Haushalte mehrere hundert Euro jährlich.',
      savingAdvice: ['Auf kurze Vertragslaufzeiten (max. 12 Monate) achten.', 'Kündigungsfrist im Kalender notieren.'],
      faq: [{ question: 'Besteht beim Stromanbieterwechsel die Gefahr eines Stromausfalls?', answer: 'Nein, die unterbrechungsfreie Stromversorgung ist in Deutschland gesetzlich garantiert.' }]
    }
  },
  en: {
    'stromverbrauch-1-person': {
      title: 'Electricity Consumption: 1-Person Household',
      category: 'Household Benchmarks',
      shortDescription: 'A single-person household consumes on average 1,300 to 1,500 kWh per year (approx. €455 to €525 / year).',
      savingAdvice: ['Eliminate standby power with switchable multi-plugs.', 'Use Eco mode on washing machines and dishwashers.'],
      faq: [{ question: 'What is a typical power consumption for 1 person?', answer: 'In an apartment without electric water heating, 1,000 to 1,400 kWh/year is a great benchmark.' }]
    },
    'stromverbrauch-2-personen': {
      title: 'Electricity Consumption: 2-Person Household',
      category: 'Household Benchmarks',
      shortDescription: 'A 2-person household uses an average of 2,100 to 2,500 kWh annually (approx. €735 to €875 / year).',
      savingAdvice: ['Cook together with lids on and optimize oven usage.', 'Set refrigerator temperature to 7 °C.'],
      faq: [{ question: 'How much electricity do 2 people use per month?', answer: 'Monthly electricity consumption averages 175 to 210 kWh (€60 to €75 / month).' }]
    },
    'stromverbrauch-3-personen': {
      title: 'Electricity Consumption: 3-Person Household',
      category: 'Household Benchmarks',
      shortDescription: 'A 3-person household averages 2,600 to 3,200 kWh per year (approx. €910 to €1,120 / year).',
      savingAdvice: ['Choose a heat pump dryer over condenser models.', 'Install LED lighting throughout all living spaces.'],
      faq: [{ question: 'How much does electricity cost for 3 people per month?', answer: 'Average monthly electricity costs range from €75 to €95.' }]
    },
    'stromverbrauch-4-personen': {
      title: 'Electricity Consumption: 4-Person Household',
      category: 'Household Benchmarks',
      shortDescription: 'A family of 4 uses approx. 3,000 to 3,500 kWh/year in an apartment, and 4,000 to 5,000 kWh/year in a single-family house.',
      savingAdvice: ['Always run full dishwasher and washing machine loads.', 'Identify gaming PC and entertainment standby loads.'],
      faq: [{ question: 'How many kWh does a family of 4 consume?', answer: 'Without electric water heating approx. 3,000–3,800 kWh; with electric water heaters up to 5,200 kWh/year.' }]
    },
    'stromverbrauch-5-personen': {
      title: 'Electricity Consumption: 5-Person Household',
      category: 'Household Benchmarks',
      shortDescription: 'A 5-person household consumes on average 4,000 to 5,500 kWh per year (approx. €1,400 to €1,925 / year).',
      savingAdvice: ['Install water-saving shower heads to cut electric hot water draw.', 'Regularly compare electricity supplier rates.'],
      faq: [{ question: 'What does electricity cost for 5 people annually?', answer: 'At €0.35/kWh, annual electricity costs range between €1,400 and €1,950.' }]
    },
    'standby-strom': {
      title: 'Standby Power Calculator & Reduction Guide',
      category: 'Energy Guide',
      shortDescription: 'Phantom standby draw accounts for 10% to 15% of an average household electricity bill (approx. €100 to €150 / year).',
      savingAdvice: ['Use master-slave smart power strips for PC and entertainment systems.', 'Unplug power chargers when not actively charging.'],
      faq: [{ question: 'Which appliances draw the most standby electricity?', answer: 'Older TVs, AV receivers, video game consoles, set-top boxes, and coffee machines with continuous heaters.' }]
    },
    'stromfresser': {
      title: 'Exposing Top Energy Guvzzlers in the Home',
      category: 'Energy Guide',
      shortDescription: 'Identify the largest power-draining appliances in your home and learn practical steps to lower their operating cost.',
      savingAdvice: ['Test older cooling appliances with a plug-in power meter.', 'Limit the use of electric fan heaters and instant water heaters.'],
      faq: [{ question: 'What is the biggest electricity drain in a household?', answer: 'Old refrigerators/freezers, electric flow water heaters, and non-heat-pump tumble dryers.' }]
    },
    'dynamische-stromtarife': {
      title: 'Dynamic Electricity Tariffs (Spot Market Pricing)',
      category: 'Tariff Guide',
      shortDescription: 'Hourly variable electricity tariffs let you leverage cheap renewable energy during peak solar and wind production.',
      savingAdvice: ['Schedule EV charging and laundry during low-cost nighttime or midday hours.', 'Install a Smart Meter.'],
      faq: [{ question: 'Who benefits most from dynamic tariffs?', answer: 'EV owners, heat pump users, and households with flexible high-power appliances equipped with Smart Meters.' }]
    },
    'stromanbieter-wechseln': {
      title: 'Switching Electricity Suppliers: Save up to €500',
      category: 'Tariff Guide',
      shortDescription: 'Switching from default baseline utility contracts to competitive rates can save households several hundred euros each year.',
      savingAdvice: ['Choose contract lengths of at most 12 months.', 'Set a calendar reminder for cancellation periods.'],
      faq: [{ question: 'Is there a risk of power outage when switching providers?', answer: 'No, continuous power supply is legally guaranteed by grid operators.' }]
    }
  },
  es: {
    'stromverbrauch-1-person': {
      title: 'Consumo Eléctrico: Hogar de 1 Persona',
      category: 'Consumo del Hogar',
      shortDescription: 'Un hogar de una persona consume una media de 1.300 a 1.500 kWh al año (aprox. 455 a 525 €/año).',
      savingAdvice: ['Elimina el consumo en espera con regletas con interruptor.', 'Usa programas Eco en lavadora y lavavajillas.'],
      faq: [{ question: '¿Cuál es el consumo normal para una persona sola?', answer: 'En un piso sin termo eléctrico de agua, entre 1.000 y 1.400 kWh/año es una cifra de referencia óptima.' }]
    },
    'stromverbrauch-2-personen': {
      title: 'Consumo Eléctrico: Hogar de 2 Personas',
      category: 'Consumo del Hogar',
      shortDescription: 'Un hogar de 2 personas consume de media 2.100 a 2.500 kWh al año (aprox. 735 a 875 €/año).',
      savingAdvice: ['Cocina con tapa y optimiza el uso del horno.', 'Regula la nevera a 7 °C.'],
      faq: [{ question: '¿Cuánto consumen 2 personas al mes?', answer: 'Unos 175 a 210 kWh al mes (aprox. 60 a 75 euros mensuales).' }]
    },
    'stromverbrauch-3-personen': {
      title: 'Consumo Eléctrico: Hogar de 3 Personas',
      category: 'Consumo del Hogar',
      shortDescription: 'Un hogar de 3 personas consume de media 2.600 a 3.200 kWh al año (aprox. 910 a 1.120 €/año).',
      savingAdvice: ['Elige secadoras con bomba de calor.', 'Instala bombillas LED en toda la vivienda.'],
      faq: [{ question: '¿Cuánto cuesta la luz para 3 personas al mes?', answer: 'El coste medio mensual ronda entre los 75 y 95 euros.' }]
    },
    'stromverbrauch-4-personen': {
      title: 'Consumo Eléctrico: Familia de 4 Personas',
      category: 'Consumo del Hogar',
      shortDescription: 'Una familia de 4 miembros consume aprox. 3.000 a 3.500 kWh/año en piso, y 4.000 a 5.000 kWh/año en unifamiliar.',
      savingAdvice: ['Pon la lavadora y lavavajillas a plena carga.', 'Identifica el consumo de ordenadores y consolas.'],
      faq: [{ question: '¿Cuántos kWh consume una familia de 4 personas?', answer: 'Sin termo eléctrico unos 3.000 a 3.800 kWh; con termo eléctrico hasta 5.200 kWh/año.' }]
    },
    'stromverbrauch-5-personen': {
      title: 'Consumo Eléctrico: Hogar de 5 Personas',
      category: 'Consumo del Hogar',
      shortDescription: 'Un hogar de 5 personas consume de media 4.000 a 5.500 kWh al año (aprox. 1.400 a 1.925 €/año).',
      savingAdvice: ['Usa cabezales de ducha de bajo consumo.', 'Compara tarifas de luz periódicamente.'],
      faq: [{ question: '¿Cuánto cuesta la luz para 5 personas al año?', answer: 'Entre 1.400 y 1.950 euros anuales a un precio medio de 0,35 €/kWh.' }]
    },
    'standby-strom': {
      title: 'Consumo en Espera (Standby): Calcular y Reducir',
      category: 'Guía de Ahorro',
      shortDescription: 'El consumo fantasma en espera representa entre el 10% y el 15% de la factura eléctrica anual (unos 100 a 150 €/año).',
      savingAdvice: ['Usa regletas con interruptor para la zona de TV y ordenador.', 'Desconecta cargadores tras su uso.'],
      faq: [{ question: '¿Qué aparatos gastan más en espera?', answer: 'Televisores antiguos, receptores AV, consolas de videojuegos y cafeteras con mantenimiento de calor.' }]
    },
    'stromfresser': {
      title: 'Los mayores devoradores de electricidad en el hogar',
      category: 'Guía de Ahorro',
      shortDescription: 'Descubre qué electrodomésticos disparan tu factura de luz y cómo optimizar su funcionamiento.',
      savingAdvice: ['Mide el consumo de frigoríficos antiguos.', 'Limita el uso de calefactores eléctricos portátiles.'],
      faq: [{ question: '¿Cuál es el electrodoméstico que más gasta en casa?', answer: 'Frigoríficos antiguos, termos eléctricos de agua y secadoras convencionales sin bomba de calor.' }]
    },
    'dynamische-stromtarife': {
      title: 'Tarifas Eléctricas Dinámicas (Precio Indexado)',
      category: 'Tarifas',
      shortDescription: 'Aprovecha las horas con mayor generación solar y eólica para consumir electricidad a los precios más bajos.',
      savingAdvice: ['Programa la carga del coche eléctrico y lavadoras en horas valle.', 'Instala un contador inteligente.'],
      faq: [{ question: '¿A quién le conviene una tarifa dinámica?', answer: 'Especialmente a usuarios con coche eléctrico, aerotermia o consumos programables.' }]
    },
    'stromanbieter-wechseln': {
      title: 'Cambiar de Compañía Eléctrica y Ahorrar hasta 500 €',
      category: 'Tarifas',
      shortDescription: 'Cambiar a una tarifa de luz competitiva puede suponer un ahorro de varios cientos de euros al año.',
      savingAdvice: ['Elige contratos sin permanencia larga (máximo 12 meses).', 'Anota la fecha de renovación.'],
      faq: [{ question: '¿Hay riesgo de corte de suministro durante el cambio?', answer: 'No, el suministro continuo de electricidad está 100% garantizado por ley.' }]
    }
  },
  ja: {
    'stromverbrauch-1-person': {
      title: '一人暮らしの電気代・消費電力量の目安',
      category: '世帯人数別の目安',
      shortDescription: '一人暮らしの平均年間消費電力量は約1,300〜1,500kWh（年間約455〜525€）です。',
      savingAdvice: ['節電タップで待機電力を完全遮断。', '洗濯機や食洗機はエコモードを活用。'],
      faq: [{ question: '一人暮らしの標準的な電気使用量は？', answer: '電気給湯器のないマンション・アパートなら年間1,000〜1,400kWhが理想的です。' }]
    },
    'stromverbrauch-2-personen': {
      title: '二人暮らしの電気代・消費電力量の目安',
      category: '世帯人数別の目安',
      shortDescription: '2人世帯の平均年間消費電力量は約2,100〜2,500kWh（年間約735〜875€）です。',
      savingAdvice: ['料理はまとめて作りフタを活用。', '冷蔵庫の設定温度を7℃に最適化。'],
      faq: [{ question: '2人世帯の1ヶ月の電気代は？', answer: '1ヶ月あたり約175〜210kWh（約60〜75ユーロ）が平均です。' }]
    },
    'stromverbrauch-3-personen': {
      title: '三人家族の電気代・消費電力量の目安',
      category: '世帯人数別の目安',
      shortDescription: '3人世帯の平均年間消費電力量は約2,600〜3,200kWh（年間約910〜1,120€）です。',
      savingAdvice: ['ヒートポンプ式乾燥機を選ぶ。', '全室の照明をLED化。'],
      faq: [{ question: '3人暮らしの月々の電気代は？', answer: '月額約75〜95ユーロ程度が一般的な目安です。' }]
    },
    'stromverbrauch-4-personen': {
      title: '四人家族の電気代・消費電力量の目安',
      category: '世帯人数別の目安',
      shortDescription: '4人家族の場合、集合住宅で年間約3,000〜3,500kWh、戸建て住宅で約4,000〜5,000kWhを消費します。',
      savingAdvice: ['洗濯機や食洗機はまとめ洗い。', 'ゲーム機やPCの待機電力を管理。'],
      faq: [{ question: '4人家族の年間電気消費量は？', answer: '電気温水器なしで約3,000〜3,800kWh、電気温水器ありで最大5,200kWh/年です。' }]
    },
    'stromverbrauch-5-personen': {
      title: '五人家族の電気代・消費電力量の目安',
      category: '世帯人数別の目安',
      shortDescription: '5人以上の世帯では年間約4,000〜5,500kWh（年間約1,400〜1,925€）を消費します。',
      savingAdvice: ['節水シャワーヘッドで給湯エネルギーを削減。', '電力会社を定期的に見直し。'],
      faq: [{ question: '5人家族の年間電気代は？', answer: '35 ct/kWh計算で年間約1,400〜1,950ユーロとなります。' }]
    },
    'standby-strom': {
      title: '待機電力の計算と削減テクニック',
      category: '節電ガイド',
      shortDescription: '家庭で知らずに消費される待機電力は、総電気代の10〜15％（年間約100〜150€）を占めています。',
      savingAdvice: ['テレビやPC周辺に一括スイッチ付き電源タップを使用。', '充電器は使い終わったらコンセントから抜く。'],
      faq: [{ question: '待機電力が特に高い家電は？', answer: '古いテレビ、AVアンプ、ゲーム機、保温機能付きコーヒーメーカーなどです。' }]
    },
    'stromfresser': {
      title: '家庭内の隠れた「電気食い虫」家電ランキング',
      category: '節電ガイド',
      shortDescription: '気付かないうちに電気代を跳ね上げている大消費家電を見つけ出し、賢く対策しましょう。',
      savingAdvice: ['古い冷蔵庫の消費電力を簡易電力計で測定。', 'セラミックヒーターの長時間連続使用を避ける。'],
      faq: [{ question: '家の中で最も電気を消費する家電は？', answer: '10年以上前の冷蔵・冷凍庫、電気温水器、ヒーター式乾燥機などです。' }]
    },
    'dynamische-stromtarife': {
      title: 'ダイナミックプライシング（市場連動型電気料金）',
      category: '料金プラン',
      shortDescription: '風力や太陽光発電が多い時間帯の安価な卸電力を活用できる、時間帯別変動プランです。',
      savingAdvice: ['EVの充電や洗濯機を深夜や昼間の最安時間帯に予約。', 'スマートメーターを導入。'],
      faq: [{ question: '市場連動プランが向いている人は？', answer: '電気自動車（EV）やヒートポンプを所有し、使用時間を柔軟に調整できる世帯です。' }]
    },
    'stromanbieter-wechseln': {
      title: '電力会社の切り替えで年間最大500€節約',
      category: '料金プラン',
      shortDescription: '基本プランから割安な電力会社へ切り替えるだけで、年間数百ユーロの節約が可能です。',
      savingAdvice: ['契約期間は12ヶ月以内のものを選ぶ。', '解約更新月をカレンダーに登録。'],
      faq: [{ question: '電力会社の切り替え中に停電する心配はありますか？', answer: 'いいえ、送配電網は地域電力会社が一括管理しているため、供給停止のリスクは一切ありません。' }]
    }
  },
  fr: {
    'stromverbrauch-1-person': {
      title: 'Consommation électrique : Foyer 1 Personne',
      category: 'Repères par Foyer',
      shortDescription: 'Une personne seule consomme en moyenne 1 300 à 1 500 kWh par an (environ 455 à 525 €/an).',
      savingAdvice: ['Coupez la veille avec des multiprises à interrupteur.', 'Utilisez le mode Éco du lave-linge.'],
      faq: [{ question: 'Quelle est la consommation normale pour une personne ?', answer: 'En appartement sans chauffe-eau électrique, 1 000 à 1 400 kWh/an est une bonne référence.' }]
    },
    'stromverbrauch-2-personen': {
      title: 'Consommation électrique : Foyer 2 Personnes',
      category: 'Repères par Foyer',
      shortDescription: 'Un couple consomme en moyenne 2 100 à 2 500 kWh par an (environ 735 à 875 €/an).',
      savingAdvice: ['Cuisinez avec couvercle.', 'Réglez le frigo à 7 °C.'],
      faq: [{ question: 'Combien consomment 2 personnes par mois ?', answer: 'Environ 175 à 210 kWh par mois (60 à 75 €/mois).' }]
    },
    'stromverbrauch-3-personen': {
      title: 'Consommation électrique : Foyer 3 Personnes',
      category: 'Repères par Foyer',
      shortDescription: 'Un foyer de 3 personnes consomme en moyenne 2 600 à 3 200 kWh par an (environ 910 à 1 120 €/an).',
      savingAdvice: ['Privilégiez les sèche-linge à pompe à chaleur.', 'Installez des LED partout.'],
      faq: [{ question: 'Combien coûte l\'électricité pour 3 personnes par mois ?', answer: 'Environ 75 à 95 € par mois.' }]
    },
    'stromverbrauch-4-personen': {
      title: 'Consommation électrique : Famille de 4 Personnes',
      category: 'Repères par Foyer',
      shortDescription: 'Une famille de 4 personnes consomme environ 3 000 à 3 500 kWh/an en appartement et 4 000 à 5 000 kWh/an en maison.',
      savingAdvice: ['Faites tourner les appareils à pleine charge.', 'Surveillez la veille des PC et consoles.'],
      faq: [{ question: 'Combien de kWh consomme une famille de 4 ?', answer: 'Sans eau chaude électrique environ 3 000 à 3 800 kWh/an.' }]
    },
    'stromverbrauch-5-personen': {
      title: 'Consommation électrique : Foyer 5 Personnes',
      category: 'Repères par Foyer',
      shortDescription: 'Un foyer de 5 personnes consomme en moyenne 4 000 à 5 500 kWh par an (environ 1 400 à 1 925 €/an).',
      savingAdvice: ['Installez des pommeaux de douche économiques.', 'Comparez les offres d\'électricité.'],
      faq: [{ question: 'Quel est le coût annuel pour 5 personnes ?', answer: 'Entre 1 400 et 1 950 € par an à 0,35 €/kWh.' }]
    },
    'standby-strom': {
      title: 'Consommation de Veille : Calcul et Conseils',
      category: 'Guide Économies',
      shortDescription: 'La consommation fantôme de veille représente 10 à 15 % de la facture d\'électricité (environ 100 à 150 €/an).',
      savingAdvice: ['Utilisez des multiprises à interrupteur.', 'Débranchez les chargeurs inutilisés.'],
      faq: [{ question: 'Quels appareils consomment le plus en veille ?', answer: 'Vieilles TV, amplis home cinéma, consoles de jeux et cafetières.' }]
    },
    'stromfresser': {
      title: 'Traquer les plus grands dévoreurs d\'électricité',
      category: 'Guide Économies',
      shortDescription: 'Identifiez les appareils les plus énergivores de votre logement et découvrez comment réduire leurs coûts.',
      savingAdvice: ['Mesurez la consommation des vieux réfrigérateurs.', 'Limitez les radiateurs soufflants.'],
      faq: [{ question: 'Quel est le plus grand consommateur à la maison ?', answer: 'Les vieux congélateurs, les chauffe-eau instantanés et les sèche-linge à condensation.' }]
    },
    'dynamische-stromtarife': {
      title: 'Tarifs Dynamiques (Prix Indexés)',
      category: 'Offres Électricité',
      shortDescription: 'Profitez des heures où les énergies renouvelables sont abondantes pour bénéficier de tarifs très bas.',
      savingAdvice: ['Programmez la recharge de la voiture électrique la nuit.', 'Installez un compteur communicant.'],
      faq: [{ question: 'À qui profitent les tarifs dynamiques ?', answer: 'Aux possesseurs de véhicules électriques ou pompes à chaleur.' }]
    },
    'stromanbieter-wechseln': {
      title: 'Changer de Fournisseur et Économiser jusqu\'à 500 €',
      category: 'Offres Électricité',
      shortDescription: 'En quittant le tarif de base pour une offre compétitive, vous pouvez économiser plusieurs centaines d\'euros par an.',
      savingAdvice: ['Optez pour des contrats sans engagement long.', 'Notez la date de renouvellement.'],
      faq: [{ question: 'Y a-t-il un risque de coupure de courant pendant le changement ?', answer: 'Non, la continuité de l\'alimentation électrique est garantie par la loi.' }]
    }
  },
  pt: {
    'stromverbrauch-1-person': {
      title: 'Consumo de Energia: 1 Pessoa',
      category: 'Consumo Doméstico',
      shortDescription: 'Uma pessoa consome em média 1.300 a 1.500 kWh por ano (aprox. 455 a 525 €/ano).',
      savingAdvice: ['Elimine o consumo em standby com réguas de tomadas.', 'Use o modo Eco na máquina de lavar.'],
      faq: [{ question: 'Qual é o consumo normal para 1 pessoa?', answer: 'Em apartamento sem chuveiro elétrico, entre 1.000 e 1.400 kWh/ano.' }]
    },
    'stromverbrauch-2-personen': {
      title: 'Consumo de Energia: 2 Pessoas',
      category: 'Consumo Doméstico',
      shortDescription: 'Um casal consome em média 2.100 a 2.500 kWh por ano (aprox. 735 a 875 €/ano).',
      savingAdvice: ['Cozinhe com panela tampada.', 'Regule a geladeira para 7 °C.'],
      faq: [{ question: 'Quanto gastam 2 pessoas por mês?', answer: 'Cerca de 175 a 210 kWh por mês (60 a 75 €/mês).' }]
    },
    'stromverbrauch-3-personen': {
      title: 'Consumo de Energia: 3 Pessoas',
      category: 'Consumo Doméstico',
      shortDescription: 'Uma residência de 3 pessoas consome em média 2.600 a 3.200 kWh por ano (aprox. 910 a 1.120 €/ano).',
      savingAdvice: ['Prefira secadoras com bomba de calor.', 'Instale lâmpadas LED em todos os cômodos.'],
      faq: [{ question: 'Quanto custa a luz para 3 pessoas por mês?', answer: 'Cerca de 75 a 95 € mensais.' }]
    },
    'stromverbrauch-4-personen': {
      title: 'Consumo de Energia: Família de 4 Pessoas',
      category: 'Consumo Doméstico',
      shortDescription: 'Uma família de 4 pessoas consome cerca de 3.000 a 3.500 kWh/ano em apartamento e 4.000 a 5.000 kWh/ano em casa.',
      savingAdvice: ['Lave roupa e louça apenas com carga cheia.', 'Controle o standby de videogames e PCs.'],
      faq: [{ question: 'Quantos kWh consome uma família de 4?', answer: 'Sem aquecimento elétrico de água cerca de 3.000 a 3.800 kWh/ano.' }]
    },
    'stromverbrauch-5-personen': {
      title: 'Consumo de Energia: Família de 5 Pessoas',
      category: 'Consumo Doméstico',
      shortDescription: 'Consome em média 4.000 a 5.500 kWh por ano (aprox. 1.400 a 1.925 €/ano).',
      savingAdvice: ['Instale chuveiros de baixo fluxo.', 'Compare tarifas de eletricidade.'],
      faq: [{ question: 'Qual o custo anual para 5 pessoas?', answer: 'Entre 1.400 e 1.950 € por ano a 0,35 €/kWh.' }]
    },
    'standby-strom': {
      title: 'Consumo em Standby: Calcular e Reduzir',
      category: 'Guia de Economia',
      shortDescription: 'O consumo fantasma representa de 10% a 15% da conta de luz anual (cerca de 100 a 150 €/ano).',
      savingAdvice: ['Use réguas com botão liga/desliga.', 'Desconecte carregadores da tomada.'],
      faq: [{ question: 'Quais aparelhos mais gastam em standby?', answer: 'TVs antigas, receivers, videogames e cafeteiras.' }]
    },
    'stromfresser': {
      title: 'Os Maiores Ladrões de Energia na Casa',
      category: 'Guia de Economia',
      shortDescription: 'Descubra quais eletrodomésticos mais aumentam sua conta de energia e como economizar.',
      savingAdvice: ['Monitore geladeiras antigas.', 'Evite aquecedores portáteis de ambiente.'],
      faq: [{ question: 'Qual é o maior vilão da conta de luz?', answer: 'Geladeiras antigas, aquecedores elétricos de água e secadoras convencionais.' }]
    },
    'dynamische-stromtarife': {
      title: 'Tarifas Dinâmicas de Eletricidade',
      category: 'Tarifas',
      shortDescription: 'Aproveite os horários de maior geração solar e eólica para pagar menos na fatura de energia.',
      savingAdvice: ['Programe a recarga do carro elétrico à noite.', 'Instale um medidor inteligente.'],
      faq: [{ question: 'Para quem compensa a tarifa dinâmica?', answer: 'Usuários de veículos elétricos e bombas de calor.' }]
    },
    'stromanbieter-wechseln': {
      title: 'Trocar de Fornecedor e Economizar até 500 €',
      category: 'Tarifas',
      shortDescription: 'Mudar para uma tarifa de luz competitiva pode economizar centenas de euros todos os anos.',
      savingAdvice: ['Escolha contratos sem permanência excessiva.', 'Monitore a data de renovação.'],
      faq: [{ question: 'Existe risco de corte de energia na troca?', answer: 'Não, o fornecimento contínuo de eletricidade é garantido por lei.' }]
    }
  },
  ko: {
    'stromverbrauch-1-person': {
      title: '1인 가구 전기요금 및 전력 소비량 기준',
      category: '가구별 기준치',
      shortDescription: '1인 가구는 연간 평균 1,300~1,500kWh(연간 약 455~525€)의 전력을 소비합니다.',
      savingAdvice: ['절전 멀티탭으로 대기전력을 완벽 차단하세요.', '세탁기는 에코 코스를 활용하세요.'],
      faq: [{ question: '1인 가구의 적정 전력 소비량은?', answer: '전기 온수기를 쓰지 않는 아파트 기준 연간 1,000~1,400kWh가 이상적입니다.' }]
    },
    'stromverbrauch-2-personen': {
      title: '2인 가구 전기요금 및 전력 소비량 기준',
      category: '가구별 기준치',
      shortDescription: '2인 가구는 연간 평균 2,100~2,500kWh(연간 약 735~875€)의 전력을 소비합니다.',
      savingAdvice: ['조리 시 냄비 뚜껑을 덮고 오븐을 효율적으로 사용하세요.', '냉장고 온도를 7℃로 설정하세요.'],
      faq: [{ question: '2인 가구의 한 달 전기 사용량은?', answer: '월평균 약 175~210kWh(약 60~75유로)입니다.' }]
    },
    'stromverbrauch-3-personen': {
      title: '3인 가구 전기요금 및 전력 소비량 기준',
      category: '가구별 기준치',
      shortDescription: '3인 가구는 연간 평균 2,600~3,200kWh(연간 약 910~1,120€)의 전력을 소비합니다.',
      savingAdvice: ['히트펌프 건조기를 사용하세요.', '실내 모든 조명을 LED로 교체하세요.'],
      faq: [{ question: '3인 가구의 월 전기요금은?', answer: '월평균 약 75~95유로 수준입니다.' }]
    },
    'stromverbrauch-4-personen': {
      title: '4인 가족 전기요금 및 전력 소비량 기준',
      category: '가구별 기준치',
      shortDescription: '4인 가족의 경우 아파트 기준 연간 3,000~3,500kWh, 단독주택 기준 4,000~5,000kWh를 소비합니다.',
      savingAdvice: ['세탁기와 식기세척기는 모아서 가득 채워 작동하세요.', '게임기 및 PC 대기전력을 관리하세요.'],
      faq: [{ question: '4인 가구의 연간 전력 사용량은?', answer: '전기 온수기 제외 시 약 3,000~3,800kWh, 전기 온수기 포함 시 최대 5,200kWh/년입니다.' }]
    },
    'stromverbrauch-5-personen': {
      title: '5인 가구 전기요금 및 전력 소비량 기준',
      category: '가구별 기준치',
      shortDescription: '5인 이상 가구는 연간 평균 4,000~5,500kWh(연간 약 1,400~1,925€)를 소비합니다.',
      savingAdvice: ['절수 샤워헤드로 온수 전력 소모를 줄이세요.', '전기요금 요금제를 정기적으로 비교하세요.'],
      faq: [{ question: '5인 가구의 연간 전기요금은?', answer: '35 ct/kWh 기준 연간 약 1,400~1,950유로입니다.' }]
    },
    'standby-strom': {
      title: '대기전력 계산 및 절약 가이드',
      category: '절전 가이드',
      shortDescription: '방치되는 대기전력은 전체 가정 전기요금의 10~15%(연간 약 100~150€)를 차지합니다.',
      savingAdvice: ['TV 및 PC 주변에 스위치 멀티탭을 사용하세요.', '사용하지 않는 충전기는 플러그를 뽑으세요.'],
      faq: [{ question: '대기전력이 특히 높은 기기는?', answer: '구형 TV, 셋톱박스, 콘솔 게임기, 보온 기능 커피머신 등입니다.' }]
    },
    'stromfresser': {
      title: '가정 내 숨은 전력 소비 주범 찾기',
      category: '절전 가이드',
      shortDescription: '자신도 모르게 전기요금을 급증시키는 고전력 기기를 찾고 효과적인 절전법을 알아보세요.',
      savingAdvice: ['오래된 냉장고의 전력 소비를 측정기로 점검하세요.', '전기 온풍기 장시간 사용을 자제하세요.'],
      faq: [{ question: '집에서 전기를 가장 많이 쓰는 기기는?', answer: '10년 이상 된 구형 냉장고, 전기 온수기, 히터식 건조기입니다.' }]
    },
    'dynamische-stromtarife': {
      title: '다이내믹 전기요금제 (시간대별 변동 요금)',
      category: '요금제 안내',
      shortDescription: '태양광과 풍력 발전량이 많은 시간대의 저렴한 전기를 전략적으로 활용할 수 있습니다.',
      savingAdvice: ['전기차 충전과 세탁기 가동을 심야나 낮 시간 최저가 시간대로 예약하세요.', '스마트미터를 설치하세요.'],
      faq: [{ question: '시간대별 요금제가 유리한 사람은?', answer: '전기차(EV) 소유자, 히트펌프 사용자 등 전력 사용 시간 조절이 가능한 가구입니다.' }]
    },
    'stromanbieter-wechseln': {
      title: '전력 회사 변경으로 연간 최대 500€ 절약',
      category: '요금제 안내',
      shortDescription: '기본 요금제에서 경쟁력 있는 알뜰 요금제로 변경하는 것만으로 연간 수백 유로를 아낄 수 있습니다.',
      savingAdvice: ['약정 기간 12개월 이하의 상품을 선택하세요.', '해지 및 갱신 기간을 캘린더에 기록하세요.'],
      faq: [{ question: '전력 회사 변경 중 정전 위험이 있나요?', answer: '아니요, 송배전망은 지역 전력망 사업자가 법적으로 상시 보장하므로 정전 위험이 없습니다.' }]
    }
  },
  it: {
    'stromverbrauch-1-person': {
      title: 'Consumo Elettrico: Casa per 1 Persona',
      category: 'Consumi Domestici',
      shortDescription: 'Una persona sola consuma in media 1.300-1.500 kWh all\'anno (circa 455-525 €/anno).',
      savingAdvice: ['Elimina lo standby con ciabatte multipresa con interruttore.', 'Usa i programmi Eco per la lavatrice.'],
      faq: [{ question: 'Qual è il consumo normale per 1 persona?', answer: 'In appartamento senza scaldabagno elettrico, 1.000-1.400 kWh/anno è un ottimo valore.' }]
    },
    'stromverbrauch-2-personen': {
      title: 'Consumo Elettrico: Casa per 2 Persone',
      category: 'Consumi Domestici',
      shortDescription: 'Una coppia consuma in media 2.100-2.500 kWh all\'anno (circa 735-875 €/anno).',
      savingAdvice: ['Cucina col coperchio.', 'Imposta il frigo a 7 °C.'],
      faq: [{ question: 'Quanto consumano 2 persone al mese?', answer: 'Circa 175-210 kWh al mese (60-75 €/mese).' }]
    },
    'stromverbrauch-3-personen': {
      title: 'Consumo Elettrico: Casa per 3 Persone',
      category: 'Consumi Domestici',
      shortDescription: 'Un nucleo di 3 persone consuma in media 2.600-3.200 kWh all\'anno (circa 910-1.120 €/anno).',
      savingAdvice: ['Scegli asciugatrici a pompa di calore.', 'Installa lampadine LED in tutte le stanze.'],
      faq: [{ question: 'Quanto costa la corrente per 3 persone al mese?', answer: 'Circa 75-95 € al mese.' }]
    },
    'stromverbrauch-4-personen': {
      title: 'Consumo Elettrico: Famiglia di 4 Persone',
      category: 'Consumi Domestici',
      shortDescription: 'Una famiglia di 4 persone consuma circa 3.000-3.500 kWh/anno in appartamento e 4.000-5.000 kWh/anno in villetta.',
      savingAdvice: ['Avvia lavatrice e lavastoviglie a pieno carico.', 'Controlla lo standby di PC e console.'],
      faq: [{ question: 'Quanti kWh consuma una famiglia di 4 persone?', answer: 'Senza scaldabagno elettrico circa 3.000-3.800 kWh/anno.' }]
    },
    'stromverbrauch-5-personen': {
      title: 'Consumo Elettrico: Casa per 5 Persone',
      category: 'Consumi Domestici',
      shortDescription: 'Consuma in media 4.000-5.500 kWh all\'anno (circa 1.400-1.925 €/anno).',
      savingAdvice: ['Installa soffioni doccia a risparmio idrico.', 'Confronta le tariffe energetiche.'],
      faq: [{ question: 'Quanto costa la luce per 5 persone all\'anno?', answer: 'Tra 1.400 e 1.950 € all\'anno a 0,35 €/kWh.' }]
    },
    'standby-strom': {
      title: 'Consumo in Standby: Calcolo e Riduzione',
      category: 'Guida al Risparmio',
      shortDescription: 'I consumi fantasma in standby rappresentano dal 10% al 15% della bolletta elettrica (circa 100-150 €/anno).',
      savingAdvice: ['Usa ciabatte con interruttore per TV e computer.', 'Stacca i caricabatterie quando non in uso.'],
      faq: [{ question: 'Quali elettrodomestici consumano di più in standby?', answer: 'Vecchi TV, sintoamplificatori AV, console da gioco e macchine da caffè.' }]
    },
    'stromfresser': {
      title: 'Scovare i Maggiori Sprechi Elettrici in Casa',
      category: 'Guida al Risparmio',
      shortDescription: 'Individua gli elettrodomesticos che fanno lievitare la tua bolletta e scopri come tenerli sotto controllo.',
      savingAdvice: ['Misura i consumi dei vecchi frigoriferi.', 'Limita le stufette elettriche.'],
      faq: [{ question: 'Qual è il dispositivo che consuma di più in casa?', answer: 'Vecchi frigoriferi/congelatori, scaldabagni elettrici istantanei e asciugatrici a condensazione.' }]
    },
    'dynamische-stromtarife': {
      title: 'Tariffe Elettriche Dinamiche (Prezzo Indexato)',
      category: 'Tariffe',
      shortDescription: 'Sfrutta le ore di massima produzione solare ed eolica per pagare l\'elettricità a prezzi vantaggiosi.',
      savingAdvice: ['Pianifica la ricarica dell\'auto elettrica di notte.', 'Installa uno Smart Meter.'],
      faq: [{ question: 'A chi convengono le tariffe dinamiche?', answer: 'Ai possessori di auto elettriche e pompe di calore con consumi flessibili.' }]
    },
    'stromanbieter-wechseln': {
      title: 'Cambiare Fornitore di Energia e Risparmiare fino a 500 €',
      category: 'Tariffe',
      shortDescription: 'Passando dal regime di maggior tutela a un\'offerta a mercato libero competitiva si possono risparmiare centinaia di euro all\'anno.',
      savingAdvice: ['Scegli contratti con vincoli non superiori a 12 mesi.', 'Annota la scadenza sul calendario.'],
      faq: [{ question: 'C\'è il rischio di interruzione della corrente durante il passaggio?', answer: 'No, la continuità della fornitura elettrica è garantita per legge.' }]
    }
  }
};

export function getLocalizedTopic(slug: string, lang: SupportedLanguage): LocalizedTopic | null {
  const langDict = topicTranslations[lang] || topicTranslations.en || topicTranslations.de;
  return langDict[slug] || null;
}
