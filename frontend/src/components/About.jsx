export default function About() {
  return (
    <section id="about" className="relative px-6 lg:pl-64 lg:pr-12 py-20 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <p className="tick text-xs text-cursorBlue mb-4">Frame — About · annotations</p>
        <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper leading-snug">
            Two disciplines,
            <br />
            one person.
          </h2>
          <div className="text-muted text-base leading-relaxed space-y-4">
            <p>
              I'm a Full Stack Developer and UI/UX Designer finishing a B.E. in
              Computer Engineering at Vidyavardhini's College of Engineering
              &amp; Technology. Most portfolios split "design" and
              "development" into two people's jobs — mine doesn't, because I
              do both.
            </p>
            <p>
              On the design side, that means wireframes, interaction design,
              and component libraries built in Figma, checked against
              accessibility and usability heuristics before a single line of
              code exists. On the development side, it means turning that
              same file into a responsive, production-ready build with React,
              Tailwind CSS, and a Cloudflare-hosted backend — no gap between
              what was designed and what actually ships.
            </p>
            <p>
              Recent work spans e-commerce platforms, an affiliate discovery
              site with a full admin panel, and a token-based reward system
              built on Solidity smart contracts — plus a steady stream of
              Figma case studies for products I don't own yet, just to keep
              the design muscle sharp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
