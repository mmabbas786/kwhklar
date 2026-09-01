/**
 * Calculation engine for kWhKlar.de
 * Formula conventions:
 * 1 day = hoursPerDay (0..24)
 * 1 week = 7 days (or user daysPerWeek)
 * 1 month = (365 / 12) = 30.4167 days
 * 1 year = 365 days (or daysPerWeek * weeksPerYear)
 */

export interface CalculatorInput {
  watt: number;
  hoursPerDay: number;
  daysPerWeek?: number;
  weeksPerYear?: number;
  electricityPriceCtPerKwh: number;
  monthlyBaseFee?: number;
  includeBaseFeeInTotals?: boolean;
}

export interface CalculatorResult {
  watt: number;
  hoursPerDay: number;
  priceCtPerKwh: number;
  kwhPerDay: number;
  costPerDay: number;
  kwhPerWeek: number;
  costPerWeek: number;
  kwhPerMonth: number;
  costPerMonth: number;
  kwhPerYear: number;
  costPerYear: number;
  pureConsumptionCostPerMonth: number;
  pureConsumptionCostPerYear: number;
  monthlyBaseFee: number;
}

export function calculateApplianceCost(input: CalculatorInput): CalculatorResult {
  const watt = Math.max(0, Number(input.watt) || 0);
  const hoursPerDay = Math.min(24, Math.max(0, Number(input.hoursPerDay) || 0));
  const daysPerWeek = Math.min(7, Math.max(0, Number(input.daysPerWeek ?? 7)));
  const priceCt = Math.max(0, Number(input.electricityPriceCtPerKwh) || 0);
  const monthlyBaseFee = Math.max(0, Number(input.monthlyBaseFee) || 0);
  const includeBaseFee = Boolean(input.includeBaseFeeInTotals);

  const priceEuro = priceCt / 100;

  // Daily kWh
  const kwhPerDay = (watt * hoursPerDay) / 1000;
  const costPerDay = kwhPerDay * priceEuro;

  // Weekly kWh & Cost
  const kwhPerWeek = (watt * hoursPerDay * (daysPerWeek / 7) * 7) / 1000;
  const costPerWeek = kwhPerWeek * priceEuro;

  // Annual calculation based on 365 days / standard year
  const activeDaysPerYear = (daysPerWeek / 7) * 365;
  const kwhPerYear = (watt * hoursPerDay * activeDaysPerYear) / 1000;
  const pureConsumptionCostPerYear = kwhPerYear * priceEuro;
  const costPerYear = pureConsumptionCostPerYear + (includeBaseFee ? monthlyBaseFee * 12 : 0);

  // Monthly calculation (annual / 12)
  const kwhPerMonth = kwhPerYear / 12;
  const pureConsumptionCostPerMonth = kwhPerMonth * priceEuro;
  const costPerMonth = pureConsumptionCostPerMonth + (includeBaseFee ? monthlyBaseFee : 0);

  return {
    watt,
    hoursPerDay,
    priceCtPerKwh: priceCt,
    kwhPerDay: roundTo(kwhPerDay, 3),
    costPerDay: roundTo(costPerDay, 2),
    kwhPerWeek: roundTo(kwhPerWeek, 2),
    costPerWeek: roundTo(costPerWeek, 2),
    kwhPerMonth: roundTo(kwhPerMonth, 2),
    costPerMonth: roundTo(costPerMonth, 2),
    kwhPerYear: roundTo(kwhPerYear, 1),
    costPerYear: roundTo(costPerYear, 2),
    pureConsumptionCostPerMonth: roundTo(pureConsumptionCostPerMonth, 2),
    pureConsumptionCostPerYear: roundTo(pureConsumptionCostPerYear, 2),
    monthlyBaseFee: roundTo(monthlyBaseFee, 2),
  };
}

export interface HeatPumpInput {
  annualHeatingDemandKwh: number; // e.g. 15,000 kWh thermal
  jaz: number; // Jahresarbeitszahl, e.g. 3.5 - 4.5
  electricityPriceCtPerKwh: number;
}

export interface HeatPumpResult {
  annualElectricityKwh: number;
  monthlyElectricityKwh: number;
  annualCostEuro: number;
  monthlyCostEuro: number;
}

export function calculateHeatPump(input: HeatPumpInput): HeatPumpResult {
  const demand = Math.max(0, Number(input.annualHeatingDemandKwh) || 0);
  const jaz = Math.max(0.1, Number(input.jaz) || 3.5);
  const priceCt = Math.max(0, Number(input.electricityPriceCtPerKwh) || 0);

  const annualElectricityKwh = demand / jaz;
  const annualCostEuro = annualElectricityKwh * (priceCt / 100);

  return {
    annualElectricityKwh: roundTo(annualElectricityKwh, 1),
    monthlyElectricityKwh: roundTo(annualElectricityKwh / 12, 1),
    annualCostEuro: roundTo(annualCostEuro, 2),
    monthlyCostEuro: roundTo(annualCostEuro / 12, 2),
  };
}

export interface ElectricCarInput {
  kwhPer100Km: number; // e.g. 18 kWh / 100km
  kmPerYear: number; // e.g. 15,000 km
  electricityPriceCtPerKwh: number;
  chargingLossPercent?: number; // e.g. 10%
}

export interface ElectricCarResult {
  effectiveKwhPer100Km: number;
  costPer100Km: number;
  annualKwh: number;
  annualCostEuro: number;
  monthlyCostEuro: number;
}

export function calculateElectricCar(input: ElectricCarInput): ElectricCarResult {
  const baseKwh = Math.max(0, Number(input.kwhPer100Km) || 0);
  const km = Math.max(0, Number(input.kmPerYear) || 0);
  const priceCt = Math.max(0, Number(input.electricityPriceCtPerKwh) || 0);
  const lossPercent = Math.max(0, Number(input.chargingLossPercent ?? 10));

  const effectiveKwhPer100Km = baseKwh * (1 + lossPercent / 100);
  const costPer100Km = effectiveKwhPer100Km * (priceCt / 100);
  const annualKwh = (km / 100) * effectiveKwhPer100Km;
  const annualCostEuro = annualKwh * (priceCt / 100);

  return {
    effectiveKwhPer100Km: roundTo(effectiveKwhPer100Km, 2),
    costPer100Km: roundTo(costPer100Km, 2),
    annualKwh: roundTo(annualKwh, 1),
    annualCostEuro: roundTo(annualCostEuro, 2),
    monthlyCostEuro: roundTo(annualCostEuro / 12, 2),
  };
}

export interface BalconySolarInput {
  systemPeakWatt: number; // e.g. 800 W
  annualYieldKwh: number; // e.g. 750 kWh
  selfConsumptionPercent: number; // e.g. 70%
  electricityPriceCtPerKwh: number;
  systemCostEuro?: number; // e.g. 450 EUR
}

export interface BalconySolarResult {
  selfConsumedKwh: number;
  annualSavingsEuro: number;
  tenYearSavingsEuro: number;
  paybackYears: number | null;
}

export function calculateBalconySolar(input: BalconySolarInput): BalconySolarResult {
  const yieldKwh = Math.max(0, Number(input.annualYieldKwh) || 0);
  const selfConsRate = Math.min(100, Math.max(0, Number(input.selfConsumptionPercent) || 70));
  const priceCt = Math.max(0, Number(input.electricityPriceCtPerKwh) || 0);
  const costEuro = Number(input.systemCostEuro) || 0;

  const selfConsumedKwh = yieldKwh * (selfConsRate / 100);
  const annualSavingsEuro = selfConsumedKwh * (priceCt / 100);
  const tenYearSavingsEuro = annualSavingsEuro * 10;
  const paybackYears = annualSavingsEuro > 0 && costEuro > 0 ? roundTo(costEuro / annualSavingsEuro, 1) : null;

  return {
    selfConsumedKwh: roundTo(selfConsumedKwh, 1),
    annualSavingsEuro: roundTo(annualSavingsEuro, 2),
    tenYearSavingsEuro: roundTo(tenYearSavingsEuro, 2),
    paybackYears,
  };
}

export function wattsToKw(watts: number): number {
  return roundTo(Math.max(0, watts) / 1000, 4);
}

export function kwToKwh(kw: number, hours: number): number {
  return roundTo(Math.max(0, kw) * Math.max(0, hours), 4);
}

export function kwhToCost(kwh: number, priceCtPerKwh: number): number {
  return roundTo(Math.max(0, kwh) * (Math.max(0, priceCtPerKwh) / 100), 2);
}

export function costToKwh(costEuro: number, priceCtPerKwh: number): number {
  if (priceCtPerKwh <= 0) return 0;
  return roundTo(Math.max(0, costEuro) / (priceCtPerKwh / 100), 2);
}

export function roundTo(value: number, decimals: number): number {
  if (!Number.isFinite(value) || Number.isNaN(value)) return 0;
  const factor = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
