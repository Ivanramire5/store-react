import React, { useEffect, useState } from 'react';
import { getItems } from "../asyncMock"

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <div>
            <img src={item.img} alt={item.name} />
          </div>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <p>Stock: {item.stock}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
        const fetchedItems = await getItems();
        setItems(fetchedItems);
    };
    fetchItems();
  }, []);

  return (
    <div>
        <h1>Todos nuestros productos</h1>
        <ItemList items={items} />
    </div>
    );
};

export default App;