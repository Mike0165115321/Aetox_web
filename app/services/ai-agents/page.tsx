'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Database, Cpu, Link as LinkIcon, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';

/* ─── Shared UI Components ────────────────────────────────────────── */
function LayerBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue text-sm font-bold tracking-widest uppercase">
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
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

function AppliedIn({ items }: { items: { name: string; link?: string }[] }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
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

/* ─── Top Level Layer: Interactive Showcase ─────────────────────── */
function AiShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Step 01: Query Decomposition",
      subtitle: "วิเคราะห์และแตกโจทย์",
      desc: "เมื่อได้รับคำถามที่ซับซ้อน ระบบจะทำหน้าที่เป็น Architect แตกปัญหาออกเป็นส่วนย่อยๆ เพื่อการค้นหาที่แม่นยำที่สุด",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-cyber-blue/30 mb-8 font-mono text-sm text-cyber-blue">
             &quot;ช่วยวิเคราะห์ความเสี่ยงธุรกิจพลังงานในปี 2026 เมื่อเทียบกับคู่แข่ง A และ B&quot;
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] text-white">Sub-query 1: แนวโน้มตลาด</motion.div>
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] text-white">Sub-query 2: งบการเงินคู่แข่ง A</motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] text-white">Sub-query 3: งบการเงินคู่แข่ง B</motion.div>
          </div>
        </div>
      )
    },
    {
      title: "Step 02: Multi-hop Retrieval",
      subtitle: "สืบค้นข้อมูลเชิงลึก",
      desc: "ระบบจะทำการค้นหาแบบ Hybrid (Semantic + Keyword) ข้ามฐานข้อมูลทุกแหล่ง และตรวจสอบความสมบูรณ์ของข้อมูลแบบ Real-time",
      visual: (
        <div className="relative h-full flex flex-col items-center justify-center p-8">
           <div className="relative w-48 h-48">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-cyber-blue/20 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center"><Database className="w-12 h-12 text-cyber-blue animate-pulse" /></div>
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div key={i} className="absolute w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center" style={{ left: `${50 + 40 * Math.cos(angle * Math.PI / 180)}%`, top: `${50 + 40 * Math.sin(angle * Math.PI / 180)}%`, transform: 'translate(-50%, -50%)' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}>
                  <LinkIcon className="w-4 h-4 text-cyber-blue" />
                </motion.div>
              ))}
           </div>
           <div className="mt-8 text-cyber-blue font-mono text-[10px] animate-pulse uppercase">Searching 3,000+ sources...</div>
        </div>
      )
    },
    {
      title: "Step 03: Strategic Generation",
      subtitle: "สังเคราะห์ผลลัพธ์",
      desc: "AI สวมบทบาทผู้เชี่ยวชาญ สรุปคำตอบพร้อมระบุความเสี่ยงและข้อเสนอแนะที่นำไปใช้งานจริงได้ทันที",
      visual: (
        <div className="relative h-full flex flex-col justify-center p-8">
           <div className="space-y-4">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" /><span className="text-[10px] text-gray-400 font-mono uppercase">Strategic Report Ready</span></div>
              <div className="space-y-2 border-l border-cyber-blue/30 pl-4">
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-2 w-full bg-white/10 rounded" />
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="h-2 w-5/6 bg-white/10 rounded" />
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="h-2 w-4/6 bg-cyber-blue/20 rounded" />
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 leading-relaxed italic">
                &quot;จากข้อมูลข้างต้น ธุรกิจพลังงานในปี 2026 มีความเสี่ยงด้านกฎเกณฑ์ใหม่ 15% อย่างไรก็ตามการปรับตัวของคู่แข่ง B ยังล่าช้ากว่าคุณ...&quot;
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <div className="glass-card rounded-[32px] border border-white/10 overflow-hidden relative aspect-square lg:h-[500px]">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col">
            <div className="flex-1 bg-gradient-to-b from-transparent to-black/40">{steps[activeStep].visual}</div>
            <div className="p-8 bg-ultra-dark/90 backdrop-blur-xl border-t border-white/5 space-y-4">
              <div><span className="text-cyber-blue text-[10px] font-black uppercase tracking-[0.2em]">{steps[activeStep].subtitle}</span><h3 className="text-2xl font-bold text-white mt-1">{steps[activeStep].title}</h3></div>
              <p className="text-gray-400 text-sm leading-relaxed">{steps[activeStep].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between gap-4 px-2">
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button key={i} onClick={() => setActiveStep(i)} className={`h-1.5 transition-all duration-500 rounded-full ${activeStep === i ? 'w-12 bg-cyber-blue shadow-cyber-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`} />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-cyber-blue/30 transition-all">←</button>
          <button onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all shadow-cyber-glow/10">→</button>
        </div>
      </div>
    </div>
  );
}

export default function AiAgentsPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar />

      {/* ─── Layer 1: Intro (Hero + Showcase Together) ─── */}
      <section className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyber-blue transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left: Hero Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <LayerBadge icon={Bot} label="Intelligence Layer" />
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Advanced Agentic<br /><span className="text-cyber-blue drop-shadow-cyber-glow">RAG System</span></h1>
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-cyber-blue/30 pl-6">ยกระดับจาก &apos;แชทบอททั่วไป&apos; สู่ &apos;สมองกลประจำองค์กร&apos; ที่ถูกสร้างมาเพื่อเชื่อมต่อกับฐานข้อมูลของคุณโดยเฉพาะ ช่วยคิด วิเคราะห์ และตัดสินใจแก้ปัญหาซับซ้อนได้อย่างแม่นยำ</p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-8 py-4 rounded-full bg-cyber-blue text-black font-black text-lg hover:shadow-cyber-glow transition-all active:scale-95 flex items-center gap-3 group shadow-cyber-glow/20"
                >
                  สนใจ RAG System
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[
                  { id: 'orchestrator', title: 'สมองกล', icon: Cpu }, 
                  { id: 'retrieval', title: 'การสืบค้น', icon: Database }, 
                  { id: 'generation', title: 'การสังเคราะห์', icon: Zap }
                ].map((nav) => (
                  <button key={nav.id} onClick={() => scrollToSection(nav.id)} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all text-left group">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-cyber-blue transition-colors"><nav.icon className="w-4 h-4" /></div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{nav.title}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive Showcase */}
            <div className="lg:w-1/2 w-full"><AiShowcase /></div>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="container mx-auto"><div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

      {/* ─── Layer 2: Technical Deep Dive ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          {/* Technical Deep Dive - Each Pillar has its own Side-by-Side Visual */}
          <div className="space-y-40">
            
            {/* Pillar 1: Agentic Orchestrator */}
            <div id="orchestrator" className="flex flex-col lg:flex-row gap-20 items-center scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">1. ระบบสมองกลวิเคราะห์และวางแผน (Agentic Orchestrator)</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
                    ระบบถูกออกแบบให้คิดและทำงานเป็นลูป (Loop) เหมือนมนุษย์ แทนที่จะค้นหาเพียงครั้งเดียว
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Query Decomposition" desc="เมื่อเจอคำถามซับซ้อนเชิงกลยุทธ์ ระบบจะแตกคำถามใหญ่ออกเป็นคำถามย่อย (Sub-queries) หลายมิติที่สืบค้นได้ง่ายขึ้นโดยอัตโนมัติ" />
                  <FeatureItem title="Sufficiency Evaluation" desc="ประเมินความมั่นใจว่าข้อมูลเพียงพอหรือไม่ (Confidence >= 0.7) หากไม่พอจะสร้างคำถามต่อยอดและวนลูปค้นหาเพิ่มจนสมบูรณ์" />
                  <FeatureItem title="Balanced Source Selection" desc="ป้องกันข้อมูลเอนเอียง โดยใช้กลไก Round-robin เพื่อให้แน่ใจว่า AI ได้รับมุมมองจากทุกแหล่งข้อมูลอย่างสมดุลก่อนสังเคราะห์คำตอบ" />
                </div>
              </div>
              
              {/* Visual 1 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                       <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Logic Flow Processing</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-40 h-40 border border-cyber-blue/20 rounded-full border-dashed" />
                      <div className="relative z-10 p-6 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/30">
                         <Cpu className="w-12 h-12 text-cyber-blue" />
                      </div>
                      {[0, 90, 180, 270].map((deg) => (
                        <motion.div key={deg} animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: deg/100 }} className="absolute" style={{ transform: `rotate(${deg}deg) translateY(-60px)` }}>
                           <div className="w-2 h-2 rounded-full bg-cyber-blue" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-8 space-y-2">
                       <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase"><span>Task Status</span><span>92% Analyzed</span></div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><motion.div animate={{ width: ['0%', '92%', '92%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-cyber-blue shadow-cyber-glow" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Hybrid Precision Retrieval */}
            <div id="retrieval" className="flex flex-col lg:flex-row-reverse gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Database className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">2. กลไกสืบค้นความแม่นยำสูง (Hybrid Precision Retrieval)</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
                    ทลายข้อจำกัดการค้นหาด้วยคีย์เวิร์ดแบบเดิมๆ ด้วยการผสาน 3 สถาปัตยกรรมระดับโลกเข้าด้วยกัน
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="HyDE Embedding" desc="AI จินตนาการคำตอบจำลองล่วงหน้าเพื่อใช้เป็นเป้าหมายในการดึงข้อมูลที่แม่นยำที่สุด" />
                  <FeatureItem title="Hybrid Search" desc="ผสานการค้นหาเชิงความหมายประมวลผลด้วย GPU กับการค้นหา Keyword Matching ทำให้ระบบเข้าใจทั้งบริบทและศัพท์เฉพาะทาง" />
                  <FeatureItem title="Adaptive Reranking" desc="จัดอันดับอัจฉริยะด้วย Cross-Encoder หากผลลัพธ์ชัดเจนจะข้ามการจัดอันดับเพื่อความเร็ว (~15ms)" />
                </div>
              </div>

              {/* Visual 2 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl bg-black/20">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                       <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Vector Space Scanning</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-4">
                       {[45, 72, 38, 65].map((w, i) => (
                         <div key={i} className="relative h-6 bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                            <motion.div animate={{ x: ['-100%', '300%'] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }} className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent" />
                            <div className="absolute inset-0 flex items-center px-4 gap-2">
                               <div className="w-1 h-1 rounded-full bg-cyber-blue/60" />
                               <div className="h-1 bg-white/10 rounded-full" style={{ width: `${w}%` }} />
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between p-4 rounded-xl bg-cyber-blue/5 border border-cyber-blue/20">
                       <div className="flex items-center gap-3">
                          <Database className="w-4 h-4 text-cyber-blue" />
                          <span className="text-[10px] font-mono text-white">Latency: ~15ms</span>
                       </div>
                       <div className="text-[10px] font-mono text-cyber-blue">MATCH FOUND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Strategic Output Generation */}
            <div id="generation" className="flex flex-col lg:flex-row gap-20 items-center pt-24 border-t border-white/5 scroll-mt-32">
              <div className="lg:w-7/12 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white uppercase tracking-wider">3. การสังเคราะห์ข้อมูลเชิงกลยุทธ์ (Strategic Output Generation)</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6">
                    ผลลัพธ์ไม่ใช่แค่การสรุปความ แต่เป็นการให้คำปรึกษาทางธุรกิจระดับสูง
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Adaptive Role-Playing" desc="AI จะปรับบทบาทตัวเองตามโจทย์ เช่น สวมบทบาทนักวางแผนที่สามารถระบุความเสี่ยงและสิ่งที่ต้องแลกได้อย่างเฉียบขาด" />
                  <FeatureItem title="Cross-Concept Synthesis" desc="ระบบสามารถวิเคราะห์จุดเหมือน จุดต่าง และสังเคราะห์โมเดลความคิดใหม่ๆ แบบข้ามฐานข้อมูลได้" />
                  <FeatureItem title="Real-time SSE Streaming" desc="สถาปัตยกรรมการส่งข้อมูลแบบ Token-by-token มอบประสบการณ์การตอบสนองที่ไหลลื่นและรวดเร็ว" />
                </div>
              </div>

              {/* Visual 3 */}
              <div className="lg:w-5/12 w-full">
                <div className="glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden aspect-square flex flex-col justify-between shadow-2xl">
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                       <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                       <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">Strategic Insight Generation</span>
                    </div>
                    <div className="flex-1 bg-black/40 rounded-2xl border border-white/5 p-6 font-mono text-[10px] text-gray-400 space-y-4 overflow-hidden relative">
                       <div className="flex gap-2 items-center text-cyber-blue mb-4">
                          <Bot className="w-4 h-4" />
                          <span className="animate-pulse">Synthesizing final report...</span>
                       </div>
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} className="space-y-2">
                          <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                          <div className="h-2 w-full bg-white/10 rounded-full" />
                          <div className="h-2 w-1/2 bg-cyber-blue/20 rounded-full" />
                          <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                       </motion.div>
                       <div className="absolute bottom-6 right-6 p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30">
                          <Zap className="w-5 h-5 text-cyber-blue shadow-cyber-glow" />
                       </div>
                    </div>
                    <div className="mt-8 flex gap-2">
                       {[1, 2, 3, 4].map(i => (
                         <motion.div key={i} animate={{ height: [10, 25, 10] }} transition={{ duration: 1.5, repeat: Infinity, delay: i*0.2 }} className="flex-1 bg-cyber-blue/40 rounded-t-sm" />
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <AppliedIn items={[
                { name: 'BookMind: AI Intelligent Library', link: 'https://github.com/Mike0165115321/BookMind.git' },
                { name: 'AI Robot &quot;น้องน่าน&quot;', link: 'https://github.com/Mike0165115321/AI-Robot-Guide-.git' },
                { name: 'Legal Document Analyzer' }
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <ServiceBottomCTA 
        serviceId="ai-agents" 
        serviceName="Agentic RAG Systems" 
        hirePoints={[
          "มีฐานข้อมูลเอกสารมหาศาลที่ต้องการระบบสืบค้นอัจฉริยะ",
          "ต้องการความแม่นยำสูงสุดและลดปัญหา AI หลอน (Hallucination)",
          "ต้องการระบบที่สามารถวิเคราะห์และวางแผนงานเองได้อัตโนมัติ"
        ]}
        learnPoints={[
          "Software Architect ที่ต้องการยกระดับทักษะการออกแบบ AI",
          "นักพัฒนาที่ต้องการเข้าใจกลไก Agentic RAG ตั้งแต่ฐานราก",
          "ทีมเทคนิคที่ต้องการสร้างระบบ AI ใช้งานเองภายในองค์กร"
        ]}
      />

      <Footer />
    </main>
  );
}
