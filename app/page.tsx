import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';
import PainSection from '@/components/home/PainSection';
import ROIPreview from '@/components/home/ROIPreview';
import SecurityBlock from '@/components/home/SecurityBlock';
import TrustSection from '@/components/home/TrustSection';
import Link from 'next/link';
import { ArrowRight, Sparkles, AlertTriangle, Award, Layers, Calculator, ShieldCheck, MessageSquare } from 'lucide-react';
import { getDictionary } from '@/data/dictionaries';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { bookmind, robotGuide, treesBot } from '@/data/content/th/projects/items';

export default async function Home() {
  const dict = await getDictionary('th', 'home');
  const navDict = await getDictionary('th', 'navigation');

  const homeSections: NavSection[] = [
    { id: 'hero', label: 'Hook (จุดเริ่มต้น)', num: '01', icon: <Sparkles size={18} /> },
    { id: 'pain', label: 'Pain (ปัญหาที่เจอ)', num: '02', icon: <AlertTriangle size={18} />, offset: 60 },
    { id: 'trust', label: 'Trust (ความเชื่อมั่น)', num: '03', icon: <Award size={18} />, offset: 60 },
    { id: 'services', label: 'Proof (ระบบของเรา)', num: '04', icon: <Layers size={18} />, offset: 80 },
    { id: 'roi-calculator', label: 'Money (ความคุ้มค่า)', num: '05', icon: <Calculator size={18} />, offset: 100 },
    { id: 'security', label: 'Logic (ความปลอดภัย)', num: '06', icon: <ShieldCheck size={18} />, offset: 80 },
    { id: 'about', label: 'Close (สรุปผล)', num: '07', icon: <MessageSquare size={18} />, offset: 0 },
  ];

  const featuredProjects = [
    { 
      id: bookmind.id, 
      title: bookmind.title, 
      description: bookmind.description, 
      image: bookmind.image, 
      slug: bookmind.slug, 
      category: bookmind.category 
    },
    { 
      id: robotGuide.id, 
      title: robotGuide.title, 
      description: robotGuide.description, 
      image: robotGuide.image, 
      slug: robotGuide.slug, 
      category: robotGuide.category 
    },
    { 
      id: treesBot.id, 
      title: treesBot.title, 
      description: treesBot.description, 
      image: treesBot.image, 
      slug: treesBot.slug, 
      category: treesBot.category 
    },
  ];

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative">
      <FloatingNav sections={homeSections} />
      
      {/* Global Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />

      <Navbar dict={navDict.navbar} />
      
      {/* 1. Hook (Hero) */}
      <HeroSection dict={dict.hero} />

      {/* 2. Pain (Loss Realization) */}
      <PainSection dict={dict.pain} />

      {/* 3. Trust (Founder & Expertise) */}
      <TrustSection dict={dict.trust} projects={featuredProjects} />

      {/* 4. Proof (Services & Capabilities) */}
      <div id="services">
        <ServiceSection dict={dict.services} />
      </div>

      {/* 4 & 5. Engage & Money (ROI Calculator) */}
      <section id="roi-calculator" className="scroll-mt-20">
        <ROIPreview dict={dict.engagement} />
      </section>

      {/* 6. Logic (Security & Trust) */}
      <SecurityBlock dict={dict.security} />

      {/* 7. Close (Final CTA) */}
      <section id="about" className="py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-cyber-blue/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black tracking-widest uppercase">
              ขั้นตอนสุดท้ายก่อนการตัดสินใจ
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.2]">
              {dict.about.headline.white}<span className="text-cyber-blue">{dict.about.headline.accent}</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto font-medium whitespace-pre-line">
              {dict.about.description}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-cyber-blue text-black font-black text-lg hover:shadow-cyber-glow transition-all border border-cyber-blue/20 active:scale-95">
                เริ่มวางแผนระบบของคุณวันนี้
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/authority" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 text-white font-black text-lg hover:bg-white/10 transition-all border border-white/10 active:scale-95">
                ดูผลงานระดับ Enterprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
