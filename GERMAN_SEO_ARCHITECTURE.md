# kWhKlar.de — German-Only SEO Architecture Documentation
> Umfassende Architektur-Dokumentation für die rein deutsche SEO- und Rechner-Plattform.

## 1. Kern-Prinzipien
1. **German-First & German-Only**: Keine Mehrsprachigkeit, keine Sprachauswahl, kein dynamisches Locale-Routing.
2. **HTML Language Declaration**: Verbindlich `<html lang="de">` auf jeder einzelnen Seite.
3. **Canonical Architecture**: Jede indexierbare Seite hat genau eine absolute, selbst-referenzierende kanonische URL (`https://kwhklar.de/...`). Keine `/de/` URL-Präfixe.
4. **Zero Hreflang**: 0 Hreflang-Tags auf der gesamten Website.
5. **Zero workers.dev Leaks**: Die `workers.dev`-Domain wird nirgendwo in kanonischen Tags, Sitemaps, OpenGraph-Tags, JSON-LD oder LLM-Manifesten referenziert.
6. **Hub-and-Spoke Semantic Siloing**:
   - **Tier 1**: Rechner-Hub (`/stromkosten-rechner`, `/kwh-rechner`, `/watt-rechner`, `/stromverbrauch-rechner`)
   - **Tier 2**: Geräte-Datenbank (`/geraete` + 25 Geräte-Seiten)
   - **Tier 3**: Haushalts-Cluster (`/stromverbrauch-haushalt`, 1–5 Personen, Wohnung, Haus)
   - **Tier 4**: Markt & Tarife (`/strompreis`, `/stromrechnung`, `/strom-sparen`, Wärmepumpe, E-Auto, Solar)
   - **Tier 5**: E-E-A-T & Trust (`/ueber-uns`, `/quellen-methodik`, `/kontakt`, `/impressum`, `/datenschutz`)

## 2. Seiten- & URL-Statistik
- **Gesamtzahl indexierbarer deutscher Seiten**: 76
- **Sitemap URLs**: 76
- **Geräteseiten**: 25
- **Rechner-Seiten**: 9
- **Haushalts-Seiten**: 8
- **Themen- & Tarif-Seiten**: 14
- **Rechtliche Noindex-Seiten**: 2 (`/impressum`, `/datenschutz`)
- **Fehlerseiten**: 2 (`/404`, `/500`)

---
Stand: 2026-09-01 | kWhKlar.de
