import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
//import { getDocs, collection, query, where } from 'firebase/firestore'
//import { db } from '../../services/firebase/firebaseConfig'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import Item from '../Item/Item'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const { categoryID } = useParams()

    const getProductsWithCategory = () => getProducts(categoryID)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryID])

    //const [products, setProducts] = useState([])
    //const [loading, setLoading] = useState(true)
    //const [error, setError] = useState(false)
    //const [title, setTitle] = useState('')
    //const { categoryID } = useParams()

    //useEffect(() => {
        //const asyncFunction = categoryID ? getProductsByCategory : getProducts

        //asyncFunction(categoryID)
            //.then(products => {
                //setProducts(products)
            //})
            //.catch(error => {
            //    console.log(error)
            //    setError(true)
            //})
            //.finally(() => {
            //    setLoading(false)
            //})
    //}, [categoryID])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }
    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemListMemo products={products}/>
        </div>
    )
}

export default ItemListContainer