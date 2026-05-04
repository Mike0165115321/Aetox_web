import { getDictionary } from '@/data/dictionaries';
import AutomationClient from './automation-client';
import { notFound } from 'next/navigation';

export default async function AutomationPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'automation');

  if (!dict || !dict.hero) {
    notFound();
  }

  return (
    <AutomationClient 
      dict={dict} 
      navDict={dict.common?.navigation} 
      ctaDict={dict.common?.cta} 
    />
  );
}
