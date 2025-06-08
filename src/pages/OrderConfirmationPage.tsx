import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Package, Clock, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import { fadeIn } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

interface OrderConfirmationData {
  orderId: string;
  customerName: string;
  address: string;
  phone: string;
  estimatedDeliveryTime: number;
}

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showConfetti, setShowConfetti] = useState(true);
  const [orderData, setOrderData] = useState<OrderConfirmationData | null>(null);

  useEffect(() => {
    // Get order data from location state
    if (location.state?.orderData) {
      setOrderData(location.state.orderData);
    } else {
      // If no order data, redirect to home
      navigate('/');
    }

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, [location.state, navigate]);

  if (!orderData) {
    return null;
  }

  return (
    <div className="pt-16">
      <div className="bg-sand py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold font-poppins">
            Order Confirmed
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <motion.div 
          className="bg-white rounded-lg shadow-elevation-1 p-8 text-center max-w-2xl mx-auto relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Confetti Animation */}
          <AnimatePresence>
            {showConfetti && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(100)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: Math.random() * 100 + '%',
                      y: -20,
                      scale: Math.random() * 0.5 + 0.5,
                      opacity: 1,
                      rotate: 0
                    }}
                    animate={{
                      y: '100vh',
                      x: [
                        Math.random() * 100 + '%',
                        Math.random() * 100 + '%',
                        Math.random() * 100 + '%'
                      ],
                      rotate: [0, 360, 720],
                      opacity: [1, 1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 3 + 3,
                      ease: "easeOut",
                      times: [0, 0.7, 1]
                    }}
                  >
                    <div className={`
                      w-3 h-3 rounded-full
                      ${Math.random() > 0.5 ? 'bg-terracotta' : 'bg-success'}
                      ${Math.random() > 0.7 ? 'rotate-45' : ''}
                    `} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success Icon Animation */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }}
          >
            <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle size={48} className="text-success" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold font-poppins mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            Order Placed Successfully! 🎉
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            Your order has been confirmed and will be delivered within {orderData.estimatedDeliveryTime} minutes. 
            We have sent a confirmation to your phone number.
          </motion.p>
          
          <motion.div 
            className="bg-sand/50 rounded-lg p-6 mb-8 space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-bold text-2xl text-terracotta tracking-wider bg-terracotta/10 px-4 py-1 rounded-full">
                #{orderData.orderId}
              </span>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2 text-terracotta" />
                <span>Estimated Delivery: Within 60 minutes</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2 text-terracotta" />
                <span>{orderData.address}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <Link to={`/track?orderId=${orderData.orderId}`}>
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                icon={<Package size={18} />}
              >
                Track My Order
              </Button>
            </Link>
            
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg" 
                fullWidth
              >
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default OrderConfirmationPage; 