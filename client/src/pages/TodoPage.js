import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import QRCode from "react-qr-code";
import { connect } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
  logOutRequest,
} from "../actions/actionCreater";
import TodoForm from "../components/TodoForm/TodoForm";
import CONSTANTS from "../constants";

Modal.setAppElement("#root");

const TodoPage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const generateLinl = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return `http://${CONSTANTS.IPV4_ADDRESS}:3000/authByQRCode/?refresh=${refreshToken}`;
  };
  // http://192.168.43.231:3000/authByQRCode/?refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQ2NTgwMTZlYTBlNDEyMGU5ZGMwOWUiLCJlbWFpbCI6InJvbGxAZ21haWwuY29tIiwiaWF0IjoxNzYyNDM5ODEzLCJleHAiOjE3NjI0NDM0MTN9.dO13XEqwSQUrrwwK9AcdZ0AInuL0dpbqdFYLs3yl94Y

  return (
    <>
      <button onClick={logOutHandler}>Log out</button>
      <h1>Todo List</h1>
      <button onClick={() => setIsModalOpen(true)}>Generate QR code</button>
      <TodoForm sendData={getNewTask} />
      <TodoList todos={props.tasks} delCallback={delTask} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h1>Scan this QR code</h1>

        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 100,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={generateLinl()}
            viewBox={`0 0 256 256`}
          />
        </div>

        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
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
