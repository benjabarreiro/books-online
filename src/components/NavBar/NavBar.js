import React from "react";
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
  const {itemCount} = useContext(CartContext);
  const ecommerceName = "Books Online";

  return (
    <header className="header">
      <p className="logo">
        <Link id="logo" to="/">
          {ecommerceName}
        </Link>
      </p>
      <nav className="navigation">
        <DropdownButton id="dropdown-item-button" title="Categories">
          <Dropdown.Item id="dropdown-content" as="button">
            <Link id="dropdown-link" to="/category/Fantasy">
              Fantasy
            </Link>
          </Dropdown.Item>
          <Dropdown.Item id="dropdown-content" as="button">
            <Link id="dropdown-link" to="/category/Sci-Fi">
              Sci-Fi
            </Link>
          </Dropdown.Item>
        </DropdownButton>
        <FontAwesomeIcon className="link" icon={faShoppingCart} /> ({itemCount()})
        <DropdownButton id="dropdown-item-button" title={<FontAwesomeIcon icon={faUser} />}>
          <Dropdown.Item id="dropdown-content"><Link id="dropdown-link" to="/register">
              Register
            </Link></Dropdown.Item>
          <Dropdown.Item id="dropdown-content"><Link id="dropdown-link" to="/login">
              Log in
            </Link></Dropdown.Item>
        </DropdownButton>
      </nav>
    </header>
  );
};
