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

export default function ProjectSlider({ projects, viewDetailsLabel }: { projects: ProjectSlide[], viewDetailsLabel?: string }) {
  const [current, setCurrent] = useState(0);

  if (!projects || projects.length === 0) return null;

  const next = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden bg-aetox-bg border border-aetox-border shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={projects[current].image}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover opacity-40 transition-transform duration-[5000ms] scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aetox-bg via-aetox-bg/60 to-transparent" />
          </div>

          {/* Content Overlay - Simple & Robust Structure */}
          <div className="absolute inset-0 z-10 p-6 md:p-10 lg:p-12 flex flex-col justify-end">
            <div className="max-w-4xl space-y-4 md:space-y-6">
              {/* Category */}
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-aetox-accent text-white text-fluid-label font-bold tracking-[0.2em] uppercase shadow-aetox-glow">
                  {projects[current].category}
                </span>
                <div className="h-px w-16 bg-aetox-border" />
              </div>

              {/* Title - Large & Readable */}
              <h3 className="text-fluid-h3 font-bold text-aetox-text-main leading-tight tracking-tight py-1">
                {projects[current].title}
              </h3>

              {/* Description - Scaled Up */}
              <p className="text-fluid-sm text-aetox-text-soft font-medium leading-relaxed max-w-3xl line-clamp-3">
                {projects[current].description}
              </p>

              {/* Actions */}
              <div className="pt-6 md:pt-10 flex flex-wrap items-center gap-10">
                <Link 
                  href={`/authority/${projects[current].category}/${projects[current].slug}`}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-aetox-accent text-white font-bold text-fluid-sm overflow-hidden transition-all active:scale-95 shadow-2xl"
                >
                  <span className="relative z-10">{viewDetailsLabel || 'ดูรายละเอียด'}</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-aetox-accent-hover translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>

                {/* Progress Indicators */}
                <div className="flex items-center gap-3">
                  {projects.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-700 ${
                        i === current ? 'w-16 bg-aetox-accent' : 'w-4 bg-aetox-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute top-6 right-6 z-30 flex gap-2">
        <button 
          onClick={prev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-aetox-border bg-aetox-surface-lowest/50 backdrop-blur-xl flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent hover:text-white transition-all active:scale-90"
        >
          <ArrowLeft size={20} />
        </button>
        <button 
          onClick={next}
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-aetox-border bg-aetox-surface-lowest/50 backdrop-blur-xl flex items-center justify-center text-aetox-text-main hover:bg-aetox-accent hover:text-white transition-all active:scale-90"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
