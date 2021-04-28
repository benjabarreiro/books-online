import React from 'react';
import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const ecommerceName = 'Books Online';

    return (
        <header className="row header">
            <p className="logo">{ecommerceName}</p>
            <nav className="navigation">
                <ul className="links">
                    <li className="link">Log In</li>
                    <li className="link">Books/E-books</li>
                    <li className="link">Contact</li>
                    <li className="link">About us</li>

                    <FontAwesomeIcon className="link" icon={faShoppingCart} />
                </ul>
            </nav>
        </header>
    );
}