'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, RefreshCw, Cpu, Layers, Zap, Info } from 'lucide-react';

/* ─── Layer 3: Feature Dashboard ─────────────────────────────────── */
export function FeaturesDashboard({ features, comparisonRows }: { features: any[], comparisonRows: any[] }) {
  const iconMap: any = {
    CheckCircle2: <CheckCircle2 size={16} className="text-cyber-blue" />,
    RefreshCw: <RefreshCw size={16} className="text-cyber-blue" />,
    ShieldCheck: <ShieldCheck size={16} className="text-cyber-blue" />,
    Cpu: <Cpu size={16} className="text-cyber-blue" />,
    Layers: <Layers size={16} className="text-cyber-blue" />,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left: Key Pillars */}
      <div className="lg:col-span-5 space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-cyber-blue">
            <div className="p-2 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20">
              <DatabaseIcon className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-black text-white">Enterprise RAG Technology</h3>
          </div>
          <p className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">Architecture & Capabilities</p>
        </div>

        <div className="space-y-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyber-blue/40 group-hover:bg-cyber-blue/5 transition-all shadow-lg group-hover:shadow-cyber-glow/10">
                {iconMap[feature.icon] || <CheckCircle2 size={16} />}
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white group-hover:text-cyber-blue transition-colors">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Comparison Table */}
      <div className="lg:col-span-7">
        <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden shadow-2xl bg-black/40 relative group">
          <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
          
          <div className="relative overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="px-8 py-6 text-xs font-black text-gray-500 uppercase tracking-widest">Features</th>
                  <th className="px-8 py-6 text-xs font-black text-gray-500 uppercase tracking-widest text-center">General AI</th>
                  <th className="px-8 py-6 text-xs font-black text-cyber-blue uppercase tracking-widest text-center">
                    AETOX RAG
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-400">
                {comparisonRows.map((row: any, idx: number) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group/row">
                    <td className="px-8 py-7 text-gray-300 font-bold text-base">{row.label}</td>
                    <td className="px-8 py-7 text-gray-500 font-medium opacity-60 group-hover/row:opacity-100 transition-opacity text-center">
                      {row.general}
                    </td>
                    <td className={`px-8 py-7 bg-cyber-blue/5 font-black text-base relative overflow-hidden text-center ${
                      row.highlight 
                        ? 'text-emerald-400 italic underline decoration-emerald-500/40 underline-offset-8' 
                        : 'text-white'
                    }`}>
                      {row.aetox}
                      {row.highlight && (
                        <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
                          <Zap size={24} />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-6 flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest justify-end">
          <Info size={12} className="text-cyber-blue" /> Comparison based on enterprise standards
        </p>
      </div>
    </div>
  );
}

/* ─── Layer 4: Pipeline ─────────────────────────────────────────── */
export function KnowledgePipeline({ pipeline }: { pipeline: any }) {
  const iconMap: any = {
    0: <RefreshCw size={32} />,
    1: <Cpu size={32} />,
    2: <Layers size={32} />,
    3: <Zap size={32} />
  };

  return (
    <div className="relative">
      <div className="text-center space-y-4 mb-20">
        <h3 className="text-4xl font-black text-white">{pipeline.title}</h3>
        <p className="text-cyber-blue font-black uppercase tracking-[0.3em] text-sm">{pipeline.subtitle}</p>
        <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-lg">
          {pipeline.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
        
        {pipeline.steps.map((step: any, idx: number) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="relative z-10 space-y-6 text-center group"
          >
            {/* Mobile Vertical Line */}
            {idx < pipeline.steps.length - 1 && (
              <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-cyber-blue/30 to-transparent z-0" />
            )}

            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-ultra-dark border border-white/5 mx-auto flex items-center justify-center relative shadow-2xl group-hover:border-cyber-blue/40 transition-all group-hover:-translate-y-2 duration-500">
               <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
               <div className="text-gray-500 group-hover:text-cyber-blue transition-colors group-hover:scale-110 duration-500">
                 {iconMap[idx]}
               </div>
               <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-7 h-7 md:w-8 md:h-8 rounded-full bg-ultra-dark border border-white/10 flex items-center justify-center text-[10px] font-black text-gray-500 group-hover:text-white group-hover:border-cyber-blue transition-all">
                 0{idx + 1}
               </div>
            </div>
            
            <div className="space-y-4 px-2">
              <div className="space-y-2">
                <div className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">{step.step}</div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyber-blue transition-colors">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>

              {/* Dynamic Badges */}
              {step.tags && (
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {step.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[9px] text-gray-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {step.config && (
                <div className="pt-2 text-[10px] font-mono text-gray-500 flex flex-col gap-1 items-center">
                  {Object.entries(step.config).map(([k, v]) => (
                    <div key={k} className="flex items-center gap-2">
                      <span className="text-cyber-blue opacity-50">{k}:</span>
                      <span className="text-gray-400">{v as string}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {step.metrics && (
                <div className="pt-2 text-[10px] font-mono text-emerald-500 flex flex-col gap-1 items-center">
                  {typeof step.metrics === 'string' ? (
                    <span>{step.metrics}</span>
                  ) : (
                    Object.entries(step.metrics).map(([k, v]) => (
                      <div key={k} className="flex items-center gap-2">
                        <span className="opacity-50">{k}:</span>
                        <span>{v as string}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
              
              {step.status && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {step.status}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {pipeline.footerNote && (
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
          <p className="text-sm text-gray-500 leading-relaxed italic">
            {"\""}{pipeline.footerNote}{"\""}
          </p>
        </div>
      )}
    </div>
  );
}

// Helpers for the components
function DatabaseIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
  );
}
