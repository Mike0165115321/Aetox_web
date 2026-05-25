'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Orbit, Bot, Zap, Globe, ChevronRight } from 'lucide-react';
import BackgroundIcon from './visuals/BackgroundIcon';
import AIAgentPanel from './services/AIAgentPanel';
import AutomationPanel from './services/AutomationPanel';
import WebSystemPanel from './services/WebSystemPanel';

export default function HeroSection({ 
  dict, 
  servicesDict, 
  lang 
}: { 
  dict: any; 
  servicesDict: any; 
  lang: string; 
}) {
  const [activeTab, setActiveTab] = useState<'ai-agents' | 'automation' | 'web-systems'>('ai-agents');

  if (!dict || !servicesDict) return null;
  const content = dict;

  const particles = [
    { left: '15%', top: '20%', width: '3px', animationDelay: '0s', animationDuration: '18s' },
    { left: '70%', top: '10%', width: '2px', animationDelay: '3s', animationDuration: '22s' },
    { left: '40%', top: '60%', width: '4px', animationDelay: '7s', animationDuration: '16s' },
    { left: '85%', top: '45%', width: '2px', animationDelay: '5s', animationDuration: '20s' },
    { left: '25%', top: '80%', width: '3px', animationDelay: '9s', animationDuration: '24s' },
    { left: '55%', top: '35%', width: '5px', animationDelay: '2s', animationDuration: '19s' },
  ];

  // Map service ID to active panel
  const renderActivePanel = () => {
    switch (activeTab) {
      case 'ai-agents':
        return <AIAgentPanel />;
      case 'automation':
        return <AutomationPanel />;
      case 'web-systems':
        return <WebSystemPanel />;
      default:
        return <AIAgentPanel />;
    }
  };

  const activeServiceData = servicesDict.items.find((item: any) => item.id === activeTab) || servicesDict.items[0];

  const tabs = [
    { id: 'ai-agents', label: 'AI Agent สมองกล', icon: <Bot size={16} /> },
    { id: 'automation', label: 'ระบบอัตโนมัติ', icon: <Zap size={16} /> },
    { id: 'web-systems', label: 'ระบบเว็บองค์กร', icon: <Globe size={16} /> }
  ] as const;

  return (
    <section id="hero" className="relative w-full pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-aetox-bg">
      {/* Premium Apple-Style Conic Spotlight & Dotted Grid for Dark Mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none">
        {/* Ambient Radial Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] md:w-[100%] h-[90%] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08)_0%,_rgba(6,182,212,0.03)_40%,_transparent_75%)]" />
        {/* Conic Spotlight Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[70%] h-[70%] bg-[conic-gradient(from_180deg_at_50%_0%,_transparent_45%,_rgba(255,255,255,0.05)_50%,_transparent_55%)] mix-blend-overlay blur-[2px]" />
        {/* Dotted Grid Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <BackgroundIcon Icon={Cpu} position="top-left" size={550} />
      <BackgroundIcon Icon={Orbit} position="bottom-right" size={550} opacity={0.06} />

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
      <div className="container relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-fluid-h1 font-display text-aetox-text-main leading-[1.2] tracking-tight py-2"
        >
          {content.headline.white}
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aetox-accent via-cyan-400 to-aetox-accent inline-block py-2 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            {content.headline.accent}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-fluid-p font-sans text-aetox-text-soft max-w-2xl font-medium leading-relaxed"
        >
          {content.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 mb-16 flex flex-col sm:flex-row gap-3 md:gap-6 w-full sm:w-auto justify-center"
        >
          <Link href={`/${lang}/services`} className="aetox-btn-main group w-full sm:w-auto">
            {content.cta.primary}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href={`/${lang}/authority`} className="aetox-btn-glass w-full sm:w-auto">
            {content.cta.secondary}
          </Link>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
         *  THE METALLIC WINDOW: MACBOOK APP INTERACTIVE MOCKUP (INTEGRATED IN HERO)
         * ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="aetox-card w-full rounded-3xl overflow-hidden border border-aetox-card-border shadow-2xl relative bg-aetox-surface-lowest/40 backdrop-blur-2xl"
        >
          {/* Glowing Top Metallic Reflective Edge (Catches Spotlight from top center) */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-aetox-accent/50 to-transparent opacity-0 dark:opacity-100 transition-all duration-500 z-10" />

          {/* 1. macOS Window Header */}
          <div className="px-6 py-4 border-b border-aetox-border flex items-center gap-2 bg-black/10">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
            <span className="text-[10px] md:text-xs text-aetox-text-muted font-bold ml-4 tracking-widest uppercase">
              Aetox Enterprise System Workspace
            </span>
          </div>

          {/* 2. Window Main Container */}
          <div className="flex flex-col lg:flex-row min-h-[460px]">
            {/* 2.1 Left Sidebar */}
            <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-aetox-border bg-black/5 p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide shrink-0">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-xs md:text-sm font-bold tracking-tight w-auto lg:w-full transition-all duration-300 shrink-0 select-none ${
                      isActive
                        ? 'bg-aetox-accent text-white border-aetox-accent shadow-aetox-glow scale-[1.02]'
                        : 'bg-transparent border-aetox-border text-aetox-text-soft hover:bg-aetox-surface-low/30 hover:text-aetox-text-main'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 2.2 Right Canvas */}
            <div className="flex-1 p-6 md:p-10 flex flex-col gap-8 bg-black/2">
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    {renderActivePanel()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 3. Panel Details */}
              <div className="pt-8 border-t border-aetox-border/60 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-aetox-text-main flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-aetox-accent" />
                    {activeServiceData.title}
                  </h3>
                  <p className="text-xs md:text-sm text-aetox-text-soft font-medium leading-relaxed">
                    {activeServiceData.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-black text-aetox-accent uppercase tracking-wider">
                    ขีดความสามารถที่จะได้รับ (Delivered Capabilities)
                  </p>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {activeServiceData.features?.map((feature: string, idx: number) => (
                      <li key={idx} className="flex gap-2 items-center text-xs text-aetox-text-main font-bold">
                        <ChevronRight size={14} className="text-aetox-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
