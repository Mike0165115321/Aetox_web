const dictionaries = {
  th: {
    home: () => import('./content/th/home').then((module) => module.default),
    automation: () => import('./content/th/services/automation').then((module) => module.default),
    webSystems: () => import('./content/th/services/web-systems').then((module) => module.default),
    aiAgents: () => import('./content/th/services/ai-agents').then((module) => module.default),
    servicesIndex: () => import('./content/th/services/index').then((module) => module.default),
    authority: () => import('./content/th/authority').then((module) => module.default),
    contact: () => import('./content/th/contact').then((module) => module.default),
    academy: () => import('./content/th/academy').then((module) => module.default),
    navigation: () => import('./content/th/common/navigation').then((module) => module.default),
  },
  // English placeholders for future use
  en: {
    home: () => import('./content/th/home').then((module) => module.default), // fallback to th for now
    automation: () => import('./content/th/services/automation').then((module) => module.default),
    webSystems: () => import('./content/th/services/web-systems').then((module) => module.default),
    aiAgents: () => import('./content/th/services/ai-agents').then((module) => module.default),
    servicesIndex: () => import('./content/th/services/index').then((module) => module.default),
    authority: () => import('./content/th/authority').then((module) => module.default),
    contact: () => import('./content/th/contact').then((module) => module.default),
    academy: () => import('./content/th/academy').then((module) => module.default),
    navigation: () => import('./content/th/common/navigation').then((module) => module.default),
  }
};

export const getDictionary = async (lang: 'th' | 'en', page: keyof typeof dictionaries['th']): Promise<any> => {
  return dictionaries[lang][page]();
};
