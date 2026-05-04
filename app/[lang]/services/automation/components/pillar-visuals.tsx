'use client';
import { motion } from 'framer-motion';
import { Layers, Rocket, Shield, Activity, BarChart3, Database } from 'lucide-react';

export function PriorityQueueVisual({ dict = {} }: { dict: any }) {
  const tasks = [
    { title: dict?.labels?.urgent || 'Urgent', priority: 'urgent', color: 'bg-rose-500' },
    { title: dict?.labels?.high || 'High', priority: 'high', color: 'bg-amber-500' },
    { title: dict?.labels?.normal || 'Normal', priority: 'normal', color: 'bg-emerald-500' },
  ];

  return (
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <Layers className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-aetox-accent animate-pulse" />
          <span className="text-[10px] font-bold text-aetox-accent uppercase tracking-widest">{dict?.title}</span>
        </div>
      </div>
        
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            {tasks.map((task, i) => (
                <motion.div 
                    key={task.priority}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                    className="w-full bg-aetox-surface-lowest/80 border border-aetox-border p-4 rounded-2xl flex items-center justify-between shadow-xl"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${task.color} shadow-[0_0_10px_currentColor]`} />
                        <div className="space-y-1">
                            <p className="text-[9px] text-aetox-text-muted font-black uppercase tracking-widest">{dict?.priority}</p>
                            <p className="text-fluid-sm font-bold text-aetox-text-main uppercase">{task.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-aetox-accent/10 border border-aetox-accent/20">
                        <Activity className="w-3 h-3 text-aetox-accent animate-pulse" />
                        <span className="text-[9px] font-black text-aetox-accent uppercase tracking-tighter">{dict?.status}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  );
}

export function ScalableBotsVisual({ dict = {} }: { dict: any }) {
  return (
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <Rocket className="absolute -bottom-12 -right-12 w-64 h-64 text-emerald-500 opacity-[0.03] -rotate-12 pointer-events-none" />

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" />
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{dict?.title}</span>
        </div>
      </div>

        <div className="flex-1 flex flex-col justify-center items-center w-full relative">
            <div className="grid grid-cols-2 gap-4 w-full">
                {[1, 2, 3, 4].map((bot) => (
                    <div key={bot} className="relative p-6 bg-aetox-surface-lowest border border-aetox-border rounded-2xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-emerald-500/[0.03] animate-pulse" />
                        <div className="relative z-10 space-y-4">
                            <div className="flex justify-between items-center">
                                <Rocket className="w-5 h-5 text-emerald-500" />
                                <span className="text-[8px] font-black text-emerald-500/50 uppercase tracking-widest">BOT-0{bot}</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-[8px] text-aetox-text-muted font-bold uppercase tracking-widest">{dict?.load}</span>
                                    <span className="text-[10px] text-emerald-400 font-black">98.2%</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: ['70%', '98%', '85%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-emerald-500 shadow-[0_0_10px_#10B981]" />
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-[7px] text-emerald-400/80 font-bold uppercase">
                                <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                                {dict?.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export function ObservabilityVisual({ dict = {} }: { dict: any }) {
  const logs = [
    { id: 'TX-9021', time: '14:20:01', status: 'SUCCESS', color: 'text-emerald-400' },
    { id: 'TX-9022', time: '14:20:05', status: 'SUCCESS', color: 'text-emerald-400' },
    { id: 'TX-9023', time: '14:20:12', status: 'AUDIT', color: 'text-aetox-accent' },
  ];

  return (
    <div className="flex flex-col h-full font-sans relative overflow-hidden">
      {/* Big Background Icon */}
      <Activity className="absolute -bottom-12 -right-12 w-64 h-64 text-aetox-accent opacity-[0.03] rotate-12 pointer-events-none" />

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366F1]" />
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{dict?.title}</span>
        </div>
      </div>

        <div className="flex-1 space-y-4">
            <div className="bg-aetox-surface-lowest/90 border border-aetox-border rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-aetox-border">
                    <span className="text-[9px] font-black text-aetox-text-muted uppercase tracking-[0.2em]">{dict?.auditLog}</span>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 bg-rose-500 rounded-full animate-pulse" />
                        <span className="text-[8px] font-black text-rose-500 uppercase tracking-widest">{dict?.realtime}</span>
                    </div>
                </div>
                <div className="space-y-3">
                    {logs.map((log, i) => (
                        <div key={log.id} className="flex items-center justify-between text-[10px] font-mono border-b border-aetox-border/30 pb-2 last:border-0">
                            <div className="flex gap-3">
                                <span className="text-aetox-text-muted">[{log.time}]</span>
                                <span className="text-aetox-text-main font-bold">{log.id}</span>
                            </div>
                            <span className={`font-black ${log.color}`}>{log.status}</span>
                        </div>
                    ))}
                    <div className="flex items-center justify-center pt-2">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-aetox-border to-transparent" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-aetox-surface-lowest border border-aetox-border p-4 rounded-2xl flex flex-col justify-between min-h-[100px]">
                    <BarChart3 className="w-5 h-5 text-indigo-400 opacity-50" />
                    <div className="space-y-1">
                        <p className="text-[8px] text-aetox-text-muted font-bold uppercase tracking-widest">Efficiency</p>
                        <p className="text-xl font-black text-aetox-text-main">+99%</p>
                    </div>
                </div>
                <div className="bg-aetox-surface-lowest border border-aetox-border p-4 rounded-2xl flex flex-col justify-between min-h-[100px]">
                    <Database className="w-5 h-5 text-emerald-400 opacity-50" />
                    <div className="space-y-1">
                        <p className="text-[8px] text-aetox-text-muted font-bold uppercase tracking-widest">Integrity</p>
                        <p className="text-xl font-black text-aetox-text-main">100%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
