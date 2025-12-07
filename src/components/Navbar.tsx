import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/bottlemain.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToStore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#store';
      return;
    }
    const storeSection = document.getElementById('store');
    if (storeSection) {
      storeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-4 border-b border-accent/10"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container-section flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Melanotanin" className="h-8" />
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/how-it-works" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">How It Works</Link></li>
            <li><a href="#store" onClick={scrollToStore} className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Store</a></li>
            <li><a href="mailto:aryan@melanotanin.com" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <a 
          href="#store"
          onClick={scrollToStore}
          className="btn-primary hidden md:inline-flex text-xs py-2 px-5"
        >
          SHOP
        </a>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 absolute w-full border-b border-accent/10" style={{ backgroundColor: '#000000' }}>
          <nav className="container-section">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-wider hover:text-accent transition-colors">How It Works</Link></li>
              <li><a href="#store" onClick={scrollToStore} className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Store</a></li>
              <li><a href="mailto:aryan@melanotanin.com" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Contact</a></li>
              <li>
                <a 
                  href="#store"
                  onClick={scrollToStore}
                  className="btn-primary text-xs w-full text-center inline-block"
                >
                  SHOP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;