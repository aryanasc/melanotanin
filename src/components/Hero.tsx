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
<<<<<<< Updated upstream
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          backgroundImage: `
            linear-gradient(to right, rgba(218, 165, 32, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(218, 165, 32, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0))',
        }}
      />
      
      {/* Accent Lines */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(218, 165, 32, 0.1) 200px,
              rgba(218, 165, 32, 0.1) 400px
            )
          `
        }}
      />
      
      {/* Glow Effect */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          transform: `translate(${offset * -0.2}px, ${offset * 0.1}px)`,
          background: 'radial-gradient(circle, rgba(218, 165, 32, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      <div className="container-section relative z-10">
        <div className="max-w-3xl">
          <div className="technical-tag animate-element">CLINICAL-DOSE CAROTENOIDS</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight animate-element">
            GLOW FROM WITHIN<span className="text-xs align-top text-accent">™</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-accent font-bold tracking-wider mb-6 animate-element">
            NO SUN REQUIRED
          </h2>
          
          <div className="progress-bar mb-8 w-32 animate-element"></div>
          
          <p className="text-sm md:text-base tracking-wide leading-relaxed mb-8 opacity-90 max-w-xl animate-element">
            High-dose carotenoids that deposit in your skin and change your undertone from the inside. 
            The same mechanism that makes flamingos pink and carrots orange — formulated for humans. 
            Clinical doses that actually work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-element">
            <a href="#store" className="btn-primary">
              SHOP NOW <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="/how-it-works" className="btn-outline">
              HOW IT WORKS
            </a>
          </div>
          
          <div className="mt-12 border-l-2 border-accent pl-4 animate-element">
            <div className="technical-data">NO NEEDLES. NO PEPTIDES. JUST GLOW.</div>
            <div className="technical-data">CLEAN ALTERNATIVE TO MELANOTAN</div>
            <div className="technical-data">MADE IN USA</div>
=======
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
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;