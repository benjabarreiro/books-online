import React from "react";
import { Link } from "react-router-dom";
import ItemStructure from "../ItemStructure/ItemStructure";

const Item = ({ id, pictureUrl, title, author, description, price }) => {
  return (
    <ItemStructure
      id={id}
      pictureUrl={pictureUrl}
      title={title}
      author={author}
      description={description}
    >
      <span>Price: ${price}</span>
      <Link className="link" to={`/detail/${id}`}>
        <span>More information</span>
      </Link>
    </ItemStructure>
  );
};

export default Item;
