import type { APIRoute } from 'astro';
import { appliances, type Appliance } from '../data/appliances';
import { householdBenchmarks } from '../data/household-benchmarks';
import { electricityPriceData } from '../data/electricity-price';

export const GET: APIRoute = async () => {
  const applianceList = Object.values(appliances) as Appliance[];
  const priceCt = electricityPriceData.currentReferencePrice.valueCtPerKwh;
  const priceFormatted = `${priceCt.toFixed(2)} ct/kWh`;

  const content = `# kWhKlar — Full Knowledge Base & AI Agent Context

## 1. About kWhKlar
kWhKlar (https://kwhklar.de) is a German energy analysis and calculation platform. It provides mathematically verified, transparent calculations for electricity costs, device power consumption, solar PV yields, and heat pump efficiencies based on verified industry baselines (BDEW, Destatis, Fraunhofer ISE).

## 2. Core Mathematical Formulas
- **Kilowatt-hour (kWh)**: \`kWh = (Watt × Stunden) ÷ 1000\`
- **Power from Current & Voltage**: \`Watt = Volt × Ampere × Leistungsfaktor\`
- **Operating Cost**: \`Kosten (€) = kWh × Strompreis (€/kWh)\`
- **Heat Pump Electricity**: \`Stromverbrauch (kWh) = Wärmebedarf (kWh) ÷ Jahresarbeitszahl (JAZ)\`
- **EV Charging Cost per 100 km**: \`Kosten/100km = (Verbrauch kWh/100km × Strompreis) ÷ Ladeeffizienz (~0.9)\`

## 3. Electricity Price Breakdown (Germany ${electricityPriceData.currentReferencePrice.referenceDate})
- **Average Reference Price**: ${priceFormatted}
${electricityPriceData.priceComposition.map(c => `- **${c.category}**: ~${c.sharePercent}% (${c.valueCtPerKwh.toFixed(2)} ct/kWh) — ${c.description}`).join('\n')}

## 4. Complete Household Benchmarks (Stromspiegel Standard)
### Single-Family House (Einfamilienhaus)
- 1 Person: ${householdBenchmarks[1]?.houseWithoutWarmWaterKwh ?? 2000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[1]?.houseWithWarmWaterKwh ?? 2600} kWh/Jahr (mit Warmwasser)
- 2 Personen: ${householdBenchmarks[2]?.houseWithoutWarmWaterKwh ?? 3000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[2]?.houseWithWarmWaterKwh ?? 3800} kWh/Jahr (mit Warmwasser)
- 3 Personen: ${householdBenchmarks[3]?.houseWithoutWarmWaterKwh ?? 3900} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[3]?.houseWithWarmWaterKwh ?? 4900} kWh/Jahr (mit Warmwasser)
- 4 Personen: ${householdBenchmarks[4]?.houseWithoutWarmWaterKwh ?? 4500} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[4]?.houseWithWarmWaterKwh ?? 5700} kWh/Jahr (mit Warmwasser)
- 5 Personen: ${householdBenchmarks[5]?.houseWithoutWarmWaterKwh ?? 5200} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[5]?.houseWithWarmWaterKwh ?? 6500} kWh/Jahr (mit Warmwasser)

### Apartment in Multi-Family Building (Wohnung im Mehrfamilienhaus)
- 1 Person: ${householdBenchmarks[1]?.apartmentWithoutWarmWaterKwh ?? 1300} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[1]?.apartmentWithWarmWaterKwh ?? 1800} kWh/Jahr (mit Warmwasser)
- 2 Personen: ${householdBenchmarks[2]?.apartmentWithoutWarmWaterKwh ?? 2000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[2]?.apartmentWithWarmWaterKwh ?? 2700} kWh/Jahr (mit Warmwasser)
- 3 Personen: ${householdBenchmarks[3]?.apartmentWithoutWarmWaterKwh ?? 2600} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[3]?.apartmentWithWarmWaterKwh ?? 3500} kWh/Jahr (mit Warmwasser)
- 4 Personen: ${householdBenchmarks[4]?.apartmentWithoutWarmWaterKwh ?? 3000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[4]?.apartmentWithWarmWaterKwh ?? 4000} kWh/Jahr (mit Warmwasser)
- 5 Personen: ${householdBenchmarks[5]?.apartmentWithoutWarmWaterKwh ?? 3500} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[5]?.apartmentWithWarmWaterKwh ?? 4800} kWh/Jahr (mit Warmwasser)

## 5. Detailed Appliance Profiles
${applianceList.map(a => `### ${a.name} (${a.category})
- URL: https://kwhklar.de/geraete/${a.slug}
- Typical Wattage: ${a.typicalWattage} W (Range: ${a.wattageMin}W - ${a.wattageMax}W)
- Daily Usage: ${a.typicalUsageHours} h/Tag
- Annual Consumption: ~${a.typicalAnnualKwh} kWh/Jahr
- Annual Cost (@ ${priceFormatted}): ~${a.annualCostEuro.toFixed(2)} €/Jahr
- Efficiency & Savings Tip: ${a.savingAdvice?.[0] || 'Achte auf Energieeffizienzklasse und Standby-Verbrauch.'}
`).join('\n')}

## 6. Site Structure & Dynamic Endpoints
- Canonical Sitemap: https://kwhklar.de/sitemap.xml
- Robots Protocol: https://kwhklar.de/robots.txt
- Quick LLM Manifest: https://kwhklar.de/llms.txt
- Full LLM Dataset: https://kwhklar.de/llms-full.txt
`;

  return new Response(content.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
