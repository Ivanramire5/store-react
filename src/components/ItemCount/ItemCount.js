import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const incrementar = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const disminuir = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Contador'>
            <div className='Controles'>
                <button className='Button' onClick={disminuir}>-</button>
                <h4 className='Numero'>{quantity}</h4>
                <button className='Button' onClick={incrementar}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => {
                    setQuantity(initial)
                    onAdd(quantity)
                }}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount