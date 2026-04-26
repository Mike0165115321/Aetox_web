import { getDictionary } from '@/data/dictionaries';
import AutomationClient from './automation-client';

export default async function AutomationPage() {
  // In a real multi-lang app, 'th' would come from params or a header
  const dict = await getDictionary('th', 'automation');
  const navDict = await getDictionary('th', 'navigation');
  const ctaDict = await getDictionary('th', 'cta');

  return <AutomationClient dict={dict} navDict={navDict} ctaDict={ctaDict} />;

}
