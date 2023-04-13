import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore' // Corregir la importación de doc
import { useNotification } from '../../notification/NotificationService'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
const [orderId, setOrderId] = useState('')
const [loading, setLoading] = useState(false)
const { cart, total, clearCart } = useContext(CartContext)

const { setNotification } = useNotification()

const navigate = useNavigate()

const handleConfirm = async (userData) => {
    try {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'Ivan',
                phone: '183943236',
                address: 'Calle falsa 123'
            },
        items: cart,
        total: total
        }

    const ids = cart.map(prod => prod.id)

    const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

    const productsAddedFromFirestore = await getDocs(productRef)

    const { docs } = productsAddedFromFirestore

    const batch = writeBatch(db)
    const outOfStock = []

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productoAgregadoAlCarrito = cart.find(prod => prod.id === doc.id)
        const prodCantidad = productoAgregadoAlCarrito?.cantidad

        if(stockDb >= prodCantidad) {
            batch.update(doc.ref, { stock: stockDb - prodCantidad})
        } else {
            outOfStock.push({ id: doc, ...dataDoc})
        }
    })

    if(outOfStock.length === 0) {
        batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)
        clearCart()
        setOrderId(orderAdded.id)

    } else {
        setNotification('error', 'Hay productos que no tienen stock disponible')
    }
    } catch (error) {
        setNotification('error', 'Hubo un error generando la orden')
    } finally {
        setLoading(false)
    }
}

    if(loading) {
        return <h1>Se esta generando su pedido...</h1>
    }

return (
<div>
<h1>Checkout</h1>
{ orderId 
? <div>
  <h2>El id de su pedido es: {orderId}</h2> 
  <button onClick={()=>navigate('/')}>Volver</button>
   </div>
   : <button onClick={handleConfirm}>Generar orden</button> }
</div>
)
}

export default Checkout