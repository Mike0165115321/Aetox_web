'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Zap, BrainCircuit, LayoutGrid, TrendingUp } from 'lucide-react';

// Dynamic imports to keep initial bundle small
const AutomationSimulatorHome = dynamic(() => import('./AutomationSimulatorHome'), { 
  loading: () => <div className="h-[600px] flex items-center justify-center aetox-card animate-pulse text-aetox-text-muted uppercase tracking-widest font-black text-xs">Loading Automation...</div> 
});

const RagChatSimulator = dynamic(() => import('@/app/[lang]/services/ai-agents/components/rag-chat-simulator').then(mod => mod.RagChatSimulator), {
  loading: () => <div className="h-[600px] flex items-center justify-center aetox-card animate-pulse text-aetox-text-muted uppercase tracking-widest font-black text-xs">Loading AI Agent...</div>
});

const ArchitectureBuilder = dynamic(() => import('@/app/[lang]/services/web-systems/components/architecture-builder'), {
  loading: () => <div className="h-[600px] flex items-center justify-center aetox-card animate-pulse text-aetox-text-muted uppercase tracking-widest font-black text-xs">Loading Architect...</div>
});

const AiAgentsSimulator = dynamic(() => import('@/app/[lang]/services/ai-agents/ai-agents-simulator'), {
  loading: () => <div className="h-[600px] flex items-center justify-center aetox-card animate-pulse text-aetox-text-muted uppercase tracking-widest font-black text-xs">Loading AI ROI...</div>
});

type TabType = 'automation' | 'aiAgent' | 'aiAgentRoi' | 'architecture';

export default function SimulatorsHub({ dict }: { dict: any }) {
  const [activeTab, setActiveTab] = useState<TabType>('automation');

  const tabs = [
    { id: 'automation' as TabType, label: dict.tabs.automation, icon: Zap, color: 'text-emerald-400' },
    { id: 'aiAgent' as TabType, label: dict.tabs.aiAgent, icon: BrainCircuit, color: 'text-aetox-accent' },
    { id: 'aiAgentRoi' as TabType, label: dict.tabs.aiAgentRoi, icon: TrendingUp, color: 'text-violet-400' },
    { id: 'architecture' as TabType, label: dict.tabs.architecture, icon: LayoutGrid, color: 'text-amber-400' },
  ];

  return (
    <div className="w-full space-y-12">
      {/* Tab Switcher: เปลี่ยนมาใช้ aetox-card สไตล์ที่บางลง */}
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-aetox-card-bg border border-aetox-border backdrop-blur-3xl rounded-[24px] max-w-fit mx-auto shadow-xl transition-all duration-500">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 md:gap-3 px-3 md:px-7 py-2.5 md:py-4 rounded-[18px] text-[10px] md:text-xs font-black tracking-widest uppercase transition-all duration-500 group ${
                active ? 'text-aetox-text-main' : 'text-aetox-text-muted hover:text-aetox-text-soft'
              }`}
            >
              {active && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-aetox-accent/10 border border-aetox-accent/20 rounded-[18px] shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={16} className={`relative z-10 transition-colors duration-500 ${active ? tab.color : 'group-hover:text-aetox-text-soft'}`} />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Simulator Container */}
      <div className="relative min-h-[500px] md:min-h-[650px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20, rotateY: 5, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, rotateY: -5, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="w-full"
          >
            {activeTab === 'automation' && <AutomationSimulatorHome dict={dict.automation} />}
            {activeTab === 'aiAgent' && <RagChatSimulator dict={dict.aiAgent} compact={true} />}
            {activeTab === 'aiAgentRoi' && <AiAgentsSimulator dict={dict.aiAgentRoi} compact={true} />}
            {activeTab === 'architecture' && <ArchitectureBuilder dict={dict.architecture} compact={true} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
