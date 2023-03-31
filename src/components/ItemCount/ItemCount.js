import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const disminuir = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className='Contador'>
            <div className='Controles'>
                <button className='Button' onClick={disminuir}>-</button>
                <h4 className='Numero'>{cantidad}</h4>
                <button className='Button' onClick={incrementar}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount