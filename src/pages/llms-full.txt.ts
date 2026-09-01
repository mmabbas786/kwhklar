import type { APIRoute } from 'astro';
import { appliances, type Appliance } from '../data/appliances';
import { householdBenchmarks } from '../data/household-benchmarks';
import { electricityPriceData } from '../data/electricity-price';

export const GET: APIRoute = async () => {
  const applianceList = Object.values(appliances) as Appliance[];
  const priceCt = electricityPriceData.currentReferencePrice.valueCtPerKwh;
  const priceFormatted = `${priceCt.toFixed(2)} ct/kWh`;

  const content = `# kWhKlar — Vollständige Wissensdatenbank & KI-Kontext

## 1. Über kWhKlar
kWhKlar (https://kwhklar.de) ist eine deutsche Informations- und Berechnungsplattform für Stromkosten, Stromverbrauch, Energieeffizienz und Photovoltaik/Wärmepumpen. Alle Berechnungen basieren auf transparenten physikalischen Formeln und offiziellen deutschen Referenzwerten (BNetzA, BDEW, Destatis, Stromspiegel).

## 2. Mathematische Berechnungsformeln
- **Kilowattstunden (kWh)**: \`kWh = (Watt × Stunden) ÷ 1.000\`
- **Leistung aus Stromstärke & Spannung**: \`Watt = Volt × Ampere × Leistungsfaktor\`
- **Laufende Stromkosten**: \`Kosten (€) = kWh × Strompreis (€/kWh)\`
- **Wärmepumpen-Stromverbrauch**: \`Stromverbrauch (kWh) = Wärmebedarf (kWh) ÷ Jahresarbeitszahl (JAZ)\`
- **E-Auto Ladekosten pro 100 km**: \`Kosten/100km = (Verbrauch kWh/100km × Strompreis) ÷ Ladeeffizienz (~0,90)\`

## 3. Strompreis-Zusammensetzung (Deutschland Stand: ${electricityPriceData.currentReferencePrice.referenceDate})
- **Referenzpreis**: ${priceFormatted}
${electricityPriceData.priceComposition.map(c => `- **${c.category}**: ~${c.sharePercent}% (${c.valueCtPerKwh.toFixed(2)} ct/kWh) — ${c.description}`).join('\n')}

## 4. Haushaltsstrom-Richtwerte (Stromspiegel Standard)
### Einfamilienhaus
- 1 Person: ${householdBenchmarks[1]?.houseWithoutWarmWaterKwh ?? 2000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[1]?.houseWithWarmWaterKwh ?? 2600} kWh/Jahr (mit Warmwasser)
- 2 Personen: ${householdBenchmarks[2]?.houseWithoutWarmWaterKwh ?? 3000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[2]?.houseWithWarmWaterKwh ?? 3800} kWh/Jahr (mit Warmwasser)
- 3 Personen: ${householdBenchmarks[3]?.houseWithoutWarmWaterKwh ?? 3900} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[3]?.houseWithWarmWaterKwh ?? 4900} kWh/Jahr (mit Warmwasser)
- 4 Personen: ${householdBenchmarks[4]?.houseWithoutWarmWaterKwh ?? 4500} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[4]?.houseWithWarmWaterKwh ?? 5700} kWh/Jahr (mit Warmwasser)
- 5 Personen: ${householdBenchmarks[5]?.houseWithoutWarmWaterKwh ?? 5200} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[5]?.houseWithWarmWaterKwh ?? 6500} kWh/Jahr (mit Warmwasser)

### Wohnung im Mehrfamilienhaus
- 1 Person: ${householdBenchmarks[1]?.apartmentWithoutWarmWaterKwh ?? 1300} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[1]?.apartmentWithWarmWaterKwh ?? 1800} kWh/Jahr (mit Warmwasser)
- 2 Personen: ${householdBenchmarks[2]?.apartmentWithoutWarmWaterKwh ?? 2000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[2]?.apartmentWithWarmWaterKwh ?? 2700} kWh/Jahr (mit Warmwasser)
- 3 Personen: ${householdBenchmarks[3]?.apartmentWithoutWarmWaterKwh ?? 2600} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[3]?.apartmentWithWarmWaterKwh ?? 3500} kWh/Jahr (mit Warmwasser)
- 4 Personen: ${householdBenchmarks[4]?.apartmentWithoutWarmWaterKwh ?? 3000} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[4]?.apartmentWithWarmWaterKwh ?? 4000} kWh/Jahr (mit Warmwasser)
- 5 Personen: ${householdBenchmarks[5]?.apartmentWithoutWarmWaterKwh ?? 3500} kWh/Jahr (ohne Warmwasser) | ${householdBenchmarks[5]?.apartmentWithWarmWaterKwh ?? 4800} kWh/Jahr (mit Warmwasser)

## 5. Detaillierte Geräteprofile
${applianceList.map(a => `### ${a.name} (${a.category})
- URL: https://kwhklar.de/geraete/${a.slug}
- Typische Leistung: ${a.typicalWattage} W (Bereich: ${a.wattageMin}W – ${a.wattageMax}W)
- Typische Nutzung: ${a.typicalUsageHours} h/Tag
- Jahresverbrauch: ~${a.typicalAnnualKwh} kWh/Jahr
- Jahreskosten (@ ${priceFormatted}): ~${a.annualCostEuro.toFixed(2)} €/Jahr
- Spartipp: ${a.savingAdvice?.[0] || 'Achte auf Energieeffizienzklasse und Standby-Verbrauch.'}
`).join('\n')}

## 6. Seitenstruktur & Endpunkte
- Sitemap: https://kwhklar.de/sitemap.xml
- Robots.txt: https://kwhklar.de/robots.txt
- LLM Manifest: https://kwhklar.de/llms.txt
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
