import React, { createContext, useState, useEffect } from "react";

// Create Cart Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from LocalStorage when app starts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
