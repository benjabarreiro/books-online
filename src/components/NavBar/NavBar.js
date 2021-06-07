import React, { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const NavBar = () => {
  const { itemCount, cart, setOrderId } = useContext(CartContext);
  const ecommerceName = "Online Books";

  const resetId = () => {
    setOrderId();
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link className="link-color logo-link" onClick={resetId} to="/">
          <img
            src="https://www.graphicsprings.com/filestorage/stencils/2f3bdb9733c4a68659dc2900a7595fea.png?width=45&height=45"
            alt=""
          />
          <p className="logo">{ecommerceName}</p>
        </Link>
      </div>
      <nav className="navigation">
        <DropdownButton id="dropdown-item-button" title="Categories">
          <Dropdown.Item id="dropdown-content" as="button">
            <Link id="dropdown-link" onClick={resetId} to="/category/fantasy">
              Fantasy
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="dropdown-content" as="button">
            <Link id="dropdown-link" onClick={resetId} to="/category/sci-fi">
              Sci-Fi
            </Link>
          </Dropdown.Item>
        </DropdownButton>
        {cart.length >= 1 ? (
          <Fragment>
            <Link className="link-color" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>({itemCount()})</span>
            </Link>
          </Fragment>
        ) : (
          ""
        )}
        <DropdownButton
          id="dropdown-item-button"
          title={<FontAwesomeIcon icon={faUser} />}
        >
          <Dropdown.Item id="dropdown-content">
            <Link id="dropdown-link">
              Register
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="dropdown-content">
            <Link id="dropdown-link">
              Log in
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </nav>
    </header>
  );
};
