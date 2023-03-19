import { useState, useEffect } from "react"
import { getItemById } from "../../asyncMock"

const ItemDetail = ({ name, price, img, description }) => {
    return (
        <div>
            <h1>Detalle del producto</h1>
            <div className="itemDetail">
                <h2>{name}</h2>
                <img src={img} alt={name} style={{ width: 100, height: 100}}/>
                <h3>Precio: {price}</h3>
                <p>Descripcion: {description}</p>
            </div>
        </div>    
    )
}

export default ItemDetail