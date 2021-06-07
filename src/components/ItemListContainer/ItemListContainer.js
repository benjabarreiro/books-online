import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { Link } from "react-router-dom";


export const ItemListContainer = ({ products }) => {
  return (
    <div className="main-container">
      <h1 className="greeting">{products}</h1>
      <Link className="link" to={'/cart'}>
        <h3>Go to Shopping Cart</h3>
      </Link>
      <ItemList />
    </div>
  );
};
