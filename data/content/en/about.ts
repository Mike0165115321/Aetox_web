import simulators from './common/simulators';

export const aboutContent = {
  navigation: [
    { id: 'trust', label: 'Expertise', num: '01' },
    { id: 'comparison', label: 'Architecture', num: '02' },
    { id: 'simulation', label: 'Operations', num: '03' },
    { id: 'security', label: 'Security', num: '04' },
  ],
  
  meta: {
    title: "About Aetox — Enterprise AI Intelligence",
    description: "System architecture that transforms massive data into precise decisions."
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
  
  engagement: {
    simulators
  }
};

export default aboutContent;
