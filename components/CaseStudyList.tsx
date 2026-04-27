import { ShieldCheck, Award, MapPin, Clock } from 'lucide-react';

export default function CaseStudyList({ dict }: { dict?: any }) {
  if (!dict) return null;
  const content = dict;

  const iconMap: any = {
    'nongnan': Award,
    'willoftherealm': ShieldCheck
  };

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.hero.title}</h2>
            <p className="text-gray-400 max-w-2xl">
              {content.hero.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.caseStudies.map((study: any) => {
            const Icon = iconMap[study.id] || ShieldCheck;
            return (
              <div key={study.id} className="glass-card group p-8 md:p-10 rounded-2xl relative overflow-hidden flex flex-col items-start">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center group-hover:bg-deep-blue/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-deep-blue" />
                  </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase">{study.role}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {study.desc}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-white/10 w-full text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-deep-blue" />
                  <span>{study.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-deep-blue" />
                  <span>{study.duration}</span>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
