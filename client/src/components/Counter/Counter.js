import React, { useReducer } from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../../actions/actionCreater";

const Counter = (props) => {
  // const increment = () => {
  //   props.dispatch(createActionIncrement());
  // };

  // const decrement = () => {
  //   props.dispatch(createActionDecrement());
  // };

  console.log(props);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={props.incremenet}>+</button>
      {props.counter}
      <button onClick={props.decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(incrementAction()),
//     decrement: () => dispatch(decrementAction()),
//   };
// };

const mapDispatchToProps = {
  incremenet: incrementAction,
  decrement: decrementAction,
};

const WrapperCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrapperCounter;
