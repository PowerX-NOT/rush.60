import React from 'react';
import { Truck, Clock, Check, CreditCard, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-terracotta via-dark-terracotta to-clay text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-700"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust indicators */}
            <motion.div
              className="inline-flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 2,500+ customers</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Construction Materials <br/>
              <span className="text-sand relative">
                Delivered in 
                <motion.span
                  className="inline-block ml-2 px-4 py-1 bg-white/20 rounded-lg text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  60 Minutes
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Get cement, sand, bricks, tiles, steel, marble, and all construction materials delivered to your site within 60 minutes. No minimum order, available 24/7.
            </motion.p>
            
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <SearchBar />
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link to="/products">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  className="bg-white text-terracotta hover:bg-white/90 font-semibold"
                >
                  Browse Products
                </Button>
              </Link>
              
              <Link to="/track">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Track Order
                </Button>
              </Link>
            </motion.div>
            
            {/* Feature highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mr-3 flex-shrink-0">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fast Delivery</h3>
                  <p className="text-white/80 text-sm">Within 60 minutes</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mr-3 flex-shrink-0">
                  <Check size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quality Materials</h3>
                  <p className="text-white/80 text-sm">Verified suppliers</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mr-3 flex-shrink-0">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Pay on Delivery</h3>
                  <p className="text-white/80 text-sm">Cash on delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main hero image */}
            <div className="relative">
              <img 
                src="https://mccoymart.com/post/wp-content/uploads/07-May-24-Building-Materials.jpg" 
                alt="Construction materials" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
              />
              
              {/* Floating delivery time card */}
              <motion.div
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center text-terracotta">
                  <Clock size={20} className="mr-2" />
                  <div>
                    <p className="font-bold text-lg">60 min</p>
                    <p className="text-xs text-gray-600">Delivery Time</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating customer count */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="text-terracotta">
                  <p className="font-bold text-lg">2,500+</p>
                  <p className="text-xs text-gray-600">Happy Customers</p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-sand/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
