import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";
import InfoMessage from "../InfoMessage/InfoMessage";

const ItemList = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [categoryEmpty, setCategoryEmpty] = useState(true);

  //setTimeout(() => {}, 10000)

  useEffect(() => {
    const db = getFireStore();
    const items = db.collection("items");
    items
      .get()
      .then((querySnapshot) => {
        setLoading(false);
        const itemFilter = () => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const filterCategory = data.filter(
            (item) => item.categoryId === categoryId
          );
          if (!categoryId) {
            setItems(data);
            setCategoryEmpty(false);
          } else {
            if (filterCategory.length > 0) {
              setItems(filterCategory);
              setCategoryEmpty(false);
            } else {
              setCategoryEmpty(true);
            }
          }
        };
        if (querySnapshot.size === 0) {
          setIsEmpty(true);
          setCategoryEmpty(false);
        } else {
          setIsEmpty(false);
          itemFilter(categoryId);
        }
      })
      .catch((error) => console.log("Firestore error:", error));
  }, [categoryId]);

  return (
    <div className="bookList">
      {loading === true ? (
        <InfoMessage message="Loading books..." />
      ) : categoryEmpty === true ? (
        <InfoMessage message="There are no products on this category, try another one" />
      ) : isEmpty === true ? (
        <InfoMessage message="There was an error loading the books, try again later" />
      ) : (
        items.map((book) => (
          <Item
            key={book.id}
            id={book.id}
            pictureUrl={book.pictureUrl}
            title={book.title}
            author={book.author}
            description={book.smallDescription}
            price={book.price}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
