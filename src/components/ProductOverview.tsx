import React from 'react';
import { Layers, Droplets, Zap } from 'lucide-react';
import moleculeImage from '../assets/molecule.png';

const ProductOverview: React.FC = () => {
  return (
    <section 
      id="product" 
      className="py-20 bg-darker"
    >
      <div className="container-section">
        <div className="technical-tag">WHAT IT IS</div>
        
        <h2 className="section-title">
          THE SCIENCE BEHIND THE GLOW
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="mb-6 leading-relaxed">
              Carotenoids are fat-soluble pigments that accumulate in skin tissue. 
              At clinical doses, they create a visible warm undertone without UV exposure. 
              The same mechanism that makes flamingos pink and carrots orange — formulated for humans.
            </p>
            
            <p className="text-accent font-bold mb-8">
              NO SUN. NO SHOTS. JUST GLOW.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="technical-card bg-medium">
                <Layers className="text-accent mb-4" size={32} />
                <h3 className="text-lg mb-2">INTERNAL PIGMENTATION</h3>
                <p className="text-sm opacity-80">
                  Carotenoids deposit in subcutaneous fat and accumulate in skin tissue from the inside out.
                </p>
              </div>
              
              <div className="technical-card bg-medium">
                <Droplets className="text-accent mb-4" size={32} />
                <h3 className="text-lg mb-2">CLINICAL DOSES</h3>
                <p className="text-sm opacity-80">
                  25,000 IU beta-carotene per serving. Not the 2mg garbage in your multivitamin — these are clinical doses.
                </p>
              </div>
              
              <div className="technical-card bg-medium sm:col-span-2">
                <Zap className="text-accent mb-4" size={32} />
                <h3 className="text-lg mb-2">ZERO UV REQUIRED</h3>
                <p className="text-sm opacity-80">
                  Your skin color changes based on what you eat. No tanning beds. No sun damage. Just glow.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square bg-medium p-12">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark"></div>
            
            <img 
              src={moleculeImage}
              alt="Melanotanin molecular structure" 
              className="w-full h-full object-contain"
            />
            
            <div className="absolute top-4 left-4 border-l-2 border-t-2 border-accent h-12 w-12 opacity-60"></div>
            <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-accent h-12 w-12 opacity-60"></div>
            
            <div className="absolute -right-6 top-1/4 bg-medium p-4">
              <div className="text-xs tracking-wider mb-2 text-accent">BOTTLE VOLUME</div>
              <div className="text-2xl font-bold">60 UNITS</div>
              <div className="progress-bar mt-2 w-full"></div>
            </div>

            <div className="absolute -left-6 bottom-1/4 bg-medium p-4">
              <div className="text-xs tracking-wider mb-2 text-accent">COMPOUND</div>
              <div className="text-xl font-bold">BETA-CAROTENE</div>
              <div className="text-sm opacity-70 mt-1">PRIMARY ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;