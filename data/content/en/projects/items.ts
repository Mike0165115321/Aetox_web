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
  description: 'Intelligent knowledge management system using RAG (Retrieval-Augmented Generation) to allow AI to accurately answer questions from proprietary organizational data repositories.',
  category: 'intelligence',
  image: projectMedia.bookmind.cover,
  media: projectMedia.bookmind,
  tags: ['RAG', 'Vector Database', 'LLM', 'Intelligence'],
  client: 'Open Source Project',
  year: '2026',
  slug: 'bookmind',
  githubUrl: 'https://github.com/Mike0165115321/BookMind.git'
};

export const robotGuide: ExtendedProject = {
  id: 'robot-guide',
  title: 'AI Robot Guide: Contextual Intelligence',
  description: 'Intelligent guidance system using AI to process contextual information, providing the most accurate recommendations based on real-world scenarios.',
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
  description: 'Industrial-grade automation solution designed to manage repetitive tasks with high precision, eliminating 100% of human error potential.',
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
  description: 'Modern web architecture focusing on speed and premium design. Developed with Next.js (App Router), TypeScript, and Tailwind CSS with a modular data structure supporting enterprise-grade scaling.',
  category: 'foundation',
  image: projectMedia.aetoxWeb.cover,
  media: projectMedia.aetoxWeb,
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'System Architecture'],
  client: 'Self-Project',
  year: '2026',
  slug: 'aetox-foundation',
  liveUrl: 'https://aetox.dev'
};
