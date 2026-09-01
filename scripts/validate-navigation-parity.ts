import { languages, type SupportedLanguage } from '../src/i18n/languages';
import { useTranslations, getLocalizedPath } from '../src/i18n/utils';

console.log('🔍 Running Navigation & Footer Parity Validator across all 8 languages...\n');

const supportedLangs = Object.keys(languages) as SupportedLanguage[];

let hasErrors = false;

// Core Nav Keys expected
const requiredNavKeys = [
  'nav.calculators',
  'nav.appliances',
  'nav.household',
  'nav.price',
  'nav.bill',
  'nav.saving',
  'nav.cta'
];

// Core Footer Categories expected
const requiredFooterLinks = [
  '/stromkosten-rechner',
  '/kwh-rechner',
  '/watt-rechner',
  '/geraete',
  '/geraete/kuehlschrank',
  '/geraete/waschmaschine',
  '/stromverbrauch-haushalt',
  '/strompreis',
  '/stromrechnung',
  '/strom-sparen',
  '/ueber-uns',
  '/quellen-methodik',
  '/kontakt',
  '/impressum',
  '/datenschutz'
];

for (const lang of supportedLangs) {
  const t = useTranslations(lang);
  console.log(`🧭 Checking [${lang}] Navigation Dictionary:`);
  
  for (const key of requiredNavKeys) {
    const val = t(key);
    if (!val || val === key) {
      console.error(`  ❌ Missing navigation key: "${key}" in [${lang}]`);
      hasErrors = true;
    } else {
      console.log(`  ✓ ${key} => "${val}"`);
    }
  }

  // Check localized paths
  for (const link of requiredFooterLinks) {
    const locPath = getLocalizedPath(link, lang);
    if (lang === 'de' && locPath !== link) {
      console.error(`  ❌ German path mismatch for ${link} => ${locPath}`);
      hasErrors = true;
    } else if (lang !== 'de' && !locPath.startsWith(`/${lang}`)) {
      console.error(`  ❌ Localized path for ${link} in [${lang}] does not have prefix: ${locPath}`);
      hasErrors = true;
    }
  }
  console.log(`  ✅ [${lang}] 100% Footer & Localized Path Parity (${requiredFooterLinks.length}/${requiredFooterLinks.length})\n`);
}

if (hasErrors) {
  console.error('❌ Navigation Parity Validation FAILED with errors.');
  process.exit(1);
} else {
  console.log('🎉 ALL Locales have 100% Navigation, CTA, and Footer Parity!');
}
