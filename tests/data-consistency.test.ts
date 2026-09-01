import { describe, it, expect } from 'vitest';
import { appliances } from '../src/data/appliances';
import { householdBenchmarks } from '../src/data/household-benchmarks';
import { electricityPriceData } from '../src/data/electricity-price';
import { topics } from '../src/data/topics';

describe('P0 — Data Integrity & German Canonical Consistency Tests', () => {
  it('should have exactly 25 appliances in canonical database with valid numeric ranges and 10 FAQs each', () => {
    const applianceKeys = Object.keys(appliances);
    expect(applianceKeys.length).toBe(25);

    for (const slug of applianceKeys) {
      const app = appliances[slug];
      expect(app.slug).toBe(slug);
      expect(app.name.length).toBeGreaterThan(0);
      expect(app.typicalWattage).toBeGreaterThan(0);
      expect(app.wattageMin).toBeLessThanOrEqual(app.typicalWattage);
      expect(app.wattageMax).toBeGreaterThanOrEqual(app.typicalWattage);
      expect(app.typicalAnnualKwh).toBeGreaterThan(0);
      expect(app.annualCostEuro).toBeGreaterThan(0);
      expect(app.savingAdvice.length).toBeGreaterThanOrEqual(3);
      expect(app.faq.length).toBe(10); // Exactly 10 comprehensive FAQs

      // Verify math: annualCostEuro = typicalAnnualKwh * referencePrice (0.35 €/kWh)
      const expectedCost = +(app.typicalAnnualKwh * 0.35).toFixed(2);
      expect(Math.abs(app.annualCostEuro - expectedCost)).toBeLessThanOrEqual(0.05);
    }
  });

  it('should have 100% household benchmark consistency', () => {
    expect(householdBenchmarks[1].apartmentWithoutWarmWaterKwh).toBe(1300);
    expect(householdBenchmarks[1].apartmentWithWarmWaterKwh).toBe(1800);
    expect(householdBenchmarks[1].houseWithoutWarmWaterKwh).toBe(2000);
    expect(householdBenchmarks[1].houseWithWarmWaterKwh).toBe(2600);

    expect(householdBenchmarks[2].apartmentWithoutWarmWaterKwh).toBe(2100);
    expect(householdBenchmarks[2].houseWithoutWarmWaterKwh).toBe(3000);

    expect(householdBenchmarks[3].apartmentWithoutWarmWaterKwh).toBe(2600);
    expect(householdBenchmarks[3].houseWithoutWarmWaterKwh).toBe(3600);

    expect(householdBenchmarks[4].apartmentWithoutWarmWaterKwh).toBe(3000);
    expect(householdBenchmarks[4].houseWithoutWarmWaterKwh).toBe(4000);

    expect(householdBenchmarks[5].apartmentWithoutWarmWaterKwh).toBe(3600);
    expect(householdBenchmarks[5].houseWithoutWarmWaterKwh).toBe(4800);
  });

  it('should have exactly 32 German topic hubs with saving advice and 10 FAQs each', () => {
    const topicKeys = Object.keys(topics);
    expect(topicKeys.length).toBe(32);

    for (const slug of topicKeys) {
      const item = topics[slug];
      expect(item, `Topic ${slug} must exist`).toBeDefined();
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.savingAdvice.length).toBeGreaterThanOrEqual(4);
      expect(item.faq.length).toBe(10); // Exactly 10 comprehensive FAQs
    }
  });

  it('should have standard reference electricity price of 35 ct/kWh in electricityPriceData', () => {
    expect(electricityPriceData.currentReferencePrice.valueCtPerKwh).toBe(35.0);
    expect(electricityPriceData.currentReferencePrice.unit).toBe('ct/kWh');
    expect(electricityPriceData.priceComposition.length).toBeGreaterThanOrEqual(3);
  });
});

describe('P0 — Calculator Mathematical Rigor & Boundary Tests', () => {
  function calculateCost(watt: number, hoursPerDay: number, daysPerWeek: number, pricePerKwh: number) {
    const safeWatt = Math.max(0, watt || 0);
    const safeHours = Math.max(0, Math.min(24, hoursPerDay || 0));
    const safeDays = Math.max(0, Math.min(7, daysPerWeek || 0));
    const safePrice = Math.max(0, pricePerKwh || 0);

    const kwhPerDay = (safeWatt * safeHours) / 1000;
    const kwhPerWeek = kwhPerDay * (safeDays / 7) * 7;
    const kwhPerYear = (safeWatt * safeHours * safeDays * 52.1429) / 1000;
    const kwhPerMonth = kwhPerYear / 12;

    return {
      kwhPerDay: +kwhPerDay.toFixed(3),
      kwhPerWeek: +kwhPerWeek.toFixed(2),
      kwhPerMonth: +kwhPerMonth.toFixed(2),
      kwhPerYear: +kwhPerYear.toFixed(1),
      costPerHour: +((safeWatt * safePrice) / 1000).toFixed(4),
      costPerDay: +(kwhPerDay * safePrice).toFixed(3),
      costPerMonth: +(kwhPerMonth * safePrice).toFixed(2),
      costPerYear: +(kwhPerYear * safePrice).toFixed(2),
    };
  }

  it('should calculate typical 2,000 W space heater running 3h/day @ 35 ct/kWh accurately', () => {
    const res = calculateCost(2000, 3, 7, 0.35);
    expect(res.kwhPerDay).toBe(6.0); // 2000 * 3 / 1000 = 6 kWh/day
    expect(res.costPerDay).toBe(2.10); // 6.0 * 0.35 = 2.10 €
    expect(res.costPerHour).toBe(0.70); // 2000 * 0.35 / 1000 = 0.70 €
    expect(res.kwhPerYear).toBeCloseTo(2190, 0); // 6 * 365 = 2190 kWh
    expect(res.costPerYear).toBeCloseTo(766.5, 0);
  });

  it('should handle boundary conditions: zero, negative, large numbers, and empty inputs gracefully', () => {
    // Zero input
    const zeroRes = calculateCost(0, 0, 7, 0.35);
    expect(zeroRes.kwhPerDay).toBe(0);
    expect(zeroRes.costPerMonth).toBe(0);

    // Negative input clamped to 0
    const negRes = calculateCost(-500, -5, -2, -0.35);
    expect(negRes.kwhPerDay).toBe(0);
    expect(negRes.costPerYear).toBe(0);

    // Hours per day capped at 24h
    const overHoursRes = calculateCost(1000, 30, 7, 0.35);
    expect(overHoursRes.kwhPerDay).toBe(24.0); // 1000 * 24 / 1000 = 24 kWh

    // Large numbers (e.g. 50,000 W industrial load)
    const largeRes = calculateCost(50000, 10, 7, 0.35);
    expect(largeRes.kwhPerDay).toBe(500.0);
    expect(largeRes.costPerDay).toBe(175.0);
  });
});
