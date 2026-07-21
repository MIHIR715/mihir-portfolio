# Mihirkumar Lad — Portfolio

Two parts:

- **`frontend/`** — React + Vite + Tailwind site. Deploys to **Cloudflare Pages**.
- **`worker/`** — Cloudflare Worker (Hono) + **D1** database powering the admin CRUD panel.

The site works and looks complete even before the Worker is deployed — it falls back to
`frontend/src/data/projects.js`. Deploy the Worker when you want the `/admin` dashboard to
actually save changes.

---

## 1. Frontend — Cloudflare Pages

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

**Deploy:**

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `frontend`
4. Add an environment variable once the Worker (step 2) is live:
   - `VITE_API_BASE` = `https://portfolio-api.<your-subdomain>.workers.dev`
5. Deploy. Your site is live at `<project>.pages.dev` — add a custom domain under
   **Custom domains** if you own one.

Drop your real resume file at `frontend/public/Mihirkumar_Lad_Resume_ATS.docx` so the
"Download resume" button on the homepage works (or edit the `href` in `Hero.jsx` to point
elsewhere).

---

## 2. Backend — Cloudflare Worker + D1

```bash
cd worker
npm install
npx wrangler login
```

**Create the database:**

```bash
npx wrangler d1 create portfolio-db
```

Copy the `database_id` it prints into `worker/wrangler.toml` (replace
`REPLACE_WITH_YOUR_D1_DATABASE_ID`).

**Load the schema + seed projects:**

```bash
npm run db:migrate:remote
```

**Set your admin password (never commit it):**

```bash
node scripts/generate-password.js "choose-a-strong-password"
```

This prints a salt and hash. Set them, plus a random JWT signing secret, as Worker secrets:

```bash
npx wrangler secret put ADMIN_PASSWORD_SALT
npx wrangler secret put ADMIN_PASSWORD_HASH
npx wrangler secret put JWT_SECRET   # any long random string, e.g. `openssl rand -hex 32`
```

Update `ALLOWED_ORIGIN` in `wrangler.toml` to your Pages URL (e.g.
`https://your-portfolio.pages.dev`), so the API only accepts requests from your site.

**Deploy:**

```bash
npm run deploy
```

Wrangler prints your Worker URL — put it in the Pages env var `VITE_API_BASE` (step 1.4) and
redeploy the frontend.

**Using the admin panel:** visit `/admin` on your live site, sign in with the password you
chose, and add/edit/delete projects. Changes write straight to D1 and appear on the homepage
immediately (no rebuild needed — `Projects.jsx` fetches from the API on every page load).

---

## Project structure

```
frontend/
  src/
    components/     Hero, About, Skills, Projects, Contact, Nav, Avatar, Ruler, CursorField
    admin/          Login, Dashboard, ProjectForm, RequireAuth
    lib/api.js       talks to the Worker, falls back to data/projects.js if unreachable
    data/projects.js seed content, mirrors schema.sql
worker/
  src/index.js       Hono API: /api/login, /api/projects (GET/POST/PUT/DELETE)
  schema.sql         D1 table + seed rows
  scripts/generate-password.js
```

## Design notes

The site is built as a live "design file" — a layers panel for navigation, pixel rulers,
and a hero that behaves like a Figma artboard with a simulated collaborator cursor — a
literal expression of the fact that the same person designs and builds. Palette: canvas ink
`#121319`, panel `#22242F`, hairline `#333644`, text `#EDEEF3` / `#9498AC`, with two accent
cursors — blue `#5B8CFF` for the design layer, orange `#FF8A4C` for the dev layer. Type:
Space Grotesk (display), Inter (body), JetBrains Mono (coordinates/labels).
