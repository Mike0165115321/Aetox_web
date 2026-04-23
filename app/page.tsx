import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import CaseStudyList from '@/components/CaseStudyList';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative">
      {/* Global Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />
      
      <Navbar />
      <HeroSection />
      
      <div id="services">
        <ServiceSection />
      </div>
      
      <div id="authority">
        <CaseStudyList />
      </div>
      
      <div id="contact">
        <BookingForm />
      </div>
      
      <Footer />
    </main>
  );
}
