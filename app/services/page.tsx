'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, CheckCircle2, ArrowRight, Database, Cpu, Share2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-50" />
      <Navbar />
      
      {/* Header */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Core <span className="text-cyber-blue drop-shadow-cyber-glow">Architecture</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            เจาะลึกโซลูชันที่เราออกแบบเพื่อขับเคลื่อนธุรกิจของคุณด้วยเทคโนโลยีระดับสูงสุด
          </motion.p>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai-agents" className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-sm font-bold tracking-widest uppercase">
                <Bot className="w-4 h-4" />
                Intelligence Layer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Custom AI Agents</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                เราสร้าง "สมองกล" ที่ไม่ได้แค่ตอบคำถาม แต่เข้าใจบริบทธุรกิจของคุณอย่างลึกซึ้ง ด้วยเทคโนโลยี RAG (Retrieval-Augmented Generation) ที่เชื่อมต่อกับฐานข้อมูลภายในองค์กรโดยตรง
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "RAG Architecture", desc: "เชื่อมต่อข้อมูล PDF, Doc, Database เข้ากับ AI" },
                  { title: "Custom Logic", desc: "ปรับแต่งตรรกะการคิดให้ตรงตาม SOP ธุรกิจ" },
                  { title: "Data Security", desc: "ระบบทำงานแบบ Private ข้อมูลไม่หลุดออกภายนอก" },
                  { title: "Multi-Language", desc: "รองรับภาษาไทยและอังกฤษระดับ Native" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <CheckCircle2 className="w-5 h-5 text-cyber-blue" />
                      {item.title}
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyber-blue text-xs">AI Robot "น้องน่าน"</span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyber-blue text-xs">Legal Document Analyzer</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 glass-card p-4 rounded-3xl border border-white/20 shadow-cyber-glow">
                <div className="bg-ultra-dark rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                   {/* Decorative AI visual */}
                   <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-transparent" />
                   <Cpu className="w-32 h-32 text-cyber-blue opacity-20 absolute animate-pulse" />
                   <div className="relative z-10 text-center space-y-4">
                      <div className="flex gap-2 justify-center">
                        <div className="h-2 w-12 bg-cyber-blue rounded-full animate-bounce" style={{animationDelay: '0s'}} />
                        <div className="h-2 w-12 bg-cyber-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                        <div className="h-2 w-12 bg-cyber-blue rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
                      </div>
                      <p className="text-cyber-blue font-mono text-sm tracking-tighter">AI AGENT PROCESSING...</p>
                   </div>
                </div>
              </div>
              {/* Background glow */}
              <div className="absolute -inset-4 bg-cyber-blue/10 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Section (Alternated) */}
      <section id="automation" className="py-24 relative z-10 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-blue/10 border border-deep-blue/20 text-deep-blue text-sm font-bold tracking-widest uppercase">
                <Zap className="w-4 h-4" />
                Execution Layer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Workflow Automation</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                เปลี่ยนความวุ่นวายให้เป็นความแม่นยำ 100% เราเชื่อมต่อทุกซอฟต์แวร์ที่คุณใช้เข้าด้วยกัน เพื่อให้งาน Manual ที่น่าเบื่อหายไป และเปลี่ยนเป็นระบบอัตโนมัติที่ทำงานได้ 24/7
              </p>
              
              <ul className="space-y-4">
                {[
                  "API Integration ระหว่าง ERP, CRM และ Social Media",
                  "ระบบออกเอกสารและใบกำกับภาษีอัตโนมัติ",
                  "Data Pipeline สำหรับประมวลผลข้อมูลขนาดใหญ่",
                  "ระบบแจ้งเตือนอัจฉริยะผ่าน Line / Email"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-deep-blue shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-deep-blue text-xs">E-Commerce Auto-Billing</span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-deep-blue text-xs">Real-estate Management System</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
               <div className="glass-card p-10 rounded-3xl border border-white/10 relative group">
                  <Database className="w-20 h-20 text-deep-blue mb-6 group-hover:scale-110 transition-transform" />
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full w-1/3 bg-deep-blue shadow-deep-glow" 
                      />
                    </div>
                    <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                    <div className="h-4 w-5/6 bg-white/5 rounded-full" />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Section (Consistent with others) */}
      <section id="web-systems" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-sm font-bold tracking-widest uppercase">
                <Globe className="w-4 h-4" />
                Foundation Layer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Full-Stack Web Systems</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                สร้างโครงสร้างพื้นฐานดิจิทัลที่มั่นคงและสวยงาม ด้วยเทคโนโลยี Modern Web (Next.js, Tailwind, Cloud) ที่รองรับผู้ใช้งานจำนวนมากและพร้อมเชื่อมต่อกับ AI ในอนาคต
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Next.js Excellence", desc: "ความเร็วระดับสูงสุดเพื่อ SEO และ UX ที่ดีเยี่ยม" },
                  { title: "Cloud Native", desc: "วางระบบบน AWS / Google Cloud รองรับการขยายตัว" },
                  { title: "B2B Security", desc: "ระบบ Login และการจัดการข้อมูลระดับ Enterprise" },
                  { title: "Custom Dashboard", desc: "ระบบจัดการหลังบ้านที่ใช้งานง่ายและทรงพลัง" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <CheckCircle2 className="w-5 h-5 text-cyber-blue" />
                      {item.title}
                    </div>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Applied In</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyber-blue text-xs">Aetox Core Platform</span>
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyber-blue text-xs">Enterprise CRM Dashboard</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="glass-card p-2 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="bg-ultra-dark rounded-2xl p-6 aspect-video">
                  {/* Mock browser window */}
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-1/2 bg-cyber-blue/20 rounded-full" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-white/5 rounded-xl" />
                      <div className="h-20 bg-white/5 rounded-xl" />
                      <div className="h-20 bg-white/5 rounded-xl" />
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full" />
                  </div>
                </div>
                {/* Hover decoration */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Minimal placeholder for missing icon in map
function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
