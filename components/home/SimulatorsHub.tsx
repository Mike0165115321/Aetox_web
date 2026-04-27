'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Zap, BrainCircuit, LayoutGrid, TrendingUp } from 'lucide-react';

// Dynamic imports to keep initial bundle small
const AutomationSimulatorHome = dynamic(() => import('./AutomationSimulatorHome'), { 
  loading: () => <div className="h-[600px] flex items-center justify-center bg-white/5 rounded-[40px] animate-pulse text-gray-500 uppercase tracking-widest font-bold">Loading Automation...</div> 
});

const RagChatSimulator = dynamic(() => import('@/app/[lang]/services/ai-agents/components/rag-chat-simulator').then(mod => mod.RagChatSimulator), {
  loading: () => <div className="h-[600px] flex items-center justify-center bg-white/5 rounded-[40px] animate-pulse text-gray-500 uppercase tracking-widest font-bold">Loading AI Agent...</div>
});

const ArchitectureBuilder = dynamic(() => import('@/app/[lang]/services/web-systems/components/architecture-builder'), {
  loading: () => <div className="h-[600px] flex items-center justify-center bg-white/5 rounded-[40px] animate-pulse text-gray-500 uppercase tracking-widest font-bold">Loading Architect...</div>
});

const AiAgentsSimulator = dynamic(() => import('@/app/[lang]/services/ai-agents/ai-agents-simulator'), {
  loading: () => <div className="h-[600px] flex items-center justify-center bg-white/5 rounded-[40px] animate-pulse text-gray-500 uppercase tracking-widest font-bold">Loading AI ROI...</div>
});

type TabType = 'automation' | 'aiAgent' | 'aiAgentRoi' | 'architecture';

export default function SimulatorsHub({ dict }: { dict: any }) {
  const [activeTab, setActiveTab] = useState<TabType>('automation');

  const tabs = [
    { id: 'automation' as TabType, label: dict.tabs.automation, icon: Zap, color: 'text-emerald-400' },
    { id: 'aiAgent' as TabType, label: dict.tabs.aiAgent, icon: BrainCircuit, color: 'text-cyber-blue' },
    { id: 'aiAgentRoi' as TabType, label: dict.tabs.aiAgentRoi, icon: TrendingUp, color: 'text-violet-400' },
    { id: 'architecture' as TabType, label: dict.tabs.architecture, icon: LayoutGrid, color: 'text-amber-400' },
  ];

  return (
    <div className="w-full space-y-12">
      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-1.5 md:p-2 bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/10 max-w-fit mx-auto">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl text-[12px] md:text-sm font-bold transition-all duration-500 group ${
                active ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {active && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl md:rounded-2xl shadow-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={16} className={`relative z-10 transition-colors duration-500 md:w-[18px] md:h-[18px] ${active ? tab.color : 'group-hover:text-gray-300'}`} />
              <span className="relative z-10">{tab.label}</span>
              {active && (
                <motion.div 
                  layoutId="activeGlow"
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 blur-sm rounded-full ${tab.color.replace('text', 'bg')}`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Simulator Container with Card Swapping Animation */}
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
