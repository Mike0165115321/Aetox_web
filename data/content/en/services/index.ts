export const servicesIndexContent = {
  hero: {
    title: {
      white: "Strategic Solutions for",
      accent: "Modern Business Challenges"
    },
    description: "Reduce hidden costs, accelerate operations, and transform your systems to be AI and Automation ready today."
  },
  benefitLabel: "What You Will Receive",
  technicalLabel: "Deep Technical Insights",

  services: [
    {
      id: 'ai-agents',
      title: 'Custom Domain AI (Build Your Proprietary Intelligence)',
      highlight: 'Forget generic AI that gives broad answers. We design AI systems that learn from your "Unique Knowledge Base" – whether it\'s textbooks, manuals, or real-time data streams – with an architecture that updates itself instantly without the need for costly retraining.',
      tag: 'AI Agents & Intelligent RAG Systems',
      desc: 'Create a "Digital Expert" that truly understands your business. Provides precise answers, cites sources, and learns new information the moment you feed it.',
      suitable: [
        'Businesses wanting to build their own AI to answer questions from specific datasets (e.g., textbooks, legal documents, technical manuals).',
        'Platforms where data changes constantly and require an AI that updates itself minute-by-minute (e.g., news, capital markets).',
        'Organizations needing an AI system ready to adapt and learn new knowledge without traditional limitations.',
      ],
      benefit: 'Own a specialized AI system that is deeply knowledgeable, accurate, and always up-to-date with the world.',
      path: '/services/ai-agents'
    },

    {
      id: 'automation',
      title: 'Digital Workforce & Process Automation',
      tag: 'Workflow Automation Systems',
      desc: 'Let computers handle repetitive tasks. We design bot systems that operate in high-efficiency loops to manage data entry and manual processes of all kinds at speeds far exceeding human capabilities.',
      suitable: [
        'Businesses using many staff for data entry or repetitive cross-system data retrieval (Data Entry Displacement).',
        'Organizations needing 24/7 autonomous operations without errors or breaks.',
        'Sequential workflow tasks that require maximum speed through high-performance system execution.',
      ],
      benefit: 'Reduce reliance on human labor for low-value tasks and transform staff costs into stable, perpetual software systems.',
      path: '/services/automation'
    },

    {
      id: 'web-systems',
      title: 'Core Business Systems',
      tag: 'Enterprise-Grade Web Systems',
      desc: 'Develop web systems that serve as your business core. Designed for flexibility, security, and long-term compatibility with AI and automation integrations.',
      suitable: [
        'Businesses limited by generic SaaS/off-the-shelf software (Vendor Lock-in).',
        'Organizations wanting to turn their web interface into a "Business Operations Center".',
        'Companies preparing database structures to support AI and automation in the next phase.',
      ],
      benefit: 'Own a flexible, scalable digital asset that doesn\'t need to be scrapped as your business grows.',
      path: '/services/web-systems'
    }
  ],

  ctaLabel: "See How This System Helps Your Business"
};

export default servicesIndexContent;