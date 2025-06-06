import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, icon }) => {
  // Dynamically get the icon from lucide-react
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Package;
  
  return (
    <Link to={`/products/${id}`}>
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 group border border-gray-100"
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sand to-terracotta/20 flex items-center justify-center mb-4 group-hover:from-terracotta group-hover:to-dark-terracotta transition-all duration-300">
          <IconComponent size={28} className="text-terracotta group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-semibold text-center text-gray-800 group-hover:text-terracotta transition-colors duration-300">
          {name}
        </h3>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;