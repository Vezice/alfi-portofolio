const tags = [
  'PyTorch', 'TensorFlow', 'CNN', 'Spatial Transformers', 'Naive Bayes',
  'Decision Trees', 'SVM', 'K-Means', 'LSTM', 'Transfer Learning',
  'Python', 'Java', 'SQL', 'Data Analysis',
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
