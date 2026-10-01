import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import postagram from '../assets/postgram.png' 
import qoptix from '../assets/qoptix.png'
import digitalApp from '../assets/DigitalApp.png'
import quizApp from '../assets/QuizApp.png'
import countries from '../assets/Countries.png'
import shoe from '../assets/shoeImg.png'

import darkQoptix from '../assets/qoptix-remove-img.png'
import darkDigitalApp from '../assets/DigitalApp-removebg-preview.png'
import darkQuizApp from '../assets/QuizApp-removebg-preview.png'
import darkCountry from '../assets/Countries-removebg-preview.png'
import darkShoeApp from '../assets/shoeImg-removebg-preview.png'

const PROJECTS = [
  {
    title: 'Postagram',
    featured: true,
    tagline:
      'A full-stack social media app: Laravel REST API with a React frontend. Users can post photos, videos and text slides, follow people, like, comment, and share 24-hour stories.',
    highlights: [
      'Token authentication with Laravel Sanctum, policies, and rate limiting',
      'N+1-safe API Resources and cursor pagination for infinite scroll',
      'Queued email and real-time notifications (Redis, Reverb)',
      'Pest test suite and deployment on Railway',
    ],
    image: postagram,
    DarkImage: postagram,
    liveUrl: 'https://postgram-frontend.vercel.app', 
    codeUrl: 'https://github.com/Lveeza/postgram-backend',
    extraLinks: [{ label: 'Frontend code', url: 'https://github.com/Lveeza/postgram-frontend' }],
    tech: ['Laravel', 'PHP', 'MySQL', 'React', 'Tailwind', 'Redis', 'Pest'],
  },
  {
    title: 'Qoptix',
    tagline:
      'A live Shopify store for a real client, with a custom Liquid theme, product filtering by category, a cart, and a virtual try-on feature.',
    image: qoptix,
    DarkImage: darkQoptix,
    liveUrl: 'https://qoptix.pk/',
    tech: ['Shopify Liquid', 'JavaScript', 'CSS'],
  },
  {
    title: 'Digital Marketing App',
    tagline:
      'A responsive landing page for a digital marketing service, with interactive sections and a fully mobile-friendly layout.',
    image: digitalApp,
    DarkImage: darkDigitalApp,
    liveUrl: 'https://digital-marketing-apps.netlify.app/',
    tech: ['React', 'Tailwind', 'HTML'],
  },
  {
    title: 'Quiz App',
    tagline:
      'A multiple-choice quiz that tracks your score, shows the correct answers, and works well on every screen size.',
    image: quizApp,
    DarkImage: darkQuizApp,
    liveUrl: 'https://quizappo.netlify.app/',
    tech: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Countries',
    tagline:
      'Explore countries with the REST Countries API: search by name, filter by region, and open a detail view for each country.',
    image: countries,
    DarkImage: darkCountry,
    liveUrl: 'https://resttcountriesapi-project.netlify.app/',
    tech: ['React', 'Tailwind', 'REST API'],
  },
  {
    title: 'The Shoe Company',
    tagline:
      'A responsive shoe store website with smooth animations and a clean product showcase layout.',
    image: shoe,
    DarkImage: darkShoeApp,
    liveUrl: 'https://shoe-company-website.netlify.app/',
    tech: ['JavaScript', 'Tailwind', 'HTML'],
  },
]

function LinkButton({ href, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-md px-3 py-1.5 text-sm font-semibold transition hover:scale-105 ${
        primary
          ? 'bg-pink-600 text-white hover:bg-pink-700'
          : 'border border-pink-500 text-pink-500 hover:bg-pink-500/10'
      }`}
    >
      {children}
    </a>
  )
}

export default function Projects() {
  const [isDark] = useContext(ThemeContext)
  const heading = isDark ? 'text-[#f5f5f5]' : 'text-black'
  const body = isDark ? 'text-gray-400' : 'text-gray-600'

  return (
    <section className="relative mx-auto w-full px-4 py-24 laptop:py-12 pc:w-[80%]">
      <h1 className={`text-center text-3xl font-medium laptop:text-5xl ${heading}`}>
        My Projects
      </h1>

      <div className="mt-20 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:gap-10">
        {PROJECTS.map((p, index) => (
          <article
            key={p.title}
            className={`group w-full max-w-[650px] overflow-hidden rounded-2xl border bg-white/5 transition-shadow duration-300 ${
              p.featured ? 'md:col-span-2' : ''
            } ${
              isDark
                ? 'border-black shadow-[0_0_30px_#3b3b63] hover:shadow-[0_0_40px_#3b3b63]'
                : 'border-gray-200 shadow-[0_0_30px_#f5b3d3] hover:shadow-[0_0_40px_#d192b1]'
            }`}
          >
            <img
              src={isDark ? p.DarkImage : p.image}
              alt={`${p.title} screenshot`}
              width="650"
              height="320"
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 md:h-80"
            />

            <div className="p-5">
              <div className="flex items-center gap-2">
                <h2 className={`text-xl font-semibold ${heading}`}>{p.title}</h2>
                {p.featured && (
                  <span className="rounded-full bg-pink-600 px-2 py-0.5 text-xs font-semibold text-white">
                    Featured
                  </span>
                )}
              </div>

              <p className={`mt-2 text-sm ${body}`}>{p.tagline}</p>

              {p.highlights && (
                <ul className={`mt-3 list-disc space-y-1 pl-5 text-sm ${body}`}>
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      isDark ? 'bg-pink-900/40 text-pink-300' : 'bg-pink-100 text-pink-700'
                    }`}
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap justify-end gap-2">
                {p.codeUrl && <LinkButton href={p.codeUrl}>Code</LinkButton>}
                {p.extraLinks?.map((l) => (
                  <LinkButton key={l.url} href={l.url}>{l.label}</LinkButton>
                ))}
                {p.liveUrl && <LinkButton href={p.liveUrl} primary>Live Demo</LinkButton>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}