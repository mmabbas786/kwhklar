import fs from 'fs';
import path from 'path';
import { applianceTranslations } from '../src/i18n/appliances';

const dataPath = path.join(process.cwd(), 'src/data/appliances.ts');
let content = fs.readFileSync(dataPath, 'utf-8');

// For each appliance in applianceTranslations.de, replace its faq in src/data/appliances.ts if possible
const deAppliances = applianceTranslations.de;

for (const slug of Object.keys(deAppliances)) {
  const faqs = deAppliances[slug].faq;
  const faqStr = `faq: ${JSON.stringify(faqs, null, 6)}`;
  
  // Replace faq block for this slug
  // Match slug: '...' ... faq: [...]
  const regex = new RegExp(`(${slug}:\\s*{[\\s\\S]*?faq:\\s*\\[)([\\s\\S]*?)(\\][\\s\\S]*?sourceIds:)`, 'm');
  if (regex.test(content)) {
    const formattedFaqList = JSON.stringify(faqs, null, 6).slice(1, -1);
    content = content.replace(regex, `$1${formattedFaqList}\n    $3`);
  }
}

fs.writeFileSync(dataPath, content, 'utf-8');
console.log('Successfully synchronized German FAQs in src/data/appliances.ts!');
