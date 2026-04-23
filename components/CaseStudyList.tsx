import { ShieldCheck, Award } from 'lucide-react';

export default function CaseStudyList() {
  const caseStudies = [
    {
      id: 'nongnan',
      title: 'AI Robot "น้องน่าน"',
      role: 'National Gold Medalist Project',
      desc: 'หุ่นยนต์ปัญญาประดิษฐ์ระดับประเทศที่พิสูจน์ความสามารถด้านสถาปัตยกรรม AI ขั้นสูง',
      Icon: Award,
    },
    {
      id: 'willoftherealm',
      title: 'Will-of-the-Realm',
      role: 'Complex System Architecture',
      desc: 'ระบบสถาปัตยกรรมซอฟต์แวร์ซับซ้อนที่แสดงศักยภาพการจัดการข้อมูลและตรรกะระดับ Enterprise',
      Icon: ShieldCheck,
    }
  ];

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Proven Authority</h2>
            <p className="text-gray-400 max-w-2xl">
              ผลงานระดับประเทศและระบบซับซ้อนที่เป็นเครื่องพิสูจน์ศักยภาพของเรา
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="glass-card group p-8 md:p-10 rounded-2xl relative overflow-hidden flex items-start gap-6">
              <div className="w-16 h-16 shrink-0 rounded-full bg-deep-blue/10 border border-deep-blue/20 flex items-center justify-center group-hover:bg-deep-blue/20 transition-colors duration-300">
                <study.Icon className="w-8 h-8 text-deep-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase mb-4">{study.role}</p>
                <p className="text-gray-400 leading-relaxed">
                  {study.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
