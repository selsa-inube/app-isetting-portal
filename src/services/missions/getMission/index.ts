import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";
import { IMisionData } from "@ptypes/missions/IMisionData";
import { mapMissionsToEntities } from "./mappers";

const getMission = async (token: string): Promise<IMisionData[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllMission",
      Authorization: token,
    },
  };

  const data: IMisionData[] = await getWithRetries<IMisionData[]>(
    iportalStaffAxiosInstance,
    `/missions`,
    config,
  );
  return Array.isArray(data) ? mapMissionsToEntities(data) : [];
};

export { getMission };
