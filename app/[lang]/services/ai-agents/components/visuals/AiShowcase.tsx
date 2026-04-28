'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceVisualCard from '@/components/ServiceVisualCard';

// Import sub-visuals
import OrchestratorVisual from './Orchestrator';
import HybridRetrievalVisual from './HybridRetrieval';
import SelfCorrectionVisual from './SelfCorrection';
import StrategicOutputVisual from './StrategicOutput';
import RealTimeStreamVisual from './RealTimeStream';

export function AiShowcase({ dict }: { dict: any }) {
  const [activeStep, setActiveStep] = useState(0);

  const engagement = dict.engagement || { steps: [] };
  const steps = engagement.steps;

  const visuals = [
    <OrchestratorVisual key="orch" dict={dict.visuals.orchestrator} labels={dict.visuals.labels} />,
    <HybridRetrievalVisual key="hybrid" dict={dict.visuals.hybrid} labels={dict.visuals.labels} />,
    <SelfCorrectionVisual key="self-correct" dict={dict.visuals.correction} labels={dict.visuals.labels} />,
    <StrategicOutputVisual key="strategic" dict={dict.visuals.strategic} labels={dict.visuals.labels} />,
    <RealTimeStreamVisual key="stream" dict={dict.visuals.stream} labels={dict.visuals.labels} />,
  ];

  return (
    <div className="space-y-6">
      <ServiceVisualCard minHeight="h-[560px] lg:h-[620px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={activeStep} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full flex flex-col"
          >
            <div className="flex-1 bg-gradient-to-b from-transparent to-black/40 relative">
              {visuals[activeStep % visuals.length]}
            </div>
            <div className="mt-6 p-4 lg:p-6 bg-ultra-dark/95 backdrop-blur-2xl border border-white/10 space-y-2 shrink-0 rounded-3xl h-[160px] flex flex-col justify-center">
              <div className="space-y-0.5">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.8, y: 0 }} className="text-cyber-blue text-[9px] font-black uppercase tracking-[0.2em]">
                  {steps[activeStep]?.subtitle || 'Aetox AI'}
                </motion.span>
                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl lg:text-2xl font-black text-white leading-tight">
                  {steps[activeStep]?.title || 'Loading...'}
                </motion.h3>
              </div>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-400 text-[13px] leading-relaxed line-clamp-3">
                {steps[activeStep]?.desc || '...'}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </ServiceVisualCard>

      <div className="relative flex items-center justify-between h-12 mt-4">
        <div className="flex gap-2">
          {steps.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-10 bg-cyber-blue shadow-cyber-glow' : 'w-3 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all active:scale-75 hover:scale-105">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-all active:scale-75 hover:scale-105">→</button>
        </div>
      </div>
    </div>
  );
}
