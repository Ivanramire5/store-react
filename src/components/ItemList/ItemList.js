import React, { useEffect, useState } from 'react';
import { getItems } from "../asyncMock"
import Item from "../Item/Item"


const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) =>
        <Item key={item.id}
          id={item.id}
          name={item.name}
          img = {item.img}
          price={item.price}
          />
        )}
    </div>
  )
};
export default ItemList