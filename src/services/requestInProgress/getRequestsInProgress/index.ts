import { AxiosRequestConfig } from "axios";
import { queryProcessAxiosInstance } from "@api/isettingProcess";
import { getWithRetries } from "@services/core/getWithRetries";
import { IRequestsInProgress } from "@ptypes/requestsInProgress/IRequestsInProgress";
import { mapRequestsInProgressToEntities } from "./mappers/mapRequestsToEntities";

const getRequestsInProgress = async (
  entity: string,
  businessManagerCode: string,
  businessUnits?: string,
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
    businessManagerCode: businessManagerCode,
    businessUnitCode: businessUnits ?? "",

  });
  const data = await getWithRetries<IRequestsInProgress[]>(
    queryProcessAxiosInstance,
    `/requests?${queryParams.toString()}`,
    config,
  );
  return Array.isArray(data) ? mapRequestsInProgressToEntities(data) : [];
};

export { getRequestsInProgress };
