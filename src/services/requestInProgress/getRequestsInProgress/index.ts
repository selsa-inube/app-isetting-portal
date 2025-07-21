import { AxiosRequestConfig } from "axios";
import { getWithRetries } from "@services/core/getWithRetries";
import { queryProcessAxiosInstance } from "@api/isettingProcess";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntities } from "./mappers/mapRequestsToEntities";

const getRequestsInProgress = async (
  entity: string,
  bussinesUnits?: string,
): Promise<IRequestsInProgress[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchPendingConfigurationRequest",
    },
  };

  const queryParams = new URLSearchParams({
    applicationName: "istaff",
    entityName: entity,
    page: ".1",
    per_page: ".1",
    sort: "desc.requestDate",
    businessManagerCode: bussinesUnits ?? "",

  });
  const data = await getWithRetries<IRequestsInProgress[]>(
    queryProcessAxiosInstance,
    `/requests/business-unit/test?${queryParams.toString()}`,
    config,
  );
  return Array.isArray(data) ? mapRequestsInProgressToEntities(data) : [];
};

export { getRequestsInProgress };
