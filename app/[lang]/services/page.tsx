import { getDictionary } from '@/data/dictionaries';
import ServicesClient from './services-client';

export default async function ServicesPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'servicesIndex');

  return <ServicesClient dict={dict} navDict={dict.common.navigation} />;
}
