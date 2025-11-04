import axios from "axios";
import io from "socket.io-client";
import CONSTANTS from "../constants";
import history from "../BrowserHistory";
import store from "../store";

const httpClient = axios.create({
  baseURL: `http://${CONSTANTS.API_BASE}`,
});

const socket = io("ws://localhost:5000", { transports: ["websocket"] });

socket.on(CONSTANTS.SOCKET_EVENT_NETIFICATION, (data) => {
  store.dispatch({
    type:'NOTIFICATION',
    payload:data
  })
});

export const registerUser = async (userData) => {
  return await httpClient.post("/users/sign-up", userData);
};

export const loginUser = async (userData) => {
  return await httpClient.post("/users/sign-in", userData);
};

export const refreshUser = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const { data } = await httpClient.post("/users/refresh", { refreshToken });
  return data;
};

export const authUser = async () => await httpClient.get("/users");

export const logOut = async () => {
  localStorage.clear();
};

export const getTasks = async () => {
  return await httpClient.get("/tasks");
};

export const createTask = async (taskData) => {
  return await httpClient.post("/tasks", taskData);
};

export const deleteTask = async (taskId) => {
  return await httpClient.delete(`/tasks/${taskId}`);
};

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => {
    if (response.data.tokens) {
      const {
        data: { tokens },
      } = response;
      localStorage.setItem("refreshToken", tokens.refreshToken);
      localStorage.setItem("accessToken", tokens.accessToken);
    }
    return response;
  },
  async (error) => {
    if (error.response.status === 403 && localStorage.getItem("refreshToken")) {
      await refreshUser();

      await httpClient(error.config);
    } else if (error.response.status === 401) {
      logOut();
      history.push("/");
    } else {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
