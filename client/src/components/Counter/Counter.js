import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "COUNTER_PLUS": {
      return {
        counter: state.counter + 1,
      };
    }
    case "COUNTER_MINUS": {
      return {
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  const increment = () => {
    const action = {
      type: "COUNTER_PLUS",
    };
    dispatch(action);
  };

  const decrement = () => {
    const action = {
      type: "COUNTER_MINUS",
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      {state.counter}
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
