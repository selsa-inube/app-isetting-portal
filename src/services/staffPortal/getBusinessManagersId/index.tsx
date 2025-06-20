import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/iportalStaff";
import { mapBusinessManagersIdEntities } from "./mappers/mapBusinessManagersIdEntities";
import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";

const getBusinessManagersId = async (
  businessUnitCode: string
): Promise<
  IBusinessUnitsPortalStaff[]
> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllPositionStaff",
    },
  };
  const queryParams = new URLSearchParams({
    businessUnitCode: businessUnitCode,
  });

  const data: IBusinessUnitsPortalStaff[] = await getWithRetries<
    IBusinessUnitsPortalStaff[]
  >(axiosInstance, `/positions-staff?${queryParams.toString()}`, config);

  return Array.isArray(data) ? mapBusinessManagersIdEntities(data) : [];
};

export { getBusinessManagersId };
