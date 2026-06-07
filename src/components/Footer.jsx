export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim">
          © {new Date().getFullYear()} — Alfiano Mahardika
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim/70">
          Architecting Data &amp; AI · Jakarta
        </p>
        <a href="#top" className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim hover:text-accent transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
