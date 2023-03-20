import Item from "../Item/Item"

const ItemList = ({ items }) => {
    return (
        <div className="divProductosTienda">
            {
                items.map(item => {
                    return <Item key={item.id} {...item}/>
                })
            }
        </div>
    )
}

export default ItemList