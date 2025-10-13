import axios from "axios";
import CONSTANTS from "../constants";
import history from "../BrowserHistory";

const httpClient = axios.create({
  baseURL: CONSTANTS.API_BASE,
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
      console.log(tokens, 111);
      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);
    }
    return response;
  },
  async (error) => {
    if (error.response.atatus === 403 && localStorage.getItem("refreshToken")) {
      await refreshUser();

      await httpClient(error.config);
    }
    if (error.response.status === 401) {
      history.push("/");
    }
    return Promise.reject(error);
  }
);
