import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

export default function Detail() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}
