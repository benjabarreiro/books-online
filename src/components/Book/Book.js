import React from 'react';
import './Book.css';

const Book = (props) => {
    return (
        <div className="book">
            <img className="book-img" src={props.book.pictureUrl} alt=""/>
            <div className="book-background">
                <h3 className="book-title-author">{props.book.title} by {props.book.author}</h3>
                <p className="description">{props.book.smallDescription}</p>
                <div className="book-bottom-container">
                    <span className="book-price-info">${props.book.price}</span>
                    <span className="book-price-info">More information</span>
                </div>
            </div>
        </div>
    )
}

export default Book