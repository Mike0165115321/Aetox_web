'use client';
import { motion } from 'framer-motion';
import { Check, X, Shield, Cpu, Zap, Activity, Layers, Network, Maximize } from 'lucide-react';

export default function ArchitectureComparison({ dict }: { dict: any }) {
  // Mapping icons based on type string in dictionary
  const iconMap: Record<string, any> = {
    cpu: Cpu,
    activity: Activity,
    shield: Shield,
    zap: Zap
  };

  return (
    <section id="comparison" className="py-16 md:py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Integrated Architectural Patterns — The Flowchart Legacy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 -right-20 text-aetox-accent/[0.02] transform rotate-12">
          <Network size={600} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 -left-20 text-aetox-accent/[0.02] transform -rotate-12">
          <Maximize size={500} strokeWidth={0.5} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-fluid-h2 font-bold text-aetox-text-main tracking-tight">
            {dict.title} <span className="text-aetox-accent">{dict.titleAccent}</span>
          </h2>
          <p className="text-fluid-p text-aetox-text-soft font-bold max-w-2xl mx-auto mt-4">
            {dict.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Scrollable Container for Mobile */}
          <div className="overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <div className="min-w-[600px] md:min-w-full rounded-[24px] md:rounded-[32px] border border-aetox-border bg-aetox-surface/20 backdrop-blur-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 border-b border-aetox-border bg-aetox-surface/40">
                {dict.headers.map((header: string, i: number) => (
                  <div key={i} className={`p-5 md:p-8 font-bold text-xs md:text-sm tracking-wide ${i === 1 ? 'text-aetox-accent flex items-center gap-2' : 'text-aetox-text-muted'}`}>
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
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-3 border-b border-aetox-border last:border-0 hover:bg-aetox-accent/[0.02] transition-colors group`}
                  >
                    <div className="p-5 md:p-8 flex items-center gap-3 md:gap-4">
                      {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 text-aetox-text-muted group-hover:text-aetox-text-soft transition-colors" />}
                      <span className="text-xs md:text-sm font-bold text-aetox-text-main tracking-tight leading-tight">{item.feature}</span>
                    </div>
                    <div className="p-5 md:p-8 bg-aetox-accent/[0.03] border-x border-aetox-border/50">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-aetox-accent/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 md:w-3 h-2.5 md:h-3 text-aetox-accent" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-aetox-text-main leading-relaxed">{item.aetox}</span>
                      </div>
                    </div>
                    <div className="p-5 md:p-8 opacity-40">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <X className="w-2.5 md:w-3 h-2.5 md:h-3 text-red-500/50" />
                        </div>
                        <span className="text-sm md:text-base font-medium text-aetox-text-soft leading-relaxed">{item.generic}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Swipe Indicator for Mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-1 h-1 rounded-full bg-aetox-accent animate-ping" />
              <span className="text-[8px] font-black text-aetox-text-muted uppercase tracking-widest">{dict.swipeLabel}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-[11px] md:text-xs font-medium text-aetox-text-muted tracking-wide">
            {dict.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
