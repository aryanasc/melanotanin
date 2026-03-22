import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'py-3 backdrop-blur-md bg-cream/90 shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'py-6 bg-cream'
      }`}
    >
      <div className="container-section flex justify-between items-center">
        <a href="#" className="font-serif text-lg tracking-[0.08em] text-warm-black transition-opacity hover:opacity-70">
          MELANOTANIN<span className="text-gold text-[9px] align-top ml-0.5">™</span>
        </a>

        <a
          href="https://melanotanin.org/cart/51455229001959:1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-[10px] py-2.5 px-7"
        >
          SHOP
        </a>
      </div>
    </header>
  );
};

export default Navbar;