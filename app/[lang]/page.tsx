import Navbar from '@/components/Navbar';
import FinalCTA from '@/components/home/FinalCTA';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';
import PainSection from '@/components/home/PainSection';
import ROIPreview from '@/components/home/ROIPreview';
import { Sparkles, AlertTriangle, LayoutGrid, TrendingUp } from 'lucide-react';
import { getDictionary } from '@/data/dictionaries';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

export default async function Home({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'home');

  // กรองเมนู Floating Nav ให้เหลือเฉพาะที่มีในหน้าแรก
  const homeSections: NavSection[] = [
    { id: 'hero', label: dict.navigation[0].label, num: '01', icon: <Sparkles size={18} />, offset: 0 },
    { id: 'pain', label: dict.navigation[1].label, num: '02', icon: <AlertTriangle size={18} />, offset: 40 },
    { id: 'services', label: dict.navigation[5].label, num: '06', icon: <LayoutGrid size={18} />, offset: 70 },
    { id: 'roi', label: dict.navigation[6].label, num: '07', icon: <TrendingUp size={18} />, offset: 10 },
  ];

  return (
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative">
      <FloatingNav sections={homeSections} />
      <Navbar dict={dict.common.navigation.navbar} />
      
      {/* 1. Hook (Hero) */}
      <div id="hero" className="scroll-mt-20">
        <HeroSection dict={dict.hero} lang={lang} />
      </div>

      {/* 2. Pain (Loss Realization) */}
      <div id="pain" className="scroll-mt-20">
        <PainSection dict={dict.pain} />
      </div>

      {/* 6. Capabilities (Services) - เลื่อนขึ้นมาต่อจาก Pain */}
      <div id="services" className="scroll-mt-20">
        <ServiceSection dict={dict.services} lang={lang} />
      </div>

      {/* 7. Decision (ROI Calculator) */}
      <div id="roi" className="scroll-mt-20">
        <ROIPreview dict={dict.engagement} />
      </div>

      {/* 9. Final Close */}
      <FinalCTA dict={dict.about} lang={lang} />

      <Footer dict={dict.common.navigation.footer} />
    </main>
  );
}
