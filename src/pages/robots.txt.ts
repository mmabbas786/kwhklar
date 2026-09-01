import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robots = `# ==============================================================================
# kWhKlar Robots Exclusion Protocol (robots.txt)
# Website: https://kwhklar.de
# ==============================================================================

User-agent: *
Allow: /

# Exclude non-indexable utility & error pages
Disallow: /404
Disallow: /500

# Canonical Sitemap Declaration
Sitemap: https://kwhklar.de/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
