import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { isaasQueryAxiosInstance } from "@api/isaas";

import { mapBusinessManagerApiToEntity } from "./mappers";
import { IBusinessManagers } from "@ptypes/staffPortal/IBusinessManagers";
const getBusinessManagers = async (
  businessManagerId: string
): Promise<IBusinessManagers[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllBusinessManager",
    },
  };
  const data: IBusinessManagers[] = await getWithRetries<IBusinessManagers[]>(
    isaasQueryAxiosInstance,
    `/business-managers?publicCode=${businessManagerId}`,
    config
  );

  return Array.isArray(data) ? data.map(mapBusinessManagerApiToEntity) : [];
};

export { getBusinessManagers };
