export function TopRuler() {
  const ticks = Array.from({ length: 40 }, (_, i) => i * 80)
  return (
    <div className="hidden lg:block sticky top-0 z-30 h-6 bg-canvas/95 backdrop-blur border-b border-hairline overflow-hidden select-none">
      <div className="relative h-full">
        {ticks.map((x) => (
          <span
            key={x}
            className="tick absolute top-0 text-[9px] text-muted/60 pl-1 border-l border-hairline h-full flex items-center"
            style={{ left: x }}
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  )
}

export function LeftRuler() {
  const ticks = Array.from({ length: 60 }, (_, i) => i * 80)
  return (
    <div className="hidden lg:block fixed left-0 top-6 bottom-0 z-20 w-6 bg-canvas/95 border-r border-hairline overflow-hidden select-none">
      <div className="relative h-full">
        {ticks.map((y) => (
          <span
            key={y}
            className="tick absolute left-0 text-[9px] text-muted/60 pt-1 border-t border-hairline w-full flex items-start justify-center"
            style={{ top: y, writingMode: 'vertical-rl' }}
          >
            {y}
          </span>
        ))}
      </div>
    </div>
  )
}
