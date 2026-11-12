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
    text: 'Fast, responsive websites built and deployed: online stores with checkout and an order admin, charity sites with donations, and business sites clients can update themselves.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Cloudflare', 'WordPress'],
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
  { group: 'Web development', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers & D1', 'Vercel', 'WordPress', 'Elementor'] },
  { group: 'Design', items: ['Figma', 'Canva', 'Responsive layouts'] },
];

// Work history, newest first. The first two are current; the rest come from the CV.
export const experience = [
  {
    year: '2025',
    period: '2025 – Present',
    title: 'Web Developer & Automation Specialist',
    org: 'Independent',
    points: [
      'Designed and built Finest Fossil, a live sneaker store with colour-by-colour product pages, checkout, order tracking and a private order admin (Next.js, Cloudflare Workers and D1).',
      'Built Helping Hands Foundation, a full charity website with a USD donation flow, campaign pages, an annual report and working volunteer and contact forms.',
      'Built n8n workflows that answer customers on Telegram, book appointments, log meals with AI, and send order reminders from Google Sheets and Gmail.',
    ],
  },
  {
    period: 'Since university',
    title: 'Founder',
    org: 'Finest Fossil, sneaker business',
    points: [
      'Run a sneaker business that delivers across Nigeria: listings, pricing, customer enquiries, payment confirmation and delivery.',
      'Designed the brand and moved ordering from WhatsApp chats to an online store with order numbers and status tracking.',
    ],
  },
  {
    year: '2025',
    period: 'Sep 2025 – Feb 2026',
    title: 'Customer Relations / Sales Representative',
    org: 'JIU JIU Rental Network',
    points: [
      'Answered customer enquiries on products, payment plans and service options, and followed each one through to a clear outcome.',
      'Kept customer records and sales documentation accurate and up to date for the team.',
    ],
  },
  {
    year: '2025',
    period: 'Jul 2025 – Sep 2025',
    title: 'Administrative Assistant / Secretary',
    org: 'Power Permutations LTD',
    points: [
      'Processed invoices, purchase orders and requisitions, and kept installation, equipment and maintenance records in order.',
      'Coordinated clients, suppliers and engineers so everyone worked from the same, current project information.',
    ],
  },
  {
    year: '2024',
    period: 'Jun 2024 – Jul 2025',
    title: 'IT & Administrative Support',
    org: 'Ministry of Interior',
    points: [
      'Resolved staff system issues, carried out routine maintenance and trained staff across departments on digital tools.',
      'Supported daily operations and maintained documentation used across departments.',
    ],
  },
  {
    year: '2022',
    period: 'Jan 2022 – Mar 2024',
    title: 'Executive Assistant',
    org: 'Faith Heroic Generation',
    points: [
      'Drafted letters, confidential correspondence and financial and administrative reports for leadership.',
      'Managed executive calendars and inboxes, and kept filing systems and project records organised.',
    ],
  },
];

export const education = [
  { title: 'M.Tech, Cyber Security', org: 'Postgraduate', note: 'In progress' },
  { title: 'B.Tech, Computer Science (Information Technology)', org: 'Undergraduate', note: 'Completed' },
  { title: 'Cybersecurity Governance, Risk & Compliance (GRC)', org: 'Professional training', note: 'In progress' },
];
