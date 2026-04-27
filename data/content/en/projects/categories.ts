export const projectCategories = [
  { id: 'all', label: 'All Systems', icon: 'Layout' },
  { id: 'intelligence', label: 'Intelligence (AI)', icon: 'Brain' },
  { id: 'execution', label: 'Execution (Automation)', icon: 'Zap' },
  { id: 'foundation', label: 'Foundation (Web & Data)', icon: 'Database' }
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
