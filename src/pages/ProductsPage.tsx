import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Search as SearchIcon } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import SearchBar from '../components/ui/SearchBar';
import { products, getProductsByCategory, categories } from '../data/products';
import { Product } from '../types';
import { staggerContainer, slideUp } from '../utils/animations';
import ChatWidget from '../components/chat/ChatWidget';

const ProductsPage = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    } else if (categoryId) {
      setFilteredProducts(getProductsByCategory(categoryId));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId, searchParams]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      if (categoryId) {
        setFilteredProducts(getProductsByCategory(categoryId));
      } else {
        setFilteredProducts(products);
      }
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const searchResults = products.filter(product => {
      return (
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      );
    });
    
    setFilteredProducts(searchResults);
  };
  
  const getCategoryName = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (!categoryId) return 'All Products';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Products';
  };
  
  return (
    <div className="pt-16">
      <div className="bg-sand py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            {getCategoryName()}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <SearchBar 
              onSearch={handleSearch} 
              placeholder="Search for products..." 
              value={searchQuery}
            />
            
            <div className="flex items-center">
              <button className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm hover:shadow">
                <Filter size={18} className="mr-2" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        {filteredProducts.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map(product => (
                <motion.div key={product.id} variants={slideUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <div className="text-center py-12">
            <SearchIcon size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600">
              {searchQuery 
                ? `No results for "${searchQuery}". Try a different search term.` 
                : 'No products available in this category yet.'}
            </p>
          </div>
        )}
      </div>
      
      <ChatWidget />
    </div>
  );
};

export default ProductsPage;