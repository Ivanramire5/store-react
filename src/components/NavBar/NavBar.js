import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
// import { useEffect, useState } from 'react';
// import { collection, getDocs, query, orderBy } from 'firebase/firestore'
// import { db } from '../../services/firebase/firebaseConfig'
import { useAsync } from '../../hooks/useAsync';
import { getCategories } from '../../services/firebase/firestore/categories';

const NavBar = () => {
    // const [ categories, setCategories ] = useState([])
    // const { user } = useAuth()

    // useEffect(() => {
    //     const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
    //     getDocs(categoriesRef)
    //     .then(snapshot => {
    //         const categoriesAdapted = snapshot.docs.map(doc => {
    //             const data = doc.data()
    //             return { id: doc.id, ...data }
    //         })
    //         setCategories(categoriesAdapted)
    //     }).catch(error => {
    //         console.log(error)
    //     }) 
    // }, [])
    const { categoriesId } = useParams ()

    const getCategoriesWithId = () => getCategories (categoriesId)

    const { data: categories, error, loading} = useAsync(getCategoriesWithId, [categoriesId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }
    return (
        <nav className="NavBar">
            <NavLink to='/'><h1 className="h1Primario">RetroStore</h1></NavLink>
            <div className='BotonesNavbar'>
                {
                    categories.map(cat => {
                        return (
                            <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}>{cat.label}</NavLink>
                        )
                    })
                }
                 <CartWidget/>
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