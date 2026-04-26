'use client';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, GraduationCap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { scrollToSection } from '@/lib/scroll-utils';

export default function AcademyHero({ dict }: { dict: any }) {
  return (
    <section id="academy-hero" className="relative pt-40 pb-32 overflow-hidden scroll-mt-20">
      {/* Decorative Elements Removed for Global Background */}
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-deep-blue/30 transition-all group backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-wide">กลับสู่หน้าหลัก</span>
          </Link>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border bg-deep-blue/10 border-deep-blue/20 text-deep-blue text-[9px] font-black tracking-[0.2em] uppercase mb-10"
          >
          <GraduationCap className="w-3.5 h-3.5" /> {dict.badge}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            {dict.title.white} <br />
            <span className="text-deep-blue drop-shadow-deep-glow">{dict.title.accent}</span>
          </h1>
          
          <div className="inline-block px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-lg md:text-xl font-bold text-gray-300">
              {dict.suffix}
            </p>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed border-l-2 border-deep-blue/30 pl-8 text-left md:text-center md:pl-0 md:border-l-0">
            {dict.description}
          </p>

          <div className="flex flex-wrap justify-center gap-5 pt-6">
            <button 
              onClick={() => scrollToSection('waitlist-form')}
              className="px-8 py-4 rounded-full bg-deep-blue text-white font-black text-lg hover:shadow-deep-glow transition-all active:scale-95 flex items-center gap-3 group shadow-deep-glow/20"
            >
              {dict.cta}
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">ได้รับความไว้วางใจระดับเหรียญทอง</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    </section>
  );
}
