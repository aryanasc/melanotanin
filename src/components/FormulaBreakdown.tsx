import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is this safe?',
    answer:
      'Yes. Melanotanin contains only naturally occurring carotenoids and vitamin E at doses well within established safety guidelines. Carotenoids are found in everyday foods like carrots, tomatoes, and leafy greens. Our formula simply delivers them in clinical concentrations.',
  },
  {
    question: 'Will I turn orange?',
    answer:
      'No. At our recommended dose, the result is a warm, golden undertone — not an orange tint. The key is clinical dosing: enough to shift your skin tone noticeably, calibrated to look natural. Think healthy glow, not spray tan.',
  },
  {
    question: 'How long until I see results?',
    answer:
      'Most users notice subtle warmth within 2–3 weeks of consistent daily use. A visible golden undertone typically develops by week 4–6. Carotenoids build gradually in the skin — this is a slow, natural process, not an overnight change.',
  },
  {
    question: 'Does it work on all skin tones?',
    answer:
      'Carotenoid deposition occurs regardless of baseline skin tone. On lighter skin the effect is most visually obvious. On medium and deeper skin tones, the result is a warmer, more radiant undertone rather than a dramatic color shift.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-section max-w-2xl">
        <h2 className="font-serif text-3xl md:text-4xl text-warm-black text-center mb-16">
          Questions
        </h2>

<<<<<<< Updated upstream
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
=======
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-warm-light">
              <button
                onClick={() => toggle(i)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className="font-serif text-lg md:text-xl text-warm-black group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`text-gold text-2xl transition-transform duration-300 ml-4 flex-shrink-0 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-warm-grey text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
>>>>>>> Stashed changes
            </div>
          ))}
          <div className="border-t border-warm-light" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;