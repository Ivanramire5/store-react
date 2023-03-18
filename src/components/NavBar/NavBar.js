import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1 className="h1Primario">RetroStore</h1>
            <div>
                <button className="divBotones">Consolas 8/16/32 bits</button>
                <button className="divBotones">Consolas portatiles</button>
                <button className="divBotones">Juegos retro</button>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;