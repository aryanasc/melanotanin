import React from 'react';
import { ChevronRight, Mail, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-16">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl mb-6">MELANOTANIN<span className="text-xs align-top text-accent">™</span></h3>
            <p className="text-sm opacity-80 max-w-xs">
              The carotenoid glow protocol. Internal skin tone optimization system for the modern man.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Email">
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
                <a href="#protocol" className="text-sm inline-flex items-center hover:text-accent transition-colors">
                  <ChevronRight size={16} className="mr-1" /> PROTOCOL
                </a>
              </li>
              <li>
                <a href="#acquire" className="text-sm inline-flex items-center hover:text-accent transition-colors">
                  <ChevronRight size={16} className="mr-1" /> ACQUIRE
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-6">PROTOCOL UPDATES</h3>
            <p className="text-sm opacity-80 mb-4">
              Sign up to receive updates on formula enhancements and protocol optimization.
            </p>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="ENTER EMAIL FOR PROTOCOL UPDATES" 
                className="bg-dark border-0 py-3 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-accent w-full"
              />
              <button className="bg-accent text-dark px-4">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-xs tracking-wider flex flex-col md:flex-row justify-between items-center">
          <div>
            &copy; {new Date().getFullYear()} MELANOTANIN™. ALL RIGHTS RESERVED.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-accent mr-6 transition-colors">PRIVACY</a>
            <a href="#" className="text-white/70 hover:text-accent mr-6 transition-colors">TERMS</a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;