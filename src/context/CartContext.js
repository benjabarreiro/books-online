import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState();

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateCart = [...cart];

      updateCart.forEach((element) => {
        if(element.id === item.id) {
          element.quantity = element.quantity + quantity
        }
      })
      setCart(updateCart);
    } else {
    item.quantity = quantity;
    setCart([...cart, item]);
    }
  };

  const updateItem = (item, quantity) => {
    const updateQuantity = [...cart]

    updateQuantity.forEach((element) => {
      if(element.id === item.id) {
        element.quantity = quantity;
      }
    })
    setCart(updateQuantity)
  }

  const isInCart = (id) => {
    return cart.find((item) => id === item.id);
  };

  const itemCount = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, item) => (acc += item.quantity * item.price), 0);
  }

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const increase = (stock, state, setState) => {
    if(stock !== 0) {
      if(state + 1 <= stock) {
        setState(state + 1);
      }
    }
  };

  const decrease = (stock, state, setState) => {
    if(stock !== 0) {
      if(state - 1 >= 1) {
        setState(state - 1);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, updateItem, itemCount, totalPrice, removeItem, clear, increase, decrease, orderId, setOrderId }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.prototype = {
  children: PropTypes.element.isRequired,
};
