import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/iportalStaff";
import { IMisionData } from "@ptypes/missions/IMisionData";
import { mapMissionsToEntities } from "./mappers";

const getMission = async (): Promise<
  IMisionData[]
> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllMission",
    },
  };
  const data: IMisionData[] = await getWithRetries<
    IMisionData[]
  >(axiosInstance, `/missions`, config);
  return Array.isArray(data) ? mapMissionsToEntities(data) : [];
};

export { getMission };
