import ParticlesBackground from './ParticlesBackground'
import emoji from '../assets/Emoji.png'
import emojiDrak from '../assets/EmojiLight.png'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

export default function Home() {
  const [isDark] = useContext(ThemeContext)

  return (
    <div className="min-h-screen relative w-full overflow-hidden flex justify-center items-center  ">
      <ParticlesBackground />
      <div className="relative  z-10 flex flex-col items-center justify-center gap-10  text-black">
        <div className="flex items-center gap-0 px-2 md:gap-10">
          <div className="mb-20 backdrop-blur-lg w-24 animate-[float_3s_ease-in-out_infinite]  xl:w-32">
            <img src={isDark ? emojiDrak : emoji} alt="emoji" />
          </div>
          <div className="text-center">
            <h1 className={`whitespace-nowrap text-xl ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} font-bold sm:text-3xl md:text-[40px] xl:text-[56px]`}>
              Hi, I'm Laveeza Jamshaid
            </h1>
            <p className={`mt-2 text-center text-base ${isDark ? 'text-pink-600' : 'text-pink-700'}  md:mt-5 md:text-xl`}>
              Frontend Web Developer
            </p>
            <p className={`mx-auto mt-2 max-w-xl text-center text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}  sm:text-base md:mt-5 xl:text-lg`}>
              A passionate Frontend Developer having an experience of building
              responsive, and user-friendly Websites with JavaScript / Reactjs /
              Tailwind CSS / React and some other cool libraries and frameworks.
            </p>
          </div>
        </div>
        <div className="ml-10 sm:ml-20 flex gap-2 font-semibold sm:gap-5">
          <a
            href="/projects"
            className="transform whitespace-nowrap rounded-full bg-pink-600 px-4 py-[5px] text-sm text-white shadow-[0_0_20px_#ec4899] transition-all duration-300 hover:scale-110 hover:bg-pink-700 sm:px-6 sm:py-2 sm:text-base"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="transform whitespace-nowrap rounded-full border-2 border-pink-600 px-4 py-[5px] text-sm text-pink-600 shadow-[0_0_20px_#ec4899] transition-all duration-300 hover:scale-110  sm:px-6 sm:py-2 sm:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
