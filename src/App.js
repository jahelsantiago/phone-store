import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Items from './features/shoppingItems/Items';
import NavBar from './features/NavBar/NavBar';
import ShoppingCart from './features/shoppingCart/shoppingCart';

function App() {
  return (
    <div>
      <NavBar/>
      <main className='relative'>
        <ShoppingCart/>
        <Items/>
      </main>
    </div>
  );
}

export default App;
