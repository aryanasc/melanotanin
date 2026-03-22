import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service — Melanotanin';
  }, []);

  return (
    <section className="pt-32 pb-28 bg-cream">
      <div className="container-section max-w-2xl">
        <a href="#" className="inline-flex items-center gap-2 text-[13px] text-warm-grey hover:text-warm-black transition-colors duration-300 mb-10 group">
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" /></svg>
          Back
        </a>
        <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase mb-4">
          Legal
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-warm-black mb-12 font-normal">
          Terms of Service
        </h1>
        <p className="text-[13px] text-warm-grey mb-16">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-10 text-[15px] text-warm-black/80 leading-[1.9]">
          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Agreement to Terms</h2>
            <p>
              By accessing melanotanin.com (the "Site"), you agree to be bound
              by these Terms of Service. If you do not agree with any part of
              these terms, please do not use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Products &amp; Purchases</h2>
            <p className="mb-4">
              Melanotanin is a dietary supplement. All purchases are processed
              through our Shopify storefront. When you click any checkout or
              purchase link on this Site, you will be redirected to Shopify,
              where Shopify's terms of service and purchase policies apply.
            </p>
            <p>
              Product prices are listed in USD and are subject to change without
              notice. We reserve the right to limit quantities or refuse any
              order at our discretion.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Disclaimer</h2>
            <p className="mb-4">
              Melanotanin is a dietary supplement. These statements have not been
              evaluated by the Food and Drug Administration. This product is not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p>
              The information provided on this Site is for general informational
              purposes only and should not be considered medical advice. Always
              consult with a qualified healthcare provider before starting any
              new supplement regimen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Shipping &amp; Returns</h2>
            <p className="mb-4">
              Orders over $75 qualify for free standard shipping within the
              United States. Standard shipping typically takes 3–7 business days.
            </p>
            <p>
              We offer a 60-day money back guarantee. If you are not satisfied
              with your purchase, contact us within 60 days of receiving your
              order for a full refund. Return shipping is the responsibility of
              the customer.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Intellectual Property</h2>
            <p>
              All content on this Site — including text, images, graphics, logos,
              and branding — is the property of Melanotanin and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or use any content from this Site without our prior
              written consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Melanotanin shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the Site or any products
              purchased through associated storefronts.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of New Jersey,
              United States, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Contact</h2>
            <p>
              Questions about these Terms? Reach us at{' '}
              <a
                href="mailto:aryan@melanotanin.com"
                className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2"
              >
                aryan@melanotanin.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;