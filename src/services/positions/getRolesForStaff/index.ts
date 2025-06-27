import { AxiosRequestConfig } from "axios";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isaas";
import { mapRolesStaffApiToEntities } from "./mappers/mapRolesStaffApiToEntities";

const getRolesForStaff = async (): Promise<IRoleForStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllRolesForStaff",
    },
  };
  const data: IRoleForStaff[] = await getWithRetries<IRoleForStaff[]>(
    axiosInstance,
    `/roles-for-staff`,
    config
  );
  return mapRolesStaffApiToEntities(data);
};

export { getRolesForStaff };
