
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
const CartWidget = () => {
    const { cantidadTotal, total } = useContext(CartContext);

    const navigate = useNavigate()

    return (
        <div className='CartWidget' onClick={() => navigate('/cart')}>
            <h2> 🛒 </h2>
            {cantidadTotal} total ${total}
        </div>
    );
}

export default CartWidget