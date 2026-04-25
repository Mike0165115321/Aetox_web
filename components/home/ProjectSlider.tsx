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

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
        <div className="max-w-xl space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={`meta-${projects[current].id}`}
            className="flex items-center gap-3"
          >
            <span className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] font-black text-cyber-blue uppercase tracking-widest">
              {projects[current].category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            key={`title-${projects[current].id}`}
            className="text-2xl md:text-3xl font-black text-white"
          >
            {projects[current].title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            key={`desc-${projects[current].id}`}
            className="text-gray-400 text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-2"
          >
            {projects[current].description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            key={`cta-${projects[current].id}`}
            className="pt-4"
          >
            <Link 
              href={`/authority/${projects[current].category}/${projects[current].slug}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-cyber-blue hover:text-white transition-all active:scale-95"
            >
              ดูรายละเอียด <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
        <button 
          onClick={prev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90"
        >
          <ArrowLeft size={18} />
        </button>
        <button 
          onClick={next}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-90"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute top-8 right-8 flex gap-2">
        {projects.map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-cyber-blue shadow-cyber-glow' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
