import './App.css';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';

function App() {
  const products = 'We are sorry, but currently we do not have any books to show you';
  return (
    <div className="App">
      <Header />
      <Products products={products} />
    </div>
  );
}

export default App;
