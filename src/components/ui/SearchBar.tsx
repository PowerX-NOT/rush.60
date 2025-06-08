import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';

interface SearchBarProps {
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  onSearch?: (query: string) => void;
  value?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search for construction materials...',
  fullWidth = false,
  className = '',
  onSearch,
  value: externalValue
}) => {
  const [query, setQuery] = useState(externalValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (externalValue !== undefined) {
      setQuery(externalValue);
    }
  }, [externalValue]);

  // Update suggestions whenever query changes
  useEffect(() => {
    if (query.trim()) {
      const lowerCaseQuery = query.toLowerCase();
      const matches = products.filter((product: Product) => 
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      ).slice(0, 5);
      
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/products?q=${encodeURIComponent(query)}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  
  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch('');
    } else {
      navigate('/products');
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setQuery(productName);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(productName);
    } else {
      navigate(`/products?q=${encodeURIComponent(productName)}`);
    }
  };
  
  return (
    <div ref={searchRef} className={`relative ${fullWidth ? 'w-full' : 'max-w-md'} ${className}`}>
      <form onSubmit={handleSubmit}>
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
            onChange={handleInputChange}
            onFocus={() => {
              setIsFocused(true);
              if (query.trim() && suggestions.length > 0) {
                setShowSuggestions(true);
              }
            }}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full py-3 px-4 focus:outline-none text-gray-700"
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

      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto">
              {suggestions.map((product: Product) => (
                <button
                  key={product.id}
                  onClick={() => handleSuggestionClick(product.name)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Package size={16} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;