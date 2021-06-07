import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFireStore } from "../../firebase";
import CartItemsList from "../CartItemsList/CartItemsList";
import "../../App.css";
import "./CartContainer.css";
import FormInput from '../FormInput/FormInput';
import Button from "../Button/Button";

export default function CartContainer() {
  const { cart, setCart, setOrderId, clear, totalPrice } = useContext(
    CartContext
  );

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [repeatEmail, setRepeatEmail] = useState();

  const buyer = {
    name,
    phone,
    email,
  };

  const items = [];
  cart.forEach((element) => {
    return items.push({
      id: element.id,
      name: element.title,
      price: element.price,
      quantity: element.quantity,
    });
  });

  const canBuy = (stock, quantity) => {
    return stock >= quantity;
  };

  const equalEmail = (email, repeatEmail) => {
    return email !== repeatEmail;
  };

  const handleFinish = () => {
    const db = getFireStore();
    const batch = db.batch();

    if (equalEmail(email, repeatEmail)) {
      alert("The emails do not match!");
    } else {
      const order = db.collection("orders");
      const newOrder = {
        buyer: buyer,
        items: items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalPrice(),
      };

      order
        .add(newOrder)
        .then(({ id }) => {
          setOrderId(id);
          cart.forEach((element) => {
            const itemRef = db.collection("items").doc(element.id);
            if (canBuy(element.stock, element.quantity)) {
              batch.update(itemRef, {
                stock: element.stock - element.quantity,
              });
              setCart([]);
            } else {
              alert(
                "Error en la operación, no puedes comprar una cantidad mayor a la que hay en stock."
              );
            }
          });

          batch.commit();
        })
        .catch((err) => {
          return err;
        });
    }
  };

  return (
    <div className="main-container">
      <div className="cartTop-content">
        <h2>Total Price: ${totalPrice()}</h2>
        <h1>Shopping Cart</h1>
        <Button func={clear} content="Empty Cart" />
      </div>
      <CartItemsList />
      <form className="form">
        <FormInput name="Name: " setState={setName} />
        <FormInput name="Phone: " setState={setPhone} />
        <FormInput name="Email: " setState={setEmail} />
        <FormInput name="Repeat Email: " setState={setRepeatEmail} />
      </form>
      <Link to="/success">
        <Button func={handleFinish} content="Finish Shopping" />
      </Link>
    </div>
  );
}
