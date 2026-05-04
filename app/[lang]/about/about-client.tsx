'use client';
import React from 'react';
import ArchitectureComparison from '@/components/home/ArchitectureComparison';
import SystemSimulation from '@/components/home/SystemSimulation';
import TrustSection from '@/components/home/TrustSection';
import SecurityBlock from '@/components/home/SecurityBlock';

export default function AboutClient({ dict }: { dict: any }) {
  return (
    <main className="min-h-screen bg-aetox-bg pt-20">
      
      {/* 01. Trust Section */}
      <div id="trust" className="scroll-mt-20">
        <TrustSection dict={dict} />
      </div>

      {/* 02. Architecture Comparison */}
      <div id="comparison" className="scroll-mt-20">
        <ArchitectureComparison dict={dict.comparison} />
      </div>

      {/* 03. System Simulation */}
      <div id="simulation" className="scroll-mt-20">
        <SystemSimulation dict={dict.simulation} />
      </div>

      {/* 04. Security Block */}
      <div id="security" className="scroll-mt-20">
        <SecurityBlock dict={dict.security} />
      </div>

    </main>
  );
}
