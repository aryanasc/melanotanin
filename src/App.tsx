import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Store from './components/Store';
import FAQ from './components/FormulaBreakdown';
import Footer from './components/Footer';
import Privacy from './components/Protocol';
import Terms from './components/Acquire';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[60] max-w-sm bg-white border border-warm-light/80 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out"
      style={{
        animation: 'fadeIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      }}
    >
      <p className="text-[13px] text-warm-black/80 leading-relaxed mb-4">
        We use cookies to improve your experience. By continuing to use this site, you agree to our{' '}
        <a href="#privacy" className="text-gold hover:text-gold-dark underline underline-offset-2 transition-colors">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="#terms" className="text-gold hover:text-gold-dark underline underline-offset-2 transition-colors">
          Terms of Service
        </a>.
      </p>
      <button
        onClick={accept}
        className="btn-gold !text-[10px] !py-2 !px-6 w-full cursor-pointer"
      >
        ACCEPT
      </button>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy') setPage('privacy');
      else if (hash === 'terms') setPage('terms');
      else setPage('home');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (page === 'home') document.title = "Melanotanin — Glow From Within";
  }, [page]);

  return (
    <div className="bg-cream text-warm-black">
      <Navbar />
      {page === 'home' && (
        <>
          <Hero />
          <Store />
          <FAQ />
        </>
      )}
      {page === 'privacy' && <Privacy />}
      {page === 'terms' && <Terms />}
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;