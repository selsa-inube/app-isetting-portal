import { AxiosRequestConfig } from "axios";

import { deleteWithRetries } from "@services/core/deleteWithRetries";
import { isaasPerAxiosInstance } from "@api/isaasPersistence";

import { ICancelRequestInProgress } from "@ptypes/requestsInProgress/ICancelReqInProcRequest/index.js";
import { ICancelRequestResponse } from "@ptypes/requestsInProgress/ICancelReqInProcResponse/index.js";
import { mapCancelRequestInProgressToApi } from "./mappers";

const cancelRequestInProgress = async (
  businessUnit: string,
  data: ICancelRequestInProgress,
): Promise<ICancelRequestResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "RemoveSettingRequest",
      "X-Business-unit": businessUnit,
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
