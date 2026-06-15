import { useEffect } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Stats from './components/Stats.jsx'
import Projects from './components/Projects.jsx'
import Publications from './components/Publications.jsx'
import Journey from './components/Journey.jsx'
import Skills from './components/Skills.jsx'
import Credentials from './components/Credentials.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.18, wheelMultiplier: 1.4, smoothWheel: true })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="grain relative min-h-screen bg-ink text-bone">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Journey />
        <Projects />
        <Publications />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
