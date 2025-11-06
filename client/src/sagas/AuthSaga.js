import { loginUser, registerUser, authUser, logOut } from "../api/axiosApi";
import { put } from "redux-saga/effects";
import { authByQRCode } from "../api/authByQRCodeApi";
import {
  loginUserSuccess,
  loginUserError,
  registerUserError,
  registerUserSuccess,
  authUserSuccess,
  authUserError,
  authQRUserSuccess,
  authQRUserError,
} from "../actions/actionCreater";
import history from "../BrowserHistory";

export function* loginSaga(action) {
  try {
    const {
      data: { data },
    } = yield loginUser(action.payload);
    console.log(data);
    yield put(loginUserSuccess(data));
    history.push("/tasks");
  } catch (error) {
    yield put(loginUserError(error.response.data.error));
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
    yield put(registerUserError(error.response.data.error));
  }
}

export function* authSaga() {
  console.log(3000);
  try {
    const {
      data: { data },
    } = yield authUser();
    console.log(data, 333);
    yield put(authUserSuccess(data));
    history.push("/users");
  } catch (error) {
    yield put(authUserError(error));
  }
}

export function* logOutSaga() {
  yield logOut();
  history.push("/");
}

export function* authByQRCodeSaga(action) {
  try {
    const { data } = yield authByQRCode({
      refreshToken: action.payload,
    });

    const {
      tokens: { accessToken, refreshToken },
    } = data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    history.push("/tasks");
    yield put(authQRUserSuccess(data));
  } catch (error) {
    yield put(authQRUserError(error));
  }
}
