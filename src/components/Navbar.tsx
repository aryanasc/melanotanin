import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-sm' : 'py-5'
      }`}
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container-section flex justify-between items-center">
        <a href="#" className="font-serif text-xl tracking-wide text-warm-black">
          MELANOTANIN<span className="text-gold text-xs align-top ml-0.5">™</span>
        </a>

        <a
          href="https://melanotanin.org/cart/51455229001959:1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-xs py-2 px-6"
        >
          SHOP
        </a>
      </div>
    </header>
  );
};

export default Navbar;