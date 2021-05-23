import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFireStore } from "../firebase";

export default function Cart() {
  const { cart, setCart, clear, totalPrice } = useContext(CartContext);

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const buyer = {
    name,
    phone,
    email
  };

  let items = [];
    cart.forEach((element) => {
      return items.push({
        id: element.id,
        name: element.data.title,
        price: element.data.price,
        quantity: element.data.quantity
      });
    });

  const canBuy = (stock, quantity) => {
    return stock >= quantity;
  };

  const handleFinish = () => {
    const db = getFireStore();
    const batch = db.batch();

    const order = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      items: items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice()
    };

    order.add(newOrder)
    .then(({id}) => {
      console.log(id);
    })
    .then(() => {
      cart.forEach((element) => {
        const itemRef = db.collection("items").doc(element.id);
        if (canBuy(element.data.stock, element.data.quantity)) {
          batch.update(itemRef, {
            stock: element.data.stock - element.data.quantity,
          });
          setCart([]);
        } else {
          alert('Error en la operación, no puedes comprar una cantidad mayor a la que hay en stock.');
        }
      })
  
      batch.commit();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <Fragment>
      <h1>Shopping Cart</h1>
      <button onClick={clear}>Vaciar Carrito</button>
      <h2>Total Price: ${totalPrice()}</h2>
      {cart.length < 1 ? (
        <Fragment>
          <p>No hay items en el carrito</p>
          <Link to="/">Volver al Inicio</Link>
        </Fragment>
      ) : (
        cart.map((element) => {
          return (
            <CartItem
              key={element.id}
              title={element.data.title}
              quantity={element.data.quantity}
              price={element.data.price}
              stock={element.data.stock}
              id={element.id}
            />
          );
        })
      )}
      <form>
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Phone: </label>
          <input type="text" onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </form>
      <Link to="/">
        <button onClick={handleFinish}>Finish shopping</button>
      </Link>
    </Fragment>
  );
}
