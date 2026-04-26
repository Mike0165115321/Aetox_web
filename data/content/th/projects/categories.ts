export const projectCategories = [
  { id: 'all', label: 'ระบบทั้งหมด', icon: 'Layout' },
  { id: 'intelligence', label: 'Intelligence (ระบบอัจฉริยะ AI)', icon: 'Brain' },
  { id: 'execution', label: 'Execution (ระบบอัตโนมัติ)', icon: 'Zap' },
  { id: 'foundation', label: 'Foundation (โครงสร้างเว็บและข้อมูล)', icon: 'Database' }
];

export type ProjectCategory = 'intelligence' | 'execution' | 'foundation';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  tags: string[];
  client: string;
  year: string;
  slug: string;
}
