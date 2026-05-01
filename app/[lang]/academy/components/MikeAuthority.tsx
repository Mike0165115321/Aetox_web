'use client';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function MikeAuthority({ dict }: { dict: any }) {
  return (
    <section id="mike-authority" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          {/* Visual: Achievement Badge */}
          <div className="lg:w-5/12 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-aetox-accent/10 rounded-full"
            />
            <div className="relative aetox-glass-card p-12 rounded-[60px] text-center shadow-2xl">
              <div className="w-24 h-24 bg-aetox-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-aetox-accent/40 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Award className="w-12 h-12 text-aetox-accent drop-shadow-aetox-glow" />
              </div>
              <h3 className="text-fluid-h4 font-display font-black text-aetox-text-main mb-4">{dict.badge}</h3>
              <p className="text-aetox-text-muted text-fluid-label font-black uppercase tracking-[0.3em] mb-10">{dict.dna}</p>
              
              <div className="space-y-4">
                {dict.achievements.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-left p-4 rounded-2xl bg-aetox-surface-lowest border border-aetox-border">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-fluid-sm font-bold text-aetox-text-soft">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Atmosphere behind badge */}
            <div className="aetox-aura-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
          </div>

          {/* Content: Authority Message */}
          <div className="lg:w-7/12 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-aetox-accent font-black text-fluid-label tracking-[0.3em] uppercase">
                <ShieldCheck className="w-4 h-4" /> {dict.excellence}
              </div>
              <h2 className="text-fluid-h1 font-display leading-tight text-aetox-text-main">
                {dict.title}
              </h2>
              <p className="text-fluid-p text-aetox-text-soft leading-relaxed max-w-2xl font-medium border-l-2 border-aetox-accent/30 pl-8">
                {dict.description}
              </p>
            </div>

            <div className="p-10 rounded-[40px] bg-aetox-accent/5 border border-aetox-accent/10 relative group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-aetox-accent opacity-50 group-hover:opacity-100 transition-opacity rounded-full" />
              <p className="text-aetox-text-soft italic leading-relaxed text-fluid-p">
                &quot; {dict.quote} &quot;
              </p>
              <div className="mt-8 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-aetox-surface border border-aetox-border overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-tr from-aetox-accent to-indigo-500 opacity-50" />
                </div>
                <div>
                  <p className="text-fluid-sm font-black text-aetox-text-main uppercase tracking-widest">{dict.founderName}</p>
                  <p className="text-fluid-label text-aetox-text-muted font-bold uppercase tracking-widest">{dict.founderTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
