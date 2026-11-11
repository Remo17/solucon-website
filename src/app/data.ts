export const services = [
  {
    number: '01',
    slug: 'software',
    need: 'Our team runs on spreadsheets and disconnected tools.',
    title: 'Custom software solutions',
    short: 'Software built around how your organisation actually works.',
    description:
      'For organisations that have outgrown spreadsheets, paper and off-the-shelf tools. We map the workflow, then design and build the system around it: dashboards, admin portals, reporting and integrations with the tools you already use.',
    tags: ['Business systems', 'Dashboards', 'Integrations'],
    deliverables: ['Workflow mapping', 'Admin portals and dashboards', 'Data and reporting', 'Systems integration'],
  },
  {
    number: '02',
    slug: 'websites',
    need: 'Our website no longer reflects who we are.',
    title: 'Websites & web applications',
    short: 'Company websites and web apps that are clear, fast and easy to manage.',
    description:
      'For businesses that need a credible online presence or a tool customers can use. We plan the structure, design the interface and build a responsive site or web application, with content and handover agreed up front.',
    tags: ['Company websites', 'Web apps', 'Framer'],
    deliverables: ['Site structure and content', 'UX and interface design', 'Development', 'Launch and handover'],
  },
  {
    number: '03',
    slug: 'domains',
    need: 'We don’t know who controls our domain, hosting or security certificate.',
    title: 'Domains, hosting & security',
    short: 'Your domain, hosting and HTTPS set up properly and kept under your control.',
    description:
      'For organisations whose domain, hosting and certificates are scattered across old accounts. We register or transfer your domain, configure DNS, set up hosting and TLS so every page loads over HTTPS, and make sure the accounts are in your name.',
    tags: ['Domains', 'DNS', 'TLS / HTTPS'],
    deliverables: ['Domain registration and transfer', 'DNS configuration', 'Hosting and deployment', 'TLS certificates and HTTPS'],
  },
  {
    number: '04',
    slug: 'email',
    need: 'We still send business email from personal Gmail addresses.',
    title: 'Business email & Google Workspace',
    short: 'Professional email on your own domain, with shared tools for your team.',
    description:
      'For teams that need email addresses on their own domain. We set up Google Workspace or another provider, create mailboxes and shared addresses, configure the records that keep mail out of spam, and move existing email across.',
    tags: ['Custom email', 'Google Workspace', 'Migration'],
    deliverables: ['Custom domain email', 'Google Workspace setup', 'SPF, DKIM and DMARC records', 'Mailbox migration and user setup'],
  },
  {
    number: '05',
    slug: 'apis',
    need: 'Our applications need to share data reliably.',
    title: 'Mobile & API architecture',
    short: 'Stable foundations for connected products and services.',
    description:
      'For products that need to exchange data between applications. We scope API interfaces, authentication and integration layers around your use case, with documentation and deployment requirements defined before development.',
    tags: ['APIs', 'Authentication', 'Mobile'],
    deliverables: ['API design', 'Authentication', 'Integration layers', 'Monitoring and support'],
  },
  {
    number: '06',
    slug: 'education',
    need: 'Our learners and teachers need one place to work.',
    title: 'Education technology',
    short: 'Learning platforms built for real schools and institutions.',
    description:
      'For schools that want teaching and administration online. We build learning platforms with dashboards for learners, teachers and administrators, covering homework, materials, marks, attendance and announcements.',
    tags: ['EdTech', 'Learning platforms', 'Schools'],
    deliverables: ['Learning platforms', 'Teacher and admin tools', 'Assessment and marks', 'Attendance and reporting'],
  },
]

type Project = {
  number: string
  title: string
  client: string
  category: string
  platform: string
  year: string
  url?: string
  gallery?: { src: string; label: string }[]
  domain: string
  image: string
  logo: string
  summary: string
  role: string[]
  scope: string[]
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Bokamoso Geomatics',
    client: 'Bokamoso Geomatics · Rustenburg, North West',
    category: 'Company website',
    platform: 'Framer',
    year: '2026',
    url: 'https://bokamosogeomatics.co.za/',
    domain: 'bokamosogeomatics.co.za',
    image: '/work/bokamoso-geomatics.jpg',
    logo: '/partners/bokamoso-geomatics.png',
    summary:
      'A geomatics and land surveying practice led by Kereng Senna, a registered Professional Land Surveyor, serving municipal, public and private clients. The site presents five survey disciplines and a record of projects across the North West.',
    role: [
      'Structured the site around how clients look for a surveyor: discipline first, then evidence of past work.',
      'Designed and built the full site in Framer, with dedicated pages for each service and each project.',
      'Wrote the information architecture for cadastral, engineering, topographic, GIS and town-planning services.',
      'Set up quote and consultation requests, search metadata and analytics.',
    ],
    scope: ['Home', 'About', 'Services', 'Projects', 'Expertise', 'Contact'],
  },
  {
    number: '02',
    title: 'Taxila Learning Hub',
    client: 'Taxila Secondary School · Polokwane, Limpopo',
    category: 'Learning platform',
    platform: 'Node.js · Express · SQL Server · Python',
    year: '2026',
    domain: 'Taxila Learning Hub',
    image: '/work/taxila-learning-hub-login.jpg',
    gallery: [{ src: '/work/taxila-learning-hub-ai-tutor.jpg', label: 'AI Tutor · learner view' }],
    logo: '/partners/taxila-secondary.png',
    summary:
      'A learning platform built for Taxila Secondary School to move teaching and school administration online. Learners, teachers and administrators each get their own dashboard, with homework, study materials, marks, attendance and announcements in one place.',
    role: [
      'Built role-based dashboards for learners, teachers and administrators, with secure accounts and email verification.',
      'Gave teachers tools to upload homework, study materials, marks and announcements, and to track attendance and performance.',
      'Added an AI Tutor that answers learner questions and reads attached files, using each teacher’s own knowledge base.',
      'Trained a risk-prediction model that flags learners who may need extra support, from their marks and attendance.',
    ],
    scope: ['Learner', 'Teacher', 'Administrator', 'AI Tutor', 'Risk reports', 'Year-end promotion'],
  },
]

export const team = [
  {
    name: 'Remoratile Tjia',
    role: 'Founder · Design & engineering',
    note: 'Leads each project from discovery to handover.',
    image: '/team/remoratile-tjia.jpg',
    linkedin: 'https://www.linkedin.com/in/remoratile-tjia-412772205/',
  },
  {
    name: 'Mothibi Malebana',
    role: 'Technical Engineer',
    note: '14× IBM certified.',
    image: '/team/mothibi-malebana.jpg',
    linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Mothibi%20Malebana',
  },
  {
    name: 'Willie Van Rooyen',
    role: 'Technical Engineer',
    note: 'Technician at Pedion.',
    image: '/team/willie-van-rooyen.jpg',
    linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Willie%20Van%20Rooyen',
  },
]

export const principles = [
  ['Clarity over clutter', 'Simple interfaces, intentional workflows and no unnecessary complexity.'],
  ['Built to keep working', 'Performance, security and reliability are considered from day one.'],
  ['A partner, not a vendor', 'We work closely with your team and communicate without the technical fog.'],
]
