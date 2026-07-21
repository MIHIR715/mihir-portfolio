import { useEffect, useRef, useState } from 'react'

// Signature interactive element: the hero behaves like a live Figma canvas.
// Your real cursor is tagged "You", and a second, gently wandering cursor
// tagged "Mihir · designing" drifts around — a small nod to a multiplayer
// design file, and to the fact that the designer and the developer here
// are the same person.
export default function CursorField() {
  const ref = useRef(null)
  const [mouse, setMouse] = useState(null)
  const [bot, setBot] = useState({ x: 60, y: 60 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      setMouse({ x: Math.round(e.clientX - rect.left), y: Math.round(e.clientY - rect.top) })
    }
    const handleLeave = () => setMouse(null)
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (t) => {
      const el = ref.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const time = (t - start) / 1000
        const x = rect.width * 0.5 + Math.sin(time * 0.35) * rect.width * 0.32
        const y = rect.height * 0.45 + Math.cos(time * 0.5) * rect.height * 0.28
        setBot({ x: Math.round(x), y: Math.round(y) })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 cursor-none">
      {mouse && (
        <div
          className="pointer-events-none absolute z-20 transition-none"
          style={{ left: mouse.x, top: mouse.y }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" className="drop-shadow">
            <path d="M1 1 L1 15 L5 11.5 L7.5 17 L10 16 L7.5 10.5 L13 10.5 Z" fill="#5B8CFF" stroke="#121319" strokeWidth="1" />
          </svg>
          <span className="tick ml-4 -mt-1 inline-block bg-cursorBlue text-canvas text-[10px] px-1.5 py-0.5 rounded">
            You · {mouse.x}, {mouse.y}
          </span>
        </div>
      )}
      <div
        className="pointer-events-none absolute z-10 transition-none"
        style={{ left: bot.x, top: bot.y }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" className="drop-shadow">
          <path d="M1 1 L1 15 L5 11.5 L7.5 17 L10 16 L7.5 10.5 L13 10.5 Z" fill="#FF8A4C" stroke="#121319" strokeWidth="1" />
        </svg>
        <span className="tick ml-4 -mt-1 inline-block bg-cursorOrange text-canvas text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
          Mihir · designing
        </span>
      </div>
    </div>
  )
}
