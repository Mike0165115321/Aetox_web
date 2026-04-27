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
    cta: "Get Free ROI Report & Proposal",
    simulators: {
      tabs: {
        automation: "Automation",
        aiAgent: "AI Agent",
        aiAgentRoi: "AI ROI",
        architecture: "Architecture"
      },
      automation: {
        title: "Automation ROI Projection",
        subTitle: "Analyze Costs & System Parameters",
        workloadTitle: "Select Workload Type",
        levels: [
          { id: 'light', label: 'Foundation Level', sublabel: 'Data Entry / Basic Docs' },
          { id: 'medium', label: 'Mid-Level', sublabel: 'Verification / Multi-source Data' },
          { id: 'heavy', label: 'Complex Level', sublabel: 'System Integration / High Logic' }
        ],
        params: {
          title: "Parameter Tuning",
          volume: "Workload / Month",
          staff: "Related Staff",
          hourlyRate: "Hourly Rate",
          unitCost: "Manual Unit Cost",
          botPrice: "Bot Investment",
          maintCost: "Maintenance / Mo."
        },
        kpis: {
          monthlySaving: "Monthly Savings",
          payback: "Payback Period",
          paybackUnit: "Months (Payback)"
        },
        comparison: {
          manual: "Legacy System (Manual)",
          bot: "Automated System (Bot)",
          totalHours: "Total Work Hours",
          totalCost: "Total Current Cost",
          costPerUnit: "Cost Per Task",
          invest: "Bot Investment",
          maint: "Maintenance"
        },
        benchmark: {
          title: "Efficiency Benchmark",
          botLabel: "AETOX Bot",
          manualLabel: "Human Team",
          savedHours: "Hours Saved",
          speedX: "Faster than Human",
          unitTime: "Hrs",
          unitTimes: "X"
        }
      },
      aiAgent: {
        title: { white: "Simulate", accent: "AI Agent" },
        description: "Experience precise and rapid Enterprise-grade RAG retrieval.",
        labels: {
          activeKnowledge: "Online Enterprise Knowledge",
          citation: "Citations"
        },
        useCases: [
          {
            id: "hr",
            label: "Human Resources",
            question: "What is the annual leave policy?",
            answer: "Employees are entitled to 12 days per year after 1 year of service.\nUp to 5 days can be carried over with 7 days advance manager approval.",
            citation: "Employee_Handbook_2024.pdf"
          },
          {
            id: "legal",
            label: "Legal",
            question: "What are the terms for immediate termination?",
            answer: "Per policy section 42, immediate termination includes:\n1. Corruption or fraud\n2. Intentional damage to company assets\n3. Absence for 3 consecutive days without cause.",
            citation: "Employment_Regulations_Discipline.pdf"
          },
          {
            id: "student",
            label: "Education",
            question: "How do I register for summer courses?",
            answer: "Students can register via the portal from March 1-5.\nFees must be paid within 3 working days or registration will be voided.",
            citation: "Academic_Services_Announcement_67.pdf"
          },
          {
            id: "librarian",
            label: "Library",
            question: "What are the rules for rare book consultations?",
            answer: "Rare books are for in-room study only. No removals allowed.\nCopies require written permission from the Head Librarian.",
            citation: "Library_Service_Policy_2023.pdf"
          }
        ]
      },
      aiAgentRoi: {
        simulator: {
          title: { white: "Analyze ROI", accent: "AI Agent" },
          description: "Evaluate return on investment and capacity boost with Agentic AI systems.",
          labels: {
            info: "Basic Info",
            queries: "Queries / Day",
            staff: "Related Staff",
            salary: "Avg. Salary",
            time: "Time per Case (min)",
            value: "Value per Case",
            aetoxBudget: "AETOX System Budget",
            setup: "Setup Cost",
            monthly: "Monthly Fee",
            capacity: "Capacity",
            capacityDesc: "{{staffCount}} staff can handle {{humanCapacity}} cases/day",
            monthlySaving: "Monthly Saving",
            monthlySavingDesc: "Reduces costs from {{humanCost}} monthly",
            hoursRecovered: "Hours Recovered",
            hoursRecoveredDesc: "Time redirected to high-value tasks",
            yearlySaving: "Net Yearly Saving",
            yearlySavingDesc: "Calculated after all system costs",
            breakEvenLabel: "Payback Period",
            unitMonth: "mo",
            unitHour: "hrs",
            unitMultiplier: "x",
            instantly: "Instantly"
          },
          tiers: [
            { id: 'personal', label: 'Personal', sub: 'Single Agent' },
            { id: 'early', label: 'Startup', sub: 'Starter Pack' },
            { id: 'growth', label: 'Growth', sub: 'Scale Up' },
            { id: 'enterprise', label: 'Enterprise', sub: 'Custom Architecture' }
          ],
          features: [
            { title: "Agentic Reasoning", desc: "Advanced logic and decision-making capabilities." },
            { title: "Enterprise RAG", desc: "Securely connected to your internal knowledge base." },
            { title: "Multi-modal Support", desc: "Supports text, images, and complex documents." }
          ],
          comparisonRows: [
            { label: "Accuracy", general: "85%", aetox: "99.9%", highlight: true },
            { label: "Response Time", general: "Mins - Hours", aetox: "2-10 Seconds", highlight: true },
            { label: "Uptime", general: "8 Hrs / Day", aetox: "24 / 7", highlight: true }
          ],
          pipeline: {
            title: "Intelligent Processing Pipeline",
            subtitle: "KNOWLEDGE PIPELINE",
            description: "Behind enterprise accuracy is a systematic 4-step data management process.",
            steps: [
              { step: "STEP 01", title: "Data Ingestion", desc: "Collect data from files & DBs" },
              { step: "STEP 02", title: "Vectorization", desc: "Convert data into math embeddings" },
              { step: "STEP 03", title: "Hybrid Retrieval", desc: "Find the most relevant context" },
              { step: "STEP 04", title: "Agentic Reasoning", desc: "Analyze and generate output" }
            ]
          }
        }
      },
      architecture: {
        title: "System Design Simulator",
        question: "What is your primary system goal?",
        resetLabel: "Restart Analysis",
        impactLabel: "Business Impact",
        domainLabel: "Business Domain",
        status: {
          waiting: "Waiting for Domain selection",
          building: "Designing Architecture...",
          ready: "Architecture Ready"
        },
        businessTypes: [
          { id: 'ecommerce', label: 'E-Commerce / B2C' },
          { id: 'internal', label: 'Internal Operations (B2B)' },
          { id: 'data', label: 'Data Analysis / AI' }
        ],
        configs: {
          ecommerce: {
            title: "E-Commerce Enterprise Platform",
            impact: "Supports 100,000+ concurrent users with 100% real-time processing and zero downtime.",
            layers: [
              { name: "PostgreSQL Database Cluster", desc: "High-performance database for massive transaction volumes." },
              { name: "High-Traffic API Layer", desc: "Enterprise-grade API management with low-latency response." },
              { name: "Next.js Storefront", desc: "SEO-optimized, ultra-fast web interface for best user experience." },
              { name: "Inventory & Recommendation AI", desc: "Real-time stock management and AI-driven personalization." }
            ]
          },
          internal: {
            title: "Internal Enterprise Operations",
            impact: "Reduces manual workload and errors by 80%, saving massive operational costs.",
            layers: [
              { name: "Secure Relational Database", desc: "Highly secure data storage with AES-256 double encryption." },
              { name: "Role-Based Access Control (RBAC)", desc: "Fine-grained permission management with banking-grade security." },
              { name: "Intelligent Admin Dashboard", desc: "Intuitive control panel designed to maximize productivity." },
              { name: "AI Workflow Automator", desc: "Autonomous AI agents handling documents and routine tasks." }
            ]
          },
          data: {
            title: "Data Analytics & AI Platform",
            impact: "Transforms company data into an 'AI Expert' for faster, data-driven executive decisions.",
            layers: [
              { name: "Vector DB & Data Warehouse", desc: "Centralized knowledge base for AI-powered data processing." },
              { name: "Real-time Big Data Pipeline", desc: "Seamless processing of massive data streams without delay." },
              { name: "Insightful Analytics Portal", desc: "Advanced dashboards providing deep business intelligence." },
              { name: "Enterprise RAG Engine (Aetox)", desc: "Agentic AI retrieval system with 100% data grounding." }
            ]
          }
        }
      }
    }
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
