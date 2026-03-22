import React, { useEffect, useRef } from 'react';
import bottleImage from '../assets/bottlemain.png';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const elements = heroRef.current.querySelectorAll('.animate-element');
    elements.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        el.style.animationDelay = `${index * 0.15}s`;
        el.classList.add('fade-in');
      }
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-16 bg-cream"
    >
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <p className="animate-element text-xs font-mono tracking-widest text-gold uppercase mb-4">
              Clinical-Dose Carotenoids
            </p>

            <h1 className="animate-element font-serif text-5xl md:text-6xl lg:text-7xl text-warm-black leading-[1.1] mb-6">
              Glow From<br />Within<span className="text-gold">™</span>
            </h1>

            <p className="animate-element text-lg md:text-xl text-warm-grey leading-relaxed mb-10 max-w-md">
              The same mechanism that makes flamingos pink — formulated for humans.
            </p>

            <a
              href="https://melanotanin.org/cart/51455229001959:1"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-element btn-gold"
            >
              SHOP NOW
            </a>
          </div>

          {/* Right — Bottle */}
          <div className="animate-element flex justify-center lg:justify-end">
            <div className="relative w-72 md:w-80 lg:w-96">
              <img
                src={bottleImage}
                alt="Melanotanin bottle"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;