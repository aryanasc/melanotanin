import React from 'react';
import { Clock, Target, Beaker, ArrowRight } from 'lucide-react';

const Protocol: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-darker">
      <div className="container-section">
        <div className="technical-tag">HOW IT WORKS</div>
        
        <h2 className="section-title">
          THE PROCESS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="technical-card">
            <Clock className="text-accent mb-4" size={32} />
            <div className="text-xs tracking-wider mb-2 text-accent">STEP 1</div>
            <h3 className="text-xl mb-3">TAKE WITH FATS</h3>
            <p className="text-sm opacity-80 mb-4">
              Take 2 capsules daily with meals containing healthy fats for optimal absorption.
            </p>
            <div className="progress-bar"></div>
          </div>
          
          <div className="technical-card">
            <Target className="text-accent mb-4" size={32} />
            <div className="text-xs tracking-wider mb-2 text-accent">STEP 2</div>
            <h3 className="text-xl mb-3">ACCUMULATION</h3>
            <p className="text-sm opacity-80 mb-4">
              Carotenoids deposit in subcutaneous fat and accumulate in skin tissue over time.
            </p>
            <div className="progress-bar"></div>
          </div>
          
          <div className="technical-card">
            <Beaker className="text-accent mb-4" size={32} />
            <div className="text-xs tracking-wider mb-2 text-accent">STEP 3</div>
            <h3 className="text-xl mb-3">VISIBLE RESULTS</h3>
            <p className="text-sm opacity-80 mb-4">
              Results typically visible within 14-21 days of consistent use. No UV exposure needed.
            </p>
            <div className="progress-bar"></div>
          </div>
        </div>
        
        <div className="bg-medium p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">USAGE GUIDELINES</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">Take 2 capsules daily with healthy fats for optimal absorption</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">Store in a cool, dry place away from direct light</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">60 capsules | 30-day supply</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">GMP certified, FDA-registered facility</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">WHAT YOU GET</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Beta-Carotene</span>
                    <span className="text-accent">25,000 IU</span>
                  </div>
                  <div className="h-1 bg-darker">
                    <div className="h-full bg-accent" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-xs opacity-60 mt-1">833% Daily Value</div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Lutein + Zeaxanthin</span>
                    <span className="text-accent">12 mg</span>
                  </div>
                  <div className="h-1 bg-darker">
                    <div className="h-full bg-accent" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-xs opacity-60 mt-1">Eye health support</div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Lycopene</span>
                    <span className="text-accent">7.5 mg</span>
                  </div>
                  <div className="h-1 bg-darker">
                    <div className="h-full bg-accent" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-xs opacity-60 mt-1">Antioxidant support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;