# kWhKlar.de --- Complete Product Requirements Document (PRD)

**Document:** Master Product Requirements Document\
**Product:** kWhKlar\
**Domain:** `kwhklar.de`\
**Primary market:** Germany (de-DE)\
**Secondary market:** German-speaking DACH where applicable\
**Product type:** SEO-first electricity calculation and energy
information platform\
**Primary stack:** Astro + TypeScript + Tailwind CSS v4\
**Deployment target:** Vercel or Cloudflare Pages\
**Document status:** Production build specification\
**Implementation mode:** One complete implementation pass, followed by
automated self-audit and repair before handoff

------------------------------------------------------------------------

## 1. Executive Summary

kWhKlar.de is a German-language, SEO-first electricity calculation
platform designed to become a trusted destination for calculating
electricity consumption and electricity costs.

The product combines:

1.  Fast, accurate client-side calculators.
2.  Search-intent-focused explanatory pages.
3.  Appliance-specific electricity cost pages.
4.  Household electricity consumption benchmarks.
5.  Electricity-price education and source transparency.
6.  Electricity-bill explanation and checking content.
7.  Energy-saving guides.
8.  Expansion hubs for heat pumps, electric cars, solar, balcony PV and
    storage.
9.  Strong technical SEO and internal linking.
10. A trustworthy, accessible and fast user experience.
11. A monetization-ready architecture that can support AdSense and
    carefully selected affiliate partnerships later.

The product must feel like a real consumer utility rather than a
collection of SEO pages.

The central product promise is:

> **Stromkosten & Energieverbrauch einfach berechnen**

The site must be useful even if all advertising is disabled.

------------------------------------------------------------------------

# 2. Source Basis and Design Principles

This PRD incorporates and improves the supplied kWhKlar build
specification.

The supplied specification establishes the core requirements around
Astro, Tailwind CSS v4, German-only content, the kWhKlar brand,
calculator architecture, appliance pages, household pages,
electricity-price clusters, bill content, savings content, expansion
hubs, legal/trust pages, centralized data, internal linking, structured
data, accessibility, performance and deployment readiness.

The original specification is preserved as the architectural foundation,
but this PRD adds:

-   Search-intent architecture.
-   Keyword cannibalization controls.
-   Data provenance requirements.
-   Factual-claim validation.
-   Page-quality gates.
-   Crawl simulation.
-   Orphan-page detection.
-   Better indexability rules.
-   Legal-content safeguards.
-   Analytics/privacy safeguards.
-   Build/test/fix workflow.
-   Content templates.
-   Data models.
-   Calculator specifications.
-   Internal-linking rules.
-   Deployment acceptance criteria.
-   Future expansion rules.

The original requirements explicitly call for Astro, Tailwind v4, German
content, kwhklar.de, the kWhKlar brand, centralized electricity-price
data, transparent formulas, client-side calculators, accessibility,
performance, legal/trust pages, sitemap, canonicals and structured data.
Those requirements remain mandatory.

------------------------------------------------------------------------

# 3. Product Vision

## Vision

Make electricity consumption and electricity costs understandable to
ordinary German households.

A user should be able to arrive from Google with a question such as:

-   "Was kostet ein Gaming PC im Monat?"
-   "Wie viel Strom verbraucht ein Kühlschrank?"
-   "Was kostet 1000 Watt pro Stunde?"
-   "Wie viel sind 500 kWh in Euro?"
-   "Wie hoch ist der Stromverbrauch einer 4-köpfigen Familie?"
-   "Was kostet eine Klimaanlage pro Stunde?"
-   "Wie berechne ich meine Stromkosten?"
-   "Wie viel kostet eine kWh Strom?"
-   "Warum ist meine Stromrechnung so hoch?"

...and immediately get a useful answer, calculator and next logical
step.

## Product positioning

kWhKlar is:

-   a calculation platform,
-   an educational energy resource,
-   a household electricity reference,
-   a transparent source-based information site.

kWhKlar is not initially:

-   a full electricity tariff comparison portal,
-   an electricity supplier,
-   a billing provider,
-   a financial product,
-   a utility company,
-   a user-account platform.

------------------------------------------------------------------------

# 4. Goals

## Primary goals

### G1 --- Organic search visibility

Build a strong topical cluster around:

-   Stromkosten
-   Stromverbrauch
-   kWh
-   Watt
-   Strompreis
-   Stromrechnung
-   Haushaltsverbrauch
-   Geräteverbrauch
-   Energiesparen
-   Wärmepumpe
-   E-Auto
-   Solar/Balkonkraftwerk

### G2 --- Calculator usage

Convert search visitors into calculator users.

### G3 --- Trust

Every numerical benchmark and price statement must be transparent, dated
and sourced.

### G4 --- Excellent UX

A user should understand the answer before needing to read a long
article.

### G5 --- Technical SEO

All intended SEO pages must be crawlable, renderable, indexable and
internally discoverable.

### G6 --- Monetization readiness

Build the site to strong publisher-quality standards so it can be
evaluated for AdSense once the owner has completed the necessary
account, ownership, privacy and configuration requirements.

Do not manufacture content merely for AdSense.

### G7 --- Expandability

The architecture must allow hundreds of useful additional
calculators/pages without redesigning the application.

------------------------------------------------------------------------

# 5. Non-Goals for V1

Do not build these unless explicitly required later:

-   User accounts.
-   Login.
-   Cloud database.
-   Saved calculations.
-   Electricity bill upload.
-   OCR.
-   Personal energy profiles.
-   Real-time tariff marketplace.
-   Supplier switching engine.
-   Payment processing.
-   Complex backend APIs.
-   AI chatbot.
-   User-generated content.
-   Community forum.
-   Comments.
-   Multi-language versions.

------------------------------------------------------------------------

# 6. Target Users

## Persona A --- Household calculator user

Needs:

> "Ich möchte schnell wissen, was ein Gerät an Strom kostet."

Characteristics:

-   Mobile-heavy.
-   Wants an immediate answer.
-   May not understand kWh.
-   Usually knows Watt or device type.
-   May not know exact electricity price.

## Persona B --- Household planning user

Needs:

> "Wie viel Strom sollte ein Haushalt mit 2/3/4 Personen verbrauchen?"

Needs benchmarks, explanations and practical context.

## Persona C --- High-consumption device user

Examples:

-   Gaming PC.
-   Klimaanlage.
-   Heizlüfter.
-   Trockner.
-   Aquarium.
-   Pool.
-   Whirlpool.
-   Server/NAS.

Wants cost estimates by hour/day/month/year.

## Persona D --- Bill-checking user

Needs:

-   Understand bill.
-   Check whether consumption seems unusual.
-   Understand kWh vs €.
-   Understand work price and base price.

## Persona E --- Energy-saving user

Needs:

-   Find electricity consumers.
-   Reduce consumption.
-   Estimate savings.

------------------------------------------------------------------------

# 7. Core Product Experience

The primary user journey:

``` text
Google Search
    ↓
Relevant SEO landing page
    ↓
Immediate answer
    ↓
Calculator
    ↓
Personalized result
    ↓
Explanation
    ↓
Related calculator / device / household guide
    ↓
Savings guidance
    ↓
Optional future monetization CTA
```

The site must never force a user through unnecessary pages before
providing the answer.

------------------------------------------------------------------------

# 8. Brand

## Brand

**kWhKlar**

## Domain

**kwhklar.de**

## Tagline

**Stromkosten & Energieverbrauch einfach berechnen**

## Brand personality

-   Clear.
-   Reliable.
-   Practical.
-   Calm.
-   Modern.
-   German.
-   Consumer-friendly.
-   Transparent.
-   Non-alarmist.

## Voice

Use:

-   "Du" or a consistent neutral German consumer style throughout the
    site.
-   Short sentences.
-   Simple explanations.
-   Concrete examples.
-   No unnecessary technical jargon.

Do not use:

-   exaggerated claims,
-   clickbait,
-   fear,
-   fake urgency,
-   "100% accurate" when estimates are involved,
-   unsupported superlatives,
-   invented authority.

------------------------------------------------------------------------

# 9. Information Architecture

## Primary navigation

-   Rechner
-   Geräte
-   Haushalt
-   Strompreis
-   Stromrechnung
-   Sparen
-   Ratgeber

## Utility navigation

-   Über uns
-   Quellen & Methodik
-   Kontakt
-   Datenschutz
-   Impressum

## Main hierarchy

``` text
/
├── Rechner
│   ├── /stromkosten-rechner
│   ├── /stromverbrauch-rechner
│   ├── /kwh-rechner
│   ├── /watt-rechner
│   ├── /stromkosten-pro-stunde
│   ├── /stromkosten-pro-tag
│   ├── /stromkosten-pro-woche
│   ├── /stromkosten-pro-monat
│   ├── /stromkosten-pro-jahr
│   └── /stromverbrauch-haushalt
│
├── Geräte
│   └── /geraete/*
│
├── Haushalt
│   ├── /stromverbrauch-1-person
│   ├── /stromverbrauch-2-personen
│   ├── /stromverbrauch-3-personen
│   ├── /stromverbrauch-4-personen
│   ├── /stromverbrauch-5-personen
│   ├── /stromverbrauch-wohnung
│   ├── /stromverbrauch-einfamilienhaus
│   ├── /durchschnittlicher-stromverbrauch
│   └── /stromverbrauch-pro-person
│
├── Strompreis
│   ├── /strompreis
│   ├── /strompreis-pro-kwh
│   ├── /strompreis-aktuell
│   ├── /strompreis-deutschland
│   ├── /strompreis-entwicklung
│   ├── /strompreis-zusammensetzung
│   └── /dynamische-stromtarife
│
├── Stromrechnung
│   ├── /stromrechnung
│   ├── /stromrechnung-berechnen
│   ├── /stromrechnung-zu-hoch
│   ├── /stromrechnung-beispiel
│   ├── /stromrechnung-pruefen
│   └── /stromrechnung-senken
│
├── Sparen
│   ├── /strom-sparen
│   ├── /stromfresser
│   ├── /standby-strom
│   ├── /stromverbrauch-senken
│   ├── /strom-sparen-tipps
│   └── /stromanbieter-wechseln
│
├── Wärmepumpe
├── E-Auto
├── Solar
└── Trust/Legal
```

------------------------------------------------------------------------

# 10. Critical SEO Rule: Search Intent Before URLs

Do NOT create a page merely because a keyword variant exists.

Before creating an indexable page, classify:

1.  Primary search intent.
2.  Searcher's desired answer.
3.  Required tool/calculator.
4.  Unique information.
5.  Parent topic.
6.  Supporting entities.
7.  Existing competing internal page.
8.  Canonical URL.
9.  Internal-link role.

## One intent = one primary canonical page

Do not create multiple near-identical pages solely for:

-   singular/plural variations,
-   word-order variations,
-   minor keyword variants,
-   artificial long-tail variations,
-   city/state variations without genuine local intent.

If two proposed URLs satisfy substantially the same intent, consolidate
them.

## Example

Do not automatically create five thin pages because these keywords
exist:

-   Stromkosten pro Stunde
-   Stromkosten pro Tag
-   Stromkosten pro Woche
-   Stromkosten pro Monat
-   Stromkosten pro Jahr

If the best user experience is one calculator that handles all periods,
use one strong canonical calculator and cover the variations naturally.

Create separate pages only when the intent and content genuinely differ.

------------------------------------------------------------------------

# 11. Keyword Architecture

The implementation must create a structured keyword map before page
generation.

Each keyword record should contain:

``` ts
interface KeywordTarget {
  keyword: string;
  cluster: string;
  intent: "informational" | "calculator" | "commercial" | "transactional";
  canonicalPath: string;
  primary: boolean;
  supportingTerms: string[];
  entities: string[];
  parentCluster: string;
  cannibalizationRisk: "low" | "medium" | "high";
}
```

## Core keyword clusters

### Cluster A --- Stromkosten

Primary:

-   Stromkostenrechner
-   Stromkosten Rechner
-   Stromkosten berechnen
-   Stromkosten berechnen lassen
-   Stromkosten pro kWh
-   Stromkosten pro Stunde
-   Stromkosten pro Tag
-   Stromkosten pro Monat
-   Stromkosten pro Jahr

Supporting:

-   Stromkosten Gerät
-   Stromkosten berechnen Watt
-   Stromkosten berechnen kWh
-   Stromverbrauch Kosten
-   Stromkosten Haushalt

### Cluster B --- Stromverbrauch

Primary:

-   Stromverbrauch berechnen
-   Stromverbrauchsrechner
-   Stromverbrauch Haushalt
-   durchschnittlicher Stromverbrauch
-   Stromverbrauch pro Person
-   Stromverbrauch Wohnung
-   Stromverbrauch Einfamilienhaus

### Cluster C --- kWh

-   kWh Rechner
-   kWh Kosten Rechner
-   kWh berechnen
-   kWh in Euro
-   1 kWh Kosten
-   100 kWh Kosten
-   500 kWh Kosten
-   1000 kWh Kosten

### Cluster D --- Watt

-   Watt Rechner
-   Watt in kWh
-   Watt Stromkosten
-   100 Watt Stromkosten
-   500 Watt Stromkosten
-   1000 Watt Stromkosten

### Cluster E --- Strompreis

-   Strompreis
-   Strompreis pro kWh
-   aktueller Strompreis
-   Strompreis Deutschland
-   Strompreis Entwicklung
-   Strompreis Zusammensetzung
-   Arbeitspreis Strom
-   Grundpreis Strom
-   dynamischer Stromtarif

### Cluster F --- Geräte

Examples:

-   Kühlschrank Stromkosten
-   Waschmaschine Stromkosten
-   Trockner Stromkosten
-   Geschirrspüler Stromkosten
-   Backofen Stromkosten
-   Herd Stromkosten
-   Wasserkocher Stromkosten
-   Kaffeemaschine Stromkosten
-   Fernseher Stromkosten
-   PC Stromkosten
-   Gaming PC Stromkosten
-   Laptop Stromkosten
-   Monitor Stromkosten
-   PS5 Stromkosten
-   Xbox Stromkosten
-   Klimaanlage Stromkosten
-   Ventilator Stromkosten
-   Heizlüfter Stromkosten
-   Luftentfeuchter Stromkosten
-   Aquarium Stromkosten
-   Pool Stromkosten
-   Whirlpool Stromkosten
-   3D Drucker Stromkosten
-   NAS Stromkosten
-   Server Stromkosten

### Cluster G --- Wärmepumpe

-   Wärmepumpe Stromverbrauch
-   Wärmepumpe Stromkosten
-   Wärmepumpe Stromverbrauch pro Jahr
-   Wärmepumpe Stromverbrauch Winter
-   Wärmepumpe Altbau Stromverbrauch
-   Luft-Wasser-Wärmepumpe Stromverbrauch
-   Erdwärmepumpe Stromverbrauch

### Cluster H --- E-Auto

-   E-Auto Stromkosten
-   E-Auto Ladekosten
-   E-Auto Kosten pro 100 km
-   Elektroauto Stromverbrauch
-   E-Auto kWh pro 100 km

### Cluster I --- Sparen

-   Strom sparen
-   Stromfresser
-   Standby Strom
-   Stromverbrauch senken
-   Strom sparen Tipps
-   Stromanbieter wechseln

The final implementation must expand the keyword universe through
research and semantic relationships, but must never turn every
discovered keyword into a separate thin URL.

------------------------------------------------------------------------

# 12. SEO Page Mapping

Create a machine-readable SEO registry.

Example:

``` ts
interface SeoPage {
  path: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  cluster: string;
  calculator?: string;
  canonical: string;
  indexable: boolean;
  priority: number;
  relatedPages: string[];
}
```

Every SEO page must have exactly one canonical URL.

------------------------------------------------------------------------

# 13. Homepage Requirements

## URL

`/`

## Primary intent

Brand discovery + broad electricity calculation.

## Hero

H1:

> Stromkosten & Energieverbrauch einfach berechnen

Subheading:

Explain the value proposition in one or two concise sentences.

## Hero calculator

Inputs:

-   Leistung in Watt.
-   Betriebszeit per day.
-   Electricity price in ct/kWh.
-   Optional Grundpreis.

Outputs:

-   kWh/day
-   €/day
-   kWh/week
-   €/week
-   kWh/month
-   €/month
-   kWh/year
-   €/year

## Homepage sections

1.  Hero calculator.
2.  Popular calculations.
3.  Popular devices.
4.  Household consumption.
5.  Current reference electricity price.
6.  How electricity costs are calculated.
7.  Savings section.
8.  Popular guides.
9.  Trust/source section.
10. FAQ where useful.
11. Internal-link hub.

------------------------------------------------------------------------

# 14. Calculator Product Specification

All calculators must use a shared calculation engine.

## Core formula

``` text
kWh = Watt × Stunden ÷ 1000
```

Cost:

``` text
Kosten = kWh × Strompreis
```

If price is entered in ct/kWh:

``` text
Kosten (€) = kWh × (ct/kWh ÷ 100)
```

## With Grundpreis

Do not simply add the monthly Grundpreis to every device result.

Instead distinguish:

### Consumption-only cost

Based on energy usage and Arbeitspreis.

### Household/tariff effective cost

Optional calculation including:

-   Arbeitspreis.
-   Grundpreis.
-   billing period.

The UI must clearly label the difference.

------------------------------------------------------------------------

# 15. Calculator Input Model

``` ts
interface CalculatorInput {
  watt: number;
  hoursPerDay: number;
  daysPerWeek?: number;
  weeksPerYear?: number;
  electricityPriceCtPerKwh: number;
  monthlyBaseFee?: number;
}
```

Validation:

-   Watt \> 0.
-   Hours/day \>= 0.
-   Hours/day \<= 24.
-   Price \> 0.
-   Base fee \>= 0.
-   Prevent NaN.
-   Prevent Infinity.
-   Reject impossible values.
-   Provide German validation messages.

------------------------------------------------------------------------

# 16. Calculator Output Model

``` ts
interface CalculatorResult {
  kwhPerDay: number;
  costPerDay: number;
  kwhPerWeek: number;
  costPerWeek: number;
  kwhPerMonth: number;
  costPerMonth: number;
  kwhPerYear: number;
  costPerYear: number;
}
```

Use an explicit documented assumption for monthly/yearly conversion.

Do not silently mix:

-   30-day month,
-   calendar month,
-   365-day year,
-   52-week year.

The methodology page must document the selected convention.

------------------------------------------------------------------------

# 17. Calculator UX

Every calculator must have:

1.  Clear title.
2.  Short explanation.
3.  Input labels.
4.  Unit displayed beside inputs.
5.  Helpful defaults.
6.  Inline validation.
7.  Instant calculation.
8.  Result cards.
9.  Formula explanation.
10. Worked example.
11. Source/reference information.
12. Reset button.
13. Share option where technically appropriate.
14. Related calculators.
15. Related content.
16. Savings suggestions.

## Mobile requirements

-   No horizontal scrolling.
-   Inputs at least comfortably touchable.
-   Large result cards.
-   Sticky controls only when genuinely useful.
-   Keyboard-friendly numeric inputs.
-   No intrusive popups.

------------------------------------------------------------------------

# 18. Calculator Sharing

Provide a share action that does not require an account.

Preferred options:

-   Web Share API when available.
-   Copy result text.
-   Copy current page URL.

Never put private information into URLs.

If query parameters are used for calculator state:

-   do not index parameterized variants,
-   canonicalize to the clean page,
-   prevent duplicate SEO pages.

------------------------------------------------------------------------

# 19. Device Page System

Every appliance page must be generated from structured data plus
genuinely unique editorial content.

## Appliance data model

``` ts
interface Appliance {
  slug: string;
  name: string;
  category: string;
  typicalWattage?: number;
  wattageMin?: number;
  wattageMax?: number;
  typicalUsageHours?: number;
  usageContext: string;
  calculationDefaults: {
    watt: number;
    hoursPerDay: number;
  };
  sourceIds: string[];
  relatedDevices: string[];
  relatedCalculators: string[];
}
```

## Appliance page template

1.  Breadcrumb.
2.  H1.
3.  Direct answer.
4.  Pre-filled calculator.
5.  Typical consumption range.
6.  Example calculation.
7.  Cost by hour/day/month/year.
8.  Factors affecting consumption.
9.  How to measure actual consumption.
10. Practical savings advice.
11. Source/methodology box.
12. Related appliances.
13. Related calculators.
14. FAQ if useful.

## Critical anti-thin rule

A template may provide structure, but it must not generate identical
paragraphs with only the appliance name changed.

Each appliance page must contain real appliance-specific information.

------------------------------------------------------------------------

# 20. Household Pages

Create pages for:

-   1 person.
-   2 persons.
-   3 persons.
-   4 persons.
-   5 persons.
-   Apartment.
-   Detached house.
-   Per person.
-   Average household consumption.

Each page must explain:

-   expected range,
-   factors,
-   heating caveat,
-   hot-water caveat,
-   home-office impact,
-   household size,
-   living space where relevant,
-   consumption interpretation,
-   ways to reduce consumption.

Never present a benchmark as a universal rule.

Every benchmark must have:

-   source,
-   date/reference period,
-   scope,
-   methodology,
-   limitations.

------------------------------------------------------------------------

# 21. Strompreis Architecture

The electricity-price cluster is high-trust content.

Potential pages:

-   `/strompreis`
-   `/strompreis-pro-kwh`
-   `/strompreis-aktuell`
-   `/strompreis-deutschland`
-   `/strompreis-entwicklung`
-   `/strompreis-zusammensetzung`
-   `/dynamische-stromtarife`

Before creating each URL, perform an intent/cannibalization check.

## Price taxonomy

Clearly distinguish:

-   Arbeitspreis.
-   Grundpreis.
-   Effective tariff price.
-   Reference household price.
-   Historical average.
-   User-entered price.
-   Illustrative calculator default.

Never call an illustrative default "the current German electricity
price."

------------------------------------------------------------------------

# 22. Electricity Price Data System

Create:

``` text
src/data/electricity-price.ts
src/data/sources.ts
src/data/household-benchmarks.ts
src/data/appliances.ts
```

Example:

``` ts
interface PriceReference {
  valueCtPerKwh: number;
  currency: "EUR";
  unit: "ct/kWh";
  country: "DE";
  scope: string;
  referenceDate: string;
  publishedDate?: string;
  sourceId: string;
  methodology: string;
  notes?: string;
}
```

## Data rules

Every current or benchmark value must include:

1.  Value.
2.  Unit.
3.  Scope.
4.  Reference date.
5.  Source.
6.  Methodology.
7.  Limitations.

No unsupported numbers.

No invented sources.

No fake dates.

No fake government statistics.

No fabricated citations.

------------------------------------------------------------------------

# 23. Sources & Methodology Page

URL:

`/quellen-methodik`

This page must explain:

-   How electricity prices are selected.
-   How appliance values are selected.
-   How household benchmarks are handled.
-   How calculations work.
-   How monthly/yearly periods are defined.
-   How source updates happen.
-   What estimates mean.
-   Why actual consumption differs.
-   How users can replace default values with their own data.

Potential source families may include authoritative German sources such
as:

-   Bundesnetzagentur.
-   SMARD.
-   Destatis.
-   co2online/Stromspiegel.
-   Other relevant official or specialist sources.

Do not claim a source was used unless it was actually used.

Maintain a source registry:

``` ts
interface Source {
  id: string;
  name: string;
  publisher: string;
  url: string;
  accessedAt: string;
  publishedAt?: string;
  relevance: string;
}
```

------------------------------------------------------------------------

# 24. Stromrechnung Cluster

Pages:

-   `/stromrechnung`
-   `/stromrechnung-berechnen`
-   `/stromrechnung-zu-hoch`
-   `/stromrechnung-beispiel`
-   `/stromrechnung-pruefen`
-   `/stromrechnung-senken`

These pages must explain:

-   kWh.
-   Arbeitspreis.
-   Grundpreis.
-   billing period.
-   estimated vs actual meter readings where relevant.
-   consumption change.
-   price change.
-   how to compare bills.
-   what users can check themselves.

Avoid legal/financial certainty claims.

------------------------------------------------------------------------

# 25. Savings Cluster

Pages:

-   `/strom-sparen`
-   `/stromfresser`
-   `/standby-strom`
-   `/stromverbrauch-senken`
-   `/strom-sparen-tipps`
-   `/stromanbieter-wechseln`

The savings section must prioritize practical actions.

Example:

``` text
Gerät erkennen
→ Verbrauch messen
→ Kosten berechnen
→ Einsparpotenzial abschätzen
→ Maßnahme auswählen
```

For supplier-switching content, do not pretend to offer live tariff
comparison until such functionality actually exists.

------------------------------------------------------------------------

# 26. Expansion Hubs

## Wärmepumpe

Build:

-   `/waermepumpe/stromverbrauch`
-   `/waermepumpe/stromkosten`
-   `/waermepumpe/stromverbrauch-rechner`

Cover:

-   heat-pump type,
-   heating demand,
-   efficiency/JAZ where relevant,
-   electricity consumption,
-   seasonal variation,
-   building characteristics,
-   actual-meter comparison.

## E-Auto

Build:

-   `/e-auto/stromkosten`
-   `/e-auto/ladekosten-rechner`
-   `/e-auto/kosten-pro-100-km`

Inputs:

-   kWh/100 km.
-   electricity price.
-   distance.
-   charging losses where relevant.

## Solar

Architecture ready for:

-   PV.
-   balcony solar.
-   storage.
-   self-consumption.
-   grid import.
-   savings.

Do not build fake live production data.

------------------------------------------------------------------------

# 27. Content Quality Standard

Every indexable editorial page must have a clear purpose.

Minimum content structure:

1.  Search-intent answer.
2.  Calculator/tool where appropriate.
3.  Explanation.
4.  Worked example.
5.  Relevant benchmarks.
6.  Factors affecting result.
7.  Practical advice.
8.  Sources.
9.  Internal links.
10. FAQ when useful.
11. Update information where appropriate.

## Do not publish

-   spun content,
-   keyword-stuffed pages,
-   AI filler,
-   repetitive introductions,
-   fake FAQs,
-   fake statistics,
-   pages with only a calculator and two sentences,
-   pages generated solely by swapping a device name,
-   pages created solely for keyword variants.

------------------------------------------------------------------------

# 28. Helpful Content Standard

The site must provide additional value beyond what a generic calculator
can provide.

Each major page should answer:

> "Why should someone use kWhKlar instead of doing the calculation
> themselves?"

Answers may include:

-   transparent methodology,
-   useful examples,
-   realistic ranges,
-   device-specific context,
-   household interpretation,
-   measurement instructions,
-   savings guidance,
-   related calculations.

------------------------------------------------------------------------

# 29. E-E-A-T / Trust Architecture

Add visible trust signals:

-   About page.
-   Editorial identity.
-   Sources & methodology.
-   Last-reviewed/updated information where meaningful.
-   Contact page.
-   Legal pages.
-   Clear ownership information.
-   Transparent calculation formulas.

Do not manufacture credentials.

If an author/editorial profile is used, use real information supplied by
the site owner.

------------------------------------------------------------------------

# 30. Legal & Privacy

Required:

-   `/impressum`
-   `/datenschutz`
-   `/kontakt`

Legal pages must never contain fabricated:

-   names,
-   addresses,
-   companies,
-   tax numbers,
-   responsible persons,
-   legal entities,
-   contact details.

Use configurable placeholders only where owner-supplied information is
required, and make those placeholders impossible to mistake for
production data.

The site owner must review legal content before launch.

------------------------------------------------------------------------

# 31. Consent and Analytics

Analytics must be privacy-conscious.

Architecture:

``` text
AnalyticsProvider
ConsentState
TrackingEvents
```

GA4 must not be hardcoded as an active tracker with a fake ID.

Configuration:

``` env
PUBLIC_GA4_ID=
PUBLIC_ADSENSE_CLIENT_ID=
```

If no real ID exists:

-   do not load the corresponding third-party script.

------------------------------------------------------------------------

# 32. Analytics Events

Recommended events:

``` text
calculator_started
calculator_completed
calculator_reset
device_selected
share_clicked
result_copied
related_calculator_clicked
outbound_comparison_clicked
```

Event payloads must never contain:

-   names,
-   email addresses,
-   addresses,
-   personal identifiers,
-   private billing information.

------------------------------------------------------------------------

# 33. AdSense Readiness

The website must be designed to support monetization without
compromising user experience.

Important requirements:

-   Original content.
-   Clear navigation.
-   Complete site.
-   No under-construction pages.
-   No deceptive navigation.
-   No ad-like buttons.
-   No aggressive popups.
-   No pages whose sole purpose is displaying ads.
-   No scraped content.
-   No mass auto-generated thin pages.
-   Clear privacy/legal information.
-   Mobile-friendly layout.
-   Useful content on every monetized page.

AdSense approval is not guaranteed by the build.

The site must be genuinely useful before advertising is enabled.

------------------------------------------------------------------------

# 34. Ad Placement Architecture

Do not hardcode ad slots everywhere.

Create:

``` text
AdSlot
├── top
├── inContent
├── afterCalculator
├── sidebar
└── footer
```

Each slot can be disabled globally.

Default V1:

**Ads disabled.**

After approval:

-   introduce gradually,
-   avoid placing ads where they resemble navigation,
-   avoid interfering with calculators,
-   avoid overwhelming mobile users.

------------------------------------------------------------------------

# 35. Technical Stack

## Required

-   Astro latest stable compatible release.
-   TypeScript.
-   Tailwind CSS v4.
-   Static-first rendering.
-   Client-side islands only where necessary.

## Avoid

-   heavy frontend frameworks for static content,
-   unnecessary dependencies,
-   client-side routing for content pages,
-   large animation libraries,
-   huge icon packages,
-   unnecessary state management.

------------------------------------------------------------------------

# 36. Project Structure

Recommended:

``` text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── calculator/
│   ├── cards/
│   ├── content/
│   ├── seo/
│   ├── trust/
│   └── ads/
│
├── content/
│   ├── devices/
│   ├── household/
│   ├── strompreis/
│   ├── stromrechnung/
│   ├── sparen/
│   └── guides/
│
├── data/
│   ├── appliances.ts
│   ├── electricity-price.ts
│   ├── household-benchmarks.ts
│   ├── sources.ts
│   ├── keywords.ts
│   └── seo-pages.ts
│
├── lib/
│   ├── calculators.ts
│   ├── formatters.ts
│   ├── validation.ts
│   ├── seo.ts
│   ├── structured-data.ts
│   ├── internal-links.ts
│   └── analytics.ts
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── CalculatorLayout.astro
│   ├── ArticleLayout.astro
│   └── DeviceLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   ├── 500.astro
│   ├── robots.txt.ts
│   ├── sitemap-index.xml.ts
│   └── ...
│
└── styles/
    └── global.css
```

------------------------------------------------------------------------

# 37. Design System

Use the supplied Vercel Design MD system and web-design-guidelines as
design references.

Use:

-   clean typography,
-   strong hierarchy,
-   generous spacing,
-   restrained borders,
-   subtle shadows,
-   high contrast,
-   responsive cards,
-   professional data visualization,
-   clear calculator controls.

Avoid:

-   excessive gradients,
-   oversized decorative graphics,
-   distracting animations,
-   visual clutter,
-   generic AI-looking interfaces.

The design must feel like a trustworthy German utility.

------------------------------------------------------------------------

# 38. Accessibility

Target WCAG 2.1 AA.

Requirements:

-   semantic HTML,
-   keyboard navigation,
-   visible focus,
-   labels for every form control,
-   meaningful error messages,
-   sufficient contrast,
-   accessible result updates,
-   no information conveyed by color alone,
-   reduced-motion support,
-   alt text for meaningful images,
-   decorative images appropriately hidden,
-   logical heading hierarchy.

Calculator results should use accessible live-region behavior where
appropriate without causing excessive screen-reader announcements.

------------------------------------------------------------------------

# 39. Performance

Target:

-   excellent Core Web Vitals,
-   minimal JavaScript,
-   static HTML,
-   optimized images,
-   responsive images,
-   lazy loading below the fold,
-   no unnecessary third-party scripts,
-   self-hosted fonts or system fonts where practical.

Use Lighthouse as a diagnostic, not as the only success metric.

Target:

-   Performance: 95+
-   Accessibility: 95+
-   Best Practices: 95+
-   SEO: 95+

Real Core Web Vitals and usability take priority over achieving an
artificial 100 score.

------------------------------------------------------------------------

# 40. Image Strategy

The site is primarily tool/content driven.

Do not add decorative stock images merely to increase page length.

Use images when they genuinely improve comprehension:

-   appliance illustrations,
-   electricity-meter examples,
-   bill diagrams,
-   explanatory graphics.

Every meaningful image needs:

-   descriptive German alt text,
-   appropriate dimensions,
-   optimized format.

------------------------------------------------------------------------

# 41. SEO Metadata

Every indexable page requires:

-   unique `<title>`,
-   unique meta description,
-   canonical URL,
-   language declaration,
-   Open Graph,
-   appropriate social image,
-   structured data where relevant.

Do not automatically generate titles from only the H1.

------------------------------------------------------------------------

# 42. Structured Data

Implement only schema types that accurately represent page content.

Potential types:

-   Organization.
-   WebSite.
-   BreadcrumbList.
-   Article where appropriate.
-   FAQPage where appropriate.
-   HowTo where genuinely appropriate.

Do not add fake structured data.

Do not mark up content that is not visible to users.

Do not generate FAQ schema merely for SEO if the page does not contain
genuine FAQs.

------------------------------------------------------------------------

# 43. Canonical Strategy

Canonical origin:

``` text
https://kwhklar.de
```

Rules:

-   HTTPS only.
-   One canonical URL per intent.
-   No duplicate host versions.
-   Consistent trailing slash strategy.
-   Clean URLs.
-   No indexable parameter variants.
-   Permanent redirects when URLs change.
-   Canonical must match sitemap URL.

------------------------------------------------------------------------

# 44. Indexability

All intended SEO pages:

``` text
index, follow
```

Do NOT use a blanket "everything must be indexable" rule.

Potentially non-indexable:

-   calculator state URLs,
-   internal search results,
-   duplicate parameter URLs,
-   utility endpoints,
-   technical test routes,
-   preview routes,
-   development routes.

Important SEO pages must be:

1.  crawlable,
2.  renderable,
3.  indexable,
4.  internally linked,
5.  included in sitemap when appropriate.

------------------------------------------------------------------------

# 45. Sitemap

Generate sitemap automatically from actual published routes.

Never manually list URLs that do not exist.

Sitemap rules:

-   include canonical indexable URLs,
-   exclude noindex/utility routes,
-   use absolute HTTPS URLs,
-   ensure every sitemap URL returns 200,
-   ensure sitemap canonical matches page canonical.

Astro's sitemap tooling may be used as appropriate.

------------------------------------------------------------------------

# 46. Robots.txt

Robots must:

-   allow important content,
-   not block CSS/JS required for rendering,
-   expose sitemap location,
-   avoid accidental blocking of AdSense/Google crawlers.

Never use robots.txt as a substitute for canonicalization or noindex.

------------------------------------------------------------------------

# 47. Internal Linking Engine

Create a central relationship system.

Each page should have:

-   parent cluster,
-   child pages,
-   related calculators,
-   related devices,
-   related guides.

Examples:

``` text
Stromkostenrechner
→ kWh-Rechner
→ Watt-Rechner
→ Stromverbrauch-Rechner
→ Geräte pages
```

Gaming PC page:

``` text
Gaming-PC
→ Stromkostenrechner
→ Watt-Rechner
→ PC
→ PS5
→ Xbox
→ Strom sparen
```

Household page:

``` text
4 Personen
→ Durchschnittlicher Stromverbrauch
→ Stromverbrauch pro Person
→ Stromkostenrechner
→ Strompreis pro kWh
```

No orphan pages.

------------------------------------------------------------------------

# 48. Breadcrumbs

Every non-homepage content page should have visible breadcrumbs where
appropriate.

Example:

``` text
Startseite
→ Geräte
→ Gaming-PC Stromkosten
```

Breadcrumb structured data must match visible breadcrumbs.

------------------------------------------------------------------------

# 49. 404 Page

German copy.

Purpose:

-   Explain that page was not found.
-   Link to homepage.
-   Link to main calculator.
-   Link to popular categories.
-   Include search/navigation assistance if useful.

Do not simply display "404".

------------------------------------------------------------------------

# 50. 500 Page

German copy.

Purpose:

-   Explain temporary problem.
-   Provide retry.
-   Link to homepage.
-   Link to important calculators.

Do not expose stack traces.

------------------------------------------------------------------------

# 51. Security

No backend is required for V1, but still:

-   validate client inputs,
-   escape content,
-   avoid unsafe HTML,
-   avoid unnecessary third-party scripts,
-   no secrets in frontend code,
-   no private API keys,
-   no user data collection by default.

Environment variables must be separated into public and server-only
values.

------------------------------------------------------------------------

# 52. Error Handling

Calculator errors:

-   invalid input,
-   missing value,
-   impossible value,
-   non-numeric value.

Provide friendly German messages.

Never show:

-   NaN,
-   Infinity,
-   stack traces,
-   raw JavaScript errors.

------------------------------------------------------------------------

# 53. Internationalization

V1 is German only.

Use:

``` html
<html lang="de">
```

Do not add English pages unless deliberately planned.

Do not create hreflang tags for pages that do not exist.

Architecture may remain ready for future:

-   de-DE
-   de-AT
-   de-CH

but V1 should remain clean and focused.

------------------------------------------------------------------------

# 54. Content Governance

Every content record should have:

``` ts
interface ContentMetadata {
  title: string;
  description: string;
  primaryKeyword: string;
  intent: string;
  sources: string[];
  lastReviewed?: string;
  contentOwner?: string;
  relatedPages: string[];
}
```

## Update rule

Never change "last updated" simply because a build ran.

Update the date only when:

-   source data changes,
-   substantive text changes,
-   methodology changes,
-   calculator logic changes,
-   important factual information changes.

------------------------------------------------------------------------

# 55. Research Rules

If research is required during implementation:

1.  Prefer primary/official sources.
2.  Record source URL.
3.  Record date.
4.  Record what claim the source supports.
5.  Do not copy large passages.
6.  Write original German explanations.
7.  Do not invent source relationships.

If a claim cannot be verified:

-   omit it,
-   qualify it,
-   or label it as an illustrative assumption.

------------------------------------------------------------------------

# 56. SEO Content Production Rules

For each page:

### Step 1

Identify exact intent.

### Step 2

Identify primary keyword.

### Step 3

Identify supporting terms.

### Step 4

Map entities.

### Step 5

Check existing pages for overlap.

### Step 6

Define unique value.

### Step 7

Write content.

### Step 8

Add calculator.

### Step 9

Add sources.

### Step 10

Add internal links.

### Step 11

Validate metadata.

### Step 12

Validate schema.

### Step 13

Validate indexability.

### Step 14

Validate page quality.

------------------------------------------------------------------------

# 57. SEO Title Rules

Titles must:

-   reflect actual intent,
-   be unique,
-   include primary term naturally,
-   avoid keyword stuffing,
-   avoid fake freshness,
-   remain useful to humans.

Example:

> Stromkostenrechner: Stromkosten mit Watt und kWh berechnen \| kWhKlar

Do not produce:

> Stromkostenrechner Stromkosten Rechner Stromkosten berechnen kWh
> Rechner

------------------------------------------------------------------------

# 58. Meta Description Rules

Each description should:

-   explain the benefit,
-   match the page,
-   be unique,
-   avoid keyword lists,
-   avoid unsupported claims.

------------------------------------------------------------------------

# 59. FAQ Rules

Use FAQs when they genuinely answer recurring questions.

Good FAQ:

> Wie berechne ich die Stromkosten eines Geräts?

Bad FAQ:

> Was ist ein Stromkostenrechner?

when the page already answered it in a trivial way.

Never create FAQs solely to increase word count.

------------------------------------------------------------------------

# 60. Calculator Defaults

Defaults should be realistic but clearly labeled as examples.

Example:

> Beispielwert: 35 ct/kWh

User must be encouraged to enter the Arbeitspreis from their own
electricity bill.

Never imply that every household pays the default value.

------------------------------------------------------------------------

# 61. Number Formatting

German presentation:

-   decimal comma where appropriate,
-   euro formatting,
-   readable units.

Example:

``` text
0,35 €
35 ct/kWh
1.250 kWh/Jahr
```

The calculation engine should internally use numeric values independent
of display formatting.

------------------------------------------------------------------------

# 62. Rounding

Define consistent rounding.

Suggested:

-   kWh: 2 decimal places where useful.
-   €: 2 decimal places.
-   ct/kWh: 1--2 decimals depending on source precision.

Do not hide meaningful differences through excessive rounding.

------------------------------------------------------------------------

# 63. Unit Conversion

Central utility functions:

``` ts
wattsToKw()
kwToKwh()
kwhToCost()
costToKwh()
hoursToAnnualHours()
```

Add tests for each.

------------------------------------------------------------------------

# 64. Unit Tests

Test:

-   1000 W × 1 h = 1 kWh.
-   100 W × 10 h = 1 kWh.
-   500 W × 2 h = 1 kWh.
-   1 kWh × 35 ct = €0.35.
-   Zero hours.
-   Maximum 24 hours/day.
-   Invalid input.
-   Negative input.
-   Decimal input.
-   Large values.

------------------------------------------------------------------------

# 65. End-to-End Tests

Test:

1.  Homepage loads.
2.  Calculator accepts input.
3.  Result changes instantly.
4.  Reset works.
5.  Mobile layout works.
6.  Keyboard navigation works.
7.  Share/copy works.
8.  Every primary route returns 200.
9.  404 works.
10. 500 works where platform permits testing.
11. Sitemap generates.
12. Robots generates.
13. Canonical exists.
14. Structured data is valid.
15. No broken internal links.

------------------------------------------------------------------------

# 66. Build Validation

Before declaring completion:

``` text
npm install
npm run check
npm run lint
npm run test
npm run build
```

Use the actual scripts defined in the project.

If a command is not configured, create the appropriate configuration.

No build warnings that indicate real problems may be ignored.

------------------------------------------------------------------------

# 67. Crawl Simulation

After build, programmatically inspect generated output.

For every indexable page verify:

``` text
HTTP status = 200
canonical = expected
title exists
description exists
H1 exists
lang=de
internal links exist
no accidental noindex
```

Check:

-   broken links,
-   redirect loops,
-   orphan pages,
-   duplicate titles,
-   duplicate descriptions,
-   duplicate H1s,
-   canonical mismatches,
-   missing breadcrumbs,
-   missing schema where required,
-   sitemap mismatches.

------------------------------------------------------------------------

# 68. SEO Graph Audit

Generate a report:

``` text
Total routes
Indexable routes
Noindex routes
Sitemap routes
Orphan routes
Broken internal links
Duplicate titles
Duplicate descriptions
Duplicate H1s
Canonical mismatches
Missing metadata
Missing structured data
```

The build is not complete until all critical errors are zero.

------------------------------------------------------------------------

# 69. Content Duplication Audit

Compare indexable pages.

Flag:

-   identical paragraphs,
-   repeated introductions,
-   repetitive FAQ sets,
-   identical conclusions,
-   device pages that differ only by name.

Fix before launch.

------------------------------------------------------------------------

# 70. Cannibalization Audit

Create a report:

``` text
Keyword
Primary URL
Potential competing URL
Intent overlap
Resolution
```

For high overlap:

-   merge,
-   redirect,
-   canonicalize,
-   or rewrite to differentiate intent.

Never leave known high-risk duplicates unresolved.

------------------------------------------------------------------------

# 71. Orphan Page Audit

Every indexable page must have at least one contextual internal link.

Preferred:

-   one parent link,
-   two or more related links where useful.

Do not add random footer links solely to eliminate orphan status.

------------------------------------------------------------------------

# 72. Page Quality Score

Before publication, assign an internal quality score:

``` text
Intent clarity        10
Unique value          20
Calculator usefulness 20
Factual sourcing      15
UX                    10
Internal linking       10
SEO metadata            5
Trust/transparency      5
Accessibility           5
-------------------------
Total                 100
```

Indexable pages should target 90+.

A low score requires improvement or consolidation.

------------------------------------------------------------------------

# 73. Architecture for Future Scale

The site must support expansion without manually rebuilding components.

New device:

``` text
Add appliance data
Add content file
Add sources
Add relationships
```

New calculator:

``` text
Add calculation function
Add schema
Add calculator configuration
Add page
Add tests
```

New topic cluster:

``` text
Create hub
Create child pages
Add keyword registry
Add sources
Add internal links
Add tests
```

------------------------------------------------------------------------

# 74. Admin/Content Editing Strategy

No CMS is required for V1.

Use:

-   Markdown/MDX/content collections.
-   TypeScript data files.
-   Git-based workflow.

Keep factual datasets separate from editorial prose.

------------------------------------------------------------------------

# 75. Deployment

Primary deployment options:

-   Vercel.
-   Cloudflare Pages.

The site must be configured so the selected adapter matches the actual
deployment environment.

For a static-first site, prefer static output unless a specific server
feature requires otherwise.

------------------------------------------------------------------------

# 76. Domain

Production:

``` text
https://kwhklar.de
```

Preferred canonical origin:

``` text
https://kwhklar.de
```

Redirect alternate variants as appropriate:

``` text
http://kwhklar.de
http://www.kwhklar.de
https://www.kwhklar.de
```

All should converge on one canonical origin.

------------------------------------------------------------------------

# 77. Google Search Console Readiness

Prepare:

-   sitemap URL.
-   robots.txt.
-   canonical URLs.
-   clean HTTP status.
-   ownership-verification-ready site.

Do not include fake verification tokens.

The owner can add the real Search Console verification method after
deployment.

------------------------------------------------------------------------

# 78. Google Analytics Readiness

Prepare GA4 integration behind configuration.

Example:

``` env
PUBLIC_GA4_ID=
```

If blank:

``` text
No GA script loaded.
```

This prevents accidental fake tracking.

------------------------------------------------------------------------

# 79. AdSense Readiness

Prepare:

``` env
PUBLIC_ADSENSE_CLIENT_ID=
```

No fake publisher ID.

Ads remain disabled until:

1.  real publisher ID exists,
2.  privacy/consent implementation is configured appropriately,
3.  owner enables ad slots.

Google states that AdSense reviews the entire site and looks for
original content, clear navigation, useful pages and policy compliance.
Therefore the PRD treats publisher quality as a product requirement
rather than trying to game approval.

------------------------------------------------------------------------

# 80. Monetization Strategy

V1:

``` text
Organic traffic
↓
Useful calculation
↓
Trust
↓
Repeat usage
↓
AdSense
```

Future:

-   AdSense.
-   Carefully selected affiliate relationships.
-   Electricity supplier comparison.
-   Energy products.
-   Measurement devices.
-   Smart plugs.
-   Solar tools.

Affiliate content must add real value.

------------------------------------------------------------------------

# 81. SEO-to-Revenue Funnel

Example:

``` text
"Kühlschrank Stromkosten"
        ↓
Kühlschrank calculator
        ↓
Annual cost
        ↓
How to measure
        ↓
Energy saving
        ↓
Related high-intent page
```

Do not force commercial CTAs before the user gets the requested answer.

------------------------------------------------------------------------

# 82. Homepage Internal Linking

Homepage must link to:

### Main calculators

-   Stromkostenrechner
-   Stromverbrauch-Rechner
-   kWh-Rechner
-   Watt-Rechner

### Popular devices

-   Kühlschrank
-   Waschmaschine
-   Trockner
-   Gaming-PC
-   Klimaanlage

### Household

-   1 person
-   2 persons
-   4 persons
-   average consumption

### Knowledge

-   Strompreis
-   Stromrechnung
-   Stromfresser
-   Strom sparen

------------------------------------------------------------------------

# 83. Footer

Footer sections:

### Rechner

Main calculators.

### Geräte

Popular device categories.

### Haushalt

Household consumption pages.

### Wissen

Strompreis, Stromrechnung, Sparen.

### Unternehmen/Trust

Über uns, Quellen & Methodik, Kontakt.

### Legal

Datenschutz, Impressum.

Footer should not become a giant keyword list.

------------------------------------------------------------------------

# 84. Mobile-first Requirement

Design from mobile upward.

Test at:

-   320px.
-   375px.
-   390px.
-   430px.
-   tablet.
-   desktop.
-   large desktop.

No horizontal overflow.

------------------------------------------------------------------------

# 85. Browser Compatibility

Support current:

-   Chrome.
-   Safari.
-   Firefox.
-   Edge.

Gracefully degrade advanced share functionality.

Calculators must work without Web Share API.

------------------------------------------------------------------------

# 86. Progressive Enhancement

Core content must exist in HTML.

Interactive calculator enhances the page.

Do not hide the primary answer behind JavaScript.

Search engines and users without JavaScript should still receive useful
content.

------------------------------------------------------------------------

# 87. No Canvas-Only Content

Do not render important:

-   text,
-   calculations,
-   explanations,
-   FAQs,
-   navigation

only into canvas.

HTML remains the source of truth.

------------------------------------------------------------------------

# 88. Error and Empty States

Every component must have designed states:

-   loading,
-   empty,
-   invalid,
-   error,
-   success,
-   disabled.

For static pages, avoid unnecessary loading states.

------------------------------------------------------------------------

# 89. Accessibility of Calculator Results

Results should be visually obvious and semantically structured.

Example:

``` text
Dein Ergebnis

0,35 kWh pro Stunde
0,12 € pro Stunde
2,52 € pro Woche
10,95 € pro Monat
133,65 € pro Jahr
```

The user must understand which assumptions generated the result.

------------------------------------------------------------------------

# 90. Sources UI

For source-backed facts, show a compact source block:

``` text
Quelle
[Source name]
Stand: [date]
Methodik: [short explanation]
```

Link to the actual source.

Never show a fake "Source" label with no source.

------------------------------------------------------------------------

# 91. Methodology Disclosure

Every estimate page should distinguish:

``` text
Beispiel
Schätzung
Richtwert
Durchschnitt
Messwert
Dein eigener Wert
```

This vocabulary should be used consistently.

------------------------------------------------------------------------

# 92. Data Freshness

Create an internal data-review checklist.

For each source:

``` text
source_id
last_checked
next_review
data_status
```

Do not automatically change public dates unless the data changed.

------------------------------------------------------------------------

# 93. SEO Research Expansion

After launch, use Search Console data to discover:

-   unexpected queries,
-   emerging long-tail searches,
-   pages with impressions but low CTR,
-   queries where an existing page should be improved,
-   potential new calculators.

Do not automatically create a new page for every query.

First determine whether the existing page should answer it.

------------------------------------------------------------------------

# 94. Content Expansion Decision Tree

``` text
New keyword discovered
        ↓
Does an existing page satisfy intent?
        ↓
YES → Improve existing page
        ↓
NO
        ↓
Is intent materially different?
        ↓
NO → Consolidate
        ↓
YES → Create new page
```

------------------------------------------------------------------------

# 95. Technical SEO Rules

Every page:

-   valid HTML,
-   canonical,
-   title,
-   meta description,
-   German language,
-   responsive viewport,
-   indexability status,
-   internal links,
-   breadcrumb when applicable.

Avoid:

-   duplicate URLs,
-   unnecessary query parameters,
-   hash-based content,
-   JS-only navigation,
-   hidden text,
-   keyword stuffing.

------------------------------------------------------------------------

# 96. Metadata Registry

Centralize site metadata:

``` ts
const site = {
  name: "kWhKlar",
  domain: "https://kwhklar.de",
  language: "de-DE",
  tagline: "Stromkosten & Energieverbrauch einfach berechnen"
};
```

------------------------------------------------------------------------

# 97. Environment Configuration

Example:

``` env
PUBLIC_SITE_URL=https://kwhklar.de
PUBLIC_GA4_ID=
PUBLIC_ADSENSE_CLIENT_ID=
PUBLIC_CONTACT_EMAIL=
```

Never commit secrets.

------------------------------------------------------------------------

# 98. Content Safety

No:

-   medical claims,
-   financial guarantees,
-   energy-saving guarantees,
-   supplier savings promises,
-   fabricated government endorsements.

Use qualified language:

-   "kann"
-   "typischerweise"
-   "je nach"
-   "Richtwert"
-   "Beispiel"

when appropriate.

------------------------------------------------------------------------

# 99. Legal Disclaimer for Calculations

Where appropriate:

> Die Ergebnisse sind Berechnungen bzw. Richtwerte und können vom
> tatsächlichen Verbrauch oder Tarif abweichen. Für eine genauere
> Berechnung kannst du deinen tatsächlichen Arbeitspreis und gemessenen
> Verbrauch verwenden.

Do not make the disclaimer so prominent that it damages usability.

------------------------------------------------------------------------

# 100. Launch Content Minimum

Before launch, the site must not look like an empty template.

At minimum launch with:

-   homepage,
-   core calculators,
-   major device pages,
-   household cluster,
-   core electricity-price pages,
-   electricity-bill cluster,
-   savings cluster,
-   sources/methodology,
-   about,
-   contact,
-   privacy,
-   impressum,
-   404,
-   500. 

Any URL in the sitemap must be genuinely complete.

------------------------------------------------------------------------

# 101. Launch Readiness Checklist

## Product

-   [ ] Brand implemented.
-   [ ] Navigation works.
-   [ ] Calculators work.
-   [ ] Results are accurate.
-   [ ] Mobile UX tested.
-   [ ] Accessibility tested.

## SEO

-   [ ] Keyword map exists.
-   [ ] Intent map exists.
-   [ ] Canonical map exists.
-   [ ] No major cannibalization.
-   [ ] No orphan pages.
-   [ ] Metadata unique.
-   [ ] Sitemap valid.
-   [ ] Robots valid.
-   [ ] Structured data valid.

## Content

-   [ ] No thin pages.
-   [ ] No fake statistics.
-   [ ] Sources recorded.
-   [ ] Methodology explained.
-   [ ] Original content.
-   [ ] FAQs useful.
-   [ ] Internal linking complete.

## Legal

-   [ ] Impressum owner data supplied.
-   [ ] Datenschutz configured.
-   [ ] Contact details supplied.
-   [ ] Analytics consent reviewed.
-   [ ] AdSense consent architecture reviewed.

## Performance

-   [ ] Build successful.
-   [ ] No major console errors.
-   [ ] Images optimized.
-   [ ] JS minimal.
-   [ ] Core Web Vitals-friendly.

------------------------------------------------------------------------

# 102. Automated Acceptance Tests

The implementation must fail the completion gate if:

-   build fails,
-   tests fail,
-   broken internal links exist,
-   indexable page has no canonical,
-   indexable page has no title,
-   indexable page has no H1,
-   sitemap contains missing URL,
-   sitemap contains noindex page,
-   orphan indexable pages exist,
-   duplicate canonical URLs exist unintentionally,
-   calculator outputs NaN/Infinity,
-   mobile layout overflows,
-   legal placeholders are visible as fake production information,
-   fake analytics IDs are included,
-   fake AdSense IDs are included.

------------------------------------------------------------------------

# 103. Final Build Workflow

Antigravity must execute this workflow in one implementation session:

## Phase 1 --- Inspect

-   Inspect project.
-   Read supplied design/skill references.
-   Confirm Astro/Tailwind versions.
-   Establish architecture.

## Phase 2 --- Plan

-   Create keyword map.
-   Create intent map.
-   Create URL registry.
-   Identify cannibalization.
-   Establish data model.

## Phase 3 --- Build foundation

-   Astro.
-   Tailwind.
-   Design system.
-   Layout.
-   Navigation.
-   Footer.
-   SEO components.

## Phase 4 --- Build calculation engine

-   Formula library.
-   Validation.
-   Formatting.
-   Tests.

## Phase 5 --- Build content/data layer

-   Sources.
-   Price data.
-   Appliance data.
-   Household benchmarks.
-   SEO registry.

## Phase 6 --- Build pages

-   Homepage.
-   Calculators.
-   Devices.
-   Household.
-   Price.
-   Bill.
-   Savings.
-   Expansion hubs.
-   Trust/legal.

## Phase 7 --- SEO

-   Metadata.
-   Canonicals.
-   Sitemap.
-   Robots.
-   Breadcrumbs.
-   JSON-LD.
-   Internal links.

## Phase 8 --- Analytics/monetization readiness

-   GA4 config.
-   AdSense config.
-   Consent architecture.
-   Disabled defaults.

## Phase 9 --- Testing

-   Unit.
-   Integration.
-   Build.
-   Link crawl.
-   SEO audit.
-   Accessibility.
-   Mobile.

## Phase 10 --- Repair

Fix all critical findings.

Repeat until clean.

## Phase 11 --- Final report

Output:

``` text
Routes created:
Indexable routes:
Noindex routes:
Calculators:
Device pages:
Household pages:
Price pages:
Bill pages:
Savings pages:
Sources:
Tests:
Broken links:
Orphans:
Duplicate metadata:
Cannibalization issues:
Build status:
Deployment status:
```

------------------------------------------------------------------------

# 104. Definition of Done

The project is DONE only when:

1.  Production build succeeds.
2.  Every intended page exists.
3.  Every intended page is populated.
4.  No major thin pages exist.
5.  No major keyword cannibalization remains.
6.  All calculators work.
7.  All formulas are tested.
8.  No NaN/Infinity results occur.
9.  Every indexable page has correct metadata.
10. Every indexable page has a canonical.
11. Sitemap is correct.
12. Robots is correct.
13. No orphan SEO pages remain.
14. Internal links are valid.
15. Structured data is valid.
16. Accessibility is acceptable.
17. Mobile layout is clean.
18. Core Web Vitals are targeted appropriately.
19. No fake source or statistic exists.
20. No fake legal identity exists.
21. No fake GA4 ID exists.
22. No fake AdSense ID exists.
23. 404 works.
24. 500 works where supported.
25. The site can be deployed without architectural changes.
26. The site remains useful with ads disabled.

------------------------------------------------------------------------

# 105. Explicit Instructions to the AI Builder

You are not being asked to produce a prototype.

You are being asked to implement a production-ready German website.

Do not:

-   stop after scaffolding,
-   leave placeholder pages,
-   create fake data,
-   invent sources,
-   invent legal information,
-   create thin keyword pages,
-   duplicate paragraphs,
-   hide content behind JavaScript,
-   add unnecessary dependencies,
-   use fake analytics IDs,
-   use fake AdSense IDs,
-   declare completion before running the quality gates.

If a proposed page overlaps another page's search intent, resolve the
overlap before implementation.

If a source cannot be verified, do not invent it.

If a required owner-specific legal field is unknown, create a clearly
marked configuration requirement rather than fake information.

If a page cannot meet the content-quality threshold, consolidate it with
a stronger page rather than publishing thin content.

If a build or test fails, fix it before completion.

If a technical requirement conflicts with actual framework behavior, use
the current official framework documentation and implement the
technically correct solution rather than blindly following an outdated
instruction.

------------------------------------------------------------------------

# 106. Required Reference Material

Use the following references during implementation where relevant:

-   Vercel Design MD: `https://getdesign.md/vercel/design-md`
-   Web design guidelines skill:
    `https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines`
-   Tailwind agent skill:
    `https://www.skills.sh/lombiq/tailwind-agent-skills/tailwind-4-docs`
-   Tailwind Agent Skills repository:
    `https://github.com/Lombiq/Tailwind-Agent-Skills`
-   Astro documentation: `https://docs.astro.build/en/getting-started/`
-   Astro Cloudflare deployment:
    `https://docs.astro.build/en/guides/deploy/cloudflare/`
-   Astro MCP documentation:
    `https://docs.astro.build/en/guides/build-with-ai/#astro-docs-mcp-server`
-   Google Analytics: `https://analytics.google.com`

For Google/AdSense policy decisions, use current official Google
documentation rather than assumptions.

------------------------------------------------------------------------

# 107. Research and Policy Notes

Google's current AdSense guidance emphasizes original, useful content,
clear navigation and a good user experience. Google also states that
sites can be rejected for insufficient content, content-quality
problems, navigation issues or policy violations. This PRD therefore
intentionally rejects the idea of creating large numbers of thin
auto-generated pages purely for monetization.

Google also reviews the site for policy compliance and requires the site
to be accessible to its crawler. The production implementation must
therefore keep important pages publicly accessible and avoid accidental
crawler blocking.

The site should not promise AdSense approval. Approval is an external
decision.

------------------------------------------------------------------------

# 108. Final Product Principle

The website should not feel like:

> "An SEO website with calculators."

It should feel like:

> **"The easiest German website for understanding and calculating
> electricity costs."**

Every technical, content, design and SEO decision should reinforce that
principle.

------------------------------------------------------------------------

# 109. Final Command to the Implementation Agent

Build kWhKlar.de completely according to this PRD.

Use Astro, TypeScript and Tailwind CSS v4.

Use the supplied design-system references.

Build the calculator engine first.

Build the data/source architecture centrally.

Build the page templates.

Build the SEO architecture.

Build the content.

Build the internal-linking graph.

Build all required trust/legal infrastructure.

Implement analytics and monetization readiness behind configuration.

Run the full test suite.

Run a production build.

Crawl the generated site.

Audit SEO.

Audit accessibility.

Audit internal links.

Audit content duplication.

Audit keyword cannibalization.

Audit indexability.

Fix every critical issue found.

Do not stop at a scaffold.

Do not claim success until the Definition of Done is satisfied.

The final result must be a deployable, fast, accessible,
source-transparent, German-first electricity calculation platform at:

**https://kwhklar.de**
