import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const layers = [
  { id: 'hero', label: 'Frame / Intro' },
  { id: 'about', label: 'Frame / About' },
  { id: 'skills', label: 'Frame / Stack' },
  { id: 'work', label: 'Frame / Work' },
  { id: 'contact', label: 'Frame / Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = layers.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 h-14 bg-canvas/95 backdrop-blur border-b border-hairline">
        <Link to="/" className="font-display font-semibold text-paper text-sm">
          Mihirkumar Lad
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="tick text-xs border border-hairline px-2 py-1 rounded text-muted"
        >
          {open ? 'close' : 'layers'}
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed top-14 inset-x-0 z-40 bg-frame border-b border-hairline p-3 flex flex-col gap-1">
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="tick text-left text-xs px-2 py-2 rounded text-muted hover:text-paper hover:bg-canvas"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      {/* desktop layers panel */}
      <aside className="hidden lg:flex flex-col fixed left-6 top-24 z-30 w-52 border border-hairline rounded-lg bg-frame/80 backdrop-blur p-3">
        <div className="tick text-[10px] text-muted/70 px-2 pb-2 mb-1 border-b border-hairline">
          LAYERS
        </div>
        {layers.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            className={`tick text-left text-xs px-2 py-2 rounded flex items-center gap-2 transition-colors ${
              active === l.id ? 'text-paper bg-canvas' : 'text-muted hover:text-paper'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                active === l.id ? 'bg-cursorBlue' : 'bg-hairline'
              }`}
            />
            {l.label}
          </button>
        ))}
        <div className="tick text-[10px] text-muted/70 px-2 pt-3 mt-2 border-t border-hairline">
          <Link to="/admin" className="hover:text-paper">
            + admin
          </Link>
        </div>
      </aside>
    </>
  )
}
