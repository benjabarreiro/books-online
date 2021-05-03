import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category/:categoryId" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/cart/:id" />
        <Route path="/contact" />
        <Route path="/about-us" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
