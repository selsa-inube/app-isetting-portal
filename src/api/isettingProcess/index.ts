import axios, { AxiosInstance } from "axios";
import { enviroment } from "@config/environment";

const queryProcessAxiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.ISETTING_QUERY_PROCESS_SERVICE,
  timeout: enviroment.FETCH_TIMEOUT_SERVICES,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

queryProcessAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }
    return Promise.reject(new Error(error.message));
  },
);

export { queryProcessAxiosInstance };
