import React from "react";

const List = ({ list = [] }) => {
  return (
    <ul>
      {list.map((name, i) => {
        return <li key={i}>{name}</li>;
      })}
    </ul>
  );
};

export default List;
