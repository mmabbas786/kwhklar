# kWhKlar (`https://kwhklar.de`)

> **Deutschlands transparente Plattform für Stromkosten, Stromverbrauch & Energie-Berechnungen.**

---

## 📁 Repository & Folder Architecture

```text
KWhKlar/
├── .gitignore                  # Git exclusions (dist, node_modules, .astro, .env)
├── astro.config.mjs            # Astro 5 configuration with Tailwind v4 Vite plugin
├── package.json                # Project scripts, dependencies, and typecheck configs
├── tsconfig.json               # TypeScript strict configuration
├── prd.md                      # Comprehensive Product Requirement Document (PRD)
│
├── public/                     # Static Web Assets (served directly at root /)
│   ├── icon.png                # Primary brand logo
│   ├── favicon.ico             # Classic favicon
│   ├── favicon.svg             # Modern vector favicon
│   ├── favicon-16x16.png       # Standard 16px favicon
│   ├── favicon-32x32.png       # Standard 32px favicon
│   ├── favicon-96x96.png       # Standard 96px favicon
│   ├── apple-icon-*.png        # Apple Touch icon suite (57x57 up to 180x180)
│   ├── android-icon-*.png      # Android Chrome icons (36x36 up to 192x192)
│   ├── ms-icon-*.png           # Windows / Microsoft Tile icons
│   ├── manifest.json           # Web App Manifest
│   └── browserconfig.xml       # Microsoft Tiles XML configuration
│
├── scripts/                    # Build & Quality Automation
│   └── audit-seo.ts            # SEO link crawler, orphan detector & sitemap validator
│
├── src/                        # Application Source Code
│   ├── assets/                 # Raw/Source Design Assets
│   │   ├── icon.png
│   │   └── icon.svg
│   │
│   ├── components/             # Reusable Astro & UI Components
│   │   ├── calculator/         # Interactive calculator islands (UniversalCalculator.astro)
│   │   ├── cards/              # Category, Appliance & Guide cards
│   │   ├── content/            # FAQ accordions & content sections
│   │   ├── layout/             # Header navbar, theme switch & Footer
│   │   ├── seo/                # Breadcrumbs, Schema markup & OpenGraph tags
│   │   └── trust/              # Official data source boxes & methodology tags
│   │
│   ├── data/                   # Structured Datasets & Constants
│   │   ├── appliances.ts       # 25+ appliance profiles, watt ranges & usage defaults
│   │   ├── electricity-price.ts# German electricity prices, levies & cost breakdown
│   │   ├── household-benchmarks.ts # Stromspiegel & BDEW household benchmark data
│   │   ├── keywords.ts         # SEO keyword mapping
│   │   ├── seo-pages.ts        # Dynamic page metadata & content schemas
│   │   └── sources.ts          # Citations (BNetzA, BDEW, Destatis, Stromspiegel)
│   │
│   ├── layouts/                # Base & Page Layouts
│   │   └── BaseLayout.astro    # Master HTML shell with theme & favicon meta tags
│   │
│   ├── lib/                    # Core Business Logic & Utilities
│   │   ├── calculators.ts      # Pure math calculation engines (Watt, kWh, Euro, JAZ)
│   │   ├── formatters.ts       # German currency (1.234,56 €) & number formatters
│   │   ├── seo.ts              # Canonical URL & metadata builders
│   │   ├── structured-data.ts  # JSON-LD Schema generators (FAQ, Article, Breadcrumb)
│   │   └── validation.ts       # Safe numerical input sanitizers
│   │
│   ├── pages/                  # Static Route Tree (80 generated pages)
│   │   ├── index.astro         # Homepage with hero calculator & benchmarks
│   │   ├── 404.astro           # Custom 404 error page
│   │   ├── 500.astro           # Custom 500 error page
│   │   ├── robots.txt.ts       # Dynamic robots.txt endpoint
│   │   ├── sitemap.xml.ts      # Dynamic XML sitemap generator
│   │   ├── geraete/            # 25+ appliance deep dives (`[slug].astro`)
│   │   ├── waermepumpe/        # Heat pump calculator cluster
│   │   ├── e-auto/             # EV charging calculator cluster
│   │   ├── balkonkraftwerk/    # Balcony solar saving calculators
│   │   ├── photovoltaik/       # Solar self-consumption calculators
│   │   ├── strompreis/         # German electricity price cluster
│   │   ├── stromrechnung/      # Bill audit & breakdown cluster
│   │   └── ...                 # Timeframe, person & household calculator pages
│   │
│   └── styles/
│       └── global.css          # Tailwind CSS v4 design tokens & theme transitions
│
└── tests/
    └── calculators.test.ts     # Vitest mathematical test suite (12 unit tests)
```

---

## ⚡ Developer & Build Commands

```bash
# Start local development server (with hot reload)
npm run dev

# Run Astro static type-check (0 errors, 0 warnings)
npm run check

# Run Vitest unit tests (12/12 math engine tests)
npm run test

# Compile static production build into dist/ (80 pages generated)
npm run build

# Run automated SEO, Link-Graph & Sitemap audit
npm run audit:seo
```
