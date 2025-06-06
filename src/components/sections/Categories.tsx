import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryCard from '../ui/CategoryCard';
import { categories } from '../../data/products';
import { fadeIn, staggerContainer, slideUp } from '../../utils/animations';

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-sand">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center bg-terracotta/10 text-terracotta px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Shop by Category</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Find What You Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our comprehensive collection of construction materials organized by category. 
            From basic cement to premium marble, we have everything for your project.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map(category => (
            <motion.div key={category.id} variants={slideUp}>
              <CategoryCard 
                id={category.id} 
                name={category.name} 
                icon={category.icon} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <Link 
            to="/products" 
            className="inline-flex items-center bg-terracotta hover:bg-dark-terracotta text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Products
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;