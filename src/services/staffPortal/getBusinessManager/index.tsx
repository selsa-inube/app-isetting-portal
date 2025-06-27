import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isaas";
import { IBusinessManagers } from "@ptypes/staffPortal.types";
import { mapBusinessManagerApiToEntity } from "./mappers";
const getBusinessManagers = async (
  businessManagerId: string
): Promise<IBusinessManagers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdBusinessManager",
    },
  };
  const data: IBusinessManagers = await getWithRetries<IBusinessManagers>(
    axiosInstance,
    `/business-managers/${businessManagerId}`,
    config
  );
  return mapBusinessManagerApiToEntity(data);
};

export { getBusinessManagers };
