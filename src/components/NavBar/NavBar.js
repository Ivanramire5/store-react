import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink to='/'><h1 className="h1Primario">RetroStore</h1></NavLink>
            <div className='d-grid gap-2 d-md-block'>
                <NavLink to='/category/Consolas de sobremesa' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Consolas de sobremesa</NavLink>
                <NavLink to='/category/Consolas portatiles' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Consolas portatiles</NavLink>
                <NavLink to='/category/Juegos retro' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>Juegos retro</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;