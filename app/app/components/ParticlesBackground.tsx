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
          number: { value: 100 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          links: { enable: true, color: '#ffffff', opacity: 0.1 },
        },
        background: { color: '#000000' },
      }}
    />
  );
}
