import Item from "../Item/Item"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
console.log('Item',Item)
const ItemList = ({ items }) => {
    return (
        <div>
            <h1>Hola mundo</h1>
        </div>
    )
}

export default ItemList

//{
//    items.map(item => {
//       return <Item key={item.id} {...item}/>
//   })
//}
//</div>