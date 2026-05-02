'use client';
import React from 'react';
import { Dices, Gem, Orbit, Box, Layers, Network, Boxes, Component } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const GlobalBackground = () => {
  const pathname = usePathname();
  const isHeroPage = pathname === '/' || pathname === '/th' || pathname === '/en';

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden min-h-screen">
      {/* Global Noise Grain */}
      <div className="fixed inset-0 opacity-[0.015] dark:opacity-[0.02]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} 
      />

      {/* 🎲 Hidden Dice - Mid section */}
      <div className="absolute top-[800px] left-10 text-aetox-text-main/10 rotate-12">
         <Dices size={180} strokeWidth={0.5} />
      </div>

      {/* 📚 Layers - Architecture section */}
      <div className="absolute top-[1600px] right-20 text-aetox-text-main/10">
         <Layers size={250} strokeWidth={0.3} />
      </div>

      {/* 🌐 Network - Systems section */}
      <div className="absolute top-[2800px] left-1/4 text-aetox-text-main/10">
         <Network size={350} strokeWidth={0.2} />
      </div>

      {/* 📦 Boxes - Scaling section */}
      <div className="absolute top-[4200px] right-1/3 text-aetox-text-main/10">
         <Boxes size={250} strokeWidth={0.4} />
      </div>

      {/* 🧩 Component - Modular section */}
      <div className="absolute top-[5500px] left-20 text-aetox-text-main/10 -rotate-45">
         <Component size={180} strokeWidth={0.5} />
      </div>
      
      {/* 💎 Gem - Still there but repositioned */}
      <div className="absolute top-[200px] -right-10 text-aetox-text-main/10 rotate-45">
         <Gem size={250} strokeWidth={0.3} />
      </div>
    </div>
  );
};
