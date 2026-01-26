import { AxiosRequestConfig } from "axios";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { postWithRetries } from "@services/core/postWithRetries";
import { isaasPerAxiosInstance } from "@api/isaasPersistence";
import { mapSavePositionsEntityToApi } from "./mappers";
const postSaveRequest = async (
  userAccount: string,
  data: ISaveDataRequest,
  token: string,
): Promise<ISaveDataResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SaveSettingRequest",
      "X-User-Name": userAccount,
      Authorization: token,
    },
  };

  const saveData = await postWithRetries<ISaveDataResponse>(
    `/requests`,
    config,
    mapSavePositionsEntityToApi(data) as unknown as string[],
    isaasPerAxiosInstance,
  );

  return saveData;
};

export { postSaveRequest };
