import { getDictionary } from '@/data/dictionaries';
import AiAgentsClient from './ai-agents-client';

export default async function AiAgentsPage() {
  const dict = await getDictionary('th', 'aiAgents');
  const navDict = await getDictionary('th', 'navigation');
  const ctaDict = await getDictionary('th', 'cta');
  return <AiAgentsClient dict={dict} navDict={navDict} ctaDict={ctaDict} />;

}
