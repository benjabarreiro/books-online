import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = ({ products }) => {
    return (
        <div className="products-container">
            <h1 className="greeting">{products}</h1>
            <ItemList />
        </div>
    );
}
