import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 1200, damping: 50, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 1200, damping: 50, mass: 0.2 })
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)

  useEffect(() => {
    const onMove = (e) => { x.set(e.clientX); y.set(e.clientY) }
    const onOver = (e) => {
      const t = e.target
      setHover(!!t.closest('a, button, [data-hover]'))
    }
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [x, y])

  const size = hover ? (down ? 22 : 28) : 10
  const offset = -size / 2
  const color = down ? '#1aa4d6' : hover ? '#4dd4ff' : '#f5f1ea'

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: size,
          height: size,
          x: offset,
          y: offset,
          backgroundColor: color,
          boxShadow: hover ? `0 0 24px ${color}` : '0 0 0px transparent',
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
      />
    </motion.div>
  )
}
