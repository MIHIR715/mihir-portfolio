import Avatar from './Avatar.jsx'
import CursorField from './CursorField.jsx'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 lg:pt-28 pb-20 px-6 lg:pl-64 lg:pr-12">
      <div className="relative max-w-5xl mx-auto border border-hairline rounded-2xl grid-canvas overflow-hidden">
        {/* artboard label, Figma-style */}
        <div className="tick absolute -top-6 left-0 text-[11px] text-muted flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cursorBlue" />
          Frame — Intro · 1200 × 720
        </div>

        <CursorField />

        <div className="relative z-10 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center p-8 md:p-14">
          <div>
            <p className="tick text-xs text-cursorOrange mb-4">
              role: Full Stack Developer &amp; UI/UX Designer
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.05] font-semibold text-paper">
              I design the frame,
              <br />
              then I ship the code
              <br />
              that holds it.
            </h1>
            <p className="mt-6 text-muted text-base md:text-lg max-w-md">
              Mihirkumar Lad — a Gujarat-based developer and designer who takes
              products from a blank Figma frame to a deployed, production-ready
              build, without a handoff in between.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-5 py-3 rounded-lg bg-cursorBlue text-canvas font-medium text-sm hover:bg-cursorBlue/90 transition-colors"
              >
                View the work
              </a>
              <a
                href="/Mihirkumar_Lad_Resume_ATS.docx"
                download
                className="px-5 py-3 rounded-lg border border-hairline text-paper font-medium text-sm hover:border-muted transition-colors"
              >
                Download resume
              </a>
            </div>
            <div className="tick mt-10 flex gap-6 text-[11px] text-muted/70">
              <span>Navsari, Gujarat, IN</span>
              <span>·</span>
              <span>B.E. Computer Engineering, 2026</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="absolute -inset-3 rounded-3xl border border-dashed border-hairline" />
            <Avatar className="w-full h-auto relative z-10" />
            <div className="tick absolute -bottom-4 left-1/2 -translate-x-1/2 bg-frame border border-hairline rounded-full px-3 py-1 text-[10px] text-muted">
              avatar.svg · 360×360
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
