import React, { useEffect, useRef, useState } from 'react';
import flamingoBg from '../assets/flamingos.jpeg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!heroRef.current) return;
    const elements = heroRef.current.querySelectorAll('.animate-element');
    elements.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        el.style.animationDelay = `${0.3 + index * 0.18}s`;
        el.classList.add('fade-in');
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
        }}
      >
        <img
          src={flamingoBg}
          alt=""
          className="w-full h-[120%] object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlay — cream fade from left for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(to right, rgba(250,247,242,0.97) 0%, rgba(250,247,242,0.92) 35%, rgba(250,247,242,0.6) 55%, rgba(250,247,242,0.15) 75%, transparent 100%),
            linear-gradient(to bottom, rgba(250,247,242,0.3) 0%, transparent 30%, transparent 70%, rgba(250,247,242,0.8) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="container-section w-full relative z-10 pt-28 pb-20">
        <div className="max-w-lg">
          <p className="animate-element font-mono text-[11px] tracking-[0.2em] text-gold uppercase mb-6">
            Clinical-Dose Carotenoids
          </p>

          <h1 className="animate-element font-serif text-[clamp(2.8rem,6vw,4.5rem)] text-warm-black leading-[1.05] mb-8 font-normal">
            Glow From<br />Within
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
      </div>

      {/* Bottom fade to cream */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[2]"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FAF7F2)',
        }}
      />
    </section>
  );
};

export default Hero;