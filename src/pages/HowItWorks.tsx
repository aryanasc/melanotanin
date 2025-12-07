import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowItWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "How It Works | Melanotanin™";
  }, []);

  const handleShopClick = () => {
    navigate('/');
    setTimeout(() => {
      const storeSection = document.getElementById('store');
      if (storeSection) {
        storeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-section max-w-4xl">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="technical-tag mb-4">HOW IT WORKS</div>
            <h1 className="section-title mb-6">THE SCIENCE OF SUNLESS GLOW</h1>
          </div>

          {/* Intro */}
          <div className="mb-16 space-y-4 text-base leading-relaxed">
            <p>
              Your skin color isn't fixed. It changes based on what you put in your body.
            </p>
            <p>
              Carotenoids are natural pigments found in plants — the compounds that make carrots orange, tomatoes red, and flamingos pink. When you consume them at clinical doses, they absorb into your bloodstream, bind to fat tissue, and deposit in your skin.
            </p>
            <p className="text-accent font-bold">
              The result? A visible warm undertone. No UV exposure. No tanning beds. Just internal pigmentation.
            </p>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* The Mechanism */}
          <div className="mb-16">
            <h2 className="section-title mb-8">THE MECHANISM: 3 STEPS</h2>
            
            <div className="space-y-12">
              <div>
                <div className="text-xs tracking-wider mb-2 text-accent">STEP 1</div>
                <h3 className="text-2xl mb-4">ABSORPTION</h3>
                <p className="text-base leading-relaxed opacity-90">
                  You take 2 capsules of Melanotanin daily with a meal containing healthy fats (olive oil, avocado, nuts, etc.). The carotenoids are fat-soluble, meaning they need dietary fat to absorb properly.
                </p>
              </div>

              <div>
                <div className="text-xs tracking-wider mb-2 text-accent">STEP 2</div>
                <h3 className="text-2xl mb-4">CIRCULATION & DEPOSITION</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Once absorbed, carotenoids circulate in your bloodstream and deposit in subcutaneous fat layers and skin tissue. This process happens naturally — it's the same biological mechanism that changes flamingo feathers from gray to pink when they eat carotenoid-rich shrimp.
                </p>
              </div>

              <div>
                <div className="text-xs tracking-wider mb-2 text-accent">STEP 3</div>
                <h3 className="text-2xl mb-4">VISIBLE GLOW</h3>
                <p className="text-base leading-relaxed opacity-90">
                  After 2-4 weeks of consistent use, carotenoid levels in your skin reach a concentration that creates a noticeable warm, golden undertone. Your skin appears more radiant and healthy-looking without any sun exposure.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* The Formula */}
          <div className="mb-16">
            <h2 className="section-title mb-8">THE FORMULA</h2>
            <p className="mb-8 text-base leading-relaxed opacity-90">
              Melanotanin uses clinical doses — not the trace amounts found in typical multivitamins.
            </p>

            <div className="bg-medium p-8 mb-8">
              <div className="text-xs tracking-wider mb-4 text-accent">PER 2 CAPSULES (DAILY SERVING)</div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-2">Beta-Carotene (25,000 IU)</h3>
                  <p className="text-sm opacity-80">
                    Converts to Vitamin A in the body. The primary carotenoid responsible for warm skin tone. At 833% DV, this is a clinical dose designed for visible results.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-2">Lycopene (7.5 mg)</h3>
                  <p className="text-sm opacity-80">
                    The red pigment in tomatoes. Powerful antioxidant that supports skin health and contributes to a deeper undertone.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-2">Lutein (10 mg)</h3>
                  <p className="text-sm opacity-80">
                    Yellow-orange carotenoid found in leafy greens. Supports both eye health and skin radiance. Works synergistically with zeaxanthin.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-2">Zeaxanthin (2 mg)</h3>
                  <p className="text-sm opacity-80">
                    Concentrated in the macula of the eye and skin tissue. Enhances the glow effect and provides antioxidant protection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-2">Vitamin E (12.39 mg | 83% DV)</h3>
                  <p className="text-sm opacity-80">
                    Fat-soluble antioxidant that protects carotenoids from oxidation and supports skin health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* Why Clinical Doses Matter */}
          <div className="mb-16">
            <h2 className="section-title mb-8">WHY CLINICAL DOSES MATTER</h2>
            <div className="space-y-4 text-base leading-relaxed opacity-90">
              <p>
                Most supplements contain 2-5 mg of beta-carotene. That's not enough to create visible skin tone changes.
              </p>
              <p>
                Melanotanin contains <span className="text-accent font-bold">25,000 IU (15 mg) of beta-carotene per serving</span> — the threshold where studies show noticeable pigmentation effects.
              </p>
              <p className="text-accent font-bold">
                We didn't make a multivitamin with a glow marketing angle. We formulated a supplement specifically designed for internal skin tone optimization.
              </p>
              <p className="font-bold">
                Clinical doses. Not fairy dust.
              </p>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="section-title mb-8">TIMELINE: WHAT TO EXPECT</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Week 1</h3>
                <p className="text-base leading-relaxed opacity-90">
                  No visible changes. Carotenoids are building up in your system. Continue taking 2 capsules daily with fats.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-2">Week 2-3</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Some users begin noticing subtle warmth in skin tone, especially in photos with good lighting. Keep going.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-2">Week 4+</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Most users report a visible golden undertone. Skin looks warmer, more radiant, and healthier. Effects become more pronounced with continued use.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm opacity-70 italic">
              Note: Results vary based on starting skin tone, diet, body fat percentage, and consistency. Lighter skin tones typically see results faster.
            </p>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* How to Use */}
          <div className="mb-16">
            <h2 className="section-title mb-8">HOW TO USE</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-4">Dosage</h3>
                <p className="text-base leading-relaxed opacity-90 mb-4">
                  Take 2 capsules daily with a meal containing healthy fats.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4">Best taken with:</h3>
                <ul className="space-y-2 text-base opacity-90">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Eggs with olive oil</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Avocado toast</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Nuts and nut butter</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Fatty fish (salmon, mackerel)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Full-fat dairy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>Any meal with 10-15g+ fat</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-4">Timing</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Consistency matters more than timing. Take at the same time daily (breakfast or lunch recommended).
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-4 text-accent">Do NOT:</h3>
                <ul className="space-y-2 text-base opacity-90">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✗</span>
                    <span>Take on an empty stomach (absorption will be poor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✗</span>
                    <span>Take with fat-free meals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✗</span>
                    <span>Skip days frequently (disrupts accumulation)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* The Difference */}
          <div className="mb-16">
            <h2 className="section-title mb-8">THE DIFFERENCE: MELANOTANIN VS. ALTERNATIVES</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-4">VS. MELANOTAN PEPTIDES</h3>
                <div className="bg-medium p-6 space-y-2">
                  <p className="font-bold">Melanotan:</p>
                  <p className="text-sm opacity-80">Injectable peptide. Works in 3-7 days. Side effects: nausea, moles, spontaneous erections, sketchy sources.</p>
                  <p className="font-bold mt-4">Melanotanin:</p>
                  <p className="text-sm opacity-80">Oral supplement. Works in 2-4 weeks. No needles. No side effects. Legal and made in USA.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4">VS. TANNING BEDS</h3>
                <div className="bg-medium p-6 space-y-2">
                  <p className="font-bold">Tanning beds:</p>
                  <p className="text-sm opacity-80">UV radiation damages DNA, causes premature aging and skin cancer. Instant results but long-term harm.</p>
                  <p className="font-bold mt-4">Melanotanin:</p>
                  <p className="text-sm opacity-80">Internal pigmentation. No UV damage. No aging. No cancer risk. Takes longer but sustainable.</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4">VS. REGULAR MULTIVITAMINS</h3>
                <div className="bg-medium p-6 space-y-2">
                  <p className="font-bold">Multivitamins:</p>
                  <p className="text-sm opacity-80">2-5mg beta-carotene (trace amounts). No visible effect.</p>
                  <p className="font-bold mt-4">Melanotanin:</p>
                  <p className="text-sm opacity-80">25,000 IU beta-carotene + full carotenoid stack. Clinical doses designed for results.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* Who Is This For */}
          <div className="mb-16">
            <h2 className="section-title mb-8">WHO IS THIS FOR?</h2>
            <ul className="space-y-3 text-base opacity-90">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Biohackers optimizing appearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Looksmaxxers focused on skin tone (colormaxxing)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Anyone avoiding UV damage but wanting healthy glow</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Former melanotan users seeking safer alternative</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>People with pale skin seeking warmth</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Supplement enthusiasts who want formulas that work</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* Safety & Quality */}
          <div className="mb-16">
            <h2 className="section-title mb-8">SAFETY & QUALITY</h2>
            <ul className="space-y-3 text-base opacity-90">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Made in USA</strong> (Hauppauge, NY)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>GMP Certified Facility</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>FDA Registered</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Third-party tested</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Vegan capsules</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Non-GMO</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>No artificial colors or preservatives</strong></span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="section-title mb-8">FAQ</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl mb-3">Is this safe?</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Yes. Carotenoids are naturally occurring compounds found in vegetables and fruits. Beta-carotene supplements have been studied extensively. The doses in Melanotanin are within established safety ranges.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Will I turn orange?</h3>
                <p className="text-base leading-relaxed opacity-90">
                  At proper doses with varied carotenoids (not just beta-carotene), you get a warm golden undertone, not orange. The formula is balanced to avoid the "carrot baby" effect.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3">How long does it last?</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Carotenoids gradually leave your system when you stop taking them. Skin tone returns to baseline over 4-8 weeks. For maintained glow, continue taking Melanotanin.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Can I take this with other supplements?</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Yes. Melanotanin is compatible with most supplements. Avoid taking with fat-blocking medications or olestra (reduces absorption).
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Does it work on all skin tones?</h3>
                <p className="text-base leading-relaxed opacity-90">
                  Yes, but results are most visible on lighter skin tones. Darker skin tones may see subtle warmth and radiance but less dramatic undertone shift.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Is this a tan?</h3>
                <p className="text-base leading-relaxed opacity-90">
                  No. A tan is melanin production triggered by UV damage. This is carotenoid deposition — a different biological mechanism with no UV exposure.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10 my-16"></div>

          {/* CTA */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-8">READY TO GLOW?</h2>
            <button 
              onClick={handleShopClick}
              className="btn-primary inline-flex mb-6"
            >
              SHOP NOW <ArrowRight size={18} className="ml-2" />
            </button>
            <p className="text-sm opacity-70">
              60-Day Money-Back Guarantee | Free Shipping Over $75
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-xs opacity-50 text-center pt-8 border-t border-white/10">
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;

