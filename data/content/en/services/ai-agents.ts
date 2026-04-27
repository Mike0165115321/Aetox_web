export const aiAgentsContent = {
  hero: {
    badge: "Intelligent AI Agent Architecture",
    title: {
      white: "Enterprise-Grade",
      accent: "Artificial Intelligence"
    },
    description: "Transform static organizational data into 'AI Experts' ready to help make decisions and work for you. With high-accuracy Intelligent RAG systems and verifiable source citations.",
    cta: "Start Designing Your AI Solution",
    demoLabel: "View Demo",
    backLabel: "Back to Services"
  },

  showcase: [
    {
      title: "Hybrid Retrieval: Semantic Search",
      subtitle: "Multi-Dimensional Data Retrieval",
      desc: "Merge the power of Semantic Search and Keyword Search to achieve the most accurate data retrieval from your database."
    },
    {
      title: "Self-Correction System",
      subtitle: "Accuracy Verification",
      desc: "Mechanisms to verify data accuracy before responding. If confidence is too low, the AI automatically performs a new search."
    },
    {
      title: "Strategic Result Synthesis",
      subtitle: "Summarization for Decision Making",
      desc: "Not just answering questions, but synthesizing data into plans, comparison tables, or executive summaries for immediate decision making."
    }
  ],

  stats: {
    accuracy: "99.9% Accuracy",
    latency: "Sub-second Response"
  },

  pillars: {
    pillar1: {
      title: "1. Agentic Orchestrator",
      description: "An intelligent control system that acts as a 'Team Lead' to receive user input and plan data retrieval systematically.",
      features: [
        {
          title: "Intelligent Decomposition",
          desc: "Break large problems into multi-dimensional sub-queries for deeper and broader answers than generic AI (Query Decomposition)."
        },
        {
          title: "Reasoning Loop",
          desc: "AI reviews its own answers before displaying them to ensure logic is correct and complete according to requirements."
        },
        {
          title: "Automated Tool Management",
          desc: "Ability to select and use external tools or APIs to find additional information to supplement answers."
        }
      ]
    },

    pillar2: {
      title: "2. Enterprise RAG Architecture",
      description: "Implement a robust, secure Retrieval-Augmented Generation (RAG) system that handles large-scale enterprise data.",
      features: [
        {
          title: "Semantic Knowledge Retrieval",
          desc: "Uses Vector Embeddings to help AI understand the meaning of questions, not just keyword matching."
        },
        {
          title: "Private Vector Database",
          desc: "Store data in a highly secure Private Vector Database with millisecond-level search speeds."
        },
        {
          title: "Real-time Data Processing",
          desc: "Systems that can update new knowledge into the AI brain instantly without re-training."
        }
      ]
    },

    pillar3: {
      title: "3. Truth & Faithfulness Evaluation",
      description: "Strict verification mechanisms to prevent AI Hallucination and ensure every answer is grounded in reality.",
      features: [
        {
          title: "Source Citation",
          desc: "Clearly identifies sources, page numbers, and reference lines. 100% verifiable for every answer."
        },
        {
          title: "Anti-Hallucination Grounding",
          desc: "Mechanisms to verify and limit data scope (Grounding) to prevent AI from generating answers outside the defined database."
        },
        {
          title: "Brand Personality Tuning",
          desc: "Customize interaction tones to match your brand or the style of specific experts in your business."
        }
      ]
    }
  },

  simulator: {
    title: { white: "Investment Value", accent: "AI ROI Simulator" },
    description: "Analyze the value of implementing AI Agents in your business compared to human labor and clearly reduced costs.",
    tiers: [
      { id: 'personal', label: 'Small Team', sublabel: '1-3 people' },
      { id: 'early', label: 'Startup', sublabel: 'Early stage' },
      { id: 'growth', label: 'Growth Stage (SME)', sublabel: 'Expansion stage' },
      { id: 'enterprise', label: 'Enterprise', sublabel: 'Large organization' }
    ],
    labels: {
      info: "Basic Info",
      queries: "Queries per Day",
      staff: "Related Staff",
      salary: "Average Salary",
      time: "Search Time / Task",
      value: "Avg Value per Case",
      aetoxBudget: "AETOX Investment",
      setup: "Setup Fee",
      monthly: "Monthly Service (SaaS)",
      unitStaff: "people",
      unitTime: "min",
      capacity: "Capacity Gain",
      capacityDesc: "AI can replace {{staffCount}} staff members and handle up to {{humanCapacity}} cases/day",
      monthlySaving: "Monthly Savings",
      monthlySavingDesc: "Reduced labor cost by {{humanCost}} per month",
      hoursRecovered: "Hours Recovered",
      hoursRecoveredDesc: "Time staff can refocus on critical tasks",
      yearlySaving: "Net Annual Profit",
      yearlySavingDesc: "Total business value added after deducting AI costs",
      breakEvenLabel: "Payback Period",
      instantly: "Instantly",
      unitMonth: "mo",
      unitHour: "hrs",
      unitMultiplier: "x",
      roiPerYear: "ROI per Year",
      status: "Status",
      people: "people"
    },
    features: [
      { 
        icon: 'ShieldCheck', 
        title: "Maximum Data Security", 
        desc: "Your organizational data will not be used to train public models. 100% privacy guaranteed." 
      },
      { 
        icon: 'RefreshCw', 
        title: "Real-time Knowledge Updates", 
        desc: "No need to re-train models. Just upload documents and the AI is ready with the latest info." 
      },
      { 
        icon: 'Cpu', 
        title: "Agentic Processing", 
        desc: "AI doesn't just answer; it thinks, plans, and selects appropriate tools for the best results." 
      }
    ],
    comparisonRows: [
      { label: "Data Accuracy", general: "Medium (May hallucinate)", aetox: "Very High (100% Fact-Grounded)", highlight: true },
      { label: "Source Citation", general: "None or Unclear", aetox: "Clear page and line citations", highlight: false },
      { label: "Data Privacy", general: "Often trains public models", aetox: "Stored in Private Vector DB", highlight: true },
      { label: "Update Speed", general: "Wait for re-training (months)", aetox: "Instant updates (minute by minute)", highlight: false }
    ],
    pipeline: {
      title: "AI Brain Construction Path",
      subtitle: "Knowledge Pipeline",
      description: "From raw enterprise data to an intelligent agent system ready to work for you in every department.",
      steps: [
        {
          step: "Step 01",
          title: "Data Ingestion",
          desc: "Connect raw data from multiple sources (PDF, SQL, API) into the system.",
          tags: ["Multi-source", "Auto-sync"],
          config: { "Format": "OCR Enabled", "Sync": "Scheduled" },
          status: "Connected"
        },
        {
          step: "Step 02",
          title: "Neural Embedding",
          desc: "Chunk data and convert to Vector coordinates for AI context understanding.",
          tags: ["GPU Processed", "Semantic"],
          config: { "Engine": "Ada-002 / Custom", "Chunking": "Semantic" },
          metrics: { "Latency": "< 50ms" }
        },
        {
          step: "Step 03",
          title: "Vector Storage",
          desc: "Store knowledge in a highly secure private vector database.",
          tags: ["Encryption", "Isolated"],
          config: { "Provider": "Private Cloud", "Security": "AES-256" },
          status: "Protected"
        },
        {
          step: "Step 04",
          title: "Agentic Interface",
          desc: "Enable agents to retrieve information, interact, and synthesize results.",
          tags: ["LLM-Ops", "Tool Calling"],
          config: { "Orchestrator": "Aetox Core", "Interface": "Ready" },
          metrics: { "Accuracy": "99.9%" }
        }
      ],
      footerNote: "System designed to enterprise security standards to protect your intellectual assets."
    }
  },

  ragChat: {
    title: { white: "RAG Experience", accent: "Simulator" },
    description: "Test real-time data retrieval in different scenarios.",
    labels: {
      citation: "Citation",
      activeKnowledge: "Active Knowledge Base"
    },
    useCases: [
      {
        id: 'hr',
        label: 'Operations / HR',
        question: "Can employees at Manager level and above claim additional health insurance budget beyond basic benefits?",
        answer: "According to the 2024 Benefits Policy, employees at Manager level (Grade M1 and above) can claim 'Executive Health Top-up' up to an additional 20,000 THB/year.\n\nConditions:\n1. Use Form B-02 (Special Benefits)\n2. Attach original receipts from partner healthcare facilities\n3. Must be processed within 30 days of the receipt date.",
        citation: "Employee_Benefits_2024.pdf (Section 4.3, Page 28)"
      },
      {
        id: 'student',
        label: 'Student Registrar',
        question: "What are the requirements and minimum GPA for cross-faculty elective registration?",
        answer: `Main conditions for cross-faculty elective registration are as follows:

• Must be a 3rd-year student or above
• Cumulative GPA (GPAX) not lower than 2.75
• Must receive approval from advisor via online form RE-09

Note: The specific course must not be marked as 'Reserved for faculty students' in the curriculum manual.`,
        citation: "Academic_Regulation_2022.pdf (Section 7.2)"
      },
      {
        id: 'librarian',
        label: 'Librarian / Library',
        question: "Are there any recommended research papers on 'Autonomous Drones' published in 2024 focusing on Computer Vision?",
        answer: "One internal research document matches your criteria:\n\n📄 Title: 'Vision-Based Navigation for Micro-UAVs'\n📅 Published: January 2024\n🔍 Abstract: Uses SLAM techniques combined with Deep Learning for real-time obstacle avoidance in GPS-denied areas.\n\nLocation: Digital Repository, ID R-2024-CV-001.",
        citation: "Internal_Research_Archive_2024.csv (Row 142)"
      },
      {
        id: 'legal',
        label: 'Legal / Executive',
        question: "Does the new Subcontractor Agreement draft conflict with the company's master NDA policy regarding data disclosure?",
        answer: "Structural conflict detected:\n\n🔴 Conflict: Draft Clause 4.2 states 'Either party may disclose supplier names for marketing purposes.'\n\n🔵 Company Policy: Master NDA Clause 2.1 clearly states 'Supplier names are considered Highly Confidential and must not be disclosed to third parties under any circumstances.'\n\nRecommendation: Remove Clause 4.2 or add a condition for prior written approval.",
        citation: "Master_NDA_2025.pdf (Page 3) / Draft_Sub_A78.docx"
      }
    ]
  },

  engagement: {
    title: "Experience Intelligent AI",
    subtitle: "Interactive AI Showcase",
    labels: {
      appliedIn: "Real-world Applications:",
      learnMore: "Learn More"
    },
    steps: [
      {
        title: "Agentic Orchestrator",
        subtitle: "Intelligent Control",
        desc: "Planning and decomposing AI sub-tasks to process complex data as fast and accurately as possible."
      },
      {
        title: "Hybrid Retrieval",
        subtitle: "Data Retrieval Precision",
        desc: "Search technology merging Semantic and Keyword to reach 100% targeted data."
      },
      {
        title: "Self-Correction System",
        subtitle: "Accuracy Shield",
        desc: "Verification mechanisms before responding to prevent errors and inaccurate data."
      },
      {
        title: "Strategic Synthesis",
        subtitle: "Strategic Insights",
        desc: "Summarizing results and providing proactive recommendations for immediate business decisions."
      },
      {
        title: "Real-time Streaming",
        subtitle: "Limitless Context",
        desc: "Seamless second-by-second responses supporting continuous 24/7 operations."
      }
    ]
  },

  visuals: {
    orchestrator: {
      phases: [
        { title: 'Decomposition', tag: 'Step 01', desc: 'Analyzes complex questions and breaks them into sub-queries.' },
        { title: 'Parallel Processing', tag: 'Step 02', desc: 'Runs multiple agents simultaneously to process different parts.' },
        { title: 'Synthesis', tag: 'Step 03', desc: 'Consolidates answers from all sources into a complete report.' }
      ],
      complexQuery: "Complex Query",
      energyRisk: "Energy Risk Analysis 2026...",
      subTasks: "Decomposing Tasks ↓",
      marketTrends: "Market Trends",
      financials: "Financials",
      consolidatedReport: "Consolidated Report"
    },
    hybrid: {
      phases: [
        { title: "HyDE Embedding", tag: "Step 01", desc: "Simulates potential answers as Vector targets." },
        { title: "Hybrid Search", tag: "Step 02", desc: "Semantic GPU + Keyword searches run in parallel." },
        { title: "Adaptive Reranking", tag: "Step 03", desc: "Uses Cross-Encoder to decide — skips ranking if score is high enough." }
      ],
      query: "Query",
      hypothetical: "AI Simulated Answer",
      vector: "Hypothetical Vector",
      threshold: "Threshold: 0.7+ → Skip Reranking"
    },
    correction: {
      phases: [
        { title: "Confidence Check", tag: "Step 01", desc: "AI checks its own response confidence score." },
        { title: "Verification Loop", tag: "Step 02", desc: "If accuracy is too low, the system automatically re-queries." },
        { title: "Self-Optimization", tag: "Step 03", desc: "Fine-tunes search parameters for higher accuracy in the next round." }
      ],
      confidence: "Confidence",
      lowPrecision: "Low Accuracy Detected",
      requerying: "Re-querying Knowledge Base...",
      optimized: "Verified and Improved"
    },
    strategic: {
      phases: [
        { title: 'Adaptive Role-Playing', tag: 'Step 01', desc: 'AI assumes expert roles based on the given task.' },
        { title: 'Cross-Concept Synthesis', tag: 'Step 02', desc: 'Analyzes similarities/differences across large databases.' },
        { title: 'Inference Consolidation', tag: 'Step 03', desc: 'Synthesizes data into accurate strategic answers.' }
      ],
      suggestion: "Recommendation:",
      liquidity: "Accelerate expansion in Q2 as competitor liquidity decreases..."
    },
    stream: {
      fullText: 'Analysis Complete: New stability point found at 94.2% with seamless data flow 24/7...',
      latency: "Latency",
      throughput: "Throughput",
      synchronized: "Synchronized"
    }
  },
  cta: {
    hirePoints: [
      'Organizations with massive documentation where staff can\'t find info.',
      'Businesses needing a private AI assistant with deep knowledge of internal data.',
      'Executive teams needing fast and accurate data analysis summaries.'
    ],
    learnPoints: [
      "Those interested in deep RAG and Agentic Frameworks.",
      "Developers looking to build production-ready enterprise AI solutions.",
      "Executives planning ROI-focused AI strategies."
    ]
  },

  appliedIn: [
    { name: 'BookMind: Intelligent Library System', link: 'https://github.com/Mike0165115321/BookMind.git' },
    { name: 'AI Robot "Nong Nan"', link: 'https://github.com/Mike0165115321/AI-Robot-Guide-.git' },
    { name: 'Intelligent Legal Document Analyzer' }
  ]
};

export default aiAgentsContent;
