import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount(props) {
  const [add, setAdd] = useState(props.initial);

  const increase = () => {
    if (props.stock === 0) {
      console.log("No hay stock");
    } else {
      if (add + 1 <= props.stock) {
        setAdd(add + 1);
      }
    }
  };

  const decrease = () => {
    if (props.stock === 0) {
      console.log("No hay stock");
    } else {
      if (add - 1 >= 1) {
        setAdd(add - 1);
      }
    }
  };

  const onAdd = () => {
    if (props.stock !== 0) {
      alert(`${add} elementos agregados al carrito`);
    }
  };

  return (
    <div className="itemCount">
        <div className="quantityContainer">
          <span onClick={decrease} className="counter">
            -
          </span>
          <span className="quantity">
            {props.stock !== 0 ? add : "No hay stock"}
          </span>
          <span onClick={increase} className="counter">
            +
          </span>
        </div>
        <button onClick={onAdd} className="addButton">
          {props.addCart}
        </button>
    </div>
  );
}
