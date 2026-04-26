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

export default async function Home() {
  const dict = await getDictionary('th', 'home');
  const navDict = await getDictionary('th', 'navigation');

  const homeSections: NavSection[] = [
    { id: 'hero', label: 'วิสัยทัศน์', num: '01', icon: <Sparkles size={18} /> },
    { id: 'pain', label: 'ปัญหาที่พบ', num: '02', icon: <AlertTriangle size={18} />, offset: 40 },
    { id: 'comparison', label: 'สถาปัตยกรรม', num: '03', icon: <Layers size={18} />, offset: 60 },
    { id: 'simulation', label: 'การจำลอง', num: '04', icon: <Cpu size={18} />, offset: 80 },
    { id: 'trust', label: 'ความเชื่อมั่น', num: '05', icon: <Award size={18} />, offset: 70 },
    { id: 'services', label: 'โซลูชัน', num: '06', icon: <LayoutGrid size={18} />, offset: 70 },
    { id: 'roi-calculator', label: 'ความคุ้มค่า', num: '07', icon: <TrendingUp size={18} />, offset: 10 },
    { id: 'security', label: 'ความปลอดภัย', num: '08', icon: <ShieldCheck size={18} />, offset: 80 },
    { id: 'about', label: 'ติดต่อเรา', num: '09', icon: <MessageSquare size={18} />, offset: 65 },
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

        <Footer dict={navDict.footer} />
    </main>
  );
}

