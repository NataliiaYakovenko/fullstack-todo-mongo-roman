import axios from "axios";
import CONSTANTS from "../constants";

const httpClient = axios.create({
  baseURL: `http://${CONSTANTS.API_BASE}`,
});

export const authByQRCode = async (refreshToken) => {
  return await httpClient.post("/users/authByQRCode", refreshToken);
};

export default httpClient;
