import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    no: '01',
    title: 'AHABot',
    subtitle: 'Autonomous Multi-Brand Pipeline & BigQuery Lakehouse',
    body: 'Enterprise data extraction and ingestion engine across Lazada and marketplace seller centers. Integrates a three-tier AI architecture (Playwright, Gemini Flash, Gemini Pro) and an automated GCP event-driven pipeline streaming sales metrics directly into BigQuery.',
    bullets: ['Three-Tier AI', 'GCS → Eventarc → BigQuery', 'GCP Pub/Sub Swarm', 'Automated BA Dash'],
    img: BASE + 'images/project-ahabot.png',
    code: 'https://github.com/Vezice',
  },
  {
    no: '02',
    title: 'AHA Agents & Phoenix HQ',
    subtitle: 'Desktop Automation Suite & Self-Healing Agent Supervisor',
    body: 'Distributed marketplace automation suite packaged as a native Windows desktop GUI (pywebview) with automated CI/CD builds. Supervised by Phoenix HQ — an autonomous sentinel running on macOS that orchestrates up to 9 parallel browser instances, detects operational wedges, and triggers self-healing patch updates.',
    bullets: ['Multi-Browser Parallelism', 'Phoenix Self-Healing HQ', 'PyInstaller CI/CD', 'Sentinel Monitoring'],
    img: BASE + 'images/project-aha-agents.png',
    code: 'https://github.com/Vezice',
  },
  {
    no: '03',
    title: 'AI Dashboard',
    subtitle: 'Next.js 15 + Claude Adaptive Thinking Copilot',
    body: 'Executive data analytics portal with interactive Recharts visualizations and glassmorphic styling, featuring an embedded "Ask Your Data" copilot powered by the streaming Claude API (claude-opus-4-8) with adaptive thinking to translate plain-English queries into real-time business insights.',
    bullets: ['Next.js 15 (App Router)', 'React 19 + TypeScript', 'Claude Streaming API', 'Tailwind CSS v4 + Recharts'],
    img: BASE + 'images/project-ai-dashboard.png',
    code: 'https://github.com/Vezice',
  },
  {
    no: '04',
    title: 'Sign Language Recognition',
    subtitle: 'CNN + Spatial Transformer Network',
    body: 'Real-time ASL alphabet recognition. CNN trained in PyTorch, with a Spatial Transformer module that learns to focus on the hand region — robust against translation and small rotations. Peer-reviewed and published in JTIIK (SENTRIN 2023).',
    bullets: ['PyTorch', 'STN + CNN', 'Real-time inference', 'Published research'],
    img: BASE + 'images/project-1.png',
    paper: 'https://doi.org/10.25126/jtiik.1078098',
    paperLabel: 'Read the paper',
    code: 'https://github.com/Vezice/Sign_Language_CNN_Spatial_Transformer',
  },
]

const labItems = [
  {
    title: 'CIA Monitor App',
    category: 'Engineering Intelligence',
    body: 'Automated team velocity and health tracker monitoring private GitHub commits and Claude AI token consumption with balanced composite scoring. Zero-dependency architecture.',
    tech: ['Python stdlib', 'SQLite WAL', 'macOS launchd', 'Zero deps'],
    link: 'https://github.com/Vezice',
  },
  {
    title: 'aha-mac Marketplace Cloud',
    category: 'Cloud Microservice',
    body: 'Operations platform deployed on Google Cloud Run (asia-southeast2) powering brand rotation schedules, marketplace calculations, and live BigQuery calculator integrations.',
    tech: ['Google Cloud Run', 'Next.js BFF', 'Docker', 'Secret Manager'],
    link: 'https://github.com/Vezice',
  },
  {
    title: 'Voice Bridge & Local LLM',
    category: 'Multi-Modal Agentics',
    body: 'End-to-end bridge routing Discord DMs through a local Ollama (Qwen 2.5) triage filter into tmux Claude Code sessions, powered by a Silero VAD audio engine.',
    tech: ['Ollama / Qwen 2.5', 'Discord API', 'Silero VAD', 'tmux'],
    link: 'https://github.com/Vezice',
  },
  {
    title: 'Foundational ML Notebooks',
    category: 'Machine Learning',
    body: 'Comprehensive series of 20 from-scratch Jupyter notebooks implementing foundational neural networks and algorithms: Hebb Net, Perceptron, Backprop, SOM, LVQ, Decision Trees, and LSTMs.',
    tech: ['PyTorch', 'NumPy', 'Jupyter', 'Math Foundations'],
    link: 'https://github.com/Vezice/alfi-portofolio/tree/main/Projects',
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
          {p.paper && (
            <a
              href={p.paper}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-2 text-bone hover:text-accent transition-colors"
            >
              {p.paperLabel || 'Read the paper'}
              <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-bone-dim hover:text-bone transition-colors underline underline-offset-4 decoration-white/20"
            >
              {p.paper ? 'View code' : 'Explore project →'}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function LabCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
      className="group relative p-7 md:p-8 rounded-2xl border border-white/5 bg-ink-soft/40 hover:border-accent/40 transition-colors flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {item.category}
          </span>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label={item.title}
            className="text-bone-dim group-hover:text-accent transition-colors font-mono text-xs"
          >
            ↗
          </a>
        </div>
        <h3 className="font-display text-2xl font-bold mb-3 text-balance group-hover:text-bone transition-colors">
          {item.title}
        </h3>
        <p className="text-bone-dim text-sm leading-relaxed mb-6 text-pretty">
          {item.body}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {item.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 text-bone-dim/90"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
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
              <span className="text-accent">/ 04</span>
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

        {/* Featured Hero Projects */}
        <div className="mb-24 md:mb-36">
          {projects.map((p, i) => (
            <ProjectCard key={p.no} p={p} i={i} />
          ))}
        </div>

        {/* Lab & Micro-Systems Sub-Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14 flex items-baseline justify-between flex-wrap gap-4"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim mb-3 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent-3)]" />
                Explorations &amp; Internal Tooling
              </p>
              <h3 className="font-display text-3xl md:text-5xl font-black tracking-tight">
                Lab &amp; <span className="italic font-light text-accent">Micro-Systems</span>.
              </h3>
            </div>
            <p className="font-mono text-xs text-bone-dim tracking-wider uppercase">
              4 Utilities &amp; Systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {labItems.map((item, i) => (
              <LabCard key={item.title} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
