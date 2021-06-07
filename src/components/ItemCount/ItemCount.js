import React, { Fragment } from "react";
import "./ItemCount.css";
import Button from "../Button/Button";
import InfoMessage from "../InfoMessage/InfoMessage";

export default function ItemCount({
  decrease,
  stock,
  add,
  increase,
  onAdd,
  content,
}) {
  return (
    <Fragment>
      {stock !== 0 ? (
        <div className="itemCount">
          <div className="quantityContainer">
            <span className="button-pointer" onClick={decrease}>-</span>
            <span>{add}</span>
            <span className="button-pointer" onClick={increase}>+</span>
          </div>
          <Button func={onAdd} content={content} />
        </div>
      ) : (
        <InfoMessage message="No hay stock" />
      )}
    </Fragment>
  );
}
