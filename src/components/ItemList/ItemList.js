import Item from "../Item/Item"

const ItemList = ({ item }) => {
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

export default ItemList