import React, { useState } from 'react';
import { ArrowRight, Package } from 'lucide-react';
import CartModal from './CartModal';

const Acquire: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <section id="acquire" className="py-20 bg-gradient-to-b from-medium to-dark relative">
      <div className="container-section">
        <div className="technical-tag">PROTOCOL ACQUISITION</div>
        
        <h2 className="section-title text-left">
          INITIALIZE PROTOCOL
        </h2>
        
        <div className="technical-card p-8 md:p-12 max-w-4xl transform transition-all duration-500 hover:translate-y-[-4px]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Package className="text-accent mb-6" size={40} />
              <h3 className="text-2xl mb-2">SINGLE BOTTLE</h3>
              <div className="text-4xl font-bold mb-6 text-accent">$35</div>
              
              <ul className="space-y-3 text-sm opacity-80 mb-8">
                <li className="flex items-center">
                  <ArrowRight size={16} className="text-accent mr-2" />
                  30 Units
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="text-accent mr-2" />
                  Usage Guide
                </li>
                <li className="flex items-center">
                  <ArrowRight size={16} className="text-accent mr-2" />
                  Quality Guarantee
                </li>
              </ul>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="btn-primary w-full md:w-auto"
              >
                SECURE PROTOCOL <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="w-px h-48 bg-accent/20 hidden md:block"></div>
            
            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <div className="text-xs tracking-wider mb-2 text-accent">BOTTLE SIZE</div>
                  <div className="text-2xl">30 UNITS</div>
                </div>
                
                <div>
                  <div className="text-xs tracking-wider mb-2 text-accent">SERVING SIZE</div>
                  <div className="text-2xl">1 UNIT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-sm opacity-80">
            Includes secure processing. Arrives in 3-5 business days.
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