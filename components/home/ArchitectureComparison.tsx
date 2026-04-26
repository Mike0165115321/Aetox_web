'use client';
import { motion } from 'framer-motion';
import { Check, X, Shield, Cpu, Zap, Activity } from 'lucide-react';

export default function ArchitectureComparison() {
  const comparison = [
    {
      feature: "System Foundation",
      aetox: "Enterprise AI Architecture (RAG-Optimized)",
      generic: "Standard Web Application Code",
      icon: Cpu
    },
    {
      feature: "Logic Accuracy",
      aetox: "99.9% Mathematical Precision",
      generic: "Basic Conditional Logic (Prone to Error)",
      icon: Activity
    },
    {
      feature: "Security Standard",
      aetox: "Zero-Model Training (100% Data Privacy)",
      generic: "Public API Dependencies (Data Risk)",
      icon: Shield
    },
    {
      feature: "Business ROI",
      aetox: "Guaranteed 40-70% Cost Reduction",
      generic: "Uncertain / Variable Result",
      icon: Zap
    }
  ];

  return (
    <section className="py-32 relative bg-aetox-bg overflow-hidden border-t border-aetox-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-aetox-text-main mb-6 uppercase tracking-tighter">
            Architectural <span className="text-aetox-accent">Superiority</span>
          </h2>
          <p className="text-aetox-text-soft text-sm md:text-lg max-w-2xl mx-auto uppercase tracking-widest font-bold">
            ทำไมระบบระดับ Enterprise ถึงต้องการสถาปัตยกรรมที่เหนือกว่าโค้ดทั่วไป
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-aetox-border bg-aetox-surface/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-aetox-border bg-aetox-surface/40">
            <div className="p-6 md:p-8 font-black text-[10px] uppercase tracking-[0.2em] text-aetox-text-muted">Feature / Capability</div>
            <div className="p-6 md:p-8 font-black text-[10px] uppercase tracking-[0.2em] text-aetox-accent flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-aetox-accent shadow-aetox-glow animate-pulse" />
              Aetox Solution
            </div>
            <div className="p-6 md:p-8 font-black text-[10px] uppercase tracking-[0.2em] text-aetox-text-muted">Generic Development</div>
          </div>

          {comparison.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-3 border-b border-aetox-border last:border-0 hover:bg-aetox-accent/[0.02] transition-colors group`}
            >
              <div className="p-6 md:p-8 flex items-center gap-4">
                <item.icon className="w-5 h-5 text-aetox-text-muted group-hover:text-aetox-text-soft transition-colors" />
                <span className="text-xs font-black text-aetox-text-main uppercase tracking-widest">{item.feature}</span>
              </div>
              <div className="p-6 md:p-8 bg-aetox-accent/[0.03] border-x border-aetox-border/50">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-aetox-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-aetox-accent" />
                  </div>
                  <span className="text-sm font-bold text-aetox-text-main leading-relaxed">{item.aetox}</span>
                </div>
              </div>
              <div className="p-6 md:p-8 opacity-40">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-2.5 h-2.5 text-red-500/50" />
                  </div>
                  <span className="text-sm font-medium text-aetox-text-soft leading-relaxed">{item.generic}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[9px] font-black text-aetox-text-muted uppercase tracking-[0.3em]">
            *Data based on comparative system performance audits 2024
          </p>
        </div>
      </div>
    </section>
  );
}
