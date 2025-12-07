import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Store from '../components/Store';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    document.title = "Melanotanin™ | Glow From Within — No Sun Required";
  }, []);

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Store />
      <Footer />
    </div>
  );
};

export default Home;

