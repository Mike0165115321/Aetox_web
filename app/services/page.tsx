'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Bot, Zap, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'ai-agents',
    title: 'Custom AI Agents',
    tag: 'Intelligence Layer',
    desc: 'สมองกลอัจฉริยะแบบ Agentic RAG ที่คิดและวิเคราะห์ข้อมูลซับซ้อนเพื่อธุรกิจคุณ',
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
    desc: 'เปลี่ยนงาน Manual ที่น่าเบื่อให้กลายเป็นระบบอัตโนมัติที่ทำงานแม่นยำ 24/7',
    icon: Zap,
    color: 'text-deep-blue',
    bg: 'bg-deep-blue/10',
    border: 'border-deep-blue/20',
    path: '/services/automation'
  },
  {
    id: 'web-systems',
    title: 'Full-Stack Web Systems',
    tag: 'Foundation Layer',
    desc: 'โครงสร้างพื้นฐานดิจิทัลที่สวยงามและรองรับการขยายตัวอย่างไร้ขีดจำกัด',
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
              className="text-5xl md:text-7xl font-black text-white mb-6"
            >
              Our <span className="text-cyber-blue">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              เลือกทางเดินที่คุณต้องการเพื่อปฏิรูปองค์กรของคุณด้วยเทคโนโลยีชั้นนำ
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
                  <div className={`h-full glass-card p-10 rounded-3xl border ${service.border} transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:shadow-cyber-glow/10`}>
                    <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 border border-white/5`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    
                    <div className={`${service.color} text-xs font-bold uppercase tracking-widest mb-4`}>
                      {service.tag}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-500 leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
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
