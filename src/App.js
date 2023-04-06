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

const App = () => {

  const props = {titulo: "Bienvenidos a RetroStore", subtitulo: "La mejor tienda de productos retro del pais"}

  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer props= {props} />} />
                <Route path='/category/:categoryID' element={<ItemListContainer props={props} />} />
                <Route path='/item/:itemID' element={<ItemDetailContainer />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;