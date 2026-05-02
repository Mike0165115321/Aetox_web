'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowLeft, Laptop, Target, Rocket, Activity, 
  ArrowRight, Shield
} from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import AutomationSimulator from './automation-simulator';
import { scrollToSection } from '@/lib/scroll-utils';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

// Components
import { FeatureItem, AppliedIn } from './components/shared-components';
import { PriorityQueueVisual, ScalableBotsVisual, ObservabilityVisual } from './components/pillar-visuals';
import AutomationShowcase from './components/automation-showcase';
import ServiceVisualCard from '@/components/ServiceVisualCard';

export default function AutomationClient({ dict, navDict, ctaDict }: { dict: any, navDict: any, ctaDict: any }) {
  const sections: NavSection[] = [
    { id: 'hero', label: dict.hero.badge, num: 'INT', icon: <Zap size={16} />, offset: 60 },
    { id: 'sim', label: dict.simulator.title, num: 'SIM', icon: <Laptop size={16} />, offset: 0 },
    { id: 'queue', label: dict.pillars.pillar1.title, num: '01', icon: <Target size={16} />, offset: 120 },
    { id: 'scaling', label: dict.pillars.pillar2.title, num: '02', icon: <Rocket size={16} />, offset: 120 },
    { id: 'audit', label: dict.pillars.pillar3.title, num: '03', icon: <Shield size={16} />, offset: 120 },
    { id: 'cta-section', label: ctaDict.bottom.label || 'ติดต่อเรา', num: 'END', icon: <ArrowRight size={16} />, offset: 60 },
  ];

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-aetox-accent/30 selection:text-white relative pt-20 overflow-x-hidden font-sans">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />
      <Navbar dict={navDict.navbar} />
      <FloatingNav sections={sections} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] pt-16 pb-24 overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6">
          <Link href="/services" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-aetox-surface-low/50 border border-aetox-border text-aetox-text-soft hover:text-aetox-text-main hover:bg-aetox-surface-high hover:border-aetox-accent/30 transition-all mb-12 group backdrop-blur-xl">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-wide">{dict.common.labels.backToServices || 'กลับสู่หน้าบริการ'}</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:w-7/12 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-aetox-accent/5 border border-aetox-accent/20 text-[10px] font-bold text-aetox-accent uppercase tracking-[0.2em]">
                  <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse shadow-aetox-glow" />
                  {dict.hero.badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-aetox-text-main leading-[1.1] tracking-tight">
                  {dict.hero.title.white}<br />
                  <span className="text-aetox-accent">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-aetox-text-soft text-xl leading-relaxed border-l-2 border-aetox-accent/30 pl-8 font-medium max-w-xl">
                  {dict.hero.description}
                </p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-10 py-5 rounded-full bg-aetox-accent text-aetox-surface-lowest font-black text-xl hover:shadow-aetox-glow transition-all active:scale-95 flex items-center gap-4 group"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => scrollToSection('sim')}
                  className="px-10 py-5 rounded-full bg-aetox-surface-low/50 border border-aetox-border text-aetox-text-main font-black text-xl hover:bg-aetox-surface-high transition-all active:scale-95 flex items-center gap-4 group backdrop-blur-xl"
                >
                  {dict.hero.viewExample || 'เริ่มการจำลอง'}
                </button>
              </motion.div>
            </motion.div>
            <div className="lg:w-5/12 w-full"><AutomationShowcase steps={dict.showcase} dict={dict} /></div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="sim" className="pt-40 pb-40 relative z-10 overflow-hidden scroll-mt-32 border-t border-aetox-border bg-aetox-surface-lowest/30">
        <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-aetox-text-main mb-6 uppercase tracking-tight">{dict.simulator.title}</h2>
            <p className="text-aetox-text-soft text-xl font-medium max-w-2xl mx-auto">{dict.simulator.description}</p>
        </div>
        <div className="container mx-auto px-6">
          <AutomationSimulator dict={dict.simulator} />
        </div>
      </section>

      {/* Pillar 1: Smart Queue Management */}
      <section id="queue" className="pt-40 pb-40 relative z-10 scroll-mt-32 border-t border-aetox-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-aetox-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-aetox-text-main uppercase tracking-widest">{dict.pillars.pillar1.title}</h2>
                </div>
                <p className="text-aetox-text-soft leading-relaxed border-l-2 border-aetox-accent/30 pl-8 font-medium text-lg">
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
              <ServiceVisualCard>
                <PriorityQueueVisual dict={dict.visuals.pillar1} />
              </ServiceVisualCard>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Unlimited Scaling */}
      <section id="scaling" className="pt-40 pb-40 relative z-10 scroll-mt-32 border-t border-aetox-border bg-aetox-surface-lowest/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-aetox-text-main uppercase tracking-widest">{dict.pillars.pillar2.title}</h2>
                </div>
                <p className="text-aetox-text-soft leading-relaxed border-l-2 border-emerald-500/30 pl-8 font-medium text-lg">
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
              <ServiceVisualCard>
                <ScalableBotsVisual dict={dict.visuals.pillar2} />
              </ServiceVisualCard>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Real-time Observability */}
      <section id="audit" className="pt-40 pb-40 relative z-10 scroll-mt-32 border-t border-aetox-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-7/12 space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-aetox-text-main uppercase tracking-widest">{dict.pillars.pillar3.title}</h2>
                </div>
                <p className="text-aetox-text-soft leading-relaxed border-l-2 border-indigo-500/30 pl-8 font-medium text-lg">
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
              <ServiceVisualCard>
                <ObservabilityVisual dict={dict.visuals.pillar3} />
              </ServiceVisualCard>
            </div>
          </div>
        </div>
      </section>

      {/* Applied In Section */}
      <section className="py-24 border-t border-aetox-border relative z-10 bg-aetox-surface-lowest/50 backdrop-blur-3xl">
        <div className="container mx-auto px-6">
          <AppliedIn items={dict.appliedIn} label={dict.appliedInLabel || 'ใช้งานจริงใน'} />
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section id="cta-section" className="scroll-mt-20">
        <ServiceBottomCTA 
          serviceId="automation" 
          serviceName="Business Automation" 
          dict={ctaDict.bottom}
        />
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
