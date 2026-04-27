'use client';
import React from 'react';

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Base Dark Surface */}
      <div className="absolute inset-0 bg-aetox-bg" />

      {/* 2. Signature Blueprint Grid — Highly Optimized */}
      <div 
        className="absolute inset-0 bg-aetox-blueprint bg-[length:50px_50px] opacity-[0.15]" 
        style={{ 
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* 3. Strategic Atmosphere Aura — Minimalistic & Performance Friendly */}
      <div className="absolute inset-0">
        {/* Top Right Aura */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] bg-aetox-accent/5 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        
        {/* Bottom Left Aura */}
        <div 
          className="absolute bottom-[10%] left-[-5%] w-[50%] h-[40%] bg-aetox-accent/[0.03] rounded-full blur-[100px]"
          aria-hidden="true"
        />
      </div>

      {/* 4. Subtle Noise Texture (Optional - for high-end look) */}
      {/* Glass Grain Effect (CSS-based to avoid 404) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: 'contrast(150%) brightness(100%)'
        }} 
      />
    </div>
  );
};
