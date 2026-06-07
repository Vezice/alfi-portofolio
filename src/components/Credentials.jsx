import { motion } from 'framer-motion'

const credentials = [
  {
    title: 'Bangkit Graduate Certificate',
    issuer: 'Bangkit Academy — Google, Goto, Traveloka',
    date: 'Jul 2022',
    accent: true,
  },
  {
    title: 'DeepLearning.AI TensorFlow Developer',
    issuer: 'Coursera · DeepLearning.AI',
    date: 'Apr 2022',
  },
  {
    title: 'TensorFlow: Data and Deployment',
    issuer: 'Coursera · DeepLearning.AI',
    date: 'Apr 2022',
  },
  {
    title: 'Structuring Machine Learning Projects',
    issuer: 'Coursera · DeepLearning.AI',
    date: 'Apr 2022',
  },
  {
    title: 'Mathematics for Machine Learning',
    issuer: 'Coursera · Imperial College London',
    date: 'Mar 2022',
  },
  {
    title: 'Google IT Automation with Python',
    issuer: 'Coursera · Google',
    date: 'Mar 2022',
  },
  {
    title: 'SENTRIN 2023 — Presenter',
    issuer: 'University of Brawijaya',
    date: 'Oct 2023',
    accent: true,
  },
  {
    title: 'Spreadsheet Mastery Level 1',
    issuer: 'AHA Commerce Indonesia',
    date: 'Nov 2024',
  },
  {
    title: 'Microsoft Office Desktop Application',
    issuer: 'Trust Training Partners',
    date: 'Nov 2022',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    date: 'Feb 2022',
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 flex items-end justify-between gap-8 flex-wrap"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-4">— Credentials</p>
            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tight text-balance">
              Stamps on the <span className="italic font-light text-accent">passport</span>.
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/alfiano-mahardika/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim hover:text-accent transition-colors"
          >
            See LinkedIn →
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {credentials.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative p-6 md:p-7 rounded-2xl border ${c.accent ? 'border-accent/30 bg-accent/5' : 'border-white/5 bg-ink-soft/50'} hover:border-accent transition-colors overflow-hidden`}
            >
              <div className="flex items-start justify-between gap-3 mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim">
                  {c.date}
                </p>
                <span aria-hidden className={`h-8 w-8 rounded-full grid place-items-center border ${c.accent ? 'border-accent text-accent' : 'border-white/10 text-bone-dim group-hover:border-accent group-hover:text-accent'} transition-colors`}>
                  ✓
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold leading-tight mb-3 text-balance">
                {c.title}
              </h3>
              <p className="text-sm text-bone-dim text-pretty">{c.issuer}</p>
              <div aria-hidden className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
