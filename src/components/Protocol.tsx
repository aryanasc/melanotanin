import React from 'react';
import { Clock, Target, Beaker, ArrowRight } from 'lucide-react';

const Protocol: React.FC = () => {
  return (
    <section id="protocol" className="py-20 bg-darker">
      <div className="container-section">
        <div className="technical-tag">OPTIMIZATION PROTOCOL</div>
        
        <h2 className="section-title">
          PROTOCOL SPECIFICATIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="technical-card">
            <Clock className="text-accent mb-4" size={32} />
            <div className="text-xs tracking-wider mb-2 text-accent">PHASE 1</div>
            <h3 className="text-xl mb-3">LOADING PHASE</h3>
            <p className="text-sm opacity-80 mb-4">
              Initial 14-day compound saturation period. Two units daily with meals.
            </p>
            <div className="progress-bar"></div>
          </div>
          
          <div className="technical-card">
            <Target className="text-accent mb-4" size={32} />
            <div className="text-xs tracking-wider mb-2 text-accent">PHASE 2</div>
            <h3 className="text-xl mb-3">OPTIMIZATION</h3>
            <p className="text-sm opacity-80 mb-4">
              Days 15-30. One unit daily to maintain optimal compound levels.
            </p>
            <div className="progress-bar"></div>
          </div>
          
          <div className="technical-card">
            <Beaker className="text-accent mb-4" size={32} />
            <div className="text-xs tracking-wider mb-2 text-accent">PHASE 3</div>
            <h3 className="text-xl mb-3">MAINTENANCE</h3>
            <p className="text-sm opacity-80 mb-4">
              Ongoing. One unit every other day for sustained results.
            </p>
            <div className="progress-bar"></div>
          </div>
        </div>
        
        <div className="bg-medium p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">PROTOCOL GUIDELINES</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">Take with meals containing healthy fats for optimal absorption</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">Maintain consistent hydration throughout the protocol</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">Store in a cool, dry place away from direct light</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-accent mt-1 mr-2" size={16} />
                  <span className="text-sm opacity-80">Results typically visible within 14-21 days of consistent use</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">OPTIMIZATION METRICS</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Compound Saturation</span>
                    <span className="text-accent">87%</span>
                  </div>
                  <div className="h-1 bg-darker">
                    <div className="h-full bg-accent" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Bioavailability</span>
                    <span className="text-accent">92%</span>
                  </div>
                  <div className="h-1 bg-darker">
                    <div className="h-full bg-accent" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Integration Rate</span>
                    <span className="text-accent">95%</span>
                  </div>
                  <div className="h-1 bg-darker">
                    <div className="h-full bg-accent" style={{ width: '95%' }}></div>
                  </div>
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