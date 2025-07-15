'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Particles = dynamic(() => import('./components/ParticlesBackground'), { ssr: false });

const links = [
  {
    title: '🌊 Live Flood Map',
    description: 'View real-time flood zones, road closures, and evacuation routes.',
    href: '/map',
    image: '/image.png',
  },
  {
    title: '🚨 SOS Alert System',
    description: 'Send or respond to emergency alerts during a crisis.',
    href: '/sos',
    image: '/image.png',
  },
  {
    title: '🤝 Flood Buddy Network',
    description: 'Connect with neighbors for shelter, supplies, or transport.',
    href: '/mutual-aid',
    image: '/image.png',
  },
  {
    title: '💧 Water Alerts & Distribution',
    description: 'Find clean water sources and boil notices near you.',
    href: '/water',
    image: '/image.png',
  },
  {
    title: '🏠 Insurance & Aid Fast Track',
    description: 'Apply for state and federal emergency financial aid.',
    href: '/aid',
    image: '/image.png',
  },
  {
    title: '🧑‍🎓 Youth Emergency Corps',
    description: 'Volunteer with our youth team to support your community.',
    href: '/youth',
    image: '/image.png',
  },
  {
    title: '📸 Recovery Stories',
    description: 'See and share recovery stories from affected communities.',
    href: '/stories',
    image: '/image.png',
  },
  {
    title: '🧭 “What If It Was Me?” Simulator',
    description: 'Experience a flood scenario to understand its impact.',
    href: '/simulator',
    image: '/image.png',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      <Head>
        <title>Texas Flood Resources Page</title>
        <meta name="description" content="One-stop flood emergency and recovery portal for Texas." />
      </Head>

      <main className="relative min-h-screen bg-black text-white px-4 pb-20">
        {isClient && <Particles className="absolute inset-0 -z-10 pointer-events-none" />}

        <section className="flex flex-col items-center text-center pt-32 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl pb-3 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white z-10"
          >
            Texas Flood Resources Page
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl z-10"
          >
            A lifeline platform for flood emergencies, recovery, and mutual aid in Texas.
          </motion.p>
        </section>

        <motion.section
          className="flex flex-col gap-16 z-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {links.map((link, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center gap-6 transition-transform hover:scale-[1.02] duration-300 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <img
                  src={link.image}
                  alt={link.title}
                  className="w-full md:w-1/2 z-10 rounded-2xl shadow-lg border border-white/20 object-cover max-h-[300px]"
                />

                <div className="md:w-1/2 z-10">
                  <h2 className="text-2xl md:text-3xl font-bold">{link.title}</h2>
                  <p className="mt-2 text-gray-300">{link.description}</p>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-10 py-4 rounded-2xl bg-blue-800 hover:bg-white/20 border border-white/20 hover:border-white/40 text-xl font-bold backdrop-blur-md transition-all"
                  >
                    Visit
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.section>
      </main>
    </>
  );
}
