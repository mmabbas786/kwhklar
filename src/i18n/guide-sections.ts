import type { SupportedLanguage } from './languages';

export interface PriceCompositionItem {
  category: string;
  sharePercent: number;
  valueCtPerKwh: number;
  description: string;
}

export interface CalculationStepGuide {
  badge: string;
  title: string;
  description: string;
  compositionItems: PriceCompositionItem[];
  moreLinkText: string;
  stepsHeading: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step2Formula: string;
  step3Title: string;
  step3Desc: string;
  step3Formula: string;
}

export const guideTranslations: Record<SupportedLanguage, CalculationStepGuide> = {
  de: {
    badge: 'Transparenz & Datenbasis',
    title: 'Wie setzen sich Stromkosten zusammen?',
    description: 'Auf deiner Stromrechnung zahlst du zwei Hauptbestandteile: den verbrauchsabhängigen Arbeitspreis (in ct/kWh) für jede bezogene Kilowattstunde und den festen Grundpreis (in €/Monat) für Zähler, Netznutzung und Abrechnung.',
    compositionItems: [
      {
        category: 'Energiebeschaffung & Vertrieb',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: 'Einkauf an der Strombörse EEX, Margen, Kundenservice & Verwaltung des Versorgers.',
      },
      {
        category: 'Netzentgelte & Messstellenbetrieb',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: 'Gebühren für Übertragungs- und Verteilnetze sowie Betrieb des Stromzählers.',
      },
      {
        category: 'Steuern, Abgaben & Umlagen',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: '19 % Mehrwertsteuer, Stromsteuer (2,05 ct), KWKG-Umlage, Offshore- und §19-Umlagen.',
      },
    ],
    moreLinkText: 'Mehr zur Strompreis-Zusammensetzung erfahren →',
    stepsHeading: 'Stromkosten selbst berechnen in 3 Schritten',
    step1Title: 'Leistung in Watt ermitteln',
    step1Desc: 'Schau auf das Typenschild deines Geräts (z.B. „1500 W“) oder in das Datenblatt.',
    step2Title: 'Watt in kWh umrechnen',
    step2Desc: 'Multipliziere die Watt mit den Betriebsstunden und teile durch 1.000:',
    step2Formula: '1.500 W × 2 Std. ÷ 1.000 = 3,0 kWh',
    step3Title: 'Mit dem Strompreis multiplizieren',
    step3Desc: 'Multipliziere die verbrauchten kWh mit deinem Arbeitspreis (z.B. 0,35 €):',
    step3Formula: '3,0 kWh × 0,35 € = 1,05 € pro Tag',
  },
  en: {
    badge: 'Transparency & Pricing Structure',
    title: 'How are electricity costs structured?',
    description: 'On your electricity bill, you pay two main components: the usage-based unit rate (in ct/kWh) for every kilowatt-hour consumed, and the fixed standing charge (in €/month) covering grid maintenance, meter operation, and billing.',
    compositionItems: [
      {
        category: 'Energy Procurement & Supply',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: 'Wholesale market purchasing (EEX), supplier margins, customer support & administration.',
      },
      {
        category: 'Grid Fees & Meter Operation',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: 'Transmission and local distribution grid maintenance, expansion, and metering service.',
      },
      {
        category: 'Taxes, Levies & Surcharges',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: '19% VAT, electricity tax, renewable energy grid surcharges, and concession fees.',
      },
    ],
    moreLinkText: 'Learn more about electricity price breakdown →',
    stepsHeading: 'Calculate your electricity costs in 3 simple steps',
    step1Title: 'Identify device wattage (Watts)',
    step1Desc: 'Check the rating plate on the device or power adapter (e.g. "1500 W").',
    step2Title: 'Convert Watts to Kilowatt-hours (kWh)',
    step2Desc: 'Multiply wattage by operating hours and divide by 1,000:',
    step2Formula: '1,500 W × 2 hrs ÷ 1,000 = 3.0 kWh',
    step3Title: 'Multiply by your electricity rate',
    step3Desc: 'Multiply total kWh by your price per kWh (e.g. €0.35):',
    step3Formula: '3.0 kWh × €0.35 = €1.05 per day',
  },
  es: {
    badge: 'Transparencia y estructura de tarifas',
    title: '¿Cómo se desglosa el precio de la electricidad?',
    description: 'En tu factura de la luz pagas dos componentes principales: el término de energía variable (en ct/kWh) por cada kilovatio-hora consumido y el término de potencia fijo (en €/mes) por el mantenimiento de red y alquiler de contador.',
    compositionItems: [
      {
        category: 'Producción de energía y comercialización',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: 'Compra en el mercado mayorista eléctrico, margen del proveedor y gestión comercial.',
      },
      {
        category: 'Peajes de acceso y redes de distribución',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: 'Mantenimiento del tendido eléctrico, peajes de transporte y equipos de medida.',
      },
      {
        category: 'Impuestos y gravámenes regulados',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: 'IVA (21%), impuesto especial sobre la electricidad y cargos del sistema eléctrico.',
      },
    ],
    moreLinkText: 'Más información sobre la composición de la tarifa →',
    stepsHeading: 'Calcula tu gasto eléctrico en 3 sencillos pasos',
    step1Title: 'Averigua la potencia en vatios (W)',
    step1Desc: 'Revisa la placa de características de tu electrodoméstico (ej. "1500 W").',
    step2Title: 'Convierte vatios a kilovatios-hora (kWh)',
    step2Desc: 'Multiplica la potencia por las horas de uso y divide entre 1.000:',
    step2Formula: '1.500 W × 2 h ÷ 1.000 = 3,0 kWh',
    step3Title: 'Multiplica por el precio del kWh',
    step3Desc: 'Multiplica los kWh consumidos por tu tarifa contratada (ej. 0,35 €):',
    step3Formula: '3,0 kWh × 0,35 € = 1,05 € al día',
  },
  ja: {
    badge: '電気料金の仕組みと透明性',
    title: '電気料金の内訳と計算構造はどうなっている？',
    description: '電気代は主に2つの要素で構成されています: 使用した電力量に応じて支払う「従量料金（電力量料金、ct/kWh）」と、電力網の維持やメーター管理に支払う「基本料金（€/月）」です。',
    compositionItems: [
      {
        category: '電源調達費・電力供給コスト',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: '卸電力市場からの調達、発電所運用、カスタマーサポート、供給管理費。',
      },
      {
        category: '送配電網利用料（託送料金）',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: '送配電網の設備維持・更新費用、スマートメーター運用コスト。',
      },
      {
        category: '税金・賦課金・各種制度費',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: '付加価値税（19%）、電力税、再エネ賦課金、オフショア連系費用。',
      },
    ],
    moreLinkText: '電気料金の内訳について詳しく見る →',
    stepsHeading: '電気代を自分で計算する簡単3ステップ',
    step1Title: '家電の消費電力（W）を確認する',
    step1Desc: '機器本体の定格銘板やアダプター表記（例:「1500 W」）を確認します。',
    step2Title: 'WをkWh（キロワット時）に換算する',
    step2Desc: '消費電力（W）に使用時間（h）を掛けて1,000で割ります:',
    step2Formula: '1,500 W × 2時間 ÷ 1,000 = 3.0 kWh',
    step3Title: '電気料金単価（€/kWh）を掛ける',
    step3Desc: '算出したkWhに使用単価（例: 0.35 €）を掛けます:',
    step3Formula: '3.0 kWh × 0.35 € = 1日あたり 1.05 €',
  },
  fr: {
    badge: 'Transparence et structure des prix',
    title: 'Comment se décompose le prix de l\'électricité ?',
    description: 'Sur votre facture, vous payez deux composantes majeures : la part variable liée à la consommation réelle (en ct/kWh) et l\'abonnement fixe mensuel (en €/mois) pour l\'accès au réseau et l\'entretien du compteur.',
    compositionItems: [
      {
        category: 'Fourniture & approvisionnement en énergie',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: 'Achat sur les marchés de gros (EEX), coûts de production et gestion commerciale.',
      },
      {
        category: 'Tarif d\'acheminement & réseau (TURPE)',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: 'Maintenance des lignes haute et basse tension et gestion des compteurs.',
      },
      {
        category: 'Taxes, contributions & TVA',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: 'TVA (20%), accise sur l\'électricité (ex-TICFE) et contributions régulées.',
      },
    ],
    moreLinkText: 'En savoir plus sur la composition du prix →',
    stepsHeading: 'Calculez vos coûts d\'électricité en 3 étapes faciles',
    step1Title: 'Identifier la puissance en Watts (W)',
    step1Desc: 'Consultez la plaque signalétique de votre appareil (ex. "1500 W").',
    step2Title: 'Convertir les Watts en kWh',
    step2Desc: 'Multipliez les Watts par les heures d\'utilisation et divisez par 1 000 :',
    step2Formula: '1 500 W × 2 h ÷ 1 000 = 3,0 kWh',
    step3Title: 'Multiplier par le prix du kWh',
    step3Desc: 'Multipliez les kWh obtenus par votre tarif au kWh (ex. 0,35 €) :',
    step3Formula: '3,0 kWh × 0,35 € = 1,05 € par jour',
  },
  pt: {
    badge: 'Transparência e composição tarifária',
    title: 'Como se divide o preço da eletricidade?',
    description: 'Na sua fatura de eletricidade existem duas componentes essenciais: o termo de energia variável (em ct/kWh) por cada kWh consumido e o termo de potência fixo mensal (em €/mês) pelo acesso à rede e contador.',
    compositionItems: [
      {
        category: 'Produção de energia e comercialização',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: 'Aquisição no mercado grossista, margem do fornecedor e apoio ao cliente.',
      },
      {
        category: 'Tarifas de acesso e redes elétricas',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: 'Manutenção da rede de transporte e distribuição e contadores inteligentes.',
      },
      {
        category: 'Impostos, taxas e encargos do sistema',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: 'IVA, imposto especial sobre o consumo de eletricidade (IEC) e taxas.',
      },
    ],
    moreLinkText: 'Saiba mais sobre a composição da fatura →',
    stepsHeading: 'Calcule o consumo elétrico em 3 passos simples',
    step1Title: 'Identifique a potência em Watts (W)',
    step1Desc: 'Verifique a placa de especificações do aparelho (ex. "1500 W").',
    step2Title: 'Converta Watts em kWh',
    step2Desc: 'Multiplique a potência pelas horas de uso diário e divida por 1.000:',
    step2Formula: '1.500 W × 2 h ÷ 1.000 = 3,0 kWh',
    step3Title: 'Multiplique pela tarifa por kWh',
    step3Desc: 'Multiplique os kWh consumidos pelo preço do kWh contratado (ex. 0,35 €):',
    step3Formula: '3,0 kWh × 0,35 € = 1,05 € por dia',
  },
  ko: {
    badge: '투명한 전기요금 구조 및 기준',
    title: '전기요금은 어떻게 구성되어 있나요?',
    description: '전기요금 청구서는 크게 두 가지로 나뉩니다: 실제 사용한 전력량(kWh)에 비례하여 부과되는 전력량요금(변동비)과 계량기 관리 및 송배전망 유지비인 기본요금(고정비)입니다.',
    compositionItems: [
      {
        category: '전력 생산 및 공급 비용',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: '전력 도매시장 구매비, 발전소 운영비, 고객 관리 및 행정 비용.',
      },
      {
        category: '송배전망 이용료 및 계량기 운영',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: '국가 송배전망 유지보수, 전력망 확충 및 스마트 계량기 관리비.',
      },
      {
        category: '세금, 부과금 및 기금',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: '부가가치세, 전력산업기반기금, 기후환경요금 및 재생에너지 연계비.',
      },
    ],
    moreLinkText: '전기요금 세부 구성 알아보기 →',
    stepsHeading: '스스로 계산해보는 전기요금 3단계 가이드',
    step1Title: '가전기기의 소비전력(W) 확인',
    step1Desc: '기기 뒷면의 스티커나 전원 어댑터의 정격 소비전력(예: "1500 W")을 확인합니다.',
    step2Title: '와트(W)를 킬로와트시(kWh)로 변환',
    step2Desc: '소비전력(W)에 사용 시간(h)을 곱한 뒤 1,000으로 나눕니다:',
    step2Formula: '1,500 W × 2시간 ÷ 1,000 = 3.0 kWh',
    step3Title: '전력량 단가(€/kWh) 곱하기',
    step3Desc: '계산된 kWh에 전기요금 단가(예: 0.35 €)를 곱합니다:',
    step3Formula: '3.0 kWh × 0.35 € = 하루 1.05 €',
  },
  it: {
    badge: 'Trasparenza e struttura dei prezzi',
    title: 'Come si compone il costo dell\'energia elettrica?',
    description: 'Nella bolletta elettrica paghi due voci principali: la quota energia variabile (in ct/kWh) per ogni chilowattora consumato e la quota fissa mensile (in €/mese) per il contatore e la gestione della rete.',
    compositionItems: [
      {
        category: 'Spesa per la materia energia',
        sharePercent: 40.2,
        valueCtPerKwh: 14.07,
        description: 'Acquisto sul mercato all\'ingrosso (PUN/EEX), commercializzazione e margini.',
      },
      {
        category: 'Spesa per trasporto e gestione contatore',
        sharePercent: 27.1,
        valueCtPerKwh: 9.49,
        description: 'Manutenzione della rete elettrica nazionale e locale e apparati di misura.',
      },
      {
        category: 'Oneri di sistema e imposte',
        sharePercent: 32.7,
        valueCtPerKwh: 11.44,
        description: 'IVA (10/22%), accise sull\'energia elettrica e oneri generali di sistema.',
      },
    ],
    moreLinkText: 'Scopri di più sulla composizione della bolletta →',
    stepsHeading: 'Calcola il consumo elettrico in 3 semplici passaggi',
    step1Title: 'Individua la potenza in Watt (W)',
    step1Desc: 'Leggi la potenza sull\'etichetta dell\'elettrodomestico (es. "1500 W").',
    step2Title: 'Converti i Watt in kWh',
    step2Desc: 'Moltiplica i Watt per le ore di utilizzo e dividi per 1.000:',
    step2Formula: '1.500 W × 2 ore ÷ 1.000 = 3,0 kWh',
    step3Title: 'Moltiplica per il costo del kWh',
    step3Desc: 'Moltiplica i kWh consumati per la tua tariffa (es. 0,35 €):',
    step3Formula: '3,0 kWh × 0,35 € = 1,05 € al giorno',
  },
};

export function getGuideTranslations(lang: SupportedLanguage = 'de'): CalculationStepGuide {
  return guideTranslations[lang] || guideTranslations.de;
}
