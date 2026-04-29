const th = {
  home: () => import('./content/th/home').then((module) => module.default),
  automation: () => import('./content/th/services/automation').then((module) => module.default),
  webSystems: () => import('./content/th/services/web-systems').then((module) => module.default),
  aiAgents: () => import('./content/th/services/ai-agents').then((module) => module.default),
  servicesIndex: () => import('./content/th/services/index').then((module) => module.default),
  authority: () => import('./content/th/authority').then((module) => module.default),
  contact: () => import('./content/th/contact').then((module) => module.default),
  academy: () => import('./content/th/academy').then((module) => module.default),
  navigation: () => import('./content/th/common/navigation').then((module) => module.default),
  cta: () => import('./content/th/common/cta').then((module) => module.default),
  defaults: () => import('./content/th/common/defaults').then((module) => module.default),
  projects: () => import('./content/th/projects/index').then((module) => module.default),
  admin: () => import('./content/th/admin').then((module) => module.default),
};

const dictionaries = {
  th,
  // English block is currently on standby - defaulting to 'th' content
  en: {
    home: () => import('./content/en/home').then((module) => module.default),
    automation: () => import('./content/en/services/automation').then((module) => module.default),
    webSystems: () => import('./content/en/services/web-systems').then((module) => module.default),
    aiAgents: () => import('./content/en/services/ai-agents').then((module) => module.default),
    servicesIndex: () => import('./content/en/services/index').then((module) => module.default),
    authority: () => import('./content/en/authority').then((module) => module.default),
    contact: () => import('./content/en/contact').then((module) => module.default),
    academy: () => import('./content/en/academy').then((module) => module.default),
    navigation: () => import('./content/en/common/navigation').then((module) => module.default),
    cta: () => import('./content/en/common/cta').then((module) => module.default),
    defaults: () => import('./content/en/common/defaults').then((module) => module.default),
    projects: () => import('./content/en/projects/index').then((module) => module.default),
    admin: () => import('./content/en/admin').then((module) => module.default),
  }

};

export const getDictionary = async (lang: 'th' | 'en', page: keyof typeof dictionaries['th']): Promise<any> => {
  // Safety check for lang
  const safeLang = dictionaries[lang] ? lang : 'th';
  
  // Load page content and common content in parallel
  const [pageContent, navigation, cta, defaults] = await Promise.all([
    dictionaries[safeLang][page](),
    dictionaries[safeLang].navigation(),
    dictionaries[safeLang].cta(),
    dictionaries[safeLang].defaults()
  ]);
  
  // Create a unified dictionary structure
  const merged: any = {
    ...pageContent,
    common: {
      navigation,
      cta,
      ...defaults
    }
  };

  // For backward compatibility and convenience, also inject 'common' into top-level objects
  for (const key in pageContent) {
    if (typeof pageContent[key] === 'object' && pageContent[key] !== null && !Array.isArray(pageContent[key])) {
      merged[key] = { ...pageContent[key], common: merged.common };
    }
  }
  
  return merged;
};
