import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-element');
      
      elements.forEach((el, index) => {
        if (el instanceof HTMLElement) {
          el.style.animationDelay = `${index * 0.15}s`;
          el.classList.add('fade-in');
        }
      });
    }

    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-16 bg-dark relative overflow-hidden"
    >
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
          <div className="technical-tag animate-element">INTERNAL FORMULATION</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight animate-element">
            MELANOTANIN<span className="text-xs align-top text-accent">™</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-accent font-bold tracking-wider mb-6 animate-element">
            THE CAROTENOID GLOW PROTOCOL
          </h2>
          
          <div className="progress-bar mb-8 w-32 animate-element"></div>
          
          <p className="text-sm md:text-base tracking-wide leading-relaxed mb-8 opacity-90 max-w-xl animate-element">
            INTERNAL SKIN TONE OPTIMIZATION SYSTEM.
            A TECHNICAL APPROACH TO AESTHETICS WITHOUT UV EXPOSURE.
            PREMIUM CAROTENOID COMPLEX ENGINEERED FOR MALE ENHANCEMENT.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-element">
            <a href="#store" className="btn-primary">
              BROWSE PROTOCOLS <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#store" className="btn-outline">
              VIEW STORE
            </a>
          </div>
          
          <div className="mt-12 border-l-2 border-accent pl-4 animate-element">
            <div className="technical-data">CAROTENOID-BASED</div>
            <div className="technical-data">UV-FREE TECHNOLOGY</div>
            <div className="technical-data">MULTIPLE FORMULATIONS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;