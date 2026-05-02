import { ShieldCheck, Award, MapPin, Clock } from 'lucide-react';

export default function CaseStudyList({ dict }: { dict?: any }) {
  if (!dict) return null;
  const content = dict;

  const iconMap: any = {
    'nongnan': Award,
    'willoftherealm': ShieldCheck
  };

  return (
    <section className="py-24 relative border-t border-aetox-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-fluid-h2 font-bold text-aetox-text-main mb-4">{content.hero.title}</h2>
            <p className="text-aetox-text-soft max-w-2xl text-fluid-p font-medium">
              {content.hero.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.caseStudies.map((study: any) => {
            const Icon = iconMap[study.id] || ShieldCheck;
            return (
              <div key={study.id} className="aetox-card group p-8 md:p-10 relative overflow-hidden flex flex-col items-start !rounded-[32px]">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-aetox-accent/10 border border-aetox-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-aetox-accent" />
                  </div>
                <div>
                  <h3 className="text-fluid-h3 font-bold text-aetox-text-main mb-2">{study.title}</h3>
                  <p className="text-aetox-accent text-fluid-label font-bold tracking-widest uppercase">{study.role}</p>
                </div>
              </div>
              <p className="text-aetox-text-soft text-fluid-p font-medium leading-relaxed mb-6 flex-grow">
                {study.desc}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-aetox-border w-full text-fluid-label text-aetox-text-muted font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-aetox-accent" />
                  <span>{study.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-aetox-accent" />
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
