import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { scaleUp, buttonTap } from '../../utils/animations';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      console.log('Message sent:', message);
      setMessage('');
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white rounded-lg shadow-elevation-3 w-[320px] mb-4 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={scaleUp}
          >
            {/* Chat Header */}
            <div className="bg-terracotta text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle size={20} className="mr-2" />
                <h3 className="font-semibold">Chat Support</h3>
              </div>
              <button 
                onClick={toggleChat}
                className="p-1 hover:bg-terracotta/80 rounded-full"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              <div className="bg-sand rounded-lg p-3 mb-3 max-w-[80%]">
                <p className="text-sm">
                  Hi there! 👋 Need help with your construction material delivery? I'm here to assist you.
                </p>
                <span className="text-xs text-gray-500 mt-1 block">
                  Support Team • Just now
                </span>
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:border-terracotta"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <motion.button
                type="submit"
                className="bg-terracotta text-white px-4 py-2 rounded-r-md"
                whileTap={buttonTap}
              >
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className={`
          w-14 h-14 rounded-full flex items-center justify-center shadow-elevation-2
          ${isOpen ? 'bg-clay text-white' : 'bg-terracotta text-white'}
        `}
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={buttonTap}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;