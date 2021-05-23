import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ quantity, stock, title, id, price }) {
  const { removeItem } = useContext(CartContext);
  return (
    <div>
      <p>{title}</p>
  <p>Stock: {stock}</p>
      <p>Quantity: {quantity}</p>
      <p>Unit Price: ${price}</p>
      <p>Selected Quantity Price: ${price * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
}
