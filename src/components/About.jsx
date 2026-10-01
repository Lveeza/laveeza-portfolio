import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    summary: 'Responsive UIs with React hooks, reusable components, and Tailwind CSS.',
    items: ['JavaScript (ES6+)', 'React', 'Tailwind CSS', 'React Router'],
  },
  {
    title: 'Backend',
    summary: 'REST APIs with authentication, validation, caching, and automated tests.',
    items: ['PHP 8', 'Laravel', 'MySQL', 'Sanctum', 'Redis', 'Pest'],
  },
  {
    title: 'E-commerce & CMS',
    summary: 'Custom themes and client-ready stores.',
    items: ['Shopify Liquid', 'WordPress'],
  },
  {
    title: 'Tools & Deployment',
    summary: 'Version control, API testing, and production deployment.',
    items: ['Git & GitHub', 'Docker', 'Postman', 'Railway'],
  },
]

export default function About() {
  const [isDark] = useContext(ThemeContext)
  const heading = isDark ? 'text-[#f5f5f5]' : 'text-black'
  const body = isDark ? 'text-gray-300' : 'text-gray-700'

  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center px-5 py-28">
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className={`text-center text-4xl font-bold laptop:text-5xl ${heading}`}>
          About Me
        </h1>

        <div className="mt-16 flex flex-col items-start gap-8 laptop:flex-row laptop:gap-6">
          {/* Story */}
          <div className="relative w-full pl-4 laptop:w-1/2 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-pink-700 before:content-['']">
            <h2 className={`mb-6 text-2xl font-semibold ${heading}`}>It's me!</h2>
            <p className={`mb-4 leading-relaxed ${body}`}>
              Hi, I'm Laveeza, a self-taught full-stack developer. I build React
              frontends and Laravel REST APIs, and I care about clean code, security,
              and tested features.
            </p>
            <p className={`mb-4 leading-relaxed ${body}`}>
              My main project is <strong>Postagram</strong>, a deployed social media
              app with authentication, stories, real-time notifications, and a
              Pest test suite. I also completed an internship at Roots and built
              QOptix, a live Shopify store with a virtual try-on feature.
            </p>
            <p className={`mb-4 leading-relaxed ${body}`}>
              I'm currently pursuing a Bachelor's degree in Computer Science, and I'm
              looking for a full-stack role where I can keep growing.
            </p>
          </div>

          {/* Skills */}
          <div
            className={`w-full rounded-xl border border-pink-300 p-5 shadow-sm laptop:w-1/2 ${
              isDark ? 'bg-[#2d1b2e]/90 text-[#f5f5f5]' : 'bg-white/70 text-black'
            }`}
          >
            <h2 className="relative pb-3 text-2xl font-bold xl:text-3xl after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-1/5 after:bg-pink-700 after:content-['']">
              Full-Stack Development
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                    {group.summary}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border border-pink-600 px-3 py-1 text-sm ${isDark ? 'text-pink-400' : 'text-pink-700'}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}