import { IRuleDecision } from "@pages/rules/types";

interface ISaveDataRequest {
  applicationName: string;
  businessManagerCode: string;
  businessUnitCode: string;
  configurationRequestData: Record<
    string,
    | string
    | number
    | boolean
    | string[]
    | Record<string, string>
    | IRuleDecision[]
    | { missionId: string; roleName: string }[]
  >;
  description: string;
  entityName: string;
  requestDate: string;

  useCaseName: string;
}

export type { ISaveDataRequest };
