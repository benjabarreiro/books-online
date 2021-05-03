import React, { useState } from "react";
import BooksData from '../../BooksData';
import "./ItemList.css";
import Item from "../Item/Item";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemList = () => {

  const {categoryId} = useParams();

  const [books, setBooks] = useState([]);

  const getBooks = (books) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(books);
      }, 2000)
    })
  }

  /* El condicional de la linea 23 no funciona dentro del useEffect, es decir, no me lo filtra sino que me devuelve todos los elementos */
  //useEffect(() => {}, [categoryId])
  if(!categoryId) {
    getBooks(BooksData).then(() => {
      setBooks(BooksData);
    })
  } else {
    let filter = BooksData.filter((book) => {
      return book.categoryId === categoryId
    });
    getBooks(filter).then(() => {
      setBooks(filter);
    })
  }

  return (
    <div className="bookList">
      {books.length === 0 ? (
        <p>Waiting for books to load</p>
      ) : (
        books.map((book) => <Item key={book.id} book={book} />)
      )}
    </div>
  );
};

export default ItemList;
