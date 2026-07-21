import { useEffect, useState } from 'react'
import { getProjects } from '../lib/api.js'
import ProjectCard from './ProjectCard.jsx'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'design', label: 'Design' },
]

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  const visible = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="work" className="relative px-6 lg:pl-64 lg:pr-12 py-20 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="tick text-xs text-cursorBlue mb-4">Frame — Work · {visible.length} objects selected</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper">Selected work.</h2>
          </div>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`tick text-xs px-3 py-2 rounded-lg border transition-colors ${
                  filter === f.id
                    ? 'border-cursorBlue text-paper bg-cursorBlue/10'
                    : 'border-hairline text-muted hover:text-paper'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <p className="tick text-sm text-muted">loading projects…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
