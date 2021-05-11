import React, { useState, useEffect } from "react";
import BooksData from '../../BooksData';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [bookDetail, setBookDetail] = useState([]);

  const { id } = useParams();

  const getDetail = (detail) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(detail);
      }, 2000);
    })
  }

  useEffect(() => {
    let filterId = BooksData.filter((book) => book.id === id);
    getDetail(filterId)
    .then(() => {
      setBookDetail(filterId);
    });
  }, [id]);

  return (
    <div className="detail-container">
      {bookDetail.length === 0 ? (
        <p>Loading Book Detail...</p>
      ) : (
        bookDetail.map((book) => <ItemDetail key={book.id} price="Price: $" book={book} />)
      )}
    </div>
  );
};

export default ItemDetailContainer;
