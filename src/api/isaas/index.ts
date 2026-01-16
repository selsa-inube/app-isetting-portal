import axios, { AxiosInstance } from "axios";
import { enviroment, fetchTimeoutServices } from "@config/environment";
import { EErrorState } from "@enum/errorState";
import { eventBus } from "@events/eventBus";
import { IErrorMessage } from "@ptypes/errors/IErrorMessage";
import { IBackendErrorResponse } from "@ptypes/errors/IErrorMessage/IBackErrorResponse";
import localforage from "localforage";

const isaasQueryAxiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.IVITE_ISAAS_QUERY_PROCESS_SERVICE,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

isaasQueryAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const backendResponse: IBackendErrorResponse = error.response?.data ?? null;
    const messageError: IErrorMessage = {
      code: error.request.status ?? "UNKNOWN_ERROR",
      description:
        backendResponse?.message ?? error.message ?? "Unexpected error",
      status: error.response?.status ?? null,
      response: backendResponse,
      method: error?.config?.method ?? "",
    };

    await localforage.setItem<IErrorMessage>("lastError", messageError);

    eventBus.emit(EErrorState.ERROR_MODAL_STATE, true);

    return Promise.reject(new Error(JSON.stringify(messageError)));
  }
);

export { isaasQueryAxiosInstance };
