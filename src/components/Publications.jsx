import { motion } from 'framer-motion'

const publications = [
  {
    title: 'Sign Language Alphabet Recognition Using CNN with a Spatial Transformer Network',
    venue: 'Jurnal Teknologi Informasi dan Ilmu Komputer (JTIIK)',
    detail:
      'Presented at SENTRIN 2023 — Seminar Nasional Teknologi dan Rekayasa Informasi, University of Brawijaya.',
    year: '2023',
    doi: 'https://doi.org/10.25126/jtiik.1078098',
    code: 'https://github.com/Vezice/Sign_Language_CNN_Spatial_Transformer',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="relative bg-ink-soft py-24 md:py-40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-4">— Publications</p>
          <h2 className="font-display text-5xl md:text-8xl font-black tracking-tight text-balance">
            Peer-<span className="italic font-light text-accent">reviewed</span>.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {publications.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative grid md:grid-cols-12 gap-6 md:gap-10 items-center p-7 md:p-10 rounded-2xl border border-white/10 bg-ink/40 hover:border-accent/50 transition-colors"
            >
              <div className="md:col-span-2">
                <p className="font-display text-5xl md:text-6xl font-black text-bone/20 leading-none">{p.year}</p>
              </div>

              <div className="md:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-3 text-balance">
                  {p.title}
                </h3>
                <p className="text-bone-dim mb-1">{p.venue}</p>
                <p className="text-sm text-bone-dim/80 text-pretty">{p.detail}</p>
              </div>

              <div className="md:col-span-3 flex flex-wrap md:justify-end items-center gap-x-6 gap-y-3">
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-bone hover:text-accent transition-colors"
                >
                  Read the paper
                  <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-bone-dim hover:text-bone transition-colors underline underline-offset-4 decoration-white/20"
                >
                  View code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
