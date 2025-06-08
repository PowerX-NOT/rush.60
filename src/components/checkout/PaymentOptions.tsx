import React from 'react';
import { motion } from 'framer-motion';
import { Banknote } from 'lucide-react';
import { slideUp } from '../../utils/animations';

interface PaymentOptionsProps {
  onSubmit: () => void;
  isProcessing?: boolean;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ onSubmit, isProcessing = false }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUp}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-bold font-poppins mb-6">Payment Method</h2>
      
      <div className="space-y-4">
        <div className="border rounded-lg p-4 bg-sand/30">
          <div className="flex items-center">
            <Banknote className="w-6 h-6 mr-3 text-terracotta" />
            <div className="text-left">
              <h3 className="font-semibold">Cash on Delivery</h3>
              <p className="text-sm text-gray-600">Pay when you receive your order</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-sm bg-sand/50 p-4 rounded-lg">
        <p className="mb-2 font-medium">Important Note:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Please keep the exact amount ready for a smoother delivery experience</li>
          <li>Our delivery person will provide a receipt upon payment</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <button
          onClick={onSubmit}
          disabled={isProcessing}
          className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors ${
            isProcessing 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-terracotta hover:bg-terracotta-dark'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </motion.div>
  );
};

export default PaymentOptions;