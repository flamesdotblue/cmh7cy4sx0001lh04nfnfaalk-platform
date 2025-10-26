import React, { useEffect, useState } from 'react';
import { Github, Linkedin, FileDown, Moon, Sun } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="font-semibold tracking-tight text-cyan-300 hover:text-cyan-200 transition-colors">
          Atharva Shinde
        </button>

        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-2 rounded-full text-sm transition-colors ${
                active === l.id
                  ? 'bg_WHITE/10 text-cyan-200'.replace('WHITE','white')
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/atharva-shinde"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva-shinde-7369b628a"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Download Resume"
          >
            <FileDown className="h-5 w-5" />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            <span className="sr-only">Toggle theme</span>
            {mounted ? (
              document.documentElement.classList.contains('dark') ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div className="md:hidden border-t border-white/10">
        <div className="mx-auto max-w-6xl px-2 py-2 flex flex-wrap gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                active === l.id
                  ? 'bg_WHITE/10 text-cyan-200'.replace('WHITE','white')
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
