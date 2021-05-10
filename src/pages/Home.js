import React from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export default function Home() {
  const products = "Welcome to our store - Find your dream book";

  return (
    <div className="App">
      <ItemListContainer products={products} />
    </div>
  );
}
