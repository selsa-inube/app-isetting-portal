import { AxiosRequestConfig } from "axios";
import { mapDeleteMissionToApi } from "./mappers";
import { isettingIsaasAxiosInstance } from "@src/api/isettingIsaas";
import { deleteWithRetries } from "@src/services/core/deleteWithRetries";
import { IRequestDeleteMissions } from "@src/types/missions/assisted/IRequestMissions/IDeleteDataMission";

const deleteMission = async (
  businessUnit: string,
  user: string,
  data: IRequestDeleteMissions
): Promise<IRequestDeleteMissions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "DeleteMission",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
    },
  };
  const newData = await deleteWithRetries<IRequestDeleteMissions>(
    `/missions`,
    config,
    mapDeleteMissionToApi(data) as unknown as string[],
    isettingIsaasAxiosInstance
  );

  return newData;
};

export { deleteMission };
