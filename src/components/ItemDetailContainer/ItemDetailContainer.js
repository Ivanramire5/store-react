import { useEffect, useState } from "react";
import { getItemById } from "../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const { productId } = useParams()
  
  useEffect(() => {
    getItemById(productId)
    .then(item => {
      setItem(item)
    })
  }, [productId])
  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...item} />
    </div>
  )
}

export default ItemDetailContainer