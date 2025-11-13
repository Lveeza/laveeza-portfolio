import { useEffect } from 'react'
import { initParticlesEngine, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
  }, [])

  const [isDark] = useContext(ThemeContext)

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: `${isDark ? 'bg-black' : 'bg-white'}` },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ec4899' },
          links: {
            color: '#ec4899',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: 'bounce' },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  )
}
