import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

interface AuditResult {
  totalFiles: number;
  brokenLinks: { from: string; to: string }[];
  missingTitles: string[];
  missingDescriptions: string[];
  missingH1s: string[];
  duplicateH1s: { file: string; count: number }[];
  canonicalMismatches: { file: string; expected: string; actual: string }[];
  orphanPages: string[];
  invalidJsonLd: { file: string; error: string }[];
}

function runAudit() {
  console.log('🔍 Starting kWhKlar SEO, Link & Crawl Audit...\n');

  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // 1. Gather all HTML files
  const htmlFiles: string[] = [];

  function scan(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        htmlFiles.push(fullPath);
      }
    }
  }

  scan(distDir);

  const results: AuditResult = {
    totalFiles: htmlFiles.length,
    brokenLinks: [],
    missingTitles: [],
    missingDescriptions: [],
    missingH1s: [],
    duplicateH1s: [],
    canonicalMismatches: [],
    orphanPages: [],
    invalidJsonLd: [],
  };

  const internalGraph: Record<string, Set<string>> = {};
  const validRouteSet = new Set<string>();

  // Map files to routes
  const fileToRoute = (filePath: string): string => {
    const rel = path.relative(distDir, filePath).replace(/\\/g, '/');
    if (rel === 'index.html') return '/';
    if (rel.endsWith('/index.html')) return '/' + rel.replace('/index.html', '');
    if (rel.endsWith('.html')) return '/' + rel.replace('.html', '');
    return '/' + rel;
  };

  htmlFiles.forEach((f) => {
    const route = fileToRoute(f);
    validRouteSet.add(route);
    internalGraph[route] = new Set();
  });

  // 2. Audit each HTML file
  for (const filePath of htmlFiles) {
    const currentRoute = fileToRoute(filePath);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Check <title>
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      results.missingTitles.push(currentRoute);
    }

    // Check meta description
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
      || content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
    if (!descMatch || !descMatch[1].trim()) {
      results.missingDescriptions.push(currentRoute);
    }

    // Check H1
    const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    if (!h1Matches || h1Matches.length === 0) {
      results.missingH1s.push(currentRoute);
    } else if (h1Matches.length > 1) {
      results.duplicateH1s.push({ file: currentRoute, count: h1Matches.length });
    }

    // Check Canonical
    const isNoIndex = content.includes('name="robots" content="noindex');
    if (!isNoIndex) {
      const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
      const expectedCanonical = currentRoute === '/' ? 'https://kwhklar.de' : `https://kwhklar.de${currentRoute}`;
      if (!canonicalMatch) {
        results.canonicalMismatches.push({ file: currentRoute, expected: expectedCanonical, actual: 'NONE' });
      } else {
        const actual = canonicalMatch[1];
        if (actual !== expectedCanonical && actual !== `${expectedCanonical}/`) {
          results.canonicalMismatches.push({ file: currentRoute, expected: expectedCanonical, actual });
        }
      }
    }

    // Check JSON-LD
    const jsonLdMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
    if (jsonLdMatches) {
      for (const tag of jsonLdMatches) {
        const jsonStr = tag.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
        try {
          JSON.parse(jsonStr);
        } catch (e: any) {
          results.invalidJsonLd.push({ file: currentRoute, error: e.message });
        }
      }
    }

    // Check Hreflang Tags (DE, EN, ES, JA, FR, PT, KO, IT, X-DEFAULT)
    if (!isNoIndex && currentRoute !== '/404' && currentRoute !== '/500') {
      const requiredLangs = ['de', 'en', 'es', 'ja', 'fr', 'pt', 'ko', 'it', 'x-default'];
      for (const rLang of requiredLangs) {
        if (!content.includes(`hreflang="${rLang}"`)) {
          results.canonicalMismatches.push({
            file: currentRoute,
            expected: `hreflang="${rLang}"`,
            actual: 'MISSING',
          });
        }
      }
    }

    // Extract Links <a href="...">
    const linkMatches = content.matchAll(/<a\s+[^>]*href=["']([^"']*)["']/gi);
    for (const m of linkMatches) {
      const href = m[1].trim();
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
        continue;
      }
      if (href.startsWith('http://') || href.startsWith('https://')) {
        if (!href.startsWith('https://kwhklar.de')) {
          continue; // external link
        }
      }

      let cleanTarget = href.replace('https://kwhklar.de', '');
      if (!cleanTarget.startsWith('/')) cleanTarget = '/' + cleanTarget;
      cleanTarget = cleanTarget.split('#')[0].split('?')[0];
      if (cleanTarget.length > 1 && cleanTarget.endsWith('/')) {
        cleanTarget = cleanTarget.slice(0, -1);
      }

      if (!validRouteSet.has(cleanTarget) && cleanTarget !== '/favicon.svg') {
        results.brokenLinks.push({ from: currentRoute, to: href });
      } else if (validRouteSet.has(cleanTarget)) {
        internalGraph[cleanTarget].add(currentRoute);
      }
    }
  }

  // 3. Orphan Detection (Indexable pages with 0 incoming links, except homepage)
  for (const route of validRouteSet) {
    if (route === '/' || route === '/404' || route === '/500') continue;
    const incoming = internalGraph[route];
    if (!incoming || incoming.size === 0) {
      results.orphanPages.push(route);
    }
  }

  // 4. Sitemap Validation
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  const sitemapErrors: string[] = [];
  let sitemapCount = 0;

  if (!fs.existsSync(sitemapPath)) {
    sitemapErrors.push('sitemap.xml not found in dist/');
  } else {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    sitemapCount = locMatches.length;

    // Check all indexable routes exist in sitemap
    for (const route of validRouteSet) {
      if (
        route === '/404' ||
        route === '/500' ||
        route === '/impressum' ||
        route === '/datenschutz' ||
        route.endsWith('/impressum') ||
        route.endsWith('/datenschutz')
      ) {
        continue;
      }
      const expectedUrl = route === '/' ? 'https://kwhklar.de' : `https://kwhklar.de${route}`;
      if (!locMatches.includes(expectedUrl)) {
        sitemapErrors.push(`Indexable route missing in sitemap: ${expectedUrl}`);
      }
    }

    // Check sitemap contains no unexpected routes
    for (const url of locMatches) {
      let route = url.replace('https://kwhklar.de', '');
      if (route === '') route = '/';
      if (!validRouteSet.has(route)) {
        sitemapErrors.push(`Sitemap contains invalid or non-existent route: ${url}`);
      }
      if (route === '/404' || route === '/500') {
        sitemapErrors.push(`Sitemap illegally contains noindex/error route: ${url}`);
      }
    }
  }

  // 5. Robots.txt Validation
  const robotsPath = path.join(distDir, 'robots.txt');
  const robotsErrors: string[] = [];
  if (!fs.existsSync(robotsPath)) {
    robotsErrors.push('robots.txt not found in dist/');
  } else {
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    if (!robotsContent.includes('Sitemap: https://kwhklar.de/sitemap.xml')) {
      robotsErrors.push('robots.txt missing Sitemap declaration');
    }
    if (!robotsContent.includes('User-agent: *')) {
      robotsErrors.push('robots.txt missing User-agent: *');
    }
  }

  // 6. Output Audit Report
  console.log(`========================================`);
  console.log(`📊 kWhKlar SEO, Graph, Sitemap & Robots Audit`);
  console.log(`========================================`);
  console.log(`Total HTML pages inspected:   ${results.totalFiles}`);
  console.log(`Sitemap URLs indexed:         ${sitemapCount}`);
  console.log(`Sitemap integrity issues:     ${sitemapErrors.length}`);
  console.log(`Robots.txt integrity issues:  ${robotsErrors.length}`);
  console.log(`Broken internal links:        ${results.brokenLinks.length}`);
  console.log(`Missing titles:               ${results.missingTitles.length}`);
  console.log(`Missing descriptions:         ${results.missingDescriptions.length}`);
  console.log(`Missing H1s:                  ${results.missingH1s.length}`);
  console.log(`Duplicate H1s:                ${results.duplicateH1s.length}`);
  console.log(`Canonical mismatches:         ${results.canonicalMismatches.length}`);
  console.log(`Orphan indexable pages:       ${results.orphanPages.length}`);
  console.log(`Invalid JSON-LD tags:         ${results.invalidJsonLd.length}`);
  console.log(`========================================\n`);

  let hasError = false;

  if (robotsErrors.length > 0) {
    hasError = true;
    console.error('❌ Robots.txt Errors:', robotsErrors);
  }

  if (sitemapErrors.length > 0) {
    hasError = true;
    console.error('❌ Sitemap Errors:', sitemapErrors);
  }

  if (results.brokenLinks.length > 0) {
    hasError = true;
    console.error('❌ Broken Links Found:');
    results.brokenLinks.forEach((b) => console.error(`   From: ${b.from} -> To: ${b.to}`));
  }

  if (results.missingTitles.length > 0) {
    hasError = true;
    console.error('❌ Missing Titles:', results.missingTitles);
  }

  if (results.missingDescriptions.length > 0) {
    hasError = true;
    console.error('❌ Missing Descriptions:', results.missingDescriptions);
  }

  if (results.missingH1s.length > 0) {
    hasError = true;
    console.error('❌ Missing H1s:', results.missingH1s);
  }

  if (results.canonicalMismatches.length > 0) {
    hasError = true;
    console.error('❌ Canonical Mismatches:', results.canonicalMismatches);
  }

  if (results.orphanPages.length > 0) {
    hasError = true;
    console.error('❌ Orphan Pages Found (0 incoming links):', results.orphanPages);
  }

  if (results.invalidJsonLd.length > 0) {
    hasError = true;
    console.error('❌ Invalid JSON-LD tags:', results.invalidJsonLd);
  }

  if (hasError) {
    console.error('\n💥 SEO Audit FAILED: Critical issues must be resolved before deployment.');
    process.exit(1);
  } else {
    console.log('✅ ALL SEO, Graph, Link & Metadata Checks PASSED with 0 errors!');
  }
}

runAudit();
