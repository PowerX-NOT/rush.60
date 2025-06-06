import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Truck, 
  CheckCircle, 
  Package, 
  Clock,
  AlertCircle,
  PhoneCall
} from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { fadeIn, slideUp } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [orderStatus, setOrderStatus] = useState<'pending' | 'confirmed' | 'out_for_delivery' | 'delivered'>('confirmed');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsTracking(true);
      // In a real app, this would fetch the order status from a backend
    }
  };
  
  const statusSteps = [
    { id: 'pending', label: 'Order Received', icon: Package, time: '10:30 AM', completed: true },
    { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, time: '10:35 AM', completed: true },
    { id: 'out_for_delivery', label: 'Out for Delivery', icon: Truck, time: '10:45 AM', completed: orderStatus === 'out_for_delivery' || orderStatus === 'delivered' },
    { id: 'delivered', label: 'Delivered', icon: CheckCircle, time: '11:15 AM', completed: orderStatus === 'delivered' },
  ];
  
  return (
    <div className="pt-16">
      <div className="bg-sand py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold font-poppins flex items-center">
            <Truck className="mr-3" />
            Track Your Order
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {!isTracking ? (
            <motion.div
              className="bg-white rounded-lg shadow-elevation-1 p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold mb-6 font-poppins text-center">
                Enter Your Order ID
              </h2>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <Input
                  label="Order ID"
                  placeholder="Enter your 6-digit order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  icon={<Search size={18} />}
                  className="mb-6"
                />
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  disabled={!orderId.trim()}
                >
                  Track Order
                </Button>
              </form>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-3 text-center">Don't have your order ID?</h3>
                <p className="text-gray-600 text-center mb-4">
                  Contact our customer support and we'll help you track your order.
                </p>
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="md"
                    icon={<PhoneCall size={16} />}
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-lg shadow-elevation-1 p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-poppins">
                  Order Status
                </h2>
                <div className="bg-sand text-terracotta px-3 py-1 rounded-full text-sm font-medium">
                  Order #{orderId}
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-medium text-lg">Estimated Delivery</h3>
                  <p className="text-terracotta font-semibold">
                    Today, by 11:15 AM
                  </p>
                </div>
                
                <div className="bg-sand p-4 rounded-lg">
                  <div className="flex items-center">
                    <Clock size={20} className="text-terracotta mr-2" />
                    <span className="font-bold text-xl">15 min</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Remaining</p>
                </div>
              </div>
              
              <div className="relative">
                {/* Status Line */}
                <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-200 z-0"></div>
                
                {/* Status Steps */}
                <div className="space-y-8 relative z-10">
                  {statusSteps.map((step, index) => (
                    <motion.div 
                      key={step.id}
                      className="flex items-start"
                      initial="hidden"
                      animate="visible"
                      variants={slideUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                        ${step.completed 
                          ? 'bg-success text-white' 
                          : 'bg-gray-200 text-gray-400'}
                      `}>
                        <step.icon size={20} />
                      </div>
                      
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="font-medium">{step.label}</h4>
                          {step.id === orderStatus && (
                            <span className="ml-2 text-xs bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          {step.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <AlertCircle size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Having Issues?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      If you haven't received your order within the estimated time, please contact our support.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      icon={<PhoneCall size={16} />}
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default TrackOrderPage;