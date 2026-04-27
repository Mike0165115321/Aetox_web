import { projectCategories } from './categories';
import * as items from './items';

export const allProjects = Object.values(items);

export const projectsContent = {
  hero: {
    badge: "ผลงานสถาปัตยกรรมระบบ",
    title: "สถาปัตยกรรมระดับ Masterpieces",
    subtitle: "เปลี่ยนความซับซ้อนให้เป็นความได้เปรียบทางธุรกิจ ด้วยระบบที่ถูกออกแบบมาอย่างประณีต"
  },
  categories: projectCategories,
  items: allProjects
};

export default projectsContent;
