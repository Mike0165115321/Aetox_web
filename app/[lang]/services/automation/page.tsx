import { getDictionary } from '@/data/dictionaries';
import AutomationClient from './automation-client';

export default async function AutomationPage({ params }: { params: { lang: 'th' | 'en' } }) {
  const lang = params.lang || 'th';
  const dict = await getDictionary(lang, 'automation');

  return (
    <AutomationClient 
      dict={dict} 
      navDict={dict.common.navigation} 
      ctaDict={dict.common.cta} 
    />
  );
}
