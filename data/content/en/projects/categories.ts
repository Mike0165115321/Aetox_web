export const projectCategories = [
  { id: 'all', label: 'ระบบทั้งหมด', icon: 'Layout' },
  { id: 'intelligence', label: 'ปัญญาประดิษฐ์ (Intelligence)', icon: 'Brain' },
  { id: 'execution', label: 'ระบบอัตโนมัติ (Execution)', icon: 'Zap' },
  { id: 'foundation', label: 'รากฐานเว็บและข้อมูล (Foundation)', icon: 'Database' }
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
