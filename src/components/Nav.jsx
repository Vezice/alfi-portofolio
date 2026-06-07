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
      className="group relative h-10 inline-flex items-center rounded-full border border-white/15 hover:border-accent hover:bg-accent/10 transition-[max-width,padding,background-color,border-color] duration-300 ease-out overflow-hidden max-w-[40px] hover:max-w-[160px] pl-3 pr-3"
    >
      <img
        src={s.icon}
        alt=""
        className="h-4 w-4 invert opacity-80 group-hover:opacity-100 shrink-0 transition-opacity"
      />
      <span className="ml-0 group-hover:ml-2 whitespace-nowrap text-xs font-medium tracking-wide overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
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
          <div className="hidden sm:flex items-center gap-2">
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
