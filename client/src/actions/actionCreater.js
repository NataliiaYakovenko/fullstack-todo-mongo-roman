import ACTION_TYPES from "./actionTypes";

export const incrementAction = (dispatch) => {
  return {
    type: ACTION_TYPES.INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: ACTION_TYPES.DECREMENT,
  };
};
