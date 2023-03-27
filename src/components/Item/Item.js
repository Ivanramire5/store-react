import {Link} from "react-router-dom"


const Item = ({id, name, price, img, category}) => {
    return (
        <div className="ItemCajas">
            <h2 className="ItemTitulo">{name}</h2>
            <div className="ImagenItem">
                <img src={img} alt={'Producto'}/>
            </div>
            <h3 className="ItemPrecio">${price}</h3>
            <h4 className="ItemH4">{category}</h4>
            <Link to={`/item/${id}`}><button>Ver producto</button></Link>
        </div>
    )
}

export default Item
