import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";

import { IBusinessesUnit } from "@src/types/staffPortal/IBusinessesUnit";
import { mapBusinessUnitManagerApiToEntity } from "./mapBusinessManagersIdEntities";
import { isaasQueryAxiosInstance } from "@src/api/isaas";


const getBusinessUnitManager = async (
  publicCode: string,
  token: string,
): Promise<IBusinessesUnit> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "BusinessUnitOfBusinessManager",
      Authorization: token,
    },
  };

  const data: IBusinessesUnit = await getWithRetries<IBusinessesUnit>(
    isaasQueryAxiosInstance,
    `/businesses-unit/?businessManagerPublicCode=${publicCode}`,
    config,
  );
  return mapBusinessUnitManagerApiToEntity(data);
};

export { getBusinessUnitManager };
