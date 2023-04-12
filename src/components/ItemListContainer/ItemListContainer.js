import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import Item from '../Item/Item'

const ItemMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [title, setTitle] = useState('')
    const { categoryID } = useParams()

    useEffect(() => {
        const asyncFunction = categoryID ? getProductsByCategory : getProducts

        asyncFunction(categoryID)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryID])

    useEffect(() => {
        setTimeout(() => {
            setTitle(<h2 className='ArticulosTitulo'>Todos nuestros articulos</h2>)
        }, 2000)
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }
    
    return(
        <div>
            <h1>{greeting}</h1>
            <h2>{title}</h2>
            <ItemMemo products={products}/>
        </div>
    )
}

export default ItemListContainer