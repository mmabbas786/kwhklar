interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // 1. Edge Canonical Redirect: Redirect www.kwhklar.de or workers.dev to apex domain https://kwhklar.de
    if (url.hostname === 'www.kwhklar.de' || url.hostname.endsWith('.workers.dev')) {
      url.hostname = 'kwhklar.de';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    // 2. Legacy Multilingual URL Migration: 301 Redirect obsolete locales (en, es, ja, fr, pt, ko, it) to German canonical routes
    const localeMatch = url.pathname.match(/^\/(en|es|ja|fr|pt|ko|it)(\/.*)?$/);
    if (localeMatch) {
      const rest = localeMatch[2] || '/';
      const cleanPath = rest.startsWith('/') ? rest : `/${rest}`;
      url.pathname = cleanPath;
      return Response.redirect(url.toString(), 301);
    }

    // 2. Fetch the static asset from Cloudflare Edge Asset binding
    let response = await env.ASSETS.fetch(request);

    // If 404 on directory root or clean route, try appending /index.html
    if (response.status === 404 && !url.pathname.includes('.')) {
      const cleanPath = url.pathname.endsWith('/') ? `${url.pathname}index.html` : `${url.pathname}/index.html`;
      const fallbackUrl = new URL(cleanPath, request.url);
      const fallbackReq = new Request(fallbackUrl.toString(), request);
      const fallbackRes = await env.ASSETS.fetch(fallbackReq);
      if (fallbackRes.status === 200) {
        response = fallbackRes;
      }
    }

    // 3. Clone response headers to attach edge security & SEO headers
    const newHeaders = new Headers(response.headers);

    // Modern Web Security Headers
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    newHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // Granular Edge Caching Headers
    if (url.pathname.startsWith('/_astro/') || url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|woff2?)$/)) {
      // Long-term immutable caching for static hashes and media
      newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (url.pathname === '/sitemap.xml' || url.pathname === '/robots.txt' || url.pathname === '/llms.txt' || url.pathname === '/llms-full.txt') {
      // Short-term caching for search engine & AI crawlers
      newHeaders.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    } else {
      // HTML pages: Instant revalidation with Cloudflare edge caching
      newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=86400, must-revalidate');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
