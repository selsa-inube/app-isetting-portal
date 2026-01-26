import { AxiosRequestConfig } from "axios";

import { getWithRetries } from "@services/core/getWithRetries";
import { IOptionsByBusinessUnits } from "@ptypes/staffPortal/IOptionsByBusinessUnits";
import { mapOptionsByBusinessUnitsToEntities } from "./mappers";
import { iportalStaffAxiosInstance } from "@api/iportalStaff";

const getStaffPortalByBusinessManager = async (
  staffPortalId: string,
  userAccount: string,
  businessUnitPublicCode: string,
  token: string,
): Promise<IOptionsByBusinessUnits[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchOptionForStaff",
      "X-User-Name": userAccount,
      Authorization: token,
    },
  };

  const queryParams = new URLSearchParams({
    portalPublicCode: staffPortalId,
    businessUnitPublicCode: businessUnitPublicCode,
  });
  const data: IOptionsByBusinessUnits[] = await getWithRetries<
    IOptionsByBusinessUnits[]
  >(iportalStaffAxiosInstance, `/staffs?${queryParams.toString()}`, config);
  return mapOptionsByBusinessUnitsToEntities(data);
};

export { getStaffPortalByBusinessManager };
