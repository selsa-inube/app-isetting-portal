import { enviroment } from "@config/environment";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const getWithRetries = async <T>(
  axiosInstance: AxiosInstance,
  url: string,
  config: AxiosRequestConfig
): Promise<T> => {
  const maxRetries = enviroment.MAX_RETRIES_SERVICES;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(
        url,
        config
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
      } else {
        console.error(`Attempt ${attempt} failed: ${String(error)}`);
      }
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
  throw new Error("Error al obtener los de las unidades de negocio.");
};

export { getWithRetries };
