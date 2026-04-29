import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthorityHero from './components/AuthorityHero';
import ProjectShowcase from './components/ProjectShowcase';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Layout, Rocket, Award } from 'lucide-react';
import connectToDatabase from '@/lib/mongodb';
import Project from '@/models/Project';

export default async function AuthorityPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'projects');
  
  // Fetch dynamic projects from MongoDB
  let dbProjects = [];
  try {
    await connectToDatabase();
    dbProjects = await Project.find({ status: 'published' }).sort({ order: 1, createdAt: -1 }).lean();
    
    // Convert Mongo object to plain JS object for serializability
    dbProjects = JSON.parse(JSON.stringify(dbProjects));
  } catch (error) {
    console.error('Error fetching projects from DB:', error);
  }
  
  const content = {
    ...dict,
    // Use DB projects if available, otherwise fallback to static dictionary items
    items: dbProjects.length > 0 ? dbProjects : dict.items
  };
  
  const authoritySections: NavSection[] = [
    { id: 'authority-hero', label: 'ภาพรวม (Overview)', num: 'INT', icon: <Rocket size={18} /> },
    { id: 'project-showcase', label: 'ผลงาน (Portfolio)', num: '01', icon: <Award size={18} />, offset: 80 },
  ];

  return (
    <main className="min-h-screen selection:bg-cyber-blue/30 selection:text-white relative">
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
