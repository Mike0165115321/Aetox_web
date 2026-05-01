'use client';
import React from 'react';

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-aetox-bg">
      {/* 1. The Deep Atmosphere — Multi-layered Mesh Gradients */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60 transition-opacity duration-1000">
        
        {/* Top-Right Aura (The Intellect / Blue) */}
        <div 
          className="absolute top-[-20%] right-[-10%] w-[80%] h-[70%] bg-aetox-accent/20 rounded-full blur-[160px] animate-pulse"
          style={{ animationDuration: '10s' }}
        />
        
        {/* Bottom-Left Aura (The Depth / Darker Blue) */}
        <div 
          className="absolute bottom-[-20%] left-[-20%] w-[70%] h-[60%] bg-aetox-accent/15 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: '15s' }}
        />

        {/* Floating Center Mist (The Movement) */}
        <div 
          className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-aetox-accent/[0.05] rounded-full blur-[180px]"
          style={{ 
            animation: 'floatMist 20s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* 2. Signature Blueprint Grid — Refined & Subtle */}
      <div 
        className="absolute inset-0 bg-aetox-blueprint bg-[length:80px_80px] opacity-[0.03] dark:opacity-[0.04]" 
        style={{ 
          maskImage: 'radial-gradient(circle at center, black, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 85%)'
        }}
      />

      {/* 3. Global Noise Grain — For a premium paper/matte finish */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: 'contrast(120%) brightness(120%)'
        }} 
      />

      {/* Inline styles for custom animations */}
      <style jsx global>{`
        @keyframes floatMist {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(5%, 10%) scale(1.1); }
        }
      `}</style>
    </div>
  );
};
