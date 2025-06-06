import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Truck, Clock, ArrowRight } from 'lucide-react';
import { fadeIn, slideUp } from '../../utils/animations';

const steps = [
  {
    id: 1,
    title: 'Search & Browse',
    description: 'Find the exact construction materials you need from our comprehensive catalog with smart search and filters.',
    icon: Search,
    color: 'bg-terracotta',
    details: ['Smart search functionality', 'Category filters', 'Product comparisons']
  },
  {
    id: 2,
    title: 'Add to Cart',
    description: 'Select quantities, check real-time availability, and add items to your cart with instant price calculations.',
    icon: ShoppingCart,
    color: 'bg-dark-terracotta',
    details: ['Real-time pricing', 'Bulk discounts', 'Instant availability']
  },
  {
    id: 3,
    title: 'Quick Checkout',
    description: 'Enter your delivery location, get live ETA updates, and choose your preferred payment method.',
    icon: Clock,
    color: 'bg-clay',
    details: ['Live ETA calculation', 'Multiple payment options', 'Address verification']
  },
  {
    id: 4,
    title: 'Fast Delivery',
    description: 'Track your order in real-time and receive your materials within 60 minutes at your construction site.',
    icon: Truck,
    color: 'bg-terracotta',
    details: ['Real-time tracking', '60-minute guarantee', 'Professional delivery']
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sand via-light-sand to-sand relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-terracotta rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-clay rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border-2 border-terracotta rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-clay rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-terracotta px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Getting construction materials delivered to your site has never been easier. 
            Our streamlined process ensures you get what you need, when you need it, with zero hassle.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.id}
                </div>
                
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={28} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 font-poppins">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-terracotta rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-terracotta z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h3 className="text-2xl font-bold font-poppins mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their construction material needs. 
            Experience the fastest delivery service in the industry.
          </p>
          <motion.button
            className="bg-terracotta hover:bg-dark-terracotta text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Shopping Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;