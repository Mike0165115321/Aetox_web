'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '@/context/CurrencyContext';
import { Globe } from 'lucide-react';

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="inline-flex p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl relative">
      {/* Background slider */}
      <motion.div
        layoutId="currency-active"
        className="absolute inset-1 bg-cyber-blue rounded-lg shadow-cyber-glow"
        initial={false}
        animate={{
          x: currency === 'THB' ? '0%' : '100%'
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ width: 'calc(50% - 4px)' }}
      />

      <button
        onClick={() => setCurrency('THB')}
        className={`relative z-10 px-4 py-1.5 text-[10px] font-black transition-colors ${
          currency === 'THB' ? 'text-black' : 'text-gray-400 hover:text-white'
        }`}
      >
        THB (฿)
      </button>

      <button
        onClick={() => setCurrency('USD')}
        className={`relative z-10 px-4 py-1.5 text-[10px] font-black transition-colors ${
          currency === 'USD' ? 'text-black' : 'text-gray-400 hover:text-white'
        }`}
      >
        USD ($)
      </button>
    </div>
  );
}
