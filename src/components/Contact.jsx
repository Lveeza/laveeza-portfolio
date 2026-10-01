import { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../contexts/ThemeContext'

const EMAIL = 'lveezajamshed@gmail.com'
const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const validate = ({ name, email, message }) => {
  const errors = {}
  if (!name.trim()) errors.name = 'Name is required'
  if (!email.trim()) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(email)) errors.email = 'Invalid email format'
  if (!message.trim()) errors.message = 'Message is required'
  return errors
}

function Field({ id, label, error, isDark, children }) {
  return (
    <div>
      <label htmlFor={id} className={`mb-1 block text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [isDark] = useContext(ThemeContext)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') 

  const heading = isDark ? 'text-[#f5f5f5]' : 'text-black'
  const card = `w-full rounded-2xl border border-pink-400/50 px-5 py-5 shadow-lg transition-colors hover:border-pink-400 laptop:w-1/2 ${
    isDark ? 'bg-black/5 text-white' : 'bg-white/70 text-black'
  }`
  const inputBase = 'w-full rounded-lg border bg-transparent px-4 py-2 outline-none'
  const inputClass = (hasError) =>
    `${inputBase} ${hasError ? 'border-red-500' : 'border-gray-500 focus:border-pink-400'}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status !== 'sending') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    if (formRef.current.elements.company.value) return

    const newErrors = validate(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center px-5 py-28">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
        <h1 className={`text-center text-4xl font-bold laptop:text-5xl ${heading}`}>Contact</h1>

        <div className="mt-16 flex w-full flex-col gap-5 laptop:flex-row">
          {/* Left: info */}
          <div className={`${card} backdrop-blur-sm`}>
            <h2 className="mb-6 text-2xl font-semibold text-pink-400">Contact Information</h2>
            <div className="space-y-5">
              <div>
                <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Email</p>
                <a href={`mailto:${EMAIL}`} className="text-lg underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Location</p>
                <p className="text-lg">Lahore, Pakistan</p>
              </div>
              <div>
                <p className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Find me online</p>
                <p className="flex gap-4 text-lg">
                  <a href="https://github.com/Lveeza" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                  </a>
                 
                  <a href="https://linkedin.com/in/laveeza-jamshaid-153637439" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`${card} backdrop-blur-sm`}>
            <h2 className="mb-6 text-2xl font-semibold text-pink-400">Send Me a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
             
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <Field id="name" label="Name" error={errors.name} isDark={isDark}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass(errors.name)}
                />
              </Field>

              <Field id="email" label="Email" error={errors.email} isDark={isDark}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass(errors.email)}
                />
              </Field>

              <Field id="message" label="Message" error={errors.message} isDark={isDark}>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={inputClass(errors.message)}
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex w-full items-center justify-center rounded-lg bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 text-center text-sm ${
                status === 'success' ? 'text-green-500' : status === 'error' ? 'text-red-500' : ''
              }`}
            >
              {status === 'success' && 'Message sent! I will reply soon.'}
              {status === 'error' && `Could not send your message. Please email me at ${EMAIL}.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}