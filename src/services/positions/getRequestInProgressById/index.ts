import { AxiosRequestConfig } from "axios";

import { getWithRetries } from "@services/core/getWithRetries";
import { queryProcessAxiosInstance } from "@api/isettingProcess";
import { mapRequestsInProgressToEntity } from "./mappers";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
const getRequestInProgressById = async (
  businessUnits: string,
  settingRequestId: string,
  token: string,
): Promise<IRequestsInProgress> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdConfigurationRequestsByBusinessUnit",
      "X-Business-unit": businessUnits,
      Authorization: token,
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "istaff",
    entityName: "Mission",
  });
  const data = await getWithRetries<IRequestsInProgress>(
    queryProcessAxiosInstance,
    `/requests/business-unit/${businessUnits}/${settingRequestId}?${queryParams.toString()}`,
    config,
  );
  return mapRequestsInProgressToEntity(data);
};

export { getRequestInProgressById };
