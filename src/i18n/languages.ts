export type SupportedLanguage = 'de' | 'en' | 'es' | 'ja' | 'fr' | 'pt' | 'ko' | 'it';

export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  currencySymbol: string;
  currencyCode: string;
  defaultPricePerKwh: number;
}

export const languages: Record<SupportedLanguage, LanguageInfo> = {
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.35,
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.35,
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.30,
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.35,
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.25,
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.28,
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.35,
  },
  it: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    currencySymbol: '€',
    currencyCode: 'EUR',
    defaultPricePerKwh: 0.32,
  },
};

export const defaultLang: SupportedLanguage = 'de';
