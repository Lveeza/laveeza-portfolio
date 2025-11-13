import ParticlesBackground from './ParticlesBackground'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

export default function About() {
  const skills = [
    {
      name: 'HTML',
      level: 95,
      description: 'Expert level knowledge of semantic HTML5',
    },
    {
      name: 'Tailwind',
      level: 90,
      description: 'Expert level knowledge of modern CSS3 techniques',
    },
    {
      name: 'JavaScript',
      level: 85,
      description:
        'Strong proficiency in ES6+, DOM manipulation, and modern frameworks',
    },
    {
      name: 'React',
      level: 75,
      description:
        'Experience with React hooks, state management, and component architecture',
    },
  ]

  const [isDark] = useContext(ThemeContext)

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-28">
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center text-black">
        <h1
          className={` ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} text-center text-4xl font-bold laptop:text-5xl`}
        >
          About Me
        </h1>

        <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-center gap-5 laptop:flex-row laptop:gap-2">
          <div className="relative w-full pl-3 xl:pl-5 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-pink-700 before:content-[''] after:absolute after:-top-2 after:left-[-6px] after:h-4 after:w-4 after:rounded-full after:border-[2px] after:border-pink-700 after:bg-transparent after:content-[''] laptop:w-1/2">
            <h4
              className={`mb-6 ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} text-2xl font-semibold`}
            >
              It’s me!
            </h4>

            <p
              className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Hi, I’m Laveeza — a passionate Frontend Developer who loves
              turning creative ideas into interactive, user-friendly web
              experiences. I am building modern web applications using the
              latest technologies and I've been passionate about creating
              intuitive and performant digital experiences ever since.
            </p>

            <p
              className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              I pursued my studies in Computer Science (ICS) with a focus on
              Physics, and currently i am doing my Bachelors Degree in Computer
              Science and also I’m focusing on my Front-End Web Development
              techniques to polish my professional skills.. I'm constantly learning
              and staying up to date with modern web trends.
            </p>

            <p
              className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              When I'm not coding, you’ll find me exploring new ideas,
              experimenting with designs, or sharing my knowledge. I’m always
              eager to learn new technologies, collaborate on creative projects,
              and grow as a developer and build impactful web experiences.
            </p>
          </div>

          <div
            className={`w-full rounded-xl border border-pink-300 laptop:w-1/2 ${isDark ? 'text-[#f5f5f5]' : 'text-[#000]'} ${isDark ? 'bg-[#2d1b2e]' : 'bg-white/40'} p-5 shadow-sm backdrop-blur-sm`}
          >
            <div data-aos="fade-up" data-aos-delay="200">
              <h3
                className={`relative pb-3 text-2xl font-bold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[20%] after:bg-pink-700 after:transition-all after:duration-500 after:content-[''] xl:text-3xl`}
              >
                Front-end Development
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h4 className="-mb-5 text-base font-semibold">
                      {skill.name}
                    </h4>

                    <div className="flex flex-col items-end font-semibold">
                      <span>{skill.level}%</span>
                      <div className="h-[7px] w-full rounded-md bg-gray-300">
                        <div
                          className="h-[7px] rounded-md bg-pink-600 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>

                    <p
                      className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
                    >
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
