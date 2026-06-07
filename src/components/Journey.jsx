import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2019',
    title: 'Started Informatics Engineering',
    body: 'Began undergraduate studies in Informatics Engineering, falling for the practical side of computer science — algorithms, data structures, the way code becomes systems.',
  },
  {
    year: '2020',
    title: 'First taste of ML',
    body: 'Discovered machine learning through coursework — Naive Bayes, decision trees, the simple ideas that kick off the field. Started building classifiers from scratch in Python.',
  },
  {
    year: '2021',
    title: 'Deep learning rabbit hole',
    body: 'Backpropagation, CNNs, the Iris and MNIST classics. Implemented a backprop ANN from scratch and watched it converge — that moment hooked me.',
  },
  {
    year: '2022',
    title: 'Research: Sign Language CNN',
    body: 'Designed and trained a real-time ASL recognition system combining a CNN with a Spatial Transformer Network. Published the work in a peer-reviewed journal.',
  },
  {
    year: '2023',
    title: 'Production data work',
    body: 'Moved from notebooks to production — building data pipelines, working with SQL at scale, and learning how models actually live in real systems.',
  },
  {
    year: '2024',
    title: 'Broadening the toolkit',
    body: 'Transfer learning, LSTM sequence models, transformer architectures. Started treating models as components in a larger system rather than the system itself.',
  },
  {
    year: 'Now',
    title: 'Looking for the next chapter',
    body: 'Open to ML / DL / data roles where I can ship models that matter — and keep learning from the people around me.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="relative bg-ink-soft py-24 md:py-40 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-4">— The path</p>
          <h2 className="font-display text-5xl md:text-8xl font-black tracking-tight text-balance">
            From <span className="italic font-light text-accent">2019</span> to now.
          </h2>
          <p className="mt-6 max-w-2xl text-bone-dim text-lg text-pretty">
            A rough timeline — placeholder text for now. Share the details from your LinkedIn and I'll fill this in properly.
          </p>
        </motion.div>

        <ol className="relative border-l border-white/10 ml-3 md:ml-6">
          {milestones.map((m, i) => (
            <motion.li
              key={m.year + i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pl-8 md:pl-12 pb-12 md:pb-16 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-ink-soft" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-2">{m.year}</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{m.title}</h3>
              <p className="text-bone-dim max-w-xl text-pretty">{m.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
