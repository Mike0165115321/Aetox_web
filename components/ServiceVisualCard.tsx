'use client';
import { ReactNode } from 'react';

interface ServiceVisualCardProps {
  children: ReactNode;
  className?: string;
  minHeight?: string;
}

/**
 * Centralized Visual Card Wrapper for all Service visuals.
 * Controls height, padding, rounding, and background patterns globally.
 */
export default function ServiceVisualCard({ 
  children, 
  className = "", 
  minHeight = "min-h-[550px]" 
}: ServiceVisualCardProps) {
  return (
    <div className={`glass-card p-5 lg:p-6 rounded-[32px] border border-white/10 relative flex flex-col shadow-2xl bg-black/40 ${minHeight} ${className}`}>
      {/* Centralized Grid Pattern - No more double grids! */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}
