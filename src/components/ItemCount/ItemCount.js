import React from "react";
import "./ItemCount.css";

export default function ItemCount({ decrease, stock, add, increase, onAdd, addCart }) {
  return (
    <div className="itemCount">
        <div className="quantityContainer">
          <span onClick={decrease} className="counter">
            -
          </span>
          <span className="quantity">
            {stock !== 0 ? add : "No hay stock"}
          </span>
          <span onClick={increase} className="counter">
            +
          </span>
        </div>
        <button onClick={onAdd} className="addButton">
          {addCart}
        </button>
    </div>
  );
}
