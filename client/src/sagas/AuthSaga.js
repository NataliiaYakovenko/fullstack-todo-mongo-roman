import { loginUser, registerUser } from "../api/axiosApi";
import { put } from "redux-saga/effects";
import {
  loginUserSuccess,
  loginUserError,
  registerUserError,
  registerUserSuccess,
} from "../actions/actionCreater";
import history from "../BrowserHistory";

export function* loginSaga(action) {
  try {
    const {
      data: { data },
    } = yield loginUser(action.payload);

    yield put(loginUserSuccess(data));
    history.push("/tasks");
  } catch (error) {
    yield put(loginUserError(error));
  }
}

export function* registerSaga(action) {
  try {
    const {
      data: { data },
    } = yield registerUser(action.payload);

    yield put(registerUserSuccess(data));
    history.push("/tasks");
  } catch (error) {
    yield put(registerUserError(error));
  }
}
