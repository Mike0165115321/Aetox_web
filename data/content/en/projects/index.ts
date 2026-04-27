import { projectCategories } from './categories';
import * as items from './items';

export const allProjects = Object.values(items);

export const projectsContent = {
  hero: {
    badge: "System Architecture Portfolio",
    title: "Architectural Masterpieces",
    subtitle: "Transform complexity into business advantage with meticulously designed systems."
  },
  categories: projectCategories,
  items: allProjects
};

export default projectsContent;
