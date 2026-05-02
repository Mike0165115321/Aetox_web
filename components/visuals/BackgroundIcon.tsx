'use client';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BackgroundIconProps {
  Icon: LucideIcon;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  opacity?: number;
  strokeWidth?: number;
}

export default function BackgroundIcon({ 
  Icon, 
  position = 'top-left', 
  size = 600, 
  opacity = 0.08,
  strokeWidth = 0.5
}: BackgroundIconProps) {
  
  const positionClasses = {
    'top-left': '-top-20 -left-20',
    'top-right': '-top-20 -right-20',
    'bottom-left': '-bottom-20 -left-20',
    'bottom-right': '-bottom-20 -right-20'
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className={`absolute ${positionClasses[position]} text-aetox-accent transition-colors duration-1000`}
        style={{ opacity }}
      >
        <Icon size={size} strokeWidth={strokeWidth} />
      </motion.div>
    </div>
  );
}
