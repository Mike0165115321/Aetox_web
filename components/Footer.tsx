import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/1001.svg" alt="Aetox Logo" className="h-8 w-auto" />
              <span className="text-xl font-black tracking-widest text-white">
                AETO<span className="text-cyber-blue drop-shadow-cyber-glow">X</span>
              </span>
            </div>
            <div className="text-gray-400 max-w-sm">
              <p className="font-medium text-white">ชยพล พรมสะวะนา (Chayaopol Promsavana)</p>
              <p className="text-cyber-blue text-sm font-semibold tracking-wider">
                Founder & System Architect | เจ้าของเหรียญทอง AI ระดับประเทศ
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-cyber-blue" />
              Based in Nan, Northern Thailand. Operating Worldwide.
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-cyber-blue" />
                  <a href="mailto:phrmsawanachyphl@gmail.com">phrmsawanachyphl@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-cyber-blue" />
                  <a href="tel:0968013963">0968013963</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Social</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-3 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-blue shrink-0"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  <a href="https://github.com/Mike0165115321" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Aetox.dev — All Rights Reserved. Engineered by Chayapol Promsavana</p>
        </div>
      </div>
    </footer>
  );
}
