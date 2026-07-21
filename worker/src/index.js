import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', async (c, next) => {
  const corsMiddleware = cors({
    origin: c.env.ALLOWED_ORIGIN || '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
  return corsMiddleware(c, next)
})

// ---------- crypto helpers ----------

function bufToHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function hexToBuf(hex) {
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length; i += 2) bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16)
  return bytes.buffer
}

async function pbkdf2Hash(password, saltHex, iterations = 100000) {
  const enc = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, [
    'deriveBits',
  ])
  const derived = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: hexToBuf(saltHex), iterations, hash: 'SHA-256' },
    keyMaterial,
    256
  )
  return bufToHex(derived)
}

function base64url(input) {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

function base64urlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/')
  while (str.length % 4) str += '='
  const bin = atob(str)
  return new Uint8Array([...bin].map((c) => c.charCodeAt(0)))
}

async function signJWT(payload, secret) {
  const enc = new TextEncoder()
  const header = { alg: 'HS256', typ: 'JWT' }
  const headerB64 = base64url(enc.encode(JSON.stringify(header)))
  const payloadB64 = base64url(enc.encode(JSON.stringify(payload)))
  const data = `${headerB64}.${payloadB64}`
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
  ])
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data))
  return `${data}.${base64url(sig)}`
}

async function verifyJWT(token, secret) {
  const enc = new TextEncoder()
  const [headerB64, payloadB64, sigB64] = token.split('.')
  if (!headerB64 || !payloadB64 || !sigB64) throw new Error('Malformed token')
  const data = `${headerB64}.${payloadB64}`
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'verify',
  ])
  const valid = await crypto.subtle.verify('HMAC', key, base64urlDecode(sigB64), enc.encode(data))
  if (!valid) throw new Error('Invalid signature')
  const payload = JSON.parse(new TextDecoder().decode(base64urlDecode(payloadB64)))
  if (payload.exp && Date.now() / 1000 > payload.exp) throw new Error('Token expired')
  return payload
}

async function requireAuth(c, next) {
  const authHeader = c.req.header('Authorization') || ''
  const token = authHeader.replace('Bearer ', '')
  if (!token) return c.json({ error: 'Missing token' }, 401)
  try {
    await verifyJWT(token, c.env.JWT_SECRET)
  } catch {
    return c.json({ error: 'Invalid or expired session — please sign in again' }, 401)
  }
  await next()
}

// ---------- routes ----------

app.post('/api/login', async (c) => {
  const { password } = await c.req.json().catch(() => ({}))
  if (!password) return c.json({ error: 'Password required' }, 400)

  const computed = await pbkdf2Hash(password, c.env.ADMIN_PASSWORD_SALT)
  if (computed !== c.env.ADMIN_PASSWORD_HASH) {
    return c.json({ error: 'Incorrect password' }, 401)
  }

  const token = await signJWT(
    { sub: 'admin', exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
    c.env.JWT_SECRET
  )
  return c.json({ token })
})

app.get('/api/projects', async (c) => {
  const { results } = await c.env.DB.prepare(
    'SELECT * FROM projects ORDER BY sort_order ASC, created_at DESC'
  ).all()
  const projects = results.map((p) => ({
    ...p,
    stack: p.stack ? JSON.parse(p.stack) : [],
    featured: Boolean(p.featured),
  }))
  return c.json({ projects })
})

app.post('/api/projects', requireAuth, async (c) => {
  const body = await c.req.json()
  if (!body.id || !body.title) return c.json({ error: 'id and title are required' }, 400)

  await c.env.DB.prepare(
    `INSERT INTO projects (id, title, category, year, tagline, description, stack, link, featured, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, (SELECT COALESCE(MAX(sort_order), 0) + 1 FROM projects))`
  )
    .bind(
      body.id,
      body.title,
      body.category || 'development',
      body.year || '',
      body.tagline || '',
      body.description || '',
      JSON.stringify(body.stack || []),
      body.link || '',
      body.featured ? 1 : 0
    )
    .run()

  return c.json({ ok: true, id: body.id })
})

app.put('/api/projects/:id', requireAuth, async (c) => {
  const id = c.req.param('id')
  const body = await c.req.json()

  await c.env.DB.prepare(
    `UPDATE projects SET title = ?, category = ?, year = ?, tagline = ?, description = ?, stack = ?, link = ?, featured = ?, updated_at = datetime('now')
     WHERE id = ?`
  )
    .bind(
      body.title,
      body.category || 'development',
      body.year || '',
      body.tagline || '',
      body.description || '',
      JSON.stringify(body.stack || []),
      body.link || '',
      body.featured ? 1 : 0,
      id
    )
    .run()

  return c.json({ ok: true })
})

app.delete('/api/projects/:id', requireAuth, async (c) => {
  const id = c.req.param('id')
  await c.env.DB.prepare('DELETE FROM projects WHERE id = ?').bind(id).run()
  return c.json({ ok: true })
})

app.notFound((c) => c.json({ error: 'Not found' }, 404))

export default app
