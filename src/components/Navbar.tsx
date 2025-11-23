import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CartModal from './CartModal';
import logo from '../assets/bottlemain.png';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-darker py-4"
    >
      <div className="container-section flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Melanotanin" className="h-8" />
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Home</a></li>
            <li><a href="#store" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Store</a></li>
            <li><a href="#about" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">About</a></li>
            <li><a href="#contact" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <button 
          onClick={() => setIsCartOpen(true)} 
          className="btn-outline hidden md:inline-block text-sm"
        >
          CART
        </button>
        
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
        <div className="md:hidden bg-darker py-4 absolute w-full">
          <nav className="container-section">
            <ul className="flex flex-col space-y-4">
              <li><a href="#product" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Product</a></li>
              <li><a href="#formula" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Formula</a></li>
              <li><a href="#protocol" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Protocol</a></li>
              <li><a href="#acquire" className="text-sm uppercase tracking-wider hover:text-accent transition-colors">Acquire</a></li>
              <li>
                <button 
                  onClick={() => setIsCartOpen(true)} 
                  className="btn-outline text-sm w-full"
                >
                  INITIALIZE PROTOCOL
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
};

export default Navbar;