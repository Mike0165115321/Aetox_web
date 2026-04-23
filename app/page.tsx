import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-ultra-dark selection:bg-cyber-blue/30 selection:text-white relative">
      {/* Global Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] pointer-events-none" />
      
      <Navbar />
      <HeroSection />

      {/* About / Story Section */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Not Just Coding. <span className="text-cyber-blue">Architecting.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Aetox.dev ก่อตั้งโดยชยพล พรหมสวนา (National AI Gold Medalist) ด้วยวิสัยทัศน์ที่ต้องการยกระดับโครงสร้างพื้นฐานทางเทคโนโลยีขององค์กรในไทย เราไม่เพียงแค่เขียนโค้ด แต่เราออกแบบ "ระบบนิเวศ" (Ecosystem) ที่ผสานรวม AI, Automation และโครงสร้างเว็บประสิทธิภาพสูงเข้าด้วยกัน เพื่อผลลัพธ์ที่ยั่งยืนและขยายตัวได้จริง
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyber-blue/10 text-cyber-blue font-semibold hover:bg-cyber-blue hover:text-black transition-all border border-cyber-blue/20">
                ดูบริการของเรา
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/authority" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-all border border-white/10">
                ดูผลงานที่ผ่านมา
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
