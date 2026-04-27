export const contactContent = {
  hero: {
    title: "Tell Us About Your Most Boring Tasks",
    subtitle: "For a system architecture designed specifically for your business."
  },
  floatingNav: {
    direct: "Direct Contact",
    details: "Project Details",
    roadmap: "Next Steps"
  },
  success: {
    title: "Goals Received!",
    message: "Our architects are analyzing your requirements and initial budget. We will contact you shortly.",
    close: "Send another message"
  },
  directContact: {
    email: "Contact via Email",
    phone: "Direct Call",
    github: "Portfolio on GitHub"
  },
  roadmap: {
    title: "What Happens Next?",
    subtitle: "Steps after submitting your information to give you a clear picture of our process.",
    steps: [
      { n: 1, t: 'Analysis', d: 'We analyze the challenges you submit within 24 hours to find key areas for improvement.' },
      { n: 2, t: 'Planning Consultation', d: 'A detailed discussion to plan the system that best fits your business goals.' },
      { n: 3, t: 'Proposal', d: 'Receive a clear project proposal and budget, then we begin implementation.' }
    ],
    privacyNote: "Privacy Guaranteed — Your data is kept strictly confidential."
  },
  form: {
    sections: {
      basic: "Your Basic Information",
      contact: "Contact Preferences",
      project: "Project Details"
    },
    identity: {
      name: { label: "Full Name", placeholder: "Enter your name" },
      company: { label: "Company / Organization", placeholder: "Specify your organization for scale analysis" },
      email: { label: "Contact Email (for proposals)", placeholder: "your@email.com" },
      preferredMethod: {
        label: "Preferred Contact Method",
        options: ["Phone", "Line ID", "Facebook", "Instagram", "Email"]
      },
      contactDetail: { label: "Contact Details (Phone / ID / Profile Link)", placeholder: "Enter details based on selected method" },
      contactTime: {
        label: "Preferred Contact Time",
        options: ["Anytime", "Morning (09:00 - 12:00)", "Afternoon (13:00 - 18:00)", "After Hours (After 18:00)"]
      }
    },
    category: {
      label: "Your Primary Goal",
      options: [
        "Upgrade with AI (AI Agents & RAG Systems)",
        "Automate Repetitive Tasks (Bot/Automation)",
        "Build New Platform/Dashboard (Full-Stack Web)",
        "Architectural Review of Existing System"
      ]
    },
    budget: {
      label: "Estimated Budget Range",
      options: [
        "Below 10,000 THB",
        "10,000 - 50,000 THB",
        "50,000 - 100,000 THB",
        "100,000 THB and above",
        "No clear budget yet (Require estimation first)"
      ]
    },
    timeline: {
      label: "Desired Start Date (Timeline)",
      options: [
        "Urgent (Start immediately)",
        "Within 1-3 months",
        "Planning for next year"
      ]
    },
    challenge: {
      label: "Business Challenges or Desired System",
      placeholder: "Describe the boring tasks or bottlenecks you want to eliminate. e.g., slow data entry, frequent system crashes, or high admin workload..."
    },
    submit: "Send Message"
  }
};

export default contactContent;
