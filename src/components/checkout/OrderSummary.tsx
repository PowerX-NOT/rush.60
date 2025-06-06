import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Package } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useLocationStore } from '../../store/useLocationStore';
import { fadeIn } from '../../utils/animations';

interface OrderSummaryProps {
  showDeliveryTime?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ showDeliveryTime = true }) => {
  const { items, getTotalAmount } = useCartStore();
  const { estimatedDeliveryTime } = useLocationStore();
  
  const totalAmount = getTotalAmount();
  const deliveryFee = totalAmount > 2000 ? 0 : 100;
  const grandTotal = totalAmount + deliveryFee;
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-elevation-1 p-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h3 className="text-xl font-semibold mb-4 font-poppins">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        {items.map(item => (
          <div key={item.product.id} className="flex justify-between text-sm">
            <span>
              {item.product.name} × {item.quantity}
            </span>
            <span className="font-medium">
              ₹{item.product.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">₹{totalAmount}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span className="font-medium">
            {deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}
          </span>
        </div>
        
        <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
          <span>Total</span>
          <span className="text-terracotta">₹{grandTotal}</span>
        </div>
      </div>
      
      {showDeliveryTime && (
        <div className="mt-6 bg-sand/50 rounded-lg p-4">
          <div className="flex">
            <Clock size={20} className="text-terracotta mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Estimated Delivery Time</h4>
              <p className="text-sm text-gray-600">
                {estimatedDeliveryTime} minutes
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 bg-sand/50 rounded-lg p-4">
        <div className="flex">
          <Package size={20} className="text-terracotta mr-2 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Free Delivery on Orders Above ₹2000</h4>
            <p className="text-sm text-gray-600">
              Orders below ₹2000 have a delivery fee of ₹100
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;