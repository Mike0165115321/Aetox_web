import { getDictionary } from '@/data/dictionaries';
import ServicesClient from './services-client';

export default async function ServicesPage() {
  const dict = await getDictionary('th', 'servicesIndex');
  const navDict = await getDictionary('th', 'navigation');

  return <ServicesClient dict={dict} navDict={navDict} />;
}
