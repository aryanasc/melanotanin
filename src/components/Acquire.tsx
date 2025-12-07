import React, { useState } from 'react';
import { ArrowRight, Package } from 'lucide-react';
import CartModal from './CartModal';

const Acquire: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-medium to-dark relative">
      <div className="container-section">
        <div className="technical-tag">SHOP</div>
        
        <h2 className="section-title text-left">
          GET YOUR GLOW
        </h2>
        
        <div className="technical-card p-8 md:p-12 max-w-4xl transform transition-all duration-500 hover:translate-y-[-4px]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Package className="text-accent mb-6" size={40} />
              <h3 className="text-2xl mb-2">SINGLE BOTTLE</h3>
              <div className="text-4xl font-bold mb-6 text-accent">$39.99</div>
              
              <ul className="space-y-3 text-sm opacity-80 mb-8">
                <li className="flex items-center">
                  <ArrowRight size={16} className="text-accent mr-2" />
                  60 Capsules | 30-Day Supply
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="text-accent mr-2" />
                  Free Shipping Over $75
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="text-accent mr-2" />
                  60-Day Money Back Guarantee
                </li>
              </ul>
              
              <a 
                href="#store"
                className="btn-primary w-full md:w-auto inline-flex"
              >
                SHOP NOW <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="w-px h-48 bg-accent/20 hidden md:block"></div>
            
            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <div className="text-xs tracking-wider mb-2 text-accent">SHIPPING</div>
                  <div className="text-2xl">$4-6 USPS</div>
                  <div className="text-sm opacity-70 mt-1">Free over $75</div>
                </div>
                
                <div>
                  <div className="text-xs tracking-wider mb-2 text-accent">GUARANTEE</div>
                  <div className="text-2xl">60 DAYS</div>
                  <div className="text-sm opacity-70 mt-1">Money back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-sm opacity-80">
            Secure checkout. Arrives in 3-5 business days. Made in USA.
          </p>
        </div>
      </div>
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </section>
  );
};

export default Acquire;