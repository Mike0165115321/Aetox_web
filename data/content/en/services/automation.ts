export const automationContent = {
  hero: {
    title: {
      white: "Workflow",
      accent: "Automation Systems"
    },
    description: "We build automation systems that replace entire administrative processes. From data extraction and file conversion to updating tens of thousands of database records, our bots work 24/7 with system-level precision.",
    cta: "Start Designing Automation"
  },
  showcase: [
    {
      title: "Automate Repetitive Tasks",
      subtitle: "24/7 Admin Automation",
      desc: "Eliminate bottlenecks, remove errors, and increase efficiency so your team can focus on what matters most."
    },
    {
      title: "End Data Entry Delays",
      subtitle: "Intelligent Queue Management",
      desc: "An intelligent queuing system that automatically separates urgent tasks from regular ones for immediate processing."
    }
  ],
  pillars: {
    pillar1: {
      title: "1. Intelligent Priority Queue",
      description: "When massive workloads arrive simultaneously, the system manages and prioritizes data so high-priority tasks are always processed first.",
      features: [
        { title: "Urgent Routing System", desc: "Define task priority to automatically skip the queue for urgent processes." },
        { title: "Auto-Retry Mechanism", desc: "Handles errors and returns incomplete data to the queue for re-processing without manual intervention." },
        { title: "Real-time Tracking Dashboard", desc: "Monitor processing status, queue volume, and estimated completion times in real-time." }
      ]
    },
    pillar2: {
      title: "2. High-Performance Processing Bots",
      description: "Unlimited scalability to handle sudden spikes in workload by instantly expanding processing capacity.",
      features: [
        { title: "Parallel Processing", desc: "Distribute large datasets across multiple systems to drastically reduce processing time." },
        { title: "100% Precision Engine", desc: "Eliminate human error with bit-level data validation logic." },
        { title: "Auto-Scaling Resources", desc: "Automatically adjust server resources based on workload to maintain cost efficiency." }
      ]
    },
    pillar3: {
      title: "3. Enterprise Audit & Observability",
      description: "Every action is logged and verifiable. Transform automation from an uncontrollable black box into a measurable, auditable system.",
      features: [
        {
          title: "Immutable Audit Logs",
          desc: "Detailed logs of every success and failure for reliable tracking and historical reference."
        },
        {
          title: "Business Impact Analytics",
          desc: "Automated analysis showing time saved, volume processed, and system performance trends."
        },
        {
          title: "Instant Anomaly Detection",
          desc: "Automatically detect data and behavior anomalies, stopping risky tasks and alerting with root cause analysis."
        }
      ]
    }
  },

  roi: {
    title: 'Automation ROI Projection',
    subTitle: 'Cost Analysis & System Parameters',
    workloadTitle: 'Select Workload Type',
    unitHours: 'hrs/mo',
    unitTime: 'hrs',
    unitTimes: 'x',
    projectionDesc: 'Projected accumulated returns over {timeframe} months',
    levels: [
      { id: 'light', label: 'Basic Tasks', sublabel: 'Data Entry / Document Management' },
      { id: 'medium', label: 'Medium Tasks', sublabel: 'Verification / Multi-source Extraction' },
      { id: 'heavy', label: 'Complex Tasks', sublabel: 'Multi-system Integration / Logical Tasks' }
    ],
    timeframes: {
      m6: "6 Months",
      y1: "1 Year",
      y3: "3 Years"
    },
    labels: {
      month: "Month",
      firstMonth: "1st Month",
      year1: "Year 1",
      year2: "Year 2",
      year3: "Year 3",
      savings: "Accumulated Savings",
      breakEven: "Break-even Point",
      unit: "Unit",
      monthLabel: 'Month',
      yearLabel: 'Year',
      processedToday: 'Processed Today',
      tasks: 'Tasks'
    },
    params: {
      title: "Configure Parameters",
      volume: "Tasks / Month",
      staff: "Staff (People)",
      hourlyRate: "Hourly Rate",
      unitCost: "Hidden Cost / Task",
      botPrice: "Bot Investment (Capex)",
      maintCost: "Maintenance (Opex)"
    },
    kpis: {
      monthlySaving: "Monthly Savings",
      monthlySavingDetail: "Net monthly savings after deducting system operational costs.",
      payback: "Payback Period",
      paybackUnit: "Months"
    },
    comparison: {
      manual: "❌ Manual System",
      bot: "✅ Automated System",
      totalHours: "Total Work Hours",
      totalCost: "Current Total Cost",
      costPerUnit: "Cost per Task",
      invest: "Bot Investment",
      maint: "Maintenance Fee"
    },
    benchmark: {
      title: "Efficiency Benchmark",
      botLabel: "AETOX Bot",
      manualLabel: "Human Team",
      savedHours: "Time Saved",
      speedX: "Faster by",
      errorRate: "Avg Error Rate (Human)"
    },
    summary: {
      monthlyTitle: "Monthly Performance",
      monthlySub: "Performance Metrics",
      netProfitMonth: "Net Profit / Month",
      maintOpex: "Maintenance (Opex)",
      longTermTitle: "Long-term ROI Summary",
      longTermSub: "Accumulated ROI",
      netProfitLong: "Total Profit ({time} mo)",
      costReduction: "Cost Reduction Rate",
      capacityTitle: "Capacity Gain",
      capacitySub: "Resource Gains",
      totalSaved: "Total Time Saved"
    }
  },

  visuals: {
    pillar1: {
      title: 'Intelligent Priority Queue',
      status: "Processing",
      priority: "Priority Level",
      labels: {
        urgent: "URGENT",
        high: "HIGH",
        normal: "NORMAL",
        low: "LOW"
      }
    },
    pillar2: {
      title: 'Scalable Worker Bots',
      status: "Active",
      load: "Workload",
      throughput: "Throughput"
    },
    pillar3: {
      title: 'Audit & Observability',
      auditLog: "Audit Log",
      realtime: "Real-time"
    }
  },

  cta: {
    hirePoints: [
      'Businesses with high hidden costs from daily repetitive tasks.',
      'Teams looking to eliminate human error with automation.',
      'Organizations with massive data that can\'t be processed in time.',
      'Systems that break or slow down as data volume increases.'
    ],
    learnPoints: [
      "High-Availability system architecture.",
      "Advanced sorting and queue management logic.",
      "Cost-efficient resource auto-scaling."
    ]
  },

  appliedIn: [
    { name: 'PDF Invoice Extraction to DatabasePlatform', link: '#' },
    { name: 'Cross-platform Inventory Synchronization', link: '#' },
    { name: 'Automated Payroll Calculation System', link: '#' }
  ]
};

export default automationContent;
