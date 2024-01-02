import React, { createContext, useEffect, useState } from "react";
// cart item context

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, currItem) => {
      return acc + currItem.price * currItem.amount;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  //update item amount
  useEffect(() => {
    let newAmount = cart.reduce((total, item) => {
      return (total += item.amount);
    }, 0);
    setItemAmount(newAmount);
  }, [cart]);

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

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    //if the amount is 1, remove the item
    if (cartItem.amount === 1) {
      removeFromCart(id);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }
        return item;
      });
      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
