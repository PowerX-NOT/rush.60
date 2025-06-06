import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addToCart: (product: Product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      
      return {
        items: [...state.items, { product, quantity }]
      };
    });
  },
  
  removeFromCart: (productId: string) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
  },
  
  updateQuantity: (productId: string, quantity: number) => {
    set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getTotalAmount: () => {
    return get().items.reduce(
      (total, item) => total + (item.product.price * item.quantity), 
      0
    );
  },
  
  getTotalItems: () => {
    return get().items.reduce(
      (total, item) => total + item.quantity, 
      0
    );
  }
}));