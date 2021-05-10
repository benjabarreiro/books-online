import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Dejo comentado explicando lo que fui haciendo en addItem, deben haber mejores formas de hacerlo. Pero llegue a esta mediante mucha prueba y error
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) { //pregunto si existe el item en el carrito
      let quantityToAdd; //esta variable va a contener la suma de la cantidad existente más la nueva cantidad
      cart.map((element) => { //recorro el carrito
        if(element.item.id === item.id) { // si el id coincide hago la suma
          return quantityToAdd = element.quantity + quantity;
        }
      });
      let index = cart.findIndex((element) => element.item.id === item.id); //creo variable index para encontrar la posición del item
      cart.splice(index, 1); //acá elimino el item del carrito para que no me figure duplicado (el primero con cantidad inicial y el segundo con el quantityToAdd incluído)
      let obj = {item: item, quantity: quantityToAdd}; //creo un objeto para poner el item con el quantityToAdd
      setCart([...cart, obj]); //incluyo el obj en el carrito
    } else {
    setCart([...cart, { item: item, quantity: quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.find((item) => {
      if (item.item.id !== id) {
        return false;
      } else {
        return item.item.id;
      }
    });
  };

  const itemCount = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const removeItem = (id) => {
    let index = cart.findIndex((element) => element.item.id === id);
    cart.splice(index, 1);
    setCart([...cart]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, itemCount, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.prototype = {
  children: PropTypes.element.isRequired,
};
