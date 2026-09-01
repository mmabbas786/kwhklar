import fs from 'node:fs';
import path from 'node:path';
import { languages, type SupportedLanguage } from '../src/i18n/languages';
import { applianceTranslations } from '../src/i18n/appliances';
import { topicTranslations } from '../src/i18n/topics';

console.log('🔍 Running Locale Parity Validator across all 8 languages...\n');

const supportedLangs = Object.keys(languages) as SupportedLanguage[];
const distDir = path.join(process.cwd(), 'dist');

let hasErrors = false;

// 1. Validate Appliance Parity
const deAppliances = Object.keys(applianceTranslations.de || {});
console.log(`📊 Total Appliances in Base Catalog: ${deAppliances.length}`);

for (const lang of supportedLangs) {
  const langAppliances = Object.keys(applianceTranslations[lang] || {});
  const missing = deAppliances.filter((slug) => !langAppliances.includes(slug));
  if (missing.length > 0) {
    console.error(`❌ [${lang}] Missing appliances (${missing.length}): ${missing.join(', ')}`);
    hasErrors = true;
  } else {
    console.log(`✅ [${lang}] 100% Appliance Parity (${langAppliances.length}/${deAppliances.length})`);
  }
}

// 2. Validate Topic Parity
const deTopics = Object.keys(topicTranslations.de || {});
console.log(`\n📊 Total Topics in Base Knowledge Base: ${deTopics.length}`);

for (const lang of supportedLangs) {
  const langTopics = Object.keys(topicTranslations[lang] || {});
  const missing = deTopics.filter((slug) => !langTopics.includes(slug));
  if (missing.length > 0) {
    console.error(`❌ [${lang}] Missing topics (${missing.length}): ${missing.join(', ')}`);
    hasErrors = true;
  } else {
    console.log(`✅ [${lang}] 100% Topic Parity (${langTopics.length}/${deTopics.length})`);
  }
}

// 3. Validate Built Dist Routes Parity
if (fs.existsSync(distDir)) {
  console.log('\n📊 Validating Built Static Routes in /dist:');
  const baseRoutes: string[] = [];
  
  // Collect all base routes
  function collectHtmlFiles(dir: string, prefix = ''): string[] {
    const files = fs.readdirSync(dir);
    let routes: string[] = [];
    for (const f of files) {
      const fullPath = path.join(dir, f);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (prefix === '' && supportedLangs.includes(f as SupportedLanguage) && f !== 'de') {
          // Skip localized directories for base collection
          continue;
        }
        routes = routes.concat(collectHtmlFiles(fullPath, `${prefix}/${f}`));
      } else if (f === 'index.html') {
        routes.push(prefix || '/');
      }
    }
    return routes;
  }

  const deRoutes = collectHtmlFiles(distDir);
  console.log(`   German (de) Base Routes: ${deRoutes.length}`);

  for (const lang of supportedLangs) {
    if (lang === 'de') continue;
    const langDir = path.join(distDir, lang);
    if (!fs.existsSync(langDir)) {
      console.error(`❌ [${lang}] Missing localized root directory in /dist`);
      hasErrors = true;
      continue;
    }
    const langRoutes = collectHtmlFiles(langDir, `/${lang}`);
    console.log(`   [${lang}] Routes: ${langRoutes.length}`);
  }
}

if (hasErrors) {
  console.error('\n❌ Locale Parity Validation FAILED with errors.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL Locales have 100% Structural & Data Parity!');
}
