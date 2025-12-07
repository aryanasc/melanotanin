import React, { useRef, useEffect, useState } from 'react';
import stickerImage from '../assets/STICKER.png';

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
];

const Store: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    
    // Limit dragging bounds (increased for more zoom)
    const maxX = 200;
    const maxY = 200;
    
    setPosition({
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp as any);
      return () => document.removeEventListener('mouseup', handleMouseUp as any);
    }
  }, [isDragging]);

  return (
    <section id="store" className="py-20 min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="container-section">
        <div className="mb-12">
          <h2 className="section-title">THE SUNLESS GLOW SUPPLEMENT</h2>
          <p className="text-sm opacity-70 tracking-wider">CLINICAL-DOSE CAROTENOID BLEND</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {products.map(product => (
            <div key={product.id} className="p-6 relative" style={{ backgroundColor: '#000000' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left - Interactive Image Viewer */}
                <div 
                  ref={containerRef}
                  className="relative overflow-hidden flex items-center justify-center aspect-square"
                  style={{
                    backgroundColor: '#000000',
                    cursor: isDragging ? 'grabbing' : 'grab',
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseUp}
                >
                  <div 
                    ref={imageRef}
                    className="w-full h-full relative flex items-center justify-center"
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(2)`,
                      transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  
                  {/* Hint overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs opacity-50 pointer-events-none">
                    <span className="bg-black/50 px-3 py-1 rounded">DRAG TO EXPLORE</span>
                  </div>
                </div>
                
                {/* Right - Product Info */}
                <div className="space-y-4 flex flex-col justify-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl mb-2">{product.name}</h3>
                    <p className="text-accent text-lg tracking-wider">{product.description}</p>
                    <p className="text-sm opacity-70 mt-2">{product.servings}</p>
                  </div>

                  <div className="border-l-2 border-accent pl-4 space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="text-sm opacity-90">
                        • {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-accent">${product.price}</div>
                      <div className="text-xs opacity-70">DIETARY SUPPLEMENT</div>
                    </div>
                    
                    <a 
                      href={product.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center"
                    >
                      CHECKOUT
                    </a>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;