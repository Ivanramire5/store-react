import { useEffect, useState } from 'react'
import { getItems, getItemsByCategory } from "../../asyncMock"
import ProductosTienda from '../ProductosTienda/ProductosTienda'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);ç
        const asyncFunction = categoryId ? getItemsByCategory : getItems

        asyncFunction(categoryId)
            .then(products => {
                setItemsState(products)
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
} 