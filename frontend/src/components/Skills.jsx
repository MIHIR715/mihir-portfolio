const groups = [
  {
    label: 'Web Development',
    accent: 'cursorOrange',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'PHP', 'Node.js'],
  },
  {
    label: 'UI/UX Design',
    accent: 'cursorBlue',
    items: [
      'Figma',
      'Adobe XD',
      'Wireframing',
      'Prototyping',
      'Interaction Design',
      'Design Systems',
      'Component Libraries',
    ],
  },
  {
    label: 'Design Research',
    accent: 'cursorBlue',
    items: ['Visual Hierarchy', 'Typography', 'Accessibility (WCAG)', 'User Research', 'Usability Testing', 'Heuristic Evaluation'],
  },
  {
    label: 'Languages & Other',
    accent: 'cursorOrange',
    items: ['Python', 'Java', 'C', 'Solidity', 'Smart Contracts', 'Git'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 lg:pl-64 lg:pr-12 py-20 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <p className="tick text-xs text-cursorOrange mb-4">Frame — Stack · component tokens</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper mb-10">
          The toolkit, by layer.
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.label} className="border border-hairline rounded-xl p-6 bg-frame/40">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${
                    g.accent === 'cursorBlue' ? 'bg-cursorBlue' : 'bg-cursorOrange'
                  }`}
                />
                <h3 className="tick text-xs text-muted uppercase tracking-wide">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1.5 rounded-md border border-hairline text-paper/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
