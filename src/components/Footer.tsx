import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-cream border-t border-warm-light">
      <div className="container-section">
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