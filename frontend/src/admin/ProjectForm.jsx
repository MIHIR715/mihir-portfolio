import { useState } from 'react'

const empty = {
  id: '',
  title: '',
  category: 'development',
  year: String(new Date().getFullYear()),
  tagline: '',
  description: '',
  stack: '',
  link: '',
  featured: false,
}

export default function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(
    initial
      ? { ...initial, stack: (initial.stack || []).join(', ') }
      : empty
  )
  const [saving, setSaving] = useState(false)

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    const payload = {
      ...form,
      id: form.id || form.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'),
      stack: form.stack.split(',').map((s) => s.trim()).filter(Boolean),
    }
    await onSave(payload)
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="border border-hairline rounded-xl bg-frame/60 p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title">
          <input required value={form.title} onChange={update('title')} className="input" />
        </Field>
        <Field label="Category">
          <select value={form.category} onChange={update('category')} className="input">
            <option value="development">Development</option>
            <option value="design">Design</option>
          </select>
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Year">
          <input value={form.year} onChange={update('year')} className="input" />
        </Field>
        <Field label="Live link (optional)">
          <input value={form.link} onChange={update('link')} className="input" placeholder="https://" />
        </Field>
      </div>
      <Field label="Tagline">
        <input required value={form.tagline} onChange={update('tagline')} className="input" />
      </Field>
      <Field label="Description">
        <textarea required rows={3} value={form.description} onChange={update('description')} className="input resize-none" />
      </Field>
      <Field label="Stack (comma separated)">
        <input value={form.stack} onChange={update('stack')} className="input" placeholder="React, Tailwind CSS, Cloudflare" />
      </Field>
      <label className="tick flex items-center gap-2 text-xs text-muted">
        <input type="checkbox" checked={form.featured} onChange={update('featured')} />
        Feature on homepage
      </label>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 rounded-lg bg-cursorBlue text-canvas text-sm font-medium hover:bg-cursorBlue/90 disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Save project'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border border-hairline text-muted text-sm hover:text-paper"
        >
          Cancel
        </button>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #121319;
          border: 1px solid #333644;
          border-radius: 0.5rem;
          padding: 0.6rem 0.75rem;
          color: #EDEEF3;
          font-size: 0.875rem;
        }
        .input:focus {
          outline: none;
          border-color: #5B8CFF;
        }
      `}</style>
    </form>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="tick text-xs text-muted block mb-1.5">{label}</span>
      {children}
    </label>
  )
}
