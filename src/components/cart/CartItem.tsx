import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { buttonTap } from '../../utils/animations';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCartStore();
  
  const handleIncrement = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item.product.id);
  };
  
  return (
    <motion.div 
      className="flex items-center py-4 border-b border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.product.image} 
          alt={item.product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="font-medium">{item.product.name}</h4>
        <p className="text-gray-500 text-sm">
          ₹{item.product.price} per {item.product.unit}
        </p>
      </div>
      
      <div className="flex items-center">
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
          onClick={handleDecrement}
          whileTap={buttonTap}
          disabled={item.quantity <= 1}
        >
          <Minus size={14} />
        </motion.button>
        
        <span className="mx-3 w-8 text-center">{item.quantity}</span>
        
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100"
          onClick={handleIncrement}
          whileTap={buttonTap}
        >
          <Plus size={14} />
        </motion.button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="font-semibold">₹{item.product.price * item.quantity}</p>
      </div>
      
      <motion.button
        className="ml-4 p-2 text-gray-400 hover:text-error rounded-full hover:bg-gray-100"
        onClick={handleRemove}
        whileTap={buttonTap}
        aria-label="Remove item"
      >
        <Trash size={18} />
      </motion.button>
    </motion.div>
  );
};

export default CartItem;