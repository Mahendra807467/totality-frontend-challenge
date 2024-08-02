import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart([...cart, { ...property, count: 1 }]);
  };

  const updateCart = (id, count) => {
    setCart(cart.map(item => item.id === id ? { ...item, count } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};