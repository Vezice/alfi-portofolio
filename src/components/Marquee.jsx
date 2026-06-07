import { useEffect, useRef, useState } from 'react'

const tags = [
  'Data Infrastructure', 'Agentic Engineering', 'System Architecture', 'MLOps',
  'Python', 'SQL', 'TensorFlow', 'PyTorch', 'JavaScript',
  'CNN', 'Deep Neural Networks', 'Spatial Transformers', 'Object Detection',
  'Time Series Forecasting', 'Unsupervised Learning', 'Transfer Learning',
  'Data Analysis', 'Data Visualization', 'Statistics', 'Business Intelligence',
  'Google Sheets', 'Microsoft Excel', 'Version Control',
  'Team Leadership', 'Mentorship', 'Cross-functional Collaboration',
  'Emotion Management',
]

const SPEED = 1.2

export default function Marquee() {
  const trackRef = useRef(null)
  const sectionRef = useRef(null)
  const offsetRef = useRef(0)
  const halfRef = useRef(0)
  const draggingRef = useRef(false)
  const lastXRef = useRef(0)
  const velocityRef = useRef(SPEED)
  const mouseXRef = useRef(null)
  const mouseInsideRef = useRef(false)
  const [grabbing, setGrabbing] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => { halfRef.current = track.scrollWidth / 2 }
    measure()
    window.addEventListener('resize', measure)

    let raf
    const tick = () => {
      if (!draggingRef.current) {
        offsetRef.current -= velocityRef.current
        velocityRef.current += (SPEED - velocityRef.current) * 0.04
      }
      const half = halfRef.current
      if (half > 0) {
        if (offsetRef.current <= -half) offsetRef.current += half
        if (offsetRef.current > 0) offsetRef.current -= half
      }
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`

      if (mouseInsideRef.current && mouseXRef.current != null) {
        const items = track.children
        const mx = mouseXRef.current
        let found = -1
        for (let i = 0; i < items.length; i++) {
          const r = items[i].getBoundingClientRect()
          if (mx >= r.left && mx <= r.right) { found = i; break }
        }
        setActiveIdx(found)
      } else {
        setActiveIdx(-1)
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', measure)
    }
  }, [])

  const onPointerDown = (e) => {
    draggingRef.current = true
    setGrabbing(true)
    lastXRef.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    mouseXRef.current = e.clientX
    mouseInsideRef.current = true
    if (!draggingRef.current) return
    const dx = e.clientX - lastXRef.current
    lastXRef.current = e.clientX
    offsetRef.current += dx
    velocityRef.current = -dx * 0.6
  }
  const onPointerUp = (e) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    setGrabbing(false)
    e.currentTarget.releasePointerCapture(e.pointerId)
  }
  const onPointerEnter = () => { mouseInsideRef.current = true }
  const onPointerLeave = () => { mouseInsideRef.current = false; mouseXRef.current = null }

  const row = [...tags, ...tags]

  return (
    <section
      ref={sectionRef}
      aria-label="Skills"
      className={`select-none border-y border-white/5 bg-ink-soft overflow-hidden py-6 md:py-8 ${grabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      data-hover
    >
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <span
            key={i}
            className={`font-display text-2xl md:text-4xl font-black px-5 transition-colors ${activeIdx === i ? 'text-accent' : 'text-bone/15'}`}
          >
            {t} <span className="text-accent">//</span>
          </span>
        ))}
      </div>
    </section>
  )
}
