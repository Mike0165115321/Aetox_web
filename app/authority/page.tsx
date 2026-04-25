import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsContent } from '@/data/content/th/projects';
import AuthorityHero from './components/AuthorityHero';
import ProjectShowcase from './components/ProjectShowcase';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Layout, Rocket, Award } from 'lucide-react';

export default async function AuthorityPage() {
  const navDict = await getDictionary('th', 'navigation');
  
  // Use the newly structured projects data
  const content = projectsContent;
  
  const authoritySections: NavSection[] = [
    { id: 'authority-hero', label: 'Overview', num: 'INT', icon: <Rocket size={18} /> },
    { id: 'project-showcase', label: 'Portfolio', num: '01', icon: <Award size={18} />, offset: 80 },
  ];

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative">
      <FloatingNav sections={authoritySections} />
      {/* Global Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-deep-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <Navbar dict={navDict.navbar} />
      
      {/* Modular Sections */}
      <div id="authority-hero">
        <AuthorityHero content={content} />
      </div>
      <div id="project-showcase">
        <ProjectShowcase content={content} />
      </div>
      
      <Footer dict={navDict.footer} />
    </main>
  );
}
