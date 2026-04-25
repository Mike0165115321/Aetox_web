'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Database, Cpu, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

/* ─── Shared UI Components ────────────────────────────────────────── */
export function LayerBadge({ icon: Icon, label, colorClass = "text-cyber-blue" }: { icon: any; label: string; colorClass?: string }) {
  const bgClass = colorClass.includes('cyber-blue') ? 'bg-cyber-blue/10 border-cyber-blue/20' : 'bg-deep-blue/10 border-deep-blue/20';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${bgClass} ${colorClass} text-sm font-bold tracking-widest uppercase`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

export function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group space-y-3 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyber-blue/30 transition-all duration-300 hover:bg-cyber-blue/[0.02]">
      <div className="flex items-center gap-3 font-bold text-white group-hover:text-cyber-blue transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export function AppliedIn({ items, label }: { items: { name: string; link?: string }[], label: string }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{label}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a 
            key={item.name} 
            href={item.link || '#'} 
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-cyber-blue/20 text-cyber-blue text-xs font-medium transition-all ${item.link ? 'cursor-pointer hover:bg-cyber-blue/10 hover:border-cyber-blue/40' : 'cursor-default'}`}
          >
            {item.link?.includes('github.com') ? (
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            ) : (
              <LinkIcon className="w-3 h-3" />
            )}
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Pillar 2 Specific: Hybrid Retrieval Pipeline Visual ────────── */
export function HybridRetrievalVisual() {
  const [phase, setPhase] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phaseData = [
    { title: "HyDE Embedding", tag: "PHASE 01", desc: "จินตนาการคำตอบล่วงหน้าเป็น Vector Target" },
    { title: "Hybrid Search", tag: "PHASE 02", desc: "Semantic GPU + Keyword ทำงานคู่ขนาน" },
    { title: "Adaptive Reranking", tag: "PHASE 03", desc: "Cross-Encoder ตัดสิน — Skip ถ้า Score สูงพอ" },
  ];

  return (
    <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col shadow-2xl bg-black/40">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
            <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Hybrid Precision Retrieval</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div key="hyde" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center gap-6">
                <div className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest w-12 shrink-0">Query</div>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-white/20 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-cyber-blue/40 text-lg">↓</motion.div>
                  <span className="text-[8px] font-black text-cyber-blue uppercase tracking-widest bg-cyber-blue/10 border border-cyber-blue/20 px-3 py-1 rounded-full">AI Imagines Answer</span>
                  <motion.div animate={{ scaleY: [0.8, 1.2, 0.8] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} className="text-cyber-blue/40 text-lg">↓</motion.div>
                </div>
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full px-4 py-3 rounded-xl bg-cyber-blue/10 border border-cyber-blue/40 shadow-cyber-glow/10">
                  <div className="text-[8px] font-black text-cyber-blue uppercase tracking-widest mb-2">Hypothetical Answer Vector</div>
                  <div className="flex gap-1">
                    {[60, 85, 45, 90, 70, 55, 80, 40].map((h, i) => (
                      <motion.div key={i} animate={{ scaleY: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }} className="flex-1 bg-cyber-blue/50 rounded-sm" style={{ height: `${h * 0.2}px`, minHeight: '4px' }} />
                    ))}
                  </div>
                  <div className="mt-2 text-[7px] text-gray-500 font-mono">→ Used as retrieval target</div>
                </motion.div>
              </motion.div>
            )}
            {phase === 1 && (
              <motion.div key="hybrid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-2">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Parallel Execution</span>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-0.5 rounded bg-cyber-blue/20 border border-cyber-blue/30 text-[8px] font-black text-cyber-blue uppercase">Semantic GPU</div>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <div className="relative h-8 rounded-lg bg-white/5 border border-cyber-blue/20 overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center px-3 gap-1">
                      {[1, 0.6, 0.9, 0.4, 0.8, 0.5, 0.95].map((v, i) => (
                        <motion.div key={i} animate={{ opacity: [0.3, v, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }} className="flex-1 bg-cyber-blue rounded-full" style={{ height: `${v * 16}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[8px] font-black text-blue-400 uppercase">Keyword Match</div>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <div className="relative h-8 rounded-lg bg-white/5 border border-blue-500/20 overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
                    <div className="absolute inset-0 flex items-center px-3 gap-2">
                      {['vc', 'ai', 'q4', 'roi', 'kpi'].map((kw, i) => (
                        <motion.div key={i} animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="text-[7px] font-mono text-blue-400/60 bg-blue-500/10 px-1 rounded">
                          {kw}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-cyber-blue/20" />
                  <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1.5, repeat: Infinity }} className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-[8px] font-black text-cyber-blue uppercase tracking-widest">Merged Results</motion.div>
                  <div className="flex-1 h-px bg-cyber-blue/20" />
                </div>
              </motion.div>
            )}
            {phase === 2 && (
              <motion.div key="rerank" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Cross-Encoder Decision</span>
                </div>
                {[{ label: 'Doc A', score: 0.94, skip: true }, { label: 'Doc B', score: 0.61, skip: false }, { label: 'Doc C', score: 0.88, skip: true }].map((item, i) => (
                  <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} className="flex items-center gap-3">
                    <div className="text-[9px] font-black text-gray-400 w-10">{item.label}</div>
                    <div className="flex-1 h-5 rounded bg-white/5 border border-white/5 overflow-hidden relative">
                      <motion.div animate={{ width: `${item.score * 100}%` }} transition={{ duration: 1, delay: i * 0.2 }} className={`h-full ${item.score >= 0.7 ? 'bg-cyber-blue/50' : 'bg-white/10'} rounded`} />
                    </div>
                    <div className={`text-[9px] font-black w-8 text-right ${item.score >= 0.7 ? 'text-cyber-blue' : 'text-gray-600'}`}>{item.score}</div>
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className={`text-[7px] font-black px-1.5 py-0.5 rounded ${item.skip ? 'bg-green-500/10 border border-green-500/30 text-green-500' : 'bg-white/5 border border-white/10 text-gray-600'}`}>
                      {item.skip ? 'SKIP' : 'RANK'}
                    </motion.div>
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-2 flex items-center justify-center gap-3 px-4 py-2 rounded-xl bg-cyber-blue/5 border border-cyber-blue/20">
                  <Zap className="w-3 h-3 text-cyber-blue" />
                  <span className="text-[9px] font-black text-white">Threshold: 0.7+ → Skip Rerank</span>
                  <span className="text-[9px] font-black text-cyber-blue ml-auto">~15ms</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-deep-blue opacity-30 group-hover:opacity-100 transition-opacity" />
          <AnimatePresence mode="wait">
            <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
              <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
              <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div key={`p-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-deep-blue shadow-deep-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Pillar 3 Specific: Strategic Output Generation Visual ─────── */
export function StrategicOutputVisual() {
  const [phase, setPhase] = useState(0); 
  const [streamText, setStreamText] = useState('');
  const fullText = 'ความเสี่ยงหลัก: คู่แข่ง B มีสภาพคล่องต่ำกว่า 23% ขณะที่ตลาดพลังงานกำลังหดตัว — แนะนำเร่งขยาย Market Share ใน Q2 ก่อนที่จะถูก Consolidate';

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase !== 2) { setStreamText(''); return; }
    let i = 0;
    setStreamText('');
    const t = setInterval(() => {
      i++;
      setStreamText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [phase]);

  const phaseData = [
    { title: 'Adaptive Role-Playing', tag: 'PHASE 01', desc: 'AI สวมบทบาทผู้เชี่ยวชาญตามโจทย์' },
    { title: 'Cross-Concept Synthesis', tag: 'PHASE 02', desc: 'วิเคราะห์จุดเหมือน-ต่าง ข้ามฐานข้อมูล' },
    { title: 'Real-time SSE Streaming', tag: 'PHASE 03', desc: 'Token-by-token — ไหลลื่น ไม่รอ' },
  ];

  const roles = [
    { name: 'Strategic Planner', desc: 'ระบุความเสี่ยงและ Trade-offs' },
    { name: 'Risk Analyst', desc: 'ประเมินภัยคุกคามเชิงตัวเลข' },
    { name: 'Synthesis Expert', desc: 'สังเคราะห์มุมมองหลากแหล่ง' },
  ];

  return (
    <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col shadow-2xl bg-black/40">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
            <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Strategic Output Generation</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{phaseData[phase].tag}</div>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div key="roles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Dynamic Persona Selection</span>
                </div>
                {roles.map((role, i) => (
                  <motion.div key={role.name} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.15 }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl border transition-all ${
                      i === 0 ? 'bg-cyber-blue/10 border-cyber-blue/40 shadow-cyber-glow/10' : 'bg-white/[0.02] border-white/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${
                      i === 0 ? 'bg-cyber-blue/20 border-cyber-blue/40' : 'bg-white/5 border-white/10'
                    }`}>
                      <Bot className={`w-4 h-4 ${i === 0 ? 'text-cyber-blue' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-[9px] font-black uppercase tracking-widest truncate ${i === 0 ? 'text-cyber-blue' : 'text-gray-600'}`}>{role.name}</div>
                      <div className="text-[8px] text-gray-500 truncate">{role.desc}</div>
                    </div>
                    {i === 0 && (
                      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[7px] font-black text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/30 px-2 py-0.5 rounded-full uppercase tracking-widest shrink-0">ACTIVE</motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
            {phase === 1 && (
              <motion.div key="synthesis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Multi-Source Analysis</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Source A', items: ['Q4 Revenue +12%', 'Market Share 18%'], color: 'cyber-blue' },
                    { label: 'Source B', items: ['Cash Flow -8%', 'Debt Ratio 2.1x'], color: 'blue-400' },
                  ].map((src) => (
                    <div key={src.label} className="px-3 py-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className={`text-[7px] font-black uppercase tracking-widest mb-2 ${src.color === 'cyber-blue' ? 'text-cyber-blue' : 'text-blue-400'}`}>{src.label}</div>
                      {src.items.map(item => (
                        <div key={item} className="text-[8px] text-gray-500 font-mono flex items-center gap-1.5 mb-1">
                          <div className={`w-1 h-1 rounded-full shrink-0 ${src.color === 'cyber-blue' ? 'bg-cyber-blue/60' : 'bg-blue-400/60'}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-white/5" />
                  <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1.5, repeat: Infinity }} className="px-3 py-1.5 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-[8px] font-black text-cyber-blue uppercase tracking-widest whitespace-nowrap">Cross-Synthesize ↓</motion.div>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="px-4 py-3 rounded-xl bg-cyber-blue/5 border border-cyber-blue/20">
                  <div className="text-[7px] font-black text-cyber-blue uppercase tracking-widest mb-1.5">New Mental Model</div>
                  <div className="text-[8px] text-gray-300 font-mono leading-relaxed">คู่แข่ง B: สภาพคล่องต่ำ + ตลาดหดตัว = <span className="text-cyber-blue font-bold">โอกาสขยายส่วนแบ่ง</span></div>
                </motion.div>
              </motion.div>
            )}
            {phase === 2 && (
              <motion.div key="streaming" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-3">
                <div className="text-center mb-1">
                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Token-by-Token Streaming</span>
                </div>
                <div className="flex-1 max-h-40 px-4 py-4 rounded-xl bg-black/60 border border-white/5 font-mono text-[9px] relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                    <span className="text-[8px] font-black text-cyber-blue uppercase tracking-widest">SSE Stream Active</span>
                    <span className="ml-auto text-[7px] text-gray-600 font-mono">~15ms latency</span>
                  </div>
                  <div className="text-gray-300 leading-relaxed">
                    {streamText}
                    <motion.span animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} className="text-cyber-blue font-bold">|</motion.span>
                  </div>
                </div>
                <div className="flex items-center gap-1 overflow-hidden px-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div key={i} animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.06 }} className="flex-1 h-5 bg-cyber-blue/30 rounded-sm" />
                  ))}
                  <div className="ml-1 text-[7px] font-black text-cyber-blue uppercase tracking-widest whitespace-nowrap">→ Client</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-30 group-hover:opacity-100 transition-opacity" />
          <AnimatePresence mode="wait">
            <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-1.5">
              <div className="text-[11px] font-black text-white tracking-tight">{phaseData[phase].title}</div>
              <div className="text-[10px] text-gray-500 leading-relaxed">{phaseData[phase].desc}</div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div key={`sp-${phase}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-cyber-blue shadow-cyber-glow" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Pillar 1 Specific: Dynamic Orchestrator Visual ────────────── */
export function OrchestratorVisual() {
  const [stage, setStage] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stageData = [
    { title: "Query Decomposition", desc: "แตกโจทย์ซับซ้อนเป็น Sub-queries หลายมิติ", detail: "ระบบทำหน้าที่เป็น Architect แตกปัญหาใหญ่ออกเป็นส่วนย่อยๆ ที่สืบค้นได้แม่นยำขึ้นโดยอัตโนมัติ", icon: Cpu },
    { title: "Balanced Source Selection", desc: "กลไก Round-robin ป้องกันข้อมูลเอนเอียง", detail: "AI ได้รับมุมมองจากทุกแหล่งข้อมูลอย่างสมดุลก่อนสังเคราะห์คำตอบ", icon: Database },
    { title: "Sufficiency Evaluation", desc: "ประเมินความมั่นใจ (Confidence >= 0.7)", detail: "หากข้อมูลไม่เพียงพอ ระบบจะสร้างคำถามต่อยอดและวนลูปค้นหาเพิ่มจนสมบูรณ์", icon: Zap }
  ];

  return (
    <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col shadow-2xl bg-black/40">
       <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
       <div className="relative z-10 flex flex-col h-full">
         <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
               <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyber-blue" />
               <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Agentic Orchestration</span>
            </div>
            <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">STAGE 0{stage + 1}</div>
         </div>
         <div className="flex-1 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
               {stage === 0 && (
                  <motion.div key="decompose" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                     <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                        <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1.5">Complex Query</div>
                        <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                        <div className="text-[9px] font-mono text-white/60 leading-relaxed">ช่วยวิเคราะห์ความเสี่ยงธุรกิจ...</div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-white/5" />
                        <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1.5, repeat: Infinity }} className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-[8px] font-black text-cyber-blue uppercase tracking-widest whitespace-nowrap">Decompose ↓</motion.div>
                        <div className="flex-1 h-px bg-white/5" />
                     </div>
                     <div className="flex flex-col gap-2">
                        {[{ label: 'Sub-query 1', text: 'แนวโน้มตลาดพลังงาน 2026', delay: 0.1 }, { label: 'Sub-query 2', text: 'งบการเงินคู่แข่ง A & B', delay: 0.3 }, { label: 'Sub-query 3', text: 'ปัจจัยเสี่ยงภูมิรัฐศาสตร์', delay: 0.5 }].map((sq) => (
                          <motion.div key={sq.label} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: sq.delay, type: 'spring', stiffness: 60 }} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-cyber-blue/5 border border-cyber-blue/20">
                             <div className="text-[7px] font-black text-cyber-blue uppercase tracking-widest w-16 shrink-0">{sq.label}</div>
                             <div className="text-[8px] text-gray-400 font-mono truncate">{sq.text}</div>
                             <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: sq.delay }} className="ml-auto w-1.5 h-1.5 rounded-full bg-cyber-blue/60 shrink-0" />
                          </motion.div>
                        ))}
                     </div>
                  </motion.div>
               )}
               {stage === 1 && (
                  <motion.div key="source" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                     <div className="text-center mb-1">
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Round-Robin Protocol</span>
                     </div>
                     {['Finance DB', 'Market Intel', 'News Feed', 'Regulatory', 'Analyst Reports'].map((src, i) => (
                        <motion.div key={src} className="flex items-center gap-3">
                           <div className="text-[8px] font-mono text-gray-500 w-24 shrink-0 truncate">{src}</div>
                           <div className="flex-1 h-5 rounded-md bg-white/5 border border-white/5 overflow-hidden relative">
                              <motion.div animate={{ scaleX: [0, 1, 0], originX: 0 }} transition={{ duration: 5, repeat: Infinity, delay: i * 1, ease: 'easeInOut' }} className="absolute inset-0 bg-cyber-blue/40 rounded-md" />
                              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 1 }} className="absolute inset-0 flex items-center px-2">
                                 <span className="text-[7px] font-black text-cyber-blue uppercase tracking-widest">Querying...</span>
                              </motion.div>
                           </div>
                           <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 1 + 0.8 }} className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                           </motion.div>
                        </motion.div>
                     ))}
                     <motion.div animate={{ scale: [0.98, 1.02, 0.98] }} transition={{ duration: 2, repeat: Infinity }} className="mt-2 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/5 border border-cyber-blue/20 text-[8px] font-black text-cyber-blue uppercase tracking-widest">
                        <CheckCircle2 className="w-3 h-3" /> Unbiased — All Sources Equal
                     </motion.div>
                  </motion.div>
               )}
               {stage === 2 && (
                  <motion.div key="evaluate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center gap-4">
                     <div className="text-center mb-1">
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Confidence Check Loop</span>
                     </div>
                     <div className="relative flex flex-col items-center gap-3">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute w-36 h-36 rounded-full border-t-2 border-cyber-blue/30" style={{ background: 'conic-gradient(from 0deg, rgba(6,182,212,0.08) 0deg, transparent 80deg)' }} />
                        <div className="w-28 h-28 rounded-full bg-black/60 border border-cyber-blue/20 flex flex-col items-center justify-center backdrop-blur-xl relative z-10">
                           <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-3xl font-black text-cyber-blue">0.87</motion.div>
                           <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest">Confidence</div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-3 mt-1">
                        <div className="flex flex-col gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                           <div className="text-[7px] font-black text-gray-500 uppercase tracking-wider">Score &lt; 0.7</div>
                           <div className="text-[8px] font-bold text-amber-400/80">→ สร้าง Follow-up</div>
                           <div className="text-[7px] text-gray-600 font-mono">→ วนลูปค้นหาเพิ่ม</div>
                        </div>
                        <div className="flex flex-col gap-1.5 px-3 py-2.5 rounded-xl bg-green-500/5 border border-green-500/20">
                           <div className="text-[7px] font-black text-gray-500 uppercase tracking-wider">Score ≥ 0.7</div>
                           <div className="text-[8px] font-bold text-green-400">→ ผ่านเกณฑ์</div>
                           <div className="text-[7px] text-gray-600 font-mono">→ Synthesize</div>
                        </div>
                     </div>
                     <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-[9px] font-black text-green-500 uppercase tracking-widest">
                        <CheckCircle2 className="w-3 h-3" /> Target Met — Proceeding to Output
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
         <div className="mt-6 p-5 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-30 group-hover:opacity-100 transition-opacity" />
            <AnimatePresence mode="wait">
               <motion.div key={stage} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-2">
                  {(() => {
                    const StageIcon = stageData[stage].icon;
                    return (
                      <div className="flex items-center gap-3">
                         <div className="p-2 rounded-xl bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 shrink-0"><StageIcon className="w-4 h-4" /></div>
                         <div>
                           <div className="text-[11px] font-black text-white tracking-tight">{stageData[stage].title}</div>
                           <div className="text-[9px] text-cyber-blue font-black uppercase tracking-widest">{stageData[stage].desc}</div>
                         </div>
                      </div>
                    );
                  })()}
                  <p className="text-[9px] text-gray-500 leading-relaxed pl-11">{stageData[stage].detail}</p>
               </motion.div>
            </AnimatePresence>
            <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
               <motion.div key={`prog-${stage}`} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }} className="h-full bg-cyber-blue shadow-cyber-glow" />
            </div>
         </div>
       </div>
    </div>
  );
}

/* ─── Top Level Layer: Interactive Showcase ─────────────────────── */
export function AiShowcase({ steps }: { steps: any[] }) {
  const [activeStep, setActiveStep] = useState(0);
  
  const visuals = [
    (
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-6">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-3 text-[9px] font-black text-gray-500 uppercase tracking-widest">
            <motion.div animate={{scale:[1,1.4,1],opacity:[0.4,1,0.4]}} transition={{duration:1.5,repeat:Infinity}} className="w-1.5 h-1.5 rounded-full bg-cyber-blue"/>
            Incoming Strategic Query
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-cyber-blue/30 font-mono text-sm text-cyber-blue leading-relaxed relative overflow-hidden">
            <motion.div animate={{x:['-100%','200%']}} transition={{duration:3,repeat:Infinity,ease:'linear'}} className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-cyber-blue/10 to-transparent"/>
            &quot;ช่วยวิเคราะห์ความเสี่ยงธุรกิจพลังงานในปี 2026 เมื่อเทียบกับคู่แข่ง A และ B&quot;
          </div>
        </div>
        <div className="w-full max-w-md grid grid-cols-3 gap-3">
          {[{icon:Cpu,label:'Strategic Planner'},{icon:Database,label:'Risk Analyst'},{icon:Zap,label:'Synthesis Expert'}].map((r,i)=>(
            <motion.div key={r.label} initial={{y:12,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3+i*0.15}} className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-center ${i===0?'bg-cyber-blue/10 border-cyber-blue/40':'bg-white/[0.02] border-white/5'}`}>
              <r.icon className={`w-5 h-5 ${i===0?'text-cyber-blue':'text-gray-600'}`}/>
              <span className={`text-[8px] font-black uppercase leading-tight ${i===0?'text-cyber-blue':'text-gray-600'}`}>{r.label}</span>
              {i===0&&<motion.div animate={{opacity:[0.5,1,0.5]}} transition={{duration:1.5,repeat:Infinity}} className="text-[7px] text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/20 px-1.5 rounded-full uppercase">Active</motion.div>}
            </motion.div>
          ))}
        </div>
      </div>
    ),
    (
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-5">
        <div className="w-full max-w-md px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
          <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest shrink-0">Complex Query</div>
          <div className="flex-1 h-1.5 bg-white/10 rounded-full"><div className="h-full w-3/4 bg-white/20 rounded-full"/></div>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <div className="flex-1 h-px bg-white/5"/>
          <motion.div animate={{scale:[0.95,1.05,0.95]}} transition={{duration:1.5,repeat:Infinity}} className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-[9px] font-black text-cyber-blue uppercase whitespace-nowrap">Architect Decompose ↓</motion.div>
          <div className="flex-1 h-px bg-white/5"/>
        </div>
        <div className="flex flex-col gap-2.5 w-full max-w-md">
          {[{l:'Sub-query 1',t:'แนวโน้มตลาดพลังงาน 2026',d:0.1},{l:'Sub-query 2',t:'งบการเงินคู่แข่ง A & B',d:0.25},{l:'Sub-query 3',t:'ปัจจัยเสี่ยงภูมิรัฐศาสตร์',d:0.4}].map(sq=>(
            <motion.div key={sq.l} initial={{x:-16,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:sq.d,type:'spring',stiffness:60}} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-cyber-blue/5 border border-cyber-blue/20">
              <div className="text-[8px] font-black text-cyber-blue uppercase w-16 shrink-0">{sq.l}</div>
              <div className="text-[9px] text-gray-400 font-mono">{sq.t}</div>
              <motion.div animate={{opacity:[0.2,1,0.2]}} transition={{duration:2,repeat:Infinity,delay:sq.d}} className="ml-auto w-1.5 h-1.5 rounded-full bg-cyber-blue/60 shrink-0"/>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    (
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-5">
        <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Parallel Hybrid Search</div>
        <div className="w-full max-w-md space-y-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5"><div className="px-2 py-0.5 rounded bg-cyber-blue/20 border border-cyber-blue/30 text-[8px] font-black text-cyber-blue uppercase">Semantic GPU</div></div>
            <div className="relative h-8 rounded-lg bg-white/5 border border-cyber-blue/20 overflow-hidden">
              <motion.div animate={{x:['-100%','100%']}} transition={{duration:2,repeat:Infinity,ease:'linear'}} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent"/>
              <div className="absolute inset-0 flex items-center px-3 gap-1">
                {[1,0.6,0.9,0.4,0.8,0.5,0.95].map((v,i)=>(
                  <motion.div key={i} animate={{opacity:[0.3,v,0.3]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.15}} className="flex-1 bg-cyber-blue rounded-full" style={{height:`${v*16}px`}}/>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5"><div className="px-2 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-[8px] font-black text-blue-400 uppercase">Keyword Match</div></div>
            <div className="relative h-8 rounded-lg bg-white/5 border border-blue-500/20 overflow-hidden">
              <motion.div animate={{x:['-100%','100%']}} transition={{duration:2.5,repeat:Infinity,ease:'linear',delay:0.5}} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"/>
              <div className="absolute inset-0 flex items-center px-3 gap-2">
                {['vc','ai','q4','roi','kpi'].map((kw,i)=>(
                  <motion.div key={kw} animate={{opacity:[0.2,0.8,0.2]}} transition={{duration:2,repeat:Infinity,delay:i*0.3}} className="text-[7px] font-mono text-blue-400/60 bg-blue-500/10 px-1 rounded">{kw}</motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-cyber-blue/20"/>
            <motion.div animate={{scale:[0.97,1.03,0.97]}} transition={{duration:1.5,repeat:Infinity}} className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-[8px] font-black text-cyber-blue uppercase">Merged Results</motion.div>
            <div className="flex-1 h-px bg-cyber-blue/20"/>
          </div>
          <div className="flex gap-2">
            {['3,000+ Sources','HyDE Target','Round-robin'].map(t=>(
              <div key={t} className="flex-1 text-center text-[7px] font-black text-gray-600 uppercase bg-white/[0.02] border border-white/5 rounded-lg py-1.5">{t}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    (
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-5">
        <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Confidence Check Loop</div>
        <div className="relative flex items-center justify-center">
          <motion.div animate={{rotate:360}} transition={{duration:4,repeat:Infinity,ease:'linear'}} className="absolute w-36 h-36 rounded-full border-t-2 border-cyber-blue/30" style={{background:'conic-gradient(from 0deg,rgba(6,182,212,0.08) 0deg,transparent 80deg)'}}/>
          <div className="w-28 h-28 rounded-full bg-black/60 border border-cyber-blue/20 flex flex-col items-center justify-center backdrop-blur-xl z-10">
            <motion.div animate={{opacity:[0.6,1,0.6]}} transition={{duration:1.5,repeat:Infinity}} className="text-3xl font-black text-cyber-blue">0.87</motion.div>
            <div className="text-[7px] font-black text-gray-500 uppercase tracking-widest">Confidence</div>
          </div>
        </div>
        <div className="w-full max-w-md grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5 px-3 py-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[7px] font-black text-gray-500 uppercase">Score &lt; 0.7</div>
            <div className="text-[9px] font-bold text-amber-400">→ สร้าง Follow-up</div>
            <div className="text-[8px] text-gray-600 font-mono">→ วนลูปค้นหาเพิ่ม</div>
          </div>
          <div className="flex flex-col gap-1.5 px-3 py-3 rounded-xl bg-green-500/5 border border-green-500/20">
            <div className="text-[7px] font-black text-gray-500 uppercase">Score ≥ 0.7</div>
            <div className="text-[9px] font-bold text-green-400">→ ผ่านเกณฑ์</div>
            <div className="text-[8px] text-gray-600 font-mono">→ Synthesize</div>
          </div>
        </div>
        <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.5}} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-[9px] font-black text-green-500 uppercase tracking-widest">
          <CheckCircle2 className="w-3 h-3"/> Target Met — Proceeding to Output
        </motion.div>
      </div>
    ),
    (
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-4">
        <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Real-time SSE Streaming</div>
        <div className="w-full max-w-md px-5 py-4 rounded-2xl bg-black/60 border border-white/5 font-mono text-[10px]">
          <div className="flex items-center gap-2 mb-3">
            <motion.div animate={{opacity:[0.3,1,0.3]}} transition={{duration:1,repeat:Infinity}} className="w-1.5 h-1.5 rounded-full bg-cyber-blue"/>
            <span className="text-[8px] font-black text-cyber-blue uppercase tracking-widest">Strategic Planner · SSE Active</span>
            <span className="ml-auto text-[7px] text-gray-600">~15ms</span>
          </div>
          <div className="text-gray-300 leading-relaxed">
            <span className="text-cyber-blue">[Risk] </span>คู่แข่ง B มีสภาพคล่องต่ำกว่า 23% ขณะที่ตลาดกำลังหดตัว<br/>
            <span className="text-cyber-blue">[Opp] </span>แนะนำเร่งขยาย Market Share ใน Q2
            <motion.span animate={{opacity:[0,1]}} transition={{duration:0.5,repeat:Infinity}} className="text-cyber-blue font-bold">|</motion.span>
          </div>
        </div>
        <div className="w-full max-w-md space-y-2">
          {[{tag:'Risk Identified',val:'Competitor B liquidity -23%',c:'amber'},{tag:'Opportunity',val:'Q2 Market Expansion Window',c:'green'},{tag:'Recommendation',val:'Accelerate before consolidation',c:'cyber'}].map((r,i)=>(
            <motion.div key={r.tag} initial={{x:-12,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.2+i*0.15}} className={`flex items-center gap-3 px-4 py-2 rounded-xl border text-[9px] ${r.c==='amber'?'bg-amber-500/5 border-amber-500/20':r.c==='green'?'bg-green-500/5 border-green-500/20':'bg-cyber-blue/5 border-cyber-blue/20'}`}>
              <div className={`text-[7px] font-black uppercase w-20 shrink-0 ${r.c==='amber'?'text-amber-400':r.c==='green'?'text-green-400':'text-cyber-blue'}`}>{r.tag}</div>
              <div className="text-gray-400 font-mono">{r.val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden relative h-[520px] lg:h-[600px] flex flex-col">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={activeStep} 
            initial={{ opacity: 0, x: 40, scale: 0.95 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            exit={{ opacity: 0, x: -40, scale: 1.05 }} 
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 1
            }} 
            className="absolute inset-0 flex flex-col"
          >
            <div className="flex-[1.2] bg-gradient-to-b from-transparent to-black/40 relative overflow-hidden min-h-0">
              {visuals[activeStep]}
            </div>
            <div className="p-8 lg:p-10 bg-ultra-dark/95 backdrop-blur-2xl border-t border-white/5 space-y-4 shrink-0">
              <div className="space-y-1">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-cyber-blue text-[10px] font-black uppercase tracking-[0.25em]"
                >
                  {steps[activeStep].subtitle}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-black text-white leading-tight"
                >
                  {steps[activeStep].title}
                </motion.h3>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-sm lg:text-base leading-relaxed line-clamp-3"
              >
                {steps[activeStep].desc}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative flex items-center justify-between h-16 mt-4">
        <div className="flex gap-2.5">
          {steps.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)} 
              className={`h-1.5 transition-all duration-500 rounded-full active:scale-90 ${activeStep === i ? 'w-12 bg-cyber-blue shadow-cyber-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} 
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-cyber-blue/30 transition-all active:scale-75 hover:scale-105">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all shadow-cyber-glow/10 active:scale-75 hover:scale-105">→</button>
        </div>
      </div>
    </div>
  );
}
