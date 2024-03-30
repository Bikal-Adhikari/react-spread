import React, { useState } from "react";

const initialState = "";
const Form = ({ getItems }) => {
  const [name, setName] = useState(initialState);
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getItems(name);
    setName(initialState);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={name} />
      <button type="submit">
        <span>Add</span>
      </button>
    </form>
  );
};

export default Form;
