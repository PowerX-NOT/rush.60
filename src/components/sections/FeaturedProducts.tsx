import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import { fadeIn, staggerContainer, slideUp } from '../../utils/animations';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/30 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center bg-terracotta/10 text-terracotta px-4 py-2 rounded-full mb-4">
              <Star size={16} className="mr-2 fill-current" />
              <span className="text-sm font-medium">Most Popular</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Our most trusted construction materials, selected for their exceptional quality, 
              reliability, and customer satisfaction. These products are the backbone of successful projects.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-8 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <Link 
              to="/products" 
              className="inline-flex items-center text-terracotta font-semibold hover:text-dark-terracotta transition-colors group"
            >
              View all products
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProducts.map(product => (
            <motion.div key={product.id} variants={slideUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-sand/30 rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="text-center" variants={slideUp}>
            <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck size={24} className="text-terracotta" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-600">All featured products available for 60-minute delivery</p>
          </motion.div>
          
          <motion.div className="text-center" variants={slideUp}>
            <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-terracotta fill-current" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Top Rated</h3>
            <p className="text-gray-600">4.8+ star rating from thousands of customers</p>
          </motion.div>
          
          <motion.div className="text-center" variants={slideUp}>
            <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-terracotta font-bold text-xl">✓</div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
            <p className="text-gray-600">Sourced from verified and trusted suppliers</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;