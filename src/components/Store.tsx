import React, { useEffect, useRef } from 'react';
import bottleImage from '../assets/STICKER.png';

<<<<<<< Updated upstream
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  checkoutUrl: string;
  servings: string;
}

const products: Product[] = [
  {
    id: "melanotanin-sunless-glow",
    name: "Melanotanin™ — Sunless Glow Carotenoid Blend",
    price: 39.99,
    description: "The clean alternative to melanotan peptides",
    features: [
      "Sunless natural-looking glow*",
      "25,000 IU beta-carotene per serving (833% DV)",
      "Supports skin radiance & even tone*",
      "Eye health support (lutein + zeaxanthin synergy)*",
      "Antioxidant & UV protection*",
      "No UV exposure needed",
      "Vegan, non-GMO, made in USA"
    ],
    image: stickerImage,
    checkoutUrl: "https://melanotanin.org/cart/51455229001959:1",
    servings: "60 Capsules | 30-Day Supply"
  }
=======
const ingredients = [
  { name: 'Beta-Carotene', dose: '25,000 IU', detail: 'The primary carotenoid responsible for warm skin tone' },
  { name: 'Lycopene', dose: '7.5 mg', detail: 'Red pigment. Powerful antioxidant. Deeper undertone.' },
  { name: 'Lutein', dose: '10 mg', detail: 'Supports eye health and skin radiance' },
  { name: 'Zeaxanthin', dose: '2 mg', detail: 'Enhances glow effect and antioxidant protection' },
  { name: 'Vitamin E', dose: '12.39 mg', detail: 'Protects carotenoids from oxidation' },
>>>>>>> Stashed changes
];

function useScrollFade(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

const Store: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollFade(sectionRef);

  return (
<<<<<<< Updated upstream
    <section id="store" className="py-20 min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="container-section">
        <div className="mb-12">
          <h2 className="section-title">THE SUNLESS GLOW SUPPLEMENT</h2>
          <p className="text-sm opacity-70 tracking-wider">CLINICAL-DOSE CAROTENOID BLEND</p>
=======
    <div ref={sectionRef}>
      {/* ── Story Section ── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-section max-w-3xl text-center">
          <p className="scroll-fade font-serif text-2xl md:text-3xl lg:text-4xl text-warm-black leading-relaxed">
            Flamingos aren't born pink.<br className="hidden md:block" />
            They become it. From what they eat.
          </p>
          <p className="scroll-fade mt-8 text-lg md:text-xl text-warm-grey leading-relaxed">
            That's carotenoids. And that's exactly what Melanotanin is.
            Five of them. Clinically dosed. Your skin gets warmer week by week.
            From the inside out.
          </p>
>>>>>>> Stashed changes
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container-section">
        <div className="border-t border-warm-light" />
      </div>

      {/* ── Formula Section ── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-section max-w-4xl">
          <p className="scroll-fade text-xs font-mono tracking-widest text-gold uppercase mb-4 text-center">
            The Formula
          </p>
          <h2 className="scroll-fade font-serif text-3xl md:text-4xl text-warm-black text-center mb-16">
            What's Inside
          </h2>

          <div className="space-y-0">
            {ingredients.map((ing, i) => (
              <div
                key={ing.name}
                className="scroll-fade border-t border-warm-light py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-4 md:gap-8 items-baseline"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <h3 className="font-serif text-xl md:text-2xl text-warm-black">
                  {ing.name}
                </h3>
                <span className="font-mono text-sm text-gold tracking-wide">
                  {ing.dose}
                </span>
                <p className="text-warm-grey text-sm md:text-base">
                  {ing.detail}
                </p>
              </div>
            ))}
            <div className="border-t border-warm-light" />
          </div>

<<<<<<< Updated upstream
                    <div className="mt-4 text-xs opacity-60 text-center">
                      🔥 FREE SHIPPING ON ORDERS OVER $75 | 60-DAY MONEY BACK GUARANTEE
                    </div>
                  </div>

                  <div className="text-xs opacity-50 pt-4 border-t border-white/10">
                    *These statements have not been evaluated by the Food and Drug Administration. 
                    This product is not intended to diagnose, treat, cure, or prevent any disease. 
                    Take 2 capsules daily with healthy fats for optimal absorption.
                  </div>
                </div>
=======
          <p className="scroll-fade mt-12 text-center font-serif text-xl md:text-2xl italic text-warm-black">
            Clinical doses. Not fairy dust.
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container-section">
        <div className="border-t border-warm-light" />
      </div>

      {/* ── Product Section ── */}
      <section id="store" className="py-24 md:py-32 bg-cream">
        <div className="container-section">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Bottle Image */}
            <div className="scroll-fade flex justify-center">
              <div className="w-64 md:w-80">
                <img
                  src={bottleImage}
                  alt="Melanotanin Sunless Glow Blend"
                  className="w-full h-auto object-contain"
                />
>>>>>>> Stashed changes
              </div>
            </div>

            {/* Product Info */}
            <div className="scroll-fade">
              <p className="text-xs font-mono tracking-widest text-gold uppercase mb-3">
                Sunless Glow Carotenoid Blend
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-warm-black mb-2">
                Melanotanin<span className="text-gold">™</span>
              </h2>
              <p className="text-warm-grey mb-6">
                The clean alternative to melanotan peptides.
              </p>

              <div className="text-4xl font-serif text-warm-black mb-8">
                $39.99
              </div>

              <a
                href="https://melanotanin.org/cart/51455229001959:1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full md:w-auto text-center mb-8 block md:inline-flex"
              >
                CHECKOUT
              </a>

              {/* Details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-warm-grey mb-8">
                <span>60 Capsules</span>
                <span>30-Day Supply</span>
                <span>Vegan</span>
                <span>Non-GMO</span>
                <span>Made in USA</span>
              </div>

              <div className="border-t border-warm-light pt-6 text-sm text-warm-grey space-y-1">
                <p>Free shipping on orders over $75</p>
                <p>60-day money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;