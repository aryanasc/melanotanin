import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy — Melanotanin';
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
          Privacy Policy
        </h1>
        <p className="text-[13px] text-warm-grey mb-16">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-10 text-[15px] text-warm-black/80 leading-[1.9]">
          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Overview</h2>
            <p>
              Melanotanin ("we," "us," or "our") respects your privacy. This
              Privacy Policy describes how we collect, use, and protect
              information when you visit melanotanin.com (the "Site"). By using
              the Site, you agree to the practices described below.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Information We Collect</h2>
            <p className="mb-4">
              We do not collect personal information directly through this Site.
              When you click "Shop Now," "Add to Cart," or any checkout link,
              you are redirected to our Shopify-hosted storefront, which is
              governed by Shopify's own privacy policy.
            </p>
            <p>
              We may collect anonymous, aggregated analytics data (such as page
              views, device type, and general geographic region) through
              third-party analytics tools to understand how visitors use the
              Site. This data does not identify you personally.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Cookies</h2>
            <p>
              The Site may use cookies or similar technologies for basic
              functionality and analytics. You can control cookie preferences
              through your browser settings. Disabling cookies will not affect
              your ability to browse the Site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Third-Party Services</h2>
            <p>
              Purchases are processed through Shopify. When you proceed to
              checkout, Shopify collects the information necessary to fulfill
              your order, including your name, email, shipping address, and
              payment details. Please review{' '}
              <a
                href="https://www.shopify.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2"
              >
                Shopify's Privacy Policy
              </a>{' '}
              for details on how they handle your data.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Data Security</h2>
            <p>
              We take reasonable measures to protect the information associated
              with the Site. However, no method of electronic transmission or
              storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Children's Privacy</h2>
            <p>
              The Site is not directed to individuals under the age of 18. We do
              not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-warm-black mb-3">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, contact us at{' '}
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

export default Privacy;