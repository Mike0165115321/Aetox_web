'use client';
import { useMemo } from 'react';

export type Complexity = 'light' | 'medium' | 'heavy';
export type Timeframe = 6 | 12 | 36;

export const workloadConfig = {
  light: {
    label: 'Light Workload',
    sublabel: 'Basic automation',
    humanSeconds: 60,
    botSeconds: 6,
    defaultVolume: 1000,
    defaultStaff: 2,
    defaultHourlyRate: 100,
    defaultUnitCost: 2,
    defaultBotPrice: 10000,
    defaultMaint: 1000,
    icon: 'zap'
  },
  medium: {
    label: 'Medium Workload',
    sublabel: 'Semi-complex flows',
    humanSeconds: 180,
    botSeconds: 25,
    defaultVolume: 10000,
    defaultStaff: 6,
    defaultHourlyRate: 120,
    defaultUnitCost: 5,
    defaultBotPrice: 35000,
    defaultMaint: 2500,
    icon: 'layers'
  },
  heavy: {
    label: 'Heavy Workload',
    sublabel: 'High-logic systems',
    humanSeconds: 420,
    botSeconds: 45,
    defaultVolume: 50000,
    defaultStaff: 15,
    defaultHourlyRate: 150,
    defaultUnitCost: 15,
    defaultBotPrice: 75000,
    defaultMaint: 5000,
    icon: 'server'
  },
} as const;

interface RoiInputs {
  volume: number;
  hourlyRateTHB: number;
  unitCostManualTHB: number;
  botPriceTHB: number;
  maintCostTHB: number;
  complexity: Complexity;
  timeframe: Timeframe;
  currency: string;
  exchangeRate: number;
}

export function useAutomationRoi(inputs: RoiInputs) {
  const {
    volume,
    hourlyRateTHB,
    unitCostManualTHB,
    botPriceTHB,
    maintCostTHB,
    complexity,
    timeframe,
    currency,
    exchangeRate
  } = inputs;

  const c = workloadConfig[complexity];

  return useMemo(() => {
    const manualHours = (volume * c.humanSeconds) / 3600;
    const botHours = (volume * c.botSeconds) / 3600;
    const savedHours = manualHours - botHours;
    const speedX = Math.round(manualHours / Math.max(botHours, 0.001));

    const errRate = 0.03;
    const errValuePerPointTHB = complexity === 'light' ? 20 : complexity === 'medium' ? 50 : 100;
    const errBefore = Math.floor(volume * errRate);
    const errCostBeforeTHB = errBefore * errValuePerPointTHB;

    const laborBeforeTHB = manualHours * hourlyRateTHB;
    const overheadBeforeTHB = volume * unitCostManualTHB;
    const totalBeforeTHB = laborBeforeTHB + errCostBeforeTHB + overheadBeforeTHB;

    const laborAfterTHB = botHours * (hourlyRateTHB * 0.1); 
    const totalAfterTHB = maintCostTHB + laborAfterTHB;

    const monthlySavingTHB = totalBeforeTHB - totalAfterTHB;
    
    const rate = currency === 'USD' ? 1 / exchangeRate : 1;
    
    const monthlySaving = monthlySavingTHB * rate;
    const annualSaving = monthlySaving * 12;
    const totalBefore = totalBeforeTHB * rate;
    const totalAfter = totalAfterTHB * rate;
    const botPrice = botPriceTHB * rate;
    const maintCost = maintCostTHB * rate;

    const costPerUnitBefore = totalBefore / Math.max(volume, 1);
    const costPerUnitAfter = totalAfter / Math.max(volume, 1);

    const paybackMonths = monthlySavingTHB > 0 ? botPriceTHB / monthlySavingTHB : 999;
    const roi = monthlySavingTHB > 0 ? (((monthlySavingTHB * 12) - botPriceTHB) / botPriceTHB * 100).toFixed(0) : '0';

    const projection = Array.from({ length: timeframe }, (_, i) => {
      const month = i + 1;
      const cumSavingTHB = monthlySavingTHB * month;
      
      let label = "";
      if (timeframe === 6) label = `Month ${month}`;
      else if (timeframe === 12) {
        if (month === 1) label = "Month 1";
        else if (month % 3 === 0) label = `Month ${month}`;
      }
      else {
        if (month === 1) label = "Year 1";
        else if (month === 13) label = "Year 2";
        else if (month === 25) label = "Year 3";
        else if (month % 12 === 0) label = `M. ${month}`;
      }

      return {
        month,
        label,
        cumSaving: cumSavingTHB * rate,
        breakEven: cumSavingTHB >= botPriceTHB,
      };
    });

    const maxProjectionValue = projection[projection.length - 1].cumSaving;
    const botBarPct = Math.min(Math.max((botHours / Math.max(manualHours, 0.001)) * 100, 1), 99);

    const totalPeriodSavings = monthlySaving * timeframe;
    const netProfitAfterInvestment = totalPeriodSavings - botPrice;
    const totalHoursSavedLongTerm = savedHours * timeframe;
    const costReductionPct = ((costPerUnitBefore - costPerUnitAfter) / Math.max(costPerUnitBefore, 0.001) * 100).toFixed(0);

    return {
      manualHours, botHours, savedHours, speedX,
      totalBefore, totalAfter,
      monthlySaving, annualSaving, paybackMonths, roi, botBarPct,
      botPrice, maintCost, projection,
      maxProjectionValue, costPerUnitBefore, costPerUnitAfter,
      totalPeriodSavings, netProfitAfterInvestment, totalHoursSavedLongTerm, costReductionPct
    };
  }, [volume, hourlyRateTHB, unitCostManualTHB, botPriceTHB, maintCostTHB, complexity, timeframe, currency, exchangeRate, c.botSeconds, c.humanSeconds]);
}
