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
    defaultUnitCost: 5,
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
    defaultUnitCost: 25,
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
    defaultUnitCost: 100,
    defaultBotPrice: 75000,
    defaultMaint: 5000,
    icon: 'server'
  },
} as const;

interface RoiInputs {
  volume: number;
  hourlyRate: number;
  unitCostManual: number;
  botPrice: number;
  maintCost: number;
  complexity: Complexity;
  timeframe: Timeframe;
  currency: string;
  exchangeRate: number;
}

export function useAutomationRoi(inputs: RoiInputs) {
  const {
    volume,
    hourlyRate,
    unitCostManual,
    botPrice,
    maintCost,
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
    const efficiency = ((savedHours / manualHours) * 100).toFixed(1);

    const errRate = 0.05;
    const errValuePerPoint = complexity === 'light' ? 50 : complexity === 'medium' ? 150 : 350;
    const errValueConverted = currency === 'USD' ? errValuePerPoint / exchangeRate : errValuePerPoint;
    const errBefore = Math.floor(volume * errRate);
    const errCostBefore = errBefore * errValueConverted;

    const laborBefore = manualHours * hourlyRate;
    const overheadBefore = volume * unitCostManual;
    const totalBefore = laborBefore + errCostBefore + overheadBefore;

    const laborAfter = botHours * (hourlyRate * 0.1);
    const totalAfter = maintCost + laborAfter;

    const monthlySaving = totalBefore - totalAfter;
    const annualSaving = monthlySaving * 12;
    const paybackMonths = monthlySaving > 0 ? botPrice / monthlySaving : 999;
    const roi = monthlySaving > 0 ? ((annualSaving - botPrice) / botPrice * 100).toFixed(0) : '0';

    const costPerUnitBefore = totalBefore / Math.max(volume, 1);
    const costPerUnitAfter = totalAfter / Math.max(volume, 1);

    const projection = Array.from({ length: timeframe }, (_, i) => {
      const month = i + 1;
      const cumSaving = monthlySaving * month;

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
        label, // Default English label, can be mapped in UI
        cumSaving,
        breakEven: cumSaving >= botPrice,
      };
    });

    const maxProjectionValue = projection[projection.length - 1].cumSaving;
    const botBarPct = Math.min(Math.max((botHours / Math.max(manualHours, 0.001)) * 100, 1), 99);

    const totalPeriodSavings = monthlySaving * timeframe;
    const netProfitAfterInvestment = totalPeriodSavings - botPrice;
    const totalHoursSavedLongTerm = savedHours * timeframe;
    const costReductionPct = ((costPerUnitBefore - costPerUnitAfter) / costPerUnitBefore * 100).toFixed(0);

    return {
      manualHours, botHours, savedHours, speedX, efficiency, errBefore, errCostBefore, overheadBefore,
      laborBefore, totalBefore, laborAfter, totalAfter,
      monthlySaving, annualSaving, paybackMonths, roi, projection, botBarPct,
      costPerUnitBefore, costPerUnitAfter, maxProjectionValue,
      totalPeriodSavings, netProfitAfterInvestment, totalHoursSavedLongTerm, costReductionPct
    };
  }, [volume, hourlyRate, unitCostManual, botPrice, maintCost, complexity, timeframe, currency, exchangeRate, c.botSeconds, c.humanSeconds]);
}
