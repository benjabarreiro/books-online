import React from 'react';
import './Products.css';

export const Products = ({ products }) => {
    return (
        <div className="products-container">
            <h1 className="greeting">{products}</h1>
        </div>
    );
}
