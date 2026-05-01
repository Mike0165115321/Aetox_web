'use client';
import React from 'react';

/**
 * GlobalBackground — จัดการเฉพาะส่วนที่ต้องการให้มีทุกหน้าจริงๆ (เช่น Noise Grain)
 * ส่วนแสงฟุ้ง (Auras) ย้ายไปอยู่ที่ HeroSection ตามคำสั่งแล้วครับ
 */
export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-aetox-bg">
      {/* Global Noise Grain (ถ้าต้องการให้มีทุกหน้าเพื่อความพรีเมียม) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} 
      />
    </div>
  );
};
