import type { APIRoute } from 'astro';
import { appliances } from '../data/appliances';
import { type SupportedLanguage } from '../i18n/languages';

interface SitemapEntry {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export const GET: APIRoute = () => {
  const baseUrl = 'https://kwhklar.de';
  const currentDate = new Date().toISOString().split('T')[0];
  const nonDefaultLangs: SupportedLanguage[] = ['en', 'es', 'ja', 'fr', 'pt', 'ko', 'it'];

  // 1. Automatically discover all .astro routes
  const pageModules = import.meta.glob('./**/*.astro');
  const routes: string[] = [];

  for (const rawPath of Object.keys(pageModules)) {
    // Normalize path: e.g. './geraete/[slug].astro' -> 'geraete/[slug]'
    const normalized = rawPath
      .replace(/^\.\//, '')
      .replace(/\.astro$/, '');

    // Skip utility, error, and noindex legal pages from sitemap
    if (
      normalized === '404' ||
      normalized === '500' ||
      normalized === 'impressum' ||
      normalized === 'datenschutz' ||
      normalized.endsWith('/impressum') ||
      normalized.endsWith('/datenschutz')
    ) {
      continue;
    }

    // Handle multilingual [lang] routes
    if (normalized.startsWith('[lang]')) {
      const subPath = normalized.replace(/^\[lang\]\/?/, '');
      if (subPath === '[...slug]') {
        const catchAllSlugs = [
          'stromverbrauch-rechner',
          'stromkosten-pro-stunde',
          'stromkosten-pro-tag',
          'stromkosten-pro-woche',
          'stromkosten-pro-monat',
          'stromkosten-pro-jahr',
          'durchschnittlicher-stromverbrauch',
          'stromverbrauch-1-person',
          'stromverbrauch-2-personen',
          'stromverbrauch-3-personen',
          'stromverbrauch-4-personen',
          'stromverbrauch-5-personen',
          'stromverbrauch-wohnung',
          'stromverbrauch-einfamilienhaus',
          'stromverbrauch-pro-person',
          'stromverbrauch-senken',
          'strompreis-aktuell',
          'strompreis-deutschland',
          'strompreis-pro-kwh',
          'strompreis-entwicklung',
          'strompreis-zusammensetzung',
          'dynamische-stromtarife',
          'stromanbieter-wechseln',
          'stromrechnung-pruefen',
          'stromrechnung-zu-hoch',
          'stromrechnung-berechnen',
          'stromrechnung-beispiel',
          'stromrechnung-senken',
          'strom-sparen-tipps',
          'stromfresser',
          'standby-strom',
          'e-auto/stromkosten',
          'e-auto/ladekosten-rechner',
          'e-auto/kosten-pro-100-km',
          'waermepumpe/stromverbrauch',
          'waermepumpe/stromkosten',
          'waermepumpe/stromverbrauch-rechner',
          'photovoltaik/eigenverbrauch-rechner',
          'balkonkraftwerk/stromkosten-sparen',
          ...Object.keys(appliances).map((s) => `geraete/${s}`),
        ];
        for (const lang of nonDefaultLangs) {
          for (const s of catchAllSlugs) {
            routes.push(`/${lang}/${s}`);
          }
        }
      } else {
        for (const lang of nonDefaultLangs) {
          if (subPath === 'index' || subPath === '') {
            routes.push(`/${lang}`);
          } else if (subPath.endsWith('/index')) {
            routes.push(`/${lang}/` + subPath.replace(/\/index$/, ''));
          } else {
            routes.push(`/${lang}/` + subPath);
          }
        }
      }
      continue;
    }

    // Handle dynamic appliance route
    if (normalized === 'geraete/[slug]') {
      Object.keys(appliances).forEach((slug) => {
        routes.push(`/geraete/${slug}`);
      });
      continue;
    }

    // Handle index routes
    if (normalized === 'index') {
      routes.push('');
    } else if (normalized.endsWith('/index')) {
      routes.push('/' + normalized.replace(/\/index$/, ''));
    } else {
      routes.push('/' + normalized);
    }
  }

  // 2. Sort routes logically (homepage first, then alphabetically)
  routes.sort((a, b) => {
    if (a === '') return -1;
    if (b === '') return 1;
    return a.localeCompare(b, 'de');
  });

  // 3. Map to Sitemap entries with accurate priorities & change frequencies
  const sitemapEntries: SitemapEntry[] = routes.map((route) => {
    const fullUrl = route === '' ? baseUrl : `${baseUrl}${route}`;

    // Homepage (DE)
    if (route === '') {
      return { url: fullUrl, priority: '1.0', changefreq: 'daily' };
    }

    // Language Homepages (EN, ES, JA, FR, PT, KO, IT)
    if (nonDefaultLangs.some((lang) => route === `/${lang}`)) {
      return { url: fullUrl, priority: '0.9', changefreq: 'daily' };
    }

    // Top Hubs & Primary Calculators
    if (
      [
        '/stromkosten-rechner',
        '/stromverbrauch-rechner',
        '/kwh-rechner',
        '/watt-rechner',
        '/geraete',
        '/strompreis',
        '/stromrechnung',
        '/strom-sparen',
        '/stromverbrauch-haushalt',
      ].some((h) => route === h || nonDefaultLangs.some((l) => route === `/${l}${h}`))
    ) {
      return { url: fullUrl, priority: '0.9', changefreq: 'weekly' };
    }

    // Appliance detail pages
    if (route.startsWith('/geraete/')) {
      return { url: fullUrl, priority: '0.8', changefreq: 'weekly' };
    }

    // Trust & Contact
    if (
      route === '/ueber-uns' ||
      route === '/quellen-methodik' ||
      route === '/kontakt' ||
      nonDefaultLangs.some((l) => route === `/${l}/ueber-uns` || route === `/${l}/quellen-methodik` || route === `/${l}/kontakt`)
    ) {
      return { url: fullUrl, priority: '0.5', changefreq: 'monthly' };
    }

    // Default for specialized calculators and guides
    return { url: fullUrl, priority: '0.8', changefreq: 'weekly' };
  });

  // 4. Construct clean XML output adhering to sitemap 0.9 protocol
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
