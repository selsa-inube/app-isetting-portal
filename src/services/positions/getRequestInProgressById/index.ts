import { AxiosRequestConfig } from "axios";
import { IRequestsInProgress } from "@ptypes/positions/requestsInProgress/IRequestsInProgress";
import { getWithRetries } from "@services/core/getWithRetries";
import { queryProcessAxiosInstance } from "@api/isettingProcess";
import { mapRequestsInProgressToEntity } from "./mappers";
const getRequestInProgressById = async (
  bussinesUnits: string,
  settingRequestId: string
): Promise<IRequestsInProgress> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdConfigurationRequestsByBusinessUnit",
      "X-Business-unit": bussinesUnits,
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "istaff",
    entityName: "Mission",
  });
  const data = await getWithRetries<IRequestsInProgress>(
    queryProcessAxiosInstance,
    `/requests/business-unit/${bussinesUnits}/${settingRequestId}?${queryParams.toString()}`,
    config
  );
  return mapRequestsInProgressToEntity(data);
};

export { getRequestInProgressById };
