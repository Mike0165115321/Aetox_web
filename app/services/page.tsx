'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'ai-agents',
    title: 'สร้าง AI ด้วยฐานข้อมูลเฉพาะของคุณ แทนการใช้ AI ทั่วไป ด้วยระบบ RAG',
    highlight: 'RAG (Retrieval-Augmented Generation) คือเทคโนโลยีที่ช่วยให้ AI เข้าถึงฐานข้อมูลเฉพาะของคุณได้ ระบบ RAG รองรับการเพิ่มข้อมูลได้เรื่อยๆไม่จำกัด ทำให้ AI เรียนรู้ได้ตลอดเวลา โดยไม่ต้องเสียเวลาเทรนโมเดล (LLM) ใหม่ทั้งหมด (ประหยัดค่าใช้จ่ายและได้ข้อมูลที่แม่นยำที่สุด)',
    tag: 'Intelligence Layer',
    desc: 'พัฒนาระบบให้เรียนรู้จากแฟ้มข้อมูลจริงของบริษัท ช่วยสแกน วิเคราะห์ และสรุปประเด็นสำคัญ เพื่อตอบคำถามที่ซับซ้อนได้รวดเร็วและอ้างอิงได้จริง',
    suitable: [
      'ระบบ AI ที่ปรับเปลี่ยนได้ตามข้อมูลใหม่ๆ(เรียนรู้ได้ตลอด)',
      'องค์กรที่มีฐานข้อมูลเอกสารมหาศาล',
      'ระบบ AI ตอบคำถามเฉพาะทางได้',
      'ระบบที่ต้องการให้ AI เข้าใจบริบทของธุรกิจคุณได้ดีที่สุด',
    ],
    benefit: 'AI ไม่ต้องเดาจากความรู้เดิม แต่จะไปค้นหาข้อมูลจริงของคุณเพื่อนำมาตอบคำถาม ทำให้ได้คำตอบที่แม่นยำและอ้างอิงได้เสมอ',
    icon: Bot,
    color: 'text-cyber-blue',
    bg: 'bg-cyber-blue/10',
    border: 'border-cyber-blue/20',
    path: '/services/ai-agents'
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    tag: 'Execution Layer',
    desc: 'เปลี่ยนงานซ้ำซ้อนให้เป็นระบบอัตโนมัติที่ทำงานเสถียรและแม่นยำกว่ามนุษย์ ช่วยแก้ปัญหาคอขวด ขจัดข้อผิดพลาด และเพิ่มประสิทธิภาพหน้างานให้ทีมงานของคุณได้โฟกัสกับงานที่สำคัญกว่า',
    suitable: [
      'ธุรกิจที่เบื่อการคีย์งานซ้ำซ้อน',
      'ต้องการลดความผิดพลาดของมนุษย์ให้เป็นศูนย์',
      'ทีมงานที่ต้องการระบบที่ทำงานได้ 24/7'
    ],
    benefit: 'หมดปัญหางานคีย์ข้อมูลที่ล่าช้า ลดต้นทุนแฝงจากความผิดพลาดของมนุษย์ และได้ระบบที่ทำงานสม่ำเสมอตลอด 24 ชั่วโมง',
    icon: Zap,
    color: 'text-deep-blue',
    bg: 'bg-deep-blue/10',
    border: 'border-deep-blue/20',
    path: '/services/automation'
  },
  {
    id: 'web-systems',
    title: 'ระบบที่ออกแบบมาเพื่อธุรกิจคุณ ไม่ใช่ปรับตัวตามซอฟต์แวร์',
    tag: 'Foundation Layer',
    desc: 'พัฒนาเว็บและระบบหลังบ้านแบบครบวงจร รองรับการเติบโต และออกแบบตาม Workflow จริงของธุรกิจคุณ',
    suitable: [
      'ธุรกิจที่ต้องการระบบที่ปรับแต่งได้ 100%',
      'สตาร์ทอัพที่ต้องการระบบที่ขยายตัวได้จริง',
      'องค์กรที่ซอฟต์แวร์สำเร็จรูปไม่ตอบโจทย์'
    ],
    benefit: 'ไม่ต้องฝืนใช้ระบบสำเร็จรูปที่ไม่ตรงกับงานอีกต่อไป',
    icon: Globe,
    color: 'text-cyber-blue',
    bg: 'bg-cyber-blue/10',
    border: 'border-cyber-blue/20',
    path: '/services/web-systems'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar />
      
      <section className="py-24 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              หยุดเสียเวลาให้กับงานที่ <br />
              <span className="text-cyber-blue drop-shadow-cyber-glow">ระบบทำแทนได้</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed max-w-2xl"
            >
              ลดงานคน เพิ่มความเร็วธุรกิจ ด้วย AI และระบบอัตโนมัติที่ออกแบบมาเพื่อคุณโดยเฉพาะ
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <Link href={service.path} className="block h-full">
                  <div className={`h-full glass-card p-10 rounded-3xl border ${service.border} transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:shadow-cyber-glow/10 flex flex-col`}>
                    <div className="flex-1 relative">
                      {service.highlight && (
                        <div className="absolute -top-2 -right-2 group/info z-20">
                           <button 
                             onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                             className="p-2 rounded-full hover:bg-white/5 transition-colors cursor-help"
                           >
                             <HelpCircle className="w-4 h-4 text-gray-600 group-hover/info:text-cyber-blue transition-colors" />
                           </button>
                           {/* Tooltip content */}
                           <div className="absolute right-0 top-10 w-80 p-5 rounded-2xl bg-[#0F172A]/95 backdrop-blur-3xl border border-white/10 opacity-0 group-hover/info:opacity-100 pointer-events-none transition-all transform translate-y-2 group-hover/info:translate-y-0 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                                <p className="text-[11px] font-black text-cyber-blue uppercase tracking-widest">Technical Insights</p>
                              </div>
                              <p className="text-white text-xs leading-relaxed font-semibold">
                                {service.highlight}
                              </p>
                           </div>
                        </div>
                      )}

                      <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 border border-white/5`}>
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      
                      <div className={`${service.color} text-xs font-bold uppercase tracking-widest mb-4`}>
                        {service.tag}
                      </div>
                      
                      <div className="space-y-6 flex-1">
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors leading-tight">
                            {service.title}
                          </h2>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {service.desc}
                          </p>
                        </div>

                        {/* Benefit Card - High Impact */}
                        <div className={`p-6 rounded-2xl border ${service.border} ${service.bg} relative overflow-hidden group/benefit`}>
                           <div className={`absolute left-0 top-0 bottom-0 w-1 ${service.bg.replace('/10', '')} shadow-cyber-glow`} />
                           <p className={`text-[10px] font-black ${service.color} uppercase tracking-[0.2em] mb-3`}>สิ่งที่คุณจะได้รับ</p>
                           <p className="text-white text-base font-black leading-snug italic">
                             &quot;{service.benefit}&quot;
                           </p>
                        </div>

                        {/* Suitable For - Checklist style */}
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                           <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">เหมาะสำหรับ:</p>
                           <ul className="space-y-3">
                              {service.suitable.map((item, idx) => (
                                <li key={idx} className="text-white/90 text-sm font-bold flex items-start gap-3 group/item">
                                  <CheckCircle2 className={`w-5 h-5 mt-0.5 ${service.color} opacity-70 group-hover/item:opacity-100 transition-opacity flex-shrink-0`} />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                           </ul>
                        </div>
                      </div>
                      
                      {/* Action Button - Large & Clear */}
                      <div className="mt-10">
                        <div className={`w-full py-4 px-6 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center gap-3 text-white font-bold transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-[1.02] active:scale-[0.98]`}>
                          ดูรายละเอียดเชิงลึก 
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* Decoration background glow */}
                <div className={`absolute -inset-2 rounded-[40px] ${service.bg} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
