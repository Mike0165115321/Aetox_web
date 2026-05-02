'use client';
import React, { useState } from 'react';
import { HelpCircle, Zap, Layers, ServerCrash } from 'lucide-react';

interface KpiCardProps {
  label: string;
  valInCurrency: number;
  detail: string;
  currency: string;
  formatMoney: (value: number, showLabel?: boolean, short?: boolean) => string;
  accent?: boolean;
  color?: string;
  unitLabel?: string;
}

export function KpiCard({ 
  label, 
  valInCurrency, 
  detail, 
  currency, 
  formatMoney, 
  accent = false, 
  color = 'text-aetox-text-main',
  unitLabel
}: KpiCardProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={`p-5 sm:p-6 rounded-2xl border transition-all duration-500 min-h-[140px] flex flex-col justify-between relative group ${accent ? 'bg-aetox-accent-subtle border-aetox-accent/20 shadow-aetox-glow' : 'bg-aetox-surface-lowest/50 border-aetox-border hover:border-aetox-border-strong'}`}>
      <div className="absolute top-4 right-4 z-20">
        <div className="relative group/tooltip">
          <button onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} onClick={() => setShowInfo(!showInfo)} className="p-1 -m-1 focus:outline-none">
            <HelpCircle size={16} className={`${showInfo ? 'text-aetox-accent' : 'text-aetox-text-muted'} hover:text-aetox-accent cursor-help transition-colors`} />
          </button>
          <div className={`absolute right-0 top-7 w-64 p-4 bg-aetox-surface-high border border-aetox-border rounded-xl shadow-2xl transition-all duration-300 z-50 text-[11px] leading-relaxed text-aetox-text-soft font-medium ${showInfo ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {detail}
            <div className="absolute -top-1 right-1.5 w-2 h-2 bg-aetox-surface-high rotate-45 border-t border-l border-aetox-border" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-fluid-label text-aetox-text-muted font-bold mb-3 tracking-wide">{label}</p>
        <div className="space-y-2">
          <p className={`text-fluid-h2 font-bold tabular-nums leading-none ${color}`}>{formatMoney(valInCurrency, false)}</p>
          <p className={`text-fluid-sm font-bold ${color} opacity-70 tracking-wide`}>{unitLabel || 'Unit'}: {currency === 'THB' ? 'บาท (THB)' : 'USD'}</p>
        </div>
      </div>
    </div>
  );
}

interface SliderGroupProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  accent: string;
  displayValue: string;
}

export function SliderGroup({
  label,
  min,
  max,
  step,
  value,
  onChange,
  accent,
  displayValue
}: SliderGroupProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-fluid-label text-aetox-text-muted uppercase tracking-widest font-bold">{label}</label>
        <span className="text-fluid-sm font-bold text-aetox-text-main tabular-nums">{displayValue}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))} 
        className={`w-full h-1.5 rounded-full cursor-pointer bg-aetox-surface-high ${accent}`} 
      />
    </div>
  );
}

export function SimulatorIcon({ name, size = 18 }: { name: string; size?: number }) {
  if (name === 'zap') return <Zap size={size} />;
  if (name === 'layers') return <Layers size={size} />;
  if (name === 'help') return <HelpCircle size={size} />;
  return <ServerCrash size={size} />;
}
