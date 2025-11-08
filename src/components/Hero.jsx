import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[95vh] w-full overflow-hidden bg-[#070b1a] text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth - don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070b1a]/40 via-transparent to-[#070b1a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(99,102,241,0.18),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span className="text-xs tracking-widest text-cyan-300">INNOVATION • MOTION • UI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
        >
          Moh. Iqbal Fatoni
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          <span className="text-white">Frontend Developer</span> | Building modern web experiences
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:shadow-[0_0_50px_rgba(147,51,234,0.45)]"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-white"
          >
            Let’s Work Together
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="mt-14 inline-flex items-center gap-2 text-white/70 hover:text-white"
        >
          <ArrowDown className="h-4 w-4" />
          <span className="text-sm">Scroll to explore</span>
        </motion.a>
      </div>
    </section>
  );
}
