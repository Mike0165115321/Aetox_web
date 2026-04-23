'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
  id: 'ai-agents',
  title: 'สร้าง AI ประจำองค์กรที่รู้ลึกถึงธุรกิจคุณ',
  highlight: 'ข้ามขีดจำกัดแชทบอท สู่ผู้ช่วยตัดสินใจเชิงกลยุทธ์',
  tag: 'Intelligence Layer',
  desc: 'พัฒนาระบบให้เรียนรู้จากแฟ้มข้อมูลจริงของบริษัท ช่วยสแกน วิเคราะห์ และสรุปประเด็นสำคัญ เพื่อตอบคำถามที่ซับซ้อนได้รวดเร็วและอ้างอิงได้จริง',
  benefit: 'คืนเวลาทำงานให้พนักงาน ไม่ต้องจมอยู่กับการงมหาข้อมูลเก่า',
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
                    <div className="flex-1">
                      <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 border border-white/5`}>
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      
                      <div className={`${service.color} text-xs font-bold uppercase tracking-widest mb-4`}>
                        {service.tag}
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors leading-tight">
                        {service.title}
                      </h2>

                      {service.highlight && (
                        <p className={`${service.color} text-sm font-bold mb-4 italic`}>
                          {service.highlight}
                        </p>
                      )}
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      <div className="mt-8 pt-8 border-t border-white/10 mb-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5 relative group/benefit">
                         {/* Accent line on left */}
                         <div className={`absolute left-0 top-8 bottom-8 w-1 ${service.bg.replace('/10', '')} rounded-r-full shadow-cyber-glow`} />
                         
                         <p className={`text-[10px] font-black ${service.color} uppercase tracking-[0.3em] mb-4 flex items-center gap-2 pl-2`}>
                           สิ่งที่คุณจะได้รับ
                         </p>
                         <p className="text-white text-base font-black leading-relaxed pl-2">
                           {service.benefit}
                         </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white text-sm font-bold group-hover:gap-4 transition-all">
                      ดูรายละเอียดเชิงลึก <ArrowRight className={`w-5 h-5 ${service.color}`} />
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
