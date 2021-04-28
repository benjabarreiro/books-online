import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

export default function ItemDetail(props) {
    return (
        <div>
            {props.book.id === 4 ? (
                <div className="item-detail">
                    <h1 className="detail-tittle">Detalle del producto: {props.book.title} </h1>
                    <div className="second-container">
                        <span className="detail-img-container">
                            <img className="detail-img" src={props.book.pictureUrl} alt=""/>
                        </span>
                        <div className="detail-info-container">
                            <span className="detail-description">{props.book.description} </span>
                        </div>
                        <div className="price-Add">
                            <span className="price-detail">Price: ${props.book.price}</span>
                            <ItemCount addCart="Add to cart" stock={5} initial={1} />
                        </div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}
