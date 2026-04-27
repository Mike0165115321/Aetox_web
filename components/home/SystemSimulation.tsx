'use client';
import { motion } from 'framer-motion';
import { Database, Cpu, ShieldCheck, Zap, Server } from 'lucide-react';

export default function SystemSimulation({ dict }: { dict: any }) {
  // Mapping icons to step IDs
  const iconMap: Record<number, any> = {
    1: Database,
    2: Server,
    3: Cpu,
    4: ShieldCheck,
    5: Zap
  };

  return (
    <section id="simulation" className="py-16 md:py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Optimized Minimal Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 text-aetox-accent/[0.03]">
          <Cpu size={600} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-24">
          <h2 className="text-fluid-h2 font-bold text-aetox-text-main tracking-tighter">
            {dict.title} <span className="text-aetox-accent">{dict.titleAccent}</span>
          </h2>
          <p className="text-fluid-p text-aetox-text-soft font-bold max-w-xl mx-auto mt-4">
            {dict.subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aetox-border to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
            {dict.steps.map((step: any, idx: number) => {
              const Icon = iconMap[step.id];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-aetox-surface border border-aetox-border flex items-center justify-center mb-4 md:mb-6 group-hover:border-aetox-accent/50 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-aetox-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {Icon && <Icon className={`w-7 h-7 md:w-8 md:h-8 ${step.color} relative z-10`} />}
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 rounded-lg bg-aetox-bg border border-aetox-border flex items-center justify-center text-[10px] md:text-xs font-bold text-aetox-text-muted">
                      0{step.id}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm font-bold text-aetox-text-main tracking-wide text-center mb-2">
                    {step.label}
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-aetox-border group-hover:bg-aetox-accent transition-colors" />
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Case Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 md:mt-20 p-6 md:p-8 glass-card rounded-[24px] md:rounded-[32px] border-aetox-accent/10 bg-aetox-accent/[0.02] max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="px-4 py-2 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 text-aetox-accent text-xs font-bold tracking-wider">
                {dict.caseLabel}
              </div>
            </div>
            <p className="text-aetox-text-soft text-xs md:text-sm italic font-medium leading-relaxed">
              &quot;{dict.caseDescription}&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
