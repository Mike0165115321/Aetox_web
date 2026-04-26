import { getDictionary } from '@/data/dictionaries';
import WebSystemsClient from './web-systems-client';

export default async function WebSystemsPage() {
  const dict = await getDictionary('th', 'webSystems');
  const navDict = await getDictionary('th', 'navigation');
  const ctaDict = await getDictionary('th', 'cta');
  return <WebSystemsClient dict={dict} navDict={navDict} ctaDict={ctaDict} />;
}

