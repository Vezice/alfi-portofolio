import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const links = [
  { href: '#work', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/Vezice/', label: 'GitHub', icon: BASE + 'images/github.svg' },
  { href: 'https://www.linkedin.com/in/alfiano-mahardika/', label: 'LinkedIn', icon: BASE + 'images/linkedin.svg' },
  { href: 'https://www.instagram.com/alfiano07/', label: 'Instagram', icon: BASE + 'images/instagram.png' },
]

function SocialPill({ s }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noreferrer"
      title={s.label}
      aria-label={s.label}
      className="group relative h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-colors duration-200"
    >
      <img
        src={s.icon}
        alt=""
        className="h-4 w-4 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
      <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 bg-ink-soft border border-white/15 text-bone text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full whitespace-nowrap">
        {s.label}
      </span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-ink/60 border-b border-white/5' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between py-4 gap-4">
        <a href="#top" className="font-display text-xl tracking-tight shrink-0">
          <span className="text-bone">alfiano</span>
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-bone-dim hover:text-bone transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-3">
            {socials.map((s) => (
              <SocialPill key={s.label} s={s} />
            ))}
          </div>
          <a
            href="https://drive.google.com/file/d/1L8Jyu832iLqr3myfUYKMxYhuuhiiIKeb/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="text-sm rounded-full border border-white/15 px-4 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.header>
  )
}
