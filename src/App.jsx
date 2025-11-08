import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#070b1a] antialiased">
      <HelmetMeta />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:shadow-[0_0_50px_rgba(147,51,234,0.45)]"
      >
        Let’s Work Together
      </a>
    </div>
  );
}

function HelmetMeta() {
  useEffect(() => {
    document.title = 'Moh. Iqbal Fatoni — Frontend Developer';

    const setMeta = (attr, content) => {
      let el = document.querySelector(`meta[${attr}]`);
      if (!el) {
        el = document.createElement('meta');
        const [key, value] = attr.split('=');
        el.setAttribute(key, value.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name="description"', 'Frontend Developer specializing in React, Next.js, Tailwind CSS, GSAP, and Framer Motion. Building modern web experiences with motion and precision.');
    setMeta('property="og:title"', 'Moh. Iqbal Fatoni — Frontend Developer');
    setMeta('property="og:description"', 'Futuristic portfolio showcasing motion-first interfaces, 3D, and performance.');
    setMeta('property="og:type"', 'website');
  }, []);

  return null;
}

export default App;
