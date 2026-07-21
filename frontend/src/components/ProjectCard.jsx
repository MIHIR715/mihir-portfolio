export default function ProjectCard({ project }) {
  const isDesign = project.category === 'design'
  return (
    <article className="group relative border border-hairline rounded-xl p-6 bg-frame/40 hover:border-muted transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span
          className={`tick text-[10px] px-2 py-1 rounded-full border ${
            isDesign
              ? 'text-cursorBlue border-cursorBlue/40'
              : 'text-cursorOrange border-cursorOrange/40'
          }`}
        >
          {isDesign ? 'design frame' : 'shipped build'}
        </span>
        <span className="tick text-[10px] text-muted/60">{project.year}</span>
      </div>

      <h3 className="font-display text-lg font-semibold text-paper mb-1">{project.title}</h3>
      <p className="text-sm text-muted mb-3">{project.tagline}</p>
      <p className="text-sm text-muted/80 leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack?.map((s) => (
          <span key={s} className="tick text-[10px] px-2 py-1 rounded border border-hairline text-muted">
            {s}
          </span>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="tick text-xs text-paper inline-flex items-center gap-1 hover:text-cursorBlue transition-colors"
        >
          view live →
        </a>
      ) : (
        <span className="tick text-xs text-muted/50">private / on request</span>
      )}
    </article>
  )
}
