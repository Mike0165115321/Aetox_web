'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function HeroSection({ dict }: { dict: any }) {
  const content = dict || {
    headline: { white: "Turn Problems Into", accent: "Efficient Systems." },
    description: "เราไม่ได้สร้างแค่ Web Application แต่เราเปลี่ยนปัญหาเดิม ให้กลายเป็นระบบที่ทำงานได้เร็วขึ้น แม่นยำขึ้น และใช้คนน้อยลง",
    cta: { primary: "สำรวจระบบอัจฉริยะ", secondary: "เล่าปัญหาธุรกิจของคุณ" }
  };
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <Image 
            src="/images/1001.svg" 
            alt="Aetox Logo" 
            width={128}
            height={128}
            className="w-24 md:w-32 h-auto mx-auto drop-shadow-cyber-glow"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
        >
          {content.headline.white} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-deep-blue">
            {content.headline.accent}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed whitespace-pre-line"
        >
          {content.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#services" className="px-8 py-3 rounded-full bg-cyber-blue hover:bg-cyber-blue/80 text-white font-semibold transition-all shadow-cyber-glow">
            {content.cta.primary}
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-white/10 hover:border-cyber-blue/50 text-gray-400 transition-all">
            {content.cta.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
