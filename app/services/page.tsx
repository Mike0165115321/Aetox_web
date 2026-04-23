'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, CheckCircle2, Database, Cpu, Link as LinkIcon, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/* ─── Shared badge ────────────────────────────────────────────────── */
function LayerBadge({ icon: Icon, label, color }: { icon: any; label: string; color: 'cyan' | 'blue' }) {
  const cls = color === 'cyan'
    ? 'bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue'
    : 'bg-deep-blue/10 border-deep-blue/20 text-deep-blue';
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-widest uppercase ${cls}`}>
      <Icon className="w-4 h-4" /> {label}
    </div>
  );
}

/* ─── Feature grid item ───────────────────────────────────────────── */
function FeatureItem({ title, desc, color = 'cyan' }: { title: string; desc: string; color?: 'cyan' | 'blue' }) {
  const iconCls = color === 'cyan' ? 'text-cyber-blue' : 'text-deep-blue';
  return (
    <div className="space-y-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
      <div className={`flex items-center gap-2 font-bold text-white`}>
        <CheckCircle2 className={`w-4 h-4 ${iconCls} shrink-0`} />
        {title}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed pl-6">{desc}</p>
    </div>
  );
}

/* ─── Applied-in tags ─────────────────────────────────────────────── */
function AppliedIn({ items, color = 'cyan' }: { items: string[]; color?: 'cyan' | 'blue' }) {
  const tagCls = color === 'cyan'
    ? 'text-cyber-blue border-cyber-blue/20 hover:bg-cyber-blue/10'
    : 'text-deep-blue border-deep-blue/20 hover:bg-deep-blue/10';
  return (
    <div className="pt-6 border-t border-white/5">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
      <div className="flex flex-wrap gap-3">
        {items.map((name) => (
          <span key={name} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border text-xs font-medium cursor-pointer transition-colors ${tagCls}`}>
            <LinkIcon className="w-3 h-3" /> {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Stat pill ───────────────────────────────────────────────────── */
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
      <span className="text-2xl font-black text-cyber-blue">{value}</span>
      <span className="text-xs text-gray-500 mt-1 text-center">{label}</span>
    </div>
  );
}

/* ─── AI visual panel ─────────────────────────────────────────────── */
function AiVisual() {
  const nodes = [
    { cx: '50%', cy: '30%', r: 22, delay: 0 },
    { cx: '20%', cy: '65%', r: 16, delay: 0.4 },
    { cx: '80%', cy: '65%', r: 16, delay: 0.8 },
  ];
  return (
    <div className="relative">
      {/* outer glow */}
      <div className="absolute -inset-8 bg-cyber-blue/10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 glass-card p-1 rounded-3xl border border-cyber-blue/20 shadow-cyber-glow">
        <div className="bg-ultra-dark rounded-[22px] aspect-video relative overflow-hidden flex items-center justify-center">
          {/* grid overlay */}
          <div className="absolute inset-0 bg-cyber-grid bg-[length:24px_24px] opacity-20" />
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/15 via-transparent to-deep-blue/10" />

          {/* SVG node graph */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240">
            {/* connecting lines */}
            <line x1="200" y1="72" x2="80" y2="156" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="200" y1="72" x2="320" y2="156" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            <line x1="80" y1="156" x2="320" y2="156" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.15" />
          </svg>

          {/* Pulse nodes */}
          {nodes.map((n, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: n.cx, top: n.cy, transform: 'translate(-50%, -50%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: n.delay }}
            >
              <div className="rounded-full border border-cyber-blue/60 bg-cyber-blue/10 flex items-center justify-center"
                   style={{ width: n.r * 2, height: n.r * 2 }}>
                <div className="rounded-full bg-cyber-blue/40" style={{ width: n.r * 0.8, height: n.r * 0.8 }} />
              </div>
            </motion.div>
          ))}

          {/* Processing label */}
          <div className="relative z-10 text-center space-y-3 mt-16">
            <div className="flex gap-2 justify-center">
              {[0, 0.15, 0.3].map((d, i) => (
                <motion.div key={i} className="h-1.5 w-10 bg-cyber-blue rounded-full"
                  animate={{ scaleX: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: d }} />
              ))}
            </div>
            <p className="text-cyber-blue font-mono text-xs tracking-widest">AI AGENT PROCESSING</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Automation visual ───────────────────────────────────────────── */
function AutomationVisual() {
  const steps = ['Input Data', 'Transform', 'Validate', 'Deliver'];
  return (
    <div className="glass-card p-8 rounded-3xl border border-deep-blue/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="space-y-5 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-deep-blue/20 border border-deep-blue/30 flex items-center justify-center shrink-0">
              <span className="text-deep-blue font-bold text-xs">{i + 1}</span>
            </div>
            <div className="flex-1 h-8 rounded-lg bg-white/5 overflow-hidden border border-white/5 relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-deep-blue/60 to-cyber-blue/30 rounded-lg"
                initial={{ width: 0 }}
                whileInView={{ width: `${(i + 1) * 22 + 12}%` }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
              />
              <span className="absolute inset-0 flex items-center px-3 text-xs text-gray-300 font-medium">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-8 flex justify-center">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-deep-blue"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
            )}
          </div>
        ))}
        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
          <span>Pipeline Status</span>
          <span className="flex items-center gap-1.5 text-green-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Running 24/7
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Web visual ──────────────────────────────────────────────────── */
function WebVisual() {
  return (
    <div className="glass-card p-2 rounded-3xl border border-white/10 relative overflow-hidden group">
      <div className="bg-ultra-dark rounded-[22px] p-5 aspect-video relative">
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/5 flex items-center px-2">
            <span className="text-gray-600 text-[10px] font-mono">https://aetox.dev/dashboard</span>
          </div>
        </div>
        {/* nav bar mock */}
        <div className="flex gap-4 mb-4 pb-3 border-b border-white/5">
          {['Dashboard', 'Analytics', 'Users', 'Settings'].map((t, i) => (
            <span key={i} className={`text-[10px] font-medium ${i === 0 ? 'text-cyber-blue border-b border-cyber-blue pb-3 -mb-3' : 'text-gray-600'}`}>{t}</span>
          ))}
        </div>
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[['98%', 'Uptime'], ['1.2s', 'Load Time'], ['A+', 'Security']].map(([v, l], i) => (
            <div key={i} className="p-2 rounded-lg bg-white/5 text-center">
              <div className="text-cyber-blue font-black text-sm">{v}</div>
              <div className="text-gray-600 text-[9px]">{l}</div>
            </div>
          ))}
        </div>
        {/* chart mock */}
        <div className="flex items-end gap-1 h-10">
          {[4, 7, 5, 9, 6, 8, 10, 7, 9, 11, 8, 12].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-cyber-blue/30"
              style={{ height: `${h * 7}%` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar />

      {/* ── Page header ── */}
      <section className="py-24 relative z-10 text-center">
        <div className="container mx-auto px-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyber-blue text-sm uppercase tracking-widest font-bold mb-4">What We Build</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-deep-blue">Architecture</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed"
          >
            เจาะลึกโซลูชันที่เราออกแบบเพื่อขับเคลื่อนธุรกิจของคุณด้วยเทคโนโลยีระดับสูงสุด
          </motion.p>
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <StatPill value="3+" label="ด้านความเชี่ยวชาญ" />
            <StatPill value="100%" label="งาน Automation" />
            <StatPill value="24/7" label="ระบบทำงาน" />
            <StatPill value="AI+Web" label="Full Integration" />
          </motion.div>
        </div>
      </section>

      {/* ── AI Agents ── */}
      <section id="ai-agents" className="py-28 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 space-y-8"
            >
              <LayerBadge icon={Bot} label="Intelligence Layer" color="cyan" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  Custom<br /><span className="text-cyber-blue">AI Agents</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  เราสร้าง "สมองกล" ที่ไม่ได้แค่ตอบคำถาม แต่เข้าใจบริบทธุรกิจของคุณอย่างลึกซึ้ง ด้วยเทคโนโลยี RAG ที่เชื่อมต่อกับฐานข้อมูลภายในองค์กรโดยตรง — ปลอดภัย รวดเร็ว แม่นยำ
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureItem title="RAG Architecture" desc="เชื่อมต่อข้อมูล PDF, Doc, Database เข้ากับ LLM โดยตรง" />
                <FeatureItem title="Custom Logic" desc="ปรับแต่งตรรกะการคิดให้ตรงตาม SOP ของธุรกิจคุณ" />
                <FeatureItem title="Data Security" desc="ระบบ Private Deployment ข้อมูลไม่หลุดออกภายนอก" />
                <FeatureItem title="Multi-Language" desc="รองรับภาษาไทยและอังกฤษระดับ Native Speaker" />
              </div>
              <AppliedIn items={['AI Robot "น้องน่าน"', 'Legal Document Analyzer']} color="cyan" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <AiVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Workflow Automation ── */}
      <section id="automation" className="py-28 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 space-y-8"
            >
              <LayerBadge icon={Zap} label="Execution Layer" color="blue" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  Workflow<br /><span className="text-deep-blue">Automation</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  เปลี่ยนความวุ่นวายให้เป็นความแม่นยำ 100% เราเชื่อมต่อทุกซอฟต์แวร์ที่คุณใช้เข้าด้วยกัน เพื่อให้งาน Manual ที่น่าเบื่อหายไปตลอดกาล
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureItem title="API Integration" desc="เชื่อมต่อ ERP, CRM และ Social Media ได้ไร้รอยต่อ" color="blue" />
                <FeatureItem title="Auto-Document" desc="ออกเอกสารและใบกำกับภาษีโดยไม่ต้องแตะเลย" color="blue" />
                <FeatureItem title="Data Pipeline" desc="ประมวลผลข้อมูลขนาดใหญ่ด้วยความเร็วระดับอุตสาหกรรม" color="blue" />
                <FeatureItem title="Smart Alerts" desc="แจ้งเตือนอัจฉริยะผ่าน Line / Email เมื่อมีเหตุการณ์สำคัญ" color="blue" />
              </div>
              <AppliedIn items={['E-Commerce Auto-Billing', 'Real-estate Management System']} color="blue" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <AutomationVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-Stack Web ── */}
      <section id="web-systems" className="py-28 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 space-y-8"
            >
              <LayerBadge icon={Globe} label="Foundation Layer" color="cyan" />
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  Full-Stack<br /><span className="text-cyber-blue">Web Systems</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  สร้างโครงสร้างพื้นฐานดิจิทัลที่มั่นคงและสวยงาม ด้วย Next.js และ Cloud ที่รองรับผู้ใช้งานนับล้าน และพร้อมเชื่อมต่อกับ AI ในทุกระดับ
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureItem title="Next.js Excellence" desc="ความเร็วระดับสูงสุด Lighthouse Score 95+ ทุก Metric" />
                <FeatureItem title="Cloud Native" desc="Deploy บน AWS / Vercel รองรับการขยายตัวแบบ Auto-scale" />
                <FeatureItem title="B2B Security" desc="Auth0, JWT, Rate Limiting และ Encryption มาตรฐานสากล" />
                <FeatureItem title="Custom Dashboard" desc="ระบบ Admin Panel ที่ใช้งานง่ายและรองรับ Real-time Data" />
              </div>
              <AppliedIn items={['Aetox Core Platform', 'Enterprise CRM Dashboard']} color="cyan" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <WebVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-transparent to-deep-blue/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                พร้อมสร้าง<br />
                <span className="text-cyber-blue">Intelligent Ecosystem</span> ของคุณ?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                บอกเราถึงปัญหาที่น่าเบื่อที่สุดขององค์กรคุณ แล้วเราจะออกแบบระบบที่ทำให้มันหายไปตลอดกาล
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyber-blue text-black font-black text-lg hover:shadow-cyber-glow transition-all hover:scale-105"
              >
                เริ่มวางระบบทันที <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
