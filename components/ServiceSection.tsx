'use client';
import { Bot, Zap, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServiceSection() {
  const services = [
    {
      id: 'ai',
      title: 'Custom AI Agents',
      description: 'ระบบสมองกล RAG และแชทบอทวิเคราะห์ข้อมูลเฉพาะทาง',
      features: ['สถาปัตยกรรม RAG เชื่อมต่อข้อมูลองค์กร', 'วิเคราะห์ข้อมูลเชิงลึกแบบอัจฉริยะ', 'ปรับแต่งคำตอบตามบริบทของธุรกิจ'],
      relatedProjects: ['โครงการวิเคราะห์เอกสารกฎหมาย A', 'ระบบถามตอบพนักงานบริษัท B'],
      Icon: Bot,
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      description: 'เปลี่ยนงาน Manual ที่น่าเบื่อให้เป็นระบบอัตโนมัติ 100%',
      features: ['เชื่อมต่อ API ระหว่างซอฟต์แวร์ไร้รอยต่อ', 'ระบบจัดการหลังบ้านอัตโนมัติ', 'ลด Human Error และเพิ่มประสิทธิภาพ'],
      relatedProjects: ['ระบบออกบิลอัตโนมัติ องค์กร C', 'Data Pipeline ประมวลผลยอดขาย'],
      Icon: Zap,
    },
    {
      id: 'web',
      title: 'Full-Stack Web Systems',
      description: 'พัฒนาเว็บแอปพลิเคชันที่ทรงพลังและพร้อมเชื่อมต่อกับ AI',
      features: ['สถาปัตยกรรมเว็บสเกลใหญ่ (Scalable)', 'Real-time Data Dashboard', 'รองรับความปลอดภัยระดับสากล'],
      relatedProjects: ['แพลตฟอร์มบริหารจัดการทรัพยากร D', 'ระบบ CRM ภายในสำหรับเซลล์'],
      Icon: Globe,
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Architecture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            บริการหลักที่เราเชี่ยวชาญ เพื่อยกระดับองค์กรของคุณสู่ยุค Digital & AI เต็มรูปแบบ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              title={service.title} 
              description={service.description} 
              features={service.features}
              relatedProjects={service.relatedProjects}
              Icon={service.Icon} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
