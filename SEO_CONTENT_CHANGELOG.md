# SEO Content Changelog — kWhKlar.de

## Project Overview
- **Domain:** `https://kwhklar.de`
- **Scope:** Master SEO Content Optimization across the entire German website.
- **Language Policy:** German-only (no multilingual paths, no `/de/`, no hreflang, no translation widgets).

---

## Key Improvements & Changes

### 1. Calculation Engine Bug Fix & Precision Verification
- **Hourly kWh Calculation Fix:**
  - Resolved calculation display bug in `UniversalCalculator.astro` where `1.000 W × 1 h` previously formatted as `1.000 kWh` (confused with 1000 kWh in German decimal formatting).
  - Fixed SSR and client-side formatting so that `1.000 W × 1 h` displays correctly as `1 kWh` (or `0,1 kWh` for 100W, `0,5 kWh` for 500W).
  - Added unit regression tests in `tests/calculators.test.ts` (19 automated tests passing).

### 2. Main Navigation Hubs Optimization (800–1,900+ Words & 14–15 FAQs Each)
1. **`/stromkosten-rechner`**:
   - Expanded to 1,910 rendered words with 14 comprehensive FAQs.
   - Added distinction between Power (Watt/kW) and Energy (Wh/kWh), power-to-energy conversion tables (10 W to 3,000 W), 3 worked examples (60 W LED, 400 W PC, 2,000 W Heizlüfter), and common calculation pitfalls.
2. **`/geraete`**:
   - Expanded to 1,372 rendered words with 15 comprehensive FAQs.
   - Added deep dive into rated power vs. duty cycle / cycling (thermostats, inverters, wash cycles), instructions for digital power meters, and 25-device comparison matrix.
3. **`/stromverbrauch-haushalt`**:
   - Expanded to 1,576 rendered words with 14 comprehensive FAQs.
   - Added interactive benchmark selector for 1–5 persons, apartment vs. house, electric vs. central hot water. Addressed 5/10/20 kWh daily and 1,000–4,000 kWh annual consumption benchmarks with accurate Stromspiegel/co2online citations.
4. **`/strompreis`**:
   - Expanded to 1,126 rendered words with 14 comprehensive FAQs.
   - Grounded in BNetzA/BDEW 2026 data. Clear distinction between reference price (35 ct/kWh), competitive new customer tariffs (27–31 ct/kWh), and Grundversorgung (39–45 ct/kWh). Includes cost table for 1–5,000 kWh.
5. **`/stromrechnung`**:
   - Expanded to 1,159 rendered words with 14 comprehensive FAQs.
   - Added 8-step bill inspection checklist, meter reading guide (estimated vs. measured), explanation of advance payments (Abschläge), and legal rights under § 40 & § 40c EnWG.
6. **`/strom-sparen`**:
   - Expanded to 1,320 rendered words with 14 comprehensive FAQs.
   - Added room-by-room savings guide (kitchen, laundry, living room, home office), standby elimination strategies, and realistic source-supported savings ranges.

### 3. Cluster Pages & Sub-Calculators (500–880+ Words & 10–13 FAQs Each)
- Optimized 51 standalone subpages across all thematic clusters:
  - **Household benchmarks:** 1-person to 5-person guides, apartment vs. house, per-person metrics.
  - **Time-based calculators:** Per hour, per day, per week, per month, per year.
  - **Core utility calculators:** Watt calculator, kWh calculator, bill calculators, dynamic tariff guides.
  - **Green energy hubs:** Balcony solar (Balkonkraftwerk), Heat pumps (Wärmepumpe), Electric vehicles (E-Auto), Photovoltaics (PV).
  - **25 Appliance Pages:** High-depth data models with pre-filled calculators, duty cycle explanations, and specific saving advice.

### 4. Technical SEO, Internal Linking & Structured Data
- Strict single `<h1>` tag on every page with logical `<h2>` and `<h3>` hierarchy.
- Schema.org JSON-LD structured data on all pages (`WebSite`, `Organization`, `Calculator`, `FAQPage`, `BreadcrumbList`).
- Verified zero errors across `astro check`, `vitest run`, `audit-seo.ts`, and production static build (80 pages generated in SSG mode).
