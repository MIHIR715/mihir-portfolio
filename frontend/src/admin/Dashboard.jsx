import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProjects, createProject, updateProject, deleteProject, logout } from '../lib/api.js'
import ProjectForm from './ProjectForm.jsx'

export default function Dashboard() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null) // null | 'new' | project object
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const load = () => {
    setLoading(true)
    getProjects()
      .then(setProjects)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const handleSave = async (payload) => {
    setError('')
    try {
      if (editing === 'new') {
        await createProject(payload)
      } else {
        await updateProject(payload.id, payload)
      }
      setEditing(null)
      load()
    } catch (err) {
      setError(err.message || 'Could not save project — check the API is deployed and reachable.')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this project? This cannot be undone.')) return
    setError('')
    try {
      await deleteProject(id)
      load()
    } catch (err) {
      setError(err.message || 'Could not delete project.')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-canvas grid-canvas">
      <header className="border-b border-hairline px-6 py-4 flex items-center justify-between sticky top-0 bg-canvas/95 backdrop-blur z-10">
        <div>
          <p className="tick text-xs text-cursorBlue">Frame — Admin · dashboard</p>
          <h1 className="font-display text-lg font-semibold text-paper">Projects</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setEditing('new')}
            className="px-4 py-2 rounded-lg bg-cursorBlue text-canvas text-sm font-medium hover:bg-cursorBlue/90"
          >
            + New project
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg border border-hairline text-muted text-sm hover:text-paper"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        {error && (
          <p className="text-sm text-cursorOrange border border-cursorOrange/40 rounded-lg px-4 py-3">{error}</p>
        )}

        {editing && (
          <ProjectForm
            initial={editing === 'new' ? null : editing}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
          />
        )}

        {loading ? (
          <p className="tick text-sm text-muted">loading…</p>
        ) : projects.length === 0 ? (
          <p className="tick text-sm text-muted">No projects yet — add your first one above.</p>
        ) : (
          <div className="space-y-3">
            {projects.map((p) => (
              <div
                key={p.id}
                className="border border-hairline rounded-xl bg-frame/40 px-5 py-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`tick text-[10px] px-2 py-0.5 rounded-full border ${
                        p.category === 'design'
                          ? 'text-cursorBlue border-cursorBlue/40'
                          : 'text-cursorOrange border-cursorOrange/40'
                      }`}
                    >
                      {p.category}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-paper truncate">{p.title}</h3>
                  </div>
                  <p className="text-xs text-muted truncate">{p.tagline}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setEditing(p)}
                    className="tick text-xs px-3 py-1.5 rounded-lg border border-hairline text-paper hover:border-muted"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="tick text-xs px-3 py-1.5 rounded-lg border border-cursorOrange/40 text-cursorOrange hover:bg-cursorOrange/10"
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
