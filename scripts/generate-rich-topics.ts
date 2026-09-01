import fs from 'node:fs';
import path from 'node:path';

const languages = ['de', 'en', 'es', 'ja', 'fr', 'pt', 'ko', 'it'] as const;
type SupportedLang = typeof languages[number];

const topicDefs = [
  { slug: 'stromverbrauch-1-person', p: 1, baseKwh: 1400, costM: 53.33 },
  { slug: 'stromverbrauch-2-personen', p: 2, baseKwh: 2500, costM: 85.42 },
  { slug: 'stromverbrauch-3-personen', p: 3, baseKwh: 3200, costM: 105.83 },
  { slug: 'stromverbrauch-4-personen', p: 4, baseKwh: 3700, costM: 120.42 },
  { slug: 'stromverbrauch-5-personen', p: 5, baseKwh: 4600, costM: 146.67 },
  { slug: 'stromverbrauch-pro-person', p: 1, baseKwh: 1400, costM: 53.33 },
  { slug: 'stromverbrauch-wohnung', p: 2, baseKwh: 2200, costM: 76.67 },
  { slug: 'stromverbrauch-einfamilienhaus', p: 4, baseKwh: 4000, costM: 129.17 },
  { slug: 'durchschnittlicher-stromverbrauch', p: 3, baseKwh: 3000, costM: 100.00 },
  { slug: 'strompreis-aktuell', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'strompreis-deutschland', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'strompreis-pro-kwh', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'strompreis-entwicklung', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'strompreis-zusammensetzung', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'dynamische-stromtarife', p: 0, baseKwh: 4000, costM: 129.17 },
  { slug: 'stromanbieter-wechseln', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'stromrechnung-pruefen', p: 0, baseKwh: 3000, costM: 100.00 },
  { slug: 'stromrechnung-zu-hoch', p: 0, baseKwh: 4500, costM: 143.75 },
  { slug: 'stromrechnung-senken', p: 0, baseKwh: 3000, costM: 100.00 },
  { slug: 'stromrechnung-berechnen', p: 0, baseKwh: 3000, costM: 100.00 },
  { slug: 'stromrechnung-beispiel', p: 0, baseKwh: 3000, costM: 100.00 },
  { slug: 'strom-sparen-tipps', p: 0, baseKwh: 3000, costM: 100.00 },
  { slug: 'stromfresser', p: 0, baseKwh: 4000, costM: 129.17 },
  { slug: 'standby-strom', p: 0, baseKwh: 300, costM: 8.75 },
  { slug: 'e-auto/stromkosten', p: 0, baseKwh: 2500, costM: 72.92 },
  { slug: 'e-auto/ladekosten-rechner', p: 0, baseKwh: 2500, costM: 72.92 },
  { slug: 'e-auto/kosten-pro-100-km', p: 0, baseKwh: 2500, costM: 72.92 },
  { slug: 'waermepumpe/stromverbrauch', p: 0, baseKwh: 4500, costM: 131.25 },
  { slug: 'waermepumpe/stromkosten', p: 0, baseKwh: 4500, costM: 131.25 },
  { slug: 'waermepumpe/stromverbrauch-rechner', p: 0, baseKwh: 4500, costM: 131.25 },
  { slug: 'photovoltaik/eigenverbrauch-rechner', p: 0, baseKwh: 3500, costM: 114.58 },
  { slug: 'balkonkraftwerk/stromkosten-sparen', p: 0, baseKwh: 800, costM: 23.33 },
];

const names: Record<string, Record<SupportedLang, string>> = {
  'stromverbrauch-1-person': { de: 'Stromverbrauch 1-Personen-Haushalt', en: 'Electricity Consumption: 1 Person', es: 'Consumo Eléctrico de 1 Persona', ja: '一人暮らしの電気消費量', fr: 'Consommation électrique 1 personne', pt: 'Consumo de eletricidade 1 pessoa', ko: '1인 가구 전기 소비량', it: 'Consumo elettrico 1 persona' },
  'stromverbrauch-2-personen': { de: 'Stromverbrauch 2-Personen-Haushalt', en: 'Electricity Consumption: 2 Persons', es: 'Consumo Eléctrico de 2 Personas', ja: '2人暮らしの電気消費量', fr: 'Consommation électrique 2 personnes', pt: 'Consumo de eletricidade 2 pessoas', ko: '2인 가구 전기 소비량', it: 'Consumo elettrico 2 persone' },
  'stromverbrauch-3-personen': { de: 'Stromverbrauch 3-Personen-Haushalt', en: 'Electricity Consumption: 3 Persons', es: 'Consumo Eléctrico de 3 Personas', ja: '3人家族の電気消費量', fr: 'Consommation électrique 3 personnes', pt: 'Consumo de eletricidade 3 pessoas', ko: '3인 가구 전기 소비량', it: 'Consumo elettrico 3 persone' },
  'stromverbrauch-4-personen': { de: 'Stromverbrauch 4-Personen-Haushalt', en: 'Electricity Consumption: 4 Persons', es: 'Consumo Eléctrico de 4 Personas', ja: '4人家族の電気消費量', fr: 'Consommation électrique 4 personnes', pt: 'Consumo de eletricidade 4 pessoas', ko: '4인 가구 전기 소비량', it: 'Consumo elettrico 4 persone' },
  'stromverbrauch-5-personen': { de: 'Stromverbrauch 5-Personen-Haushalt', en: 'Electricity Consumption: 5+ Persons', es: 'Consumo Eléctrico de 5+ Personas', ja: '5人以上家族の電気消費量', fr: 'Consommation électrique 5+ personnes', pt: 'Consumo de eletricidade 5+ pessoas', ko: '5인 이상 가구 전기 소비량', it: 'Consumo elettrico 5+ persone' },
  'stromverbrauch-pro-person': { de: 'Stromverbrauch pro Person (Pro-Kopf)', en: 'Electricity Consumption per Person', es: 'Consumo Eléctrico por Persona', ja: '1人あたりの平均電気消費量', fr: 'Consommation électrique par personne', pt: 'Consumo de eletricidade por pessoa', ko: '1인당 평균 전기 소비량', it: 'Consumo elettrico per persona' },
  'stromverbrauch-wohnung': { de: 'Stromverbrauch Mietwohnung', en: 'Apartment Electricity Consumption', es: 'Consumo Eléctrico en Piso / Apartamento', ja: 'マンション・アパートの電気消費量', fr: 'Consommation électrique en appartement', pt: 'Consumo de eletricidade em apartamento', ko: '아파트 평균 전기 소비량', it: 'Consumo elettrico in appartamento' },
  'stromverbrauch-einfamilienhaus': { de: 'Stromverbrauch Einfamilienhaus', en: 'Single-Family House Electricity Usage', es: 'Consumo Eléctrico en Casa Unifamiliar', ja: '一戸建て住宅の電気消費量', fr: 'Consommation électrique en maison individuelle', pt: 'Consumo de eletricidade em moradia', ko: '단독주택 평균 전기 소비량', it: 'Consumo elettrico in casa singola' },
  'durchschnittlicher-stromverbrauch': { de: 'Durchschnittlicher Stromverbrauch Deutschland', en: 'Average Household Electricity Consumption', es: 'Consumo Eléctrico Medio del Hogar', ja: '家庭の平均電気消費量ガイド', fr: 'Consommation électrique moyenne d\'un foyer', pt: 'Consumo médio de eletricidade doméstico', ko: '가정용 평균 전기 소비량 가이드', it: 'Consumo medio di energia elettrica per famiglia' },
  'strompreis-aktuell': { de: 'Strompreis aktuell 2026', en: 'Current Electricity Price 2026', es: 'Precio Actual de la Electricidad 2026', ja: '最新の電気料金単価 2026', fr: 'Prix actuel de l\'électricité 2026', pt: 'Tarifa atual de eletricidade 2026', ko: '2026년 최신 전력 단가', it: 'Prezzo attuale dell\'energia elettrica 2026' },
  'strompreis-deutschland': { de: 'Strompreise in Deutschland', en: 'Electricity Prices in Germany & Europe', es: 'Precios de la Electricidad en Europa', ja: 'ドイツ・欧州の電気料金相場', fr: 'Tarifs de l\'électricité en Europe', pt: 'Preços de eletricidade na Europa', ko: '독일 및 유럽 전력 요금 비교', it: 'Prezzi dell\'energia elettrica in Europa' },
  'strompreis-pro-kwh': { de: 'Strompreis pro kWh (Arbeitspreis)', en: 'Electricity Cost per kWh (Unit Rate)', es: 'Precio por kWh (Término de Energía)', ja: '1kWhあたりの電気代単価', fr: 'Prix du kWh d\'électricité', pt: 'Preço por kWh de eletricidade', ko: '1kWh당 전기요금 단가', it: 'Prezzo per kWh di energia elettrica' },
  'strompreis-entwicklung': { de: 'Strompreisentwicklung (Prognose & Historie)', en: 'Electricity Price Trends & Forecast', es: 'Evolución del Precio de la Luz', ja: '電気料金の推移と将来予測', fr: 'Évolution et prévisions des prix de l\'électricité', pt: 'Evolução dos preços de eletricidade', ko: '전기요금 추이 및 향후 전망', it: 'Andamento storico del prezzo dell\'energia' },
  'strompreis-zusammensetzung': { de: 'Strompreis-Zusammensetzung', en: 'Electricity Price Breakdown & Components', es: 'Desglose del Precio de la Electricidad', ja: '電気料金の内訳・構成比率', fr: 'Composition du tarif de l\'électricité', pt: 'Composição da fatura de eletricidade', ko: '전기요금 세부 구성 요소', it: 'Composizione della bolletta elettrica' },
  'dynamische-stromtarife': { de: 'Dynamische Stromtarife (Börsenstrompreise)', en: 'Dynamic Electricity Tariffs & Smart Meters', es: 'Tarifas Eléctricas Dinámicas', ja: '変動型ダイナミック電力プラン', fr: 'Tarifs dynamiques de l\'électricité', pt: 'Tarifas dinâmicas de eletricidade', ko: '다이내믹 변동형 전력 요금제', it: 'Tariffe elettriche dinamiche' },
  'stromanbieter-wechseln': { de: 'Stromanbieter wechseln & sparen', en: 'Switching Energy Supplier to Save Money', es: 'Cambiar de Compañía Eléctrica', ja: '電力会社の切り替えで電気代削減', fr: 'Changer de fournisseur d\'électricité', pt: 'Mudar de fornecedor de eletricidade', ko: '전력 공급사 변경 및 요금 절감', it: 'Cambiare fornitore di energia elettrica' },
  'stromrechnung-pruefen': { de: 'Stromrechnung prüfen (Rechnungscheck)', en: 'Checking Your Electricity Bill for Errors', es: 'Cómo Revisar la Factura de la Luz', ja: '電気料金の明細書・請求書の確認方法', fr: 'Vérifier sa facture d\'électricité', pt: 'Como verificar a fatura da luz', ko: '전기요금 고지서 및 명세서 검토', it: 'Come verificare la bolletta della luce' },
  'stromrechnung-zu-hoch': { de: 'Stromrechnung zu hoch? Ursachen & Lösungen', en: 'Electricity Bill Too High? Causes & Fixes', es: '¿Factura de luz muy alta? Soluciones', ja: '電気代が高すぎる原因と即効対策', fr: 'Facture d\'électricité trop élevée ? Solutions', pt: 'Fatura de eletricidade muito alta? O que fazer', ko: '전기요금이 너무 많이 나온 원인과 해결책', it: 'Bolletta troppo alta? Cause e soluzioni' },
  'stromrechnung-senken': { de: 'Stromrechnung senken (Sofort-Tipps)', en: 'How to Lower Your Electricity Bill Quickly', es: 'Cómo Reducir la Factura de la Luz', ja: '電気代を今すぐ安くする節電テクニック', fr: 'Réduire sa facture d\'électricité rapidement', pt: 'Como baixar a fatura da eletricidade', ko: '전기요금 절감 즉효 가이드', it: 'Come abbassare la bolletta elettrica' },
  'stromrechnung-berechnen': { de: 'Stromrechnung selbst berechnen', en: 'Calculate Your Monthly Electricity Bill', es: 'Calcular la Factura de la Luz', ja: '月々の電気代を自分で計算するシミュレーター', fr: 'Calculer sa facture d\'électricité', pt: 'Calcular a fatura de luz', ko: '월 전기요금 셀프 시뮬레이션', it: 'Calcolare la bolletta dell\'energia elettrica' },
  'stromrechnung-beispiel': { de: 'Muster-Stromrechnung & Erklärung', en: 'Sample Electricity Bill Explained', es: 'Ejemplo de Factura de la Luz Explicada', ja: '電気料金請求書の見本と項目解説', fr: 'Exemple et explication d\'une facture d\'électricité', pt: 'Exemplo explicado de fatura de eletricidade', ko: '전기요금 고지서 샘플 및 상세 설명', it: 'Esempio di bolletta elettrica spiegata' },
  'strom-sparen-tipps': { de: 'Die 20 besten Stromspartipps für 2026', en: 'Top 20 Energy Saving Tips for 2026', es: 'Los 20 Mejores Consejos para Ahorrar Luz', ja: '今すぐできる節電対策・省エネ術20選', fr: 'Les 20 meilleurs conseils pour économiser l\'électricité', pt: 'As 20 melhores dicas para poupar eletricidade', ko: '2026년 최고의 전기 절약 팁 20선', it: 'I 20 migliori consigli per risparmiare energia' },
  'stromfresser': { de: 'Stromfresser im Haushalt entlarven', en: 'Detecting Power-Hungry Vampire Appliances', es: 'Electrodomésticos que Más Luz Gastan', ja: '家の中の隠れ電気食い虫家電ランキング', fr: 'Détecter les appareils les plus énergivores', pt: 'Aparelhos que mais consomem energia em casa', ko: '가정 내 전력 도둑 가전제품 찾기', it: 'Scoprire gli elettrodomestici che consumano di più' },
  'standby-strom': { de: 'Standby-Stromverbrauch berechnen & senken', en: 'Standby Power & Vampire Draw Calculator', es: 'Calcular el Consumo en Modo Standby', ja: '待機電力の計算と無駄な電気代削減', fr: 'Calculer et réduire la consommation de veille', pt: 'Calcular o consumo em modo de espera (standby)', ko: '대기전력 계산 및 대기전력 차단법', it: 'Calcolare e ridurre i consumi in standby' },
  'e-auto/stromkosten': { de: 'E-Auto Stromkosten berechnen', en: 'Electric Vehicle (EV) Electricity Costs', es: 'Coste Eléctrico de Cargar un Coche Eléctrico', ja: '電気自動車（EV）の充電電気代シミュレーター', fr: 'Coût de l\'électricité pour voiture électrique (VE)', pt: 'Custos de eletricidade para carros elétricos (VE)', ko: '전기차(EV) 충전 요금 및 전기세 계산', it: 'Costi di ricarica per auto elettrica' },
  'e-auto/ladekosten-rechner': { de: 'E-Auto Ladekosten-Rechner', en: 'EV Charging Cost Calculator', es: 'Calculadora de Coste de Carga de Coche Eléctrico', ja: 'EV充電コスト計算機（自宅・急速充電）', fr: 'Calculateur de coût de recharge pour véhicule électrique', pt: 'Calculadora de custos de carregamento de veículos elétricos', ko: '전기차 충전 비용 계산기', it: 'Calcolatore costi di ricarica auto elettrica' },
  'e-auto/kosten-pro-100-km': { de: 'E-Auto Stromkosten pro 100 km', en: 'EV Electricity Cost per 100 km', es: 'Coste Eléctrico por cada 100 km de Coche Eléctrico', ja: 'EVの走行100kmあたりの電気代', fr: 'Coût en électricité par 100 km en voiture électrique', pt: 'Custo de eletricidade por 100 km em carro elétrico', ko: '전기차 100km 주행당 전기요금', it: 'Costo elettrico per 100 km in auto elettrica' },
  'waermepumpe/stromverbrauch': { de: 'Wärmepumpe Stromverbrauch berechnen', en: 'Heat Pump Electricity Consumption', es: 'Consumo Eléctrico de una Bomba de Calor', ja: 'ヒートポンプ式給湯・暖房の消費電力計算', fr: 'Consommation électrique d\'une pompe à chaleur (PAC)', pt: 'Consumo de eletricidade de bomba de calor', ko: '히트펌프 전력 소비량 계산기', it: 'Consumo di energia elettrica della pompa di calore' },
  'waermepumpe/stromkosten': { de: 'Wärmepumpe Stromkosten berechnen', en: 'Heat Pump Operating Electricity Costs', es: 'Costes de Electricidad de una Bomba de Calor', ja: 'ヒートポンプ暖房の年間電気代シミュレーター', fr: 'Coût de l\'électricité pour pompe à chaleur', pt: 'Custos de eletricidade da bomba de calor', ko: '히트펌프 연간 난방 전기세', it: 'Costi annuali dell\'energia per pompa di calore' },
  'waermepumpe/stromverbrauch-rechner': { de: 'Wärmepumpen-Stromkostenrechner', en: 'Heat Pump Power Cost Calculator', es: 'Calculadora de Consumo de Bomba de Calor', ja: 'ヒートポンプ消費電力＆電気代計算機', fr: 'Calculateur de consommation pour pompe à chaleur', pt: 'Calculadora de eletricidade para bomba de calor', ko: '히트펌프 전력 요금 계산기', it: 'Calcolatore consumi per pompa di calore' },
  'photovoltaik/eigenverbrauch-rechner': { de: 'PV Eigenverbrauchsrechner (Solarstrom)', en: 'Solar PV Self-Consumption & Savings Calculator', es: 'Calculadora de Autoconsumo Solar Fotovoltaico', ja: '太陽光発電自家消費率＆電気代削減計算機', fr: 'Calculateur d\'autoconsommation solaire photovoltaïque', pt: 'Calculadora de autoconsumo solar fotovoltaico', ko: '태양광 발전 자가소비 및 전기요금 절감 계산기', it: 'Calcolatore autoconsumo solare fotovoltaico' },
  'balkonkraftwerk/stromkosten-sparen': { de: 'Balkonkraftwerk Stromkosten sparen', en: 'Balcony Solar Power Plant Savings Calculator', es: 'Ahorro con Kit Solar de Balcón (Plug-in)', ja: 'ベランダ太陽光発電（プラグインソーラー）節約計算', fr: 'Économies avec un kit solaire de balcon prêt à brancher', pt: 'Poupança com kit solar de varanda plug-in', ko: '베란다 미니 태양광 발전기 절감액 계산기', it: 'Risparmio con impianto fotovoltaico da balcone plug-and-play' },
};

function generate10TopicFaqs(topicName: string, baseKwh: number, costM: number, lang: SupportedLang) {
  if (lang === 'de') {
    return [
      { question: `Was ist ein normaler Richtwert für ${topicName}?`, answer: `Für ${topicName} liegt der durchschnittliche Richtwert bei ca. ${baseKwh} kWh pro Jahr, was monatlichen Gesamtkosten von rund ${costM} € entspricht.` },
      { question: `Wie berechnen sich die monatlichen Stromkosten für ${topicName}?`, answer: `Formel: (Jahresverbrauch in kWh × Arbeitspreis in €/kWh ÷ 12) + Grundpreis. Bei ${baseKwh} kWh und 35 ct/kWh ergibt dies ca. ${costM} € im Monat.` },
      { question: `Welche Faktoren beeinflussen die Stromkosten bei ${topicName} am stärksten?`, answer: `Die stärksten Preistreiber sind elektrische Warmwasserbereitung, veraltete Haushaltsgeräte (über 10 Jahre alt), Homeoffice-Nutzung und der gewählte Stromtarif.` },
      { question: `Wie viel Strom verbraucht man bei ${topicName} durchschnittlich pro Tag?`, answer: `Der durchschnittliche tägliche Stromverbrauch liegt bei rund ${(baseKwh / 365).toFixed(1).replace('.', ',')} kWh pro Tag.` },
      { question: `Warum verbrauchen manche Haushalte bei ${topicName} deutlich mehr?`, answer: `Häufige Gründe sind Durchlauferhitzer im Bad, Heizlüfter im Winter, dauerhaft betriebene Server oder Gaming-PCs sowie schlechte Gerätedichtungen.` },
      { question: `Wie lässt sich der Stromverbrauch bei ${topicName} sofort um 15–25 % senken?`, answer: `Durch konsequentes Ausschalten von Standby-Geräten, Einsatz von LED-Lampen, Waschen bei 30 °C im Eco-Modus und richtige Kühlschranktemperaturen (7 °C).` },
      { question: `Wie viel Geld spart ein Stromanbieterwechsel bei ${topicName}?`, answer: `Durch den Wechsel aus der örtlichen Grundversorgung zu einem günstigen Ökostromtarif lassen sich jährlich 150 bis 400 € einsparen.` },
      { question: `Welchen Anteil hat Warmwasser am Verbrauch bei ${topicName}?`, answer: `Wird Warmwasser elektrisch erzeugt (Boiler/Durchlauferhitzer), macht dies etwa 25 bis 35 % des gesamten Stromverbrauchs aus.` },
      { question: `Wie überprüfe ich meine Jahresstromabrechnung für ${topicName}?`, answer: `Vergleiche den abgelesenen Zählerstand mit der Rechnung, prüfe den Arbeitspreis und teile den Jahresverbrauch durch 12, um deinen echten Monatsabschlag zu ermitteln.` },
      { question: `Lohnt sich ein Balkonkraftwerk oder Solarmodul bei ${topicName}?`, answer: `Ja, ein 800-Watt-Balkonkraftwerk erzeugt jährlich ca. 600–800 kWh Strom und senkt die Stromrechnung um ca. 200 bis 280 € jedes Jahr.` }
    ];
  } else if (lang === 'en') {
    return [
      { question: `What is a standard benchmark for ${topicName}?`, answer: `For ${topicName}, standard annual consumption averages approx. ${baseKwh} kWh per year, resulting in monthly power costs of around €${costM}.` },
      { question: `How do you calculate monthly electricity costs for ${topicName}?`, answer: `Formula: (Annual kWh × Unit Rate in €/kWh ÷ 12) + Standing charge. At ${baseKwh} kWh and €0.35/kWh, this totals approx. €${costM} per month.` },
      { question: `What factors have the biggest impact on electricity costs for ${topicName}?`, answer: `The primary cost drivers are electric water heating, older appliances (>10 years old), home office workstations, and your contracted unit rate.` },
      { question: `How many kWh are consumed per day on average for ${topicName}?`, answer: `Daily electricity consumption averages roughly ${(baseKwh / 365).toFixed(1)} kWh per day.` },
      { question: `Why do some households use significantly more electricity for ${topicName}?`, answer: `Common causes include continuous instant water heaters, winter space heaters, always-on desktop servers or gaming rigs, and degraded door seals on refrigeration.` },
      { question: `How can you immediately lower consumption by 15–25% for ${topicName}?`, answer: `By turning off standby vampires, using 100% LED lighting, washing at 30°C in Eco mode, and keeping fridges at 7°C (45°F).` },
      { question: `How much money can you save by switching energy suppliers for ${topicName}?`, answer: `Switching from expensive standard default utility tariffs to competitive green energy plans typically saves €150 to €400 every year.` },
      { question: `What proportion of electricity goes to water heating for ${topicName}?`, answer: `When domestic water is heated electrically (immersion/instant heaters), it represents 25% to 35% of total household power draw.` },
      { question: `How do you properly check your annual electricity bill for ${topicName}?`, answer: `Cross-check your physical meter reading against the invoiced reading, verify your active unit rate, and confirm your monthly direct debit reflects actual usage.` },
      { question: `Is a plug-in balcony solar system worth it for ${topicName}?`, answer: `Yes, an 800W plug-in solar kit generates 600–800 kWh annually, reducing your electricity bill by €200 to €280 every year.` }
    ];
  } else if (lang === 'es') {
    return [
      { question: `¿Cuál es el valor medio de referencia para ${topicName}?`, answer: `Para ${topicName}, el consumo anual promedio ronda los ${baseKwh} kWh al año, lo que supone un coste mensual de unos ${costM} €.` },
      { question: `¿Cómo se calculan los costes mensuales de electricidad para ${topicName}?`, answer: `Fórmula: (Consumo anual kWh × Precio del kWh ÷ 12) + Término fijo. A 0,35 €/kWh supone aproximadamente ${costM} € al mes.` },
      { question: `¿Qué factores influyen más en el gasto eléctrico de ${topicName}?`, answer: `El termo eléctrico, electrodomésticos antiguos de más de 10 años, el teletrabajo intensivo y la tarifa de luz contratada.` },
      { question: `¿Cuántos kWh se consumen al día de media en ${topicName}?`, answer: `El consumo medio diario se sitúa en torno a ${(baseKwh / 365).toFixed(1).replace('.', ',')} kWh al día.` },
      { question: `¿Por qué algunas viviendas gastan el doble de luz en ${topicName}?`, answer: `Por termos eléctricos mal aislados, calefactores de resistencia, ordenadores de alta potencia en reposo y frigoríficos defectuosos.` },
      { question: `¿Cómo reducir el gasto de luz entre un 15 % y un 25 % en ${topicName}?`, answer: `Eliminando el standby, usando bombillas LED, lavando en frío (30 °C) en modo Eco y fijando el frigorífico en 7 °C.` },
      { question: `¿Cuánto se ahorra cambiando de compañía eléctrica para ${topicName}?`, answer: `Cambiar de tarifa en el mercado libre a una oferta competitiva ahorra habitualmente entre 150 y 400 € al año.` },
      { question: `¿Qué porcentaje del consumo se debe al agua caliente en ${topicName}?`, answer: `Si el agua caliente se genera con termo eléctrico, supone entre el 25 % y el 35 % de la factura eléctrica total.` },
      { question: `¿Cómo revisar la factura de la luz en ${topicName} para detectar errores?`, answer: `Comprueba que la lectura no sea estimada, verifica el precio por kWh y ajusta la potencia contratada si tienes margen.` },
      { question: `¿Merece la pena un kit solar de balcón para ${topicName}?`, answer: `Sí, un kit solar de 800 W genera entre 600 y 800 kWh al año, ahorrando entre 200 y 280 € anuales en la factura.` }
    ];
  } else if (lang === 'ja') {
    return [
      { question: `${topicName}における標準的な年間電力消費量の目安は？`, answer: `${topicName}における年間平均消費電力量は約${baseKwh} kWhで、月々の平均電気代は約${costM} €（約7,500〜9,000円）が目安です。` },
      { question: `${topicName}の月額電気料金の正確な計算式は？`, answer: `計算式: （年間消費量kWh × 単価€/kWh ÷ 12）＋ 基本料金。単価0.35€の場合、月額約${costM} €となります。` },
      { question: `${topicName}で電気代が跳ね上がる最大の原因は何ですか？`, answer: `電気給湯器の使用、10年以上前の旧型家電、待機電力の放置、長時間のエアコンやファンヒーター稼働が主な原因です。` },
      { question: `${topicName}では1日あたり何kWhの電気を消費しますか？`, answer: `1日あたりの平均消費電力量は約${(baseKwh / 365).toFixed(1)} kWhとなります。` },
      { question: `同じ条件なのに電気代が平均より高くなる理由は？`, answer: `高出力ヒーターの多用、ゲーミングPCのつけっぱなし、冷蔵庫のパッキン劣化、高額な電力プランの契約が考えられます。` },
      { question: `電気代を今すぐ15〜25%カットする最も効果的な方法は？`, answer: `節電タップでの待機電力遮断、LED照明の導入、洗濯機や食洗機のエコモード活用、冷蔵庫の適正温度設定（7℃）です。` },
      { question: `電力会社の乗り換え比較で年間いくら節約できますか？`, answer: `従量単価の安い電力プランに切り替えることで、年間150〜400 €（約2.5万〜6万円）の削減が可能です。` },
      { question: `給湯（お湯）にかかる電気代の割合は全体のどれくらい？`, answer: `電気温水器や電気ボイラーを使用している場合、家庭全体の電気使用量の約25〜35%を給湯が占めます。` },
      { question: `電気料金の請求書・明細書で確認すべき重要ポイントは？`, answer: `検針値の実測と請求の整合性、契約単価（€/kWh）、基本料金、および前年同月比の消費量を確認します。` },
      { question: `ベランダ太陽光発電（プラグインソーラー）は導入する価値がある？`, answer: `はい、800Wのマイクロソーラーは年間約600〜800 kWhを発電し、年間200〜280 €の電気代を自動削減します。` }
    ];
  } else if (lang === 'fr') {
    return [
      { question: `Quelle est la consommation moyenne de référence pour ${topicName} ?`, answer: `Pour ${topicName}, la consommation annuelle moyenne est d'environ ${baseKwh} kWh par an, soit un coût mensuel moyen de ${costM} €.` },
      { question: `Comment calculer le coût mensuel de l'électricité pour ${topicName} ?`, answer: `Formule : (Consommation annuelle kWh × Prix du kWh ÷ 12) + Abonnement. À 0,35 €/kWh, cela revient à environ ${costM} € par mois.` },
      { question: `Quels facteurs influencent le plus la facture d'électricité pour ${topicName} ?`, answer: `L'eau chaude sanitaire électrique, les appareils vétustes (>10 ans), le télétravail et l'offre d'électricité souscrite.` },
      { question: `Combien de kWh consomme-t-on en moyenne par jour pour ${topicName} ?`, answer: `La consommation moyenne quotidienne est d'environ ${(baseKwh / 365).toFixed(1).replace('.', ',')} kWh par jour.` },
      { question: `Pourquoi certains foyers consomment-ils le double pour ${topicName} ?`, answer: `À cause de ballons d'eau chaude mal isolés, de chauffages d'appoint soufflants, d'ordinateurs allumés 24h/24 et de joints de réfrigérateur usés.` },
      { question: `Comment réduire immédiatement sa consommation de 15 à 25 % pour ${topicName} ?`, answer: `En coupant les veilles, en passant aux ampoules LED, en lavant à 30 °C en mode Éco et en réglant le frigo à 7 °C.` },
      { question: `Combien économise-t-on en changeant de fournisseur pour ${topicName} ?`, answer: `Changer pour une offre de marché compétitive permet d'économiser entre 150 et 400 € chaque année.` },
      { question: `Quelle part représente l'eau chaude dans la consommation de ${topicName} ?`, answer: `Avec un ballon électrique, l'eau chaude représente entre 25 % et 35 % de la consommation totale du logement.` },
      { question: `Comment vérifier sa facture annuelle pour ${topicName} ?`, answer: `Vérifiez l'index réel du compteur, comparez le prix du kWh facturé et vérifiez l'ajustement de vos mensualités.` },
      { question: `Un kit solaire de balcon est-il rentable pour ${topicName} ?`, answer: `Oui, un kit solaire 800 W produit 600 à 800 kWh par an et réduit la facture de 200 à 280 € par an.` }
    ];
  } else if (lang === 'pt') {
    return [
      { question: `Qual é o consumo médio anual de referência para ${topicName}?`, answer: `Para ${topicName}, o consumo médio anual ronda os ${baseKwh} kWh por ano, correspondendo a uma despesa mensal de cerca de ${costM} €.` },
      { question: `Como calcular a fatura mensal de eletricidade para ${topicName}?`, answer: `Fórmula: (Consumo anual kWh × Preço por kWh ÷ 12) + Termo fixo. A 0,35 €/kWh resulta em cerca de ${costM} € mensais.` },
      { question: `Quais os fatores que mais aumentam a fatura em ${topicName}?`, answer: `Termoacumuladores elétricos, aparelhos com mais de 10 anos, computadores de alto desempenho e a tarifa contratada.` },
      { question: `Quantos kWh se consomem por dia em média para ${topicName}?`, answer: `O consumo médio diário situa-se em cerca de ${(baseKwh / 365).toFixed(1).replace('.', ',')} kWh por dia.` },
      { question: `Porque é que algumas habitações gastam muito mais eletricidade em ${topicName}?`, answer: `Devido a aquecedores elétricos no inverno, termoacumuladores antigos, computadores sempre ligados e fracos isolamentos térmicos.` },
      { question: `Como poupar de 15% a 25% na fatura de eletricidade em ${topicName}?`, answer: `Desligando o standby, utilizando iluminação LED, lavando a 30 °C em modo Eco e regulando o frigorífico para 7 °C.` },
      { question: `Quanto se poupa ao mudar de fornecedor de eletricidade para ${topicName}?`, answer: `Mudar para um plano de eletricidade mais económico permite poupar entre 150 e 400 € por ano.` },
      { question: `Qual a percentagem gasta em aquecimento de água em ${topicName}?`, answer: `Com termoacumulador elétrico, o aquecimento de água representa entre 25% e 35% de toda a energia gasta.` },
      { question: `Como verificar a fatura de eletricidade para ${topicName}?`, answer: `Confirme a contagem real do contador, verifique o preço do kWh e certifique-se de que a potência contratada é adequada.` },
      { question: `Compensa instalar um kit solar de varanda para ${topicName}?`, answer: `Sim, um kit solar plug-in de 800 W gera 600 a 800 kWh por ano e reduz a fatura em 200 a 280 € anuais.` }
    ];
  } else if (lang === 'ko') {
    return [
      { question: `${topicName}의 연간 표준 전력 소비량 기준은?`, answer: `${topicName}의 경우 연간 표준 전력 소비량은 약 ${baseKwh} kWh이며, 월평균 전기요금은 약 ${costM} € 수준입니다.` },
      { question: `${topicName}의 월 전기요금 계산 공식은?`, answer: `계산 공식: (연간 전력량kWh × 단가€/kWh ÷ 12) ＋ 월 기본요금. 단가 0.35€ 적용 시 월 약 ${costM} €가 산출됩니다.` },
      { question: `${topicName}에서 전기요금이 과다 청구되는 주원인은?`, answer: `전기온수기 가동, 10년 이상 된 구형 가전제품, 상시 대기전력 방치, 전기 온풍기 과다 사용이 주된 요인입니다.` },
      { question: `${topicName}에서는 하루에 전기를 평균 몇 kWh 소비하나요?`, answer: `하루 평균 전력 소비량은 약 ${(baseKwh / 365).toFixed(1)} kWh입니다.` },
      { question: `동일한 조건인데 다른 집보다 전기세가 2배 많이 나오는 이유는?`, answer: `단열이 부족한 온수기, 고출력 온풍기 연속 사용, 게이밍 PC 및 서버 24시간 가동, 노후 냉장고 패킹 손상이 원인입니다.` },
      { question: `일상에서 전기요금을 15~25% 즉시 절감하는 방법은?`, answer: `절전 멀티탭 사용, 냉장고 온도 7°C 설정, LED 조명 교체, 세탁기 30°C 에코 모드 활용으로 손쉽게 달성할 수 있습니다.` },
      { question: `전력 공급사를 변경하면 연간 얼마나 절약할 수 있나요?`, answer: `저렴한 알뜰 전력 플랜으로 변경 시 연간 150~400 €의 비용을 아낄 수 있습니다.` },
      { question: `온수 공급(급탕)이 전체 전기 소비에서 차지하는 비중은?`, answer: `전기온수기를 사용하는 경우 전체 가정 전기 소비량의 약 25~35%가 온수 공급에 사용됩니다.` },
      { question: `${topicName} 전기요금 고지서에서 반드시 확인할 항목은?`, answer: `실제 계량기 지침과 청구 지침의 일치 여부, 적용된 kWh당 단가, 기본요금 및 월간 사용량 추이를 확인합니다.` },
      { question: `베란다 미니 태양광 발전기를 설치하면 경제성이 있나요?`, answer: `네, 800W 미니 태양광 발전기는 연간 600~800 kWh를 생산하여 매년 200~280 €의 전기세를 자동으로 절감합니다.` }
    ];
  } else {
    return [
      { question: `Qual è il valore di riferimento medio per ${topicName}?`, answer: `Per ${topicName}, il consumo medio annuo è di circa ${baseKwh} kWh, pari a una spesa mensile stimata di circa ${costM} €.` },
      { question: `Come si calcola la spesa mensile di luce per ${topicName}?`, answer: `Formula: (Consumo annuo kWh × Prezzo al kWh ÷ 12) + Quota fissa. A 0,35 €/kWh corrisponde a circa ${costM} € al mese.` },
      { question: `Quali sono i fattori che incidono maggiormente su ${topicName}?`, answer: `Lo scaldabagno elettrico, gli elettrodomestici con più di 10 anni, le ore di utilizzo quotidiano e la tariffa contrattuale applicata.` },
      { question: `Quanti kWh si consumano in media al giorno per ${topicName}?`, answer: `Il consumo medio giornaliero è di circa ${(baseKwh / 365).toFixed(1).replace('.', ',')} kWh al giorno.` },
      { question: `Perché alcune famiglie consumano molto di più per ${topicName}?`, answer: `A causa di scaldabagni elettrici mal isolati, stufette elettriche, computer sempre accesi e guarnizioni dei frigoriferi usurate.` },
      { question: `Come ridurre subito i consumi elettrici del 15–25% per ${topicName}?`, answer: `Eliminando lo standby, usando lampadine a LED, lavando a 30 °C in modalità Eco e impostando il frigo a 7 °C.` },
      { question: `Quanto si risparmia cambiando fornitore di energia per ${topicName}?`, answer: `Passando a offerte vantaggiose nel mercato libero si possono risparmiare da 150 a 400 € all'anno.` },
      { question: `Che percentuale rappresenta l'acqua calda nei consumi di ${topicName}?`, answer: `Se l'acqua calda è prodotta con scaldabagno elettrico, incide per circa il 25–35% sui consumi elettrici totali.` },
      { question: `Come controllare la bolletta dell'energia elettrica per ${topicName}?`, answer: `Verifica l'autolettura del contatore, controlla il costo della materia prima per kWh e adegua la potenza impegnata.` },
      { question: `Conviene installare un kit fotovoltaico da balcone per ${topicName}?`, answer: `Sì, un kit fotovoltaico plug-and-play da 800 W produce 600–800 kWh annui, riducendo la bolletta di 200–280 € all'anno.` }
    ];
  }
}

function buildAllTopics() {
  const fullTopics: Record<SupportedLang, Record<string, any>> = {
    de: {}, en: {}, es: {}, ja: {}, fr: {}, pt: {}, ko: {}, it: {}
  };

  for (const lang of languages) {
    fullTopics[lang] = {};
    for (const def of topicDefs) {
      const topicName = names[def.slug]?.[lang] || def.slug;
      
      const isHousehold = def.slug.includes('person') || def.slug.includes('wohnung') || def.slug.includes('haus') || def.slug.includes('durchschnitt');
      const isPrice = def.slug.includes('preis') || def.slug.includes('tarif');
      const isBill = def.slug.includes('rechnung');
      const isTech = def.slug.includes('e-auto') || def.slug.includes('waermepumpe') || def.slug.includes('photovoltaik') || def.slug.includes('balkonkraftwerk');
      
      let category = 'Haushalt';
      if (lang === 'en') category = isHousehold ? 'Household Benchmarks' : isPrice ? 'Electricity Rates' : isBill ? 'Energy Bill' : isTech ? 'Clean Energy' : 'Energy Guide';
      else if (lang === 'es') category = isHousehold ? 'Hogar' : isPrice ? 'Tarifas Eléctricas' : isBill ? 'Factura de Luz' : isTech ? 'Energía Limpia' : 'Guía de Ahorro';
      else if (lang === 'ja') category = isHousehold ? '世帯別目安' : isPrice ? '電気料金単価' : isBill ? '請求書・明細' : isTech ? '再エネ・EV' : '省エネガイド';
      else if (lang === 'fr') category = isHousehold ? 'Foyer' : isPrice ? 'Tarifs d\'électricité' : isBill ? 'Facture' : isTech ? 'Énergie Verte' : 'Guide Éco';
      else if (lang === 'pt') category = isHousehold ? 'Habitação' : isPrice ? 'Tarifas de Luz' : isBill ? 'Fatura' : isTech ? 'Energia Limpa' : 'Dicas de Poupança';
      else if (lang === 'ko') category = isHousehold ? '가구별 기준' : isPrice ? '전력 요금' : isBill ? '고지서' : isTech ? '친환경 기술' : '절전 가이드';
      else if (lang === 'it') category = isHousehold ? 'Famiglia' : isPrice ? 'Tariffe Luce' : isBill ? 'Bolletta' : isTech ? 'Energia Rinnovabile' : 'Guida Risparmio';

      let shortDescription = '';
      if (lang === 'de') shortDescription = `Ausführlicher Ratgeber und interaktiver Rechner für ${topicName}. Ermittle Richtwerte (ca. ${def.baseKwh} kWh/Jahr, ca. ${def.costM} €/Monat) und optimiere deine laufenden Stromkosten.`;
      else if (lang === 'en') shortDescription = `Comprehensive guide and live calculation tool for ${topicName}. Calculate standard consumption benchmarks (approx. ${def.baseKwh} kWh/year, ~€${def.costM}/month) and reduce your energy bills.`;
      else if (lang === 'es') shortDescription = `Guía completa y calculadora interactiva para ${topicName}. Consulta valores de referencia oficiales (~${def.baseKwh} kWh/año, ~${def.costM} €/mes) y ahorra en tu factura de luz.`;
      else if (lang === 'ja') shortDescription = `${topicName}に関する公式基準データとリアルタイム計算機。標準的な年間電力使用量（年間約${def.baseKwh} kWh、月額約${def.costM} €）を確認し、無駄な電気代を確実に削減します。`;
      else if (lang === 'fr') shortDescription = `Guide complet et simulateur de calcul pour ${topicName}. Estimez vos besoins énergétiques moyens (~${def.baseKwh} kWh/an, ~${def.costM} €/mois) et diminuez vos factures.`;
      else if (lang === 'pt') shortDescription = `Guia detalhado e simulador para ${topicName}. Calcule consumos de referência (~${def.baseKwh} kWh/ano, ~${def.costM} €/mês) e reduza os custos com energia elétrica.`;
      else if (lang === 'ko') shortDescription = `${topicName}에 대한 상세 가이드 및 실시간 계산 시뮬레이터입니다. 표준 소비 기준(연간 약 ${def.baseKwh} kWh, 월 약 ${def.costM} €)을 확인하고 전기요금을 효과적으로 절감하세요.`;
      else shortDescription = `Guida dettagliata e calcolatore per ${topicName}. Scopri i dati di riferimento (~${def.baseKwh} kWh/anno, ~${def.costM} €/mese) e riduci i consumi della bolletta elettrica.`;

      let savingAdvice: string[] = [];
      if (lang === 'de') {
        savingAdvice = [
          'Standby-Verbrauch aller elektronischen Geräte mit schaltbaren Steckerleisten stoppen.',
          'Großgeräte (Waschmaschine, Geschirrspüler) immer voll beladen im Eco-Modus betreiben.',
          'Kühlgeräte optimal einstellen (Kühlschrank 7 °C, Gefriertruhe -18 °C).',
          'Regelmäßig Strompreise vergleichen und günstige Neukundentarife nutzen.',
          'Alte Glühbirnen konsequent durch sparsame LED-Leuchtmittel ersetzen.'
        ];
      } else if (lang === 'en') {
        savingAdvice = [
          'Eliminate continuous phantom standby power using switchable power strips.',
          'Always run dishwashers and washing machines with full loads in Eco mode.',
          'Optimize thermostat settings: Refrigerator at 7 °C (45 °F) and freezer at -18 °C (0 °F).',
          'Compare electricity tariffs annually to secure the best per-kWh unit rates.',
          'Replace all traditional bulbs with high-efficiency LED lights.'
        ];
      } else if (lang === 'es') {
        savingAdvice = [
          'Elimina el consumo fantasma en reposo utilizando regletas con interruptor.',
          'Usa siempre programas Eco a carga completa en lavadora y lavavajillas.',
          'Ajusta la nevera a 7 °C y el congelador a -18 °C para evitar gastos innecesarios.',
          'Compara ofertas de electricidad en el mercado libre para obtener mejores precios por kWh.',
          'Sustituye toda la iluminación por bombillas LED de bajo consumo.'
        ];
      } else if (lang === 'ja') {
        savingAdvice = [
          'スイッチ付き節電タップで待機電力を100%カットする。',
          '洗濯機や食洗機はまとめ洗いでエコモードを活用する。',
          '冷蔵庫は7℃、冷凍庫は-18℃に設定して冷却効率を高める。',
          '電力会社の乗り換え比較を行い、従量単価の安いプランを選ぶ。',
          '照明をすべて高効率なLED照明器具へ交換する。'
        ];
      } else if (lang === 'fr') {
        savingAdvice = [
          'Supprimer les veilles grâce à des multiprises coupe-veille.',
          'Utiliser systématiquement les programmes Éco sur les appareils de lavage.',
          'Régler le réfrigérateur à 7 °C et le congélateur à -18 °C.',
          'Comparer les offres d\'électricité pour trouver le tarif au kWh le plus avantageux.',
          'Équiper l\'ensemble du logement d\'ampoules LED performantes.'
        ];
      } else if (lang === 'pt') {
        savingAdvice = [
          'Eliminar o consumo em modo de espera através de tomadas com interruptor.',
          'Utilizar os programas Eco com carga completa na máquina de lavar.',
          'Manter o frigorífico a 7 °C e o congelador a -18 °C.',
          'Comparar tarifas de eletricidade no mercado livre periodicamente.',
          'Substituir a iluminação por lâmpadas LED de alta eficiência.'
        ];
      } else if (lang === 'ko') {
        savingAdvice = [
          '스위치형 절전 멀티탭을 활용하여 대기전력을 완전히 차단합니다.',
          '세탁기와 식기세척기는 항상 세탁물을 모아 에코 모드로 작동합니다.',
          '냉장실 7°C, 냉동실 -18°C로 설정하여 불필요한 냉각 전력을 줄입니다.',
          '전력 공급사 요금제를 정기적으로 비교하여 알뜰 요금제로 변경합니다.',
          '실내 모든 조명을 고효율 LED 조명으로 교체합니다.'
        ];
      } else {
        savingAdvice = [
          'Eliminare i consumi in standby utilizzando ciabatte con interruttore.',
          'Utilizzare sempre la modalità Eco per lavatrici e lavastoviglie a pieno carico.',
          'Impostare il frigorifero a 7 °C e il congelatore a -18 °C.',
          'Confrontare periodicamente le offerte luce per ottenere il miglior prezzo per kWh.',
          'Installare lampadine a LED ad alta efficienza energetica.'
        ];
      }

      fullTopics[lang][def.slug] = {
        title: topicName,
        category,
        shortDescription,
        savingAdvice,
        faq: generate10TopicFaqs(topicName, def.baseKwh, def.costM, lang)
      };
    }
  }

  return fullTopics;
}

const allData = buildAllTopics();

const topicsTsPath = path.join(process.cwd(), 'src/i18n/topics.ts');
const fileOutput = `import type { SupportedLanguage } from './languages';

export interface LocalizedTopic {
  title: string;
  category: string;
  shortDescription: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const topicTranslations: Record<SupportedLanguage, Record<string, LocalizedTopic>> = ${JSON.stringify(allData, null, 2)};

export function getLocalizedTopic(slug: string, lang: SupportedLanguage = 'de'): LocalizedTopic | null {
  return topicTranslations[lang]?.[slug] || topicTranslations.de?.[slug] || null;
}
`;

fs.writeFileSync(topicsTsPath, fileOutput, 'utf-8');
console.log('Successfully generated complete rich topics with 10 high-intent PAA FAQs across all 8 languages!');
