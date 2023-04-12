import Cart from "../Cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from "firebase/firestore"
import { useNotification } from "../../notification/NotificationService"
import { useNavigate } from "react-router-dom"
const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const { setNotification } = useNotification()
    const navigate = useNavigate()

    const handleConfirm = async (userData) => {
        try{
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: '',
                    phone: '',
                    address: ''
                },
                items: cart,
                total: total
            }
            const ids = cart.map(prod => prod.id)
            //Promise.resolve('dato').then(res => console.log(res))
            //const res = await Promise.resolve('dato')
            const productRef = query(collection(db, 'products'), where(documentId(), 'in, ids'))
            const productsAddFromFirestore = await getDocs(productRef)
            
            console.log(productsAddFromFirestore)

            const { docs } = productsAddFromFirestore

            const batch = writeBatch(db)
            const fueraDeStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb
                const productoAgregadoAlCarrito = cart.find(prod === doc.id)
                const prodCantidad = productoAgregadoAlCarrito?.cantidad

                if(stockDb >= prodCantidad) {
                    batch.update(doc.ref, { stock: stockDb - prodCantidad })
                } else {
                    fueraDeStock.push({ id: doc, ...dataDoc })
                }
            })

            if(fueraDeStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 4000)
            } else {
                setNotification('error', 'hay productos que no tienen stock en este momento')
            }
        } catch (error) {
            setNotification('error', 'Hubo un error generando la comora')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando tu pedido</h1>
    }
    return (
        <div>
            <h1 className="carritoFinal">Checkout</h1>
            {/* <Form onConfirm={handleConfirm}/> */}
            { orderId ? <h2>El id de su orden es: {orderId}</h2> : <button onClick={handleConfirm}>generar pedido</button> }
            <button className="botonCompra" onClick={handleConfirm}>Generar pedido</button>
        </div>
        
    )
}

export default Checkout