import { AxiosRequestConfig } from "axios";
import { mapDeleteMissionToApi } from "./mappers";
import { deleteWithRetries } from "@src/services/core/deleteWithRetries";
import { IRequestDeleteMissions } from "@src/types/missions/assisted/IRequestMissions/IDeleteDataMission";
import { isettingIsaasHttp } from "@src/api/isettingIsaas/commands";

const deleteMission = async (
  businessUnit: string,
  user: string,
  data: IRequestDeleteMissions,
  token: string,
): Promise<IRequestDeleteMissions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "DeleteMission",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await deleteWithRetries<IRequestDeleteMissions>(
    `/missions`,
    config,
    mapDeleteMissionToApi(data) as unknown as string[],
    isettingIsaasHttp
,
  );

  return newData;
};

export { deleteMission };
