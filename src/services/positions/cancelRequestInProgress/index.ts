import { AxiosRequestConfig } from "axios";
import { ICancelRequestResponse } from "@ptypes/requestsInProgress/ICancelReqInProcResponse";
import { ICancelRequestInProgress } from "@ptypes/requestsInProgress/ICancelReqInProcRequest";
import { deleteWithRetries } from "@services/core/deleteWithRetries";
import { isaasPerAxiosInstance } from "@api/isaasPersistence";
import { mapCancelRequestInProgressToApi } from "./mappers";

const cancelRequestInProgress = async (
  businessUnit: string,
  data: ICancelRequestInProgress,
  token: string,
): Promise<ICancelRequestResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "RemoveSettingRequest",
      "X-Business-unit": businessUnit,
      Authorization: token,
    },
  };

  const deleteData = await deleteWithRetries<ICancelRequestResponse>(
    `/requests`,
    config,
    mapCancelRequestInProgressToApi(data) as unknown as string[],
    isaasPerAxiosInstance,
  );

  return deleteData;
};

export { cancelRequestInProgress };
