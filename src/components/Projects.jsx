import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    no: '01',
    title: 'Sign Language Recognition',
    subtitle: 'CNN + Spatial Transformer Network',
    body: 'Real-time ASL alphabet recognition. CNN trained in PyTorch, with a Spatial Transformer module that learns to focus on the hand region — robust against translation and small rotations.',
    bullets: ['PyTorch', 'STN + CNN', 'Real-time inference', 'Published research'],
    img: BASE + 'images/project-1.png',
    paper: 'https://doi.org/10.25126/jtiik.1078098',
    code: 'https://github.com/Vezice/Sign_Language_CNN_Spatial_Transformer',
  },
  {
    no: '02',
    title: 'Naive Bayes vs Decision Tree',
    subtitle: 'Classification benchmark on Car Evaluation',
    body: 'Side-by-side implementation of Naive Bayes and ID3 Decision Tree on the Car Evaluation dataset. Naive Bayes edged out at 89.2% vs 88% — a study in where each method shines.',
    bullets: ['89.2% NB accuracy', '88% Decision Tree (ID3)', 'Implemented from scratch'],
    img: BASE + 'images/project-2.png',
    paper: 'https://github.com/Vezice/alfi-portofolio/tree/main/Projects',
    paperLabel: 'All projects',
    code: 'https://github.com/Vezice/alfi-portofolio/blob/main/Projects/ML%20-%20Decision%20Tree.ipynb',
  },
  {
    no: '03',
    title: 'Iris Classification — Backprop ANN',
    subtitle: 'From-scratch backpropagation',
    body: 'Backpropagation artificial neural network applied to the classic Iris dataset. One-hot encoded labels, hand-rolled gradient descent — converging cleanly to 100% on the test split.',
    bullets: ['100% test accuracy', 'One-hot encoded', 'Backprop from scratch'],
    img: BASE + 'images/project-3.png',
    paper: 'https://github.com/Vezice/alfi-portofolio/tree/main/Projects',
    paperLabel: 'All projects',
    code: 'https://github.com/Vezice/alfi-portofolio/blob/main/Projects/ANN%20-%20Backpropagation_2.ipynb',
  },
]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])
  const watermarkY = useTransform(scrollYProgress, [0, 1], [120, -120])
  const flipped = i % 2 === 1

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      className="group relative grid md:grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-28 border-b border-white/5"
    >
      <motion.span
        aria-hidden
        style={{ y: watermarkY }}
        className={`pointer-events-none absolute z-0 font-display font-black select-none text-bone/[0.04] text-[18rem] md:text-[28rem] leading-none top-1/2 -translate-y-1/2 ${flipped ? 'right-0 md:-right-10' : 'left-0 md:-left-10'}`}
      >
        {p.no}
      </motion.span>

      <div className={`relative z-10 md:col-span-6 ${flipped ? 'md:order-2' : ''}`}>
        <motion.div
          style={{ y }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink-soft border border-white/5"
        >
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] uppercase text-bone-dim">{p.no}</span>
        </motion.div>
      </div>

      <div className={`relative z-10 md:col-span-6 ${flipped ? 'md:order-1' : ''}`}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">{p.subtitle}</p>
        <h3 className="font-display text-4xl md:text-6xl font-black tracking-tight mb-6 text-balance">
          {p.title}
        </h3>
        <p className="text-bone-dim text-lg max-w-lg mb-6 text-pretty">{p.body}</p>
        <ul className="flex flex-wrap gap-2 mb-8">
          {p.bullets.map((b) => (
            <li key={b} className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 text-bone-dim">
              {b}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <a
            href={p.paper}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-2 text-bone hover:text-accent transition-colors"
          >
            {p.paperLabel || 'Read the paper'}
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
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div aria-hidden className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/15 blob pointer-events-none" />
      <div aria-hidden className="absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent-2)]/15 blob pointer-events-none" style={{ animationDelay: '-9s' }} />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 flex items-end justify-between gap-8 flex-wrap"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              Selected work
              <span className="text-accent">/ 03</span>
            </p>
            <h2 className="font-display text-5xl md:text-8xl font-black tracking-tight text-balance">
              Things I've <span className="italic font-light text-accent">built</span>.
            </h2>
          </div>
          <a
            href="https://github.com/Vezice/alfi-portofolio/tree/main/Projects"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-bone-dim hover:text-accent transition-colors"
          >
            All notebooks
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.no} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
