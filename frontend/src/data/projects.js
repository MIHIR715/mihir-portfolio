// Seed data — mirrors what gets loaded into D1 on first deploy.
// The admin dashboard edits the live copy via the Worker API; this file
// is only the fallback shown if that API is unreachable.
export const seedProjects = [
  {
    id: 'curatly',
    title: 'Curatly',
    category: 'development',
    year: '2026',
    tagline: 'Affiliate product discovery platform',
    description:
      'A full-stack affiliate marketing platform surfacing trending Amazon products, with visitor wishlists, an admin CRUD panel, and click-through analytics on every affiliate redirect.',
    stack: ['React', 'Tailwind CSS', 'Cloudflare Workers', 'Hono', 'D1', 'JWT / PBKDF2'],
    link: 'https://1414a3ae.curatly.pages.dev',
    featured: true,
  },
  {
    id: 'shoeverse',
    title: 'ShoeVerse',
    category: 'development',
    year: '2026',
    tagline: 'E-commerce shoe store platform',
    description:
      'A premium sneaker shopping experience with product listings, cart flow, and a recommendation layer, built as a full-stack React application from the ground up.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://shoeverse.pages.dev',
    featured: true,
  },
  {
    id: 'vcrypto',
    title: 'VCRYPTO',
    category: 'development',
    year: '2025',
    tagline: 'Blockchain campus reward system',
    description:
      'A token-based rewards system for Vidyavardhini\u2019s College, with smart contracts that mint tokens for student achievements and redeem them at campus facilities like the canteen and stationery shop.',
    stack: ['Solidity', 'Smart Contracts'],
    link: '',
    featured: false,
  },
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    category: 'design',
    year: '2026',
    tagline: 'Personal budgeting mobile app UI',
    description:
      'An interactive Figma prototype for tracking income, expenses, and savings goals, with a full flow for adding transactions and reviewing spending summaries through clear data visualization.',
    stack: ['Figma', 'Prototyping', 'Data Visualization'],
    link: '',
    featured: true,
  },
  {
    id: 'airpods-max-2',
    title: 'AirPods Max 2',
    category: 'design',
    year: '2026',
    tagline: 'Product showcase UI',
    description:
      'A premium product page in Apple\u2019s minimal, high-fidelity language, built around a defined type scale, color system, and a small library of reusable components.',
    stack: ['Figma', 'Design Systems'],
    link: '',
    featured: false,
  },
  {
    id: 'nike-redesign',
    title: 'Nike Shoes Website',
    category: 'design',
    year: '2026',
    tagline: 'Full e-commerce redesign',
    description:
      'A homepage-to-checkout redesign concept, backed by a reusable Figma component library covering buttons, cards, navigation, and filters.',
    stack: ['Figma', 'Component Library'],
    link: '',
    featured: false,
  },
  {
    id: 'royal-enfield',
    title: 'Royal Enfield',
    category: 'design',
    year: '2026',
    tagline: 'Motorcycle brand website UI',
    description:
      'A bold, brand-driven concept covering model showcases and spec breakdowns, with information architecture spanning landing, comparison, and detail pages.',
    stack: ['Figma', 'Information Architecture'],
    link: '',
    featured: false,
  },
  {
    id: 'controller',
    title: 'Controller',
    category: 'design',
    year: '2026',
    tagline: 'Gaming dashboard interface',
    description:
      'A dark-mode gaming companion app with button-mapping screens, profile views, and customizable settings panels, tuned for tactile micro-interactions.',
    stack: ['Figma', 'Dark Mode UI'],
    link: '',
    featured: false,
  },
]
