import { AxiosRequestConfig } from "axios";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";
import { getWithRetries } from "@services/core/getWithRetries";
import { mapBusUnitsPortalStaffEntities } from "./mappers/mapBusUnitsPortalStaffEntities";

const getBusinessUnitsPortalStaff = async (
  portalPublicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchBusinessUnitsForAnOfficer",
    },
  };
  const data: IBusinessUnitsPortalStaff[] = await getWithRetries<
    IBusinessUnitsPortalStaff[]
  >(
    iportalStaffAxiosInstance,
    `/business-units-portal-staff/${userAccount}/${portalPublicCode}`,
    config
  );
  return Array.isArray(data) ? mapBusUnitsPortalStaffEntities(data) : [];
};

export { getBusinessUnitsPortalStaff };
