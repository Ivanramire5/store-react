
import './App.css';
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/NavBar/CartWidget/CartWidget'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la mejor tienda de videojuegos retro"} />
    </div>
  );
}

export default App;
