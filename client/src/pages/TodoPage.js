import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList/TodoList";
import { getTasks, createTask } from "../api/taskApi";
import TodoForm from "../components/TodoForm/TodoForm";


const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTasks()
      .then((result) => setTodos(result.data))
      .catch(console.error);
  }, []);

  const getNewTask = (data) => {
    createTask({
      status: "new",
      ...data,
    })
      .then(({ data: createTask }) => {
        const newTodo = [...todos, createTask];
        setTodos(newTodo);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm sendData={getNewTask} />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoPage;
