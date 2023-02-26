import { useState } from 'react'

import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage'

function App() {
  const [cartItems, setCartItems] = useState();

  function removeObjectWithId(arr, id) {
    return arr.filter((obj) => obj.id !== id);
  }

  const addItemToCart = (item) => {
    const items = [];
    if(cartItems) items.push(...cartItems);
    const foundElement = items.find(element => element.id === item.id)
    if (foundElement) {
      foundElement.amount++;
    } else {
      item.amount = 1;
      items.push(item);
    }
    setCartItems(items);
  }

  const deleteItemFromCart = (item) => {
    const items = [];
    if (cartItems) items.push(...cartItems);
    setCartItems(removeObjectWithId(items, item.id));
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<CatalogPage addItemToCart={addItemToCart}/>} />
        <Route path='/cart' element={<CartPage items={cartItems} deleteItemFromCart={deleteItemFromCart} />} />
      </Routes>
    </div>
  );
}

export default App;
