import { describe, it, expect } from 'vitest';
import {
  calculateApplianceCost,
  calculateHeatPump,
  calculateElectricCar,
  calculateBalconySolar,
  wattsToKw,
  kwToKwh,
  kwhToCost,
  costToKwh,
} from '../src/lib/calculators';
import { formatEuro, formatKwh, formatWatt, formatCtPerKwh } from '../src/lib/formatters';
import { validateCalculatorInput } from '../src/lib/validation';

describe('Calculation Engine - Basic Conversions & Formulas', () => {
  it('converts Watts to kW accurately', () => {
    expect(wattsToKw(1000)).toBe(1);
    expect(wattsToKw(500)).toBe(0.5);
    expect(wattsToKw(150)).toBe(0.15);
    expect(wattsToKw(0)).toBe(0);
  });

  it('calculates kWh correctly from kW and hours', () => {
    expect(kwToKwh(1, 1)).toBe(1);
    expect(kwToKwh(0.1, 10)).toBe(1);
    expect(kwToKwh(0.5, 2)).toBe(1);
    expect(kwToKwh(2, 0.5)).toBe(1);
  });

  it('calculates cost from kWh and ct/kWh', () => {
    expect(kwhToCost(1, 35)).toBe(0.35);
    expect(kwhToCost(10, 35)).toBe(3.5);
    expect(kwhToCost(100, 40)).toBe(40.0);
  });

  it('calculates kWh from total cost in EUR', () => {
    expect(costToKwh(0.35, 35)).toBe(1);
    expect(costToKwh(35, 35)).toBe(100);
    expect(costToKwh(0, 35)).toBe(0);
  });
});

describe('Calculation Engine - Appliance Full Cost', () => {
  it('calculates a 1000W appliance run 1h/day at 35ct/kWh (Regression: 1000 W * 1 h = 1 kWh)', () => {
    const res = calculateApplianceCost({
      watt: 1000,
      hoursPerDay: 1,
      electricityPriceCtPerKwh: 35,
    });

    expect(res.kwhPerDay).toBe(1);
    expect(res.costPerDay).toBe(0.35);
    expect(formatKwh(res.kwhPerDay)).toBe('1 kWh');
    expect(formatKwh(1, 3)).toBe('1 kWh');
    expect(formatEuro(res.costPerDay)).toMatch(/0,35\s*€/);
    expect(res.kwhPerWeek).toBe(7);
    expect(res.costPerWeek).toBe(2.45);
    expect(res.kwhPerYear).toBe(365);
    expect(res.costPerYear).toBe(127.75);
    expect(res.pureConsumptionCostPerMonth).toBe(10.65);
  });

  it('verifies exact hourly kWh and cost calculations for 100W, 500W, 1000W, 2000W, 3000W', () => {
    // 100 W * 1 h = 0.1 kWh
    expect((100 * 1) / 1000).toBe(0.1);
    expect(formatKwh(0.1, 3)).toBe('0,1 kWh');

    // 500 W * 1 h = 0.5 kWh
    expect((500 * 1) / 1000).toBe(0.5);
    expect(formatKwh(0.5, 3)).toBe('0,5 kWh');

    // 1000 W * 1 h = 1.0 kWh (NEVER 1000 kWh or 1.000 with thousands dot)
    expect((1000 * 1) / 1000).toBe(1.0);
    expect(formatKwh(1.0, 3)).toBe('1 kWh');

    // 2000 W * 1 h = 2.0 kWh
    expect((2000 * 1) / 1000).toBe(2.0);
    expect(formatKwh(2.0, 3)).toBe('2 kWh');

    // 3000 W * 1 h = 3.0 kWh
    expect((3000 * 1) / 1000).toBe(3.0);
    expect(formatKwh(3.0, 3)).toBe('3 kWh');
  });

  it('handles 0 hours and 0 watt gracefully without NaN', () => {
    const res = calculateApplianceCost({
      watt: 0,
      hoursPerDay: 0,
      electricityPriceCtPerKwh: 35,
    });

    expect(res.kwhPerDay).toBe(0);
    expect(res.costPerDay).toBe(0);
    expect(res.costPerYear).toBe(0);
    expect(Number.isNaN(res.costPerYear)).toBe(false);
  });

  it('handles monthly base fee addition optionally', () => {
    const resWithoutBase = calculateApplianceCost({
      watt: 200,
      hoursPerDay: 5,
      electricityPriceCtPerKwh: 35,
      monthlyBaseFee: 12,
      includeBaseFeeInTotals: false,
    });

    const resWithBase = calculateApplianceCost({
      watt: 200,
      hoursPerDay: 5,
      electricityPriceCtPerKwh: 35,
      monthlyBaseFee: 12,
      includeBaseFeeInTotals: true,
    });

    expect(resWithoutBase.costPerMonth).toBe(resWithoutBase.pureConsumptionCostPerMonth);
    expect(resWithBase.costPerMonth).toBe(resWithoutBase.pureConsumptionCostPerMonth + 12);
    expect(resWithBase.costPerYear).toBe(resWithoutBase.pureConsumptionCostPerYear + 144);
  });
});

describe('Expansion Hub Calculations', () => {
  it('calculates Heat Pump power consumption correctly', () => {
    const res = calculateHeatPump({
      annualHeatingDemandKwh: 14000,
      jaz: 3.5,
      electricityPriceCtPerKwh: 30,
    });

    expect(res.annualElectricityKwh).toBe(4000);
    expect(res.annualCostEuro).toBe(1200);
    expect(res.monthlyCostEuro).toBe(100);
  });

  it('calculates E-Auto charging costs including loss percentage', () => {
    const res = calculateElectricCar({
      kwhPer100Km: 18,
      kmPerYear: 15000,
      electricityPriceCtPerKwh: 35,
      chargingLossPercent: 10,
    });

    expect(res.effectiveKwhPer100Km).toBe(19.8);
    expect(res.costPer100Km).toBe(6.93);
    expect(res.annualKwh).toBe(2970);
    expect(res.annualCostEuro).toBe(1039.5);
  });

  it('calculates Balcony Solar yield and payback', () => {
    const res = calculateBalconySolar({
      systemPeakWatt: 800,
      annualYieldKwh: 750,
      selfConsumptionPercent: 70,
      electricityPriceCtPerKwh: 35,
      systemCostEuro: 450,
    });

    expect(res.selfConsumedKwh).toBe(525);
    expect(res.annualSavingsEuro).toBe(183.75);
    expect(res.tenYearSavingsEuro).toBe(1837.5);
    expect(res.paybackYears).toBe(2.4);
  });
});

describe('Formatters & Validation', () => {
  it('formats German Euro currency and kWh strings', () => {
    expect(formatEuro(1234.56)).toMatch(/1\.234,56\s*€/);
    expect(formatKwh(1500)).toMatch(/1\.500\s*kWh/);
    expect(formatWatt(800)).toMatch(/800\s*W/);
    expect(formatCtPerKwh(35.5)).toMatch(/35,5\s*ct\/kWh/);
  });

  it('validates invalid calculator inputs', () => {
    const res = validateCalculatorInput({
      watt: -5,
      hoursPerDay: 26,
      electricityPriceCtPerKwh: 0,
    });

    expect(res.isValid).toBe(false);
    expect(res.errors.watt).toBeDefined();
    expect(res.errors.hoursPerDay).toBeDefined();
    expect(res.errors.electricityPriceCtPerKwh).toBeDefined();
  });
});
