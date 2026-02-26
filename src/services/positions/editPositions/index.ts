import { AxiosRequestConfig } from "axios";
import { isettingIsaasAxiosInstance } from "@api/isettingIsaas";
import { patchWithRetries } from "@services/core/patchWithRetries";
import { mapAddPositionToApi } from "../postAddPositions/mappers";
import { IRequestPositions } from "@ptypes/positions/assisted/IRequestPositions";

const patchPosition = async (
  businessUnit: string,
  user: string,
  data: IRequestPositions,
  token: string,
): Promise<IRequestPositions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "ModifyPositionStaff",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await patchWithRetries<IRequestPositions>(
    `/position-staffs`,
    config,
    mapAddPositionToApi(data) as unknown as string[],
    isettingIsaasAxiosInstance,
  );

  return newData;
};

export { patchPosition };
