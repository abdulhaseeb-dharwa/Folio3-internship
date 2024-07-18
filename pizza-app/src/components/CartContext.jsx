import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const updateQuantity = (name, variant, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name && item.variant === variant
          ? {
              ...item,
              quantity,
              price: (item.price / item.quantity) * quantity,
            }
          : item
      )
    );
  };

  const removeFromCart = (name, variant) => {
    setCartItems(
      cartItems.filter((item) => item.name !== name || item.variant !== variant)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};