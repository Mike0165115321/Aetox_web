'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Cpu, Database, Zap, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import AiAgentsSimulator from './ai-agents-simulator';

// Import refactored components
import { 
  FeatureItem, 
  OrchestratorVisual, 
  HybridRetrievalVisual, 
  StrategicOutputVisual, 
  AiShowcase 
} from './components/visuals';
import { KnowledgePipeline } from './components/simulator-components';

export default function AiAgentsClient({ dict, navDict }: { dict: any, navDict: any }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />

      {/* ─── Layer 1: Intro (Hero + Showcase) ─── */}
      <section className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyber-blue transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  {dict.hero.title.white}<br />
                  <span className="text-cyber-blue drop-shadow-cyber-glow">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
                  {dict.hero.description}
                </p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-8 py-4 rounded-full bg-cyber-blue text-black font-black text-lg hover:shadow-cyber-glow transition-all active:scale-95 flex items-center gap-3 group shadow-cyber-glow/20"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[
                  { id: 'orchestrator', title: 'สมองกล', icon: Cpu }, 
                  { id: 'retrieval', title: 'การสืบค้น', icon: Database }, 
                  { id: 'generation', title: 'การสังเคราะห์', icon: Zap }
                ].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyber-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-1/2 w-full">
              <AiShowcase steps={dict.showcase} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: ROI Simulator ─── */}
      <section className="py-24 relative z-10 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <AiAgentsSimulator dict={dict} />
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 3: Technical Deep Dive ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="space-y-40">
            
            {/* Pillar 1: Orchestrator */}
            <div id="orchestrator" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
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
                <OrchestratorVisual />
              </div>
            </div>

            {/* Pillar 2: Hybrid Retrieval */}
            <div id="retrieval" className="flex flex-col lg:flex-row-reverse gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Database className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-r-2 border-cyber-blue/30 pr-6 text-right">
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
                <HybridRetrievalVisual />
              </div>
            </div>

            {/* Pillar 3: Strategic Output */}
            <div id="generation" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
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
                <StrategicOutputVisual />
              </div>
            </div>

          </div>

          {/* ─── Layer 4: Final Pipeline ─── */}
          <div id="generation" className="py-24 border-t border-white/5">
            <KnowledgePipeline pipeline={dict.simulator.pipeline} />
          </div>
        </div>
      </section>

      <section id="cta-section">
        <ServiceBottomCTA 
          serviceId="ai-agents"
          serviceName="AI Agents"
          hirePoints={dict.cta.hirePoints}
          learnPoints={dict.cta.learnPoints}
        />
      </section>
      
      <Footer dict={navDict.footer} />
    </main>
  );
}
