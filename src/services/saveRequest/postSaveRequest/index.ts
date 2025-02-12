import { AxiosRequestConfig } from "axios";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { postWithRetries } from "@services/core/postWithRetries";
import { axiosInstance } from "@api/isaasPersistence";
import { mapSavePositionsEntityToApi } from "./mappers";
const postSaveRequest = async (
  userAccount: string,
  data: ISaveDataRequest
): Promise<ISaveDataResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SaveSettingRequest",
      "X-User-Name": userAccount,
    },
  };

  const saveData = await postWithRetries<ISaveDataResponse>(
    `/requests`,
    config,
    mapSavePositionsEntityToApi(data) as unknown as string[],
    axiosInstance
  );

  return saveData;
};

export { postSaveRequest };
