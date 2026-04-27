export const academyContent = {
  hero: {
    badge: "Engineering Architect Academy",
    title: {
      white: "Transform from a Programmer to a",
      accent: "System Architect"
    },
    suffix: "Enterprise Level in 12 Weeks",
    description: "Go beyond traditional coding to become an architect of AI and Automation systems that truly drive business. Use blueprints from expert architects.",
    cta: "Pre-register Now",
    trustBadge: "Gold Standard Trust"
  },

  roi: {
    title: "The Price of Non-Standard Architecture",
    description: "A single architectural mistake can mean massive losses you never anticipated.",
    hiddenLoss: "Hidden Losses",
    advantage: "Architectural Advantage",
    wasteTime: "Wasted Time & Opportunities",
    growthProfit: "Scalable Profits",
    footerNote: "Don't just be a programmer, be a system architect.",
    comparison: [
      {
        label: "Trial and Error Development",
        cost: "$35,000+ / Year",
        impact: "Growing Technical Debt, frequent rewrites, high security vulnerabilities",
        isBad: true
      },
      {
        label: "Aetox.dev Standard Design",
        cost: "500% ROI in 6 Months",
        impact: "Scalable from day one, 50% lower infra costs, international security standards",
        isBad: false
      }
    ]
  },
  skillTree: {
    title: "Path to Mastery",
    subtitle: "3-Layer Architecture that turns you into an architect with the edge"
  },
  categories: [
    {
      id: 'intelligence',
      title: 'Intelligence Layer (RAG & Agentic AI)',
      subtitle: "The Brain of Your System",
      description: 'Dive deep into specialized AI architectures that think, not just call generic APIs.',
      skills: [
        { name: "Advanced RAG Engineering", value: "+40% Market Value" },
        { name: "Agentic Workflow Design", value: "Peak Automation Level" },
        { name: "Vector Database Management", value: "Maximum Efficiency" }
      ],
      icon: 'Brain'
    },
    {
      id: 'execution',
      title: 'Execution Layer (High-End Automation)',
      subtitle: "The Digital Labor of Your System",
      description: 'Design bot systems that work together perfectly with zero errors.',
      skills: [
        { name: "Priority Queue Systems", value: "Seamless Operations" },
        { name: "Auto-Error Correction", value: "100% Accuracy" },
        { name: "Scalable Bot Orchestration", value: "Handles Massive Workloads" }
      ],
      icon: 'Zap'
    },
    {
      id: 'foundation',
      title: 'Foundation Layer (Enterprise Stack)',
      subtitle: "The Backbone of Your System",
      description: 'Build on a world-class tech stack that is secure and highly flexible.',
      skills: [
        { name: "Next.js 15 App Router", value: "Future-Proof Tech" },
        { name: "Type-Safe Architecture", value: "Clean & Secure Code" },
        { name: "Enterprise Security (AES-256)", value: "Maximum Trust" }
      ],
      icon: 'Layers'
    }
  ],

  authority: {
    badge: "Aetox.dev Standard",
    dna: "Architect DNA",
    excellence: "Trusted Excellence",
    quote: "I'm not here to teach you how to write code just to finish a task. I'm here to teach you how to lay a business foundation that supports AI and Automation in the long run, the way real architects do.",
    founderName: "Mike (Chayapol P.)",
    founderTitle: "Founder & Chief Architect",
    title: "Learn from Thailand's Leading AI System Architect",
    description: "Mike (Chayapol Promsavana), the architect behind enterprise AI and Automation systems, is ready to transfer the Architect DNA to you.",
    achievements: [
      "Enterprise System Architect",
      "RAG & Automation Loops Expert"
    ]
  },

  footer: {
    title: "Reserve Your Priority Access",
    description: "This course has limited seating per batch to ensure individual coaching quality (intensive training).",
    waitlistLabel: "Join the waitlist for news and early-bird specials",
    form: {
      step: "Step",
      of: "of",
      next: "Next Step",
      back: "Back",
      submitting: "Processing...",
      submit: "Reserve My Access",
      privacy: "Your data is kept strictly confidential according to international standards.",
      error: "An error occurred. Please try again.",
      fields: {
        name: { label: "Full Name", placeholder: "Your name" },
        email: { label: "Contact Email", placeholder: "Work email" },
        position: { 
          label: "Your Position or Goal",
          options: [
            { value: "Senior Programmer", label: "Senior Programmer" },
            { value: "Tech Lead / Team Lead", label: "Tech Lead / Team Lead" },
            { value: "Business Owner / CTO", label: "Business Owner / CTO" },
            { value: "System Architect", label: "Aspiring System Architect" }
          ]
        },
        challenge: { label: "Expectations or Challenges You're Facing...", placeholder: "Describe technical challenges you're facing..." }
      },
      success: {
        title: "Confirmed!",
        description: "You have received Priority Access. Our team will contact you with early-bird specials soon.",
        close: "Close"
      }
    }
  }
};

export default academyContent;
