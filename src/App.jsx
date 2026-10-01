import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import PageTransition from './components/PageTransition'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SideHeader from './components/SideHeader'
import Certifications from './components/Certifications'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'

const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'))

function AppContent() {
  const location = useLocation()
  const [isDark] = useContext(ThemeContext)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches
    if (reduceMotion || isSmallScreen) return
    const id = setTimeout(() => setShowParticles(true), 500)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <SideHeader />
      <main
        className={`relative flex flex-col justify-center font-quicksand laptop:ml-[280px] laptop:flex-row xl:ml-[350px] ${
          isDark ? 'bg-[#111827]' : 'bg-[#fff]'
        }`}
      >
        {/* Particles: mounted once, never re-created on route change */}
        <div
          className="pointer-events-none fixed inset-y-0 right-0 left-0 z-0 laptop:left-[280px] xl:left-[350px]"
          aria-hidden="true"
        >
          {showParticles && (
            <Suspense fallback={null}>
              <ParticlesBackground />
            </Suspense>
          )}
        </div>

        <div className="relative z-10 w-full">
          <PageTransition>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </div>
      </main>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App