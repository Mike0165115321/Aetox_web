'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Zap, ArrowLeft, ArrowRight, Search, TrendingUp } from 'lucide-react';
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
export default function AiAgentsClient({ dict, navDict }: { dict: any, navDict: any }) {
  const sections: NavSection[] = [
    { id: 'hero', label: 'แนะนำระบบ', num: 'INT', icon: <Cpu size={16} />, offset: 0 },
    { id: 'chat-simulator', label: 'ทดลองแชท RAG', num: 'SIM', icon: <Search size={16} />, offset: -80 },
    { id: 'technical-deep-dive', label: 'เจาะลึกเทคโนโลยี', num: '01', icon: <Database size={16} />, offset: 120 },
    { id: 'pipeline-section', label: 'วงจรข้อมูล', num: '02', icon: <Zap size={16} />, offset: 60 },
    { id: 'roi-simulator', label: 'จำลองความคุ้มค่า', num: '03', icon: <TrendingUp size={16} />, offset: 0 },
    { id: 'cta-section', label: 'เริ่มต้นใช้งาน', num: 'END', icon: <ArrowRight size={16} />, offset: 40 },
  ];

  // scrollToSection logic is now handled by @/lib/scroll-utils

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />
      <FloatingNav sections={sections} />

      {/* ─── Layer 1: Strategic Hero ─── */}
      <section id="hero" className="relative min-h-[80vh] pt-12 pb-20 overflow-hidden scroll-mt-32">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyber-blue/30 transition-all mb-12 group backdrop-blur-sm shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-wide">กลับสู่หน้าบริการ</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-7/12 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-cyber-blue uppercase tracking-[0.2em] animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                  AGENTIC AI & RAG SYSTEMS
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.2]">
                  {dict.hero.title.white}<br />
                  <span className="text-cyber-blue drop-shadow-cyber-glow">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
                  {dict.hero.description}
                </p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-8 py-4 rounded-full bg-cyber-blue text-black font-black text-lg hover:shadow-cyber-glow transition-all active:scale-95 flex items-center gap-3 group shadow-cyber-glow/20"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('chat-simulator')}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-black text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center gap-3 group"
                >
                  ดูตัวอย่าง
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-5/12 w-full">
              <AiShowcase steps={dict.showcase} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 1.5: Interactive RAG Experience ─── */}
      <section id="chat-simulator" className="py-32 relative z-10 scroll-mt-32">
        <div className="container mx-auto">
          <RagChatSimulator />
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
                <ServiceVisualCard minHeight="h-auto">
                  <OrchestratorVisual />
                </ServiceVisualCard>
              </div>
            </div>

      {/* Pillar 2: Hybrid Retrieval */}
      <div id="retrieval" className="flex flex-col lg:flex-row-reverse gap-20 items-center scroll-mt-32 pt-12">
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
                <ServiceVisualCard minHeight="h-auto">
                  <HybridRetrievalVisual />
                </ServiceVisualCard>
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
                <ServiceVisualCard minHeight="h-auto">
                  <StrategicOutputVisual />
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
          hirePoints={dict.cta.hirePoints}
          learnPoints={dict.cta.learnPoints}
        />
      </section>
      
      <Footer dict={navDict.footer} />
    </main>
  );
}
