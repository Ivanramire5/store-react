import Item from "../Item/Item"

const ProductosTienda = ({ items }) => {
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