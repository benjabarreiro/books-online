import React from "react";
import "./ItemCount.css";

export default function ItemCount(props) {
  return (
    <div className="itemCount">
        <div className="quantityContainer">
          <span onClick={props.decrease} className="counter">
            -
          </span>
          <span className="quantity">
            {props.stock !== 0 ? props.add : "No hay stock"}
          </span>
          <span onClick={props.increase} className="counter">
            +
          </span>
        </div>
        <button onClick={props.onAdd} className="addButton">
          {props.addCart}
        </button>
    </div>
  );
}
