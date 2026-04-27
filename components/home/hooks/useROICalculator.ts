'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

export function useROICalculator() {
  const { currency, formatCurrency, exchangeRate } = useCurrency();
  const [staffCount, setStaffCount] = useState<number>(10);
  const [avgSalary, setAvgSalary] = useState<number>(35000);
  const [hoursSpent, setHoursSpent] = useState<number>(3);
  
  // Use useRef to store previous currency to prevent calculation loops
  const prevCurrencyRef = useRef(currency);

  // Handle currency conversion when currency changes
  useEffect(() => {
    if (prevCurrencyRef.current !== currency) {
      setAvgSalary(prev => {
        if (currency === 'USD' && prev > 5000) {
          return Math.round(prev / exchangeRate / 100) * 100;
        } else if (currency === 'THB' && prev < 5000) {
          return Math.round(prev * exchangeRate / 1000) * 1000;
        }
        return prev;
      });
      prevCurrencyRef.current = currency;
    }
  }, [currency, exchangeRate]);

  // Direct calculation (Computed Properties) 
  // This reduces Re-renders and fixes errors from using setResults in useEffect
  const ratio = hoursSpent / 8;
  const monthlyLoss = Math.round(ratio * avgSalary * staffCount);
  const annualImpact = monthlyLoss * 12;
  const efficiencyBoost = Math.round(ratio * 100);

  const results = {
    monthlyLoss,
    annualImpact,
    efficiencyBoost
  };

  const applyPreset = (type: 'startup' | 'sme' | 'enterprise') => {
    if (type === 'startup') {
      setStaffCount(5);
      setAvgSalary(currency === 'THB' ? 25000 : 800);
      setHoursSpent(2);
    } else if (type === 'sme') {
      setStaffCount(25);
      setAvgSalary(currency === 'THB' ? 35000 : 1200);
      setHoursSpent(4);
    } else if (type === 'enterprise') {
      setStaffCount(100);
      setAvgSalary(currency === 'THB' ? 55000 : 2000);
      setHoursSpent(3);
    }
  };

  return {
    staffCount,
    setStaffCount,
    avgSalary,
    setAvgSalary,
    hoursSpent,
    setHoursSpent,
    results,
    applyPreset,
    currency,
    formatCurrency
  };
}
