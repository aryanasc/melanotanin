import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-cream border-t border-warm-light/60">
      <div className="container-section">
        <div className="flex flex-col items-center gap-8">
          <div className="font-serif text-lg tracking-[0.08em] text-warm-black">
            MELANOTANIN<span className="text-gold text-[9px] align-top ml-0.5">™</span>
          </div>

          <div className="flex gap-8 text-[13px] text-warm-grey">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms</a>
            <a href="mailto:aryan@melanotanin.com" className="hover:text-gold transition-colors duration-300">Contact</a>
          </div>

          <div className="text-[11px] text-warm-grey/50 tracking-wide">
            &copy; 2026 Melanotanin™. All rights reserved.
          </div>
        </div>

        <p className="mt-12 text-center text-[11px] text-warm-grey/40 max-w-md mx-auto leading-relaxed">
          *These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </footer>
  );
};

export default Footer;