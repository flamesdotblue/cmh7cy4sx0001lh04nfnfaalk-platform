import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-6xl px-4 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400"
        >
          Atharva Shinde
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-base md:text-lg text-slate-300"
        >
          AI Innovator | Web Developer | Data Science Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-5 py-2.5 rounded-full border border-white/20 text-slate-100 hover:bg-white/10 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
