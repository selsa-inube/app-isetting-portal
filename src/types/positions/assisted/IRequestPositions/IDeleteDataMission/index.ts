import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDeleteMission } from "./ISaveDeleteMission";

interface IRequestDeletePositions {
  configurationRequestData: ISaveDeleteMission;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { IRequestDeletePositions };
