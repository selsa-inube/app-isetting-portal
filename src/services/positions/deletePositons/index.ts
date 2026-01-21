import { AxiosRequestConfig } from "axios";
import { deleteWithRetries } from "@src/services/core/deleteWithRetries";
import { isettingIsaasAxiosInstance } from "@src/api/isettingIsaas";
import { IRequestPositions } from "@src/types/positions/assisted/IRequestPositions";
import { mapDeletePositionToApi } from "./mapper";

const deletePositions = async (
  businessUnit: string,
  user: string,
  data: IRequestPositions,
  token: string,
): Promise<IRequestPositions> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "DeletePositionStaff",
      "X-Business-Unit": businessUnit,
      "X-User-Name": user,
      Authorization: token,
    },
  };
  const newData = await deleteWithRetries<IRequestPositions>(
    `/position-staff`,
    config,
    mapDeletePositionToApi(
      data,
    ) as unknown as string[],
    isettingIsaasAxiosInstance,
  );

  return newData;
};

export { deletePositions };
