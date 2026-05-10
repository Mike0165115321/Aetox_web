'use client';
import { motion } from 'framer-motion';
import { Check, X, Shield, Cpu, Zap, Activity } from 'lucide-react';
import React from 'react';

export default function ArchitectureComparison({ dict }: { dict: any }) {
  const iconMap: Record<string, any> = {
    cpu: Cpu,
    activity: Activity,
    shield: Shield,
    zap: Zap
  };

  return (
    <section id="comparison" className="py-12 md:py-32 relative overflow-hidden border-t border-white/5 scroll-mt-20">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-fluid-h2 font-bold text-aetox-text-main tracking-tight">
            {dict.title} <span className="text-aetox-accent">{dict.titleAccent}</span>
          </h2>
          <p className="text-fluid-p text-aetox-text-soft font-bold max-w-2xl mx-auto mt-4">
            {dict.subtitle}
          </p>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {dict.items.map((item: any, idx: number) => {
            const Icon = iconMap[item.type];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="aetox-card p-5 space-y-4 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-lg bg-aetox-surface-high text-aetox-text-soft">
                    {Icon && <Icon size={18} />}
                  </div>
                  <span className="text-sm font-bold text-aetox-text-main tracking-tight">{item.feature}</span>
                </div>
                
                <div className="space-y-4 pt-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-fluid-label font-black text-aetox-accent tracking-tight">
                      <div className="w-1 h-1 rounded-full bg-aetox-accent shadow-aetox-glow" />
                      {dict.headers[1]}
                    </div>
                    <div className="flex items-start gap-3 bg-aetox-accent/5 p-3 rounded-xl border border-aetox-accent/10">
                      <Check className="w-4 h-4 text-aetox-accent mt-0.5 shrink-0" />
                      <span className="text-sm font-bold text-aetox-text-main leading-relaxed">{item.aetox}</span>
                    </div>
                  </div>

                  <div className="space-y-2 opacity-50">
                    <div className="flex items-center gap-2 text-fluid-label font-black text-aetox-text-muted tracking-tight">
                      {dict.headers[2]}
                    </div>
                    <div className="flex items-start gap-3 p-3">
                      <X className="w-4 h-4 text-aetox-error/50 mt-0.5 shrink-0" />
                      <span className="text-xs font-medium text-aetox-text-soft leading-relaxed">{item.generic}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop View: Traditional Table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="aetox-card overflow-hidden !rounded-[32px] shadow-2xl border border-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-white/5 bg-aetox-bg/50">
              {dict.headers.map((header: string, i: number) => (
                <div key={i} className={`p-6 md:p-8 font-black text-[10px] md:text-xs tracking-tight ${i === 1 ? 'text-aetox-accent flex items-center gap-2' : 'text-aetox-text-muted'}`}>
                  {i === 1 && <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow animate-pulse" />}
                  {header}
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {dict.items.map((item: any, idx: number) => {
              const Icon = iconMap[item.type];
              return (
                <motion.div 
                  key={idx}
                  className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-aetox-accent/[0.02] transition-colors group"
                >
                  <div className="p-6 md:p-8 flex items-center gap-4">
                    {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 text-aetox-text-muted group-hover:text-aetox-text-soft transition-colors" />}
                    <span className="text-sm md:text-base font-bold text-aetox-text-main tracking-tight leading-tight">{item.feature}</span>
                  </div>
                  
                  <div className="p-6 md:p-8 bg-aetox-accent/[0.03] border-x border-white/5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-aetox-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-aetox-accent" />
                      </div>
                      <span className="text-base font-bold text-aetox-text-main leading-relaxed">{item.aetox}</span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 opacity-40">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-aetox-error/10 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-aetox-error/50" />
                      </div>
                      <span className="text-base font-medium text-aetox-text-soft leading-relaxed">{item.generic}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p className="text-[10px] md:text-xs font-black tracking-tight text-aetox-text-muted opacity-60">
            {dict.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
