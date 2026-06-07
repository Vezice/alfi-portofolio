const tags = [
  'Data Architecture', 'Agentic Engineering', 'Data Infrastructure',
  'PyTorch', 'TensorFlow', 'CNN', 'Spatial Transformers',
  'Python', 'SQL', 'Data Visualization', 'Team Leadership',
  'System Architecture', 'Transfer Learning', 'LSTM',
]

export default function Marquee() {
  const row = [...tags, ...tags]
  return (
    <section aria-hidden className="border-y border-white/5 bg-ink-soft overflow-hidden py-10">
      <div className="flex marquee-track whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-5xl md:text-7xl font-black mx-8 text-bone/10 hover:text-accent transition-colors">
            {t} <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </section>
  )
}
