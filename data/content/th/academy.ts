export const academyContent = {
  hero: {
    badge: "คลังความรู้สถาปนิกวิศวกรรม",
    title: {
      white: "เปลี่ยนจากนักเขียนโปรแกรมเป็น",
      accent: "สถาปนิกผู้ออกแบบระบบ"
    },
    suffix: "ระดับองค์กร (Enterprise) ใน 12 สัปดาห์",
    description: "ก้าวข้ามขีดจำกัดของการเขียน Code แบบเดิมๆ สู่การเป็นสถาปนิกผู้ออกแบบระบบ AI & Automation ที่ขับเคลื่อนธุรกิจได้จริง ด้วย Blueprint จากสถาปนิกผู้เชี่ยวชาญ",
    cta: "ลงชื่อจองสิทธิ์ล่วงหน้า"
  },

  // NEW: The Moment of Truth (ROI & Hidden Costs)
  roi: {
    title: "ราคาที่ต้องจ่ายให้กับสถาปัตยกรรมที่ไม่ได้มาตรฐาน",
    description: "การวางระบบที่ผิดพลาดเพียงครั้งเดียว อาจหมายถึงความสูญเสียมหาศาลที่คุณคาดไม่ถึง",
    comparison: [
      {
        label: "การพัฒนาระบบแบบลองผิดลองถูก",
        cost: "1,200,000+ บาท / ปี",
        impact: "หนี้ทางเทคนิค (Technical Debt) ที่เพิ่มขึ้น, ระบบรื้อทิ้งบ่อย, ช่องโหว่ด้านความปลอดภัยสูง",
        isBad: true
      },
      {
        label: "วิธีการออกแบบตามมาตรฐาน Aetox.dev",
        cost: "ROI 500% ใน 6 เดือน",
        impact: "ระบบรองรับการขยายตัว (Scalable) ตั้งแต่วันแรก, ลดต้นทุนโครงสร้างพื้นฐาน 50%, มาตรฐานความปลอดภัยระดับสากล",
        isBad: false
      }
    ]
  },

  // REFINED: The Skill Tree (Interactive Roadmap)
  categories: [
    {
      id: 'intelligence',
      title: 'Intelligence Layer (RAG & Agentic AI)',
      subtitle: "สมองกลของระบบคุณ",
      description: 'เจาะลึกสถาปัตยกรรม AI เฉพาะทางที่คิดเองได้ ไม่ใช่แค่การเรียก API ทั่วไป',
      skills: [
        { name: "วิศวกรรม RAG ขั้นสูง", value: "+40% มูลค่าในตลาด" },
        { name: "การออกแบบ Agentic Workflow", value: "ระดับการทำงานอัตโนมัติขั้นสูงสุด" },
        { name: "การจัดการฐานข้อมูล Vector", value: "ประสิทธิภาพสูงสุด" }
      ],
      icon: 'Brain'
    },
    {
      id: 'execution',
      title: 'Execution Layer (High-End Automation)',
      subtitle: "แรงงานดิจิทัลของระบบคุณ",
      description: 'ออกแบบระบบบอทที่ทำงานร่วมกันอย่างสมบูรณ์แบบ ไร้ข้อผิดพลาด 100%',
      skills: [
        { name: "ระบบคิวลำดับความสำคัญ", value: "ทำงานไร้รอยต่อ" },
        { name: "ระบบตรวจสอบข้อผิดพลาดอัตโนมัติ", value: "ความแม่นยำ 100%" },
        { name: "การกระจายงานบอทแบบขยายตัวได้", value: "รองรับงานมหาศาล" }
      ],
      icon: 'Zap'
    },
    {
      id: 'foundation',
      title: 'Foundation Layer (Enterprise Stack)',
      subtitle: "กระดูกสันหลังของระบบคุณ",
      description: 'วางรากฐานด้วย Tech Stack มาตรฐานโลกที่ปลอดภัยและยืดหยุ่นสูงสุด',
      skills: [
        { name: "Next.js 15 App Router", value: "เทคโนโลยีแห่งอนาคต" },
        { name: "โครงสร้างแบบ Type-Safe", value: "Code สะอาดและปลอดภัย" },
        { name: "ความปลอดภัยระดับองค์กร (AES-256)", value: "ความเชื่อถือสูงสุด" }
      ],
      icon: 'Layers'
    }
  ],

  // NEW: Founder's Authority
  authority: {
    title: "เรียนรู้จากสถาปนิกผู้ออกแบบระบบ AI ระดับประเทศ",
    description: "Mike (Chayapol Promsavana) สถาปนิกผู้อยู่เบื้องหลังระบบ AI และ Automation ระดับองค์กร พร้อมถ่ายทอด DNA การคิดแบบสถาปนิกให้คุณ",
    achievements: [
      "สถาปนิกผู้ออกแบบระบบระดับองค์กร",
      "ผู้เชี่ยวชาญด้าน RAG & Automation Loops"
    ]
  },

  footer: {
    title: "จองสิทธิ์เข้าถึงล่วงหน้าของคุณ",
    description: "คอร์สเรียนนี้จำกัดจำนวนผู้เข้าเรียนในแต่ละรุ่น เพื่อรักษาคุณภาพการถ่ายทอดแบบรายบุคคล (การสอนแบบเข้มข้น)",
    waitlistLabel: "ลงชื่อรอรับข่าวสารและสิทธิพิเศษก่อนใคร"
  }
};

export default academyContent;
