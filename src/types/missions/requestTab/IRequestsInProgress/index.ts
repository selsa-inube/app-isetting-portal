import { IConfigurationRequestsTraceability } from "@ptypes/requestsInProgress/IConfigRequestsTraceability";
import { IUserManagingConfigRequests } from "@ptypes/requestsInProgress/IUserConfigRequests";


interface IRequestsInProgress {
  applicationName: string;
  businessManagerCode: string;
  businessUnitCode: string;
  configurationRequestData: Record<string, string | number>;
  configurationRequestsTraceability: IConfigurationRequestsTraceability;
  description: string;
  entityName: string;
  requestDate: string;
  requestNumber: string;
  requestStatus: string;
  settingRequestId: string;
  useCaseName: string;
  userManagingConfigurationRequests: IUserManagingConfigRequests[];
  id?: string;
}

export type { IRequestsInProgress };
