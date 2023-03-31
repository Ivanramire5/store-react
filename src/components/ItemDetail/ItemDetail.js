import { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useNotification } from '../../notification/NotificationService';


const ItemDetail = ({ id, name, img, price, description, stock }) => {
    const [cantidad, setCantidad] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (cantidad) => {
        const productoParaAgregar = {
            id, name, price, cantidad
        }
        setCantidad(cantidad);
        addItem(productoParaAgregar)
        setNotification('error', `Se agrego correctamente ${cantidad} ${name}`);
    }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImagen"/>
            </picture>
            <section>
                <p className="Informacion">
                    Descripcion: {description}
                </p>
                <p className="Informacion">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    cantidad > 0 ? (
                        <Link to='/cart'>Finalizar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail