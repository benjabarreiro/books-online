import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div key={props.book.id} className="book">
      <Link className="img-container" to={`/detail/${props.book.id}`}>
        <img className="book-img" src={props.book.pictureUrl} alt="" />
      </Link>
      <div className="book-background">
        <h3 className="book-title-author">
          {props.book.title} by {props.book.author}
        </h3>
        <p className="description">{props.book.smallDescription}</p>
        <div className="book-bottom-container">
          <span className="book-price-info">Price: ${props.book.price}</span>
          <Link className="info-link" to={`/detail/${props.book.id}`}>
            <span className="book-price-info">More information</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
