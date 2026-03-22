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
            </div>
          ))}
          <div className="border-t border-warm-light" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;