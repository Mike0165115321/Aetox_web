'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* โลโก้ SVG Aetox จะวางตรงนี้ */}
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
        >
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-deep-blue">
            Intelligent Ecosystems
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
        >
          เราไม่ได้สร้างแค่ Web Application แต่เราพัฒนาระบบนิเวศดิจิทัลแบบครบวงจร 
          ที่ผสาน <span className="text-cyber-blue font-semibold">สมองกล AI</span>, <span className="text-deep-blue font-semibold">สถาปัตยกรรมฐานข้อมูล</span>, 
          และ <span className="text-cyber-blue font-semibold">Workflow Automation</span> เข้าด้วยกัน 
          เพื่อขจัดงานซ้ำซ้อนและปลดล็อกศักยภาพธุรกิจคุณอย่างไร้ขีดจำกัด
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#services" className="px-8 py-3 rounded-full bg-cyber-blue hover:bg-cyber-blue/80 text-white font-semibold transition-all shadow-cyber-glow">
            สำรวจระบบอัจฉริยะ
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-white/10 hover:border-cyber-blue/50 text-gray-400 transition-all">
            เล่าปัญหาธุรกิจของคุณ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
