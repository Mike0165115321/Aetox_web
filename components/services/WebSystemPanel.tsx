'use client';

import { motion } from 'framer-motion';
import { Play, RotateCcw, Volume2, Shield, Settings, Sliders, ChevronLeft, FileAudio, Sparkles } from 'lucide-react';

export default function WebSystemPanel() {
  const speechHistory = [
    { title: 'Generation 1', time: '1.2s generated', waveWidth: 'w-24' },
    { title: 'Generation 2', time: '0.8s generated', waveWidth: 'w-32' }
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-[440px] rounded-2xl bg-aetox-bg/40 backdrop-blur-md overflow-hidden text-left border border-aetox-border">
      
      {/* 1. LEFT WORKSPACE CANVAS: Text-to-Speech Editor */}
      <div className="flex-1 p-6 flex flex-col justify-between bg-black/10 border-b lg:border-b-0 lg:border-r border-aetox-border relative overflow-hidden">
        {/* Subtle background mesh glow */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {/* Header & Speaker Tag */}
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-aetox-text-main tracking-widest uppercase flex items-center gap-1.5">
              <Volume2 size={14} className="text-aetox-accent" />
              <span>Text to Speech Canvas</span>
            </h3>
            
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Annette</span>
            </div>
          </div>

          {/* Text Editor Mockup */}
          <div className="space-y-4">
            <p className="text-xs md:text-sm text-aetox-text-main font-bold leading-relaxed tracking-tight">
              What if Blackbeard stole Luffy's Devil Fruit... the Hito Hito no Mi: Model Nika?! 🤨
            </p>
            <p className="text-xs text-aetox-text-soft leading-relaxed font-medium">
              This isn't just rubber powers anymore—it's the fruit of a literal Sun God. Imagination becomes reality, and Blackbeard's already rocking two fruits. Add Nika to the mix, and this man becomes a chaos god.
            </p>
            <div className="w-fit flex items-center gap-1.5 text-[10px] text-aetox-text-muted hover:text-aetox-text-main transition-colors cursor-pointer font-bold border border-dashed border-aetox-border/60 px-3 py-1.5 rounded-xl">
              <span>+ Add speaker node</span>
            </div>
          </div>
        </div>

        {/* Generated Waveforms simulation */}
        <div className="pt-6 border-t border-aetox-border/40 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {speechHistory.map((history, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-aetox-border bg-black/20 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[10px] text-aetox-text-soft font-bold">
                <span>{history.title}</span>
                <span className="text-[9px] text-aetox-accent">{history.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-6 h-6 rounded-lg bg-aetox-accent/10 border border-aetox-accent/30 text-aetox-accent flex items-center justify-center hover:bg-aetox-accent hover:text-white transition-all">
                  <Play size={10} className="fill-current" />
                </button>
                {/* Simulated Audio Waveform bars */}
                <div className="flex-1 flex gap-0.5 items-center h-4">
                  {[...Array(16)].map((_, i) => {
                    const heights = ['h-2', 'h-3', 'h-1', 'h-4', 'h-2', 'h-3', 'h-1', 'h-3', 'h-4', 'h-2', 'h-1', 'h-3', 'h-2', 'h-4', 'h-1', 'h-2'];
                    return (
                      <div key={i} className={`w-1 rounded-full bg-aetox-text-muted/30 group-hover:bg-aetox-accent/50 transition-colors ${heights[i % heights.length]}`} />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. RIGHT APP SETTINGS SIDEBAR: Synthesis Parameters */}
      <div className="w-full lg:w-72 p-6 bg-black/20 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-aetox-accent/5 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {/* Header */}
          <div className="flex items-center gap-1.5 text-aetox-text-muted hover:text-aetox-text-main transition-colors cursor-pointer text-xs font-bold">
            <ChevronLeft size={16} />
            <span>Back to Dashboard</span>
          </div>

          {/* Stats Box */}
          <div className="p-4 rounded-xl border border-aetox-border bg-aetox-surface-low/20 space-y-1.5">
            <div className="flex justify-between text-[10px] text-aetox-text-soft font-bold">
              <span>Yesterday Usage</span>
              <span className="text-aetox-accent">133 credits used</span>
            </div>
            <p className="text-[9px] text-aetox-text-muted truncate font-mono">
              Gen ID: u7rHZUQ1Bhat5hWbQZ4t
            </p>
          </div>

          {/* Parameter Sliders */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-aetox-text-main uppercase tracking-wider">
              <Settings size={12} className="text-aetox-accent" />
              <span>Voice Settings</span>
            </div>
            
            {/* Parameters list with dots */}
            <div className="space-y-3 text-[11px] font-bold text-aetox-text-soft">
              <div className="flex justify-between items-center">
                <span>Synthesis Model</span>
                <div className="flex-1 border-b border-dotted border-aetox-border/60 mx-2" />
                <span className="text-aetox-text-main">Kanalabs v3</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Audio Stability</span>
                <div className="flex-1 border-b border-dotted border-aetox-border/60 mx-2" />
                <span className="text-aetox-text-main">50%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Clarity Boost</span>
                <div className="flex-1 border-b border-dotted border-aetox-border/60 mx-2" />
                <span className="text-aetox-text-main">85%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons & Speaker 2 */}
        <div className="space-y-4 pt-6 border-t border-aetox-border/40 mt-6 relative z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-[10px] font-bold w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Henry</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-aetox-accent to-emerald-600 border border-aetox-accent/30 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 transition-all shadow-aetox-glow">
              <Play size={12} className="fill-current" />
              <span>Play</span>
            </button>

            <button className="py-2.5 px-4 rounded-xl bg-aetox-surface-low/30 border border-aetox-border text-aetox-text-main font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-aetox-surface-low/50 active:scale-95 transition-all">
              <RotateCcw size={12} />
              <span>Restore</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
