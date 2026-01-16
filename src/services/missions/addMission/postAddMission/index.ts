import { AxiosRequestConfig } from "axios";
import { postWithRetries } from "@services/core/postWithRetries";
import { mapAddMissionToApi } from "./mappers";
import { isettingIsaasAxiosInstance } from "@src/api/isettingIsaas";
import { IRequestMissions } from "@src/types/missions/assisted/IRequestMissions";

const postAddMission = async (
  businessUnit: string,
  user: string,
  data: IRequestMissions,
  businessManagerCode: string
): Promise<IRequestMissions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "AddMission",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
    },
  };
  const newData = await postWithRetries<IRequestMissions>(
    `/missions`,
    config,
    mapAddMissionToApi(data, businessManagerCode) as unknown as string[],
    isettingIsaasAxiosInstance
  );
  console.log(newData);

  return newData;
};

export { postAddMission };
