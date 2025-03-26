import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingProcess";
import { IRequestsInProgress } from "@ptypes/positions/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntities } from "./mappers";

const getRequestsInProgress = async (
  bussinesUnits: string
): Promise<IRequestsInProgress[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchPendingConfigurationRequest",
      "X-Business-unit": bussinesUnits,
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "istaff",
    entityName: "Mission",
    page: ".1",
    per_page: ".1",
    sort: "desc.requestDate",
    requestStatus: "nin.RequestProcessedWithError;RequestProcessed",
  });
  const data = await getWithRetries<IRequestsInProgress[]>(
    axiosInstance,
    `/requests/business-unit/${bussinesUnits}?${queryParams.toString()}`,
    config
  );
  return Array.isArray(data) ? mapRequestsInProgressToEntities(data) : [];
};

export { getRequestsInProgress };
