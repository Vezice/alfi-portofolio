import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Data & Infrastructure',
    items: [
      'Data Infrastructure',
      'System Architecture',
      'MLOps',
      'Business Intelligence',
      'Data Analysis',
      'Data Visualization',
      'Statistics',
    ],
  },
  {
    label: 'AI & Machine Learning',
    items: [
      'Deep Neural Networks',
      'CNN',
      'Spatial Transformers',
      'Object Detection',
      'Time Series Forecasting',
      'Unsupervised Learning',
      'Transfer Learning',
      'Agentic Engineering',
    ],
  },
  {
    label: 'Languages & Tools',
    items: ['Python', 'SQL', 'JavaScript', 'TensorFlow', 'PyTorch', 'Git', 'Google Sheets', 'Microsoft Excel'],
  },
  {
    label: 'Leadership',
    items: ['Team Leadership', 'Mentorship', 'Cross-functional Collaboration', 'Emotion Management'],
  },
]

const languages = [
  { name: 'Indonesian', level: 'Native' },
  { name: 'English', level: 'Full professional' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-4">— Skills</p>
          <h2 className="font-display text-5xl md:text-8xl font-black tracking-tight text-balance">
            The <span className="italic font-light text-accent">toolkit</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="bg-ink p-7 md:p-10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-accent" />
                {g.label}
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm px-3.5 py-2 rounded-full border border-white/10 text-bone-dim hover:border-accent hover:text-bone transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim shrink-0">— Languages</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {languages.map((l) => (
              <p key={l.name} className="flex items-baseline gap-3">
                <span className="font-display text-xl font-bold text-bone">{l.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">{l.level}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
