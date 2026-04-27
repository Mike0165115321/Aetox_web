'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="about" className="py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Optimized Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 -left-10 text-aetox-accent/[0.03]">
          <MessageSquare size={400} strokeWidth={1} />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aetox-surface border border-aetox-border text-aetox-text-muted text-xs font-bold tracking-wider">
            {dict.badge}
          </div>
          <h2 className="text-fluid-h2 font-bold text-aetox-text-main tracking-tighter">
            {dict.headline.white}<span className="text-aetox-accent">{dict.headline.accent}</span>
          </h2>
          <p className="text-fluid-p text-aetox-text-soft mx-auto font-medium whitespace-pre-line">
            {dict.description}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-aetox-accent text-white font-bold text-sm transition-all shadow-aetox-glow hover:bg-aetox-accent-hover transform active:scale-95">
              {dict.primaryCTA}
              <ArrowRight size={16} />
            </Link>
            <Link href="/authority" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-aetox-surface text-aetox-text-main font-bold text-sm transition-all border border-aetox-border transform active:scale-95">
              {dict.secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
