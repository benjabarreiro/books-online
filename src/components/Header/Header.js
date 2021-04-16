import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const ecommerceName = 'Books Online';

    return (
        <header className="row header">
            <p className="logo">{ecommerceName}</p>
            <nav className="navigation">
                <ul className="links">
                    <li className="link"><a className="a-tag" href="#">Log In</a></li>
                    <li className="link"><a className="a-tag" href="#">Books/E-books</a></li>
                    <li className="link"><a className="a-tag" href="#">Contact</a></li>
                    <li className="link"><a className="a-tag" href="#">About us</a></li>

                    <a className="a-tag" href="#"><FontAwesomeIcon className="link" icon={faShoppingCart} /></a>
                </ul>
            </nav>
        </header>
    );
}