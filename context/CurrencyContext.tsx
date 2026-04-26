'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'THB' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  exchangeRate: number;
  formatCurrency: (value: number) => string;
  convert: (value: number, from: Currency, to: Currency) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const EXCHANGE_RATE = 35; // 1 USD = 35 THB

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('THB');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Force to next tick to avoid synchronous setState warning/error
    const timer = setTimeout(() => {
      setMounted(true);
      const saved = localStorage.getItem('aetox-currency');
      if (saved === 'THB' || saved === 'USD') {
        setCurrencyState(saved as Currency);
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by returning null or a loading state until mounted
  // Or just ensure the rendered output is consistent.

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('aetox-currency', newCurrency);
  };

  const convert = (value: number, from: Currency, to: Currency) => {
    if (from === to) return value;
    if (from === 'THB' && to === 'USD') return value / EXCHANGE_RATE;
    if (from === 'USD' && to === 'THB') return value * EXCHANGE_RATE;
    return value;
  };

  const formatCurrency = (value: number) => {
    if (currency === 'THB') {
      return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
        maximumFractionDigits: 0
      }).format(value);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    }
  };

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      exchangeRate: EXCHANGE_RATE,
      formatCurrency,
      convert
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
