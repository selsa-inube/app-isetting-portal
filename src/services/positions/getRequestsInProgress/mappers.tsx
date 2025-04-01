import { IRequestsInProgress } from "@ptypes/positions/requestsInProgress/IRequestsInProgress";
import { formatDateTable } from "@utils/formatDateTable";
import { RequestStatus } from "src/enum/requestStatus";

const mapRequestsInProgressToEntity = (
  data: IRequestsInProgress
): IRequestsInProgress => {
  const request: IRequestsInProgress = {
    id: String(data.settingRequestId),
    applicationName: String(data.applicationName),
    businessManagerCode: String(data.businessManagerCode),
    businessUnitCode: String(data.businessUnitCode),
    configurationRequestData: Object(data.configurationRequestData),
    configurationRequestsTraceability: Object(
      data.configurationRequestsTraceability
    ),
    description: String(data.description),
    entityName: String(data.entityName),
    requestDate: formatDateTable(new Date(String(data.requestDate))),
    requestNumber: String(data.requestNumber),
    requestStatus:
      RequestStatus[data.requestStatus as keyof typeof RequestStatus],
    settingRequestId: String(data.settingRequestId),
    useCaseName: String(data.useCaseName),
    userManagingConfigurationRequests: Object(
      data.userManagingConfigurationRequests
    ),
  };

  return request;
};

const mapRequestsInProgressToEntities = (
  enums: IRequestsInProgress[]
): IRequestsInProgress[] => {
  return enums.map(mapRequestsInProgressToEntity);
};

export { mapRequestsInProgressToEntity, mapRequestsInProgressToEntities };
