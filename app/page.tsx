import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';
import PainSection from '@/components/home/PainSection';
import ROIPreview from '@/components/home/ROIPreview';
import SecurityBlock from '@/components/home/SecurityBlock';
import TrustSection from '@/components/home/TrustSection';
import ArchitectureComparison from '@/components/home/ArchitectureComparison';
import SystemSimulation from '@/components/home/SystemSimulation';
import Link from 'next/link';
import { ArrowRight, Sparkles, AlertTriangle, Award, Layers, Calculator, ShieldCheck, MessageSquare } from 'lucide-react';
import { getDictionary } from '@/data/dictionaries';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { bookmind, robotGuide, treesBot } from '@/data/content/th/projects/items';

export default async function Home() {
  const dict = await getDictionary('th', 'home');
  const navDict = await getDictionary('th', 'navigation');

  const homeSections: NavSection[] = [
    { id: 'hero', label: 'Command', num: '01', icon: <Sparkles size={18} /> },
    { id: 'pain', label: 'Pain', num: '02', icon: <AlertTriangle size={18} />, offset: 40 },
    { id: 'comparison', label: 'Superiority', num: '03', icon: <Award size={18} />, offset: 60 },
    { id: 'simulation', label: 'Proof', num: '04', icon: <Layers size={18} />, offset: 80 },
    { id: 'roi-calculator', label: 'Decision', num: '05', icon: <Calculator size={18} />, offset: 10 },
    { id: 'security', label: 'Logic', num: '06', icon: <ShieldCheck size={18} />, offset: 80 },
    { id: 'about', label: 'Contact', num: '07', icon: <MessageSquare size={18} />, offset: 65 },
  ];

  const featuredProjects = [
    { id: bookmind.id, title: bookmind.title, description: bookmind.description, image: bookmind.image, slug: bookmind.slug, category: bookmind.category },
    { id: robotGuide.id, title: robotGuide.title, description: robotGuide.description, image: robotGuide.image, slug: robotGuide.slug, category: robotGuide.category },
    { id: treesBot.id, title: treesBot.title, description: treesBot.description, image: treesBot.image, slug: treesBot.slug, category: treesBot.category },
  ];

  return (
    <main className="min-h-screen bg-aetox-bg selection:bg-aetox-accent/30 selection:text-white relative">
      <FloatingNav sections={homeSections} />
      
      <Navbar dict={navDict.navbar} />
      
      {/* 1. Hook (Hero) */}
      <HeroSection dict={dict.hero} />

      {/* 2. Pain (Loss Realization) */}
      <div id="pain">
        <PainSection dict={dict.pain} />
      </div>

      {/* 3. Superiority (Architecture Comparison) */}
      <div id="comparison">
        <ArchitectureComparison />
      </div>

      {/* 4. Proof (System Simulation) */}
      <div id="simulation">
        <SystemSimulation />
      </div>

      {/* 5. Trust (Expertise & Projects) */}
      <TrustSection dict={dict.trust} projects={featuredProjects} />

      {/* 6. Capabilities (Services) */}
      <div id="services">
        <ServiceSection dict={dict.services} />
      </div>

      {/* 7. Decision (ROI Calculator) */}
      <section id="roi-calculator" className="scroll-mt-20">
        <ROIPreview dict={dict.engagement} />
      </section>

      {/* 8. Logic (Security) */}
      <div id="security">
        <SecurityBlock dict={dict.security} />
      </div>

      {/* 9. Final Close */}
      <section id="about" className="py-32 relative z-10 border-t border-aetox-border bg-gradient-to-b from-transparent to-aetox-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aetox-surface border border-aetox-border text-aetox-text-muted text-[8px] font-black tracking-widest uppercase">
              Decision Point
            </div>
            <h2 className="text-fluid-h1 font-black text-aetox-text-main">
              {dict.about.headline.white}<span className="text-aetox-accent">{dict.about.headline.accent}</span>
            </h2>
            <p className="text-fluid-p text-aetox-text-soft mx-auto font-medium whitespace-pre-line">
              {dict.about.description}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-aetox-accent text-white font-black text-xs uppercase tracking-widest hover:bg-aetox-accent-hover shadow-aetox-glow transition-all transform active:scale-95">
                เริ่มวางแผนระบบของคุณ
                <ArrowRight size={16} />
              </Link>
              <Link href="/authority" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-aetox-surface text-aetox-text-main font-black text-xs uppercase tracking-widest hover:bg-aetox-surface-2 transition-all border border-aetox-border transform active:scale-95">
                ดูผลงานทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}

