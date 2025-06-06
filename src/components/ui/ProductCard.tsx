import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { buttonTap } from '../../utils/animations';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
      position: 'top-right',
    });
  };
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Status badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!product.inStock && (
              <div className="bg-red-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                Out of Stock
              </div>
            )}
            
            {product.featured && (
              <div className="bg-terracotta/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                <Star size={12} className="mr-1 fill-current" />
                Featured
              </div>
            )}
          </div>
          
          {/* Quick delivery badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm text-terracotta text-xs font-medium px-2 py-1 rounded-full flex items-center">
              <Truck size={12} className="mr-1" />
              60 min
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2 truncate group-hover:text-terracotta transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10 leading-5">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-terracotta font-bold text-xl">₹{product.price}</span>
              <span className="text-gray-500 text-sm ml-1">per {product.unit}</span>
            </div>
            
            <div className="flex items-center text-amber-400">
              <Star size={14} className="fill-current" />
              <span className="text-xs text-gray-500 ml-1">4.8</span>
            </div>
          </div>
          
          <motion.button
            className={`
              w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-300
              ${product.inStock 
                ? 'bg-terracotta hover:bg-dark-terracotta text-white shadow-lg hover:shadow-xl' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }
            `}
            onClick={handleAddToCart}
            whileTap={product.inStock ? buttonTap : undefined}
            disabled={!product.inStock}
            whileHover={product.inStock ? { scale: 1.02 } : undefined}
          >
            <ShoppingCart size={18} />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;