import React from 'react'
import './App.css';
import Counter from './components/Counter/Counter'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a la mejor tienda de videojuegos retro"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos ordenados por categoria'} />} />
            <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos ordenados por categoria'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
