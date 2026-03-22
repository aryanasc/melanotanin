import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Store from './components/Store';
import FAQ from './components/FormulaBreakdown';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Melanotanin™ — Glow From Within";
  }, []);

  return (
    <div className="bg-cream text-warm-black">
      <Navbar />
      <Hero />
      <Store />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;