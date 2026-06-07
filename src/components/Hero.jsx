import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate mesh-bg min-h-screen flex items-center overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-accent/30 blob" />
      <div aria-hidden className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-[var(--color-accent-2)]/30 blob" style={{ animationDelay: '-6s' }} />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-8"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse mr-3 align-middle" />
          Data &amp; AI Architect — AHA Commerce, Jakarta
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.9] tracking-tight font-black text-balance">
          {['Architecting', 'data', 'systems', 'that', 'scale.'].map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.2em]">
              <motion.span variants={word} initial="hidden" animate="show" custom={i} className="inline-block">
                {i === 1 ? <span className="italic font-light text-accent">{w}</span> : w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-bone-dim text-lg md:text-xl max-w-md text-pretty"
          >
            I'm <span className="text-bone">Alfiano Mahardika</span> — designing the data infrastructure and organizational frameworks that let engineering and analytics teams execute with speed and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-4 md:justify-end"
          >
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-accent text-ink px-7 py-4 font-medium hover:bg-bone transition-colors"
            >
              Let's talk
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </MagneticButton>
            <MagneticButton
              href="#work"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 hover:border-bone transition-colors"
            >
              See the work
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-bone-dim flex flex-col items-center gap-2"
      >
        scroll
        <span className="block h-10 w-px bg-gradient-to-b from-bone-dim to-transparent" />
      </motion.div>
    </section>
  )
}
