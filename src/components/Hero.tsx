import React, { useEffect, useRef } from 'react';
import bottleImage from '../assets/bottlemain.png';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const elements = heroRef.current.querySelectorAll('.animate-element');
    elements.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        el.style.animationDelay = `${0.2 + index * 0.15}s`;
        el.classList.add('fade-in');
      }
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-[100svh] flex items-center pt-28 pb-20 bg-cream relative"
    >
      <div className="container-section w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left — Copy */}
          <div className="max-w-lg">
            <p className="animate-element font-mono text-[11px] tracking-[0.2em] text-gold uppercase mb-6">
              Clinical-Dose Carotenoids
            </p>

            <h1 className="animate-element font-serif text-[clamp(2.8rem,6vw,4.5rem)] text-warm-black leading-[1.05] mb-8 font-normal">
              Glow From<br />Within<span className="text-gold align-top text-[0.4em] ml-1">™</span>
            </h1>

            <p className="animate-element text-warm-grey text-lg md:text-xl leading-[1.7] mb-12 max-w-sm">
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
            <div className="relative w-60 md:w-72 lg:w-[22rem]">
              <img
                src={bottleImage}
                alt="Melanotanin bottle"
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-element">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold/40" />
      </div>
    </section>
  );
};

export default Hero;