const BASE = import.meta.env.BASE_URL

const socials = [
  { href: 'https://github.com/Vezice/', label: 'GitHub', icon: BASE + 'images/github.svg' },
  { href: 'https://www.linkedin.com/in/alfiano-mahardika/', label: 'LinkedIn', icon: BASE + 'images/linkedin.svg' },
  { href: 'https://www.instagram.com/alfiano07/', label: 'Instagram', icon: BASE + 'images/instagram.png' },
]

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim">
          © {new Date().getFullYear()} — Alfiano Mahardika
        </p>
        <ul className="flex items-center gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:border-accent transition-colors"
              >
                <img src={s.icon} alt={s.label} className="h-4 w-4 invert opacity-80" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#top" className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim hover:text-accent transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
