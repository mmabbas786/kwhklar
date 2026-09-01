import fs from 'node:fs';
import path from 'node:path';

const benchmarkExtra = {
  de: {
    'benchmarks.note': '* Berechnet mit 35 ct/kWh Arbeitspreis + 12,50 € monatlichem Grundpreis.',
    'benchmarks.view_details': 'Ausführlichen Durchschnittsverbrauch ansehen →',
  },
  en: {
    'benchmarks.note': '* Calculated with €0.35/kWh unit rate + €12.50 monthly standing charge.',
    'benchmarks.view_details': 'View detailed average electricity consumption →',
  },
  es: {
    'benchmarks.note': '* Calculado con un precio de 0,35 €/kWh + 12,50 € de cuota fija mensual.',
    'benchmarks.view_details': 'Ver consumo medio detallado de electricidad →',
  },
  ja: {
    'benchmarks.note': '※ 従量単価0.35 €/kWh ＋ 基本料金12.50 €/月で算出。',
    'benchmarks.view_details': '世帯別の平均電気消費量の詳細を見る →',
  },
  fr: {
    'benchmarks.note': '* Calculé avec un prix de 0,35 €/kWh + 12,50 € d\'abonnement mensuel fixe.',
    'benchmarks.view_details': 'Voir la consommation moyenne détaillée →',
  },
  pt: {
    'benchmarks.note': '* Calculado com tarifa de 0,35 €/kWh + 12,50 € de termo de potência mensal.',
    'benchmarks.view_details': 'Ver consumo médio detalhado por habitação →',
  },
  ko: {
    'benchmarks.note': '※ 전력 단가 0.35 €/kWh + 월 기본요금 12.50 € 기준으로 계산되었습니다.',
    'benchmarks.view_details': '가구별 평균 전기 소비량 상세 보기 →',
  },
  it: {
    'benchmarks.note': '* Calcolato con tariffa di 0,35 €/kWh + 12,50 € di quota fissa mensile.',
    'benchmarks.view_details': 'Visualizza il consumo medio dettagliato per famiglia →',
  }
};

const uiFilePath = path.join(process.cwd(), 'src/i18n/ui.ts');
let content = fs.readFileSync(uiFilePath, 'utf-8');

for (const [lang, translations] of Object.entries(benchmarkExtra)) {
  const langRegex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?)(  \\},)`, 'm');
  const match = content.match(langRegex);
  if (match) {
    let block = match[1];
    for (const [key, value] of Object.entries(translations)) {
      const escapedKey = key.replace('.', '\\.');
      const keyRegex = new RegExp(`'${escapedKey}':\\s*'[^']*',?\\n?`);
      const escapedValue = value.replace(/'/g, "\\'");
      const newEntry = `    '${key}': '${escapedValue}',\n`;
      if (keyRegex.test(block)) {
        block = block.replace(keyRegex, newEntry);
      } else {
        block += newEntry;
      }
    }
    content = content.replace(match[0], `${block}  },`);
  }
}

fs.writeFileSync(uiFilePath, content, 'utf-8');
console.log('Successfully updated src/i18n/ui.ts with localized benchmark notes and details links!');
