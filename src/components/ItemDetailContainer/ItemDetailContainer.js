import { useState, useEffect } from 'react'
// import { getProductByID } from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { itemID } = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemID)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            }).catch(error => {
                console.log(error)
            })
        //getProductByID(itemID).then(response => {
        //    setProduct(response)
        //}).catch(error => {
        //    console.log(error)
        //})
    }, [itemID])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }

    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer