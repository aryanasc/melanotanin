import React from 'react';
import { X, Package, ArrowRight } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-darker">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl">CART</h2>
            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1">
            <div className="technical-card p-6 mb-6">
              <div className="flex gap-4">
                <Package className="text-accent" size={32} />
                <div>
                  <h3 className="text-lg mb-1">SINGLE BOTTLE</h3>
                  <div className="text-sm opacity-80">60 CAPSULES | 30-DAY SUPPLY</div>
                  <div className="text-accent font-bold mt-2">$39.99</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="opacity-80">Subtotal</span>
                <span>$39.99</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-80">Shipping</span>
                <span>$4-6</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$43.99 - $45.99</span>
              </div>
              <div className="text-xs opacity-60 mt-2">Free shipping over $75</div>
            </div>
          </div>

          <button className="btn-primary w-full">
            PROCEED TO CHECKOUT <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;