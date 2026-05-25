import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProblemsClient from './problems-client';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'th' | 'en' }> }): Promise<Metadata> {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'problems');
  return {
    title: dict.meta?.title || 'ปัญหาที่พบ - Aetox',
    description: dict.meta?.description || 'วิเคราะห์จุดรั่วไหลและผลกระทบของระบบงานเก่า',
  };
}

export default async function ProblemsPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'problems');

  return (
    <main className="relative min-h-screen bg-aetox-bg selection:bg-aetox-accent/30 selection:text-white">
      <Navbar dict={dict.common.navigation.navbar} />
      <ProblemsClient dict={dict} lang={lang} />
      <Footer dict={dict.common.navigation.footer} />
    </main>
  );
}
