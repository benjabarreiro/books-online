import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { NavBar } from "./components/NavBar/NavBar";
import Success from "./pages/Success";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:categoryId" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Route path="/success" component={Success} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
