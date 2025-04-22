
import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
    
    // Update item count
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
    
    // Update subtotal
    const total = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [items]);

  const addToCart = (product: any, quantity = 1) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex >= 0) {
        // If item exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: 480, // Default price - would come from product in a real app
          quantity
        }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
