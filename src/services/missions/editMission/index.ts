import { AxiosRequestConfig } from "axios";
import { isettingIsaasAxiosInstance } from "@src/api/isettingIsaas";
import { IRequestMissions } from "@src/types/missions/assisted/IRequestMissions";
import { mapAddMissionToApi } from "../addMission/postAddMission/mappers";
import { patchWithRetries } from "@src/services/core/patchWithRetries";

const patchMission = async (
  businessUnit: string,
  user: string,
  data: IRequestMissions,
  businessManagerCode: string,
  token: string,
): Promise<IRequestMissions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "ModifyMission",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await patchWithRetries<IRequestMissions>(
    `/missions`,
    config,
    mapAddMissionToApi(data, businessManagerCode) as unknown as string[],
    isettingIsaasAxiosInstance,
  );

  return newData;
};

export { patchMission };
