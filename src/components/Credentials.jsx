import { motion } from 'framer-motion'

const credentials = [
  {
    title: 'Bangkit Graduate Certificate',
    issuer: 'Bangkit Academy — Google, Goto, Traveloka',
    date: 'Jul 2022',
    featured: true,
    bg: 'linear-gradient(135deg, #ef4136 0%, #ff7a59 60%, #ffb14d 100%)',
    badge: 'BG',
    note: 'End-to-end Machine Learning program backed by Indonesia\'s biggest tech companies.',
  },
  {
    title: 'SENTRIN 2023 — Presenter',
    issuer: 'University of Brawijaya',
    date: 'Oct 2023',
    featured: true,
    bg: 'linear-gradient(135deg, #0a2a6c 0%, #1d4ed8 50%, #4dd4ff 100%)',
    badge: '★',
    note: 'Presented the Sign Language CNN + Spatial Transformer paper at the national seminar.',
  },
  { title: 'DeepLearning.AI TensorFlow Developer', issuer: 'Coursera · DeepLearning.AI', date: 'Apr 2022' },
  { title: 'TensorFlow: Data and Deployment', issuer: 'Coursera · DeepLearning.AI', date: 'Apr 2022' },
  { title: 'Structuring Machine Learning Projects', issuer: 'Coursera · DeepLearning.AI', date: 'Apr 2022' },
  { title: 'Mathematics for Machine Learning', issuer: 'Coursera · Imperial College London', date: 'Mar 2022' },
  { title: 'Google IT Automation with Python', issuer: 'Coursera · Google', date: 'Mar 2022' },
  { title: 'Spreadsheet Mastery Level 1', issuer: 'AHA Commerce Indonesia', date: 'Nov 2024' },
  { title: 'Microsoft Office Desktop Application', issuer: 'Trust Training Partners', date: 'Nov 2022' },
  { title: 'Memulai Pemrograman dengan Python', issuer: 'Dicoding Indonesia', date: 'Feb 2022' },
]

function FeaturedCard({ c, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="group relative sm:col-span-2 lg:col-span-2 p-7 md:p-10 rounded-2xl border border-white/15 overflow-hidden min-h-[260px] flex flex-col justify-between"
      style={{ background: c.bg }}
    >
      <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 select-none font-display text-[14rem] font-black text-white/10 leading-none pointer-events-none"
      >
        {c.badge}
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/90 rounded-full bg-black/30 backdrop-blur px-3 py-1.5 border border-white/20">
          {c.date}
        </span>
        <span aria-hidden className="h-8 w-8 rounded-full grid place-items-center border border-white/40 bg-black/30 backdrop-blur text-white">
          ✓
        </span>
      </div>

      <div className="relative z-10 mt-8">
        <h3 className="font-display text-3xl md:text-4xl font-black leading-tight text-white text-balance mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
          {c.title}
        </h3>
        <p className="text-white/85 text-sm md:text-base">{c.issuer}</p>
        {c.note && <p className="text-white/70 text-sm mt-3 max-w-md text-pretty">{c.note}</p>}
      </div>
    </motion.div>
  )
}

function StandardCard({ c, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
      className="group relative p-6 md:p-7 rounded-2xl border border-white/5 bg-ink-soft/50 hover:border-accent transition-colors overflow-hidden"
    >
      <div className="flex items-start justify-between gap-3 mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim">{c.date}</p>
        <span aria-hidden className="h-8 w-8 rounded-full grid place-items-center border border-white/10 text-bone-dim group-hover:border-accent group-hover:text-accent transition-colors">
          ✓
        </span>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-bold leading-tight mb-3 text-balance">
        {c.title}
      </h3>
      <p className="text-sm text-bone-dim text-pretty">{c.issuer}</p>
      <div aria-hidden className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 md:gap-6">
          {credentials.map((c, i) =>
            c.featured ? <FeaturedCard key={c.title} c={c} idx={i} /> : <StandardCard key={c.title} c={c} idx={i} />
          )}
        </div>
      </div>
    </section>
  )
}
