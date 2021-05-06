import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {

  const [add, setAdd] = useState(1);
  const [finish, setFinish] = useState(0);

  const increase = () => {
    if (props.book.stock === 0) {
      console.log("No hay stock");
    } else {
      if (add + 1 <= props.book.stock) {
        setAdd(add + 1);
      }
    }
  };

  const decrease = () => {
    if (props.book.stock === 0) {
      console.log("No hay stock");
    } else {
      if (add - 1 >= 1) {
        setAdd(add - 1);
      }
    }
  };

  const onAdd = () => {
    if (props.book.stock !== 0) {
      console.log(`${add} elementos agregados al carrito`);
      setFinish(add);
    }

  };

  return (
    <div key={props.book.id} className="item-detail">
      <h1 className="detail-title">{props.book.title}</h1>
      <div className="second-container">
        <span className="detail-img-container">
          <img className="detail-img" src={props.book.pictureUrl} alt="" />
        </span>
        <div className="detail-info-container">
          <span className="detail-description">{props.book.description}</span>
        </div>
        <div className="price-Add">
          <span className="price-detail">
            {props.price}
            {props.book.price}
          </span>
          {finish === 0 ? (
            <ItemCount addCart="Add to cart" stock={props.book.stock} onAdd={onAdd} increase={increase} decrease={decrease} add={add} />
          ) : (
            <Link to="/cart"><button>Finish my purchase</button></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
