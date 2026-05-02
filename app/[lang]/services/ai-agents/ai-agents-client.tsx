'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Zap, ArrowLeft, ArrowRight, Search, TrendingUp, Layers } from 'lucide-react';
import ServiceVisualCard from '@/components/ServiceVisualCard';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import AiAgentsSimulator from './ai-agents-simulator';
import { scrollToSection } from '@/lib/scroll-utils';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

// Import refactored components
import { 
  FeatureItem, 
  OrchestratorVisual, 
  HybridRetrievalVisual, 
  StrategicOutputVisual, 
  AiShowcase 
} from './components/visuals';
import { KnowledgePipeline } from './components/simulator-components';
import { RagChatSimulator } from './components/rag-chat-simulator';
export default function AiAgentsClient({ dict, navDict, ctaDict }: { dict: any, navDict: any, ctaDict: any }) {
  const sections: NavSection[] = [
    { id: 'hero', label: dict.navigation?.hero || 'Introduction', num: 'INT', icon: <Cpu size={16} />, offset: 120 },
    { id: 'chat-simulator', label: dict.navigation?.simulator || 'RAG Simulator', num: 'SIM', icon: <Search size={16} />, offset: -80 },
    { id: 'orchestrator', label: dict.navigation?.orchestrator || 'Orchestration', num: '01', icon: <Layers size={16} />, offset: 240 },
    { id: 'retrieval', label: dict.navigation?.retrieval || 'Hybrid Retrieval', num: '02', icon: <Database size={16} />, offset: 180 },
    { id: 'generation', label: dict.navigation?.generation || 'Strategic Output', num: '03', icon: <Zap size={16} />, offset: 240 },
    { id: 'pipeline-section', label: dict.navigation?.pipeline || 'Knowledge Pipeline', num: '04', icon: <TrendingUp size={16} />, offset: 60 },
    { id: 'roi-simulator', label: dict.navigation?.roi || 'ROI Simulator', num: '05', icon: <TrendingUp size={16} />, offset: 0 },
    { id: 'cta-section', label: dict.navigation?.cta || 'Get Started', num: 'END', icon: <ArrowRight size={16} />, offset: 40 },
  ];


  // scrollToSection logic is now handled by @/lib/scroll-utils

  return (
    <main className="min-h-screen bg-aetox-bg selection:bg-aetox-accent/30 selection:text-white relative pt-20 overflow-x-hidden aetox-typography font-sans">
      <div className="absolute inset-0 bg-aetox-surface-low/10 bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />
      <FloatingNav sections={sections} />

      {/* ─── Layer 1: Strategic Hero ─── */}
      <section id="hero" className="relative min-h-[80vh] pt-12 pb-20 overflow-hidden scroll-mt-32">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-aetox-surface-low/50 border border-aetox-border text-aetox-text-soft hover:text-aetox-text-main hover:bg-aetox-surface-high hover:border-aetox-accent/30 transition-all mb-12 group backdrop-blur-sm shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-tight">{dict.hero.backLabel}</span>
          </Link>


          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-aetox-accent/10 border border-aetox-accent/20 text-[10px] font-bold text-aetox-accent uppercase tracking-widest animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent shadow-aetox-glow" />
                  {dict.hero.techBadge}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-aetox-text-main leading-[1.2] tracking-tight">
                  {dict.hero.title.white}<br />
                  <span className="text-aetox-accent drop-shadow-aetox-glow">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-aetox-text-soft text-xl leading-relaxed border-l-2 border-aetox-accent/30 pl-6">
                  {dict.hero.description}
                </p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-8 py-4 rounded-full bg-aetox-accent text-white font-bold text-lg hover:shadow-aetox-glow transition-all active:scale-95 flex items-center gap-3 group shadow-aetox-glow/20"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('chat-simulator')}
                  className="px-8 py-4 rounded-full bg-aetox-surface-low border border-aetox-border text-aetox-text-main font-bold text-lg hover:bg-aetox-surface-high transition-all active:scale-95 flex items-center gap-3 group"
                >
                  {dict.hero.demoLabel}
                </button>

              </motion.div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-5/12 w-full">
              <AiShowcase dict={dict} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 1.5: Interactive RAG Experience ─── */}
      <section id="chat-simulator" className="py-32 relative z-10 scroll-mt-32">
        <div className="container mx-auto">
          <RagChatSimulator dict={dict.ragChat} />
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 3: Technical Deep Dive ─── */}
      <section id="technical-deep-dive" className="py-32 relative z-10 scroll-mt-32">
        <div className="container mx-auto">
          <div className="space-y-40">
            
            {/* Pillar 1: Orchestrator */}
            <div id="orchestrator" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-aetox-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-aetox-text-main uppercase tracking-tight">{dict.pillars.pillar1.title}</h2>
                  </div>
                  <p className="text-aetox-text-soft leading-relaxed border-l-2 border-aetox-accent/30 pl-6">
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
                <ServiceVisualCard minHeight="h-auto">
                  <OrchestratorVisual dict={dict.visuals.orchestrator} labels={dict.visuals.labels} />
                </ServiceVisualCard>
              </div>
            </div>

      {/* Pillar 2: Hybrid Retrieval */}
      <div id="retrieval" className="flex flex-col lg:flex-row-reverse gap-20 items-center scroll-mt-32 pt-12">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                      <Database className="w-6 h-6 text-aetox-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-aetox-text-main uppercase tracking-tight">{dict.pillars.pillar2.title}</h2>
                  </div>
                  <p className="text-aetox-text-soft leading-relaxed border-r-2 border-aetox-accent/30 pr-6 text-right">
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
                <ServiceVisualCard minHeight="h-auto">
                  <HybridRetrievalVisual dict={dict.visuals.hybrid} labels={dict.visuals.labels} />
                </ServiceVisualCard>
              </div>
            </div>

            {/* Pillar 3: Strategic Output */}
            <div id="generation" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-aetox-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-aetox-text-main uppercase tracking-tight">{dict.pillars.pillar3.title}</h2>
                  </div>
                  <p className="text-aetox-text-soft leading-relaxed border-l-2 border-aetox-accent/30 pl-6">
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
                <ServiceVisualCard minHeight="h-auto">
                  <StrategicOutputVisual dict={dict.visuals.strategic} labels={dict.visuals.labels} />
                </ServiceVisualCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Layer 4: Final Pipeline ─── */}
      <section id="pipeline-section" className="py-32 border-t border-white/5 scroll-mt-32 relative z-10 bg-black/20">
        <div className="container mx-auto">
          <KnowledgePipeline pipeline={dict.simulator.pipeline} />
        </div>
      </section>

      {/* ─── Layer 5: ROI Simulator (Business Value) ─── */}
      <section id="roi-simulator" className="py-32 border-t border-white/5 bg-white/[0.01] scroll-mt-32 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <AiAgentsSimulator dict={dict} />
          </div>
        </div>
      </section>

      <section id="cta-section">
        <ServiceBottomCTA 
          serviceId="ai-agents"
          serviceName="AI Agents"
          dict={ctaDict.bottom}
        />
      </section>

      
      <Footer dict={navDict.footer} />
    </main>
  );
}
