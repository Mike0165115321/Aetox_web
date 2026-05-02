'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '@/context/CurrencyContext';

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  const currencies = [
    { id: 'THB', label: 'THB (฿)' },
    { id: 'USD', label: 'USD ($)' }
  ];

  return (
    <div className="flex p-1.5 bg-aetox-surface/20 backdrop-blur-2xl border border-aetox-border rounded-2xl relative shadow-2xl min-w-[200px]">
      {currencies.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrency(item.id as 'THB' | 'USD')}
          className={`relative z-10 flex-1 px-5 py-2.5 text-fluid-sm font-black transition-all duration-300 rounded-xl ${
            currency === item.id ? 'text-white' : 'text-aetox-text-muted hover:text-aetox-text-main'
          }`}
        >
          {/* Active Background Slider */}
          {currency === item.id && (
            <motion.div
              layoutId="active-currency-pill"
              className="absolute inset-0 bg-aetox-accent rounded-xl shadow-[0_0_20px_rgba(30,144,255,0.4)]"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
