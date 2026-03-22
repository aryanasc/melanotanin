import React, { useEffect, useRef, useState } from 'react';
import bottleFront from '../assets/bottle-front.png';
import bottleBack from '../assets/bottle-back.png';
import labelImage from '../assets/STICKER.png';
import oneFlamingoImg from '../assets/oneflamingo.jpeg';

const ingredients = [
  { name: 'Beta-Carotene', dose: '25,000 IU', detail: 'The primary carotenoid responsible for warm skin tone' },
  { name: 'Lycopene', dose: '7.5 mg', detail: 'Red pigment. Powerful antioxidant. Deeper undertone.' },
  { name: 'Lutein', dose: '10 mg', detail: 'Supports eye health and skin radiance' },
  { name: 'Zeaxanthin', dose: '2 mg', detail: 'Enhances glow effect and antioxidant protection' },
  { name: 'Vitamin E', dose: '12.39 mg', detail: 'Protects carotenoids from oxidation' },
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

const productImages = [
  { src: bottleFront, alt: 'Melanotanin bottle front' },
  { src: bottleBack, alt: 'Melanotanin supplement facts' },
  { src: labelImage, alt: 'Melanotanin full label' },
];

const ProductSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="store" className="py-28 md:py-36 bg-cream">
      <div className="container-section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">

          {/* Left — Image gallery */}
          <div className="scroll-fade flex flex-row gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 border-2 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    activeImage === i
                      ? 'border-gold'
                      : 'border-warm-light/60 hover:border-warm-grey/30'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain p-1.5 bg-white"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 flex items-center justify-center bg-white rounded-sm min-h-[400px] md:min-h-[500px]">
              <img
                src={productImages[activeImage].src}
                alt={productImages[activeImage].alt}
                className="max-w-full max-h-[500px] object-contain p-8 md:p-12 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right — Product info */}
          <div className="scroll-fade flex flex-col justify-center">
            <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase mb-3">
              Sunless Glow Carotenoid Blend
            </p>

            <h2 className="font-serif text-3xl md:text-[2.5rem] text-warm-black mb-4 font-normal leading-tight">
              Melanotanin
            </h2>

            <p className="text-warm-grey text-[15px] leading-relaxed mb-8 max-w-sm">
              The clean alternative to melanotan peptides. Clinical-dose
              carotenoids that deposit in your skin and shift your undertone
              warmer — from the inside out.
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-serif text-3xl md:text-4xl text-warm-black">$39.99</span>
              <span className="text-[13px] text-warm-grey">/60 Capsules</span>
            </div>

            <a
              href="https://melanotanin.org/cart/51455229001959:1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center mb-8"
            >
              ADD TO CART
            </a>

            {/* Product details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[13px] text-warm-black">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>60 Capsules — 30-Day Supply</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-warm-black">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Vegan &amp; Non-GMO</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-warm-black">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Made in USA — GMP Certified</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-warm-black">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Take 2 capsules daily with healthy fats</span>
              </div>
            </div>

            <div className="border-t border-warm-light/80 pt-6 space-y-2">
              <p className="text-[12px] text-warm-grey">Free shipping on orders over $75</p>
              <p className="text-[12px] text-warm-grey">60-day money back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Store: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollFade(sectionRef);

  return (
    <div ref={sectionRef}>

      {/* ── Product Section ── */}
      <ProductSection />

      {/* ── Gold Divider ── */}
      <div className="section-divider" />

      {/* ── Story Section ── */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-section max-w-2xl text-center">
          <p className="scroll-fade font-serif text-2xl md:text-3xl lg:text-[2.5rem] text-warm-black leading-[1.5] md:leading-[1.6]">
            Flamingos aren't born pink.{' '}
            <br className="hidden md:block" />
            They become it. From what they eat.
          </p>
          <p className="scroll-fade mt-10 text-base md:text-lg text-warm-grey leading-[1.8]">
            That's carotenoids. And that's exactly what Melanotanin is.
            Five of them. Clinically dosed. Your skin gets warmer
            week by week. From the inside out.
          </p>
        </div>
      </section>

      {/* ── Quote Section ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F5F0EA' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px]">

          {/* Left — Image */}
          <div className="scroll-fade relative h-72 lg:h-auto overflow-hidden">
            <img
              src={oneFlamingoImg}
              alt="Flamingo in flight"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Soft edge fade into the quote side */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background: 'linear-gradient(to right, transparent 60%, #F5F0EA)',
              }}
            />
            {/* Bottom fade on mobile */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background: 'linear-gradient(to bottom, transparent 50%, #F5F0EA)',
              }}
            />
          </div>

          {/* Right — Quote */}
          <div className="scroll-fade flex items-center px-8 md:px-16 lg:px-20 py-20 md:py-28">
            <div className="max-w-lg">
              <p className="font-serif italic text-xl md:text-2xl lg:text-[1.65rem] text-warm-black/85 leading-[1.85]">
                "Deeper pink flamingos are generally healthier and more effective
                at metabolizing carotenoids than their paler counterparts. These
                carotenoid-rich pigments, derived from a diet of algae and
                crustaceans, are metabolized in the liver — meaning a brighter
                pink color directly reflects a healthier, better-fed, and more
                dominant bird."
              </p>
              <p className="mt-10 font-sans text-[11px] tracking-[0.25em] text-warm-grey/60 uppercase">
                Behavioral Ecology, Oxford Academic
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Gold Divider ── */}
      <div className="section-divider" />

      {/* ── Formula Section ── */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-section max-w-3xl">
          <p className="scroll-fade font-mono text-[11px] tracking-[0.2em] text-gold uppercase mb-5 text-center">
            The Formula
          </p>
          <h2 className="scroll-fade font-serif text-3xl md:text-4xl text-warm-black text-center mb-20 font-normal">
            What's Inside
          </h2>

          <div>
            {ingredients.map((ing, i) => (
              <div
                key={ing.name}
                className="scroll-fade border-t border-warm-light/80 py-7 md:py-9 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-0"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <h3 className="font-serif text-lg md:text-xl text-warm-black md:w-[200px] flex-shrink-0">
                  {ing.name}
                </h3>
                <span className="font-mono text-[13px] text-gold tracking-wide md:w-[120px] flex-shrink-0">
                  {ing.dose}
                </span>
                <p className="text-warm-grey text-sm leading-relaxed md:pl-4">
                  {ing.detail}
                </p>
              </div>
            ))}
            <div className="border-t border-warm-light/80" />
          </div>

          <p className="scroll-fade mt-16 text-center font-serif text-xl md:text-2xl italic text-warm-black/80">
            Clinical doses. Not fairy dust.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Store;