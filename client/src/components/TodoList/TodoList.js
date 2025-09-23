import React from "react";

const TodoList = (props) => {
  return (
    <ol>
      {props.todos.map((td)=>{
         return <li>{td}</li>
      })}
    </ol>
  );
};

export default TodoList;
