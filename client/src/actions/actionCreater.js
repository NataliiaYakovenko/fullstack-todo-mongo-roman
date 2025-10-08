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

export const stepChangeAction = (value) => {
  return {
    type: ACTION_TYPES.STEP_CHANGE,
    payload: {
      value,
    },
  };
};

//РОЗДІЛ ШЗ ЗАПИТАМИ НА СЕРВЕР

export const requestCounterFetching = (counter) => {
  return {
    type: ACTION_TYPES.REQUEST_COUNTER_FETCHING,
    payload: {
      counter,
    },
  };
};

export const requestCounterSuccess = (data) => {
  return {
    type: ACTION_TYPES.REQUEST_COUNTER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const requestCounterError = (error) => {
  return {
    type: ACTION_TYPES.EQUEST_COUNTER_ERROR,
    payload: {
      error,
    },
  };
};
