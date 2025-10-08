import React, { useReducer } from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  stepChangeAction,
  toggleThemeActions,
} from "../../actions/actionCreater";

const Counter = (props) => {
  console.log(props);

  const onChangStep = ({ target: { value } }) => {
    props.changeStep(Number(value));
  };

  const toggleTheme = () => {
    props.toggleTheme();
  };

  return (
    <div
      style={{ backgroundColor: props.theme.isLightMode ? "yellow" : "blue" }}
    >
      <h1>Counter</h1>
      {props.counter.counter}
      <br />
      <input
        type="number"
        name="step"
        value={props.counter.step}
        onChange={onChangStep}
      />
      <button onClick={props.incremenet}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={toggleTheme}>Toggle theme</button>
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
//     toggleTheme: ()=> dispatch(toggleThemeActions())
//   };
// };

const mapDispatchToProps = {
  incremenet: incrementAction,
  decrement: decrementAction,
  changeStep: stepChangeAction,
  toggleTheme: toggleThemeActions,
};

const WrapperCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default WrapperCounter;
