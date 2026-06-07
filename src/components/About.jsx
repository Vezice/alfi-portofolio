import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton.jsx'

const BASE = import.meta.env.BASE_URL

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <img
              src={BASE + 'images/about_photo.jpg'}
              alt="Alfiano"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-3xl bg-accent/20 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-7"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-4">— About</p>
          <h2 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-8 text-balance">
            Curious by default, <span className="italic font-light text-accent">stubborn</span> about the details.
          </h2>
          <div className="space-y-5 text-bone-dim text-lg text-pretty max-w-2xl">
            <p>
              I'm adept at data science and the practical use of machine learning and deep learning — Naïve Bayes, decision trees, CNNs, sequence models, and everything in the gap between a clean notebook and a working system.
            </p>
            <p>
              My day-to-day languages are Python, Java, and SQL. I gravitate toward problems where the data is messy, the metric is unclear, and shipping something useful means making hard choices.
            </p>
            <p>
              I started in Informatics Engineering and never stopped trying to learn the next thing. That's the whole pitch.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href="https://drive.google.com/file/d/1L8Jyu832iLqr3myfUYKMxYhuuhiiIKeb/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-bone text-ink px-6 py-3 font-medium hover:bg-accent transition-colors"
            >
              Download résumé →
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
