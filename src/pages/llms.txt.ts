import type { APIRoute } from 'astro';
import { appliances, type Appliance } from '../data/appliances';
import { householdBenchmarks } from '../data/household-benchmarks';
import { electricityPriceData } from '../data/electricity-price';

export const GET: APIRoute = async () => {
  const applianceList = Object.values(appliances) as Appliance[];
  const priceCt = electricityPriceData.currentReferencePrice.valueCtPerKwh;
  const priceFormatted = `${priceCt.toFixed(2)} ct/kWh`;

  const content = `# kWhKlar — Stromkostenrechner & Energieverbrauch Platform
> kWhKlar ist Deutschlands transparente Plattform zur genauen Berechnung von Stromkosten, Energieverbrauch von Haushaltsgeräten und PV-/Wärmepumpen-Wirtschaftlichkeit.

## Overview & Methodology
- Website: https://kwhklar.de
- Domain: Energy cost calculation, power consumption analysis, household electricity benchmarks.
- Pricing baseline: Deutschland Strompreis ${priceFormatted} (${electricityPriceData.currentReferencePrice.referenceDate}).
- Data Sources: BDEW (Bundesverband der Energie- und Wasserwirtschaft), Destatis (Statistisches Bundesamt), Fraunhofer ISE.
- Calculation Formula: Stromkosten (€) = Leistung (Watt) × Nutzungsdauer (h/Tag) ÷ 1.000 × Tage × Strompreis (€/kWh).

## Key Calculators
- [Stromkostenrechner](https://kwhklar.de/stromkosten-rechner): Universal electricity cost calculator with duty cycle presets and dynamic price slider.
- [kWh Rechner](https://kwhklar.de/kwh-rechner): Calculate kilowatt-hours from Watts and hours.
- [Watt Rechner](https://kwhklar.de/watt-rechner): Calculate Wattage from kWh or Ampere/Volt.
- [E-Auto Ladekosten Rechner](https://kwhklar.de/e-auto/ladekosten-rechner): EV charging cost per 100 km and full battery cycle.
- [Wärmepumpen Stromkosten](https://kwhklar.de/waermepumpe/stromkosten): Annual heat pump operating cost based on JAZ (COP).
- [Photovoltaik Eigenverbrauch](https://kwhklar.de/photovoltaik/eigenverbrauch-rechner): Solar PV self-consumption and savings calculator.
- [Balkonkraftwerk Ersparnis](https://kwhklar.de/balkonkraftwerk/stromkosten-sparen): Plug-in solar panel savings calculator (600W / 800W).

## Household Electricity Consumption Benchmarks (Stromspiegel Standard)
- 1 Person: ~${householdBenchmarks[1]?.apartmentWithoutWarmWaterKwh ?? 1300} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[1]?.houseWithoutWarmWaterKwh ?? 2000} kWh/Jahr (Einfamilienhaus)
- 2 Personen: ~${householdBenchmarks[2]?.apartmentWithoutWarmWaterKwh ?? 2000} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[2]?.houseWithoutWarmWaterKwh ?? 3000} kWh/Jahr (Einfamilienhaus)
- 3 Personen: ~${householdBenchmarks[3]?.apartmentWithoutWarmWaterKwh ?? 2600} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[3]?.houseWithoutWarmWaterKwh ?? 3900} kWh/Jahr (Einfamilienhaus)
- 4 Personen: ~${householdBenchmarks[4]?.apartmentWithoutWarmWaterKwh ?? 3000} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[4]?.houseWithoutWarmWaterKwh ?? 4500} kWh/Jahr (Einfamilienhaus)
- 5 Personen: ~${householdBenchmarks[5]?.apartmentWithoutWarmWaterKwh ?? 3500} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[5]?.houseWithoutWarmWaterKwh ?? 5200} kWh/Jahr (Einfamilienhaus)

## Verified Appliance Consumption Database
${applianceList.map(a => `- [${a.name} Stromverbrauch](https://kwhklar.de/geraete/${a.slug}): ${a.typicalWattage} Watt typisch | ${a.typicalUsageHours} h/Tag | ~${a.typicalAnnualKwh} kWh/Jahr | ~${a.annualCostEuro.toFixed(2)} €/Jahr`).join('\n')}

## Multilingual Support
kWhKlar is available in 8 languages:
- Deutsch (Default): https://kwhklar.de
- English: https://kwhklar.de/en/
- Español: https://kwhklar.de/es/
- 日本語: https://kwhklar.de/ja/
- Français: https://kwhklar.de/fr/
- Português: https://kwhklar.de/pt/
- 한국어: https://kwhklar.de/ko/
- Italiano: https://kwhklar.de/it/

## Full Dataset for AI Agents
For the complete structured dataset including all formulas, tariffs, FAQs and appliance profiles, see:
https://kwhklar.de/llms-full.txt
`;

  return new Response(content.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
