import React from 'react';
import './Products.css';
import ItemCount from '../ItemCount/ItemCount.js';

export const Products = ({ products }) => {
    const bookName = "A World of Ice and Fire";
    return (
        <div className="products-container">
            <h1 className="greeting">{products}</h1>
            <ItemCount addCart="Add to cart" bookName={bookName} stock={5} initial={1} />
        </div>
    );
}
