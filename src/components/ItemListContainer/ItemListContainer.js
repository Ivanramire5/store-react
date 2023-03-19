import { useEffect, useState } from 'react'
import { getItems, getItemsByCategory } from "../asyncMock"
import ItemList from './ItemList'
import ProductosTienda from '../ProductosTienda/ProductosTienda'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);
        const asyncFunction = categoryId ? getItemsByCategory : getItems

        asyncFunction(categoryId)
            .then(products => {
                setProductsState(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(productsState && productsState.length === 0) {
        return <h1>No hay productos</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={productsState}/>
        </div>
    )
} 

export default ItemListContainer