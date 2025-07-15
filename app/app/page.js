'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('./components/ParticlesBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Texas Link Tree</title>
        <meta name="description" content="One-stop flood emergency and recovery portal for Texas." />
      </Head>

      <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <Particles />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-center z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          Texas Flood Hub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-400 text-center z-10 max-w-xl"
        >
          A lifeline platform for flood emergencies, recovery, and mutual aid in Texas.
        </motion.p>

        <div className="mt-10 w-full max-w-md flex flex-col items-center gap-4 z-10">
          {links.map(({ title, href }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-full"
            >
              <Link
                href={href}
                className="block w-full text-center text-lg md:text-xl font-semibold px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300"
              >
                {title}
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}

const links = [
  { title: '🌊 Live Flood Map', href: '/map' },
  { title: '🚨 SOS Alert System', href: '/sos' },
  { title: '🤝 Flood Buddy Network', href: '/mutual-aid' },
  { title: '💧 Water Alerts & Distribution', href: '/water' },
  { title: '🏠 Insurance & Aid Fast Track', href: '/aid' },
  { title: '🧑‍🎓 Youth Emergency Corps', href: '/youth' },
  { title: '📸 Recovery Stories', href: '/stories' },
  { title: '🧭 “What If It Was Me?” Simulator', href: '/simulator' },
];
