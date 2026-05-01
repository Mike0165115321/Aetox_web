'use client';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface CTAProps {
  serviceId: string;
  serviceName: string;
  hirePoints?: string[];
  hirePath?: string;
  dict?: {
    title: { white: string; accent: string; suffix: string };
    subtitle: string;
    hire: { title: string; desc: string; label: string; suitLabel: string };
  };
}

export default function ServiceBottomCTA({ 
  serviceId, 
  serviceName,
  hirePoints = [],
  hirePath = "/contact",
  dict
}: CTAProps) {
  const replaceServiceName = (text: string) => {
    if (!text) return "";
    return text.replace(/{{serviceName}}/g, serviceName);
  };

  if (!dict) return null;

  const content = {
    title: dict.title,
    subtitle: dict.subtitle,
    hire: {
      title: replaceServiceName(dict.hire.title),
      desc: replaceServiceName(dict.hire.desc),
      label: dict.hire.label,
      suitLabel: dict.hire.suitLabel
    }
  };

  return (
    <section id="cta-section" className="py-24 relative overflow-hidden scroll-mt-32">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aetox-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-fluid-h1 text-aetox-text-main leading-tight">
            {content.title.white} <br className="hidden md:block" />
            <span className="text-aetox-accent drop-shadow-aetox-glow">{content.title.accent}</span> {content.title.suffix}
          </h2>
          <p className="text-aetox-text-soft text-lg font-medium">{content.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Focused Path: Implementation (B2B) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="aetox-card p-10 flex flex-col justify-between transition-all duration-500 hover:border-aetox-accent/40">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-aetox-accent/10 flex items-center justify-center border border-aetox-accent/20 group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7 text-aetox-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-aetox-text-main group-hover:text-aetox-accent transition-colors">
                    {content.hire.title}
                  </h3>
                  <p className="text-aetox-text-soft text-fluid-p font-medium">
                    {content.hire.desc}
                  </p>
                  {hirePoints.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[10px] font-bold text-aetox-text-muted uppercase tracking-widest">{content.hire.suitLabel}</p>
                      <ul className="space-y-2">
                        {hirePoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-fluid-sm text-aetox-text-soft font-medium">
                            <div className="w-1 h-1 rounded-full bg-aetox-accent mt-1.5 shrink-0 shadow-aetox-glow" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <Link 
                href={`${hirePath}?source=${serviceId}&intent=hire`}
                className="mt-10 flex items-center justify-between p-5 rounded-2xl bg-aetox-bg border border-aetox-border group-hover:bg-aetox-accent group-hover:text-white transition-all font-bold shadow-sm"
              >
                {content.hire.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Hover Glow Background */}
            <div className="absolute -inset-1 bg-aetox-accent/10 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
