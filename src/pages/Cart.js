import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={clear}>Vaciar Carrito</button>
      {cart.map((element) => {
        return (
          <div key={element.id}>
            <p>{element.title}</p>
            <p>{element.quantity}</p>
            <button onClick={() => removeItem(element.id)}>Eliminar</button>
          </div>
        );
      })}
    </div>
  );
}