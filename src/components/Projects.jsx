import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Portfolio',
    desc: 'Futuristic portfolio with 3D interactions and smooth motion.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'GSAP Micro UX',
    desc: 'Microinteractions library with GSAP timelines.',
    tags: ['GSAP', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Next.js Dashboard',
    desc: 'Responsive analytics dashboard with charts and dark neon theme.',
    tags: ['Next.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1534628271096-153d3d6f7419?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZXh0LmpzJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI2MTE4MjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#070b1a] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_10%,rgba(147,51,234,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-white/70">A selection of work exploring motion, performance, and delightful UI.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/60 transition group-hover:text-cyan-300" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-cyan-200/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background: 'radial-gradient(600px 200px at 20% 0%, rgba(56,189,248,0.15), transparent)'}} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
