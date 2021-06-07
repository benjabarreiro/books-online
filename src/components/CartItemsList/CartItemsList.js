import React, { useContext, Fragment } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";
import InfoMessage from '../InfoMessage/InfoMessage';
import '../../App.css';

export default function CartItemsList() {
  const { cart } = useContext(CartContext);
  return (
    <div className="bookList">
      {cart.length < 1 ? (
        <Fragment>
          <InfoMessage message="You do not have items in your Cart" />
          <Link className="backHome" to="/">Go Back Home</Link>
        </Fragment>
      ) : (
        cart.map((element) => {
          return (
            <CartItem
              book={element}
              key={element.id}
              title={element.title}
              author={element.author}
              quantity={element.quantity}
              price={element.price}
              stock={element.stock}
              pictureUrl={element.pictureUrl}
              id={element.id}
              description={element.smallDescription}
            />
          );
        })
      )}
    </div>
  );
}
