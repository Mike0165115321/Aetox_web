import Navbar from '@/components/Navbar';
import FinalCTA from '@/components/home/FinalCTA';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ROIPreview from '@/components/home/ROIPreview';
import { Sparkles, TrendingUp, MessageSquare } from 'lucide-react';
import { getDictionary } from '@/data/dictionaries';
import FloatingNav, { NavSection } from '@/components/FloatingNav';

export default async function Home({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'home');

  // กรองเมนู Floating Nav ให้เหลือเฉพาะที่มีในหน้าแรก
  const homeSections: NavSection[] = [
    { id: 'hero', label: dict.navigation[0].label, num: '01', icon: <Sparkles size={18} />, offset: 0 },
    { id: 'roi', label: dict.navigation[6].label, num: '07', icon: <TrendingUp size={18} />, offset: 10 },
    { id: 'contact', label: dict.navigation[8]?.label || 'Contact', num: '09', icon: <MessageSquare size={18} />, offset: 0 },
  ];

  return (
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative">
      <FloatingNav sections={homeSections} />
      <Navbar dict={dict.common.navigation.navbar} />
      
      {/* 1. Hook (Hero) & Interactive Services Dashboard Mockup */}
      <div id="hero" className="scroll-mt-20">
        <HeroSection dict={dict.hero} servicesDict={dict.services} lang={lang} />
      </div>

      {/* 7. Decision (ROI Calculator) */}
      <div id="roi" className="scroll-mt-20">
        <ROIPreview dict={dict.engagement} />
      </div>

      {/* 9. Final Close */}
      <div id="contact" className="scroll-mt-20">
        <FinalCTA dict={dict.about} lang={lang} />
      </div>

      <Footer dict={dict.common.navigation.footer} />
    </main>
  );
}
