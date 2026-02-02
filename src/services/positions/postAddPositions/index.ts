import { AxiosRequestConfig } from "axios";
import { postWithRetries } from "@services/core/postWithRetries";
import { mapAddPositionToApi } from "./mappers";
import { isettingIsaasAxiosInstance } from "@api/isettingIsaas";
import { IRequestPositions } from "@ptypes/positions/assisted/IRequestPositions";

const postAddPositions = async (
  businessUnit: string,
  user: string,
  data: IRequestPositions,
  businessManagerCode: string,
  token: string,
): Promise<IRequestPositions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "AddPositionStaff",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await postWithRetries<IRequestPositions>(
    `/position-staff`,
    config,
    mapAddPositionToApi(
      data,
      businessManagerCode,
      businessUnit,
    ) as unknown as string[],
    isettingIsaasAxiosInstance,
  );

  return newData;
};

export { postAddPositions };
