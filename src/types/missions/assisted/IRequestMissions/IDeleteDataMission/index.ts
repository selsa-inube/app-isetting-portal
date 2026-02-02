import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDeleteMission } from "./ISaveDeleteMission";

interface IRequestDeleteMissions {
  configurationRequestData: ISaveDeleteMission;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { IRequestDeleteMissions };
