'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Database, Cpu, Link as LinkIcon, ArrowLeft, MousePointer2 } from 'lucide-react';
import Link from 'next/link';

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

function AppliedIn({ items }: { items: string[] }) {
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
      <div className="flex flex-wrap gap-3">
        {items.map((name) => (
          <span key={name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-cyber-blue/20 text-cyber-blue text-xs font-medium cursor-pointer transition-colors hover:bg-cyber-blue/10">
            <LinkIcon className="w-3 h-3" /> {name}
          </span>
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
             "ช่วยวิเคราะห์ความเสี่ยงธุรกิจพลังงานในปี 2026 เมื่อเทียบกับคู่แข่ง A และ B"
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] text-white">Sub-query 1: แนวโน้มตลาด</motion.div>
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="p-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 text-[10px] text-white">Sub-query 2: งบการเงินคู่แข่ง A</motion.div>
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
                "จากข้อมูลข้างต้น ธุรกิจพลังงานในปี 2026 มีความเสี่ยงด้านกฎเกณฑ์ใหม่ 15% อย่างไรก็ตามการปรับตัวของคู่แข่ง B ยังล่าช้ากว่าคุณ..."
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

/* ─── Bottom Layer: Dynamic Workflow Details ────────────────────── */
const workflowData = {
  orchestrator: {
    title: '1. Agentic Orchestrator',
    steps: [
      { id: '01', title: 'Decomposition', desc: 'AI วิเคราะห์เจตนาและแยกงานออกเป็นภารกิจย่อย' },
      { id: '02', title: 'Reasoning Loop', desc: 'ตรวจสอบความสมบูรณ์และวนลูปค้นหาจนมั่นใจ' },
      { id: '03', title: 'Final Execution', desc: 'รวบรวมข้อมูลและสรุปรายงานเชิงกลยุทธ์' }
    ]
  },
  retrieval: {
    title: '2. Hybrid Retrieval',
    steps: [
      { id: '01', title: 'Vector Search', desc: 'สืบค้นความหมายเชิงบริบทผ่าน High-dimensional Vectors' },
      { id: '02', title: 'Keyword Match', desc: 'ดึงข้อมูลที่ตรงตัวเป๊ะๆ ผ่านกลไก BM25 แบบดั้งเดิม' },
      { id: '03', title: 'Reranking', desc: 'จัดอันดับผลลัพธ์ด้วย Cross-Encoder เพื่อความแม่นยำสูงสุด' }
    ]
  },
  generation: {
    title: '3. Strategic Gen',
    steps: [
      { id: '01', title: 'Role Framing', desc: 'สวมบทบาทผู้เชี่ยวชาญตามบริบทของโจทย์ที่ได้รับ' },
      { id: '02', title: 'Evidence Check', desc: 'ตรวจสอบข้อเท็จจริงอ้างอิงตาม Source ที่ดึงมาได้' },
      { id: '03', title: 'Multi-Format', desc: 'สรุปผลลัพธ์เป็นตาราง กราฟ หรือบทสรุปเชิงลึก' }
    ]
  }
};

export default function AiAgentsPage() {
  const [activeSection, setActiveSection] = useState<'orchestrator' | 'retrieval' | 'generation'>('orchestrator');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as any);
          }
        });
      },
      { threshold: 0.5 }
    );

    ['orchestrator', 'retrieval', 'generation'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
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
                <p className="text-gray-400 text-xl leading-relaxed border-l-2 border-cyber-blue/30 pl-6">เราสร้าง "นักวิจัยดิจิทัล" ที่มีกลไกการคิด วิเคราะห์ และสืบค้นข้อมูลเชิงลึกแบบ Multi-hop Retrieval เพื่อให้ได้คำตอบที่แม่นยำระดับธุรกิจ</p>
              </div>

              {/* Quick Nav */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                {[{ id: 'orchestrator', title: 'Orchestrator', icon: Cpu }, { id: 'retrieval', title: 'Retrieval', icon: Database }, { id: 'generation', title: 'Generation', icon: Zap }].map((nav) => (
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

      {/* ─── Layer 2: Technical Deep Dive (Separate Floor) ─── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            {/* Left: Pillars */}
            <div className="lg:w-7/12 space-y-32">
              <div id="orchestrator" className="space-y-8 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center"><Cpu className="w-6 h-6 text-cyber-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">1. Agentic Orchestrator</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Query Decomposition" desc="แตกคำถามซับซ้อนออกเป็นคำถามย่อย หลายมิติที่สืบค้นได้ง่ายขึ้นอัตโนมัติ" />
                  <FeatureItem title="Sufficiency Evaluation" desc="ประเมินความมั่นใจว่าข้อมูลเพียงพอหรือไม่ หากไม่พอจะวนลูปสืบค้นเพิ่มจนสมบูรณ์" />
                </div>
              </div>

              <div id="retrieval" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center"><Database className="w-6 h-6 text-cyber-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">2. Hybrid Precision Retrieval</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="HyDE Embedding" desc="AI จินตนาการคำตอบจำลองล่วงหน้าเพื่อใช้เป็นเป้าหมายในการดึงข้อมูลที่แม่นยำที่สุด" />
                  <FeatureItem title="FAISS + BM25" desc="ผสาน Semantic Search ประมวลผลด้วย GPU กับการค้นหา Keyword Matching ได้อย่างไร้รอยต่อ" />
                </div>
              </div>

              <div id="generation" className="space-y-8 pt-16 border-t border-white/5 scroll-mt-32">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center"><Zap className="w-6 h-6 text-cyber-blue" /></div><h2 className="text-3xl font-bold text-white uppercase tracking-wider">3. Strategic Generation</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureItem title="Adaptive Role-Playing" desc="วิเคราะห์คำถามและปรับบทบาทเป็นผู้เชี่ยวชาญ ระบุความเสี่ยงและสิ่งที่ต้องแลก" />
                  <FeatureItem title="SSE Streaming" desc="สถาปัตยกรรมส่งข้อมูลแบบ Token-by-token มอบประสบการณ์ที่ไหลลื่นและรวดเร็ว" />
                </div>
              </div>
              <div className="mt-24"><AppliedIn items={['BookMind: AI Intelligent Library', 'AI Robot "น้องน่าน"', 'Legal Document Analyzer']} /></div>
            </div>

            {/* Right: Sticky Live Workflow */}
            <div className="lg:w-5/12 lg:sticky lg:top-32 w-full h-fit space-y-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Bot className="w-16 h-16 text-cyber-blue" /></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-cyber-blue mb-4"><MousePointer2 className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">Live Workflow Status</span></div>
                  <AnimatePresence mode="wait">
                    <motion.div key={activeSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-4">{workflowData[activeSection].title}</h4>
                      <div className="space-y-6">
                        {workflowData[activeSection].steps.map((s) => (
                          <div key={s.id} className="flex gap-4">
                            <div className="text-cyber-blue font-mono text-xs pt-1">{s.id}</div>
                            <div className="space-y-1"><div className="text-white font-bold text-xs uppercase tracking-wider">{s.title}</div><p className="text-gray-500 text-[11px] leading-relaxed">{s.desc}</p></div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
