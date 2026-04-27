import { getDictionary } from '@/data/dictionaries';
import AcademyClient from './academy-client';

export default async function AcademyPage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang = 'th' } = await params;
  const dict = await getDictionary(lang, 'academy');

  return <AcademyClient dict={dict} navDict={dict.common.navigation} />;
}
