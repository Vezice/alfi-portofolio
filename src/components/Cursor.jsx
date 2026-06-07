import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const onOver = (e) => {
      const t = e.target
      setHover(!!t.closest('a, button, [data-hover]'))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full bg-accent mix-blend-difference"
          animate={{ width: hover ? 56 : 12, height: hover ? 56 : 12, x: hover ? -28 : -6, y: hover ? -28 : -6 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </motion.div>
    </>
  )
}
