import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd.id])
        } else {
            console.log("El producto ya fue añadido")
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getCantidadTotal = () => {
        let cantidadTotal = 0;
        cart.forEach(prod => {
            cantidadTotal += prod.cantidad;
        })
        return cantidadTotal
    }
    const cantidadTotal = getCantidadTotal()

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, cantidadTotal}}>
            { children }
        </CartContext.Provider>
    )
}