'use client';
import React from 'react';

interface SliderGroupProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  displayValue?: string;
  isAccent?: boolean;
}

export default function SliderGroup({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  unit = '', 
  displayValue, 
  isAccent = false 
}: SliderGroupProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between items-center">
        <label className="text-fluid-label font-bold text-aetox-text-muted uppercase tracking-wider">{label}</label>
        <span className={`text-fluid-sm font-bold tabular-nums ${isAccent ? 'text-aetox-accent' : 'text-aetox-text-main'}`}>
          {displayValue || (value.toLocaleString() + unit)}
        </span>
      </div>
      <input
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-1.5 bg-aetox-surface-high rounded-full appearance-none cursor-pointer accent-aetox-accent ${isAccent ? 'shadow-aetox-glow' : ''}`}
      />
    </div>
  );
}
