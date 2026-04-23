'use client';
import { motion } from 'framer-motion';
import { Rocket, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  serviceId: string;
  serviceName: string;
  hirePoints?: string[];
  learnPoints?: string[];
  learnPath?: string;
  hirePath?: string;
  dict?: {
    title: { white: string; accent: string; suffix: string };
    subtitle: string;
    hire: { title: string; desc: string; label: string; suitLabel: string };
    learn: { title: string; desc: string; label: string; suitLabel: string };
  };
}

export default function ServiceBottomCTA({ 
  serviceId, 
  serviceName,
  hirePoints = [],
  learnPoints = [],
  learnPath = "/contact",
  hirePath = "/contact",
  dict
}: CTAProps) {
  const content = dict || {
    title: { white: "พร้อมวางรากฐาน", accent: "อัจฉริยะ", suffix: "ให้ธุรกิจคุณหรือยัง?" },
    subtitle: "เลือกก้าวต่อไปที่เหมาะกับเป้าหมายของคุณ",
    hire: {
      title: `จ้างเราทำระบบ ${serviceName} สิ`,
      desc: `ให้เราออกแบบและวางระบบ ${serviceName} ระดับองค์กรที่แม่นยำ ปลอดภัย และปรับแต่งมาเพื่อแก้ปัญหาธุรกิจของคุณโดยเฉพาะ`,
      label: "ปรึกษาเรา",
      suitLabel: "เหมาะสำหรับองค์กรที่"
    },
    learn: {
      title: `มาเรียนการสร้าง ${serviceName} สิ`,
      desc: `เจาะลึกเบื้องหลังการสร้างระบบ ${serviceName} ตั้งแต่ทฤษฎีจนถึงการใช้งานจริงในระดับโปรดักชัน ผ่านหลักสูตรจากประสบการณ์ตรง`,
      label: "สมัครเรียนกับเรา",
      suitLabel: "เหมาะสำหรับผู้ที่"
    }
  };

  return (
    <section id="cta-section" className="py-24 relative overflow-hidden scroll-mt-32">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {content.title.white} <br className="hidden md:block" />
            <span className="text-cyber-blue drop-shadow-cyber-glow">{content.title.accent}</span> {content.title.suffix}
          </h2>
          <p className="text-gray-400 text-lg">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path 1: Implementation (B2B) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="glass-card p-10 rounded-[32px] border border-white/10 h-full flex flex-col justify-between transition-all duration-500 hover:border-cyber-blue/40 hover:bg-cyber-blue/[0.02]">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/20 group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7 text-cyber-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-blue transition-colors">{content.hire.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {content.hire.desc}
                  </p>
                  {hirePoints.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{content.hire.suitLabel}</p>
                      <ul className="space-y-2">
                        {hirePoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                            <div className="w-1 h-1 rounded-full bg-cyber-blue mt-1.5 shrink-0 shadow-cyber-glow" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <Link 
                href={`${hirePath}?source=${serviceId}&intent=hire`}
                className="mt-10 flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-cyber-blue group-hover:text-black transition-all font-bold"
              >
                {content.hire.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Hover Glow Background */}
            <div className="absolute -inset-1 bg-cyber-blue/20 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.div>

          {/* Path 2: Education (Academy) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="glass-card p-10 rounded-[32px] border border-white/10 h-full flex flex-col justify-between transition-all duration-500 hover:border-deep-blue/40 hover:bg-deep-blue/[0.02]">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-deep-blue/10 flex items-center justify-center border border-deep-blue/20 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-deep-blue" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-deep-blue transition-colors">{content.learn.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {content.learn.desc}
                  </p>
                  {learnPoints.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{content.learn.suitLabel}</p>
                      <ul className="space-y-2">
                        {learnPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                            <div className="w-1 h-1 rounded-full bg-deep-blue mt-1.5 shrink-0 shadow-deep-glow" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={() => alert('ยังไม่มีบทเรียนที่พร้อมใช้งาน')}
                className="mt-10 flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-deep-blue group-hover:text-white transition-all font-bold w-full"
              >
                {content.learn.label}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            {/* Hover Glow Background */}
            <div className="absolute -inset-1 bg-deep-blue/20 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
