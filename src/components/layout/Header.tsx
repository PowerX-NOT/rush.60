import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Truck, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/useCartStore';
import { slideInRight } from '../../utils/animations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCartStore();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-elevation-1' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Truck 
              size={30} 
              className="text-terracotta mr-2" 
            />
            <span className="text-xl font-bold font-poppins text-terracotta">
              <span className="text-dark-terracotta">60</span>-Minute
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-terracotta transition-colors">Home</Link>
            <Link to="/products" className="font-medium hover:text-terracotta transition-colors">Products</Link>
            <Link to="/track" className="font-medium hover:text-terracotta transition-colors">Track Order</Link>
            <Link to="/contact" className="font-medium hover:text-terracotta transition-colors">Contact</Link>
          </nav>
          
          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 rounded-full hover:bg-sand transition-colors">
              <Search size={20} />
            </Link>
            
            <Link to="/cart" className="p-2 rounded-full hover:bg-sand transition-colors relative">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2 md:hidden rounded-full hover:bg-sand transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-elevation-2 absolute top-16 left-0 right-0"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideInRight}
          >
            <nav className="flex flex-col py-4">
              <Link to="/" className="px-4 py-3 hover:bg-sand transition-colors">
                Home
              </Link>
              <Link to="/products" className="px-4 py-3 hover:bg-sand transition-colors">
                Products
              </Link>
              <Link to="/track" className="px-4 py-3 hover:bg-sand transition-colors">
                Track Order
              </Link>
              <Link to="/contact" className="px-4 py-3 hover:bg-sand transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;