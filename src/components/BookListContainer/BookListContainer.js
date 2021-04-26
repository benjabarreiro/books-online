import React from 'react';
import './BookListContainer.css';
import BookCount from '../BookCount/BookCount.js';
import BookList from '../BookList/BookList';

export const BookListContainer = ({ products }) => {
    const bookName = "A World of Ice and Fire";
    return (
        <div className="products-container">
            <h1 className="greeting">{products}</h1>
            <BookList />
            <BookCount addCart="Add to cart" bookName={bookName} stock={5} initial={1} />
        </div>
    );
}
