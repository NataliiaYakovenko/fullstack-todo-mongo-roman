import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList/TodoList";
import { useNavigate } from "react-router-dom";
import { getTasks, createTask } from "../api/taskApi";
import TodoForm from "../components/TodoForm/TodoForm";

const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user) {
      return navigate("/");
    }

    getTasks(props.user._id)
      .then((result) => setTodos(result.data))
      .catch((error) => console.error(error));
  }, []);

  const getNewTask = (data) => {
    createTask({
      authorId: props.user._id, 
      status: "new",
      ...data,
    })
    .then(({data:createTask})=>{
      const newTodo=[...todos,createTask]
      setTodos(newTodo)
    })
    .catch(error => console.error(error))
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
