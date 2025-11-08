import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sent! I will get back to you shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative w-full bg-[#0a0f24] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_20%_80%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Let’s Work Together</h2>
          <p className="mt-2 text-white/70">Have a project in mind or want to collaborate? Drop a message.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input required type="text" className="w-full rounded-lg border border-white/10 bg-[#0f142e] px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-white/40 focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input required type="email" className="w-full rounded-lg border border-white/10 bg-[#0f142e] px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-white/40 focus:border-cyan-400" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <textarea required rows={5} className="w-full rounded-lg border border-white/10 bg-[#0f142e] px-3 py-2 text-sm outline-none ring-0 transition placeholder:text-white/40 focus:border-cyan-400" placeholder="Tell me about your project" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:shadow-[0_0_50px_rgba(147,51,234,0.45)]">
                  Send Message
                </button>
              </div>
            </div>
            {status && <p className="mt-4 text-sm text-cyan-300">{status}</p>}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="mt-2 text-sm text-white/70">I’m open to freelance, full-time, and collaboration opportunities.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="https://github.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400/40">
                  <Github className="h-4 w-4 text-white/70" /> Github
                </a>
                <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400/40">
                  <Linkedin className="h-4 w-4 text-white/70" /> LinkedIn
                </a>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:border-cyan-400/40">
                  <Mail className="h-4 w-4 text-white/70" /> Email
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Tech Stack</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70 sm:grid-cols-3">
                {['React', 'Next.js', 'Tailwind', 'JavaScript', 'Framer Motion', 'GSAP'].map((t) => (
                  <li key={t} className="rounded-md bg-white/5 px-3 py-2">{t}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
