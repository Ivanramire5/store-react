import {Link} from "react-router-dom"


const Item = ({id, name, price, category}) => {
    return (
        <div className="ItemCajas">
            <h2>{name}</h2>
            <h3>${price}</h3>
            <h4>{category}</h4>
            <Link to={`/item/${id}`}><button>Ver producto</button></Link>
        </div>
    )
}

export default Item
