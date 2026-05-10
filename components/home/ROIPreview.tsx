'use client';
import { motion } from 'framer-motion';
import { Calculator, Zap, BrainCircuit, LayoutGrid } from 'lucide-react';
import SimulatorsHub from './SimulatorsHub';

export default function ROIPreview({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="roi-calculator" className="py-16 md:py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aetox-accent/5 to-transparent" />
        <div className="absolute -top-24 -right-24 text-aetox-accent/[0.03]">
          <Calculator size={400} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-aetox-accent font-bold text-xs tracking-[0.2em] uppercase mb-6">
              <Calculator size={14} /> {dict.title}
            </div>
            <h2 className="text-fluid-h1 font-bold text-aetox-text-main leading-tight tracking-tighter mb-6">
              {dict.roiHeadline.white} <br />
              <span className="text-aetox-accent">{dict.roiHeadline.accent}</span>
            </h2>
            <p className="text-lg text-aetox-text-soft font-medium leading-relaxed max-w-2xl mx-auto">
              {dict.description}
            </p>
          </motion.div>
        </div>

        {/* The New Simulator Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <SimulatorsHub dict={dict.simulators} />
        </motion.div>
        
        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="aetox-btn-main shadow-aetox-glow active:scale-95 text-fluid-p"
          >
            {dict.cta}
          </button>
          <p className="mt-8 text-aetox-text-muted text-xs font-bold uppercase tracking-widest opacity-60">
            {dict.results.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
