import { getDictionary } from '@/data/dictionaries';
import AiAgentsClient from './ai-agents-client';

export default async function AiAgentsPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'aiAgents');
  return (
    <AiAgentsClient 
      dict={dict} 
      navDict={dict.common.navigation} 
      ctaDict={dict.common.cta} 
    />
  );
}
