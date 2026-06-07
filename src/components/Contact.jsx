import { useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'

const EMAIL = 'alfianodamarjati15@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {}
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
          I'm open to ML, deep learning, and data analytics opportunities. Inbox is always open — if the work is interesting, I'd love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={copy}
            className="inline-flex items-center gap-3 rounded-full bg-accent text-ink px-8 py-4 font-medium hover:bg-bone transition-colors"
          >
            {copied ? 'Copied!' : 'Copy email'}
            <span aria-hidden>{copied ? '✓' : '⎘'}</span>
          </MagneticButton>
          <MagneticButton
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 hover:border-bone transition-colors"
          >
            {EMAIL}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
