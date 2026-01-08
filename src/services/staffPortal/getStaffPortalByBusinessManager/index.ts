import type { AxiosRequestConfig } from "axios";

import type { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { getWithRetries } from "@services/core/getWithRetries";
import { isaasQueryAxiosInstance } from "@api/isaas";

import {
  mapStaffPortalByBusinessManagerApiToEntities,
  type IStaffPortalByBusinessManagerApi,
} from "./mappers";

const staffPortalByBusinessManager = async (
  portalCode: string
): Promise<IStaffPortalByBusinessManager[]> => {
  const queryParams = new URLSearchParams({
    staffPortalId: portalCode,
  });

  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllStaffPortalsByBusinessManager",
    },
  };

  const data = await getWithRetries<IStaffPortalByBusinessManagerApi[]>(
    isaasQueryAxiosInstance,
    `/staff-portals-by-business-manager?${queryParams.toString()}`,
    config
  );

  return mapStaffPortalByBusinessManagerApiToEntities(data);
};

export { staffPortalByBusinessManager };
