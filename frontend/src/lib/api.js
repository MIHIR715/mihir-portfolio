import { seedProjects } from '../data/projects.js'

// Point this at your deployed Worker once it's live, e.g.
// 'https://portfolio-api.<your-subdomain>.workers.dev'
export const API_BASE = import.meta.env.VITE_API_BASE || ''

async function request(path, options = {}) {
  if (!API_BASE) throw new Error('API_BASE not configured')
  const token = localStorage.getItem('admin_token')
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `Request failed (${res.status})`)
  }
  return res.json()
}

export async function getProjects() {
  try {
    const data = await request('/api/projects')
    return data.projects
  } catch {
    return seedProjects
  }
}

export async function login(password) {
  const data = await request('/api/login', {
    method: 'POST',
    body: JSON.stringify({ password }),
  })
  localStorage.setItem('admin_token', data.token)
  return data
}

export function logout() {
  localStorage.removeItem('admin_token')
}

export function isLoggedIn() {
  return Boolean(localStorage.getItem('admin_token'))
}

export async function createProject(project) {
  return request('/api/projects', {
    method: 'POST',
    body: JSON.stringify(project),
  })
}

export async function updateProject(id, project) {
  return request(`/api/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(project),
  })
}

export async function deleteProject(id) {
  return request(`/api/projects/${id}`, { method: 'DELETE' })
}
