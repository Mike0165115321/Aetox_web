export const homeContent = {
  navigation: [
    { id: 'hero', label: 'Vision', num: '01' },
    { id: 'pain', label: 'Pain Points', num: '02' },
    { id: 'comparison', label: 'Architecture', num: '03' },
    { id: 'simulation', label: 'Simulation', num: '04' },
    { id: 'trust', label: 'Trust', num: '05' },
    { id: 'services', label: 'Solutions', num: '06' },
    { id: 'roi-calculator', label: 'Value (ROI)', num: '07' },
    { id: 'security', label: 'Security', num: '08' },
    { id: 'about', label: 'Contact', num: '09' },
  ],
  hero: {
    headline: {
      white: "Inefficiency is a Choice You Can Stop",
      accent: "Precision is Our Standard"
    },
    description: "Plug business leaks and transform wasted costs into automated profit systems with Enterprise AI Architecture.",
    cta: {
      primary: "Our Services",
      secondary: "Consult Us"
    },
    scrollLabel: "Scroll to Analyze"
  },

  pain: {
    title: "The Cost of Inaction",
    subtitle: "Staying with inefficient legacy systems is silently eating your profits.",
    badge: "Critical Business Analysis",
    footerTitle: "Inefficiency is a Cost You Choose",
    footerDesc: "Stop revenue leaks and start using intelligent systems today.",
    cta: "Calculate Loss Value",
    items: [
      {
        id: 'time-loss',
        title: 'Productivity Loss',
        impact: 'Employees waste 30–50% of their time on manual tasks.',
        cost: 'This means you are paying 100% salary for only 50% actual output.'
      },
      {
        id: 'revenue-leak',
        title: 'Revenue Leaks',
        impact: 'Delayed responses cause a 40% customer drop-off.',
        cost: 'Every 10 minutes a customer waits is a lost revenue opportunity.'
      },
      {
        id: 'trust-erosion',
        title: 'Hidden Costs from Errors',
        impact: 'Human errors in data entry and processing.',
        cost: 'A mere 1% error in your database can lead to millions in long-term damage.'
      }
    ]
  },
  trust: {
    founder: {
      name: "Chayapol Promsavana",
      title: "Founder & System Architect",
      accolade: "National AI Gold Medalist",
      description: "Expert architect in AI and Automation, focusing on systems that solve real problems and drive business results."
    },
    recognition: "Recognition of Excellence",
    portfolio: "Elite Portfolio",
    viewFull: "View All",
    standards: [
      "Enterprise-Grade Scalability",
      "Business-Outcome Focused Design",
      "Strategic Technology Partnerships"
    ],
    values: [
      { 
        title: 'Architectural Excellence', 
        desc: 'Designed for maximum stability and security.' 
      },
      { 
        title: 'ROI Driven Engineering', 
        desc: 'We engineer measurable business value.' 
      }
    ]
  },
  engagement: {
    title: "Calculate Business ROI",
    description: "Do you know where your profit is leaking? Simulate the results of turning 'leaked costs' into 'inbound revenue' with Aetox automation.",
    roiHeadline: {
      white: "Plug Business Leaks",
      accent: "Turn Cost into Profit"
    },
    inputs: {
      staffCount: "Related Staff (Repetitive tasks)",
      avgSalary: "Average Salary (THB)",
      hoursSpent: "Hours spent on manual tasks / day",
      parametersLabel: "Calculation Parameters",
      presetsLabel: "Business Presets",
      presets: {
        startup: "Startup",
        sme: "SME",
        enterprise: "Enterprise"
      }
    },
    results: {
      monthlySavings: "Monthly Savings",
      annualImpact: "Annual Savings",
      efficiencyBoost: "Efficiency Boost (%)",
      lossWarning: "This is the value your business loses every year.",
      footerNote: "*Based on strategic impact analysis references."
    },
    cta: "Get Free ROI Report & Proposal"
  },
  security: {
    title: "Enterprise Security Standards",
    description: "Data security is the heart of enterprise systems for maximum confidence.",
    headline: {
      white: "Data Protection",
      accent: "Industry Grade"
    },
    compliance: "Verified Compliance",
    badges: [
      { label: 'SSL', desc: 'Encryption' },
      { label: '256', desc: 'AES Standard' },
      { label: 'SOC', desc: 'Compliant' }
    ],
    features: [
      {
        title: "100% Privacy Guarantee",
        desc: "Your personal and business data will never be used to train external AI models (Zero-Model Training)."
      },
      {
        title: "Enterprise Encryption",
        desc: "High-level security with encryption for every data set flowing through the system (AES-256)."
      },
      {
        title: "Private Deployment Options",
        desc: "Choose to deploy in Private Cloud or On-premise for full security control."
      }
    ]
  },
  services: {
    badge: "Strategic Capabilities",
    title: "Core Business Architecture",
    description: "Our core expertise to elevate your organization into the digital and AI era.",
    items: [
      {
        id: 'ai-agents',
        title: 'Intelligent AI Agent Architecture',
        description: 'RAG Brains that reduce data retrieval and decision time for executive teams.',
        features: ['90% reduction in document search time', 'Real-time business trend analysis', 'Maximum accuracy with source citations'],
        relatedProjects: ['Legal Document Analysis Project A', 'Employee Q&A System B'],
      },
      {
        id: 'automation',
        title: 'Workflow Automation',
        description: 'Automated data pipelines that let staff focus on high-value tasks.',
        features: ['Eliminate human error in workflows', '24/7 autonomous operations', 'Seamless cross-system integration'],
        relatedProjects: ['Auto-Invoicing System C', 'Sales Data Processing Pipeline'],
      },
      {
        id: 'web-systems',
        title: 'Enterprise Web Systems',
        description: 'Scalable and highly secure digital foundations for your business.',
        features: ['Support 100k+ concurrent users', 'Real-time profit dashboards', 'Edge Network infrastructure'],
        relatedProjects: ['Resource Management Platform D', 'Internal CRM for Sales'],
      }
    ]
  },
  about: {
    badge: "Decision Point",
    headline: {
      white: "We don't just build code,",
      accent: " we build advantages."
    },
    description: "Aetox.dev was founded by Chayapol Promsavana (National AI Gold Medalist) to transform business challenges into measurable intelligent systems.\n\nWe don't stop at coding; we design architecture that merges AI and Automation to eliminate repetition and drive sustainable growth for your organization.",
    consultLabel: "Consult a System Architect",
    primaryCTA: "Start Planning Your System",
    secondaryCTA: "View All Projects"
  },
  simulation: {
    title: "Simulation",
    titleAccent: "System Operations",
    subtitle: "Architecture that transforms massive data into precise decisions.",
    steps: [
      { id: 1, label: 'Enterprise Knowledge', color: 'text-aetox-text-soft' },
      { id: 2, label: 'RAG Retrieval System', color: 'text-aetox-accent' },
      { id: 3, label: 'AI Logic Processing', color: 'text-aetox-accent' },
      { id: 4, label: 'Security Gateway', color: 'text-aetox-text-soft' },
      { id: 5, label: 'Decision Output', color: 'text-aetox-accent' }
    ],
    caseLabel: "Real-world Logic",
    caseDescription: "Processing 10,000 contracts to find legal risks within 3.2 seconds with 99.9% accuracy."
  },
  comparison: {
    title: "Architectural",
    titleAccent: "Superiority",
    subtitle: "Why enterprise systems need architecture beyond generic code.",
    headers: ["Feature / Capability", "Aetox Solution", "Generic Code"],
    swipeLabel: "Swipe to compare",
    footer: "*Based on 2024 comparative performance audits.",
    items: [
      {
        feature: "System Foundation",
        aetox: "Intelligent Enterprise Architecture",
        generic: "Standard Web Application Code",
        type: "cpu"
      },
      {
        feature: "Logic Precision",
        aetox: "99.9% Logical Accuracy",
        generic: "Generic conditional logic (Error prone)",
        type: "activity"
      },
      {
        feature: "Security Standards",
        aetox: "100% Data Privacy (Zero-Training)",
        generic: "Public API Reliance (Data leak risk)",
        type: "shield"
      },
      {
        feature: "ROI / Value",
        aetox: "Guaranteed 40-70% cost reduction",
        generic: "Uncertain / High variance results",
        type: "zap"
      }
    ]
  }
};

export default homeContent;
