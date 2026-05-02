'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer({ dict }: { dict?: any }) {
  const params = useParams();
  const lang = params?.lang || 'th';

  const footerData = dict || {
    founder: { name: "", title: "", location: "" },
    sections: { contact: "", social: "" },
    rights: ""
  };
  return (
    <footer className="border-t border-aetox-border bg-aetox-bg py-16 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.svg" alt="Aetox Logo" width={32} height={32} className="h-8 w-auto dark:brightness-0 dark:invert" />
              <span className="text-xl font-bold tracking-tighter text-aetox-text-main">
                AETO<span className="text-aetox-accent">X</span>
              </span>
            </div>
            <div className="max-w-sm">
              <p className="font-bold text-aetox-text-main">{footerData.founder.name}</p>
              <p className="text-aetox-accent text-[11px] font-black uppercase tracking-widest mt-1">
                {footerData.founder.title}
              </p>
            </div>
            <div className="flex items-center gap-2 text-aetox-text-soft text-xs font-medium">
              <MapPin className="w-4 h-4 text-aetox-accent" />
              {footerData.founder.location}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-aetox-text-main font-black uppercase tracking-[0.2em] text-[10px]">{footerData.sections.contact}</h4>
              <ul className="space-y-4 text-aetox-text-soft text-xs font-bold">
                <li className="flex items-center gap-3 hover:text-aetox-accent transition-colors">
                  <Mail className="w-4 h-4 text-aetox-accent" />
                  <a href="mailto:phrmsawanachyphl@gmail.com">phrmsawanachyphl@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 hover:text-aetox-accent transition-colors">
                  <Phone className="w-4 h-4 text-aetox-accent" />
                  <a href="tel:0968013963">0968013963</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-aetox-text-main font-black uppercase tracking-[0.2em] text-[10px]">{footerData.sections.social}</h4>
              <ul className="space-y-4 text-aetox-text-soft text-xs font-bold">
                <li className="flex items-center gap-3 hover:text-aetox-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aetox-accent shrink-0"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <a href="https://github.com/Mike0165115321" target="_blank" rel="noopener noreferrer">GITHUB PROFILE</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-aetox-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-aetox-text-muted text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
            © {new Date().getFullYear()} AETOX.DEV — {footerData.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
