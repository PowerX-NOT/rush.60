import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Truck } from 'lucide-react';
import { fadeIn, slideUp } from '../../utils/animations';
import Button from '../ui/Button';

const DeliveryMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center bg-sand px-4 py-2 rounded-full mb-4">
              <Clock size={16} className="mr-2 text-terracotta" />
              <span className="text-sm font-medium text-clay">Delivery within 60 minutes</span>
            </div>
            
            <h2 className="text-3xl font-bold font-poppins mb-6">
              We Deliver Across <br />
              <span className="text-terracotta">The Entire City</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Our extensive network of delivery personnel ensures that we can reach any construction site in the city within 60 minutes. No matter where you are, we've got you covered.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <MapPin size={18} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">City-Wide Coverage</h4>
                  <p className="text-gray-600">
                    We deliver to all neighborhoods and areas within the city limits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Truck size={18} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Specialized Vehicles</h4>
                  <p className="text-gray-600">
                    Our fleet includes vehicles specially designed to transport construction materials safely.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Clock size={18} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Tracking</h4>
                  <p className="text-gray-600">
                    Track your delivery in real-time through our app or website.
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" icon={<MapPin size={18} />}>
              Check Delivery Area
            </Button>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-elevation-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <img 
              src="https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="City map" 
              className="w-full h-full object-cover"
            />
            
            {/* Map overlay with delivery radius */}
            <div className="absolute inset-0 bg-terracotta/20 backdrop-blur-sm">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-4 border-terracotta animate-pulse opacity-30"></div>
                  <div className="w-32 h-32 rounded-full border-4 border-terracotta animate-pulse opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="w-16 h-16 rounded-full bg-terracotta absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryMap;