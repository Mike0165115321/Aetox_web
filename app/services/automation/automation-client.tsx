'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowLeft, Layers, Database, TrendingUp, Rocket, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import AutomationSimulator from './automation-simulator';
import { scrollToSection } from '@/lib/scroll-utils';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

// Extracted Components
import { FeatureItem } from './components/shared-components';
import { PriorityQueueVisual, ScalableBotsVisual, ObservabilityVisual } from './components/pillar-visuals';
import AutomationShowcase from './components/automation-showcase';

export default function AutomationClient({ dict, navDict }: { dict: any, navDict: any }) {
  const sections: NavSection[] = [
    { id: 'hero', label: 'แนะนำระบบ', num: 'INT', icon: <Cpu size={16} />, offset: 0 },
    { id: 'pillar-1', label: 'ระบบคิวอัจฉริยะ', num: '01', icon: <Layers size={16} />, offset: 120 },
    { id: 'pillar-2', label: 'บอทประมวลผล', num: '02', icon: <Zap size={16} />, offset: 120 },
    { id: 'pillar-3', label: 'ระบบตรวจสอบ', num: '03', icon: <Database size={16} />, offset: 120 },
    { id: 'automation-simulator', label: 'จำลองความคุ้มค่า', num: 'SIM', icon: <TrendingUp size={16} />, offset: 0 },
    { id: 'cta-section', label: 'เริ่มต้นใช้งาน', num: 'END', icon: <Rocket size={16} />, offset: 120 },
  ];

  // scrollToSection is handled by @/lib/scroll-utils

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-deep-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />
      <FloatingNav sections={sections} accentColor="#3B82F6" />

      {/* ─── Layer 1: Strategic Hero ─── */}
      <section id="hero" className="relative min-h-[80vh] pt-12 pb-20 overflow-hidden scroll-mt-20">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-deep-blue/30 transition-all mb-12 group backdrop-blur-sm shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-wide">กลับสู่หน้าบริการ</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-deep-blue uppercase tracking-[0.2em] animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-deep-blue shadow-deep-glow" />
                  WORKFLOW AUTOMATION
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.2]">
                  {dict.hero.title.white}<br />
                  <span className="text-deep-blue drop-shadow-deep-glow">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                  {dict.hero.description}
                </p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6">
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-10 py-5 rounded-full bg-deep-blue text-white font-black text-xl hover:shadow-deep-glow transition-all active:scale-95 flex items-center gap-4 group shadow-deep-glow/30"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => scrollToSection('automation-simulator')}
                  className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-black text-xl hover:bg-white/10 hover:border-deep-blue/40 transition-all active:scale-95 flex items-center gap-4 group backdrop-blur-xl"
                >
                  <TrendingUp className="w-6 h-6 text-deep-blue" />
                  คำนวณความคุ้มค่า
                </button>
              </motion.div>
            </motion.div>

            <div className="lg:w-5/12 w-full">
              <AutomationShowcase steps={dict.showcase} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Pillar 1: Intelligent Queue System ─── */}
      <section id="pillar-1" className="pt-32 pb-32 relative z-10 scroll-mt-32 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-deep-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                  {dict.pillars.pillar1.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.pillars.pillar1.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <PriorityQueueVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Performance Beyond Limits */}
      <section id="pillar-2" className="pt-32 pb-32 relative z-10 scroll-mt-32 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-deep-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed border-r-2 border-deep-blue/30 pr-6 text-right">
                  {dict.pillars.pillar2.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.pillars.pillar2.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <ScalableBotsVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Audit & Observability */}
      <section id="pillar-3" className="pt-32 pb-32 relative z-10 scroll-mt-32 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-deep-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed border-l-2 border-deep-blue/30 pl-6">
                  {dict.pillars.pillar3.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.pillars.pillar3.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <ObservabilityVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Layer 5: Automation Simulator (Business Value) ─── */}
      <section id="automation-simulator" className="py-32 border-t border-white/5 bg-white/[0.01] scroll-mt-32 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <AutomationSimulator />
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <ServiceBottomCTA 
        serviceId="automation" 
        serviceName="Workflow Automation" 
        hirePoints={dict.cta.hirePoints}
        learnPoints={dict.cta.learnPoints}
      />

      <Footer dict={navDict.footer} />
    </main>
  );
}
