import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useLocationStore } from '../store/useLocationStore';
import AddressForm from '../components/checkout/AddressForm';
import OrderSummary from '../components/checkout/OrderSummary';
import PaymentOptions from '../components/checkout/PaymentOptions';
import { sendOrderNotification } from '../services/telegramService';
import { slideUp } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getTotalAmount, clearCart } = useCartStore();
  const { address, estimatedDeliveryTime } = useLocationStore();
  
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });
  
  const handleAddressSubmit = (data: { name: string; phone: string; address: string }) => {
    setCustomerInfo(data);
    setStep(2);
  };
  
  const handlePaymentSubmit = async () => {
    if (isProcessing) return; // Prevent multiple submissions
    
    try {
      setIsProcessing(true);
      
      // Generate a random order ID
      const newOrderId = Math.floor(100000 + Math.random() * 900000).toString();
      
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

      // Prepare order data
      const orderData = {
        orderId: newOrderId,
        customerName: customerInfo.name,
        address: customerInfo.address,
        phone: customerInfo.phone,
        estimatedDeliveryTime
      };

      // Clear cart first
      clearCart();

      // Then navigate to order confirmation
      navigate('/order-confirmation', {
        state: { orderData },
        replace: true
      });
    } catch (error) {
      console.error('Error processing order:', error);
      setIsProcessing(false);
      // You might want to show an error message to the user here
    }
  };

  // If there are no items and we're not processing an order, redirect to cart
  if (items.length === 0 && !isProcessing) {
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
            Checkout
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <AddressForm onSubmit={handleAddressSubmit} />
            )}
            
            {step === 2 && (
              <PaymentOptions 
                onSubmit={handlePaymentSubmit}
                isProcessing={isProcessing}
              />
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
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default CheckoutPage;