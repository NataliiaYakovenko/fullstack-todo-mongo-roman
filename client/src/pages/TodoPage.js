import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
  logOutRequest,
} from "../actions/actionCreater";
import TodoForm from "../components/TodoForm/TodoForm";

const TodoPage = (props) => {
  const [todos, setTodos] = useState([]);

  console.log(props.user, 222);
  useEffect(() => {
    if (props.user) {
      console.log(111);
      props.getTasksRequest();
    }
  }, [props.user]);

  const getNewTask = (data) => {
    props.createTaskRequest({
      status: "new",
      ...data,
    });
  };

  const logOutHandler = () => {
    props.logOutRequest();
  };

  const delTask = (id) => {
    props.deleteTaskRequest(id);
  };
  console.log(props.tasks);
  return (
    <>
      <button onClick={logOutHandler}>Log out</button>
      <h1>Todo List</h1>
      <TodoForm sendData={getNewTask} />
      <TodoList todos={props.tasks} delCallback={delTask} />
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
  logOutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
