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
    <main className="min-h-screen selection:bg-cyber-blue/30 selection:text-white relative">
      <FloatingNav sections={authoritySections} />

      <Navbar dict={navDict.navbar} />
      
      {/* Modular Sections */}
      <div id="authority-hero" className="scroll-mt-20">
        <AuthorityHero content={content} />
      </div>
      <div id="project-showcase" className="scroll-mt-20">
        <ProjectShowcase content={content} />
      </div>
      
      <Footer dict={navDict.footer} />
    </main>
  );
}
