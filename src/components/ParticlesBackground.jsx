import { useEffect, useState } from 'react'
import { initParticlesEngine, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'


const OPTIONS = {
  fpsLimit: 60,
  detectRetina: false,
  interactivity: {
    events: { onHover: { enable: true, mode: 'repulse' } },
    modes: { repulse: { distance: 100, duration: 0.4 } },
  },
  particles: {
    color: { value: '#ec4899' },
    links: { color: '#ec4899', distance: 150, enable: true, opacity: 0.4, width: 1 },
    move: { enable: true, speed: 1.5, outModes: { default: 'bounce' } },
    number: { density: { enable: true, area: 800 }, value: 40 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 4 } },
  },
}

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null
  return <Particles id="tsparticles" options={OPTIONS} />
}