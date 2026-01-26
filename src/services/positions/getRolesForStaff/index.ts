import { AxiosRequestConfig } from "axios";
import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { getWithRetries } from "@services/core/getWithRetries";
import { isaasQueryAxiosInstance } from "@api/isaas";
import { mapRolesStaffApiToEntities } from "./mappers/mapRolesStaffApiToEntities";

const getRolesForStaff = async (token: string): Promise<IRoleForStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllRolesForStaff",
      Authorization: token,
    },
  };
  const data: IRoleForStaff[] = await getWithRetries<IRoleForStaff[]>(
    isaasQueryAxiosInstance,
    `/roles-for-staff`,
    config,
  );
  return mapRolesStaffApiToEntities(data);
};

export { getRolesForStaff };
