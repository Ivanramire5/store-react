import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {
    return (
        <div className="ItemCajas">
            <h2>{name}</h2>
            <h3>precio: {price}</h3>
            <Link to={`/item/${id}`} style={{ background: '#F6F1F1'}}>Ver producto</Link>
        </div>
    )
}

export default Item