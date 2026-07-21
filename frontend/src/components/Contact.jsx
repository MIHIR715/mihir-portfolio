export default function Contact() {
  return (
    <section id="contact" className="relative px-6 lg:pl-64 lg:pr-12 py-24 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <p className="tick text-xs text-cursorOrange mb-4">Frame — Contact · export ready</p>
        <div className="border border-hairline rounded-2xl p-10 md:p-14 bg-frame/40 grid-canvas">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-xl">
            Have a product that needs both a designer and a developer? That's one hire, not two.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:mihirlad715@gmail.com"
              className="px-5 py-3 rounded-lg bg-cursorBlue text-canvas font-medium text-sm hover:bg-cursorBlue/90 transition-colors"
            >
              mihirlad715@gmail.com
            </a>
            <a
              href="tel:+917698514476"
              className="px-5 py-3 rounded-lg border border-hairline text-paper font-medium text-sm hover:border-muted transition-colors"
            >
              +91 76985 14476
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-hairline text-paper font-medium text-sm hover:border-muted transition-colors"
            >
              GitHub ↗
            </a>
          </div>
          <p className="tick mt-8 text-[11px] text-muted/60">Navsari, Gujarat, India · usually replies within a day</p>
        </div>
      </div>
    </section>
  )
}
