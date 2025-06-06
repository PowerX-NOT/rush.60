import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  Clock, 
  ShoppingCart, 
  Plus, 
  Minus,
  ArrowLeft 
} from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCartStore();
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [productId]);
  
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Package size={48} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for might have been removed or is no longer available.
        </p>
        <Link to="/products" className="text-terracotta hover:underline">
          Browse all products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-10">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-terracotta mb-6"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-elevation-1">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <h1 className="text-3xl font-bold font-poppins mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-terracotta mr-2">
                ₹{product.price}
              </span>
              <span className="text-gray-500">
                per {product.unit}
              </span>
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="flex items-center mb-6">
              <span className="mr-4">Quantity:</span>
              
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-3 py-1 border-r border-gray-300"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                
                <span className="px-4 py-1">{quantity}</span>
                
                <button
                  className="px-3 py-1 border-l border-gray-300"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ShoppingCart size={18} />}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                fullWidth
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Truck size={18} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Delivery</h4>
                  <p className="text-gray-600 text-sm">
                    Get your materials delivered within 60 minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Package size={18} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">
                    All our products are sourced from trusted suppliers.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Clock size={18} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Tracking</h4>
                  <p className="text-gray-600 text-sm">
                    Track your order in real-time from our app.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-poppins mb-6">
              Related Products
            </h2>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {relatedProducts.map(product => (
                <motion.div key={product.id} variants={slideUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default ProductDetailPage;