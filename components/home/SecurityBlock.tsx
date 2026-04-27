'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Shield, EyeOff, Server } from 'lucide-react';

export default function SecurityBlock({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="security" className="py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Optimized Minimal Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-20 text-aetox-accent/[0.03]">
          <Lock size={600} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aetox-surface border border-aetox-border text-aetox-accent text-xs font-bold tracking-wider mb-8"
          >
            <ShieldCheck size={14} className="shadow-aetox-glow" /> {dict.title}
          </motion.div>
          
          <h2 className="text-fluid-h1 font-bold text-aetox-text-main">
            {dict.headline.white} <span className="text-aetox-accent">{dict.headline.accent}</span>
          </h2>
          
          <p className="text-fluid-p text-aetox-text-soft font-bold uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.features.map((feature: any, index: number) => {
            const icons = [EyeOff, Lock, Server];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group glass-card p-12 rounded-[48px] border-aetox-border bg-aetox-surface/20 transition-all duration-500 hover:bg-aetox-surface/40 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-aetox-bg border border-aetox-border flex items-center justify-center mb-10 group-hover:border-aetox-accent/50 group-hover:text-aetox-accent transition-all duration-500 shadow-aetox-card">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-aetox-text-main mb-4 tracking-tight group-hover:text-aetox-accent transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-aetox-text-soft text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>

                <div className="mt-10 pt-8 border-t border-aetox-border/50">
                  <div className="flex items-center gap-3 text-xs font-bold text-aetox-text-muted tracking-wide">
                    <ShieldCheck size={14} className="text-aetox-accent" /> {dict.compliance}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Trust Badges */}
        <div className="mt-24 flex flex-wrap justify-center items-center gap-16">
          {dict.badges.map((badge: any, idx: number) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center gap-4 opacity-20 hover:opacity-100 transition-all duration-700 cursor-default group"
            >
              <div className="w-10 h-10 rounded-full border border-aetox-border flex items-center justify-center font-black text-[10px] text-aetox-text-main group-hover:border-aetox-accent group-hover:text-aetox-accent transition-all duration-500 shadow-aetox-card">
                {badge.label}
              </div>
              <span className="font-black text-aetox-text-main text-[10px] tracking-[0.3em] uppercase group-hover:text-aetox-text-main transition-colors">{badge.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
