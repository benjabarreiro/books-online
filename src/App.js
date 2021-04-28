import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const products = 'Welcome to our store';
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer products={products} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
