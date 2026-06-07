import { useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'

const BASE = import.meta.env.BASE_URL
const EMAIL = 'alfianodamarjati15@gmail.com'

const socials = [
  { href: 'https://github.com/Vezice/', label: 'GitHub', icon: BASE + 'images/github.svg' },
  { href: 'https://www.linkedin.com/in/alfiano-mahardika/', label: 'LinkedIn', icon: BASE + 'images/linkedin.svg' },
  { href: 'https://www.instagram.com/alfiano07/', label: 'Instagram', icon: BASE + 'images/instagram.png' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async (e) => {
    e?.preventDefault?.()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {}
  }

  return (
    <section id="contact" className="relative py-32 md:py-48 mesh-bg overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-ink/40" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-6"
        >
          — Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.9] text-balance"
        >
          Let's build <br />
          <span className="italic font-light text-accent">something.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-xl mx-auto text-bone-dim text-lg text-pretty"
        >
          I'm open to <span className="text-bone">data analytics</span>, <span className="text-bone">AI agentic engineering</span>, <span className="text-bone">web development</span>, and{' '}
          <span className="text-accent font-medium underline decoration-accent decoration-2 underline-offset-4">leadership</span>{' '}
          opportunities. Inbox is always open — if the work is interesting, I'd love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <MagneticButton
            as="button"
            onClick={copy}
            className="group relative inline-flex items-center gap-3 rounded-full bg-accent text-ink px-8 py-4 font-medium hover:bg-bone transition-colors"
          >
            <span className="font-mono text-sm md:text-base">{EMAIL}</span>
            <span aria-hidden className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-ink/15">
              {copied ? '✓' : '⎘'}
            </span>
            <span className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-ink text-bone text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full whitespace-nowrap border border-white/15">
              {copied ? 'Copied!' : 'Click to copy email'}
            </span>
          </MagneticButton>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="group relative inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 hover:border-accent hover:bg-accent/10 transition-colors"
              >
                <img
                  src={s.icon}
                  alt=""
                  className="h-4 w-4 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="text-sm font-medium">{s.label}</span>
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
