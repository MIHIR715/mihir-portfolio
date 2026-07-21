DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'development',
  year TEXT,
  tagline TEXT,
  description TEXT,
  stack TEXT,          -- JSON-encoded array
  link TEXT,
  featured INTEGER DEFAULT 0,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

INSERT INTO projects (id, title, category, year, tagline, description, stack, link, featured, sort_order) VALUES
('curatly', 'Curatly', 'development', '2026', 'Affiliate product discovery platform',
 'A full-stack affiliate marketing platform surfacing trending Amazon products, with visitor wishlists, an admin CRUD panel, and click-through analytics on every affiliate redirect.',
 '["React","Tailwind CSS","Cloudflare Workers","Hono","D1","JWT / PBKDF2"]', 'https://1414a3ae.curatly.pages.dev', 1, 1),
('shoeverse', 'ShoeVerse', 'development', '2026', 'E-commerce shoe store platform',
 'A premium sneaker shopping experience with product listings, cart flow, and a recommendation layer, built as a full-stack React application from the ground up.',
 '["React","Tailwind CSS","JavaScript"]', 'https://shoeverse.pages.dev', 1, 2),
('vcrypto', 'VCRYPTO', 'development', '2025', 'Blockchain campus reward system',
 'A token-based rewards system for Vidyavardhini''s College, with smart contracts that mint tokens for student achievements and redeem them at campus facilities.',
 '["Solidity","Smart Contracts"]', '', 0, 3),
('finance-tracker', 'Finance Tracker', 'design', '2026', 'Personal budgeting mobile app UI',
 'An interactive Figma prototype for tracking income, expenses, and savings goals, with a full flow for adding transactions and reviewing spending summaries.',
 '["Figma","Prototyping","Data Visualization"]', '', 1, 4),
('airpods-max-2', 'AirPods Max 2', 'design', '2026', 'Product showcase UI',
 'A premium product page in Apple''s minimal, high-fidelity language, built around a defined type scale, color system, and a small component library.',
 '["Figma","Design Systems"]', '', 0, 5),
('nike-redesign', 'Nike Shoes Website', 'design', '2026', 'Full e-commerce redesign',
 'A homepage-to-checkout redesign concept, backed by a reusable Figma component library covering buttons, cards, navigation, and filters.',
 '["Figma","Component Library"]', '', 0, 6),
('royal-enfield', 'Royal Enfield', 'design', '2026', 'Motorcycle brand website UI',
 'A bold, brand-driven concept covering model showcases and spec breakdowns, with information architecture across landing, comparison, and detail pages.',
 '["Figma","Information Architecture"]', '', 0, 7),
('controller', 'Controller', 'design', '2026', 'Gaming dashboard interface',
 'A dark-mode gaming companion app with button-mapping screens, profile views, and customizable settings panels.',
 '["Figma","Dark Mode UI"]', '', 0, 8);
