import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  };

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Form onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
