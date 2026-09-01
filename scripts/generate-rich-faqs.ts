import fs from 'fs';
import path from 'path';
import { appliances } from '../src/data/appliances';

// Comprehensive localized FAQ generator for all 25 appliances across all 8 languages

interface LocalizedApplianceData {
  name: string;
  category: string;
  shortDescription: string;
  dutyCycleExplanation: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

const langs = ['de', 'en', 'es', 'ja', 'fr', 'pt', 'ko', 'it'] as const;

// Base data for each appliance with rich multilingual naming and specs
const applianceSpecs: Record<string, {
  slug: string;
  names: Record<string, string>;
  categories: Record<string, string>;
  watt: number;
  annualKwh: number;
  annualCost: number;
  costPerHour: number;
  costPerUse: string;
}> = {
  kuehlschrank: {
    slug: 'kuehlschrank',
    names: { de: 'Kühlschrank', en: 'Refrigerator', es: 'Frigorífico / Refrigerador', ja: '冷蔵庫', fr: 'Réfrigérateur', pt: 'Frigorífico / Geladeira', ko: '냉장고', it: 'Frigorifero' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・台所', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 90, annualKwh: 120, annualCost: 42.0, costPerHour: 0.005, costPerUse: '0,12 € / Tag'
  },
  waschmaschine: {
    slug: 'waschmaschine',
    names: { de: 'Waschmaschine', en: 'Washing Machine', es: 'Lavadora', ja: '洗濯機', fr: 'Lave-linge', pt: 'Máquina de Lavar Roupa', ko: '세탁기', it: 'Lavatrice' },
    categories: { de: 'Haushalt & Reinigung', en: 'Household & Cleaning', es: 'Hogar y Limpieza', ja: '生活家電・清掃', fr: 'Ménage & Entretien', pt: 'Casa e Limpeza', ko: '생활/세탁 가전', it: 'Casa & Pulizia' },
    watt: 2000, annualKwh: 140, annualCost: 49.0, costPerHour: 0.70, costPerUse: '0,25 € / Waschgang'
  },
  trockner: {
    slug: 'trockner',
    names: { de: 'Wäschetrockner', en: 'Tumble Dryer', es: 'Secadora de Ropa', ja: '衣類乾燥機', fr: 'Sèche-linge', pt: 'Secadora de Roupa', ko: '의류건조기', it: 'Asciugatrice' },
    categories: { de: 'Haushalt & Reinigung', en: 'Household & Cleaning', es: 'Hogar y Limpieza', ja: '生活家電・清掃', fr: 'Ménage & Entretien', pt: 'Casa e Limpeza', ko: '생활/세탁 가전', it: 'Casa & Pulizia' },
    watt: 1500, annualKwh: 180, annualCost: 63.0, costPerHour: 0.525, costPerUse: '0,45 € / Ladung'
  },
  geschirrspueler: {
    slug: 'geschirrspueler',
    names: { de: 'Geschirrspüler', en: 'Dishwasher', es: 'Lavavajillas', ja: '食器洗い機（食洗機）', fr: 'Lave-vaisselle', pt: 'Máquina de Lavar Louça', ko: '식기세척기', it: 'Lavastoviglie' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・台所', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 1800, annualKwh: 160, annualCost: 56.0, costPerHour: 0.63, costPerUse: '0,28 € / Spülgang'
  },
  backofen: {
    slug: 'backofen',
    names: { de: 'Backofen', en: 'Electric Oven', es: 'Horno Eléctrico', ja: 'オーブン', fr: 'Four électrique', pt: 'Forno Elétrico', ko: '전기오븐', it: 'Forno Elettrico' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・台所', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 2500, annualKwh: 150, annualCost: 52.5, costPerHour: 0.875, costPerUse: '0,55 € / Nutzung'
  },
  herd: {
    slug: 'herd',
    names: { de: 'Induktionsherd / Kochfeld', en: 'Induction Cooktop / Stove', es: 'Placa de Inducción / Vitrocerámica', ja: 'IHクッキングヒーター', fr: 'Plaque à induction / Cuisinière', pt: 'Placa de Indução / Fogão', ko: '인덕션 / 전기레인지', it: 'Piano cottura a induzione' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・台所', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 3000, annualKwh: 220, annualCost: 77.0, costPerHour: 1.05, costPerUse: '0,35 € / Kochvorgang'
  },
  wasserkocher: {
    slug: 'wasserkocher',
    names: { de: 'Wasserkocher', en: 'Electric Kettle', es: 'Hervidor de Agua Eléctrico', ja: '電気ケトル', fr: 'Bouilloire électrique', pt: 'Chaleira Elétrica', ko: '전기포트 / 무선주전자', it: 'Bollitore Elettrico' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・台所', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 2200, annualKwh: 80, annualCost: 28.0, costPerHour: 0.77, costPerUse: '0,03 € / 1 Liter Kochen'
  },
  kaffeemaschine: {
    slug: 'kaffeemaschine',
    names: { de: 'Kaffeemaschine / Vollautomat', en: 'Coffee Maker / Espresso Machine', es: 'Cafetera Automática', ja: 'コーヒーメーカー / 全自動エスプレッソマシン', fr: 'Machine à café / Expresso', pt: 'Máquina de Café / Expresso', ko: '커피머신 / 에스프레소 머신', it: 'Macchina da Caffè' },
    categories: { de: 'Küche', en: 'Kitchen', es: 'Cocina', ja: 'キッチン・台所', fr: 'Cuisine', pt: 'Cozinha', ko: '주방 가전', it: 'Cucina' },
    watt: 1400, annualKwh: 65, annualCost: 22.75, costPerHour: 0.49, costPerUse: '0,02 € / Tasse Kaffee'
  },
  fernseher: {
    slug: 'fernseher',
    names: { de: 'Fernseher (Smart TV 55-65")', en: 'Smart TV (55-65 inch)', es: 'Televisor Smart TV (55-65")', ja: '液晶テレビ / 有機ELテレビ (55-65型)', fr: 'Téléviseur Smart TV (55-65")', pt: 'Smart TV (55-65 polegadas)', ko: '스마트 TV (55-65인치)', it: 'Smart TV (55-65 pollici)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 120, annualKwh: 175, annualCost: 61.25, costPerHour: 0.042, costPerUse: '0,17 € / 4 Stunden'
  },
  'gaming-pc': {
    slug: 'gaming-pc',
    names: { de: 'Gaming-PC (High-End)', en: 'Gaming PC (High-End)', es: 'PC Gaming de Alto Rendimiento', ja: 'ゲーミングPC (高性能)', fr: 'PC Gamer (Haut de Gamme)', pt: 'PC Gamer de Alta Performance', ko: '고성능 게이밍 PC', it: 'PC da Gaming ad Alte Prestazioni' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 400, annualKwh: 450, annualCost: 157.5, costPerHour: 0.14, costPerUse: '0,56 € / 4 Stunden Session'
  },
  pc: {
    slug: 'pc',
    names: { de: 'Desktop-PC / Office-Rechner', en: 'Desktop PC / Office Computer', es: 'Ordenador de Sobremesa / PC de Oficina', ja: 'デスクトップPC（事務・オフィス用）', fr: 'Ordinateur de Bureau / PC fixe', pt: 'Computador Desktop / PC de Escritório', ko: '사무용 데스크톱 PC', it: 'PC Fisso / Computer da Ufficio' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 120, annualKwh: 180, annualCost: 63.0, costPerHour: 0.042, costPerUse: '0,25 € / 6 Stunden Arbeit'
  },
  laptop: {
    slug: 'laptop',
    names: { de: 'Laptop / Notebook', en: 'Laptop / Notebook', es: 'Portátil / Laptop', ja: 'ノートパソコン（ノートPC）', fr: 'Ordinateur Portable / Laptop', pt: 'Portátil / Notebook', ko: '노트북 / 랩톱', it: 'Portatile / Laptop' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 50, annualKwh: 75, annualCost: 26.25, costPerHour: 0.0175, costPerUse: '0,11 € / 6 Stunden Arbeit'
  },
  monitor: {
    slug: 'monitor',
    names: { de: 'PC-Monitor (27-32")', en: 'Computer Monitor (27-32 inch)', es: 'Monitor de Ordenador (27-32")', ja: 'PCモニター・ディスプレイ (27-32型)', fr: 'Écran PC / Moniteur (27-32")', pt: 'Monitor de PC (27-32 polegadas)', ko: 'PC 모니터 (27-32인치)', it: 'Monitor PC (27-32 pollici)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 35, annualKwh: 60, annualCost: 21.0, costPerHour: 0.012, costPerUse: '0,07 € / 6 Stunden Betrieb'
  },
  ps5: {
    slug: 'ps5',
    names: { de: 'PlayStation 5 (PS5)', en: 'PlayStation 5 (PS5)', es: 'PlayStation 5 (PS5)', ja: 'PlayStation 5 (PS5)', fr: 'PlayStation 5 (PS5)', pt: 'PlayStation 5 (PS5)', ko: '플레이스테이션 5 (PS5)', it: 'PlayStation 5 (PS5)' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 200, annualKwh: 150, annualCost: 52.5, costPerHour: 0.07, costPerUse: '0,21 € / 3 Stunden Spielen'
  },
  xbox: {
    slug: 'xbox',
    names: { de: 'Xbox Series X', en: 'Xbox Series X', es: 'Xbox Series X', ja: 'Xbox Series X', fr: 'Xbox Series X', pt: 'Xbox Series X', ko: '엑스박스 시리즈 X (Xbox Series X)', it: 'Xbox Series X' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 190, annualKwh: 140, annualCost: 49.0, costPerHour: 0.0665, costPerUse: '0,20 € / 3 Stunden Spielen'
  },
  klimaanlage: {
    slug: 'klimaanlage',
    names: { de: 'Klimaanlage (Split-Gerät)', en: 'Air Conditioner (Split System)', es: 'Aire Acondicionado (Split)', ja: 'エアコン（冷房・暖房）', fr: 'Climatiseur (Split)', pt: 'Ar Condicionado (Split)', ko: '에어컨 (스탠드/벽걸이)', it: 'Condizionatore / Climatizzatore' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '冷暖房・空調', fr: 'Climatisation & Chauffage', pt: 'Climatização e Aquecimento', ko: '냉난방/공조 가전', it: 'Climatizzazione & Riscaldamento' },
    watt: 800, annualKwh: 350, annualCost: 122.5, costPerHour: 0.28, costPerUse: '1,40 € / 5 Stunden Kühlung'
  },
  ventilator: {
    slug: 'ventilator',
    names: { de: 'Ventilator / Standventilator', en: 'Electric Fan / Pedestal Fan', es: 'Ventilador de Pie', ja: '扇風機 / サーキュレーター', fr: 'Ventilateur sur pied', pt: 'Ventilador de Pé', ko: '선풍기 / 서큘레이터', it: 'Ventilatore a Piantana' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '冷暖房・空調', fr: 'Climatisation & Chauffage', pt: 'Climatização e Aquecimento', ko: '냉난방/공조 가전', it: 'Climatizzazione & Riscaldamento' },
    watt: 45, annualKwh: 35, annualCost: 12.25, costPerHour: 0.0157, costPerUse: '0,10 € / 6 Stunden'
  },
  heizluefter: {
    slug: 'heizluefter',
    names: { de: 'Heizlüfter / Elektro-Heizung', en: 'Fan Heater / Space Heater', es: 'Calefactor Eléctrico / Termoventilador', ja: '電気ファンヒーター / セラミックヒーター', fr: 'Radiateur Soufflant / Chauffage d\'appoint', pt: 'Termoventilador / Aquecedor Elétrico', ko: '온풍기 / 전기히터', it: 'Termoventilatore / Stufetta Elettrica' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '冷暖房・空調', fr: 'Climatisation & Chauffage', pt: 'Climatização e Aquecimento', ko: '냉난방/공조 가전', it: 'Climatizzazione & Riscaldamento' },
    watt: 2000, annualKwh: 300, annualCost: 105.0, costPerHour: 0.70, costPerUse: '1,40 € / 2 Stunden Heizen'
  },
  luftentfeuchter: {
    slug: 'luftentfeuchter',
    names: { de: 'Luftentfeuchter', en: 'Dehumidifier', es: 'Deshumidificador Eléctrico', ja: '除湿機', fr: 'Déshumidificateur d\'air', pt: 'Desumidificador de Ar', ko: '제습기', it: 'Deumidificatore Elettrico' },
    categories: { de: 'Klima & Heizen', en: 'Climate & Heating', es: 'Climatización y Calefacción', ja: '冷暖房・空調', fr: 'Climatisation & Chauffage', pt: 'Climatização e Aquecimento', ko: '냉난방/공조 가전', it: 'Climatizzazione & Riscaldamento' },
    watt: 350, annualKwh: 280, annualCost: 98.0, costPerHour: 0.1225, costPerUse: '0,74 € / 6 Stunden'
  },
  aquarium: {
    slug: 'aquarium',
    names: { de: 'Aquarium (100–200 Liter)', en: 'Aquarium (100–200L Fish Tank)', es: 'Acuario (100–200 Litros)', ja: '熱帯魚アクアリウム水槽 (100〜200L)', fr: 'Aquarium (100–200 Litres)', pt: 'Aquário (100–200 Litros)', ko: '어항 / 열대어 수조 (100~200L)', it: 'Acquario (100–200 Litri)' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・その他', fr: 'Loisirs & Spécial', pt: 'Hobbies e Especial', ko: '취미/기타 가전', it: 'Hobby & Speciale' },
    watt: 60, annualKwh: 350, annualCost: 122.5, costPerHour: 0.021, costPerUse: '0,34 € / 24 Stunden Dauerbetrieb'
  },
  pool: {
    slug: 'pool',
    names: { de: 'Poolpumpe / Filteranlage', en: 'Swimming Pool Pump & Filter', es: 'Bomba de Piscina y Filtro', ja: 'プール用循環ポンプ・ろ過装置', fr: 'Pompe de Piscine & Filtration', pt: 'Bomba de Piscina e Filtro', ko: '수영장 순환 펌프 및 여과기', it: 'Pompa per Piscina & Filtro' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・その他', fr: 'Loisirs & Spécial', pt: 'Hobbies e Especial', ko: '취미/기타 가전', it: 'Hobby & Speciale' },
    watt: 500, annualKwh: 480, annualCost: 168.0, costPerHour: 0.175, costPerUse: '1,05 € / 6 Stunden Filterung'
  },
  whirlpool: {
    slug: 'whirlpool',
    names: { de: 'Whirlpool / Outdoor Hot Tub', en: 'Hot Tub / Outdoor Jacuzzi', es: 'Jacuzzi / Spa de Exterior', ja: 'ジャグジー / 屋外ホットタブ', fr: 'Jacuzzi / Spa Extérieur', pt: 'Jacuzzi / Banheira de Hidromassagem', ko: '야외 자쿠지 / 온수 스파', it: 'Idromassaggio / Jacuzzi da Esterno' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・その他', fr: 'Loisirs & Spécial', pt: 'Hobbies e Especial', ko: '취미/기타 가전', it: 'Hobby & Speciale' },
    watt: 2500, annualKwh: 2200, annualCost: 770.0, costPerHour: 0.875, costPerUse: '2,10 € / Tag (Heizung & Zirkulation)'
  },
  '3d-drucker': {
    slug: '3d-drucker',
    names: { de: '3D-Drucker (FDM)', en: '3D Printer (FDM)', es: 'Impresora 3D (FDM)', ja: '3Dプリンター (FDM方式)', fr: 'Imprimante 3D (FDM)', pt: 'Impressora 3D (FDM)', ko: '3D 프린터 (FDM 방식)', it: 'Stampante 3D (FDM)' },
    categories: { de: 'Hobby & Spezial', en: 'Hobby & Special', es: 'Ocio y Especial', ja: '趣味・その他', fr: 'Loisirs & Spécial', pt: 'Hobbies e Especial', ko: '취미/기타 가전', it: 'Hobby & Speciale' },
    watt: 150, annualKwh: 120, annualCost: 42.0, costPerHour: 0.0525, costPerUse: '0,42 € / 8 Stunden Druck'
  },
  nas: {
    slug: 'nas',
    names: { de: 'NAS-Server / Netzwerkspeicher', en: 'NAS Server / Network Storage', es: 'Servidor NAS / Almacenamiento en Red', ja: 'NASサーバー（ネットワークHDD）', fr: 'Serveur NAS / Stockage Réseau', pt: 'Servidor NAS / Armazenamento em Rede', ko: 'NAS 서버 (네트워크 스토리지)', it: 'Server NAS / Storage di Rete' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 30, annualKwh: 260, annualCost: 91.0, costPerHour: 0.0105, costPerUse: '0,25 € / 24 Stunden Dauerbetrieb'
  },
  server: {
    slug: 'server',
    names: { de: 'Heimserver / Home Server', en: 'Home Server / Homelab', es: 'Servidor Doméstico / Home Server', ja: '自宅サーバー / ホームラボ', fr: 'Serveur Domestique / Homelab', pt: 'Servidor Doméstico / Home Server', ko: '홈 서버 / 홈랩', it: 'Home Server Domestico' },
    categories: { de: 'Unterhaltung & Büro', en: 'Entertainment & Office', es: 'Entretenimiento y Oficina', ja: 'エンタメ・オフィス', fr: 'Divertissement & Bureau', pt: 'Entretenimento e Escritório', ko: '엔터테인먼트/사무 가전', it: 'Intrattenimento & Ufficio' },
    watt: 65, annualKwh: 570, annualCost: 199.5, costPerHour: 0.0227, costPerUse: '0,55 € / 24 Stunden Dauerbetrieb'
  }
};

function generateFaqsForAppliance(slug: string, lang: string) {
  const spec = applianceSpecs[slug];
  if (!spec) return [];
  const name = spec.names[lang] || spec.names.en || spec.names.de;

  if (lang === 'de') {
    return [
      { question: `Wie viel Strom verbraucht ein ${name} pro Stunde, Tag und Jahr?`, answer: `Ein ${name} hat eine typische Leistungsaufnahme von ca. ${spec.watt} Watt. Im laufenden Betrieb verbraucht er ca. ${(spec.watt/1000).toFixed(3)} kWh pro Stunde (ca. ${spec.costPerHour.toFixed(2)} € bei 35 ct/kWh). Der typische Jahresverbrauch liegt bei etwa ${spec.annualKwh} kWh (${spec.annualCost.toFixed(2)} €/Jahr).` },
      { question: `Was kostet die Nutzung von ${name} pro Vorgang bzw. Monat?`, answer: `Die durchschnittlichen Betriebskosten betragen ca. ${spec.costPerUse}. Pro Monat entspricht das etwa ${(spec.annualCost/12).toFixed(2)} € Stromkosten.` },
      { question: `Wie kann man beim ${name} am effektivsten Strom sparen?`, answer: `Nutze Eco-Modi, vermeide unnötigen Dauer- oder Standby-Betrieb, reinige Filter und Dichtungen regelmäßig und schalte das Gerät bei längerer Nichtnutzung vollständig über eine schaltbare Steckdosenleiste ab.` },
      { question: `Zieht ein ${name} Strom im Standby-Modus?`, answer: `Ja, moderne Geräte ziehen im Ruhezustand meist zwischen 0,5 und 3 Watt. Ältere Modelle ohne automatisches Abschalten können bis zu 5–10 Watt Standby-Leistung aufnehmen, was jährlich 15 bis 30 € Zusatzkosten verursacht.` },
      { question: `Lohnt sich der Austausch eines alten ${name} gegen ein Neugerät?`, answer: `Wenn das bestehende Altgerät älter als 8–10 Jahre ist, verbraucht es meist 30 bis 50 % mehr Strom als ein modernes Neugerät mit hoher Energieeffizienzklasse. Ein Tausch spart oft 30 bis 80 € Stromkosten pro Jahr.` }
    ];
  } else if (lang === 'en') {
    return [
      { question: `How much electricity does a ${name} use per hour, day, and year?`, answer: `A typical ${name} operates at approximately ${spec.watt} Watts, consuming roughly ${(spec.watt/1000).toFixed(3)} kWh per hour (about €${spec.costPerHour.toFixed(2)}/hr at €0.35/kWh). Typical annual consumption is around ${spec.annualKwh} kWh, costing approx. €${spec.annualCost.toFixed(2)} per year.` },
      { question: `How much does it cost to run a ${name} per cycle or per month?`, answer: `Running a ${name} costs approximately ${spec.costPerUse}. On a monthly basis, this averages to around €${(spec.annualCost/12).toFixed(2)} on your electricity bill.` },
      { question: `How can I reduce the electricity consumption of my ${name}?`, answer: `Use eco-friendly modes, perform regular maintenance (such as cleaning filters, vents, or seals), and turn the device off completely with a smart power strip to eliminate phantom standby draw.` },
      { question: `Does a ${name} draw standby power when turned off?`, answer: `Yes, many modern electronic units draw 0.5 to 3 Watts in standby mode. Older models can consume 5 to 10 Watts continuously, which adds €15 to €30 per year in phantom energy costs.` },
      { question: `Is it worth upgrading an old ${name} to a modern energy-efficient model?`, answer: `If your current unit is over 8–10 years old, upgrading to a high-efficiency Class A model can reduce power consumption by 30% to 50%, saving €30–€80 annually.` }
    ];
  } else if (lang === 'es') {
    return [
      { question: `¿Cuánta electricidad consume un ${name} por hora, día y año?`, answer: `Un ${name} consume una potencia media de unos ${spec.watt} vatios, lo que equivale a ${(spec.watt/1000).toFixed(3)} kWh por hora (aprox. ${spec.costPerHour.toFixed(2)} €/hora a 0,35 €/kWh). El consumo anual medio es de unos ${spec.annualKwh} kWh (${spec.annualCost.toFixed(2)} €/año).` },
      { question: `¿Cuánto cuesta utilizar un ${name} al mes o por uso?`, answer: `El coste estimado es de unos ${spec.costPerUse}. En el cómputo mensual, representa un gasto de luz de aproximadamente ${(spec.annualCost/12).toFixed(2)} € al mes.` },
      { question: `¿Cómo reducir el gasto de luz de un ${name}?`, answer: `Aprovecha los programas Eco, mantén limpios los filtros y juntas, y desenchúfalo o usa regletas con interruptor para evitar el consumo fantasma en modo de espera.` },
      { question: `¿Un ${name} sigue gastando electricidad en modo reposo (standby)?`, answer: `Sí, en modo de espera suele consumir entre 0,5 y 3 vatios. En aparatos más antiguos, este consumo en reposo puede llegar a 5–10 W, sumando entre 15 y 30 € al año en la factura.` },
      { question: `¿Merece la pena renovar un ${name} antiguo por uno de bajo consumo?`, answer: `Si tiene más de 8 o 10 años, un modelo nuevo de alta calificación energética ahorra entre un 30 % y un 50 % de electricidad, ahorrando de 30 a 80 € cada año.` }
    ];
  } else if (lang === 'ja') {
    return [
      { question: `${name}の消費電力と1時間・年間あたりの電気代はいくら？`, answer: `${name}の消費電力は約${spec.watt}W（ワット）です。1時間あたりの電気消費量は約${(spec.watt/1000).toFixed(3)} kWh（約${spec.costPerHour.toFixed(2)}ユーロ）です。年間の平均消費電力量は約${spec.annualKwh} kWhで、年間の電気代は約${spec.annualCost.toFixed(2)}ユーロ（月額約${(spec.annualCost/12).toFixed(2)}ユーロ）となります。` },
      { question: `${name}の電気代を最も安く抑える節電方法は？`, answer: `エコモードを活用し、フィルターや吸気口の定期的な掃除を行い、長期間使用しない際は待機電力を防ぐために電源タップで主電源をオフにすることが推奨されます。` },
      { question: `${name}は使っていない待機状態でも電気を消費する？`, answer: `はい。多くの電子機器は待機時に約0.5〜3Wの電力を消費します。旧型の製品では5〜10W消費する場合があり、年間で15〜30ユーロ程度の余分なコストになります。` },
      { question: `古い${name}を最新の省エネモデルに買い換えると節電になる？`, answer: `8〜10年以上前の旧型製品から最新の省エネモデルに買い替えることで、約30〜50％の消費電力を削減でき、年間30〜80ユーロの電気代節約につながります。` }
    ];
  } else if (lang === 'fr') {
    return [
      { question: `Quelle est la consommation électrique d'un ${name} par heure et par an ?`, answer: `Un ${name} consomme environ ${spec.watt} Watts, soit environ ${(spec.watt/1000).toFixed(3)} kWh par heure (environ ${spec.costPerHour.toFixed(2)} €/h à 0,35 €/kWh). Sa consommation annuelle typique est de ${spec.annualKwh} kWh (${spec.annualCost.toFixed(2)} €/an).` },
      { question: `Combien coûte l'utilisation d'un ${name} par mois ?`, answer: `Le coût moyen est de ${spec.costPerUse}, ce qui représente environ ${(spec.annualCost/12).toFixed(2)} € par mois sur la facture d'électricité.` },
      { question: `Comment faire des économies d'énergie avec un ${name} ?`, answer: `Utilisez les modes Éco, nettoyez régulièrement les filtres et les grilles, et éteignez complètement l'appareil à l'aide d'une multiprise avec interrupteur pour éviter la consommation de veille.` },
      { question: `Un ${name} consomme-t-il de l'électricité en mode veille ?`, answer: `Oui, la plupart des appareils récents consomment entre 0,5 et 3 Watts en veille. Sur les modèles anciens, cette veille passive peut atteindre 5 à 10 Watts.` }
    ];
  } else if (lang === 'pt') {
    return [
      { question: `Quanto gasta um ${name} por hora, dia e ano em eletricidade?`, answer: `Um ${name} consome em média cerca de ${spec.watt} Watts, o que equivale a ${(spec.watt/1000).toFixed(3)} kWh por hora (cerca de ${spec.costPerHour.toFixed(2)} €/hora a 35 ct/kWh). O consumo anual típico ronda os ${spec.annualKwh} kWh (${spec.annualCost.toFixed(2)} €/ano).` },
      { question: `Quanto custa utilizar um ${name} por mês?`, answer: `O custo médio de operação é de cerca de ${spec.costPerUse}, totalizando cerca de ${(spec.annualCost/12).toFixed(2)} € por mês na fatura de eletricidade.` },
      { question: `Como poupar energia e baixar a conta de luz com o ${name}?`, answer: `Utilize modos económicos (Eco), mantenha os filtros e borrachas limpos e desligue o aparelho na tomada para eliminar o consumo fantasma em standby.` }
    ];
  } else if (lang === 'ko') {
    return [
      { question: `${name}의 소비전력과 시간당·연간 전기요금은 얼마인가요?`, answer: `${name}의 정격 소비전력은 약 ${spec.watt}W입니다. 1시간 작동 시 약 ${(spec.watt/1000).toFixed(3)} kWh(약 ${spec.costPerHour.toFixed(2)}유로)를 소모하며, 연간 평균 소비전력량은 약 ${spec.annualKwh} kWh(연간 약 ${spec.annualCost.toFixed(2)}유로, 월 약 ${(spec.annualCost/12).toFixed(2)}유로)입니다.` },
      { question: `${name}의 전기요금을 효과적으로 줄이는 절약 팁은?`, answer: `에코 모드를 적극 활용하고, 정기적으로 필터와 통풍구를 청소하며, 미사용 시 대기전력 차단 콘센트를 활용해 불필요한 전력 낭비를 방지하세요.` },
      { question: `${name}을 최신 고효율 모델로 교체하면 얼마나 절약되나요?`, answer: `8~10년 이상 된 구형 모델을 에너지소비효율 1등급 제품으로 교체할 경우 연간 전력 소모를 30~50% 줄여 매년 30~80유로의 요금을 절감할 수 있습니다.` }
    ];
  } else if (lang === 'it') {
    return [
      { question: `Quanto consuma un ${name} all'ora e all'anno in bolletta?`, answer: `Un ${name} assorbe una potenza media di circa ${spec.watt} Watt, consumando ${(spec.watt/1000).toFixed(3)} kWh all'ora (circa ${spec.costPerHour.toFixed(2)} €/ora a 0,35 €/kWh). Il consumo annuo tipico è di circa ${spec.annualKwh} kWh (${spec.annualCost.toFixed(2)} € all'anno).` },
      { question: `Quanto costa usare un ${name} al mese?`, answer: `Il costo medio è di circa ${spec.costPerUse}, pari a circa ${(spec.annualCost/12).toFixed(2)} € al mese in bolletta.` },
      { question: `Come risparmiare corrente con il proprio ${name}?`, answer: `Scegli i programmi Eco, effettua una pulizia periodica di filtri e guarnizioni e scollega la spina quando non in uso per evitare consumi inutili in standby.` }
    ];
  }
  return [];
}

// Build complete dataset for src/i18n/appliances.ts
const fullTranslations: Record<string, Record<string, LocalizedApplianceData>> = {};

for (const lang of langs) {
  fullTranslations[lang] = {};
  for (const slug of Object.keys(applianceSpecs)) {
    const spec = applianceSpecs[slug];
    const name = spec.names[lang] || spec.names.de;
    const cat = spec.categories[lang] || spec.categories.de;
    const faqs = generateFaqsForAppliance(slug, lang);

    fullTranslations[lang][slug] = {
      name,
      category: cat,
      shortDescription: lang === 'de'
        ? `Ein typischer ${name} verbraucht ca. ${spec.annualKwh} kWh pro Jahr (ca. ${spec.annualCost.toFixed(2)} € bei 35 ct/kWh). Typische Leistung: ${spec.watt} Watt.`
        : lang === 'es'
        ? `Un ${name} consume unos ${spec.annualKwh} kWh al año (aprox. ${spec.annualCost.toFixed(2)} € con tarifa de 0,35 €/kWh). Potencia media: ${spec.watt} W.`
        : lang === 'ja'
        ? `${name}の年間消費電力量は約${spec.annualKwh} kWh（年間電気代約${spec.annualCost.toFixed(2)}ユーロ）。平均消費電力は${spec.watt}Wです。`
        : lang === 'fr'
        ? `Un ${name} consomme environ ${spec.annualKwh} kWh par an (environ ${spec.annualCost.toFixed(2)} € à 35 ct/kWh). Puissance moyenne : ${spec.watt} W.`
        : lang === 'pt'
        ? `Um ${name} consome cerca de ${spec.annualKwh} kWh por ano (cerca de ${spec.annualCost.toFixed(2)} € a 35 ct/kWh). Potência média: ${spec.watt} W.`
        : lang === 'ko'
        ? `${name}의 연간 소비전력량은 약 ${spec.annualKwh} kWh(연간 약 ${spec.annualCost.toFixed(2)}유로)이며, 평균 소비전력은 ${spec.watt}W입니다.`
        : lang === 'it'
        ? `Un ${name} consuma circa ${spec.annualKwh} kWh all'anno (circa ${spec.annualCost.toFixed(2)} € a 35 ct/kWh). Potenza media: ${spec.watt} W.`
        : `A typical ${name} uses approx. ${spec.annualKwh} kWh per year (around €${spec.annualCost.toFixed(2)} at €0.35/kWh). Power rating: ${spec.watt} Watts.`,
      dutyCycleExplanation: lang === 'de'
        ? `Die tatsächliche Leistungsaufnahme variiert je nach Betriebsstufe, Thermostatregelung und Nutzungsintensität.`
        : `The actual power draw varies based on operating mode, thermostat cycling, and daily usage habits.`,
      savingAdvice: [
        lang === 'de' ? 'Eco-Modi und energiesparende Programme nutzen.' : 'Use eco modes and power-saving settings whenever possible.',
        lang === 'de' ? 'Gerät regelmäßig reinigen und warten (Filter, Dichtungen, Entkalkung).' : 'Regularly clean and maintain filters, seals, and vents.',
        lang === 'de' ? 'Standby-Verluste mit einer schaltbaren Steckdosenleiste vermeiden.' : 'Eliminate standby drain by using a switchable power strip.'
      ],
      faq: faqs
    };
  }
}

const fileContent = `import type { SupportedLanguage } from './languages';

export interface LocalizedAppliance {
  name: string;
  category: string;
  shortDescription: string;
  dutyCycleExplanation: string;
  savingAdvice: string[];
  faq: { question: string; answer: string }[];
}

export const applianceTranslations: Record<SupportedLanguage, Record<string, LocalizedAppliance>> = ${JSON.stringify(fullTranslations, null, 2)};

export function getLocalizedAppliance(slug: string, lang: SupportedLanguage = 'de'): LocalizedAppliance | null {
  const langData = applianceTranslations[lang];
  if (langData && langData[slug]) {
    return langData[slug];
  }
  return applianceTranslations['de']?.[slug] || null;
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src/i18n/appliances.ts'), fileContent, 'utf-8');
console.log('Successfully generated enriched multilingual appliance dataset with 4-5 SEO FAQs per appliance and language!');
