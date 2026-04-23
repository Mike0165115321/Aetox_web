import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getDictionary } from '@/data/dictionaries';

export default async function Home() {
  const dict = await getDictionary('th', 'home');
  const navDict = await getDictionary('th', 'navigation');

  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative">
      {/* Global Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />

      <Navbar dict={navDict.navbar} />
      <HeroSection dict={dict.hero} />

      {/* Services Overview Section */}
      <div id="services">
        <ServiceSection dict={dict.services} />
      </div>

      {/* About / Story Section */}
      <section id="about" className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {dict.about.headline.white}<span className="text-cyber-blue">{dict.about.headline.accent}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
              {dict.about.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyber-blue/10 text-cyber-blue font-semibold hover:bg-cyber-blue hover:text-black transition-all border border-cyber-blue/20">
                {dict.about.cta.services}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/authority" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-all border border-white/10">
                {dict.about.cta.authority}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={navDict.footer} />
    </main>
  );
}
