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
  minHeight = "min-h-[450px]" 
}: ServiceVisualCardProps) {
  return (
    <div className={`aetox-card p-8 lg:p-10 relative flex flex-col overflow-hidden ${minHeight} ${className}`}>
      {/* Centralized Grid Pattern using new Design System */}
      <div className="aetox-grid-overlay opacity-20" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full font-sans">
        {children}
      </div>
    </div>
  );
}
