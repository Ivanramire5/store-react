import { getItemById } from '../asyncMock';
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemListContainer/ItemListContainer';

function ItemDetailContainer({ itemId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getItemById(itemId)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

    return (
        <div>
            {product && (
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <img src={product.img} alt={product.name} />
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            )}
        </div>
    );
}

export default ItemDetailContainer;
