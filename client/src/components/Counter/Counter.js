import React, { useReducer } from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  stepChangeAction,
} from "../../actions/actionCreater";

const Counter = (props) => {
  const onChangStep = ({ target: { value } }) => {
    props.changeStep(Number(value));
  };


  return (
    <div>
      <h1>Counter</h1>
      {props.counter}
      <br />
      <input
        type="number"
        name="step"
        value={props.step}
        onChange={onChangStep}
      />
      <button onClick={props.incremenet}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(incrementAction()),
//     decrement: () => dispatch(decrementAction()),
//     changeStep:(value)=> dispatch(stepChangeAction())
//   };
// };

const mapDispatchToProps = {
  incremenet: incrementAction,
  decrement: decrementAction,
  changeStep: stepChangeAction,
};

const WrapperCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrapperCounter;
