import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Store from './components/Store';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Melanotanin™ | The Carotenoid Glow Protocol";
  }, []);

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Store />
      <Footer />
    </div>
  );
}

export default App;