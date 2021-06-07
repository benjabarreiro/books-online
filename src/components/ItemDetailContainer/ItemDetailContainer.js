import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import { getFireStore } from "../../firebase";
import InfoMessage from "../InfoMessage/InfoMessage";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item.get().then((querySnapshot) => {
      const data = {
        id: id,
        ...querySnapshot.data(),
      };
      setItem([data]);
    });
  }, [id]);

  return (
    <div className="main-container">
      <Link className="link" to={'/cart'}>
        <h3>Go to Shopping Cart</h3>
      </Link>
      {item.length === 0 ? (
        <InfoMessage message="Loading Book Detail..." />
      ) : !item[0].title ? (
        <InfoMessage message="This product doesn't exist" />
      ) : (
        <ItemDetail
          stock={item[0].stock}
          id={item[0].id}
          title={item[0].title}
          author={item[0].author}
          pictureUrl={item[0].pictureUrl}
          description={item[0].description}
          price={item[0].price}
          book={item[0]}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
