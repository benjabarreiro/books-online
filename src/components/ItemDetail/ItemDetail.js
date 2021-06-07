import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemStructure from "../ItemStructure/ItemStructure";

const ItemDetail = ({
  stock,
  id,
  title,
  author,
  pictureUrl,
  description,
  price,
  book,
}) => {
  const [add, setAdd] = useState(1);
  const [finish, setFinish] = useState(0);

  const { addItem, increase, decrease } = useContext(CartContext);

  const onAdd = () => {
    if (stock !== 0) {
      addItem(book, add);
      setAdd(1);
      setFinish(add);
    }
  };

  return (
    <div className="bookList">
      <ItemStructure
        id={id}
        pictureUrl={pictureUrl}
        title={title}
        author={author}
        description={description}
      >
        <span>Price: ${price}</span>
        {finish === 0 ? (
          <ItemCount
            stock={stock}
            onAdd={onAdd}
            increase={() => increase(stock, add, setAdd)}
            decrease={() => decrease(stock, add, setAdd)}
            add={add}
            content="Add to Cart"
          />
        ) : (
          <Link to="/cart">
            <Button content="Finish my purchase" />
          </Link>
        )}
      </ItemStructure>
    </div>
  );
};

export default ItemDetail;
