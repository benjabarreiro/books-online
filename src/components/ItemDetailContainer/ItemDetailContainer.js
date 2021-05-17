import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(id);
    item
      .get()
      .then((querySnapshot) => {
        const data = {
          id: id,
          data: querySnapshot.data()
        };
        setItem([data])
      })
  }, []);

  return (
    <div className="detail-container">
      {item.length === 0 ? (
        <p>Loading Book Detail...</p>
      ) : (
          <ItemDetail price="Price: $" book={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
