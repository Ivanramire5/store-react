import { useEffect, useState } from 'react'

const ItemList = ({ items }) => {
    return (
        <div className="divProductosTienda">
            {
                item.map(item => {
                    return <Item key={item.id} {...item}/>
                })
            }
        </div>
    )
}

export default ProductosTienda