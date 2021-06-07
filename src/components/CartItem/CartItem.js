import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import ItemStructure from "../ItemStructure/ItemStructure";

export default function CartItem({
  quantity,
  stock,
  title,
  author,
  id,
  price,
  pictureUrl,
  description,
  book,
}) {
  const [qty, setQty] = useState(quantity);

  const { removeItem, updateItem, increase, decrease } = useContext(
    CartContext
  );

  const onUpdate = () => {
    if (stock !== 0) {
      updateItem(book, qty);
      setQty(qty);
    }
  };

  return (
    <ItemStructure
      id={id}
      pictureUrl={pictureUrl}
      title={title}
      author={author}
      description={description}
    >
      <h4>In Stock: {stock}</h4>
      <ItemCount
        stock={stock}
        onAdd={onUpdate}
        increase={() => increase(stock, qty, setQty)}
        decrease={() => decrease(stock, qty, setQty)}
        add={qty}
        content="Change quantity"
      />
      <h4>Unit Price: ${price}</h4>
      <h4>
        Selected Quantity Price: ${price * quantity}
      </h4>
      <Button func={() => removeItem(id)} content="Remove Item" />
    </ItemStructure>
  );
}
