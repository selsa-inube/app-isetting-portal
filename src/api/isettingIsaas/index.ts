import axios, { AxiosInstance } from "axios";
import { enviroment } from "@config/environment";

const isettingIsaasAxiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.ISETTING_ISAAS_SERVICE,
  timeout: enviroment.FETCH_TIMEOUT_SERVICES,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

isettingIsaasAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  },
);

export { isettingIsaasAxiosInstance };
