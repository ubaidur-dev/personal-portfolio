import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaPhp,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { FaKey, FaUserShield, FaDatabase, FaFilePdf } from "react-icons/fa6";
import {
  SiLaravel,
  SiComposer,
  SiNpm,
  SiMysql,
  SiTailwindcss,
  SiVite,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiScikitlearn,
  SiFramer,
  SiAxios,
  SiReactrouter,
  SiSass,
  SiBootstrap,
  SiHtml5,
  SiSwagger,
  SiGooglechrome,
} from "react-icons/si";

export const personalInfo = {
  name: "Ubaid Ur Rehman",
  firstName: "Ubaid",
  role: "Full-Stack Developer",
  headline: "Full-Stack Developer (React & Laravel)",
  roles: [
    "Full-Stack Developer",
    "React Front-End Developer",
    "Laravel Backend Engineer",
    "REST API Designer",
  ],
  summary:
    "Full-stack developer specializing in React and Laravel. I build fast, responsive React interfaces with Tailwind CSS, and secure REST APIs, authentication, role-based access control and reporting systems in Laravel and PHP. I take features end to end, from database schema and API design to the finished UI, across admin panels, dashboards and customer-facing web applications.",
  location: "Karachi, Pakistan",
  availability: "Open to full-stack, React and Laravel roles",
  resumeUrl: import.meta.env.VITE_CV_URL || null,
  avatarInitials: "UR",
};

export const cvLink = personalInfo.resumeUrl
  ? { href: personalInfo.resumeUrl, download: "Ubaid_Ur_Rehman_CV.pdf" }
  : { href: "#contact", title: "CV available on request. Get in touch." };

export const contactInfo = {
  email: "ubaidur.dev@gmail.com",
  phone: "+92 3158119936",
  github: "https://github.com/ubaidur-dev",
  githubLabel: "github.com/ubaidur-dev",
  linkedin:
    "https://pk.linkedin.com/in/ubaidurrehmandev",
  linkedinLabel: "linkedin.com/in/ubaidurrehmandev",
};

export const socialLinks = [
  { name: "GitHub", url: contactInfo.github, icon: FaGithub },
  { name: "LinkedIn", url: contactInfo.linkedin, icon: FaLinkedin },
  { name: "Email", url: `mailto:${contactInfo.email}`, icon: FaEnvelope },
  { name: "Phone", url: `tel:${contactInfo.phone}`, icon: FaPhoneAlt },
];

export const skillCategories = [
  {
    category: "Frontend",
    blurb: "Component-based, responsive user interfaces.",
    skills: [
      { name: "React 19", icon: FaReact },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS 4", icon: SiTailwindcss },
      { name: "React Router", icon: SiReactrouter },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Axios", icon: SiAxios },
      { name: "Vite", icon: SiVite },
      { name: "Sass", icon: SiSass },
      { name: "Bootstrap & jQuery", icon: SiBootstrap },
      { name: "HTML5 / CSS3", icon: SiHtml5 },
    ],
  },
  {
    category: "Backend",
    blurb: "APIs, authentication, data modelling and reporting.",
    skills: [
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "REST API design", icon: SiSwagger },
      { name: "Sanctum & OTP auth", icon: FaKey },
      { name: "Role-based access", icon: FaUserShield },
      { name: "Eloquent & migrations", icon: FaDatabase },
      { name: "PDF reports (DOMPDF)", icon: FaFilePdf },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Data & ML",
    blurb: "Machine-learning services exposed over HTTP.",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    category: "Tooling",
    blurb: "Version control, documentation and build tools.",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "Composer", icon: SiComposer },
      { name: "npm", icon: SiNpm },
      { name: "OpenAPI / Swagger", icon: SiSwagger },
      { name: "Chrome extensions (MV3)", icon: SiGooglechrome },
    ],
  },
];

export const experience = [
  {
    id: "olive-digital",
    title: "PHP Laravel Developer",
    company: "Olive Digital Pvt Ltd",
    date: "June 2025 – Present",
    icon: "code",
    accent: "cyan",
    points: [
      "Architected scalable Laravel backends and RESTful APIs, using Yajra DataTables for server-side processing to optimize query response times by 40% on high-traffic applications.",
      "Integrated AI chatbots for customer support automation and engineered granular Role-Based Access Control (RBAC) secured via JWT/OAuth2, password hashing, and encryption.",
      "Configured Laravel Cron Jobs, queues, and observers for automated email campaigns using Mailtrap/Mailpit, alongside activity logging across 100% of sensitive transactions.",
      "Built responsive interfaces with jQuery, AJAX, Select2, and Bootstrap, and integrated DOMPDF for dynamic invoice and report generation.",
      "Conducted full-stack debugging, database indexing, and query refactoring, resolving critical production bugs and reducing system downtime by 25%.",
    ],
    tech: ["Laravel", "MySQL", "JWT/OAuth2", "AI Integration"],
  },
  {
    id: "waaps",
    title: "ReactJS Developer",
    company: "WAAPS.com",
    date: "October 2023 – April 2025",
    icon: "terminal",
    accent: "purple",
    points: [
      "Engineered scalable, responsive UIs using React, Redux, and modern JavaScript (ES6+), refactoring legacy monolithic code into reusable component libraries that reduced overall development time by 25%.",
      "Integrated complex RESTful APIs for seamless asynchronous data exchange, optimizing state management and rendering cycles to reduce page load speeds by 30%.",
      "Partnered directly with backend teams to architect, contract, and align API payloads, streamlining frontend-backend data flows and reducing API integration errors by 20%.",
      "Implemented robust global state management and custom React hooks, enhancing code maintainability and delivering cross-browser compatibility across all web applications.",
    ],
    tech: ["React", "Redux", "REST APIs", "JavaScript ES6+"],
  },
];

export const projects = [
  {
    id: "careerpath-ai",
    title: "CareerPath AI",
    kicker: "React · Laravel · Python",
    tagline: "Career guidance platform with a machine-learning recommender",
    visual: {
      nodes: [
        { label: "React 19 SPA", sub: "Tailwind CSS 4 · Vite" },
        { label: "Laravel API", sub: "Sanctum · OTP · Google sign-in" },
        { label: "FastAPI service", sub: "Random Forest · scikit-learn" },
      ],
    },
    points: [
      "Recommender: Random Forest (500 trees) trained on 330 student profiles across 8 careers and 80 features, reaching 80.3% top-1 and 92.4% top-3 career accuracy on unseen students.",
      "Laravel REST API with Sanctum token auth, OTP login for students and admins, Google sign-in, password reset, account suspension and login history (39 migrations).",
      "Admin console for quiz questions, the career catalogue, student results and certificate approval. The model retrains automatically when the catalogue changes.",
    ],
    stack: ["React 19", "Laravel", "FastAPI", "scikit-learn", "MySQL"],
    repo: "https://github.com/ubaidur-dev/careerpath-ai",
    repoLabel: "Front-end source",
  },
  {
    id: "accu-systems",
    title: "Accu Systems LLC",
    kicker: "Laravel · Multi-vendor commerce",
    tagline: "Multi-vendor e-commerce platform",
    visual: {
      nodes: [
        { label: "Blade + CMS front end", sub: "Pages · sections · fields" },
        { label: "Laravel core", sub: "Spatie Permission · Media Library" },
        { label: "Commerce layer", sub: "Stripe · PayPal · shipping rates" },
      ],
    },
    points: [
      "Vendor management with subscription packages, commission rates and payout records, built on a package-based CMS.",
      "Stripe and PayPal payment settings, guest checkout, and shipping and tax rates configured per country, state and city.",
      "Admin area with role and permission management, Excel import/export logs, activity logging and dashboard insights.",
    ],
    stack: ["Laravel", "Spatie Permission", "Stripe", "MySQL"],
  },
  {
    id: "hajj-umrah-erp",
    title: "Hajj & Umrah Travel ERP",
    kicker: "Laravel · Blade · Tailwind CSS 4",
    tagline: "Back-office ERP for a travel agency",
    visual: {
      image: "/projects/hajj-dashboard.webp",
      label: "Admin dashboard",
    },
    points: [
      "Booking management with per-traveller records, a status workflow, a printable booking slip and a package manifest.",
      "Payments and refunds with receipts; invoices are created from bookings and exported as PDF.",
      "Lead pipeline with one-click conversion to customer, expense tracking and an admin-only reports and settings area.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "DOMPDF"],
    repo: "https://github.com/ubaidur-dev/hajj-umrah-travel-erp",
  },
  {
    id: "city-pharmacy",
    title: "City Pharmacy System",
    kicker: "Laravel · REST API · OpenAPI",
    tagline: "Inventory, stock alerts and POS billing",
    visual: {
      image: "/projects/pharmacy-billing.webp",
      label: "Billing & POS terminal",
    },
    points: [
      "Medicine inventory with a supplier view, low-stock, out-of-stock and expiry alerts, and bill generation from a POS screen.",
      "Server-rendered admin UI plus a REST API documented with an OpenAPI 3 specification.",
      "Admin profile, security settings and theme preferences.",
    ],
    stack: ["Laravel", "MySQL", "OpenAPI"],
    repo: "https://github.com/ubaidur-dev/city-pharmacy-system",
  },
  {
    id: "leadloom",
    title: "LeadLoom",
    kicker: "Chrome extension · Manifest V3",
    tagline: "Extracts business emails across a website's key pages",
    visual: {
      nodes: [
        { label: "Dashboard popup", sub: "Live counters · export" },
        { label: "Deep scanner", sub: "/contact · /about · /team" },
        { label: "chrome.storage.local", sub: "Persistent, local-first" },
      ],
    },
    points: [
      "Scans likely sub-pages (contact, about, team, support) asynchronously instead of only the open tab.",
      "Regex filtering removes image paths and placeholder addresses and excludes the signed-in user's own email.",
      "Results persist in chrome.storage.local and export to a text file in one click.",
    ],
    stack: ["JavaScript", "Chrome Extension API", "HTML / CSS"],
    repo: "https://github.com/ubaidur-dev/leadloom-business-emails-extractor",
  },
];

export const teamProjects = [
  {
    id: "afc-compass",
    name: "AFC Compass",
    domain: "Adult foster care management",
    built:
      "Member reporting module: ethnicity, progress-note, visit-due, visit-missed and visit-record reports.",
    stack: ["Laravel", "Blade", "jQuery"],
    link: "https://afccompass.com/",
  },
  {
    id: "novacare",
    name: "NovaCare Health Network",
    domain: "Healthcare organisation website",
    built:
      "Moved the public site onto shared CMS helpers for data cleaning and media handling; added header settings, admin controllers and seeders.",
    stack: ["Laravel", "CMS", "Blade"],
  },
  {
    id: "kirk-patrick",
    name: "Kirk Patrick Racing",
    domain: "Racing team site with shop",
    built:
      "Set up the project and CMS-driven pages; built gallery management with unlimited images per filter and an All Access filter.",
    stack: ["Laravel", "MySQL", "Blade"],
  },
  {
    id: "american-dream",
    name: "The American Dream",
    domain: "Video-contest platform",
    built:
      "Maintenance-mode middleware, the rules & regulations page and front-end video sections.",
    stack: ["Laravel", "Blade", "Bootstrap"],
  },
  {
    id: "blueflamingo",
    name: "BlueFlamingo",
    domain: "Package-based CMS site",
    built:
      "Dynamic footer email submission, page redirects, privacy and terms pages, and media handling in product management.",
    stack: ["Laravel", "CMS", "Blade"],
  },
  {
    id: "cms-builder",
    name: "CMS Builder",
    domain: "Dynamic page / section / field CMS",
    built:
      "Connected footer settings and the services section to the CMS so they are editable from the admin panel.",
    stack: ["Laravel", "Spatie Permission", "MySQL"],
  },
];

export const moreProjects = [
  {
    id: "rently",
    name: "Rently",
    blurb: "Car-rental management with fleet booking and live vehicle specs.",
    stack: ["React", "Sass", "React Router"],
    repo: "https://github.com/ubaidur-dev/rently-car-rental-system",
  },
  {
    id: "linkup",
    name: "LinkUp Workspace",
    blurb: "Team workspace with PDF-export documents and presence-aware chat.",
    stack: ["React", "Tailwind", "Framer Motion", "Socket.IO client"],
    repo: "https://github.com/ubaidur-dev/linkup-workspace",
  },
  {
    id: "jobsync",
    name: "JobSync Pro",
    blurb: "Job-search tracker dashboard built as a routed single-page app.",
    stack: ["React 19", "React Router", "Axios", "Framer Motion"],
    repo: "https://github.com/ubaidur-dev/jobsync-pro",
  },
  {
    id: "cyber-guard",
    name: "Cyber Guard Network",
    blurb: "Next.js and TypeScript application using Radix UI, Recharts and Zod.",
    stack: ["Next.js", "TypeScript", "Radix UI", "Recharts", "Zod"],
    repo: "https://github.com/ubaidur-dev/cyber-guard-network",
  },
  {
    id: "saye",
    name: "SAYE Safety App",
    blurb: "Emergency alerts using the Geolocation API and WhatsApp deep links; data stays in the browser.",
    stack: ["React", "Geolocation API", "localStorage"],
    repo: "https://github.com/ubaidur-dev/saye-women-safety-app",
  },
  {
    id: "invoice-terminal",
    name: "Invoice Terminal Pro",
    blurb: "Invoicing UI with bulk-quantity detection and automatic totals.",
    stack: ["React", "JavaScript"],
    repo: "https://github.com/ubaidur-dev/Invoice-Terminal-Pro",
  },
  {
    id: "medikeep",
    name: "MediKeep+",
    blurb: "Family health and pharmacy tracker with a medicine inventory engine.",
    stack: ["React", "JavaScript"],
    repo: "https://github.com/ubaidur-dev/medikeep-plus-healthcare",
  },
  {
    id: "archtech",
    name: "ArchTech Social",
    blurb: "Social platform for engineers with feed, activity log and direct messages.",
    stack: ["React 19", "Vite"],
    repo: "https://github.com/ubaidur-dev/archtech-social-platform",
  },
];

export const education = [
  {
    id: "fuuast",
    degree: "Bachelor of Science in Computer Science",
    institution: "Federal Urdu University of Arts, Sciences & Technology",
    date: "Jun 2021 – Jun 2025",
  },
  {
    id: "intermediate",
    degree: "Intermediate",
    institution: "Govt. Degree Boys College Gulistan-e-Jauhar",
    date: "2018 – 2020",
  },
];

export const about = {
  paragraphs: [
    "I started working as a developer in October 2023, writing React. For the first year and a half I built interfaces and connected them to REST APIs. In June 2025 I joined Olive Digital Pvt Ltd as a Laravel developer, so now I am the one building those APIs.",
    "At Olive Digital I work on Laravel back ends, building REST APIs, login and permissions, reports and PDF invoices, scheduled jobs and email, and admin panels. In my own time I build full projects from the database up. CareerPath AI, for example, has a React front end, a Laravel API and a Python model that recommends careers.",
    "When I was a React developer I worked closely with the backend team to agree on API payloads before building anything, which cut integration errors by 20%. Now that I write the APIs myself, I start from what the screen needs and design the endpoint around it.",
    "I am looking for a Full-Stack, React or Laravel role, and I am open to remote work.",
  ],
  facts: [
    { label: "Currently", value: "Olive Digital Pvt Ltd", href: "https://olivedigital.com/" },
    { label: "Experience", value: "3 years, since 2023" },
    { label: "Focus", value: "React · Laravel" },
    { label: "Location", value: "Karachi, Pakistan" },
    { label: "Timezone", value: "PKT (UTC+5)" },
    { label: "Education", value: "BS Computer Science" },
    { label: "Open to", value: "Full-time · Remote · Freelance" },
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
