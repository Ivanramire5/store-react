import React from 'react'
import './App.css';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Notification, NotificationProvider } from './notification/NotificationService';
import Login from './components/Login/Login'
import { AuthProvider } from './context/AuthContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {

  const props = {titulo: "Bienvenidos a RetroStore", subtitulo: "La mejor tienda de productos retro del pais"}

  return (
    <div className="App">
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <AuthProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer props= {props} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer props={props} />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;