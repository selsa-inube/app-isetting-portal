import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";
import { mapBusinessManagersIdEntities } from "./mappers/mapBusinessManagersIdEntities";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";

const getBusinessManagersId = async (
  businessUnitCode: string,
  token: string,
): Promise<IBusinessUnitsPortalStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllPositionStaff",
      Authorization: token,
    },
  };
  const queryParams = new URLSearchParams({
    businessUnitCode: businessUnitCode,
  });

  const data: IBusinessUnitsPortalStaff[] = await getWithRetries<
    IBusinessUnitsPortalStaff[]
  >(
    iportalStaffAxiosInstance,
    `/positions-staff?${queryParams.toString()}`,
    config,
  );

  return Array.isArray(data) ? mapBusinessManagersIdEntities(data) : [];
};

export { getBusinessManagersId };
