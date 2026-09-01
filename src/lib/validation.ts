/**
 * Validation routines and German error feedback for calculator inputs.
 */

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateCalculatorInput(data: {
  watt?: number;
  hoursPerDay?: number;
  electricityPriceCtPerKwh?: number;
  monthlyBaseFee?: number;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (data.watt === undefined || isNaN(data.watt) || data.watt <= 0) {
    errors.watt = 'Bitte gib eine Leistung größer als 0 Watt ein.';
  } else if (data.watt > 100000) {
    errors.watt = 'Leistung darf maximal 100.000 Watt betragen.';
  }

  if (data.hoursPerDay === undefined || isNaN(data.hoursPerDay) || data.hoursPerDay < 0) {
    errors.hoursPerDay = 'Betriebsstunden müssen mindestens 0 betragen.';
  } else if (data.hoursPerDay > 24) {
    errors.hoursPerDay = 'Ein Tag hat maximal 24 Stunden.';
  }

  if (
    data.electricityPriceCtPerKwh === undefined ||
    isNaN(data.electricityPriceCtPerKwh) ||
    data.electricityPriceCtPerKwh <= 0
  ) {
    errors.electricityPriceCtPerKwh = 'Bitte gib einen Strompreis größer als 0 Cent ein.';
  } else if (data.electricityPriceCtPerKwh > 200) {
    errors.electricityPriceCtPerKwh = 'Der Strompreis scheint unplausibel hoch (max. 200 ct/kWh).';
  }

  if (data.monthlyBaseFee !== undefined && !isNaN(data.monthlyBaseFee) && data.monthlyBaseFee < 0) {
    errors.monthlyBaseFee = 'Der Grundpreis darf nicht negativ sein.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
