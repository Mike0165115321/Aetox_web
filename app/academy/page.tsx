import { getDictionary } from '@/data/dictionaries';
import AcademyClient from './academy-client';

export default async function AcademyPage() {
  const dict = await getDictionary('th', 'academy');
  const navDict = await getDictionary('th', 'navigation');

  return <AcademyClient dict={dict} navDict={navDict} />;
}
