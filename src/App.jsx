// import './App.css'
// import SideHeader from './components/SideHeader'
// import { Outlet, useLocation } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// function App() {
//   return (
//     <>
//       <main className="laptop:flex-row font-quicksand flex flex-col">
//         <SideHeader />

//         <Outlet />
//       </main>
//     </>
//   )
// }

// export default App

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


// import { AnimatePresence, motion } from 'framer-motion'
// import { Outlet, useLocation } from 'react-router-dom'
// import SideHeader from './components/SideHeader'

// export default function App() {
//   const location = useLocation()

//   return (
//     <main className="font-quicksand flex">
//       <SideHeader />
//       <div className="relative w-full overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0, x: 200, rotateY: 45 }}
//             animate={{ opacity: 1, x: 0, rotateY: 0 }}
//             exit={{ opacity: 0, x: -200, rotateY: -45 }}
//             transition={{ duration: 0.8, ease: 'easeInOut' }}
//             className="absolute inset-0"
//           >
//             <Outlet />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </main>
//   )
// }
