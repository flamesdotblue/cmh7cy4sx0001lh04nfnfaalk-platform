import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Chatbot from './components/Chatbot';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Theme management (light/dark)
  const prefersDark = useMemo(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const root = document.documentElement;
    const initialDark = saved ? saved === 'dark' : prefersDark;
    if (initialDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [prefersDark]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="fixed inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Chatbot />

      {showScrollTop && (
        <button
          aria-label="Scroll to top"
          onClick={handleScrollTop}
          className="fixed bottom-24 right-6 z-40 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black p-3 shadow-lg transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
