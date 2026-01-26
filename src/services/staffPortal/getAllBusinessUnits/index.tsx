import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { mapAllBusinessUnitEntities } from "./mappers";
import { isaasQueryAxiosInstance } from "@api/isaas";
import { IAllBusinessUnits } from "@ptypes/staffPortal/IAllBusinessUnits";

const getAllBusinessUnits = async (
  token: string,
): Promise<IAllBusinessUnits[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllBusinessUnit",
      Authorization: token,
    },
  };

  const data: IAllBusinessUnits[] = await getWithRetries<IAllBusinessUnits[]>(
    isaasQueryAxiosInstance,
    `/businesses-unit`,
    config,
  );
  return Array.isArray(data) ? mapAllBusinessUnitEntities(data) : [];
};

export { getAllBusinessUnits };
