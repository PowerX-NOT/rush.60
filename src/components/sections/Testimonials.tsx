import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { fadeIn, slideUp } from '../../utils/animations';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Construction Contractor',
    company: 'Kumar Constructions',
    content: 'The 60-minute delivery promise saved my project when we ran out of cement. I was skeptical at first, but they delivered within 45 minutes! The quality is excellent and the service is unmatched.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    verified: true,
    orderCount: '50+ orders'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    company: 'Elegant Interiors',
    content: 'As an interior designer, I often need specific materials urgently. Their quick delivery and quality products have made my job so much easier. The marble tiles I ordered were perfect!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    verified: true,
    orderCount: '30+ orders'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Home Owner',
    company: 'DIY Enthusiast',
    content: 'Was doing a DIY home renovation and ran out of tiles in the middle. Ordered through their app and got exactly what I needed in less than an hour. Great service and fair pricing!',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    verified: true,
    orderCount: '15+ orders'
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sand/50 rounded-full blur-3xl translate-y-48 translate-x-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center bg-terracotta/10 text-terracotta px-4 py-2 rounded-full mb-4">
            <Star size={16} className="mr-2 fill-current" />
            <span className="text-sm font-medium">Customer Reviews</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Here's what our customers have to say about our service, 
            quality, and commitment to delivering excellence every time.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              transition={{ delay: index * 0.15 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-terracotta/20 group-hover:text-terracotta/40 transition-colors">
                <Quote size={32} />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-amber-400 fill-current" 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">5.0</span>
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Customer info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-sand"
                />
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle size={16} className="ml-2 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-terracotta text-xs font-medium">{testimonial.orderCount}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-terracotta mb-2">2,500+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terracotta mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terracotta mb-2">15,000+</div>
            <div className="text-gray-600 text-sm">Orders Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-terracotta mb-2">98%</div>
            <div className="text-gray-600 text-sm">On-Time Delivery</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;