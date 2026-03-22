<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
=======
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
>>>>>>> Stashed changes
  );
}

export default App;