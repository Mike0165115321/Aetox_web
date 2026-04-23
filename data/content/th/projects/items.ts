import { Project } from './categories';
import { projectMedia } from './media';

export interface ExtendedProject extends Project {
  githubUrl?: string;
  liveUrl?: string;
  media: typeof projectMedia.bookmind;
}

export const bookmind: ExtendedProject = {
  id: 'bookmind',
  title: 'BookMind: AI Knowledge Architect',
  description: 'ระบบจัดการฐานความรู้อัจฉริยะที่ใช้เทคนิค RAG (Retrieval-Augmented Generation) เพื่อให้ AI สามารถตอบคำถามจากคลังข้อมูลเฉพาะทางขององค์กรได้อย่างแม่นยำ',
  category: 'intelligence',
  image: projectMedia.bookmind.cover,
  media: projectMedia.bookmind,
  tags: ['RAG', 'Vector Database', 'LLM', 'Intelligence'],
  client: 'Open Source',
  year: '2026',
  slug: 'bookmind',
  githubUrl: 'https://github.com/Mike0165115321/BookMind.git'
};

export const robotGuide: ExtendedProject = {
  id: 'robot-guide',
  title: 'AI Robot Guide: Contextual Intelligence',
  description: 'ระบบไกด์อัจฉริยะที่ใช้ AI ในการประมวลผลข้อมูลเชิงบริบท เพื่อนำเสนอทางเลือกและคำแนะนำที่ถูกต้องที่สุดตามสถานการณ์จริง',
  category: 'intelligence',
  image: projectMedia.robotGuide.cover,
  media: projectMedia.robotGuide,
  tags: ['AI Agent', 'Decision Tree', 'Contextual Computing'],
  client: 'Portfolio Project',
  year: '2026',
  slug: 'ai-robot-guide',
  githubUrl: 'https://github.com/Mike0165115321/AI-Robot-Guide-.git'
};

export const treesBot: ExtendedProject = {
  id: 'trees-bot',
  title: 'Trees4 Bot: Industrial Automation',
  description: 'โซลูชัน Automation ระดับอุตสาหกรรมที่ออกแบบมาเพื่อจัดการงานซ้ำซ้อนด้วยความแม่นยำสูง ลดโอกาสเกิด Error จากมนุษย์ได้ 100%',
  category: 'execution',
  image: projectMedia.treesBot.cover,
  media: projectMedia.treesBot,
  tags: ['Automation', 'Bot Engineering', 'Workflow Efficiency'],
  client: 'Private Client',
  year: '2026',
  slug: 'trees4-bot',
  githubUrl: 'https://github.com/Mike0165115321/trees4_bot.git'
};

export const aetoxWeb: ExtendedProject = {
  id: 'aetox-web',
  title: 'Aetox.dev: High-End B2B Foundation',
  description: 'สถาปัตยกรรมเว็บสมัยใหม่ที่เน้นความเร็วและดีไซน์ระดับพรีเมียม พัฒนาด้วย Next.js (App Router), TypeScript และ Tailwind CSS พร้อมโครงสร้างข้อมูลแบบ Modular ที่รองรับการขยายตัวระดับองค์กร',
  category: 'foundation',
  image: projectMedia.aetoxWeb.cover,
  media: projectMedia.aetoxWeb,
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'System Architecture'],
  client: 'Self-Project',
  year: '2026',
  slug: 'aetox-foundation',
  liveUrl: 'https://aetox.dev'
};
