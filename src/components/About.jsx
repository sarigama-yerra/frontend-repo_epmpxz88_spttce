import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  const tech = [
    { name: 'React', color: 'text-cyan-300' },
    { name: 'Next.js', color: 'text-white' },
    { name: 'Tailwind', color: 'text-cyan-300' },
    { name: 'JavaScript', color: 'text-yellow-300' },
    { name: 'Framer Motion', color: 'text-fuchsia-300' },
    { name: 'GSAP', color: 'text-green-300' },
  ];

  return (
    <section id="about" className="relative w-full bg-[#0a0f24] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_10%,rgba(34,211,238,0.07),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-fuchsia-400" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <p className="text-white/80">
              I’m Moh. Iqbal Fatoni — a frontend developer focused on crafting
              performant, animated interfaces with a futuristic aesthetic. I
              specialize in modern stacks like React, Next.js and Tailwind,
              using Framer Motion and GSAP to bring experiences to life.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t.name}
                  className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs ${t.color}`}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              { title: 'UI Engineering', icon: Code2, desc: 'Design systems, accessibility, and pixel-perfect builds.' },
              { title: 'Motion Design', icon: Sparkles, desc: 'Microinteractions, parallax, and immersive storytelling.' },
              { title: 'Performance', icon: Cpu, desc: 'Optimized bundles, smooth 60fps animations, and best practices.' },
              { title: 'Collaboration', icon: Code2, desc: 'Agile-friendly, detail-oriented, and communicative.' },
            ].map((card, i) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5"
              >
                <card.icon className="mb-3 h-5 w-5 text-cyan-300" />
                <h3 className="text-sm font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
