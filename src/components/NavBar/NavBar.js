import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
    const [ categories, setCategories ] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const categoriesRef = collection(db, 'categories')
        getDocs(categoriesRef)
        .then(snapshot => {
            const categoriesAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setCategories(categoriesAdapted)
        })
    }, [])
    return (
        <nav className="NavBar">
            <NavLink to='/'><h1 className="h1Primario">RetroStore</h1></NavLink>
            <div className='d-grid gap-2 d-md-block'>
                {
                    categories.map(cat => {
                        return (
                            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>{cat.label}</NavLink>
                        )
                    })
                }
                
            </div>
            {
                user ? (
                    <CartWidget />
                ) : (
                    <NavLink to='/login' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Login</NavLink>
                )
            }
            
        </nav>
    )
};

export default NavBar;