import React, { Fragment } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clear, totalPrice } = useContext(
    CartContext
  );

  return (
    <Fragment>
      <h1>Shopping Cart</h1>
      <button onClick={clear}>Vaciar Carrito</button>
      <h2>Total Price: ${totalPrice()}</h2>
      {cart.length < 1 ? (
        <Fragment>
          <p>No hay items en el carrito</p>
          <Link to="/">Volver al Inicio</Link>
        </Fragment>
      ) : (
        cart.map((element) => {
          return (
            <CartItem
              key={element.id}
              title={element.data.title}
              quantity={element.data.quantity}
              price={element.data.price}
              stock={element.data.stock}
              id={element.id}
            />
          );
        })
      )}
    </Fragment>
  );
}
