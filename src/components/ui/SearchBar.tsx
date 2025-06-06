import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search for construction materials...',
  fullWidth = false,
  className = '',
  onSearch
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };
  
  const clearSearch = () => {
    setQuery('');
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={`relative ${fullWidth ? 'w-full' : 'max-w-md'} ${className}`}
    >
      <motion.div 
        className={`
          flex items-center bg-white border-2 rounded-full overflow-hidden
          transition-all duration-200
          ${isFocused ? 'border-terracotta shadow-sm' : 'border-gray-200'}
        `}
        animate={{ scale: isFocused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex-shrink-0 pl-4">
          <Search size={18} className="text-gray-400" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 px-4 focus:outline-none text-gray-700"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {query && (
          <button
            type="button"
            className="flex-shrink-0 pr-2"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X size={18} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
        
        <button
          type="submit"
          className="bg-terracotta hover:bg-dark-terracotta text-white py-3 px-6 transition-colors"
          aria-label="Search"
        >
          Search
        </button>
      </motion.div>
    </form>
  );
};

export default SearchBar;