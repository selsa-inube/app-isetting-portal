import { AxiosRequestConfig } from "axios";
import { ICancelReqInProcResponse } from "@ptypes/requestsInProgress/ICancelReqInProcResponse";
import { ICancelReqInProcRequest } from "@ptypes/requestsInProgress/ICancelReqInProcRequest";
import { deleteWithRetries } from "@services/core/deleteWithRetries";
import { isaasPerAxiosInstance } from "@api/isaasPersistence";
import { mapCancelRequestInProgressToApi } from "./mappers";

const cancelRequestInProgress = async (
  businessUnit: string,
  data: ICancelReqInProcRequest
): Promise<ICancelReqInProcResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "RemoveSettingRequest",
      "X-Business-unit": businessUnit,
    },
  };

  const deleteData = await deleteWithRetries<ICancelReqInProcResponse>(
    `/requests`,
    config,
    mapCancelRequestInProgressToApi(data) as unknown as string[],
    isaasPerAxiosInstance
  );

  return deleteData;
};

export { cancelRequestInProgress };
