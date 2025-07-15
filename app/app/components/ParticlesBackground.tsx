'use client';

import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { enable: true, speed: 1.5 },
          opacity: { value: 0.6 },
          links: { enable: true, color: '#1e00ffff', opacity: 0.6 },
        },
        background: { color: '#000000' },
      }}
    />
  );
}
