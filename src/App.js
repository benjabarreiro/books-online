import './App.css';
import { Header } from './components/Header/Header';
import { BookListContainer } from './components/BookListContainer/BookListContainer';

function App() {
  const products = 'Welcome to our store';
  return (
    <div className="App">
      <Header />
      <BookListContainer products={products} />
    </div>
  );
}

export default App;
