import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const {
    item: { _id, body, deadline, status },
  } = props;
  console.log(deadline, 222, props.item);

  return (
    <li className={styles.liContainer}>
      <span>{body}</span>
      <span>{new Date(deadline).toISOString()}</span>
      <span>{status}</span>
      <button onClick={() => props.delCallback(_id)}>DELETE</button>
    </li>
  );
};

export default TodoItem;
