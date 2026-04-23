import { getDictionary } from '@/data/dictionaries';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default async function ContactPage() {
  const dict = await getDictionary('th', 'contact');
  const navDict = await getDictionary('th', 'navigation');

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative pt-20">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />
      <Navbar dict={navDict.navbar} />
      <div className="py-12">
        <BookingForm dict={dict} />
      </div>
      <Footer dict={navDict.footer} />
    </main>
  );
}
