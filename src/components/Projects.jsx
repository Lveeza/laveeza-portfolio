import ParticlesBackground from './ParticlesBackground'
import ecommerce from '../assets/E-commerce.png'
import digitalApp from '../assets/DigitalApp.png'
import quizApp from '../assets/QuizApp.png'
import focusApp from '../assets/TodoApp.png'
import selectGame from '../assets/GameApp.png'
import memoryGame from '../assets/MemoryGame.png'
import countries from '../assets/Countries.png'
import foodie from '../assets/foodieHamburger.png'
import shoe from '../assets/shoeImg.png'

import darkCountry from '../assets/Countries-removebg-preview.png'
import darkDigitalApp from '../assets/DigitalApp-removebg-preview.png'
import darkCommerceApp from '../assets/E-commerce-removebg-preview.png'
import darkFoodApp from '../assets/foodieHamburger-removebg-preview.png'
import darkGameApp from '../assets/GameApp-removebg-preview.png'
import darkTodoApp from '../assets/TodoApp-removebg-preview.png'
import darkShoeApp from '../assets/shoeImg-removebg-preview.png'
import darkQuizApp from '../assets/QuizApp-removebg-preview.png'
import darkMemoryGameApp from '../assets/memoryGame-removebg-preview.png'

import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

export default function Projects() {
  const [isDark] = useContext(ThemeContext)

  const projects = [
    {
      title: 'E-commerce Store',
      tagline:
        'A full-stack online store built to deliver a seamless shopping experience. The application features dynamic product listings, responsive design, shopping cart functionality, catogories filter functionality, and a modern UI.',
      image: ecommerce,
      DarkImage: darkCommerceApp,
      liveUrl: 'https://e-commerce-shop-web.netlify.app/',
      codeUrl: 'https://github.com/you/ecommerce-store',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
    },
    {
      title: 'Digital Marketing App',
      tagline:
        'A modern, responsive landing-page application designed to showcase digital marketing services and features with engaging visuals and interactive elements. A user can enjoy fully responsive experiance at this website.',
      image: digitalApp,
      DarkImage: darkDigitalApp,
      liveUrl: 'https://digital-marketing-apps.netlify.app/',
      codeUrl: 'https://github.com/you/digital-marketing-app',
      tech: ['React', 'Tailwind', 'HTML'],
    },
    {
      title: 'Quiz App',
      tagline:
        'An interactive quiz application where users can test their knowledge through multiple-choice questions. It dynamically tracks the score, shows correct answers, and provides a smooth, amd a perfect responsive experience.',
      image: quizApp,
      DarkImage: darkQuizApp,
      liveUrl: 'https://quizappo.netlify.app/',
      codeUrl: 'https://github.com/you/quiz-app',
      tech: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Countries',
      tagline:
        'A responsive web application built using the REST Countries API that allows users to explore detailed information about countries around the world. Users can search for any country by name, filter by region, and view key details.',
      image: countries,
      DarkImage: darkCountry,
      liveUrl: 'https://resttcountriesapi-project.netlify.app/',
      codeUrl: 'https://github.com/you/piano-app',
      tech: ['HTML', 'Tailwind', 'React'],
    },
    {
      title: 'To-Do App',
      tagline:
        'A sleek task-and-focus web application designed to help users to make a checklist of their most important goals each day. The interface allows users to add tasks, set a primary focus, track their progress and do day-to-day tasks.',
      image: focusApp,
      DarkImage: darkTodoApp,
      liveUrl: 'https://focus-on-today-web.netlify.app/',
      codeUrl: 'https://github.com/you/todo-app',
      tech: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Cards Game',
      tagline:
        'A fun engaging JavaScript web game where players must “hit” the each card only one time as they appear. Built for fast performance and fun interaction, the game emphasizes quick thinking, smooth visuals, and simple controls.',

      image: selectGame,
      DarkImage: darkGameApp,
      liveUrl: 'https://hit-game-app.netlify.app/',
      codeUrl: 'https://github.com/you/game-app',
      tech: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Memory Game',
      tagline:
        'A fun and interactive memory-matching game built for the web. Players can make the correct pattern that appears under various levels of challenge, improving focus and cognitive skills while enjoying a smooth and responsive experience.',
      image: memoryGame,
      DarkImage: darkMemoryGameApp,
      liveUrl: 'https://memoryfullgame.netlify.app/',
      codeUrl: 'https://github.com/you/memory-game',
      tech: ['JavaScript', 'CSS', 'HTML'],
    },
    
    {
      title: 'Foodie Hamburger',
      tagline:
        'A responsive hamburger web app where users can explore delicious burger options with an easy-to-use interface. The project focuses on modern UI design, responsiveness perfect for restaurant-style concepts and responsive designs.',
      image: foodie,
      DarkImage: darkFoodApp,
      liveUrl: 'https://foodiehamburger.netlify.app/',
      codeUrl: 'https://github.com/you/foodie-app',
      tech: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'The Shoe Company',
      tagline:
        'A modern and responsive shoe company website built using HTML, tailwind, and JavaScript. It features a clean design, smooth animations, and showcases stylish footwear collections with an elegant layout.',
      image: shoe,
      DarkImage: darkShoeApp,
      liveUrl: 'https://shoe-company-website.netlify.app/',
      codeUrl: 'https://github.com/you/foodie-app',
      tech: ['JavaScript', 'Tailwind', 'HTML'],
    },
  ]

  return (
    <section className="pc:w-[80%] relative mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden px-3">
      <ParticlesBackground />

      <div className="relative z-10 px-4 py-24 laptop:py-12">
        <h1
          className={`text-center ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} text-3xl font-medium laptop:text-5xl`}
        >
          My Projects
        </h1>

        <div className="mt-20 grid grid-cols-1 items-center justify-center gap-5 backdrop-blur-sm sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group relative w-full max-w-[650px] overflow-hidden rounded-2xl border bg-white/5 ${isDark ? 'border-black' : 'border-gray-200 '} ${isDark ? 'shadow-[0_0_30px_#3b3b63]' : 'shadow-[0_0_30px_#f5b3d3]'} transition-all duration-300 ${isDark ? 'hover:shadow-[0_0_40px_#3b3b63]' : 'hover:shadow-[0_0_40px_#d192b1]'}`}
            >
              <img
                src={` ${isDark ? p.DarkImage : p.image} `}
                alt={p.title}
                className={`h-64 w-full object-cover ${isDark ? 'shadow-[0_0_20px_#54424b]' : 'shadow-[0_0_30px_#f5b3d3]'} transition-transform duration-500 group-hover:scale-105 sm:h-72 md:h-80`}
              />

              <div className="p-5">
                <h3
                  className={`text-xl ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} font-semibold`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} `}
                >
                  {p.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full ${isDark ? 'bg-pink-300' : 'bg-pink-100'} px-2 py-1 text-xs font-semibold text-pink-600`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end">
                  <div className="group relative flex w-[70px] flex-col items-center text-pink-600">
                    <p
                      className={`absolute -top-6 ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} hidden text-sm font-medium italic group-hover:block`}
                    >
                      Live Demo
                    </p>

                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transform rounded-md border border-pink-400 px-2 py-1 text-pink-400 transition hover:scale-110 hover:shadow-[0_0_20px_#f5b3d3]"
                    >
                      <i className="fa-regular fa-share-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
