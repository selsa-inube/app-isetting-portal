import axios, { AxiosInstance } from "axios";
import { enviroment } from "@config/environment";

const isaasQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.IVITE_ISAAS_QUERY_PROCESS_SERVICE,
  timeout: enviroment.FETCH_TIMEOUT_SERVICES,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

isaasQueryAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  }
);

export { isaasQueryAxiosInstance };
