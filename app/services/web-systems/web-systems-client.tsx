'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, ArrowLeft, Laptop, Server, Rocket, MousePointer2, 
  ArrowRight, Shield
} from 'lucide-react';
import Link from 'next/link';
import ServiceBottomCTA from '@/components/ServiceBottomCTA';
import ArchitectureBuilder from './components/architecture-builder';

// Extracted Components
import { FeatureItem, AppliedIn } from './components/shared-components';
import { StackArchitectureVisual, DataPipelineVisual, SecurityShieldVisual } from './components/web-visuals';
import WebShowcase from './components/web-showcase';

export default function WebSystemsClient({ dict, navDict }: { dict: any, navDict: any }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    { id: 'hero', label: 'แนะนำระบบ', num: '01', icon: <Globe size={16} /> },
    { id: 'solution-design', label: 'ออกแบบโซลูชัน', num: '02', icon: <Laptop size={16} /> },
    { id: 'arch', label: 'สถาปัตยกรรม', num: '03', icon: <Server size={16} /> },
    { id: 'perf', label: 'ประสิทธิภาพ', num: '04', icon: <Rocket size={16} /> },
    { id: 'sec', label: 'ความปลอดภัย', num: '05', icon: <Shield size={16} /> },
    { id: 'cta-section', label: 'ติดต่อเรา', num: '06', icon: <ArrowRight size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-30" />
      <Navbar dict={navDict.navbar} />

      {/* ─── Floating Cyber-Control Sidebar ─── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[90] hidden xl:block">
        <div className="glass-card p-3 rounded-[32px] border border-white/10 backdrop-blur-3xl shadow-2xl bg-black/40 flex flex-col gap-2 relative group/nav">
          <div className="absolute -inset-1 bg-gradient-to-b from-cyber-blue/20 to-transparent rounded-[34px] opacity-0 group-hover/nav:opacity-100 transition-opacity blur-lg pointer-events-none" />
          
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className="relative flex items-center group/item"
            >
              <AnimatePresence>
                {hoveredSection === section.id && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-14 pointer-events-none"
                  >
                    <div className="glass-card px-4 py-2 rounded-xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl">
                      <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest block mb-0.5">{section.num}</span>
                      <span className="text-xs font-bold text-white whitespace-nowrap">{section.label}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                animate={{
                  backgroundColor: activeSection === section.id ? '#06B6D4' : 'rgba(255, 255, 255, 0.05)',
                  color: activeSection === section.id ? '#000000' : '#9CA3AF',
                  borderColor: activeSection === section.id ? '#06B6D4' : 'rgba(255, 255, 255, 0.05)',
                  scale: activeSection === section.id ? 1.1 : 1
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center border relative"
              >
                {section.icon}
                {activeSection === section.id && (
                  <motion.div 
                    layoutId="nav-active" 
                    className="absolute -inset-2 border border-cyber-blue/50 rounded-[20px] bg-cyber-blue/5"
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.5
                    }}
                  />
                )}
              </motion.div>
            </button>
          ))}
        </div>
      </div>

      {/* ─── Layer 1: Strategic Hero ─── */}
      <section id="hero" className="relative min-h-[80vh] pt-12 pb-20 overflow-hidden scroll-mt-20">
        <div className="container mx-auto">
          <Link href="/services" className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyber-blue/30 transition-all mb-10 group backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm font-bold tracking-wide">กลับสู่หน้าบริการ</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:w-7/12 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-cyber-blue tracking-[0.1em]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-cyber-glow" />
                  {dict.hero.badge}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.2]">
                  {dict.hero.title.white}<br />
                  <span className="text-cyber-blue">{dict.hero.title.accent}</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium max-w-xl">
                  {dict.hero.description}
                </p>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 pt-2">
                <button 
                  onClick={() => scrollToSection('cta-section')}
                  className="px-10 py-5 rounded-full bg-cyber-blue text-black font-black text-xl hover:shadow-cyber-glow transition-all active:scale-95 flex items-center gap-4 group shadow-cyber-glow/20"
                >
                  {dict.hero.cta}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => scrollToSection('solution-design')}
                  className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-black text-xl hover:bg-white/10 transition-all active:scale-95 flex items-center gap-4 group"
                >
                  ดูตัวอย่างระบบ
                </button>
              </motion.div>
            </motion.div>
            <div className="lg:w-5/12 w-full"><WebShowcase steps={dict.showcase} /></div>
          </div>
        </div>
      </section>

      {/* ─── Layer 2: Solution Design ─── */}
      <section id="solution-design" className="pt-12 pb-24 relative z-10 overflow-hidden scroll-mt-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12 space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 text-cyber-blue font-bold text-[11px] tracking-[0.3em] uppercase bg-cyber-blue/5 px-4 py-2 rounded-full border border-cyber-blue/20">
                  <MousePointer2 size={14} className="animate-pulse" /> Interactive Designer
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                  ออกแบบ <span className="text-cyber-blue drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">Architecture</span><br />ที่เหมาะกับธุรกิจคุณ
                </h2>
                <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-xl">
                  ลองเลือกประเภทธุรกิจของคุณเพื่อจำลองการวางโครงสร้างระบบระดับ Enterprise ที่เราออกแบบให้
                </p>
              </div>
            </div>
            <div className="lg:w-7/12 w-full">
              <ArchitectureBuilder />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Strategic Architecture */}
      <section id="arch" className="pt-12 pb-24 relative z-10 scroll-mt-32 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-7/12 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                    <Server className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar1.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium text-base">
                  {dict.pillars.pillar1.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dict.pillars.pillar1.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <StackArchitectureVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: High Performance Core */}
      <section id="perf" className="pt-12 pb-24 relative z-10 scroll-mt-32 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-7/12 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar2.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium text-base">
                  {dict.pillars.pillar2.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dict.pillars.pillar2.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <DataPipelineVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Enterprise Security */}
      <section id="sec" className="pt-12 pb-24 relative z-10 scroll-mt-32 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-7/12 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{dict.pillars.pillar3.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed border-l-2 border-cyber-blue/30 pl-6 font-medium text-base">
                  {dict.pillars.pillar3.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {dict.pillars.pillar3.features.map((f: any, i: number) => (
                  <FeatureItem key={i} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <SecurityShieldVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Applied In Section */}
      <section className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto">
          <AppliedIn items={dict.appliedIn} label="Applied In" />
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section id="cta-section" className="scroll-mt-20">
        <ServiceBottomCTA 
          serviceId="web-systems" 
          serviceName="Web Systems" 
          hirePoints={dict.cta.hirePoints}
          learnPoints={dict.cta.learnPoints}
        />
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
