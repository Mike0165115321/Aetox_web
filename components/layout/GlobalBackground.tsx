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
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('/images/noise.png')] bg-repeat" />
    </div>
  );
};
