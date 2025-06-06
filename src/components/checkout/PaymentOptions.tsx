import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import Button from '../ui/Button';
import { fadeIn } from '../../utils/animations';

interface PaymentOptionsProps {
  onSubmit: (paymentMethod: 'cod') => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState<'cod'>('cod');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(paymentMethod);
  };
  
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-elevation-1 p-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h3 className="text-xl font-semibold mb-4 font-poppins">Payment Method</h3>
      
      <div className="space-y-3">
        <div className="border border-gray-200 rounded-lg p-4 cursor-pointer bg-sand/30">
          <div className="flex items-center">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
              className="mr-3 h-4 w-4 text-terracotta focus:ring-terracotta/50"
            />
            <label htmlFor="cod" className="flex-grow cursor-pointer">
              <div className="flex items-center">
                <CreditCard size={20} className="mr-2 text-terracotta" />
                <span className="font-medium">Cash on Delivery</span>
              </div>
              <p className="text-sm text-gray-600 mt-1 ml-7">
                Pay with cash when your order is delivered
              </p>
            </label>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-sm bg-sand/50 p-4 rounded-lg">
        <p className="mb-2 font-medium">Important Note:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Cash on Delivery is the only payment option available</li>
          <li>Please keep the exact amount ready for a smoother delivery experience</li>
          <li>Our delivery person will provide a receipt upon payment</li>
        </ul>
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        fullWidth 
        className="mt-6"
        icon={<CreditCard size={18} />}
      >
        Place Order
      </Button>
    </motion.form>
  );
};

export default PaymentOptions;