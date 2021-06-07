import React, { Fragment } from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export default function Home() {
  const products = "Welcome to our store - Find your dream book";

  return (
    <Fragment>
      <ItemListContainer products={products} />
    </Fragment>
  );
}
