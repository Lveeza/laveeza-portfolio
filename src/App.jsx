
import { Routes, Route, useLocation } from 'react-router-dom'
import PageTransition from './components/PageTransition'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SideHeader from './components/SideHeader'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'

function AppContent() {
  const location = useLocation()
  const [isDark] = useContext(ThemeContext)

  return (
    <>
      <SideHeader />
      <main
        className={`relative flex flex-col justify-center font-quicksand laptop:ml-[280px] laptop:flex-row xl:ml-[350px] ${
          isDark ? 'bg-[#111827]' : 'bg-[#fff]'
        }`}
      >
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
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



