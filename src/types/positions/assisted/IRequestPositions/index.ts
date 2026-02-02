import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataPosition } from "./ISaveDataPosition";

interface IRequestPositions {
  configurationRequestData: ISaveDataPosition;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { IRequestPositions };
