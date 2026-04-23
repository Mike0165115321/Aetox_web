export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: 'ai-agents' | 'automation' | 'web-systems' | 'architecture';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string; // e.g., "15:00"
  videoUrl?: string;
  isPremium: boolean;
  price?: number;
}

export interface AcademyCategory {
  id: string;
  title: string;
  description: string;
  lessonCount: number;
}

export const ACADEMY_CATEGORIES: AcademyCategory[] = [
  {
    id: 'ai-agents',
    title: 'Agentic AI & RAG',
    description: 'เรียนรู้การสร้างระบบ RAG ที่ฉลาดและแม่นยำที่สุด',
    lessonCount: 0,
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'การเปลี่ยนงาน Manual ให้เป็นระบบอัตโนมัติ 100%',
    lessonCount: 0,
  },
  {
    id: 'web-systems',
    title: 'High-Performance Web',
    description: 'สถาปัตยกรรมเว็บที่รองรับผู้ใช้หลักล้าน',
    lessonCount: 0,
  },
];

export const LESSONS: Lesson[] = [
  // Future lessons will be added here
];
