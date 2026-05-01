'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Optimized Components
import AcademyHero from './components/AcademyHero';
import AcademyROI from './components/AcademyROI';
import AcademySkillTree from './components/AcademySkillTree';
import MikeAuthority from './components/MikeAuthority';
import AcademyWaitlist from './components/AcademyWaitlist';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Cpu, Calculator, Brain, Award, Send } from 'lucide-react';

export default function AcademyClient({ dict, navDict }: { dict: any, navDict: any }) {
  const academySections: NavSection[] = [
    { id: 'academy-hero', label: 'Introduction', num: '01', icon: <Cpu size={18} /> },
    { id: 'academy-roi', label: 'Business Impact', num: '02', icon: <Calculator size={18} />, offset: 60 },
    { id: 'skill-tree', label: 'Skill Architecture', num: '03', icon: <Brain size={18} />, offset: 60 },
    { id: 'mike-authority', label: 'Our Authority', num: '04', icon: <Award size={18} />, offset: 80 },
    { id: 'waitlist-form', label: 'Register Now', num: '05', icon: <Send size={18} />, offset: 0 },
  ];

  return (
    <main className="min-h-screen bg-aetox-bg text-aetox-text-main selection:bg-aetox-accent/30 relative overflow-x-hidden">
      {/* Global Background Elements for Academy */}
      <div className="aetox-grid-overlay opacity-20" />
      
      <FloatingNav sections={academySections} />
      
      <Navbar dict={navDict.navbar} />

      {/* Layer 1: Hook (Hero) */}
      <AcademyHero dict={dict.hero} />

      {/* Layer 2: Money & Pain (ROI Section) */}
      <AcademyROI dict={dict.roi} />

      <div className="container mx-auto">
        <div className="w-full h-px bg-aetox-border opacity-50" />
      </div>

      {/* Layer 3: Engagement & Logic (Skill Tree) */}
      <AcademySkillTree dict={dict.skillTree} categories={dict.categories} />

      <div className="container mx-auto">
        <div className="w-full h-px bg-aetox-border opacity-50" />
      </div>

      {/* Layer 4: Trust (Mike's Authority) */}
      <MikeAuthority dict={dict.authority} />

      {/* Layer 5: Closing (Waitlist Form) */}
      <AcademyWaitlist dict={dict.footer} />

      <Footer dict={navDict.footer} />
    </main>
  );
}
