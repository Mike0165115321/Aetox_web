'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Zap, ArrowLeft, Layers, Database, TrendingUp, Rocket, Cpu, ArrowRight, Calculator, Shield } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import AutomationSimulator from './automation-simulator';
import { scrollToSection } from '@/lib/scroll-utils';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

// Extracted Components
import { FeatureItem } from './components/shared-components';
import { PriorityQueueVisual, ScalableBotsVisual, ObservabilityVisual } from './components/pillar-visuals';
import AutomationShowcase from './components/automation-showcase';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.45, 0.32, 0.9] 
    }
  }
};

export default function AutomationClient({ dict, navDict, ctaDict }: { dict: any, navDict: any, ctaDict: any }) {
  const sections: NavSection[] = [
    { id: 'hero', label: dict.hero.badge || 'แนะนำระบบ', num: 'INT', icon: <Cpu size={16} />, offset: 100 },
    { id: 'pillar-1', label: dict.pillars.pillar1.title, num: '01', icon: <Layers size={16} />, offset: 70 },
    { id: 'pillar-2', label: dict.pillars.pillar2.title, num: '02', icon: <Rocket size={16} />, offset: 70 },
    { id: 'pillar-3', label: dict.pillars.pillar3.title, num: '03', icon: <Shield size={16} />, offset: 70 },
    { id: 'roi-simulator', label: dict.roi.title, num: 'ROI', icon: <Calculator size={16} />, offset: 20 },
    { id: 'cta-section', label: ctaDict.bottom.label || 'เริ่มต้นใช้งาน', num: 'END', icon: <Rocket size={16} />, offset: 70 },
  ];

  return (
    <main className="min-h-screen bg-aetox-bg text-aetox-text-main selection:bg-aetox-accent/30 relative pt-20 overflow-x-hidden">
      {/* ใช้สไตล์กลางจาก aetox-final.css */}
      <div className="aetox-grid-overlay opacity-30" />
      <div className="aetox-aura-primary -top-[20%] -left-[10%] opacity-20" />
      
      <Navbar dict={navDict.navbar} />
      <FloatingNav sections={sections} />

      {/* Layer 1: Hook (Strategic Hero) ─── */}
      <section id="hero" className="relative min-h-[85vh] pt-12 pb-20 overflow-hidden scroll-mt-20">
        <div className="container mx-auto">
          <Link href="/services" className="aetox-btn-glass w-fit mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-fluid-sm tracking-wide">{dict.common.labels.backToServices || 'กลับสู่หน้าบริการ'}</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-7/12 space-y-12"
            >
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 text-fluid-label text-aetox-accent uppercase tracking-[0.2em]">
                  <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
                  WORKFLOW AUTOMATION
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-fluid-h1 font-display leading-[1.1]">
                  {dict.hero.title.white}<br />
                  <span className="text-aetox-accent drop-shadow-aetox-glow">{dict.hero.title.accent}</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-aetox-text-soft text-fluid-p border-l-2 border-aetox-accent/30 pl-6">
                  {dict.hero.description}
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="aetox-btn-main !px-10 !py-5 !text-xl group"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => scrollToSection('roi-simulator')}
                  className="aetox-btn-glass !px-10 !py-5 !text-xl group"
                >
                  <TrendingUp className="w-6 h-6 text-aetox-accent" />
                  {dict.roi.subTitle || 'วิเคราะห์ความคุ้มค่า'}
                </button>
              </motion.div>
            </motion.div>

            <div className="lg:w-5/12 w-full">
              <AutomationShowcase steps={dict.showcase} dict={{ ...dict.roi, visuals: dict.visuals }} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-aetox-border" /></div>

      {/* ─── Pillar 1: Intelligent Queue System ─── */}
      <section id="pillar-1" className="pt-32 pb-32 relative z-10 scroll-mt-32">
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-20 items-center"
          >
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-aetox-accent" />
                  </div>
                  <h2 className="text-fluid-h3 font-display text-aetox-text-main uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                </motion.div>
                <motion.p variants={itemVariants} className="text-aetox-text-soft text-fluid-p border-l-2 border-aetox-accent/30 pl-6">
                  {dict.pillars.pillar1.description}
                </motion.p>
              </div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.pillars.pillar1.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="lg:w-5/12 w-full">
              <PriorityQueueVisual dict={dict.visuals.pillar1} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Pillar 2: Scalable Bot Fleet ─── */}
      <section id="pillar-2" className="pt-32 pb-32 relative z-10 scroll-mt-32 border-t border-aetox-border">
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row-reverse gap-20 items-center"
          >
            <div className="lg:w-7/12 space-y-12 text-right">
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center justify-end gap-4">
                  <h2 className="text-fluid-h3 font-display text-aetox-text-main uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                  <div className="w-12 h-12 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-aetox-accent" />
                  </div>
                </motion.div>
                <motion.p variants={itemVariants} className="text-aetox-text-soft text-fluid-p border-r-2 border-aetox-accent/30 pr-6">
                  {dict.pillars.pillar2.description}
                </motion.p>
              </div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {dict.pillars.pillar2.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="lg:w-5/12 w-full">
              <ScalableBotsVisual dict={dict.visuals.pillar2} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Pillar 3: Central Observability ─── */}
      <section id="pillar-3" className="pt-32 pb-32 relative z-10 scroll-mt-32 border-t border-aetox-border">
        <div className="container mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-20 items-center"
          >
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-aetox-accent" />
                  </div>
                  <h2 className="text-fluid-h3 font-display text-aetox-text-main uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                </motion.div>
                <motion.p variants={itemVariants} className="text-aetox-text-soft text-fluid-p border-l-2 border-aetox-accent/30 pl-6">
                  {dict.pillars.pillar3.description}
                </motion.p>
              </div>
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.pillars.pillar3.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="lg:w-5/12 w-full">
              <ObservabilityVisual dict={dict.visuals.pillar3} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Layer 5: Automation Simulator (Business Value) ─── */}
      <section id="roi-simulator" className="py-32 border-t border-aetox-border bg-aetox-surface-lowest scroll-mt-32 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <AutomationSimulator dict={dict.roi} />
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section id="cta-section" className="scroll-mt-32">
        <ServiceBottomCTA 
          serviceId="automation" 
          serviceName="Workflow Automation" 
          dict={ctaDict.bottom}
        />
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
