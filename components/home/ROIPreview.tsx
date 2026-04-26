'use client';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';
import { useROICalculator } from './hooks/useROICalculator';
import { ROIInputSection } from './roi/ROIInputSection';
import { ROIResultCard } from './roi/ROIResultCard';

export default function ROIPreview({ dict }: { dict: any }) {
  const roi = useROICalculator();

  if (!dict) return null;

  return (
    <section className="py-32 relative overflow-hidden border-t border-aetox-border">
      {/* Optimized Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aetox-accent/5 to-transparent" />
        <div className="absolute -top-24 -right-24 text-aetox-accent/[0.03]">
          <Calculator size={400} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Input Controls */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-aetox-accent font-black text-[10px] tracking-[0.2em] uppercase mb-6">
                <Calculator size={14} /> {dict.title}
              </div>
              <h2 className="text-fluid-h2 font-black text-aetox-text-main leading-tight tracking-tighter">
                Stop the Leaks, <br />
                <span className="text-aetox-accent">Turn Costs Into Revenue.</span>
              </h2>
              <p className="text-fluid-p text-aetox-text-soft font-medium leading-relaxed max-w-xl">
                {dict.description}
              </p>
            </motion.div>

            <ROIInputSection {...roi} dict={dict} />
          </div>

          {/* Right: Results */}
          <div className="w-full lg:w-1/2 relative">
            <ROIResultCard results={roi.results} currency={roi.currency} dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
