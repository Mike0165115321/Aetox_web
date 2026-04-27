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
import { Sparkles, AlertTriangle, Award, Layers, Calculator, ShieldCheck, MessageSquare, Shield, LayoutGrid, TrendingUp, Cpu } from 'lucide-react';
import { getDictionary } from '@/data/dictionaries';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { bookmind, robotGuide, treesBot } from '@/data/content/th/projects/items';

export default async function Home({ params }: { params: { lang: 'th' | 'en' } }) {
  const lang = params.lang || 'th';
  const dict = await getDictionary(lang, 'home');

  const homeSections: NavSection[] = dict.navigation.map((item: any, index: number) => {
    const icons = [
      <Sparkles size={18} key="0" />,
      <AlertTriangle size={18} key="1" />,
      <Layers size={18} key="2" />,
      <Cpu size={18} key="3" />,
      <Award size={18} key="4" />,
      <LayoutGrid size={18} key="5" />,
      <TrendingUp size={18} key="6" />,
      <ShieldCheck size={18} key="7" />,
      <MessageSquare size={18} key="8" />,
    ];
    
    const offsets = [0, 40, 60, 80, 70, 70, 10, 80, 65];
    
    return {
      ...item,
      icon: icons[index],
      offset: offsets[index] || 0
    };
  });

  const featuredProjects = [
    { id: bookmind.id, title: bookmind.title, description: bookmind.description, image: bookmind.image, slug: bookmind.slug, category: bookmind.category },
    { id: robotGuide.id, title: robotGuide.title, description: robotGuide.description, image: robotGuide.image, slug: robotGuide.slug, category: robotGuide.category },
    { id: treesBot.id, title: treesBot.title, description: treesBot.description, image: treesBot.image, slug: treesBot.slug, category: treesBot.category },
  ];

  return (
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative">
      <FloatingNav sections={homeSections} />
      <Navbar dict={dict.common.navigation.navbar} />
      
      {/* 1. Hook (Hero) */}
      <HeroSection dict={dict.hero} />

        {/* 2. Pain (Loss Realization) */}
        <PainSection dict={dict.pain} />

        {/* 3. Superiority (Architecture Comparison) */}
        <ArchitectureComparison dict={dict.comparison} />

        {/* 4. Proof (System Simulation) */}
        <SystemSimulation dict={dict.simulation} />

        {/* 5. Trust (Expertise & Projects) */}
        <TrustSection dict={dict} projects={featuredProjects} />

        {/* 6. Capabilities (Services) */}
        <ServiceSection dict={dict.services} />

        {/* 7. Decision (ROI Calculator) */}
        <ROIPreview dict={dict.engagement} />

        {/* 8. Logic (Security) */}
        <SecurityBlock dict={dict.security} />

        {/* 9. Final Close */}
        <FinalCTA dict={dict.about} />

        <Footer dict={dict.common.navigation.footer} />
    </main>
  );
}

