// Site copy that isn't a project. Edit text here, not in the components.

export const profile = {
  name: 'Peace Ejiga',
  role: 'Workflow Automation · Web Development',
  availability: 'Taking on new projects',
  // Leave empty to hide "Download CV" buttons.
  cvUrl: 'Peace-Ejiga-CV.pdf',
  // Files in /public. No leading slash, so they also work on GitHub Pages.
  photo: 'peace-ejiga.jpg',
};

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

// Short facts under the hero, written for clients.
export const heroFacts = [
  { k: 'Services', v: 'Web design, development & automation' },
  { k: 'Working', v: 'Remote, across time zones' },
  { k: 'Response', v: 'Reply within 1–2 business days' },
];

// "How I work" steps.
export const process = [
  { no: '01', title: 'Discovery call', text: 'We talk through your business, your customers and what is slowing you down.' },
  { no: '02', title: 'Plan', text: 'You get a written plan with the scope, timeline and what you will receive.' },
  { no: '03', title: 'Design & build', text: 'I share progress as I go, so you can give feedback before anything is final.' },
  { no: '04', title: 'Launch & handover', text: 'I launch, test everything, and show you how to run and update it yourself.' },
];

export const services = [
  {
    no: '01',
    title: 'Workflow Automation',
    text: 'n8n workflows that connect everyday tools, from chat and forms to spreadsheets and calendars, with AI handling a defined step and a person reviewing what matters.',
    tags: ['n8n', 'Telegram', 'Google Sheets', 'Google Calendar'],
  },
  {
    no: '02',
    title: 'Web Development',
    text: 'Fast, responsive websites built and deployed, from business sites and landing pages to WordPress builds clients can update themselves.',
    tags: ['WordPress', 'Elementor', 'Deployment'],
  },
  {
    no: '03',
    title: 'Web Design',
    text: 'Clear layouts, strong visual hierarchy and calls-to-action that guide visitors to the next step, designed mobile-first.',
    tags: ['Figma', 'Canva', 'Responsive layouts'],
  },
];

export const toolkit = [
  { group: 'Automation & AI', items: ['n8n', 'Telegram', 'Google Sheets', 'Google Calendar', 'Gmail', 'OpenAI', 'Google Gemini'] },
  { group: 'Design & Web', items: ['WordPress', 'Elementor', 'Figma', 'Canva'] },
];

// Work history, newest first (from the CV). `year` is the label on each stacked card.
export const experience = [
  {
    year: '2025',
    period: 'Sep 2025 – Feb 2026',
    title: 'Customer Relations / Sales Representative',
    org: 'JIU JIU Rental Network',
    points: [
      'Interpreted customer enquiries about products, payment plans and service options, then gave clear answers and follow-up support.',
      'Maintained accurate customer records and sales documentation for the team.',
    ],
  },
  {
    year: '2025',
    period: 'Jul 2025 – Sep 2025',
    title: 'Administrative Assistant / Secretary',
    org: 'Power Permutations LTD',
    points: [
      'Processed invoices, purchase orders and financial requisitions, and maintained installation, equipment and maintenance records.',
      'Coordinated communication between clients, suppliers and engineers to keep project information current.',
    ],
  },
  {
    year: '2024',
    period: 'Jun 2024 – Jul 2025',
    title: 'IT & Administrative Support',
    org: 'Ministry of Interior',
    points: [
      'Troubleshot staff system issues, performed routine maintenance and trained staff across departments on digital tools.',
      'Supported day-to-day operations and maintained documentation used across departments.',
    ],
  },
  {
    year: '2022',
    period: 'Jan 2022 – Mar 2024',
    title: 'Executive Assistant',
    org: 'Faith Heroic Generation',
    points: [
      'Drafted letters, confidential correspondence, and financial and administrative reports for leadership review.',
      'Managed executive calendars, screened inbox communications, and maintained filing systems and project records.',
    ],
  },
];

export const education = [
  { title: 'M.Tech, Cyber Security', org: 'Federal University of Technology', note: 'In progress' },
  { title: 'B.Tech, Computer Science (Information Technology)', org: 'Federal University of Technology', note: 'Completed' },
  { title: 'Cybersecurity Governance, Risk & Compliance (GRC)', org: 'Professional training', note: 'In progress' },
];
