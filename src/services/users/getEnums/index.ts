import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";

import { mapEnumeratorsResponse } from "./mappers";
import { IUserEnumerators } from "@ptypes/users/tabs/userTab/addUser/enumerators";
import { IUserEnumItem } from "@ptypes/users/tabs/userTab/addUser/enumerators/enumeItem";
import { isaasQueryAxiosInstance } from "@api/isaas";

const getEnumerators = async (
  enumKey: string,
  token: string,
): Promise<IUserEnumerators[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "GetAllEnums",
      Authorization: token,
    },
  };

  const serviceData = await getWithRetries<Record<string, IUserEnumItem[]>>(
    isaasQueryAxiosInstance,
    `/enumerators/?enums=${enumKey}`,
    config,
  );

  return mapEnumeratorsResponse(serviceData);
};

export { getEnumerators };
