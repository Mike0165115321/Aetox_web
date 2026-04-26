'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA({ dict }: { dict: any }) {
  if (!dict) return null;

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-aetox-atmosphere border-t border-aetox-border">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-10 text-aetox-accent/5"
        >
          <MessageSquare size={400} strokeWidth={0.2} />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 text-aetox-accent/5"
        >
          <Sparkles size={500} strokeWidth={0.2} />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aetox-surface border border-aetox-border text-aetox-text-muted text-[8px] font-black tracking-widest uppercase">
            Decision Point
          </div>
          <h2 className="text-fluid-h2 font-black text-aetox-text-main uppercase tracking-tighter">
            {dict.headline.white}<span className="text-aetox-accent">{dict.headline.accent}</span>
          </h2>
          <p className="text-fluid-p text-aetox-text-soft mx-auto font-medium whitespace-pre-line">
            {dict.description}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-aetox-accent text-white font-black text-xs uppercase tracking-widest hover:bg-aetox-accent-hover shadow-aetox-glow transition-all transform active:scale-95">
              เริ่มวางแผนระบบของคุณ
              <ArrowRight size={16} />
            </Link>
            <Link href="/authority" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-aetox-surface text-aetox-text-main font-black text-xs uppercase tracking-widest hover:bg-aetox-surface-2 transition-all border border-aetox-border transform active:scale-95">
              ดูผลงานทั้งหมด
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
