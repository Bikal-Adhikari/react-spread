import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const [list, setList] = useState([]);
  const getItems = (name) => {
    setList([...list, name]);
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Form getItems={getItems} />
      </div>
      <div>
        <List list={list} />
      </div>
    </div>
  );
}

export default App;
