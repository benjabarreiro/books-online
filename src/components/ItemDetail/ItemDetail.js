import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ book }) => {
  const [ add, setAdd] = useState(1);
  const [finish, setFinish] = useState(0);

  const { addItem } = useContext(CartContext);

  console.log(book[0].data.title);

  const increase = () => {
    if (book[0].data.stock === 0) {
      console.log("No hay stock");
    } else {
      if (add + 1 <= book[0].data.stock) {
        setAdd(add + 1);
      }
    }
  };

  const decrease = () => {
    if (book[0].data.stock === 0) {
      console.log("No hay stock");
    } else {
      if (add - 1 >= 1) {
        setAdd(add - 1);
      }
    }
  };

  const onAdd = () => {
    if (book[0].data.stock !== 0) {
      addItem(book[0], add);
      setAdd(1);
      setFinish(add);
    }
  };

  return (
    <div key={book[0].id} className="item-detail">
      <h1 className="detail-title">{book[0].data.title}</h1>
      <div className="second-container">
        <span className="detail-img-container">
          <img className="detail-img" src={book[0].data.pictureUrl} alt="" />
        </span>
        <div className="detail-info-container">
          <span className="detail-description">{book[0].data.description}</span>
        </div>
        <div className="price-Add">
          <span className="price-detail">Price: ${book[0].data.price}</span>
          {finish === 0 ? (
            <ItemCount
              addCart="Add to cart"
              initial={1}
              stock={book[0].data.stock}
              onAdd={onAdd}
              increase={increase}
              decrease={decrease}
              add={add}
            />
          ) : (
            <Link to="/cart">
              <button>Finish my purchase</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;