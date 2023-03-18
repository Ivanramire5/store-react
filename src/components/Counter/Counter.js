import { useState } from "react"
import Button from '../Button/Button'

const Counter = (props) => {
    const [count, setCount] = useState(props.initial)
    const [message, setMessage] = useState('')

    const decrecimiento = () => {
        setMessage('')
        if(count > 1) {
            setCount(count - 1)
        } else {
            setMessage("La compra minima es de 1 producto")
        }
    }
    const incremento = () => {
        setMessage('')
        if(count < props.stock) {
            setCount(count + 1)
        } else {
            setMessage("No puede agregar mas productos al carrito")
        }
    }
    const reset = () => {
        setCount(props.initial)
        setMessage('')
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{count}</h2>
            <h3>Cantidad disponible: {props.stock}</h3>
            <Button label="restar" handleClick={decrecimiento}/>
            <Button label="sumar" handleClick={incremento}/>
            <Button label="reiniciar" handleClick={reset}/>
            <h2 className="mensajeContador">{message}</h2>
        </div>
    )
}

export default Counter;