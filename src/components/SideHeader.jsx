import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function SideHeader() {
  const [isDark, setIsDark] = useContext(ThemeContext)

  return (
    <header
      className={`fixed left-1/2 z-20 mt-8 flex min-h-12 w-[90%] -translate-x-1/2 items-center justify-start rounded-3xl border border-pink-400 laptop:justify-center laptop:border-t-0 laptop:border-b-0 laptop:border-l-0 laptop:border-r ${isDark ? 'laptop:border-gray-700' : 'laptop:border-pink-300' }  ${isDark ? 'shadow-[0_0_80px_#28285e]' : 'shadow-[0_0_80px_#dea4c1]'} ${isDark ? 'bg-gradient-to-b from-[#1a1a2e]  to-[#111827]' : 'bg-gradient-to-b from-pink-100 via-white to-pink-100'} px-2 font-quicksand backdrop-blur-sm sm:w-[500px] laptop:left-0 laptop:mt-0 laptop:min-h-screen laptop:w-[290px] laptop:-translate-x-0 laptop:flex-col laptop:rounded-none xl:w-[350px]`}
    >
      <ul className="flex w-fit items-center gap-0 laptop:flex-col laptop:gap-10">
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <li
            key={item}
            className={`:hover:border-pink-600 rounded-3xl border border-transparent px-2 py-2 text-xs font-medium ${isDark ? 'text-[#fff]' : 'text-[#051441]'} transition-all duration-500 hover:bg-pink-700/20 hover:text-pink-600 sm:px-5 laptop:text-xl laptop:hover:border-transparent laptop:hover:bg-transparent`}
          >
            <NavLink
              className={({ isActive }) =>
                `relative pb-3 after:bottom-0 after:left-0 after:h-[2px] after:bg-pink-700 after:transition-all after:duration-500 after:content-[''] laptop:after:absolute ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`
              }
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              end={item === 'Home'}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="absolute right-4 flex h-7 rounded-2xl border border-pink-400 bg-pink-700/10 px-5 text-xs shadow-[0_0_40px_#cf6b9d] laptop:right-6 laptop:top-5">
        <div
          className={`text-black-700 flex cursor-pointer items-center rounded-full  bg-pink-300 px-2 py-3 text-base backdrop-blur-sm transition-all duration-500 ${isDark ? 'translate-x-5' : '-translate-x-5'}`}
          onClick={() => {
            setIsDark(!isDark)
            localStorage.setItem('isDarkMode', !isDark)
          }}
        >
          <i
            className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </header>
  )
}
