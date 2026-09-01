# NAVIGATION & FOOTER PARITY REPORT: kWhKlar.de

**Generated**: September 1, 2026  
**Central Configuration**: `src/i18n/ui.ts` & `src/i18n/utils.ts`  
**Parity Verification**: ✅ 100% PASS across all 8 languages

---

## 1. Primary Header Navigation

Every locale features the exact same 6 navigation pillars in the identical order, accompanied by the primary CTA button:

| Route Key | German (`de`) | English (`en`) | Spanish (`es`) | Japanese (`ja`) | French (`fr`) | Portuguese (`pt`) | Korean (`ko`) | Italian (`it`) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `nav.calculators` | Rechner | Calculators | Calculadoras | 計算機 | Calculateurs | Calculadoras | 계산기 | Calcolatori |
| `nav.appliances` | Geräte | Appliances | Aparatos | 家電製品 | Appareils | Aparelhos | 가전제품 | Elettrodomestici |
| `nav.household` | Haushalt | Household | Hogar | 世帯別 | Foyer | Residência | 가구별 | Famiglia |
| `nav.price` | Strompreis | Electricity Price | Precio Luz | 電気料金 | Prix du kWh | Tarifa de Luz | 전기요금 | Prezzo Energia |
| `nav.bill` | Stromrechnung | Energy Bill | Factura | 電気代明細 | Facture | Conta de Luz | 요금고지서 | Bolletta |
| `nav.saving` | Sparen | Save Energy | Ahorrar | 節電 | Économies | Economizar | 절전 가이드 | Risparmio |
| **CTA Button** (`nav.cta`) | **Rechner starten** | **Start Calculator** | **Abrir Calculadora** | **計算機を開く** | **Démarrer le Calculateur** | **Abrir Calculadora** | **계산기 시작** | **Apri Calcolatore** |

---

## 2. Footer Structure & Path Alignment

Every footer across all 8 locales renders 15 standardized sections mapped to localized URLs:

1. **Electricity Cost Calculator** (`/stromkosten-rechner` -> `/[lang]/stromkosten-rechner`)
2. **kWh in Euro Calculator** (`/kwh-rechner` -> `/[lang]/kwh-rechner`)
3. **Watt in kWh Calculator** (`/watt-rechner` -> `/[lang]/watt-rechner`)
4. **Appliance Hub** (`/geraete` -> `/[lang]/geraete`)
5. **Refrigerator** (`/geraete/kuehlschrank` -> `/[lang]/geraete/kuehlschrank`)
6. **Washing Machine** (`/geraete/waschmaschine` -> `/[lang]/geraete/waschmaschine`)
7. **Household Consumption** (`/stromverbrauch-haushalt` -> `/[lang]/stromverbrauch-haushalt`)
8. **Electricity Price Analysis** (`/strompreis` -> `/[lang]/strompreis`)
9. **Electricity Bill Hub** (`/stromrechnung` -> `/[lang]/stromrechnung`)
10. **Saving Electricity** (`/strom-sparen` -> `/[lang]/strom-sparen`)
11. **About Us** (`/ueber-uns` -> `/[lang]/ueber-uns`)
12. **Sources & Methodology** (`/quellen-methodik` -> `/[lang]/quellen-methodik`)
13. **Contact** (`/kontakt` -> `/[lang]/kontakt`)
14. **Imprint / Legal** (`/impressum` -> `/[lang]/impressum`)
15. **Privacy Policy** (`/datenschutz` -> `/[lang]/datenschutz`)

---

## 3. Language Selector Behavior
- Clicking the language selector preserves the active route context (e.g. from `/geraete/kuehlschrank` directly to `/en/geraete/kuehlschrank` or `/es/geraete/kuehlschrank`).
- Prevents resetting the user to the root homepage.
