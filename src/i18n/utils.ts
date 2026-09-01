import { ui } from './ui';
import { languages, defaultLang, type SupportedLanguage } from './languages';

/**
 * Extracts the active language code from a URL path.
 * If URL is `/en/...` -> 'en', if `/` or German route -> 'de'.
 */
export function getLangFromUrl(url: URL | string): SupportedLanguage {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment in languages) {
    return firstSegment as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a translation helper for the given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)['de']): string {
    return ui[lang]?.[key] || ui[defaultLang][key] || (key as string);
  };
}

/**
 * Generates the clean localized path for any target language.
 * E.g. path `/kwh-rechner` for target `en` -> `/en/kwh-rechner`
 * E.g. path `/en/kwh-rechner` for target `de` -> `/kwh-rechner`
 */
export function getLocalizedPath(currentPathname: string, targetLang: SupportedLanguage): string {
  // Strip any leading language prefix
  let cleanPath = currentPathname;
  for (const langCode of Object.keys(languages)) {
    if (cleanPath === `/${langCode}` || cleanPath === `/${langCode}/`) {
      cleanPath = '/';
      break;
    } else if (cleanPath.startsWith(`/${langCode}/`)) {
      cleanPath = cleanPath.replace(`/${langCode}`, '');
      break;
    }
  }

  if (cleanPath === '') cleanPath = '/';

  if (targetLang === defaultLang) {
    return cleanPath;
  }

  if (cleanPath === '/') {
    return `/${targetLang}`;
  }

  return `/${targetLang}${cleanPath}`;
}

export interface HreflangLink {
  lang: string;
  href: string;
}

/**
 * Generates all reciprocal hreflang alternate links for SEO, including x-default.
 */
export function getAlternateHreflangLinks(currentUrl: URL | string, baseUrl = 'https://kwhklar.de'): HreflangLink[] {
  const pathname = typeof currentUrl === 'string' ? currentUrl : currentUrl.pathname;
  const links: HreflangLink[] = [];

  for (const langCode of Object.keys(languages) as SupportedLanguage[]) {
    const locPath = getLocalizedPath(pathname, langCode);
    const fullHref = locPath === '/' ? baseUrl : `${baseUrl}${locPath}`;
    links.push({
      lang: langCode,
      href: fullHref,
    });
  }

  // x-default points to default German version
  const dePath = getLocalizedPath(pathname, defaultLang);
  const xDefaultHref = dePath === '/' ? baseUrl : `${baseUrl}${dePath}`;
  links.push({
    lang: 'x-default',
    href: xDefaultHref,
  });

  return links;
}
