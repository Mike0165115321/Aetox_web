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

export default function AcademyClient({ dict, navDict }: { dict: any, navDict: any }) {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-deep-blue/30 selection:text-white relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-20" />
      
      <Navbar dict={navDict.navbar} />

      {/* Layer 1: Hook (Hero) */}
      <AcademyHero dict={dict.hero} />

      {/* Layer 2: Money & Pain (ROI Section) */}
      <AcademyROI dict={dict.roi} />

      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Layer 3: Engagement & Logic (Skill Tree) */}
      <AcademySkillTree categories={dict.categories} />

      <div className="container mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Layer 4: Trust (Mike's Authority) */}
      <MikeAuthority dict={dict.authority} />

      {/* Layer 5: Closing (Waitlist Form) */}
      <AcademyWaitlist dict={dict.footer} />

      <Footer dict={navDict.footer} />

      {/* Custom Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-deep-blue z-[200] origin-left"
        style={{ scaleX: 'var(--scroll-progress)' }}
      />
    </main>
  );
}

