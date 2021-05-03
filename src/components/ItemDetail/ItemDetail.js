import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  return (
    <div className="item-detail">
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
          <ItemCount addCart="Add to cart" stock={5} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
