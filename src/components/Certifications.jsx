import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const CERTIFICATES = [
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    description:
      'Core JavaScript fundamentals: variables, data types, control flow, functions, and working with objects and arrays.',
    tags: ['JavaScript', 'Fundamentals'],
    credentialUrl: 'https://drive.google.com/file/d/1IQ6gifSkk6n3FCk6Ho3zdAyOqb1XbTrN/view?usp=drive_link',
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    description:
      'An overview of how modern AI works, where it is used, and how to use AI tools responsibly.',
    tags: ['AI', 'Fundamentals'],
    credentialUrl: 'https://drive.google.com/file/d/1B7F7vuDhVpLskeHPjgtpZOSZfgLiaUtD/view?usp=drive_link',
  },
]

function BadgeIcon({ className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
      <path d="m9.5 9 1.8 1.8L14.5 7.5" />
    </svg>
  )
}

export default function Certifications() {
  const [isDark] = useContext(ThemeContext)
  const heading = isDark ? 'text-[#f5f5f5]' : 'text-black'
  const body = isDark ? 'text-gray-400' : 'text-gray-600'

  return (
    <section className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center px-5 py-28">
      <h1 className={`text-center text-4xl font-bold laptop:text-5xl ${heading}`}>
        Certifications
      </h1>
      <p className={`mt-4 max-w-xl text-center text-sm sm:text-base ${body}`}>
        Courses I have completed to strengthen my programming and AI fundamentals.
      </p>

      <ul className="mt-16 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:gap-10">
        {CERTIFICATES.map((c) => (
          <li
            key={c.title}
            className={`flex flex-col backdrop-blur-sm rounded-2xl border p-6 transition-shadow duration-300 ${
              isDark
                ? 'border-black bg-white/5 shadow-[0_0_30px_#3b3b63] hover:shadow-[0_0_40px_#3b3b63]'
                : 'border-gray-200 bg-white/70 shadow-[0_0_30px_#f5b3d3] hover:shadow-[0_0_40px_#d192b1]'
            }`}
          >
            <div className="flex items-start gap-4">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                  isDark ? 'bg-pink-900/40 text-pink-300' : 'bg-pink-100 text-pink-600'
                }`}
              >
                <BadgeIcon />
              </span>

              <div>
                <h2 className={`text-xl font-semibold ${heading}`}>{c.title}</h2>
                <p className="mt-1 text-sm font-medium text-pink-500">
                  {c.issuer} · {c.year}
                </p>
              </div>
            </div>

            <p className={`mt-4 text-sm ${body}`}>{c.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
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

            {c.credentialUrl && (
              <div className="mt-5 flex justify-end">
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-pink-500 px-3 py-1.5 text-sm font-semibold text-pink-500 transition hover:scale-105 hover:bg-pink-500/10"
                >
                  View credential
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}