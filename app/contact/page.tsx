import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />
      <Navbar />
      <div className="py-12">
        <BookingForm />
      </div>
      <Footer />
    </main>
  );
}
