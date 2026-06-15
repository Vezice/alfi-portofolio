import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const links = [
  { href: '#about', label: 'About' },
  { href: '#journey', label: 'Journey' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
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
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden relative h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:border-accent transition-colors"
          >
            <span
              className={`absolute block h-px w-4 bg-bone transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[3px]'}`}
            />
            <span
              className={`absolute block h-px w-4 bg-bone transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[3px]'}`}
            />
          </button>
        </div>
      </div>
    </motion.header>

    <nav
      id="mobile-menu"
      ref={(el) => {
        if (el) el.inert = !open
      }}
      className={`lg:hidden fixed inset-0 top-[72px] z-40 bg-ink/95 backdrop-blur-xl border-t border-white/5 flex flex-col transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ul className="flex-1 flex flex-col justify-center gap-2 px-8">
        {links.map((l, i) => (
          <li
            key={l.href}
            className={`transition-[opacity,transform] duration-300 ease-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
          >
            <a
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 py-3 font-display text-4xl font-black tracking-tight text-bone hover:text-accent transition-colors"
            >
              <span className="font-mono text-xs font-normal text-bone-dim tracking-[0.3em]">
                0{i + 1}
              </span>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`px-8 pb-10 flex items-center gap-3 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: open ? '350ms' : '0ms' }}
      >
        {socials.map((s) => (
          <SocialPill key={s.label} s={s} />
        ))}
      </div>
    </nav>
    </>
  )
}
