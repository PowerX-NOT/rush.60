import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ArrowRight, Package } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import CartItem from '../components/cart/CartItem';
import Button from '../components/ui/Button';
import { fadeIn, slideUp } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

const CartPage = () => {
  const { items, getTotalAmount } = useCartStore();
  
  const hasItems = items.length > 0;
  const totalAmount = getTotalAmount();
  const deliveryFee = totalAmount > 2000 ? 0 : 100;
  const grandTotal = totalAmount + deliveryFee;
  
  return (
    <div className="pt-16">
      <div className="bg-sand py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold font-poppins flex items-center">
            <ShoppingCart className="mr-3" />
            Your Cart
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        {hasItems ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg shadow-elevation-1 p-6">
                <h2 className="text-xl font-semibold mb-4 font-poppins">
                  Cart Items ({items.length})
                </h2>
                
                <AnimatePresence>
                  {items.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <div className="bg-white rounded-lg shadow-elevation-1 p-6">
                <h2 className="text-xl font-semibold mb-4 font-poppins">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
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
                
                <div className="bg-sand/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    Free delivery on orders above ₹2000. For orders below ₹2000, a delivery fee of ₹100 applies.
                  </p>
                </div>
                
                <Link to="/checkout">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    icon={<ArrowRight size={18} />}
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <Link to="/products">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    fullWidth
                    className="mt-3"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Looks like you haven't added any construction materials to your cart yet.
            </p>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Browse Products
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default CartPage;