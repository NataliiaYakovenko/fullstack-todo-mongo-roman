import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList/TodoList";
import { getTasks, createTask, deleteTask } from "../api/taskApi";
import TodoForm from "../components/TodoForm/TodoForm";

const TodoPage = () => {
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

  const delTask = (id) => {
    deleteTask(id)
      .then(({ data: deleteTask }) => {
        const filteredArray = todos.filter((td) => {
          if (td._id === deleteTask._id) {
            return false;
          } else {
            return true;
          }
        });

        setTodos(filteredArray);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm sendData={getNewTask} />
      <TodoList todos={todos} delCallback={delTask} />
    </>
  );
};

export default TodoPage;
