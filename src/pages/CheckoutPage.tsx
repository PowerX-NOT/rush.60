import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useLocationStore } from '../store/useLocationStore';
import AddressForm from '../components/checkout/AddressForm';
import OrderSummary from '../components/checkout/OrderSummary';
import PaymentOptions from '../components/checkout/PaymentOptions';
import Button from '../components/ui/Button';
import { sendOrderNotification } from '../services/telegramService';
import { fadeIn, slideUp } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotalAmount, clearCart } = useCartStore();
  const { address, estimatedDeliveryTime } = useLocationStore();
  
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const handleAddressSubmit = (data: { name: string; phone: string; address: string }) => {
    setCustomerInfo(data);
    setStep(2);
  };
  
  const handlePaymentSubmit = async () => {
    // Generate a random order ID
    const newOrderId = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderId(newOrderId);
    
    // Prepare order details for notification
    const orderItems = items.map(item => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price
    }));
    
    const totalAmount = getTotalAmount();
    
    // Send order notification to Telegram
    await sendOrderNotification({
      orderId: newOrderId,
      customerName: customerInfo.name,
      address: customerInfo.address,
      phone: customerInfo.phone,
      totalAmount,
      items: orderItems
    });
    
    // Mark order as complete
    setOrderComplete(true);
    
    // Clear cart after successful order
    clearCart();
  };
  
  if (items.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="pt-16">
      <div className="bg-sand py-10">
        <div className="container mx-auto px-4">
          <Link 
            to="/cart" 
            className="inline-flex items-center text-gray-600 hover:text-terracotta mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to cart
          </Link>
          
          <h1 className="text-3xl font-bold font-poppins">
            {orderComplete ? 'Order Confirmed' : 'Checkout'}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        {orderComplete ? (
          <motion.div 
            className="bg-white rounded-lg shadow-elevation-1 p-8 text-center max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle size={40} className="text-success" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold font-poppins mb-4">
              Thank You for Your Order!
            </h2>
            
            <p className="text-gray-600 mb-6">
              Your order has been confirmed and will be delivered within 60 minutes. We have sent a confirmation to your phone number.
            </p>
            
            <div className="bg-sand/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-2">Order Details</h3>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Delivery Address:</span>
                <span className="font-medium">{customerInfo.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium">Within {estimatedDeliveryTime} minutes</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Link to="/track">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
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
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <AddressForm onSubmit={handleAddressSubmit} />
              )}
              
              {step === 2 && (
                <PaymentOptions onSubmit={handlePaymentSubmit} />
              )}
            </div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <OrderSummary />
            </motion.div>
          </div>
        )}
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default CheckoutPage;