export const homeContent = {
  hero: {
    headline: {
      white: "Inefficiency is a Choice.",
      accent: "Precision is Our Standard."
    },
    description: "Eliminate business leakage and transform lost costs into automated profit systems with Enterprise-grade AI architecture.",
    cta: {
      primary: "Calculate Business ROI",
      secondary: "View System Architecture"
    }
  },
  pain: {
    title: "The Cost of Inaction",
    subtitle: "Staying with inefficient legacy systems is silently eating away your profit.",
    items: [
      {
        id: 'time-loss',
        title: 'Productivity Loss',
        impact: 'Employees waste 30–50% of their time on manual tasks.',
        cost: 'You are paying 100% salary for only 50% actual output.'
      },
      {
        id: 'revenue-leak',
        title: 'Revenue Leakage',
        impact: 'Slow response times cause a 40% drop-off in conversions.',
        cost: 'Every 10 minutes a customer waits is a lost revenue opportunity.'
      },
      {
        id: 'human-error',
        title: 'Hidden Cost of Errors',
        impact: 'Manual data entry leads to frequent human errors.',
        cost: 'A 1% error in your database can lead to millions in long-term damage.'
      }
    ]
  },
  trust: {
    founder: {
      name: "Chayapon Promsawana",
      title: "Founder & System Architect",
      accolade: "National AI Gold Medalist",
      description: "System Architect specializing in AI and Automation, focusing on designing systems that solve real problems and drive business results."
    },
    standards: [
      "Enterprise-Grade Scalable Systems",
      "Business Result Driven Design",
      "Strategic Technology Partnership"
    ]
  },
  engagement: {
    title: "Calculate Business ROI",
    description: "Do you know where your profit is leaking? Simulate the results of turning 'cost leakage' into 'revenue inflow' with Aetox automation.",
    inputs: {
      staffCount: "Number of staff (manual tasks)",
      avgSalary: "Average Monthly Salary (THB)",
      hoursSpent: "Hours spent on manual tasks / day"
    },
    results: {
      monthlySavings: "Monthly Savings",
      annualImpact: "Increased Annual Profit",
      efficiencyBoost: "Efficiency Boost (%)"
    },
    cta: "Get Free ROI Analysis & Quote"
  },
  security: {
    title: "Enterprise Security Standards",
    description: "Data security is the heart of enterprise systems for maximum confidence and safety.",
    features: [
      {
        title: "Zero-Model Training",
        desc: "Your business and private data will NEVER be used to train external AI models. 100% Data Sovereignty."
      },
      {
        title: "Enterprise-Grade Encryption",
        desc: "Security standards with AES-256 encryption for every bit of data flowing through the system."
      },
      {
        title: "Private Deployment Options",
        desc: "Choose to deploy on Private Cloud or On-premise for total security control."
      }
    ]
  },
  services: {
    title: "Strategic Business Solutions",
    description: "We design 3 core architectural pillars to eliminate inefficiency and drive scalable growth.",
    items: [
      {
        id: 'ai-agents',
        title: 'AI Agent Architecture',
        description: 'RAG-powered intelligence that reduces research and decision time for management.',
        features: ['Reduce document search time by 90%', 'Real-time business trend analysis', '100% accuracy with source citations'],
        relatedProjects: ['Legal Document Analysis A', 'Employee Q&A System B'],
      },
      {
        id: 'automation',
        title: 'Workflow Automation',
        description: 'Automated data pipelines that give employees time back for revenue-generating tasks.',
        features: ['Eliminate Human Error in workflows', 'Works 24/7 on your behalf', 'Seamless integration between all systems'],
        relatedProjects: ['Automated Invoicing System C', 'Sales Data Pipeline'],
      },
      {
        id: 'web-systems',
        title: 'Enterprise Web Systems',
        description: 'Digital headquarters built for maximum scalability and top-tier security.',
        features: ['Support hundreds of thousands of concurrent users', 'Real-time Profit Dashboards', 'Edge Network infrastructure'],
        relatedProjects: ['Resource Management Platform D', 'Internal Sales CRM'],
      }
    ]
  },
  about: {
    headline: {
      white: "We don't just build code.",
      accent: " We build advantages."
    },
    description: "Aetox.dev was founded by Chayapon Promsawana (National AI Gold Medalist) to transform business problems into measurable intelligent systems.\n\nWe don't stop at coding; we design architectures that integrate AI and Automation to reduce redundant tasks and drive sustainable growth for your organization.",
  },
  simulation: {
    title: "System",
    titleAccent: "Simulation",
    subtitle: "Architecture that transforms massive data into precise decisions.",
    steps: [
      { id: 1, label: 'Enterprise Data Store', color: 'text-aetox-text-soft' },
      { id: 2, label: 'RAG Retrieval Engine', color: 'text-aetox-accent' },
      { id: 3, label: 'Neural Logic Processing', color: 'text-aetox-accent' },
      { id: 4, label: 'Security Gateway', color: 'text-aetox-text-soft' },
      { id: 5, label: 'Decision Output', color: 'text-aetox-accent' }
    ],
    caseLabel: "Live Case Logic",
    caseDescription: "Processed 10,000 legal contracts to identify risks in 3.2 seconds with 99.9% accuracy."
  },
  comparison: {
    title: "Architectural",
    titleAccent: "Superiority",
    subtitle: "Why Enterprise systems require superior architecture over standard code.",
    headers: ["Feature / Capability", "Aetox Solution", "Generic Development"],
    footer: "*Data based on comparative system performance audits 2024",
    items: [
      {
        feature: "System Foundation",
        aetox: "Enterprise AI Architecture (RAG-Optimized)",
        generic: "Standard Web Application Code",
        type: "cpu"
      },
      {
        feature: "Logic Accuracy",
        aetox: "99.9% Mathematical Precision",
        generic: "Basic Conditional Logic (Prone to Error)",
        type: "activity"
      },
      {
        feature: "Security Standard",
        aetox: "Zero-Model Training (100% Data Privacy)",
        generic: "Public API Dependencies (Data Risk)",
        type: "shield"
      },
      {
        feature: "Business ROI",
        aetox: "Guaranteed 40-70% Cost Reduction",
        generic: "Uncertain / Variable Result",
        type: "zap"
      }
    ]
  }
};

export default homeContent;
