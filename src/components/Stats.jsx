import { motion } from 'framer-motion'

const stats = [
  { value: '3 → 12', label: 'Team scaled as architect' },
  { value: '6+', label: 'Years in data & ML' },
  { value: '1', label: 'Peer-reviewed paper' },
  { value: '10', label: 'Certifications earned' },
]

export default function Stats() {
  return (
    <section id="stats" aria-label="Impact at a glance" className="relative border-y border-white/5 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-5xl md:text-7xl font-black tracking-tight text-bone leading-none">
                {s.value}
              </p>
              <p className="mt-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-bone-dim">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
