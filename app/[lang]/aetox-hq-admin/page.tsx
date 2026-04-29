import { getDictionary } from '@/data/dictionaries';
import AdminDashboardClient from './admin-client';

export default async function AdminDashboardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'th' | 'en', 'admin');
  
  return <AdminDashboardClient dict={dict} lang={lang} />;
}
