'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Server, Layout, BrainCircuit, Activity, 
  CheckCircle2, ChevronDown, Cpu, ShieldCheck, Zap,
  Terminal, Globe, MousePointer2
} from 'lucide-react';

// ประเภทของระบบที่รองรับ
type SystemType = 'none' | 'ecommerce' | 'internal' | 'data';

export default function ArchitectureBuilder({ dict, compact = false }: { dict: any, compact?: boolean }) {
  const [selectedSystem, setSelectedSystem] = useState<SystemType>('none');
  const [buildStep, setBuildStep] = useState<number>(0);
  const [isBuilding, setIsBuilding] = useState<boolean>(false);

  // Icon mapping for layers
  const getIcon = (layerName: string) => {
    const name = layerName.toLowerCase();
    if (name.includes('db') || name.includes('database') || name.includes('postgresql')) return Database;
    if (name.includes('api') || name.includes('core')) return Server;
    if (name.includes('front') || name.includes('dashboard') || name.includes('storefront') || name.includes('portal')) return Layout;
    if (name.includes('ai') || name.includes('rag') || name.includes('brain')) return BrainCircuit;
    if (name.includes('security') || name.includes('secure')) return ShieldCheck;
    if (name.includes('workflow') || name.includes('automator')) return Cpu;
    if (name.includes('pipeline') || name.includes('real-time')) return Activity;
    return Server;
  };

  const getColors = (id: string) => {
    switch (id) {
      case 'ecommerce': return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' };
      case 'internal': return { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
      case 'data': return { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' };
      default: return { color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/30' };
    }
  };

  useEffect(() => {
    if (isBuilding && buildStep < 5) {
      const timer = setTimeout(() => {
        setBuildStep(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (isBuilding && buildStep === 5) {
      setTimeout(() => setIsBuilding(false), 0);
    }
  }, [isBuilding, buildStep]);

  const handleStartBuild = (type: SystemType) => {
    if (type === 'none') return;
    setSelectedSystem(type);
    setBuildStep(0);
    setIsBuilding(true);
  };

  const activeConfig = selectedSystem !== 'none' ? dict.configs[selectedSystem] : null;

  // ─── Render Logic ───
  return (
    <div className="w-full">
      {/* ─── Mobile View ─── */}
      <div className="md:hidden space-y-6">
        <AnimatePresence mode="wait">
          {selectedSystem === 'none' ? (
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="aetox-card p-6 rounded-3xl border border-white/10 bg-aetox-surface-lowest/50">
                <p className="text-aetox-accent font-black text-[10px] tracking-tight mb-4">Strategic Question</p>
                <h3 className="text-xl font-bold text-aetox-text-main mb-8 leading-tight">{dict.question}</h3>
                <div className="space-y-3">
                  {dict.businessTypes.map((opt: any) => (
                    <button
                      key={opt.id}
                      onClick={() => handleStartBuild(opt.id)}
                      className="w-full p-5 rounded-2xl border border-white/10 bg-aetox-surface-lowest/50 text-left text-sm font-bold text-aetox-text-soft hover:border-aetox-accent hover:bg-aetox-accent-subtle transition-all active:scale-[0.98]"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              {/* Strategic Result Badge */}
              <div className="bg-aetox-accent-subtle border border-aetox-accent/30 p-4 rounded-2xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-aetox-accent" size={24} />
                  <div>
                    <p className="text-[10px] font-black text-aetox-accent tracking-tight">Architecture</p>
                    <p className="text-aetox-text-main font-bold">{activeConfig?.title}</p>
                  </div>
                </div>
                {isBuilding && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                    <Zap size={12} className="text-amber-400 animate-pulse" />
                    <span className="text-[10px] font-black text-amber-400 tracking-tight">{dict.status.building.split('...')[0]}</span>
                  </div>
                )}
              </div>

              {/* Stack Detail */}
              <div className="aetox-card p-6 rounded-3xl border border-white/10 bg-aetox-surface-lowest/80 space-y-4">
                <AnimatePresence>
                  {buildStep === 5 && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-emerald-500 text-xs leading-relaxed font-bold mb-4"
                    >
                      {`"${activeConfig?.impact}"`}
                    </motion.p>
                  )}
                </AnimatePresence>
                
                <div className="flex flex-col-reverse gap-2">
                  {activeConfig?.layers.map((layer: any, idx: number) => {
                    const isVisible = buildStep > idx;
                    const Icon = getIcon(layer.name);
                    const colors = getColors(selectedSystem);
                    return (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-500 ${
                          isVisible ? `${colors.bg} ${colors.border}` : 'border-transparent opacity-0'
                        }`}
                      >
                        <Icon size={16} className={colors.color} />
                        <div className="flex-1">
                          <span className="text-[11px] font-bold text-aetox-text-soft">{layer.name}</span>
                        </div>
                        <span className="text-[8px] text-aetox-text-muted font-bold">Layer 0{idx + 1}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <button 
                  onClick={() => setSelectedSystem('none')}
                  disabled={isBuilding}
                  className="w-full mt-6 py-3 rounded-xl border border-white/10 text-[11px] font-black text-aetox-text-muted tracking-tight disabled:opacity-30"
                >
                  {dict.resetLabel}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/* ─── Desktop View (Preserved) ─── */}
      <div className={`hidden md:block w-full overflow-hidden ${compact ? '' : 'aetox-card rounded-[24px] border border-white/10 shadow-2xl bg-aetox-surface-lowest/50'}`}>
        
        {/* 1. Header (Status Bar) */}
        {!compact && (
          <div className="bg-aetox-surface-lowest/90 px-6 py-5 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-aetox-accent-subtle border border-aetox-accent/20">
                <Cpu className="text-aetox-accent" size={20} />
              </div>
              <h2 className="text-sm font-bold text-aetox-text-main tracking-tight">{dict.title}</h2>
            </div>
            
            <div className="flex gap-6 text-[10px] font-bold">
              <div className="flex flex-col gap-1">
                <span className="text-aetox-text-muted uppercase tracking-widest">ARCHITECTURE</span>
                <span className="text-aetox-text-main">{activeConfig ? activeConfig.title : 'N/A'}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 uppercase tracking-widest">STATUS</span>
                <span className={`${isBuilding ? 'text-amber-400 animate-pulse' : (buildStep === 5 ? 'text-emerald-400' : 'text-gray-500')} flex items-center gap-1`}>
                  {isBuilding ? dict.status.building.toUpperCase() : (buildStep === 5 ? <><CheckCircle2 size={12}/> {dict.status.ready.toUpperCase()}</> : dict.status.waiting.toUpperCase())}
                </span>
              </div>
            </div>
          </div>
        )}

         {/* 2. Main Builder Display */}
        <div className={`relative p-6 md:p-10 min-h-[520px] flex flex-col bg-gradient-to-b from-transparent to-aetox-surface-lowest/20 ${compact ? 'rounded-[40px] border border-white/10' : ''}`}>
          <div className="absolute inset-0 bg-aetox-grid-overlay opacity-5 pointer-events-none" />
          
          {selectedSystem === 'none' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-aetox-surface-lowest flex items-center justify-center border border-white/10 animate-float">
                <Terminal size={28} className="text-aetox-text-muted" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-aetox-text-main">{dict.title}</h3>
                <p className="text-sm text-aetox-text-muted max-w-xs font-medium leading-relaxed">{dict.question}</p>
              </div>
            </div>
          )}

          {/* 4. Business Impact Overlay */}
          <div className="h-28 mb-4 relative z-20">
            <AnimatePresence>
              {buildStep === 5 && activeConfig && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 p-4 md:p-5 rounded-2xl shadow-emerald-500/5 backdrop-blur-xl"
                >
                  <h4 className="text-[10px] font-bold text-emerald-400 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                    <CheckCircle2 size={12} /> {dict.impactLabel} (Impact)
                  </h4>
                  <p className="text-sm md:text-[15px] font-bold text-aetox-text-main leading-relaxed">
                    {activeConfig.impact}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Layer Stack */}
          <div className="flex-1 flex flex-col justify-end">
            {activeConfig && (
              <div className="flex flex-col-reverse gap-3 relative z-10 w-full max-w-xl mx-auto">
                {activeConfig.layers.map((layer: any, index: number) => {
                  const isVisible = buildStep > index;
                  const Icon = getIcon(layer.name);
                  const colors = getColors(selectedSystem);
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      className="relative"
                    >
                      {index < 3 && isVisible && buildStep > index + 1 && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-cyber-blue/30" />
                      )}
                      
                      <div className={`flex items-center gap-4 p-4 rounded-xl border backdrop-blur-md transition-all duration-500 ${
                        isVisible ? `${colors.bg} ${colors.border} shadow-lg` : 'border-transparent'
                      }`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border bg-aetox-surface-lowest ${colors.border}`}>
                          <Icon className={colors.color} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-0.5">
                            <h4 className={`text-sm font-bold ${colors.color}`}>{layer.name}</h4>
                            <span className="text-[9px] text-aetox-text-muted font-bold uppercase tracking-wider">Layer 0{index + 1}</span>
                          </div>
                          <p className="text-[11px] text-aetox-text-soft font-medium leading-tight">{layer.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 5. Footer Controls */}
        <div className="bg-aetox-surface-lowest px-6 py-6 border-t border-white/5 flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="text-[11px] font-bold text-aetox-text-muted uppercase tracking-widest whitespace-nowrap">Domain</span>
            <div className="relative w-full md:w-72">
              <select 
                value={selectedSystem}
                onChange={(e) => handleStartBuild(e.target.value as SystemType)}
                disabled={isBuilding}
                className="w-full appearance-none bg-aetox-surface-lowest/50 border border-white/10 text-aetox-text-main text-sm font-bold rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:border-aetox-accent disabled:opacity-50 cursor-pointer transition-all"
              >
                <option value="none" className="bg-aetox-bg text-aetox-text-main">-- เลือกประเภทธุรกิจ --</option>
                {dict.businessTypes.map((opt: any) => (
                  <option key={opt.id} value={opt.id} className="bg-aetox-bg text-aetox-text-main">{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-aetox-text-muted pointer-events-none" />
            </div>
          </div>

          <button 
            onClick={() => handleStartBuild(selectedSystem)}
            disabled={selectedSystem === 'none' || isBuilding}
            className="w-full md:w-auto px-10 py-3 bg-aetox-accent-subtle hover:bg-aetox-accent/20 text-aetox-accent text-sm font-bold rounded-xl border border-aetox-accent/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2"
          >
            {isBuilding ? (
              <>
                <Zap size={16} className="animate-pulse" />
                {dict.status.building.toUpperCase()}
              </>
            ) : dict.resetLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

