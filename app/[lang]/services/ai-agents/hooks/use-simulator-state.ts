'use client';
import { useState } from 'react';

export interface TierPreset {
  queriesPerDay: number;
  avgSalary: number;
  staffCount: number;
  minutesPerCase: number;
  valuePerCase: number;
  aiMonthlyFee: number;
  setupCost: number;
}

export interface Tier {
  id: string;
  preset: TierPreset;
  [key: string]: any;
}

interface UseSimulatorStateProps {
  tierId: string;
  tiers: Tier[];
  currency: string;
  exchangeRate: number;
}

export function useSimulatorState({ tierId, tiers, currency, exchangeRate }: UseSimulatorStateProps) {
  const activeTier = tiers.find(t => t.id === tierId)!;

  // State initialization
  const [queriesPerDay, setQueriesPerDay]   = useState(activeTier.preset.queriesPerDay);
  const [avgSalary, setAvgSalary]           = useState(activeTier.preset.avgSalary);
  const [staffCount, setStaffCount]         = useState(activeTier.preset.staffCount);
  const [minutesPerCase, setMinutesPerCase] = useState(activeTier.preset.minutesPerCase);
  const [aiMonthlyFee, setAiMonthlyFee]     = useState(activeTier.preset.aiMonthlyFee);
  const [setupCost, setSetupCost]           = useState(activeTier.preset.setupCost);
  const [valuePerCase, setValuePerCase]     = useState(activeTier.preset.valuePerCase);
  const [dropRate]                          = useState(20);

  // Sync logic
  const [prevTierId, setPrevTierId] = useState(tierId);
  const [prevCurrency, setPrevCurrency] = useState(currency);

  if (prevTierId !== tierId) {
    setPrevTierId(tierId);
    const p = activeTier.preset;
    setQueriesPerDay(p.queriesPerDay);
    setStaffCount(p.staffCount);
    setMinutesPerCase(p.minutesPerCase);
    
    if (currency === 'USD' && exchangeRate) {
      setAvgSalary(Math.round(p.avgSalary / exchangeRate / 100) * 100);
      setValuePerCase(Math.round(p.valuePerCase / exchangeRate / 5) * 5);
      setAiMonthlyFee(Math.round(p.aiMonthlyFee / exchangeRate / 50) * 50);
      setSetupCost(Math.round(p.setupCost / exchangeRate / 100) * 100);
    } else {
      setAvgSalary(p.avgSalary);
      setValuePerCase(p.valuePerCase);
      setAiMonthlyFee(p.aiMonthlyFee);
      setSetupCost(p.setupCost);
    }
  } else if (prevCurrency !== currency && exchangeRate) {
    setPrevCurrency(currency);
    if (currency === 'USD') {
      setAvgSalary(prev => Math.round(prev / exchangeRate / 100) * 100);
      setValuePerCase(prev => Math.round(prev / exchangeRate / 5) * 5);
      setAiMonthlyFee(prev => Math.round(prev / exchangeRate / 50) * 50);
      setSetupCost(prev => Math.round(prev / exchangeRate / 100) * 100);
    } else {
      setAvgSalary(prev => Math.round(prev * exchangeRate / 100) * 100);
      setValuePerCase(prev => Math.round(prev * exchangeRate / 100) * 100);
      setAiMonthlyFee(prev => Math.round(prev * exchangeRate / 1000) * 1000);
      setSetupCost(prev => Math.round(prev * exchangeRate / 1000) * 1000);
    }
  }

  return {
    params: {
      queriesPerDay,
      avgSalary,
      staffCount,
      minutesPerCase,
      aiMonthlyFee,
      setupCost,
      valuePerCase,
      dropRate
    },
    setters: {
      setQueriesPerDay,
      setAvgSalary,
      setStaffCount,
      setMinutesPerCase,
      setAiMonthlyFee,
      setSetupCost,
      setValuePerCase
    }
  };
}
