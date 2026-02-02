import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataMission } from "./ISaveDataMission";

interface IRequestMissions {
  configurationRequestData: ISaveDataMission;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { IRequestMissions };
