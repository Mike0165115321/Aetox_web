import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutClient from './about-client';
import { bookmind, robotGuide, treesBot } from '@/data/content/th/projects/items';
import FloatingNav, { NavSection } from '@/components/FloatingNav';
import { Cpu, Award, LayoutGrid, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'th' | 'en' }> }): Promise<Metadata> {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'about');
  return {
    title: dict.meta?.title || 'เกี่ยวกับเรา - Aetox',
    description: dict.meta?.description,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  
  // โหลดเฉพาะข้อมูล About ของตัวเอง (ไม่ต้องพึ่งหน้า Home แล้ว)
  const dict = await getDictionary(lang, 'about');

  const featuredProjects = [
    { id: bookmind.id, title: bookmind.title, description: bookmind.description, image: bookmind.image, slug: bookmind.slug, category: bookmind.category },
    { id: robotGuide.id, title: robotGuide.title, description: robotGuide.description, image: robotGuide.image, slug: robotGuide.slug, category: robotGuide.category },
    { id: treesBot.id, title: treesBot.title, description: treesBot.description, image: treesBot.image, slug: treesBot.slug, category: treesBot.category },
  ];

  // ไอคอนที่แมปตามลำดับ 01-04 ของหน้า About
  const icons = [
    <LayoutGrid size={18} key="0" />,
    <Cpu size={18} key="1" />,
    <Award size={18} key="2" />,
    <ShieldCheck size={18} key="3" />,
  ];

  const aboutSections: NavSection[] = dict.navigation.map((item: any, index: number) => ({
    ...item,
    icon: icons[index],
    offset: 80
  }));

  return (
    <main className="relative">
      <FloatingNav sections={aboutSections} />
      <Navbar dict={dict.common.navigation.navbar} />
      <AboutClient 
        dict={dict} 
        projects={featuredProjects}
      />
      <Footer dict={dict.common.navigation.footer} />
    </main>
  );
}
