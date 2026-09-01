/**
 * German formatting helpers for kWhKlar.de
 */

export function formatEuro(amount: number, maxDecimals = 2): string {
  if (!Number.isFinite(amount) || Number.isNaN(amount)) return '0,00 €';
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: maxDecimals,
  }).format(amount);
}

export function formatKwh(kwh: number, decimals = 2): string {
  if (!Number.isFinite(kwh) || Number.isNaN(kwh)) return '0 kWh';
  const formatted = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(kwh);
  return `${formatted} kWh`;
}

export function formatWatt(watt: number): string {
  if (!Number.isFinite(watt) || Number.isNaN(watt)) return '0 W';
  const formatted = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 0,
  }).format(watt);
  return `${formatted} W`;
}

export function formatCtPerKwh(ct: number, decimals = 1): string {
  if (!Number.isFinite(ct) || Number.isNaN(ct)) return '0 ct/kWh';
  const formatted = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(ct);
  return `${formatted} ct/kWh`;
}

export function formatNumber(value: number, decimals = 2): string {
  if (!Number.isFinite(value) || Number.isNaN(value)) return '0';
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(value: number): string {
  if (!Number.isFinite(value) || Number.isNaN(value)) return '0 %';
  return `${formatNumber(value, 1)} %`;
}
