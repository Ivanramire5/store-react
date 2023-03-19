import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1 className="h1Primario">RetroStore</h1>
            <div>
                <NavLink to='/category/consolas' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Consolas 8/16/32 bits</NavLink>
                <NavLink to='/category/portatiles' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Consolas portatiles</NavLink>
                <NavLink to='/category/juegos' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Juegos retro</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;