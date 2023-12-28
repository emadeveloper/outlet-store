import React, { createContext, useEffect, useState } from "react";
// cart item context

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);
    //if the item is already in the cart
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
