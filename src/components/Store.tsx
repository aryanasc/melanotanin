import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: "melanotanin-original",
    name: "Melanotanin™ Original",
    price: 35,
    description: "The original carotenoid glow protocol. Internal skin tone optimization system.",
    category: "Glow Enhancement",
    image: "/src/assets/bottlemain.png"
  }
];

const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <section className="py-20 bg-darker min-h-screen">
      <div className="container-section">
        <div className="mb-12">
          <h2 className="section-title">PROTOCOL STORE</h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
              <input
                type="text"
                placeholder="SEARCH PROTOCOLS"
                className="w-full bg-medium border-2 border-accent/20 py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-accent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <SlidersHorizontal className="text-accent" size={20} />
              <select
                className="bg-medium border-2 border-accent/20 py-3 px-4 text-sm focus:outline-none focus:border-accent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="technical-card group cursor-pointer">
              <div className="aspect-square mb-4 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform transition-transform group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-2">
                <div className="technical-tag">{product.category}</div>
                <h3 className="text-xl">{product.name}</h3>
                <p className="text-sm opacity-80 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-2xl font-bold text-accent">${product.price}</div>
                  <button className="btn-primary text-sm">
                    VIEW PROTOCOL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;