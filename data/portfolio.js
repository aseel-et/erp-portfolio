// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file only.
// Lines marked  TODO  need your real details before you publish.
// Empty strings ("") are hidden on the site automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aseel Etbini",
  role: "ERPNext Implementation Developer",
  roles: ["ERPNext Implementation Developer", "ERP Solutions Specialist", "Software Developer"],
  headline: "ERPNext systems shaped around how a business actually works.",
  intro:
    "I’m an ERPNext implementation developer with one year of hands-on professional experience. I configure, customize and support ERP systems for real businesses, from the first requirements meeting to go-live and the support that follows.",
  availability: "Open to ERPNext and Frappe roles, including remote positions",
  email: "you@example.com", // TODO
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO
  github: "https://github.com/aseel-et",
  cv: "/cv.pdf" // TODO: put your CV in /public/cv.pdf
};

export const about = {
  paragraphs: [
    "I came to ERP work through software development, with a degree in Computer Science. Over the past year I’ve worked hands-on with ERPNext and the Frappe Framework on real business projects, where the goal was never just working code but a system people could rely on every day.",
    "Most of my work sits between business and technology: understanding how a team sells, buys, stocks and accounts for things, then turning that into configuration, custom DocTypes, scripts, reports and permissions that fit. When standard features aren’t enough, I build custom apps and integrations on top of Frappe.",
    "I care about systems that stay reliable after go-live. That means clean data migration, sensible permissions, clear training for users, and fixing problems at their source rather than patching around them."
  ],
  facts: [
    { label: "Professional experience", value: "1 year, ERP implementation and development" },
    { label: "Main platform", value: "ERPNext and the Frappe Framework" },
    { label: "Education", value: "Bachelor’s degree in Computer Science" }
  ]
};

export const skills = [
  { group: "ERP development", items: ["ERPNext", "Frappe Framework", "Custom apps", "DocTypes", "Client scripts", "Server scripts"] },
  { group: "Programming", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Databases", items: ["MariaDB", "MySQL", "PostgreSQL"] },
  { group: "Backend and integrations", items: ["REST APIs", "Laravel"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Linux"] }
];

export const modules = [
  "Accounting", "Sales", "Purchasing", "Inventory", "Manufacturing",
  "HR", "Payroll", "CRM", "Project Management"
];

// Ordered as an implementation actually runs
export const implementation = [
  { step: "Requirements analysis", note: "Map how the business works today and what it needs." },
  { step: "System configuration", note: "Set up companies, accounts, items, warehouses and settings." },
  { step: "Workflow automation", note: "Approval flows, notifications and scripted business rules." },
  { step: "Data migration", note: "Clean and import masters and opening balances." },
  { step: "Custom reports", note: "Reports that answer the questions managers actually ask." },
  { step: "User permissions", note: "Roles and access that match real responsibilities." },
  { step: "Training", note: "Get users confident in their daily tasks." },
  { step: "Technical support", note: "Fix issues and keep the system healthy after go-live." }
];

// TODO: Replace these with your real projects.
// Keep each one honest: describe the work you did. Add a client or industry
// and a measurable outcome where you can — empty fields are hidden.
export const projects = [
  {
    title: "End-to-end ERPNext implementation",
    type: "Implementation",
    client: "", // e.g. "Retail and distribution company"
    modules: ["Accounting", "Sales", "Purchasing", "Inventory"],
    problem:
      "The business ran sales, purchasing and stock on separate tools, so numbers never matched and reporting took days.",
    solution:
      "Gathered requirements, configured ERPNext across the core modules, migrated master data and opening balances, set role-based permissions and trained the team.",
    outcome: "", // e.g. "Month-end close went from X days to Y"
    stack: ["ERPNext", "MariaDB", "Data Import"]
  },
  {
    title: "Custom Frappe app for a business process",
    type: "Custom app",
    client: "",
    modules: ["Custom DocTypes"],
    problem:
      "A core process had no fit in standard ERPNext and was being tracked in spreadsheets outside the system.",
    solution:
      "Designed custom DocTypes, linked them to standard documents and added client and server scripts to enforce the business rules inside ERPNext.",
    outcome: "",
    stack: ["Frappe", "Python", "JavaScript"]
  },
  {
    title: "Approval workflow automation",
    type: "Automation",
    client: "",
    modules: ["Purchasing", "HR"],
    problem: "Approvals happened over chat and email, with no record of who approved what.",
    solution:
      "Built ERPNext workflows with role-based states, automatic notifications and server scripts that validate documents before they move forward.",
    outcome: "",
    stack: ["Workflows", "Server scripts", "Notifications"]
  },
  {
    title: "Management reports and dashboards",
    type: "Reporting",
    client: "",
    modules: ["Accounting", "Sales", "Inventory"],
    problem: "Managers needed answers the standard reports didn’t give them.",
    solution: "Wrote script and query reports in SQL and Python with filters tailored to how each team reviews its numbers.",
    outcome: "",
    stack: ["SQL", "Python", "Query reports"]
  },
  {
    title: "System integration over REST APIs",
    type: "Integration",
    client: "",
    modules: ["Sales", "Inventory"],
    problem: "An external system and ERPNext held the same data, entered twice by hand.",
    solution: "Connected the two through the Frappe REST API so records sync automatically, with a Laravel service on the external side.",
    outcome: "",
    stack: ["REST API", "Frappe", "Laravel"]
  }
];

export const experience = [
  {
    role: "ERPNext Implementation Developer",
    company: "Company name", // TODO
    period: "2025 – Present", // TODO: confirm dates
    summary:
      "Implement, customize and maintain ERPNext for business clients, working directly with users to turn their processes into a working system.",
    responsibilities: [
      "Analyse business requirements and translate them into ERPNext configuration and customizations.",
      "Configure core modules including Accounting, Sales, Purchasing, Inventory, HR and Payroll.",
      "Build custom DocTypes, client scripts and server scripts on the Frappe Framework.",
      "Automate approval workflows and notifications.",
      "Prepare and migrate master data and opening balances.",
      "Write custom reports in SQL and Python.",
      "Set up user roles and permissions, train users and provide technical support after go-live."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor’s degree in Computer Science",
    school: "", // TODO: university name (optional)
    period: "" // TODO: graduation year (optional)
  }
];
