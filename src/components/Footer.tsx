import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-cream">
      <div className="container-section max-w-4xl">

        {/* Top divider */}
        <div className="section-divider mb-16" />

        {/* Brand + links */}
        <div className="flex flex-col items-center gap-10">
          <a href="#" className="font-serif text-lg tracking-[0.08em] text-warm-black transition-opacity hover:opacity-70">
            MELANOTANIN
          </a>

          <div className="flex gap-8 text-[13px] text-warm-grey">
            <a href="#privacy" className="hover:text-warm-black transition-colors duration-300">
              Privacy
            </a>
            <a href="#terms" className="hover:text-warm-black transition-colors duration-300">
              Terms
            </a>
            <a href="mailto:aryan@melanotanin.com" className="hover:text-warm-black transition-colors duration-300">
              Contact
            </a>
          </div>

          <p className="text-[12px] text-warm-grey/40">
            &copy; 2026 Melanotanin
          </p>
        </div>

        {/* FDA disclaimer */}
        <p className="mt-16 text-center text-[11px] text-warm-grey/35 max-w-md mx-auto leading-relaxed">
          *These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease.
        </p>
      </div>
    </footer>
  );
};

export default Footer;