import { getDictionary } from '@/data/dictionaries';
import WebSystemsClient from './web-systems-client';

export default async function WebSystemsPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'webSystems');
  return (
    <WebSystemsClient 
      dict={dict} 
      navDict={dict.common.navigation} 
      ctaDict={dict.common.cta} 
    />
  );
}

