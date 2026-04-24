import { useMemo } from 'react';

export interface RoiInputs {
  useCase: string;
  queriesPerDay: number;
  avgSalary: number;
  staffCount: number;
  minutesPerCase: number;
  aiMonthlyFee: number;
  setupCost: number; // Added this
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
    setupCost, // Added this
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
    const totalRevenueGainMonthly = aiCapturedRevenue - humanCapturedRevenue;
    const totalMonthlyBenefit = monthlySaving + totalRevenueGainMonthly;
    
    const totalYearlySaving = totalMonthlyBenefit * 12;
    
    // Payback period = Initial Investment / Monthly Profit
    const breakEvenMonth = totalMonthlyBenefit > 0 ? setupCost / totalMonthlyBenefit : 0;
    
    // ROI = (Yearly Net Profit / Total Cost for Year 1) * 100
    const totalCostYear1 = (aiMonthlyFee * 12) + setupCost;
    const roi = totalCostYear1 > 0 ? (totalYearlySaving / totalCostYear1) * 100 : 0;

    // Efficiency
    const aiCapacityMin = 10000; // Scalable
    const aiCapacityMax = 100000;
    
    // Projection
    const projection = Array.from({ length: 6 }).map((_, i) => ({
      month: `Month ${i + 1}`,
      human: totalHumanCostMonthly * (i + 1),
      ai: (aiMonthlyFee * (i + 1))
    }));

    // New metrics
    const aiVsHumanMultiplier = humanCapacityDaily > 0
      ? Math.round(queriesPerDay / humanCapacityDaily)
      : queriesPerDay;

    // Hours the team gets back = all query handling time AI absorbs
    const hoursRecoveredMonthly = Math.round(
      (queriesPerDay * workingDays * minutesPerCase) / 60
    );

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
      aiVsHumanMultiplier,
      hoursRecoveredMonthly,
    };
  }, [queriesPerDay, avgSalary, staffCount, minutesPerCase, aiMonthlyFee, dropRate, valuePerCase]);
}
