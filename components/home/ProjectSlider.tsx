'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}

export default function ProjectSlider({ projects }: { projects: ProjectSlide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative group overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/10 aspect-[4/5] md:aspect-video bg-black/40 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[current].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image 
              src={projects[current].image}
              alt={projects[current].title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover opacity-60"
              onError={(e) => {
                // If image fails, hide it and show the fallback below
                (e.target as any).style.display = 'none';
              }}
            />
            {/* High-End Fallback Background (Always present behind, or visible if image fails) */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-black to-black -z-10 flex items-center justify-center">
               <div className="text-center opacity-10">
                 <p className="text-6xl font-black uppercase tracking-[0.5em] text-white">AETOX</p>
                 <p className="text-sm font-bold tracking-[1em] text-cyber-blue mt-4">PROJECT SHOWCASE</p>
               </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay - Organized for No Overlap */}
      <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        
        <motion.div 
          key={projects[current].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-2xl z-10"
        >
          {/* Metadata Tag - Clearly Separated */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-lg bg-aetox-accent/20 border border-aetox-accent/30 text-[9px] font-black text-aetox-accent uppercase tracking-[0.2em] backdrop-blur-md">
              {projects[current].category}
            </span>
            <div className="w-1 h-1 rounded-full bg-aetox-accent shadow-aetox-glow animate-pulse" />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-4xl font-black text-aetox-text-main leading-[1.1] tracking-tight">
              {projects[current].title}
            </h3>

            <p className="text-aetox-text-soft text-sm md:text-base font-medium leading-relaxed max-w-lg opacity-80 line-clamp-2">
              {projects[current].description}
            </p>

            <div className="pt-6 flex items-center gap-6">
              <Link 
                href={`/authority/${projects[current].category}/${projects[current].slug}`}
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all active:scale-95"
              >
                <span className="relative z-10">ดูรายละเอียด</span>
                <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-aetox-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </Link>

              {/* Mini Counter */}
              <div className="hidden md:flex items-center gap-2">
                <span className="text-aetox-accent font-black text-xs">{(current + 1).toString().padStart(2, '0')}</span>
                <div className="w-8 h-[1px] bg-aetox-border" />
                <span className="text-aetox-text-muted font-black text-xs">{projects.length.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls - Relocated for Balance */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-30">
        <button 
          onClick={prev}
          className="w-12 h-12 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-aetox-accent hover:border-aetox-accent transition-all active:scale-90 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button 
          onClick={next}
          className="w-12 h-12 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-aetox-accent hover:border-aetox-accent transition-all active:scale-90 group"
        >
          <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Progress Bar - Top Aligned */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-14 z-20 pointer-events-none">
        <div className="flex gap-2 justify-end">
          {projects.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-700 rounded-full ${i === current ? 'w-12 bg-aetox-accent shadow-aetox-glow' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
