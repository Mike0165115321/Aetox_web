'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import CurrencySwitcher from '@/components/CurrencySwitcher';

export default function AcademyROI({ dict }: { dict: any }) {
  const { currency, formatCurrency, convert } = useCurrency();

  // Helper to format cost strings from dictionary
  const formatCost = (cost: string) => {
    if (cost.includes('1,200,000')) {
      const val = 1200000;
      const converted = currency === 'USD' ? convert(val, 'THB', 'USD') : val;
      return `${formatCurrency(converted)} ${currency === 'THB' ? '+ ' + (dict.common?.units?.bahtPerYear || 'บาท / ปี') : '+ ' + (dict.common?.units?.usdPerYear || '/ Year')}`;
    }
    return cost;
  };

  return (
    <section id="academy-roi" className="py-24 relative z-10 scroll-mt-20">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-fluid-h2 font-display text-aetox-text-main">{dict.title}</h2>
              <p className="text-aetox-text-soft text-fluid-p">{dict.description}</p>
            </div>
            <div className="flex justify-center pb-2">
              <CurrencySwitcher />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dict.comparison.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.isBad ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`
                  p-10 rounded-[40px] border transition-all duration-500
                  ${item.isBad 
                    ? 'bg-rose-500/5 border-rose-500/20 hover:border-rose-500/40' 
                    : 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.05)]'}
                `}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.isBad ? 'bg-rose-500/10' : 'bg-emerald-500/10'}`}>
                    {item.isBad ? <AlertTriangle className="w-6 h-6 text-rose-500" /> : <TrendingUp className="w-6 h-6 text-emerald-500" />}
                  </div>
                  <div className={`text-fluid-label font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full ${item.isBad ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                    {item.isBad ? dict.hiddenLoss : dict.advantage}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-aetox-text-muted text-fluid-label font-black uppercase tracking-widest mb-3">{item.label}</h3>
                    <div className={`text-3xl md:text-4xl font-display font-black ${item.isBad ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {formatCost(item.cost)}
                    </div>
                  </div>

                  <div className="h-px bg-aetox-border w-full" />

                  <div className="space-y-6">
                    <p className="text-aetox-text-soft text-fluid-p font-medium leading-relaxed italic border-l-2 border-aetox-border pl-6">
                      &quot; {item.impact} &quot;
                    </p>
                    
                    <div className="flex gap-4">
                      {item.isBad ? (
                        <div className="flex items-center gap-2 text-rose-400/70 text-fluid-label font-black uppercase">
                          <Clock className="w-4 h-4" /> {dict.wasteTime}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-emerald-400/70 text-fluid-label font-black uppercase">
                          <DollarSign className="w-4 h-4" /> {dict.growthProfit}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-aetox-text-muted text-fluid-label font-black uppercase tracking-[0.3em]">
              {dict.footerNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
