'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React, { useEffect } from 'react';

export default function HeroSection({ dict, lang }: { dict: any, lang: string }) {
  // Parallax Logic: เฉพาะหน้า Hero เท่านั้น
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const auraX = useTransform(smoothMouseX, [0, 1000], [-20, 20]);
  const auraY = useTransform(smoothMouseY, [0, 1000], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = [
    { left: '15%', top: '20%', width: '3px', animationDelay: '0s', animationDuration: '18s' },
    { left: '70%', top: '10%', width: '2px', animationDelay: '3s', animationDuration: '22s' },
    { left: '40%', top: '60%', width: '4px', animationDelay: '7s', animationDuration: '16s' },
    { left: '85%', top: '45%', width: '2px', animationDelay: '5s', animationDuration: '20s' },
    { left: '25%', top: '80%', width: '3px', animationDelay: '9s', animationDuration: '24s' },
    { left: '55%', top: '35%', width: '5px', animationDelay: '2s', animationDuration: '19s' },
  ];

  if (!dict) return null;
  const content = dict;

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-aetox-bg">
      
      {/* 1. แสงฟุ้ง (Auras) — อยู่แค่ที่นี่ที่เดียว ไม่ไปโผล่หน้าอื่น */}
      <motion.div 
        style={{ x: auraX, y: auraY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="aetox-aura-primary top-[-10%] left-[-5%] scale-110" />
        <div className="aetox-aura-secondary bottom-[-10%] right-[-5%] scale-110" />
      </motion.div>

      {/* 2. Grid & Atmosphere Particles */}
      <div className="aetox-grid-overlay" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <div 
            key={i}
            className="aetox-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.width,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      {/* 3. Main Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <Image 
            src="/images/logo.svg" 
            alt="Aetox Logo" 
            width={120}
            height={120}
            className="w-20 md:w-24 h-auto mx-auto animate-aetox-breathe dark:brightness-0 dark:invert"
            priority
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-h1 font-display text-aetox-text-main leading-[1.1]"
        >
          {content.headline.white}
          <br className="hidden md:block" />
          <span className="text-aetox-accent drop-shadow-[0_0_15px_rgba(var(--aetox-accent-rgb),0.3)]"> {content.headline.accent}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-md text-fluid-p font-sans text-aetox-text-soft max-w-2xl font-medium"
        >
          {content.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-lg flex flex-col md:flex-row gap-6 w-full md:w-auto"
        >
          <Link href={`/${lang}/services`} className="aetox-btn-main group">
            {content.cta.primary}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href={`/${lang}/authority`} className="aetox-btn-glass">
            {content.cta.secondary}
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-aetox-text-soft uppercase">{content.scrollLabel}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-aetox-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
