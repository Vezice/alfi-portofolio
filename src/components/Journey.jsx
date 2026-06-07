import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
    title: 'Mathematics for ML + Google IT Automation',
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
]

const gradients = [
  'linear-gradient(135deg, #4dd4ff 0%, #7c5cff 100%)',
  'linear-gradient(135deg, #7c5cff 0%, #ff4d6d 100%)',
  'linear-gradient(135deg, #4dd4ff 0%, #ff4d6d 100%)',
  'linear-gradient(135deg, #ff4d6d 0%, #ffb14d 100%)',
  'linear-gradient(135deg, #7c5cff 0%, #4dd4ff 100%)',
  'linear-gradient(135deg, #ff4d6d 0%, #7c5cff 100%)',
  'linear-gradient(135deg, #ffb14d 0%, #ff4d6d 100%)',
  'linear-gradient(135deg, #4dd4ff 0%, #28e58e 100%)',
  'linear-gradient(135deg, #28e58e 0%, #4dd4ff 100%)',
  'linear-gradient(135deg, #7c5cff 0%, #28e58e 100%)',
  'linear-gradient(135deg, #ff4d6d 0%, #4dd4ff 100%)',
]

function MilestoneRow({ m, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const baseScale = m.featured ? 1.04 : 0.94
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [baseScale - 0.06, baseScale + 0.06, baseScale - 0.04])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.3])
  const flipped = i % 2 === 1

  const imageClasses = m.featured
    ? (flipped ? 'md:col-span-8 md:col-start-1 md:row-start-1' : 'md:col-span-8 md:col-start-5 md:row-start-1')
    : (flipped ? 'md:col-span-7 md:col-start-1 md:row-start-1' : 'md:col-span-7 md:col-start-6 md:row-start-1')

  const textClasses = m.featured
    ? (flipped ? 'md:col-span-4 md:col-start-9 md:row-start-1' : 'md:col-span-4 md:col-start-1 md:row-start-1')
    : (flipped ? 'md:col-span-5 md:col-start-8 md:row-start-1' : 'md:col-span-5 md:col-start-1 md:row-start-1')

  return (
    <motion.li
      ref={ref}
      style={{ opacity }}
      className="relative grid md:grid-cols-12 gap-6 md:gap-10 items-center py-10 md:py-20"
    >
      <motion.div style={{ scale, y }} className={imageClasses}>
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40"
          style={{ background: gradients[i % gradients.length] }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.5), transparent 40%)',
            }}
          />
          <div className="relative h-full flex flex-col justify-between p-6 md:p-10">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/90 self-start rounded-full bg-black/30 backdrop-blur px-3 py-1.5 border border-white/15">
              {m.tag}
            </span>
            <div>
              <p className="font-display text-5xl md:text-7xl font-black text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] leading-none">
                {m.year}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={textClasses}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">{m.year}</p>
          <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-balance leading-tight">
            {m.title}
          </h3>
          <p className="text-bone-dim text-pretty">{m.body}</p>
        </motion.div>
      </div>
    </motion.li>
  )
}

export default function Journey() {
  return (
    <section id="journey" className="relative bg-ink-soft py-24 md:py-40 border-y border-white/5 overflow-hidden">
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

        <ol className="space-y-6 md:space-y-10">
          {milestones.map((m, i) => (
            <MilestoneRow key={m.year + i} m={m} i={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
