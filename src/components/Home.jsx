import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import emoji from '../assets/Emoji.png'
import emojiDark from '../assets/emojiLight.png'

const ParticlesBackground = lazy(() => import('./ParticlesBackground'))

export default function Home() {
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
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden">
      {showParticles && (
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
      )}

      <div className="relative z-10 flex flex-col items-center gap-10 px-4">
        <div className="flex items-center gap-4 md:gap-10">
          <img
            src={isDark ? emojiDark : emoji}
            alt=""
            width="128"
            height="128"
            fetchPriority="high"
            decoding="async"
            className="w-24 animate-[float_3s_ease-in-out_infinite] motion-reduce:animate-none xl:w-32"
          />
          <div className="text-center">
            <h1 className={`text-2xl font-bold sm:text-3xl md:text-[40px] xl:text-[56px] ${isDark ? 'text-[#f5f5f5]' : 'text-black'}`}>
              Hi, I'm Laveeza Jamshaid
            </h1>
            <p className={`mt-2 text-base md:mt-5 md:text-xl ${isDark ? 'text-pink-500' : 'text-pink-700'}`}>
              Full-Stack Developer · Laravel + React
            </p>
            <p className={`mx-auto mt-2 max-w-xl text-sm font-medium sm:text-base md:mt-5 xl:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I build fast, user-friendly web apps with React and Tailwind CSS on the
              front end, and PHP, Laravel, and MySQL on the back end.
            </p>
          </div>
        </div>

        <div className="ml-32 flex justify-center gap-3 font-semibold sm:gap-5">
          <Link
            to="/projects"
            className="rounded-full bg-pink-600 px-5 py-2 text-white shadow-[0_0_20px_#ec4899] transition-transform duration-300 hover:scale-105 hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border-2 border-pink-600 px-5 py-2 text-pink-600 transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}