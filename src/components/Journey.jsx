import { motion } from 'framer-motion'

const milestones = [
  {
    year: 'Aug 2019',
    tag: 'Education',
    title: 'B.S. Informatics — University of Brawijaya',
    body: 'Started undergraduate studies in Informatics in Malang. The foundation that everything else builds on — algorithms, systems, the way code becomes products.',
  },
  {
    year: 'Mar 2022',
    tag: 'Coursera',
    title: 'Mathematics for ML + Google IT Automation with Python',
    body: 'Mathematics for Machine Learning (Imperial College London) and Google IT Automation with Python — closing the math gap and learning to script real systems.',
  },
  {
    year: 'Apr 2022',
    tag: 'DeepLearning.AI',
    title: 'TensorFlow Developer track',
    body: 'Three Coursera specializations from DeepLearning.AI: Structuring ML Projects, TensorFlow Developer, and TensorFlow: Data and Deployment. The end-to-end ML toolkit.',
  },
  {
    year: 'Feb – Aug 2022',
    tag: 'Bangkit Academy',
    title: 'ML cohort — Google, Tokopedia, Gojek, Traveloka',
    body: 'Selected for the Bangkit Academy ML track, an intensive 7-month program backed by Indonesia\'s top tech companies. Deep learning in Python and TensorFlow, end to end.',
  },
  {
    year: 'Aug 2022 – Jun 2023',
    tag: 'Research',
    title: 'Sign Language CNN + Spatial Transformer',
    body: 'Final project for my degree: real-time ASL alphabet recognition combining a CNN with a Spatial Transformer Network. Trained in PyTorch.',
  },
  {
    year: 'Aug 2023',
    tag: 'Degree',
    title: 'Graduated S.Kom., GPA 3.63',
    body: 'Completed the four-year Informatics degree at Brawijaya. The research project became the basis for what I\'d present a few months later.',
  },
  {
    year: 'Oct 2023',
    tag: 'Conference',
    title: 'SENTRIN 2023 — paper presented',
    body: 'Presented the Sign Language CNN + Spatial Transformer work at the Seminar Nasional Teknologi dan Rekayasa Informasi (SENTRIN), University of Brawijaya.',
  },
  {
    year: 'Oct 2024',
    tag: 'AHA Commerce',
    title: 'Joined as Intern — Data Analyst',
    body: 'Stepped into the world of e-commerce data. Detected and located performance problems for brands, working alongside the Business Data Specialist.',
  },
  {
    year: 'Feb 2025',
    tag: 'AHA Commerce',
    title: 'Promoted to Business Data Analyst',
    body: 'Took ownership of solving the issues that were halting brand growth. End-to-end: from spotting the problem in the data to shipping the fix.',
  },
  {
    year: 'Jun 2025',
    tag: 'AHA Commerce',
    title: 'Senior Business Data Analyst — leading the FBI team',
    body: 'Started guiding and mentoring a specialized team of business data analysts (the FBI) to optimize brand performance and resolve operational bottlenecks at scale.',
  },
  {
    year: '2026 — Now',
    tag: 'Current',
    title: 'Data & AI Architect',
    body: 'Scaling the engineering and data team from 3 to 12 people. Designing the data infrastructure and organizational frameworks that let everyone execute with speed and precision — and starting to wire in agentic systems.',
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
            Brawijaya → Bangkit → published research → AHA Commerce. Six years of building, learning, and growing into the architect role.
          </p>
        </motion.div>

        <ol className="relative border-l border-white/10 ml-3 md:ml-6">
          {milestones.map((m, i) => (
            <motion.li
              key={m.year + i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="relative pl-8 md:pl-12 pb-12 md:pb-16 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-ink-soft" />
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{m.year}</p>
                {m.tag && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim border border-white/10 rounded-full px-2.5 py-0.5">
                    {m.tag}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-balance">{m.title}</h3>
              <p className="text-bone-dim max-w-xl text-pretty">{m.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
