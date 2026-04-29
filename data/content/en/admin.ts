const admin = {
  header: {
    title: 'Command Center',
    subtitle: 'Aetox.dev Systems Active',
    tabs: {
      projects: 'PROJECTS',
      leads: 'LEADS'
    }
  },
  login: {
    title: 'Aetox HQ',
    subtitle: 'Strategic Command Center',
    placeholder: 'ACCESS CODE',
    button: 'Authenticate',
    error: 'Incorrect passcode'
  },
  projects: {
    title: 'Project Management',
    subtitle: 'Manage company portfolio and credits',
    button: 'NEW PROJECT',
    empty: 'No project deployments detected',
    addFirst: '+ INITIALIZE FIRST PROJECT'
  },
  leads: {
    title: 'Leads & Applications',
    subtitle: 'Customer & Academy management (Decision Support Layer)',
    filters: {
      all: 'ALL',
      new: 'NEW',
      contacted: 'CONTACTED',
      qualified: 'QUALIFIED',
      closed: 'CLOSED'
    },
    searchPlaceholder: 'Search name or email...',
    empty: 'No leads found',
    loading: 'Fetching lead data...',
    decisionSupport: 'Decision Support Layer',
    priority: 'Priority',
    stats: {
      total: 'Total Leads',
      new: 'New',
      academy: 'Academy',
      project: 'Projects'
    },
    badges: {
      project: 'PROJECT',
      academy: 'ACADEMY',
      new: 'NEW',
      contacted: 'CONTACTED',
      qualified: 'QUALIFIED',
      rejected: 'REJECTED',
      closed: 'CLOSED'
    },
    priorities: {
      low: 'LOW',
      medium: 'MEDIUM',
      high: 'HIGH'
    },
    details: {
      company: 'Company',
      category: 'Category',
      budget: 'Budget',
      timeline: 'Timeline',
      challenge: 'Challenge / Requirement',
      experience: 'Experience',
      goals: 'Goals'
    }
  }
};

export default admin;
