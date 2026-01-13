import axios, { AxiosInstance } from "axios";
import localforage from "localforage";

import { enviroment, fetchTimeoutServices } from "@config/environment";
import { EErrorState } from "@enum/errorState";
import { eventBus } from "@events/eventBus";
import { IErrorMessage } from "@ptypes/errors/IErrorMessage";
import { IBackendErrorResponse } from "@ptypes/errors/IErrorMessage/IBackErrorResponse";

const iportalStaffAxiosInstance: AxiosInstance = axios.create({
  baseURL: enviroment.IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE,
  timeout: fetchTimeoutServices,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

iportalStaffAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const backendResponse: IBackendErrorResponse = error.response?.data ?? null;
    const messageError: IErrorMessage = {
      code: error.request.status ?? "UNKNOWN_ERROR",
      description:
        error.message ?? backendResponse?.message ?? "Unexpected error",
      status: error.response?.status ?? null,
      response: backendResponse,
      method: error?.config?.method ?? "",
    };

    await localforage.setItem<IErrorMessage>("lastError", messageError);

    eventBus.emit(EErrorState.ERROR_MODAL_STATE, true);

    return Promise.reject(new Error(JSON.stringify(messageError)));
  }
);

export { iportalStaffAxiosInstance };
