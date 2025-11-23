import React, { useEffect, useState } from 'react';
import stickerImage from '../assets/STICKER.png';

const StickerSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
          backgroundImage: `
            linear-gradient(to right, rgba(218, 165, 32, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(218, 165, 32, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
        }}
      />
      
      {/* Accent Lines */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          transform: `translateY(${offset * 0.2}px)`,
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

      <div className="container-section relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="technical-tag mb-8">PREMIUM BRANDING</div>
          
          <div className="max-w-2xl">
            <img
              src={stickerImage}
              alt="Melanotanin Premium Sticker"
              className="w-full h-auto max-w-md mx-auto transform transition-transform hover:scale-105 duration-500"
            />
          </div>
          
          <div className="mt-12 max-w-xl">
            <h3 className="text-2xl mb-6">PREMIUM IDENTITY</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Each bottle comes with our premium identity marker. 
              A symbol of commitment to the protocol and aesthetic optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickerSection;