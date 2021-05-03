import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";

export default function Home() {
  const products = "Welcome to our store - Find your dream book";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer products={products} />
    </div>
  );
}
