import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateCart = [...cart];

      updateCart.forEach((element) => {
        if(element.id === item.id) {
          console.log(element);
          element.data.quantity = element.data.quantity + quantity
        }
      })
      setQty(updateCart);
    } else {
      console.log(item)
    item.data.quantity = quantity;
    setCart([...cart, item]);
    }
    console.log(item.id)
  };
  console.log(cart);

  const isInCart = (id) => {
    return cart.find((item) => id === item.id);
  };

  const itemCount = () => {
    return cart.reduce((acc, item) => (acc += item.data.quantity), 0);
  };
  console.log(itemCount());

  const totalPrice = () => {
    return cart.reduce((acc, item) => (acc += item.data.quantity * item.data.price), 0);
  }

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, qty, setQty, addItem, itemCount, totalPrice, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.prototype = {
  children: PropTypes.element.isRequired,
};
