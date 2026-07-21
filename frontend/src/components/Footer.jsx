export default function Footer() {
  return (
    <footer className="px-6 lg:pl-64 lg:pr-12 py-8 border-t border-hairline">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 tick text-[11px] text-muted/60">
        <span>© {new Date().getFullYear()} Mihirkumar Lad. Built in React, shipped on Cloudflare.</span>
        <span>v1.0 · last exported {new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
      </div>
    </footer>
  )
}
