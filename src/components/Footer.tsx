import React from 'react';
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Instagram } from 'lucide-react';

// TikTok SVG Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);
=======
>>>>>>> Stashed changes

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-cream border-t border-warm-light">
      <div className="container-section">
<<<<<<< Updated upstream
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl mb-6">MELANOTANIN<span className="text-xs align-top text-accent">™</span></h3>
            <p className="text-sm opacity-80 max-w-xs">
              The sunless glow supplement. Clinical-dose carotenoids that create a natural-looking glow from within.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/melanotanin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@melanotanin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="TikTok">
                <TikTokIcon size={20} />
              </a>
              <a href="mailto:aryan@melanotanin.com" className="text-white hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg mb-6">NAVIGATION</h3>
            <ul className="space-y-3">
              <li>
                <a href="#product" className="text-sm inline-flex items-center hover:text-accent transition-colors">
                  <ChevronRight size={16} className="mr-1" /> PRODUCT
                </a>
              </li>
              <li>
                <a href="#formula" className="text-sm inline-flex items-center hover:text-accent transition-colors">
                  <ChevronRight size={16} className="mr-1" /> FORMULA
                </a>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm inline-flex items-center hover:text-accent transition-colors">
                  <ChevronRight size={16} className="mr-1" /> HOW IT WORKS
                </Link>
              </li>
              <li>
                <a href="#store" className="text-sm inline-flex items-center hover:text-accent transition-colors">
                  <ChevronRight size={16} className="mr-1" /> SHOP
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-6">UPDATES</h3>
            <p className="text-sm opacity-80 mb-4">
              Sign up to receive updates on formula enhancements and new products.
            </p>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="ENTER EMAIL FOR UPDATES" 
                className="bg-dark border-0 py-3 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-accent w-full"
              />
              <button className="bg-accent text-dark px-4">
                <ChevronRight size={20} />
              </button>
            </div>
=======
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-lg text-warm-black">
            MELANOTANIN<span className="text-gold text-xs align-top ml-0.5">™</span>
          </div>

          <div className="flex gap-6 text-sm text-warm-grey">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="mailto:aryan@melanotanin.com" className="hover:text-gold transition-colors">Contact</a>
          </div>

          <div className="text-xs text-warm-grey">
            &copy; 2026 Melanotanin™. All rights reserved.
>>>>>>> Stashed changes
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-warm-grey/60 max-w-xl mx-auto">
          *These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </div>
      </div>
    </footer>
  );
};

export default Footer;