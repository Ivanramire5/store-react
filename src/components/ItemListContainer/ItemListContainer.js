import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
//import { getDocs, collection, query, where } from 'firebase/firestore'
//import { db } from '../../services/firebase/firebaseConfig'
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    //const [products, setProducts] = useState([])
    //const [loading, setLoading] = useState(true)
    //const [error, setError] = useState(false)
    //const [title, setTitle] = useState('')
    //const { categoryID } = useParams()

    //useEffect(() => {
        //const asyncFunction = categoryId ? getProductsByCategory : getProducts

        //asyncFunction(categoryId)
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
    //}, [categoryId])

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