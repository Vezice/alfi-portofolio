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
            Aligning <span className="italic font-light text-accent">Data &amp; AI</span> infrastructure to business needs.
          </h2>
          <div className="space-y-5 text-bone-dim text-lg text-pretty max-w-2xl">
            <p>
              Building scalable technology requires aligning predictable data infrastructure with high team autonomy. As a Data &amp; AI Architect, my focus is on designing the technical systems and the organizational frameworks that allow engineering and analytical divisions to execute with speed and precision.
            </p>
            <p>
              My background is in machine learning and deep learning — CNNs, sequence models, the math underneath them — and I've spent the last year-plus translating that into production data work at AHA Commerce, growing from intern to senior analyst to architect as the team scaled from three people to twelve.
            </p>
            <p>
              I work in Python, SQL, and increasingly in the design space between systems and the people who use them. Curious by default, stubborn about the details.
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
