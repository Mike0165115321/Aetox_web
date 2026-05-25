'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Globe, Boxes, Component, ChevronRight } from 'lucide-react';
import BackgroundIcon from './visuals/BackgroundIcon';
import AIAgentPanel from './services/AIAgentPanel';
import AutomationPanel from './services/AutomationPanel';
import WebSystemPanel from './services/WebSystemPanel';

export default function ServiceSection({ dict, lang }: { dict?: any, lang: string }) {
  const [activeTab, setActiveTab] = useState<'ai-agents' | 'automation' | 'web-systems'>('ai-agents');

  if (!dict) return null;
  const content = dict;

  // Map service ID to their corresponding interactive panel
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

  // Find active service item from dictionary to show description and features checklist below
  const activeServiceData = content.items.find((item: any) => item.id === activeTab) || content.items[0];

  const tabs = [
    { id: 'ai-agents', label: 'AI Agent สมองกล', icon: <Bot size={16} /> },
    { id: 'automation', label: 'ระบบอัตโนมัติ', icon: <Zap size={16} /> },
    { id: 'web-systems', label: 'ระบบเว็บองค์กร', icon: <Globe size={16} /> }
  ] as const;

  return (
    <section id="services" className="py-16 md:py-32 relative overflow-hidden border-t border-aetox-border scroll-mt-20">
      {/* Optimized Background Architectural Elements */}
      <BackgroundIcon Icon={Boxes} position="top-left" size={500} opacity={0.06} />
      <BackgroundIcon Icon={Component} position="bottom-right" size={500} opacity={0.06} />

      <div className="container relative z-10">
        {/* Soft Spotlight Beam Shining down onto the Services Grid in Dark Mode */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[100%] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.06)_0%,_rgba(6,182,212,0.02)_40%,_transparent_75%)] pointer-events-none opacity-0 dark:opacity-100 z-0 transition-opacity duration-1000" />
        
        <div className="max-w-4xl mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-aetox-accent font-bold text-xs tracking-wider mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent" />
            {content.badge}
          </motion.div>
          <h2 className="text-fluid-h1 font-bold text-aetox-text-main leading-tight mb-4">{content.title}</h2>
          <p className="text-fluid-p text-aetox-text-soft font-bold uppercase tracking-widest">
            {content.description}
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
         *  THE METALLIC WINDOW: MACBOOK APP INTERACTIVE MOCKUP
         * ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aetox-card w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-aetox-card-border shadow-2xl relative bg-aetox-surface-lowest/40 backdrop-blur-2xl"
        >
          {/* Glowing Top Metallic Reflective Edge in Dark Mode (Reflects light from above) */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-aetox-accent/40 to-transparent opacity-0 dark:opacity-100 transition-all duration-500 z-10" />

          {/* 1. macOS Window Header (Triple Dot Controls) */}
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
            {/* 2.1 Left Sidebar (Horizontal tab-bar on mobile, vertical sidebar on desktop) */}
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

            {/* 2.2 Right Workspace Canvas: Render Dynamic Panel + Service Details */}
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

              {/* 3. Panel Details & Features Checklist below the mockup */}
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
