import { AxiosRequestConfig } from "axios";
import { postWithRetries } from "@services/core/postWithRetries";
import { mapAddMissionToApi } from "./mappers";
import { IRequestMissions } from "@ptypes/missions/assisted/IRequestMissions";
import { isettingIsaasHttp } from "@api/isettingIsaas/commands";

const postAddMission = async (
  businessUnit: string,
  user: string,
  data: IRequestMissions,
  businessManagerCode: string,
  token: string,
): Promise<IRequestMissions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "AddMission",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await postWithRetries<IRequestMissions>(
    `/missions`,
    config,
    mapAddMissionToApi(data, businessManagerCode) as unknown as string[],
    isettingIsaasHttp,
  );

  return newData;
};

export { postAddMission };
