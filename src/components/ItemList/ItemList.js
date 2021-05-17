import React, { useState, useEffect, Fragment } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";

const ItemList = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [categoryEmpty, setCategoryEmpty] = useState(false);

  useEffect(() => {
    const db = getFireStore();
    const items = db.collection("items");
    items
      .get()
      .then((querySnapshot) => {
        const itemFilter = () => {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          let filterCategory = data.filter(
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
          setIsEmpty(false);
        } else {
          itemFilter(categoryId);
        }
      })
      .catch((error) => console.log("Firestore error:", error));
  }, [categoryId]);

  return (
    <Fragment>
      <div className="bookList">
        {categoryEmpty === true ? (
          <p>There are no products on this category, try another one</p>
        ) : (
          items.map((book) => <Item key={book.id} book={book} />)
        )}
      </div>
    </Fragment>
  );
};

export default ItemList;
