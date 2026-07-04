/**
 * All site content lives here. Components stay purely presentational,
 * and updating the CV never means touching JSX.
 */

export const site = {
  name: "Aryan Mehta",
  headline: "Full Stack Developer with Frontend Expertise.",
  intro:
    "I build React and TypeScript applications with a focus on scalable frontend architecture, reusable UI patterns, and full-stack product thinking. Recently, I've worked on legacy modernisation, data-heavy interfaces, and backend-driven applications using Node, Express, and PostgreSQL.",
  location: "London",
  email: "am.career11@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/am1553" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryanmehta-dev" },
    { label: "LeetCode", href: "https://leetcode.com/u/arryan_m/" },
  ],
};

export type Layer = "client" | "api" | "db";

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  layers: Layer[];
  stack: string[];
  code?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Notes",
    featured: true,
    description:
      "Full-stack notes app with a React frontend, Node/Express API, and PostgreSQL.",
    image: "/images/notes-app-project.png",
    imageAlt:
      "Notes app with a tag sidebar, note list, and an open note about React performance optimisation",
    layers: ["client", "api", "db"],
    stack: ["React", "Node", "Express", "PostgreSQL"],
    code: "https://github.com/am1553/notesapp-react",
    live: "https://notesapp-react-akzo.onrender.com/",
  },
  {
    title: "Personal Finance",
    description:
      "Full-stack dashboard for budgets, savings pots, and transactions.",
    image: "/images/personal-finance.png",
    imageAlt:
      "Personal Finance dashboard showing income, expenses, savings pots, a budget donut chart, and transactions",
    layers: ["client", "api", "db"],
    stack: ["React", "TypeScript", "Node", "PostgreSQL"],
    code: "https://github.com/am1553/personal-finance",
  },
  {
    title: "Kanban Board",
    description:
      "Full-stack task management app with authentication, drag-and-drop, and a REST API.",
    image: "/images/kanban-board.png",
    imageAlt:
      "Kanban board with Todo, Doing, and Done columns and an Add New Task modal",
    layers: ["client", "api", "db"],
    stack: ["React", "TypeScript", "Node", "REST"],
    code: "https://github.com/am1553/kanban-client",
  },
  {
    title: "Invoice Management",
    description:
      "CRUD invoicing app backed by Firebase authentication and Firestore.",
    image: "/images/invoices.png",
    imageAlt:
      "Invoice list with Paid and Pending statuses, in desktop and mobile views",
    layers: ["client", "db"],
    stack: ["React", "Firebase", "Firestore"],
    code: "https://github.com/am1553/invoice-app",
    live: "https://am1553.github.io/invoice-app/",
  },
  {
    title: "Audiophile",
    description:
      "Complete responsive e-commerce CRUD web app with a polished product experience.",
    image: "/images/audiophile.png",
    imageAlt:
      "Audiophile e-commerce landing page featuring the XX99 Mark II headphones",
    layers: ["client"],
    stack: ["React", "CSS"],
    code: "https://github.com/am1553/audiophile",
    live: "https://am1553.github.io/audiophile/",
  },
  {
    title: "Entertainment",
    description:
      "SPA showcasing movies and TV shows with search and bookmarking.",
    image: "/images/entertainment.png",
    imageAlt:
      "Entertainment platform with trending movies and recommended shows in card grids",
    layers: ["client"],
    stack: ["React", "SPA"],
    code: "https://github.com/am1553/entertainment-web-app",
    live: "https://am1553.github.io/entertainment-web-app/",
  },
  {
    title: "PhotoSnap",
    description:
      "Animated responsive landing page for a photography and storytelling platform.",
    image: "/images/photosnap.png",
    imageAlt:
      "PhotoSnap landing page — 'Create and share your photo stories' with a photographer on a pier",
    layers: ["client"],
    stack: ["HTML", "CSS", "JS"],
    code: "https://github.com/am1553/photosnap",
    live: "https://am1553.github.io/photosnap/",
  },
];

export type TimelineEntry = {
  years: string;
  role: string;
  org: string;
  meta: string; // stack / context line
  paragraphs: string[];
};

export const experience: TimelineEntry[] = [
  {
    years: "Jun 2025 — Mar 2026",
    role: "Frontend Developer",
    org: "ToucanTech",
    meta: "JavaScript · TypeScript · Twig · Stimulus · TailwindCSS",
    paragraphs: [
      "Worked on the modernisation of a large legacy PHP platform, auditing 20+ pages with Lighthouse and manual UX review to identify performance bottlenecks, interaction issues, and inconsistent UI patterns.",
      "Picked up Twig and Stimulus from scratch as part of a two-engineer migration effort, rebuilding core interfaces with more consistent, reusable frontend patterns and TailwindCSS.",
      "Built a reusable templated data table capable of rendering 8,000+ paginated records with sorting and filtering, designed so future tables across the platform could inherit the same structure.",
      "Took ownership of the product's core drag-and-drop query builder, refactoring 4,000+ lines of JavaScript into a more maintainable state-driven architecture with clearer feedback and invalid-action prevention.",
    ],
  },
  {
    years: "Jan 2023 — Feb 2024",
    role: "Frontend Developer",
    org: "Northcott Global Solutions",
    meta: "React · TypeScript · TanStack Query · Jest · TailwindCSS",
    paragraphs: [
      "Built a data-intensive React and TypeScript application from scratch to replace a slow legacy PHP platform used by risk management, tracking, and operations teams, owning frontend architecture across 14+ pages.",
      "Served as the sole frontend developer for the first six months, partnering with the backend tech lead to establish the repo structure, branching strategy, and development workflow used by the wider team.",
      "Designed reusable API integration patterns across 20+ endpoints using TanStack Query and custom hooks, standardising data fetching, authentication, caching, and error handling across the application.",
      "Replaced Scribble Maps with a custom Google Maps integration supporting live tracking and interactive geofence drawing, bringing the feature in-house and cutting £12,000+ in annual licensing costs.",
    ],
  },
  {
    years: "Jun 2022 — Dec 2022",
    role: "Frontend Developer",
    org: "Plume Studio",
    meta: "React · TypeScript · CSS · GSAP",
    paragraphs: [
      "Built a responsive React e-learning application used by 1M+ active students globally, focusing on reusable components, responsive layouts, and maintainable frontend patterns.",
      "Implemented animations and gamification features with GSAP, contributing to an average increase of one hour of student engagement per day.",
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    years: "Oct 2021 — Sep 2026",
    role: "BSc Computing & IT",
    org: "The Open University",
    meta: "Part-time, alongside work",
    paragraphs: [
      "Studying Computing & IT part-time alongside work, with recent modules including Software Engineering, Machine Learning, and Web & Cloud Technologies.",
      "Recent results include Software Engineering at 92%, Machine Learning at 88%, and Web & Cloud Technologies at 90%.",
      "Capstone project: a full-stack issue reporting system for small organisations, built with React, Express, PostgreSQL, JWT authentication, OWASP-aligned validation, and WCAG 2.2 AA evaluation.",
    ],
  },
  {
    years: "2017 — 2019",
    role: "BEng Aerospace & Aeronautical Engineering",
    org: "University of Brighton",
    meta: "Incomplete",
    paragraphs: [
      "I started a degree in Aerospace Engineering before realising my interest was in software, not aircraft. I changed paths, taught myself to code, and later returned to study Computing properly through the Open University.",
    ],
  },
];

export const about = {
  paragraphs: [
    "I started out on the frontend, building React and TypeScript interfaces across e-learning, geospatial, and SaaS products. Over time, I became more interested in how the whole product works — not just the part users see — which pushed me further into backend work with Node, Express, REST APIs, and PostgreSQL.",
    "A lot of my recent work has involved modernising legacy systems: auditing old interfaces, rebuilding inconsistent UI patterns, and turning complex product features into cleaner, maintainable code. Alongside work, I'm finishing a BSc in Computing & IT with the Open University, with modules including Software Engineering, Machine Learning, and Web & Cloud Technologies.",
    "I'm now looking for a full-stack role where I can keep growing, contribute properly to a strong engineering team, and build products with care.",
  ],
};
