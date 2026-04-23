import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import CaseStudyList from '@/components/CaseStudyList';
import Footer from '@/components/Footer';

export default async function AuthorityPage() {
  const dict = await getDictionary('th', 'authority');
  const navDict = await getDictionary('th', 'navigation');

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />
      <Navbar dict={navDict.navbar} />
      <div className="py-12">
        <CaseStudyList dict={dict} />
      </div>
      <Footer dict={navDict.footer} />
    </main>
  );
}
