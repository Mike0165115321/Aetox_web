import Navbar from '@/components/Navbar';
import FinalCTA from '@/components/home/FinalCTA';
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
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative">
      <FloatingNav sections={homeSections} />
      <Navbar dict={navDict.navbar} />
      
      {/* 1. Hook (Hero) */}
      <HeroSection dict={dict.hero} />

        {/* 2. Pain (Loss Realization) */}
        <PainSection dict={dict.pain} />

        {/* 3. Superiority (Architecture Comparison) */}
        <ArchitectureComparison />

        {/* 4. Proof (System Simulation) */}
        <SystemSimulation />

        {/* 5. Trust (Expertise & Projects) */}
        <TrustSection dict={dict.trust} projects={featuredProjects} />

        {/* 6. Capabilities (Services) */}
        <ServiceSection dict={dict.services} />

        {/* 7. Decision (ROI Calculator) */}
        <section id="roi-calculator" className="scroll-mt-20">
          <ROIPreview dict={dict.engagement} />
        </section>

        {/* 8. Logic (Security) */}
        <SecurityBlock dict={dict.security} />

        {/* 9. Final Close */}
        <FinalCTA dict={dict.about} />

        <Footer dict={navDict.footer} />
    </main>
  );
}

