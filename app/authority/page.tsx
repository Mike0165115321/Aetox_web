import Navbar from '@/components/Navbar';
import CaseStudyList from '@/components/CaseStudyList';
import Footer from '@/components/Footer';

export default function AuthorityPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />
      <Navbar />
      <div className="py-12">
        <CaseStudyList />
      </div>
      <Footer />
    </main>
  );
}
