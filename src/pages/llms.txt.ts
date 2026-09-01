import type { APIRoute } from 'astro';
import { appliances, type Appliance } from '../data/appliances';
import { householdBenchmarks } from '../data/household-benchmarks';
import { electricityPriceData } from '../data/electricity-price';

export const GET: APIRoute = async () => {
  const applianceList = Object.values(appliances) as Appliance[];
  const priceCt = electricityPriceData.currentReferencePrice.valueCtPerKwh;
  const priceFormatted = `${priceCt.toFixed(2)} ct/kWh`;

  const content = `# kWhKlar — Stromkostenrechner & Stromverbrauch Portal (Deutschland)
> kWhKlar ist Deutschlands transparente Informationsplattform zur präzisen Berechnung von Stromkosten, Stromverbrauch von Haushaltsgeräten und Richtwerten nach offiziellen Standards (BNetzA, BDEW, Destatis, Stromspiegel).

## Übersicht & Methodik
- Website: https://kwhklar.de
- Themen: Stromkostenberechnung, Stromverbrauchsanalyse, kWh-Umrechnung, Haushaltsstrom-Benchmarks.
- Referenz-Strompreis: ${priceFormatted} (Stand: ${electricityPriceData.currentReferencePrice.referenceDate}).
- Offizielle Quellen: Bundesnetzagentur (BNetzA), BDEW, Statistisches Bundesamt (Destatis), Stromspiegel.
- Grundformel: Stromkosten (€) = Leistung (Watt) × Nutzungsdauer (h/Tag) ÷ 1.000 × Tage × Strompreis (€/kWh).

## Wichtigste Rechner
- [Stromkostenrechner](https://kwhklar.de/stromkosten-rechner): Universeller Rechner für Kosten pro Stunde, Tag, Monat und Jahr.
- [kWh Rechner](https://kwhklar.de/kwh-rechner): Kilowattstunden direkt in Euro umrechnen.
- [Watt Rechner](https://kwhklar.de/watt-rechner): Watt in Kilowattstunden (kWh) und laufende Stromkosten umrechnen.
- [Stromverbrauch Rechner](https://kwhklar.de/stromverbrauch-rechner): Interaktiver Stromverbrauchsrechner für Geräte und Haushalt.
- [E-Auto Ladekosten Rechner](https://kwhklar.de/e-auto/ladekosten-rechner): Ladekosten pro 100 km und Vollladung.
- [Wärmepumpen Stromkosten](https://kwhklar.de/waermepumpe/stromkosten): Jährliche Stromkosten nach JAZ und Wärmebedarf.
- [Photovoltaik Eigenverbrauch](https://kwhklar.de/photovoltaik/eigenverbrauch-rechner): Solar-Eigenverbrauch und Ersparnis berechnen.
- [Balkonkraftwerk Ersparnis](https://kwhklar.de/balkonkraftwerk/stromkosten-sparen): Steckersolargeräte (600W / 800W) Amortisation.

## Stromverbrauch im Haushalt (Richtwerte nach Stromspiegel)
- 1 Person: ~${householdBenchmarks[1]?.apartmentWithoutWarmWaterKwh ?? 1300} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[1]?.houseWithoutWarmWaterKwh ?? 2000} kWh/Jahr (Einfamilienhaus)
- 2 Personen: ~${householdBenchmarks[2]?.apartmentWithoutWarmWaterKwh ?? 2000} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[2]?.houseWithoutWarmWaterKwh ?? 3000} kWh/Jahr (Einfamilienhaus)
- 3 Personen: ~${householdBenchmarks[3]?.apartmentWithoutWarmWaterKwh ?? 2600} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[3]?.houseWithoutWarmWaterKwh ?? 3900} kWh/Jahr (Einfamilienhaus)
- 4 Personen: ~${householdBenchmarks[4]?.apartmentWithoutWarmWaterKwh ?? 3000} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[4]?.houseWithoutWarmWaterKwh ?? 4500} kWh/Jahr (Einfamilienhaus)
- 5 Personen: ~${householdBenchmarks[5]?.apartmentWithoutWarmWaterKwh ?? 3500} kWh/Jahr (Wohnung o. Warmwasser) | ~${householdBenchmarks[5]?.houseWithoutWarmWaterKwh ?? 5200} kWh/Jahr (Einfamilienhaus)

## Geprüfte Haushaltsgeräte-Datenbank
${applianceList.map(a => `- [${a.name} Stromverbrauch](https://kwhklar.de/geraete/${a.slug}): ${a.typicalWattage} W typisch | ${a.typicalUsageHours} h/Tag | ~${a.typicalAnnualKwh} kWh/Jahr | ~${a.annualCostEuro.toFixed(2)} €/Jahr`).join('\n')}

## Vollständiger Datensatz für KI-Assistenten
Für den vollständigen maschinenlesbaren Datensatz inklusive aller Formeln, Tarife, FAQs und Geräteprofile siehe:
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
