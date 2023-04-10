
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { cantidadTotal, total } = useContext(CartContext);

    return (
        <div to='/cart' className='CartWidget'>
            <h2> 🛒 </h2>
            {cantidadTotal} total ${total}
        </div>
    );
}

export default CartWidget