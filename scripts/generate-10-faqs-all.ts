import fs from 'node:fs';
import path from 'node:path';
import { appliances, type Appliance } from '../src/data/appliances';

const langs = ['de', 'en', 'es', 'ja', 'fr', 'pt', 'ko', 'it'] as const;
type SupportedLang = typeof langs[number];

// Appliance specifications dictionary
const applianceSpecs: Record<string, {
  slug: string;
  names: Record<SupportedLang, string>;
  categories: Record<SupportedLang, string>;
  watt: number;
  annualKwh: number;
  annualCost: number;
  costPerHour: number;
  costPerUse: string;
}> = {
  kuehlschrank: {
    slug: 'kuehlschrank',
    names: { de: 'Kühlschrank', en: 'Refrigerator', es: 'Frigorífico', ja: '冷蔵庫', fr: 'Réfrigérateur', pt: 'Frigorífico', ko: '냉장고', it: 'Frigorifero' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・調理家電', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 90, annualKwh: 120, annualCost: 42.0, costPerHour: 0.005, costPerUse: '0,12 € / Tag'
  },
  waschmaschine: {
    slug: 'waschmaschine',
    names: { de: 'Waschmaschine', en: 'Washing Machine', es: 'Lavadora', ja: '洗濯機', fr: 'Lave-linge', pt: 'Máquina de Lavar Roupa', ko: '세탁기', it: 'Lavatrice' },
    categories: { de: 'Haushalt & Reinigung', en: 'Household & Cleaning', es: 'Hogar y Limpieza', ja: '生活・洗濯・掃除家電', fr: 'Ménage & Entretien', pt: 'Casa e Limpeza', ko: '생활/세탁 가전', it: 'Casa e Pulizia' },
    watt: 2000, annualKwh: 140, annualCost: 49.0, costPerHour: 0.70, costPerUse: '0,25 € / Waschgang'
  },
  trockner: {
    slug: 'trockner',
    names: { de: 'Wäschetrockner', en: 'Tumble Dryer', es: 'Secadora de Ropa', ja: '衣類乾燥機', fr: 'Sèche-linge', pt: 'Secadora de Roupa', ko: '의류건조기', it: 'Asciugatrice' },
    categories: { de: 'Haushalt & Reinigung', en: 'Household & Cleaning', es: 'Hogar y Limpieza', ja: '生活・洗濯・掃除家電', fr: 'Ménage & Entretien', pt: 'Casa e Limpeza', ko: '생활/세탁 가전', it: 'Casa e Pulizia' },
    watt: 1500, annualKwh: 180, annualCost: 63.0, costPerHour: 0.525, costPerUse: '0,45 € / Ladung'
  },
  geschirrspueler: {
    slug: 'geschirrspueler',
    names: { de: 'Geschirrspüler', en: 'Dishwasher', es: 'Lavavajillas', ja: '食器洗い機（食洗機）', fr: 'Lave-vaisselle', pt: 'Máquina de Lavar Louça', ko: '식기세척기', it: 'Lavastoviglie' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・調理家電', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 1800, annualKwh: 160, annualCost: 56.0, costPerHour: 0.63, costPerUse: '0,28 € / Spülgang'
  },
  backofen: {
    slug: 'backofen',
    names: { de: 'Backofen', en: 'Electric Oven', es: 'Horno Eléctrico', ja: 'オーブン', fr: 'Four électrique', pt: 'Forno Elétrico', ko: '전기오븐', it: 'Forno Elettrico' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・調理家電', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 2500, annualKwh: 150, annualCost: 52.5, costPerHour: 0.875, costPerUse: '0,55 € / Nutzung'
  },
  herd: {
    slug: 'herd',
    names: { de: 'Elektroherd & Induktion', en: 'Electric & Induction Cooktop', es: 'Placa de Cocina e Inducción', ja: 'IHクッキングヒーター・電気コンロ', fr: 'Plaque de cuisson & Induction', pt: 'Placa de Fogão e Indução', ko: '전기레인지 및 인덕션', it: 'Piano Cottura a Induzione' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・調理家電', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 2000, annualKwh: 220, annualCost: 77.0, costPerHour: 0.70, costPerUse: '0,35 € / Kochen'
  },
  wasserkocher: {
    slug: 'wasserkocher',
    names: { de: 'Wasserkocher', en: 'Electric Kettle', es: 'Hervidor de Agua', ja: '電気ケトル', fr: 'Bouilloire électrique', pt: 'Chaleira Elétrica', ko: '전기주전자', it: 'Bollitore Elettrico' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・調理家電', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 2200, annualKwh: 80, annualCost: 28.0, costPerHour: 0.77, costPerUse: '0,03 € / Kochen'
  },
  kaffeemaschine: {
    slug: 'kaffeemaschine',
    names: { de: 'Kaffeevollautomat', en: 'Coffee Machine', es: 'Cafetera Automática', ja: '全自動コーヒーメーカー', fr: 'Machine à café', pt: 'Máquina de Café', ko: '전자동 커피머신', it: 'Macchina da Caffè' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・調理家電', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 1450, annualKwh: 110, annualCost: 38.5, costPerHour: 0.5075, costPerUse: '0,04 € / Tasse'
  },
  fernseher: {
    slug: 'fernseher',
    names: { de: 'Fernseher (Smart TV)', en: 'Smart TV (55-65")', es: 'Televisor Smart TV (55-65")', ja: 'スマートテレビ（55〜65インチ）', fr: 'Téléviseur Smart TV (55-65")', pt: 'Smart TV (55-65")', ko: '스마트 TV (55~65인치)', it: 'Smart TV (55-65 pollici)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 120, annualKwh: 175, annualCost: 61.25, costPerHour: 0.042, costPerUse: '0,17 € / Tag (4h)'
  },
  'gaming-pc': {
    slug: 'gaming-pc',
    names: { de: 'Gaming-PC (High-End)', en: 'Gaming PC (High-End)', es: 'PC Gaming de Gama Alta', ja: 'ゲーミングPC（ハイエンド）', fr: 'PC Gamer Haute Performance', pt: 'PC Gamer High-End', ko: '고사양 게이밍 PC', it: 'PC da Gaming High-End' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 450, annualKwh: 490, annualCost: 171.5, costPerHour: 0.1575, costPerUse: '0,47 € / Session (3h)'
  },
  pc: {
    slug: 'pc',
    names: { de: 'Desktop-PC (Office)', en: 'Desktop PC (Office)', es: 'PC de Sobremesa (Oficina)', ja: 'デスクトップPC（事務用）', fr: 'PC de Bureau (Bureautique)', pt: 'Computador Desktop (Escritório)', ko: '사무용 데스크톱 PC', it: 'PC Desktop (Ufficio)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 120, annualKwh: 200, annualCost: 70.0, costPerHour: 0.042, costPerUse: '0,34 € / Arbeitstag (8h)'
  },
  laptop: {
    slug: 'laptop',
    names: { de: 'Laptop / Notebook', en: 'Laptop / Notebook', es: 'Portátil / Laptop', ja: 'ノートパソコン', fr: 'Ordinateur Portable', pt: 'Portátil / Notebook', ko: '노트북 컴퓨터', it: 'Computer Portatile / Laptop' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 50, annualKwh: 80, annualCost: 28.0, costPerHour: 0.0175, costPerUse: '0,14 € / Arbeitstag (8h)'
  },
  monitor: {
    slug: 'monitor',
    names: { de: 'PC-Monitor (27-32")', en: 'PC Monitor (27-32")', es: 'Monitor de PC (27-32")', ja: 'PCモニター（27〜32インチ）', fr: 'Écran PC (27-32")', pt: 'Monitor de PC (27-32")', ko: 'PC 모니터 (27~32인치)', it: 'Monitor PC (27-32 pollici)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 35, annualKwh: 60, annualCost: 21.0, costPerHour: 0.01225, costPerUse: '0,10 € / Tag'
  },
  ps5: {
    slug: 'ps5',
    names: { de: 'PlayStation 5 (PS5)', en: 'PlayStation 5 (PS5)', es: 'PlayStation 5 (PS5)', ja: 'PlayStation 5（PS5）', fr: 'PlayStation 5 (PS5)', pt: 'PlayStation 5 (PS5)', ko: '플레이스테이션 5 (PS5)', it: 'PlayStation 5 (PS5)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 200, annualKwh: 150, annualCost: 52.5, costPerHour: 0.07, costPerUse: '0,14 € / Gaming (2h)'
  },
  xbox: {
    slug: 'xbox',
    names: { de: 'Xbox Series X', en: 'Xbox Series X', es: 'Xbox Series X', ja: 'Xbox Series X', fr: 'Xbox Series X', pt: 'Xbox Series X', ko: '엑스박스 시리즈 X', it: 'Xbox Series X' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 180, annualKwh: 140, annualCost: 49.0, costPerHour: 0.063, costPerUse: '0,13 € / Gaming (2h)'
  },
  klimaanlage: {
    slug: 'klimaanlage',
    names: { de: 'Klimaanlage (Split-Gerät)', en: 'Air Conditioner (Split System)', es: 'Aire Acondicionado Split', ja: 'エアコン（冷暖房）', fr: 'Climatiseur Split', pt: 'Ar Condicionado Split', ko: '스탠드/벽걸이 에어컨', it: 'Climatizzatore Split' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '空調・冷暖房・季節家電', fr: 'Chauffage & Climatisation', pt: 'Climatização e Aquecimento', ko: '냉난방/계절 가전', it: 'Climatizzazione e Riscaldamento' },
    watt: 900, annualKwh: 450, annualCost: 157.5, costPerHour: 0.315, costPerUse: '1,50 € / Hitzetag'
  },
  ventilator: {
    slug: 'ventilator',
    names: { de: 'Ventilator (Standventilator)', en: 'Standing Fan', es: 'Ventilador de Pie', ja: '扇風機・サーキュレーター', fr: 'Ventilateur sur pied', pt: 'Ventilador de Pé', ko: '스탠드 선풍기/서큘레이터', it: 'Ventilatore a Piantana' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '空調・冷暖房・季節家電', fr: 'Chauffage & Climatisation', pt: 'Climatização e Aquecimento', ko: '냉난방/계절 가전', it: 'Climatizzazione e Riscaldamento' },
    watt: 45, annualKwh: 35, annualCost: 12.25, costPerHour: 0.01575, costPerUse: '0,13 € / Tag (8h)'
  },
  heizluefter: {
    slug: 'heizluefter',
    names: { de: 'Heizlüfter / Radiator', en: 'Electric Fan Heater / Radiator', es: 'Calefactor Eléctrico / Termoventilador', ja: 'セラミックファンヒーター・電気ストーブ', fr: 'Radiateur Soufflant Électrique', pt: 'Termoventilador / Radiador Elétrico', ko: '전기 온풍기 및 히터', it: 'Termoventilatore / Stufetta Elettrica' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '空調・冷暖房・季節家電', fr: 'Chauffage & Climatisation', pt: 'Climatização e Aquecimento', ko: '냉난방/계절 가전', it: 'Climatizzazione e Riscaldamento' },
    watt: 2000, annualKwh: 360, annualCost: 126.0, costPerHour: 0.70, costPerUse: '2,10 € / Tag (3h)'
  },
  luftentfeuchter: {
    slug: 'luftentfeuchter',
    names: { de: 'Luftentfeuchter', en: 'Dehumidifier', es: 'Deshumidificador de Aire', ja: '除湿機（コンプレッサー式）', fr: 'Déshumidificateur d\'air', pt: 'Desumidificador de Ar', ko: '제습기', it: 'Deumidificatore' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '空調・冷暖房・季節家電', fr: 'Chauffage & Climatisation', pt: 'Climatização e Aquecimento', ko: '냉난방/계절 가전', it: 'Climatizzazione e Riscaldamento' },
    watt: 250, annualKwh: 300, annualCost: 105.0, costPerHour: 0.0875, costPerUse: '0,52 € / Tag (6h)'
  },
  aquarium: {
    slug: 'aquarium',
    names: { de: 'Aquarium (100–200 L)', en: 'Aquarium (100–200 L)', es: 'Acuario (100-200 L)', ja: '熱帯魚水槽・アクアリウム（100〜200L）', fr: 'Aquarium (100–200 L)', pt: 'Aquário (100–200 L)', ko: '어항 및 수족관 (100~200L)', it: 'Acquario (100–200 L)' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・特殊設備・屋外', fr: 'Loisirs & Spécial', pt: 'Lazer e Especial', ko: '취미/특수 기기', it: 'Hobby e Dispositivi Speciali' },
    watt: 120, annualKwh: 400, annualCost: 140.0, costPerHour: 0.042, costPerUse: '0,38 € / Tag'
  },
  pool: {
    slug: 'pool',
    names: { de: 'Poolpumpe & Filter', en: 'Pool Pump & Filter System', es: 'Bomba de Piscina y Filtro', ja: '家庭用プール循環ポンプ・フィルター', fr: 'Pompe de piscine et filtration', pt: 'Bomba de Piscina e Filtro', ko: '수영장 펌프 및 여과기', it: 'Pompa per Piscina e Filtro' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・特殊設備・屋外', fr: 'Loisirs & Spécial', pt: 'Lazer e Especial', ko: '취미/특수 기기', it: 'Hobby e Dispositivi Speciali' },
    watt: 600, annualKwh: 700, annualCost: 245.0, costPerHour: 0.21, costPerUse: '1,26 € / Tag (6h)'
  },
  whirlpool: {
    slug: 'whirlpool',
    names: { de: 'Whirlpool / Hot Tub', en: 'Inflatable Hot Tub / Whirlpool', es: 'Jacuzzi Exterior / Spa Hinchable', ja: '屋外ジャグジー・ホットタブ', fr: 'Spa gonflable / Jacuzzi', pt: 'Jacuzzi Insuflável / Spa', ko: '스파 및 온수 자쿠지', it: 'Idromassaggio / Spa Gonfiabile' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・特殊設備・屋外', fr: 'Loisirs & Spécial', pt: 'Lazer e Especial', ko: '취미/특수 기기', it: 'Hobby e Dispositivi Speciali' },
    watt: 2000, annualKwh: 2500, annualCost: 875.0, costPerHour: 0.70, costPerUse: '2,40 € / Tag'
  },
  '3d-drucker': {
    slug: '3d-drucker',
    names: { de: '3D-Drucker (FDM)', en: '3D Printer (FDM)', es: 'Impresora 3D (FDM)', ja: '3Dプリンター（熱溶解積層方式）', fr: 'Imprimante 3D (FDM)', pt: 'Impressora 3D (FDM)', ko: '3D 프린터 (FDM)', it: 'Stampante 3D (FDM)' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・特殊設備・屋外', fr: 'Loisirs & Spécial', pt: 'Lazer e Especial', ko: '취미/특수 기기', it: 'Hobby e Dispositivi Speciali' },
    watt: 150, annualKwh: 120, annualCost: 42.0, costPerHour: 0.0525, costPerUse: '0,42 € / Druck (8h)'
  },
  nas: {
    slug: 'nas',
    names: { de: 'NAS-Server (Heimspeicher)', en: 'NAS Storage Server (24/7)', es: 'Servidor NAS Doméstico (24/7)', ja: '家庭用NASサーバー（24時間稼働）', fr: 'Serveur NAS Domestique (24/7)', pt: 'Servidor NAS Doméstico (24/7)', ko: '가정용 NAS 스토리지 서버', it: 'Server NAS Domestico (24/7)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 30, annualKwh: 220, annualCost: 77.0, costPerHour: 0.0105, costPerUse: '0,21 € / Tag (24h)'
  },
  server: {
    slug: 'server',
    names: { de: 'Home-Server / Homelab', en: 'Home Server / Homelab (24/7)', es: 'Servidor Doméstico / Homelab (24/7)', ja: 'ホームサーバー・自宅ラボ（24時間常時稼働）', fr: 'Serveur Maison / Homelab (24/7)', pt: 'Servidor Caseiro / Homelab (24/7)', ko: '홈 서버 및 홈랩 (24시간 상시 가동)', it: 'Home Server / Homelab (24/7)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・パソコン・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무', it: 'Intrattenimento e Ufficio' },
    watt: 65, annualKwh: 500, annualCost: 175.0, costPerHour: 0.02275, costPerUse: '0,48 € / Tag (24h)'
  }
};

// 10 PAA FAQs generator per appliance
function generate10ApplianceFaqs(app: typeof applianceSpecs['kuehlschrank'], lang: SupportedLang) {
  const name = app.names[lang];
  const w = app.watt;
  const kwh = app.annualKwh;
  const cost = app.annualCost.toFixed(2).replace('.', ',');
  const costH = (w * 0.35 / 1000).toFixed(3).replace('.', ',');
  const costUse = app.costPerUse;

  if (lang === 'de') {
    return [
      { question: `Wie viel Strom verbraucht ein ${name} im Durchschnitt pro Jahr?`, answer: `Ein moderner ${name} verbraucht im Schnitt ca. ${kwh} kWh Strom pro Jahr. Bei 35 ct/kWh entspricht das jährlichen Stromkosten von etwa ${cost} Euro.` },
      { question: `Was kostet 1 Stunde Betrieb von ${name}?`, answer: `Bei einer durchschnittlichen Leistung von ca. ${w} Watt kostet eine Stunde Laufzeit rund ${costH} € (ca. ${(w * 35 / 1000).toFixed(1).replace('.', ',')} Cent).` },
      { question: `Wie hoch sind die monatlichen Stromkosten für ${name}?`, answer: `Die monatlichen Stromkosten für ${name} liegen bei durchschnittlicher Nutzung bei ca. ${(app.annualCost / 12).toFixed(2).replace('.', ',')} € pro Monat.` },
      { question: `Wie viel Watt Leistung hat ein typischer ${name}?`, answer: `Die typische Anschlussleistung liegt bei ca. ${w} Watt. Je nach Betriebszustand und Modell kann die Leistungsaufnahme zwischen ${(w * 0.7).toFixed(0)} W und ${(w * 1.5).toFixed(0)} W schwanken.` },
      { question: `Was kostet ein einzelner Nutzungsvorgang von ${name}?`, answer: `Ein typischer Einsatz von ${name} verursacht Stromkosten von ca. ${costUse}.` },
      { question: `Wie kann man den Stromverbrauch von ${name} sofort um 15–25 % senken?`, answer: `Wähle stets Eco-Programme, vermeide unnötige Volllastzeiten, halte Dichtungen und Filter sauber und schalte das Gerät nach Gebrauch komplett aus.` },
      { question: `Verbraucht ${name} auch Strom im Standby-Modus?`, answer: `Ja, moderne Geräte mit Digitalanzeigen oder Smart-Home-Funktionen ziehen im Standby ca. 0,5 bis 3 Watt (rund 1,50 bis 9,00 € pro Jahr).` },
      { question: `Lohnt sich der Neukauf eines energieeffizienten ${name}?`, answer: `Wenn dein Altgerät älter als 10–12 Jahre ist, spart ein Neugerät der Energieeffizienzklasse A bis C oft 30 bis 50 % Strom, wodurch sich die Anschaffung in 4–6 Jahren amortisiert.` },
      { question: `Wie berechne ich den Stromverbrauch von ${name} exakt selbst?`, answer: `Formel: (Leistung in Watt × Betriebsstunden ÷ 1.000) × Strompreis in €/kWh. Beispiel: ${w} W × 1 h ÷ 1.000 × 0,35 € = ${costH} €.` },
      { question: `Welches ist das sparsamste Programm oder die beste Einstellung für ${name}?`, answer: `Nutze immer das zertifizierte Eco-Programm bzw. die empfohlene Standardtemperatur, da diese bei optimaler Laufzeit am wenigsten Energie pro Durchlauf verbrauchen.` }
    ];
  } else if (lang === 'en') {
    return [
      { question: `How much electricity does a ${name} consume on average per year?`, answer: `A standard ${name} consumes approx. ${kwh} kWh of electricity annually, which amounts to roughly €${cost} in power costs at €0.35/kWh.` },
      { question: `How much does 1 hour of running a ${name} cost?`, answer: `At an average power draw of ${w} Watts, one hour of operation costs approximately €${costH}.` },
      { question: `What are the typical monthly electricity costs for a ${name}?`, answer: `Monthly electricity expenses for a ${name} average around €${(app.annualCost / 12).toFixed(2)} under normal household usage.` },
      { question: `What is the typical power rating in Watts for a ${name}?`, answer: `The typical power rating is approximately ${w} Watts, fluctuating between ${(w * 0.7).toFixed(0)} W and ${(w * 1.5).toFixed(0)} W depending on the active cycle.` },
      { question: `How much does a single cycle or use of a ${name} cost?`, answer: `A single typical cycle or daily use of a ${name} costs roughly ${costUse}.` },
      { question: `How can you immediately cut electricity consumption of a ${name} by 15–25%?`, answer: `Always select Eco modes, run full loads, ensure filters and vents are clean, and avoid unnecessary high-power settings.` },
      { question: `Does a ${name} consume power in standby mode?`, answer: `Yes, modern digital and smart-connected units consume about 0.5 to 3 Watts in standby, adding €1.50 to €9.00 annually to your bill.` },
      { question: `Is it worth replacing an old ${name} with an energy-efficient model?`, answer: `If your existing unit is over 10 years old, upgrading to an energy class A to C model typically cuts power consumption by 30–50%, paying for itself within 4–6 years.` },
      { question: `How do you calculate the exact running costs of a ${name}?`, answer: `Formula: (Power in Watts × Hours ÷ 1,000) × Tariff in €/kWh. Example: ${w} W × 1 hr ÷ 1,000 × €0.35 = €${costH}.` },
      { question: `What is the most energy-efficient setting or program for a ${name}?`, answer: `Always default to the manufacturer certified Eco mode or recommended standard temperature setting for minimal energy draw.` }
    ];
  } else if (lang === 'es') {
    return [
      { question: `¿Cuánto consume un ${name} de media al año?`, answer: `Un ${name} moderno consume una media de ${kwh} kWh de electricidad al año, lo que equivale a unos ${cost} € anuales con una tarifa de 0,35 €/kWh.` },
      { question: `¿Cuánto cuesta 1 hora de funcionamiento de un ${name}?`, answer: `Con una potencia media de unos ${w} Vatios, una hora de uso cuesta aproximadamente ${costH} €.` },
      { question: `¿Cuánto cuesta al mes tener un ${name}?`, answer: `El coste mensual en la factura de la luz ronda los ${(app.annualCost / 12).toFixed(2).replace('.', ',')} € al mes con un uso habitual.` },
      { question: `¿Cuántos vatios de potencia tiene un ${name} típico?`, answer: `La potencia media se sitúa en unos ${w} Vatios, oscilando entre ${(w * 0.7).toFixed(0)} W y ${(w * 1.5).toFixed(0)} W según la fase del ciclo.` },
      { question: `¿Cuánto cuesta un ciclo o uso individual de ${name}?`, answer: `Un uso típico de ${name} supone un gasto de unos ${costUse}.` },
      { question: `¿Cómo reducir el gasto de luz de un ${name} entre un 15 % y un 25 %?`, answer: `Utiliza siempre los programas Eco, mantén limpios los filtros y juntas, y desconéctalo de la corriente si no lo vas a usar.` },
      { question: `¿Consume electricidad un ${name} cuando está en modo reposo (standby)?`, answer: `Sí, los modelos digitales consumen entre 0,5 y 3 Vatios en espera (entre 1,50 y 9,00 € al año).` },
      { question: `¿Merece la pena cambiar un ${name} viejo por uno nuevo eficiente?`, answer: `Si tiene más de 10 años, un modelo nuevo de clase energética A o B ahorra entre un 30 % y un 50 % de luz, amortizándose en 4 a 6 años.` },
      { question: `¿Cómo calcular el consumo exacto de un ${name}?`, answer: `Fórmula: (Vatios × Horas de uso ÷ 1.000) × Precio kWh en €. Ejemplo: ${w} W × 1 h ÷ 1.000 × 0,35 € = ${costH} €.` },
      { question: `¿Cuál es el programa más económico para un ${name}?`, answer: `El modo Eco certificado por el fabricante es el más eficiente al optimizar temperatura y consumo de energía.` }
    ];
  } else if (lang === 'ja') {
    return [
      { question: `${name}の年間平均電気消費量と年間電気代は？`, answer: `一般的な${name}の年間消費電力量は約${kwh} kWhで、単価0.35 €/kWhの場合、年間電気代は約${cost} €（約6,500〜8,500円）となります。` },
      { question: `${name}を1時間稼働させたときの電気代はいくら？`, answer: `平均消費電力約${w}Wの場合、1時間あたりの電気代は約${costH} €となります。` },
      { question: `${name}の1ヶ月あたりの電気代の目安は？`, answer: `標準的な使用頻度の場合、1ヶ月あたり約${(app.annualCost / 12).toFixed(2)} €が目安となります。` },
      { question: `一般的な${name}の定格消費電力（W）はどれくらい？`, answer: `平均定格電力は約${w}Wで、運転状態や負荷により約${(w * 0.7).toFixed(0)}W〜${(w * 1.5).toFixed(0)}Wの範囲で変動します。` },
      { question: `${name}を1回使用したときの電気代は？`, answer: `${name}の1回あたりの標準使用コストは約${costUse}です。` },
      { question: `${name}の電気代を今すぐ15〜25%節電するコツは？`, answer: `エコモードを基本とし、フィルターの定期清掃や適切な温度設定を行うことで大きな省エネ効果が得られます。` },
      { question: `${name}は待機状態（スタンバイ）でも電気を消費する？`, answer: `はい、ディスプレイやタイマー待機機能により約0.5〜3Wの待機電力を消費します（年間約1.5〜9 €）。` },
      { question: `10年以上前の旧型${name}を買い替えると節電になる？`, answer: `10年以上前の機器から最新の省エネモデルに買い替えると約30〜50%の節電になり、4〜6年で本体代の差額を回収できます。` },
      { question: `${name}の電気代を自分で計算する計算式は？`, answer: `計算式: （消費電力W × 使用時間h ÷ 1,000）× 電気料金単価€。例: ${w}W × 1時間 ÷ 1,000 × 0.35€ ＝ ${costH}€。` },
      { question: `${name}で最も電気代が安くなるおすすめの運転設定は？`, answer: `メーカー推奨の標準「エコモード（省エネ運転）」に設定するのが最も消費電力を抑えられます。` }
    ];
  } else if (lang === 'fr') {
    return [
      { question: `Quelle est la consommation électrique moyenne d'un ${name} par an ?`, answer: `Un ${name} consomme en moyenne environ ${kwh} kWh par an, soit un coût d'électricité d'environ ${cost} € par an (à 0,35 €/kWh).` },
      { question: `Combien coûte 1 heure d'utilisation d'un ${name} ?`, answer: `Avec une puissance moyenne de ${w} Watts, une heure de fonctionnement coûte environ ${costH} €.` },
      { question: `Quel est le coût moyen mensuel d'un ${name} sur la facture ?`, answer: `Le coût mensuel moyen est d'environ ${(app.annualCost / 12).toFixed(2).replace('.', ',')} € par mois en usage standard.` },
      { question: `Quelle est la puissance typique en Watts d'un ${name} ?`, answer: `La puissance nominale moyenne est d'environ ${w} Watts, variant entre ${(w * 0.7).toFixed(0)} W et ${(w * 1.5).toFixed(0)} W selon les cycles.` },
      { question: `Combien coûte un cycle ou une utilisation typique de ${name} ?`, answer: `Une utilisation type de ${name} revient à environ ${costUse}.` },
      { question: `Comment réduire la consommation d'un ${name} de 15 à 25 % ?`, answer: `Privilégiez le mode Éco, entretenez régulièrement les filtres et joints, et évitez les surcharges ou réglages excessifs.` },
      { question: `Un ${name} consomme-t-il de l'électricité en veille ?`, answer: `Oui, les bandeaux numériques consomment entre 0,5 et 3 Watts en veille (soit 1,50 à 9,00 € par an).` },
      { question: `Est-il rentable de remplacer un vieux ${name} par un modèle récent ?`, answer: `Un appareil de plus de 10 ans remplacé par une classe A ou B permet d'économiser 30 à 50 % d'énergie, rentabilisé en 4 à 6 ans.` },
      { question: `Comment calculer soi-même la consommation d'un ${name} ?`, answer: `Formule : (Puissance en Watts × Heures ÷ 1 000) × Tarif du kWh. Exemple : ${w} W × 1 h ÷ 1 000 × 0,35 € = ${costH} €.` },
      { question: `Quel est le programme le plus économique pour un ${name} ?`, answer: `Le cycle Éco certifié permet une consommation minimale d'énergie tout en garantissant une efficacité optimale.` }
    ];
  } else if (lang === 'pt') {
    return [
      { question: `Qual é o consumo médio anual de um ${name}?`, answer: `Um ${name} consome em média cerca de ${kwh} kWh por ano, o que representa um custo anual de aproximadamente ${cost} € a 0,35 €/kWh.` },
      { question: `Quanto custa 1 hora de funcionamento de um ${name}?`, answer: `Com uma potência média de cerca de ${w} Watts, uma hora de uso custa cerca de ${costH} €.` },
      { question: `Qual é o custo mensal de eletricidade de um ${name}?`, answer: `O custo mensal situa-se em média nos ${(app.annualCost / 12).toFixed(2).replace('.', ',')} € por mês com utilização normal.` },
      { question: `Qual a potência típica em Watts de um ${name}?`, answer: `A potência média é de cerca de ${w} Watts, oscilando entre ${(w * 0.7).toFixed(0)} W e ${(w * 1.5).toFixed(0)} W consoante a fase de trabalho.` },
      { question: `Quanto custa uma utilização individual de um ${name}?`, answer: `Uma utilização típica de ${name} custa cerca de ${costUse}.` },
      { question: `Como reduzir o consumo de um ${name} em 15–25%?`, answer: `Utilize programas Eco, mantenha os filtros limpos e evite temperaturas desnecessariamente extremas.` },
      { question: `Um ${name} consome energia em modo standby?`, answer: `Sim, os modelos digitais gastam entre 0,5 e 3 Watts em espera (cerca de 1,50 a 9,00 € anuais).` },
      { question: `Compensa substituir um ${name} antigo por um novo eficiente?`, answer: `Se o aparelho tiver mais de 10 anos, um novo modelo classe A a C poupa entre 30% e 50% de eletricidade.` },
      { question: `Como calcular o consumo exato de um ${name}?`, answer: `Fórmula: (Watts × Horas ÷ 1.000) × Preço por kWh. Exemplo: ${w} W × 1 h ÷ 1.000 × 0,35 € = ${costH} €.` },
      { question: `Qual é o programa mais económico para um ${name}?`, answer: `O modo Eco de fábrica garante a máxima poupança energética com excelente desempenho.` }
    ];
  } else if (lang === 'ko') {
    return [
      { question: `${name}의 연간 평균 전기 소비량과 연간 전기요금은?`, answer: `표준 ${name}의 연간 전력 소비량은 약 ${kwh} kWh이며, 단가 0.35 €/kWh 기준 연간 약 ${cost} €의 전기요금이 발생합니다.` },
      { question: `${name}을 1시간 가동했을 때 전기세는 얼마인가요?`, answer: `평균 소비전력 ${w}W 기준 1시간 사용 시 약 ${costH} €의 요금이 부과됩니다.` },
      { question: `${name}의 월평균 전기요금은 어느 정도인가요?`, answer: `일반적인 가정 사용 환경에서 월평균 약 ${(app.annualCost / 12).toFixed(2)} € 수준입니다.` },
      { question: `일반적인 ${name}의 정격 소비전력(W)은 몇 와트인가요?`, answer: `평균 정격 소비전력은 약 ${w}W이며, 작동 주기 및 부하에 따라 약 ${(w * 0.7).toFixed(0)}W~${(w * 1.5).toFixed(0)}W 범위에서 변동합니다.` },
      { question: `${name} 1회 사용당 발생하는 전기요금은?`, answer: `${name} 1회 표준 가동당 비용은 약 ${costUse}입니다.` },
      { question: `${name}의 전기요금을 15~25% 즉시 절약하는 방법은?`, answer: `에코 모드를 기본으로 사용하고, 필터 청소 및 적정 온도 유지를 실천하면 큰 절전 효과를 얻을 수 있습니다.` },
      { question: `${name}은 대기전력(스탠바이)을 소비하나요?`, answer: `네, 디지털 디스플레이 및 스마트 기능이 있는 기기는 대기 시 0.5~3W(연간 약 1.5~9 €)의 전력을 소비합니다.` },
      { question: `10년 이상 된 노후 ${name}을 신형으로 교체하면 경제적인가요?`, answer: `10년 이상 된 기기를 최신 고효율 에너지 등급 모델로 교체하면 30~50%의 전력을 절감하여 4~6년 내에 교체 비용을 회수할 수 있습니다.` },
      { question: `${name}의 전기요금을 직접 계산하는 공식은?`, answer: `계산 공식: (소비전력W × 사용 시간h ÷ 1,000) × 전력량 단가€. 예: ${w}W × 1시간 ÷ 1,000 × 0.35€ = ${costH}€.` },
      { question: `${name}에서 가장 전기세가 적게 나오는 최적의 모드는?`, answer: `제조사가 인증한 표준 에코(Eco) 모드를 사용하는 것이 전력 소비를 최소화하는 가장 좋은 방법입니다.` }
    ];
  } else {
    return [
      { question: `Quanto consuma un ${name} in media all'anno?`, answer: `Un ${name} moderno consuma mediamente circa ${kwh} kWh all'anno, pari a una spesa elettrica di circa ${cost} € annui a 0,35 €/kWh.` },
      { question: `Quanto costa 1 ora di utilizzo di un ${name}?`, answer: `Con una potenza media di circa ${w} Watt, un'ora di funzionamento costa circa ${costH} €.` },
      { question: `Qual è la spesa mensile per un ${name} in bolletta?`, answer: `La spesa media mensile è di circa ${(app.annualCost / 12).toFixed(2).replace('.', ',')} € al mese in condizioni di utilizzo standard.` },
      { question: `Qual è la potenza tipica in Watt di un ${name}?`, answer: `La potenza nominale media è di circa ${w} Watt, oscillando tra ${(w * 0.7).toFixed(0)} W e ${(w * 1.5).toFixed(0)} W a seconda della fase.` },
      { question: `Quanto costa un singolo ciclo o utilizzo di ${name}?`, answer: `Un utilizzo tipico di ${name} comporta una spesa di circa ${costUse}.` },
      { question: `Come ridurre i consumi di un ${name} del 15–25%?`, answer: `Usa sempre i programmi Eco, tieni puliti filtri e guarnizioni ed evita carichi parziali o temperature eccessive.` },
      { question: `Un ${name} consuma corrente in modalità standby?`, answer: `Sì, i display digitali assorbono tra 0,5 e 3 Watt in standby (pari a 1,50–9,00 € all'anno).` },
      { question: `Conviene sostituire un ${name} vecchio con uno nuovo a basso consumo?`, answer: `Se l'apparecchio ha più di 10 anni, un nuovo modello in classe A o B riduce i consumi del 30–50%, ripagandosi in 4–6 anni.` },
      { question: `Come calcolare esattamente la spesa elettrica di un ${name}?`, answer: `Formula: (Potenza in Watt × Ore ÷ 1.000) × Prezzo al kWh. Esempio: ${w} W × 1 h ÷ 1.000 × 0,35 € = ${costH} €.` },
      { question: `Qual è il programma più conveniente per un ${name}?`, answer: `Il programma Eco certificato dal produttore garantisce la massima efficienza energetica con prestazioni ottimali.` }
    ];
  }
}

// Build 10 FAQs for all appliances
const fullAppliances: Record<SupportedLang, Record<string, any>> = {
  de: {}, en: {}, es: {}, ja: {}, fr: {}, pt: {}, ko: {}, it: {}
};

for (const lang of langs) {
  for (const slug of Object.keys(applianceSpecs)) {
    const spec = applianceSpecs[slug];
    fullAppliances[lang][slug] = {
      name: spec.names[lang],
      category: spec.categories[lang],
      shortDescription: `${spec.names[lang]} verbraucht im Schnitt ca. ${spec.annualKwh} kWh pro Jahr (${spec.annualCost.toFixed(2).replace('.', ',')} € bei 35 ct/kWh).`,
      dutyCycleExplanation: `Die tatsächliche Leistungsaufnahme schwankt je nach Betriebsphase und Thermostatregelung.`,
      savingAdvice: [
        `Eco-Programme und energiesparende Einstellungen bevorzugen.`,
        `Regelmäßige Reinigung von Filtern und Dichtungen sichert maximale Effizienz.`,
        `Gerät nach Gebrauch komplett ausschalten, um Standby-Verluste zu vermeiden.`
      ],
      faq: generate10ApplianceFaqs(spec, lang)
    };
  }
}

// Write to src/i18n/appliances.ts
const appliancesTsPath = path.join(process.cwd(), 'src/i18n/appliances.ts');
const appliancesOutput = `import type { SupportedLanguage } from './languages';

export interface LocalizedApplianceData {
  name: string;
  category: string;
  shortDescription: string;
  dutyCycleExplanation: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const applianceTranslations: Record<SupportedLanguage, Record<string, LocalizedApplianceData>> = ${JSON.stringify(fullAppliances, null, 2)};

export function getLocalizedAppliance(slug: string, lang: SupportedLanguage = 'de'): LocalizedApplianceData | null {
  return applianceTranslations[lang]?.[slug] || applianceTranslations.de?.[slug] || null;
}
`;

fs.writeFileSync(appliancesTsPath, appliancesOutput, 'utf-8');
console.log('Successfully generated 10 FAQs for all 25+ appliances across all 8 languages!');

// Also sync German FAQs into src/data/appliances.ts
const appliancesDataPath = path.join(process.cwd(), 'src/data/appliances.ts');
let appliancesDataContent = fs.readFileSync(appliancesDataPath, 'utf-8');

for (const slug of Object.keys(applianceSpecs)) {
  const spec = applianceSpecs[slug];
  const deFaqs = generate10ApplianceFaqs(spec, 'de');
  const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?faq:\\s*)\\[[\\s\\S]*?\\],`, 'm');
  appliancesDataContent = appliancesDataContent.replace(regex, `$1${JSON.stringify(deFaqs, null, 6)},`);
}
fs.writeFileSync(appliancesDataPath, appliancesDataContent, 'utf-8');
console.log('Successfully updated German data/appliances.ts with 10 FAQs!');
