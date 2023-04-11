import Cart from "../Cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
    const { cart, total } = useContext(CartContext)
    const handleConfirm = (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total: total
        }
        console.log(objOrder)
    }
    return (
        <div>
            <h1 className="carritoFinal">Checkout</h1>
            {/* <Form onConfirm={handleConfirm}/> */}
            <button className="botonCompra" onClick={handleConfirm}>Generar pedido</button>
        </div>
        
    )
}

export default Checkout