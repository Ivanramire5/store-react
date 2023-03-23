const ItemDetail = ({ name, img, price, description, stock }) => {
    return (
        <div>
            <h2>{name} </h2>
            <img src={img} alt={name} />
            <p> Precio: ${price} </p>
            <p> Descripcion: {description} </p>
        </div>
    )
}

export default ItemDetail