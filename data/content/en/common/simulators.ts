const simulatorsContent = {
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
};

export default simulatorsContent;
