import { useMemo } from 'react';

export interface RoiInputs {
  useCase: string;
  queriesPerDay: number;
  avgSalary: number;
  staffCount: number;
  minutesPerCase: number;
  aiMonthlyFee: number;
  dropRate: number;
  valuePerCase: number;
}

export function useRoiCalculator(inputs: RoiInputs) {
  const {
    queriesPerDay,
    avgSalary,
    staffCount,
    minutesPerCase,
    aiMonthlyFee,
    dropRate,
    valuePerCase
  } = inputs;

  return useMemo(() => {
    const workingDays = 22;
    const hoursPerDay = 8;
    const workingMinutesMonthly = workingDays * hoursPerDay * 60;
    
    // Human Capacity
    const humanCapacityMonthly = (workingMinutesMonthly / minutesPerCase) * staffCount;
    const humanCapacityDaily = humanCapacityMonthly / workingDays;
    
    // AI Capacity (can handle all queries)
    const queriesMonthly = queriesPerDay * workingDays;
    
    // Real-world captured cases (Human can't do more than their capacity)
    const humanCapturedCases = Math.min(queriesMonthly, humanCapacityMonthly);
    const humanCapturedCasesDaily = humanCapturedCases / workingDays;
    
    // Lost Opportunities (Queries that human couldn't handle)
    const lostQueriesMonthly = Math.max(0, queriesMonthly - humanCapacityMonthly);
    const lostQueriesDaily = lostQueriesMonthly / workingDays;
    
    // Financials
    const totalHumanCostMonthly = avgSalary * staffCount;
    const humanCostPerCase = totalHumanCostMonthly / humanCapacityMonthly;
    
    // Revenue Analysis
    const humanCapturedRevenue = humanCapturedCases * valuePerCase;
    const humanCapturedRevenueDaily = humanCapturedCasesDaily * valuePerCase;
    
    const lostRevenuePerDay = lostQueriesDaily * valuePerCase;
    const lostRevenuePerMonth = lostRevenuePerDay * workingDays;

    const aiCapturedRevenue = queriesMonthly * valuePerCase;
    const aiCapturedRevenueDaily = queriesPerDay * valuePerCase;
    
    // Savings & ROI
    const monthlySaving = totalHumanCostMonthly - aiMonthlyFee;
    const yearlySaving = monthlySaving * 12;
    
    const totalRevenueGainMonthly = aiCapturedRevenue - humanCapturedRevenue;
    const totalYearlySaving = (monthlySaving * 12) + (totalRevenueGainMonthly * 12);
    
    const breakEvenMonth = aiMonthlyFee / (monthlySaving + totalRevenueGainMonthly);
    const roi = (totalYearlySaving / (aiMonthlyFee * 12)) * 100;

    // Efficiency
    const aiCapacityMin = 10000; // Scalable
    const aiCapacityMax = 100000;
    
    // Projection
    const projection = Array.from({ length: 6 }).map((_, i) => ({
      month: `Month ${i + 1}`,
      human: totalHumanCostMonthly * (i + 1),
      ai: (aiMonthlyFee * (i + 1))
    }));

    return {
      humanCapacityDaily,
      humanCapacityMonthly,
      humanCapturedCasesDaily,
      humanCapturedCases,
      lostQueriesDaily,
      lostQueriesMonthly,
      lostRevenuePerDay,
      lostRevenuePerMonth,
      totalHumanCostMonthly,
      humanCostPerCase,
      humanCapturedRevenueDaily,
      humanCapturedRevenue,
      aiCapturedRevenueDaily,
      aiCapturedRevenue,
      monthlySaving,
      yearlySaving,
      totalRevenueGainMonthly,
      roi,
      aiCapacityMin,
      aiCapacityMax,
      projection,
      totalYearlySaving,
      breakEvenMonth,
    };
  }, [queriesPerDay, avgSalary, staffCount, minutesPerCase, aiMonthlyFee, dropRate, valuePerCase]);
}
