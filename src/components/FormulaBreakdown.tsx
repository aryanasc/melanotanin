import React from 'react';
import { FlaskConical, Leaf, BarChart3 } from 'lucide-react';

interface IngredientProps {
  name: string;
  dosage: string;
  index: number;
}

const Ingredient: React.FC<IngredientProps> = ({ name, dosage }) => {
  return (
    <div className="technical-card">
      <div className="text-xs tracking-wider mb-2 text-accent">ACTIVE COMPOUND</div>
      <h3 className="text-xl mb-1">{name}</h3>
      <div className="text-2xl font-bold mb-3">{dosage}</div>
      <div className="progress-bar w-full"></div>
    </div>
  );
};

const FormulaBreakdown: React.FC = () => {
  return (
    <section 
      id="formula" 
      className="py-20 bg-medium"
    >
      <div className="container-section">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <div className="technical-tag">FORMULA BREAKDOWN</div>
            <h2 className="section-title">PER 2 CAPSULES (1 SERVING)</h2>
          </div>
          
          <div className="flex space-x-6 mt-6 md:mt-0">
            <FlaskConical size={36} className="text-accent" />
            <BarChart3 size={36} className="text-accent opacity-60" />
            <Leaf size={36} className="text-accent opacity-30" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="technical-card">
            <div className="text-xs tracking-wider mb-2 text-accent">ACTIVE COMPOUND</div>
            <h3 className="text-xl mb-1">VITAMIN A (BETA-CAROTENE)</h3>
            <div className="text-2xl font-bold mb-1">25,000 IU</div>
            <div className="text-sm opacity-70 mb-3">7,500 mcg RAE | 833% DV</div>
            <div className="progress-bar w-full"></div>
          </div>
          <Ingredient name="LUTEIN" dosage="10 MG" index={1} />
          <Ingredient name="LYCOPENE" dosage="7.5 MG" index={2} />
          <Ingredient name="ZEAXANTHIN" dosage="2 MG" index={3} />
          <Ingredient name="VITAMIN E" dosage="12.39 MG" index={4} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="technical-card">
            <div className="text-accent text-xl font-bold mb-2">VEGAN.</div>
            <p className="text-sm opacity-80">100% plant-based carotenoid compounds. Non-GMO.</p>
          </div>
          
          <div className="technical-card">
            <div className="text-accent text-xl font-bold mb-2">MADE IN USA.</div>
            <p className="text-sm opacity-80">Manufactured by Makers Nutrition (Hauppauge, NY). GMP certified, FDA-registered facility.</p>
          </div>
          
          <div className="technical-card">
            <div className="text-accent text-xl font-bold mb-2">CLEAN FORMULA.</div>
            <p className="text-sm opacity-80">No harsh chemicals. No artificial ingredients. Just clinical doses that work.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <span className="technical-tag">CONTAINS NO</span>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="px-4 py-2 bg-darker text-sm">ZINC</div>
              <div className="px-4 py-2 bg-darker text-sm">SYNTHETIC DYES</div>
              <div className="px-4 py-2 bg-darker text-sm">SOY</div>
              <div className="px-4 py-2 bg-darker text-sm">FILLERS</div>
              <div className="px-4 py-2 bg-darker text-sm">ARTIFICIAL PRESERVATIVES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormulaBreakdown;