'use client';
import { motion } from 'framer-motion';
import { Globe, Database, Layout, Search, Bot, Shield, Lock } from 'lucide-react';

export function StackArchitectureVisual() {
  return (
    <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
            <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Stack Architecture</span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center w-full relative">
            <div className="relative w-full h-[320px] flex items-center justify-center" style={{ perspective: '2000px' }}>
                
                {/* Core Data Beam */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                   <div className="w-[1px] h-[80%] bg-gradient-to-b from-transparent via-cyber-blue/30 to-transparent" />
                   <motion.div animate={{ y: [-120, 120], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute w-[3px] h-[40px] bg-cyber-blue shadow-[0_0_15px_#06B6D4] rounded-full blur-[1px]" />
                </div>

                {/* Layer 3: Cloud Infrastructure (Bottom) */}
                <motion.div 
                  initial={{ rotateX: 60, rotateZ: -35 }}
                  animate={{ y: [50, 60, 50] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute w-[220px] h-[140px] bg-[#0A0F1C]/80 border border-white/5 rounded-[32px] backdrop-blur-2xl flex items-center justify-center shadow-[0_40px_60px_-20px_rgba(0,0,0,0.8)] z-10"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[32px]" />
                   <Globe className="w-10 h-10 text-gray-600 opacity-40" />
                   <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Cloud Infra</span>
                     <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse" />
                   </div>
                </motion.div>

                {/* Layer 2: Type-Safe Core (Middle) */}
                <motion.div 
                  initial={{ rotateX: 60, rotateZ: -35 }}
                  animate={{ y: [-10, 0, -10] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute w-[220px] h-[140px] bg-cyber-blue/10 border border-cyber-blue/30 rounded-[32px] backdrop-blur-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(6,182,212,0.15)] z-20"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/10 to-transparent rounded-[32px]" />
                   <div className="w-12 h-12 border border-cyber-blue/50 rounded-2xl flex items-center justify-center bg-cyber-blue/5 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]">
                      <span className="text-cyber-blue font-black text-lg tracking-tighter">TS</span>
                   </div>
                   <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                     <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Type-Safe Core</span>
                     <div className="flex gap-1">
                       {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-cyber-blue rounded-full" />)}
                     </div>
                   </div>
                </motion.div>

                {/* Layer 1: Modern App Router (Top) */}
                <motion.div 
                  initial={{ rotateX: 60, rotateZ: -35 }}
                  animate={{ y: [-70, -60, -70] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="absolute w-[220px] h-[140px] bg-white/[0.03] border-t border-l border-white/20 border-b border-r border-white/5 rounded-[32px] backdrop-blur-2xl flex items-center justify-center shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] z-30"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[32px]" />
                   <Layout className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                   <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">App Router</span>
                     <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30">V14</span>
                   </div>
                </motion.div>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export function DataPipelineVisual() {
  return (
    <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4 z-20 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
            <span className="text-[10px] font-bold text-cyber-blue tracking-widest">Data Pipeline Architecture</span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center w-full relative">
            
            {/* Connecting Network Lines */}
            <div className="absolute inset-0 flex justify-center items-center opacity-60">
               <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 200 200" preserveAspectRatio="none">
                 <path d="M 100 20 L 100 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                 <path d="M 100 100 L 40 160" stroke="rgba(6,182,212,0.2)" strokeWidth="2" fill="none" />
                 <path d="M 100 100 L 160 160" stroke="rgba(6,182,212,0.2)" strokeWidth="2" fill="none" />
               </svg>
            </div>
            
            <div className="absolute inset-0 w-[200px] h-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div animate={{ top: ['10%', '50%'], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute left-[calc(50%-2px)] w-1 h-1 bg-white rounded-full shadow-cyber-glow" />
                <motion.div animate={{ top: ['50%', '80%'], left: ['50%', '20%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "linear" }} className="absolute w-1.5 h-1.5 bg-cyber-blue rounded-full shadow-cyber-glow" />
                <motion.div animate={{ top: ['50%', '80%'], left: ['50%', '80%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "linear" }} className="absolute w-1.5 h-1.5 bg-cyber-blue rounded-full shadow-cyber-glow" />
            </div>

            <div className="relative w-[200px] h-[200px]">
                <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0A0F1C] border border-white/10 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-xl z-10">
                   <Search className="w-5 h-5 text-gray-400" />
                   <div className="absolute -top-6 text-[8px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Queries</div>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 border border-dashed border-cyber-blue/30 rounded-full" />
                   <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-3 border border-white/5 rounded-full" />
                   <div className="w-16 h-16 bg-[#0A0F1C] border border-cyber-blue/50 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-cyber-blue/10 animate-pulse" />
                      <Database className="w-7 h-7 text-cyber-blue relative z-10 drop-shadow-lg" />
                   </div>
                   <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[8px] font-bold text-cyber-blue uppercase tracking-widest whitespace-nowrap">Schema</div>
                </div>

                <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute bottom-0 left-2 w-12 h-12 bg-[#0A0F1C] border border-cyber-blue/30 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-xl z-10">
                   <Globe className="w-5 h-5 text-cyber-blue drop-shadow-[0_0_5px_#06B6D4]" />
                   <div className="absolute -bottom-6 text-[8px] font-bold text-cyber-blue uppercase tracking-widest whitespace-nowrap">Analytics</div>
                </motion.div>

                <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-0 right-2 w-12 h-12 bg-[#0A0F1C] border border-cyber-blue/30 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-xl z-10">
                   <Bot className="w-5 h-5 text-cyber-blue drop-shadow-[0_0_5px_#06B6D4]" />
                   <div className="absolute -bottom-6 text-[8px] font-bold text-cyber-blue uppercase tracking-widest whitespace-nowrap">AI Ready</div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}

export function SecurityShieldVisual() {
  return (
    <div className="glass-card p-6 rounded-[24px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2 z-20 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" />
            <span className="text-[10px] font-bold text-emerald-500 tracking-widest">Enterprise Security Shield</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center relative w-full scale-90">
            <div className="relative w-[220px] h-[220px] flex items-center justify-center">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full opacity-30" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(6,182,212,0.4) 10%, transparent 40%)' }} />
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[2px] border-dashed border-red-500/30 rounded-full" />
               <motion.div animate={{ x: [-110, -70, -110], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_red]" />
               <motion.div animate={{ x: [110, 70, 110], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute right-1/2 top-[30%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_red]" />
               <motion.div animate={{ y: [110, 70, 110], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.2 }} className="absolute bottom-1/2 left-[40%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_red]" />
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-10 border-[2px] border-cyber-blue/40 rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
                  <div className="absolute top-0 -mt-1.5 w-3 h-3 bg-[#0A0F1C] border border-cyber-blue rounded-full shadow-cyber-glow flex items-center justify-center"><div className="w-1 h-1 bg-cyber-blue rounded-full" /></div>
                  <div className="absolute bottom-0 -mb-1.5 w-3 h-3 bg-[#0A0F1C] border border-cyber-blue rounded-full shadow-cyber-glow flex items-center justify-center"><div className="w-1 h-1 bg-cyber-blue rounded-full" /></div>
                  <div className="absolute left-0 -ml-1.5 w-3 h-3 bg-[#0A0F1C] border border-cyber-blue rounded-full shadow-cyber-glow flex items-center justify-center"><div className="w-1 h-1 bg-cyber-blue rounded-full" /></div>
               </motion.div>
               <div className="absolute inset-[65px] bg-[#0A0F1C] border border-emerald-500/50 rounded-full backdrop-blur-2xl flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)] overflow-hidden z-10">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-1.5 border border-dashed border-emerald-500/30 rounded-full flex items-center justify-center">
                     <span className="absolute -top-1 text-[5px] text-emerald-500/70 font-mono tracking-widest">0101</span>
                     <span className="absolute -bottom-1 text-[5px] text-emerald-500/70 font-mono tracking-widest">1010</span>
                  </motion.div>
                  <motion.div animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-emerald-500/20 rounded-full" />
                  <div className="relative z-10 flex items-center justify-center">
                     <Shield className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_#10B981]" />
                     <Lock className="w-4 h-4 text-[#0A0F1C] absolute fill-emerald-400" />
                  </div>
               </div>
            </div>
            <div className="absolute bottom-0 flex flex-wrap justify-center gap-2 px-2 w-full z-30">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0F1C] border border-white/10 rounded-lg text-[9px] font-bold text-gray-300 uppercase shadow-xl backdrop-blur-md">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10B981]" /> Role-Based Auth
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0F1C] border border-white/10 rounded-lg text-[9px] font-bold text-gray-300 uppercase shadow-xl backdrop-blur-md">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10B981]" /> AES-256
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0F1C] border border-white/10 rounded-lg text-[9px] font-bold text-gray-300 uppercase shadow-xl backdrop-blur-md">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10B981]" /> Threat Shield
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
