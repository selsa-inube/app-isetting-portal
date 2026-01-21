import { AxiosRequestConfig } from "axios";
import { isettingIsaasAxiosInstance } from "@api/isettingIsaas";
import { getWithRetries } from "@services/core/getWithRetries";
import { IRolesByBusinessUnit } from "@ptypes/assignments/IRolesByBusinessUnit";
import { mapRolesByBusinessUnitEntities } from "./mappers";

const getRolesByBusinessUnit = async (
  businessUnitCode: string,
  token: string,
): Promise<IRolesByBusinessUnit[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchRolesByBusinessUnit",
      Authorization: token,
    },
  };
  const queryParams = new URLSearchParams({
    businessUnitPublicCode: businessUnitCode,
  });

  const data: IRolesByBusinessUnit[] = await getWithRetries<
    IRolesByBusinessUnit[]
  >(
    isettingIsaasAxiosInstance,
    `/roles-for-staff?${queryParams.toString()}`,
    config,
  );
  return Array.isArray(data) ? mapRolesByBusinessUnitEntities(data) : [];
};

export { getRolesByBusinessUnit };
