import React from "react";
import "./ItemStructure.css";
import { Link } from "react-router-dom";

export default function ItemStructure({
  id,
  pictureUrl,
  title,
  author,
  description,
  children,
}) {
  return (
    <div key={id} className="book">
      <Link className="img-container" to={`/detail/${id}`}>
        <img className="book-img" src={pictureUrl} alt="" />
      </Link>
      <div className="book-background">
        <h3 className="book-title-author">
          {title} by {author}
        </h3>
        <p className="description">{description}</p>
        <div className="book-bottom-container">{children}</div>
      </div>
    </div>
  );
}
