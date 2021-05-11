import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setQty(item.quantity += quantity);
    } else {
    item.quantity = quantity;
    setCart([...cart, item]);
    }
  };
  console.log(cart);

  const isInCart = (id) => {
    return cart.find((item) => id === item.id);
  };

  const itemCount = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, qty, setQty, addItem, itemCount, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.prototype = {
  children: PropTypes.element.isRequired,
};
