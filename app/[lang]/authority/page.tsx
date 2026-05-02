import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthorityHero from './components/AuthorityHero';
import ProjectShowcase from './components/ProjectShowcase';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Rocket, Award } from 'lucide-react';
import { projectsContent } from '@/data/content/th/projects';

export default async function AuthorityPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'projects');
  
  // Use static data from files for maximum performance
  const content = {
    ...dict,
    items: projectsContent.items
  };
  
  const authoritySections: NavSection[] = [
    { id: 'authority-hero', label: 'ภาพรวม (Overview)', num: 'INT', icon: <Rocket size={18} /> },
    { id: 'project-showcase', label: 'ผลงาน (Portfolio)', num: '01', icon: <Award size={18} />, offset: 80 },
  ];

  return (
    <main className="min-h-screen selection:bg-aetox-accent/30 selection:text-white relative">
      <FloatingNav sections={authoritySections} />

      <Navbar dict={dict.common.navigation.navbar} />
      
      {/* Modular Sections */}
      <div id="authority-hero" className="scroll-mt-20">
        <AuthorityHero content={content} />
      </div>
      <div id="project-showcase" className="scroll-mt-20">
        <ProjectShowcase content={content} />
      </div>
      
      <Footer dict={dict.common.navigation.footer} />
    </main>
  );
}
