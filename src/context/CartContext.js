import { createContext, useState } from 'react';
import  { useNotification } from '../notification/NotificationService';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const { setNotification } = useNotification()

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            const updateCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    let nuevaCantidad = prod.quantity + productToAdd.quantity
                    if(nuevaCantidad > prod.stock) {
                        nuevaCantidad = prod.stock
                        setNotification('success', `El stock disponible es de ${prod.stock}`, 1)
                    } else {
                        setNotification('success',`Se agrego correctamente ${productToAdd.quantity} ${productToAdd.name}`, 1)
                    }
                    return { ...prod, quantity: nuevaCantidad }
                } else {
                    return prod
                }
            })
            setCart(updateCart)
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }
    const getTotalCantidad = () => {
        let totalCantidad = 0
        cart.forEach(prod => {
            totalCantidad += prod.cantidad
        })
        return totalCantidad
    }
    const totalCantidad = getTotalCantidad()

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.cantidad * prod.price
        })
        return total
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalCantidad, total}}>
        { children }
        </CartContext.Provider>
    )
}