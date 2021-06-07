import React, { useContext } from "react";
import InfoMessage from "../components/InfoMessage/InfoMessage";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { Fragment } from "react";

export default function Success() {
  const { orderId, setOrderId } = useContext(CartContext);

  const resetId = () => {
    setOrderId();
  };
  return (
    <div className="main-container">
      {orderId === undefined ? (
        <InfoMessage message="Processing purchase..." />
      ) : (
        <Fragment>
          <InfoMessage message="Your purchase was successful" />
          <InfoMessage message={"Your order id is: " + orderId} />
          <Link to="/">
            <Button func={resetId} content="Go Back To Home" />
          </Link>
        </Fragment>
      )}
    </div>
  );
}
