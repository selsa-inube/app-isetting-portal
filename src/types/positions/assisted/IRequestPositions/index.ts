import { ISaveDataResponse } from "@src/types/saveData/ISaveDataResponse";
import { ISaveDataPosition } from "./ISaveDataPosition";

interface IRequestPositions {
  configurationRequestData: ISaveDataPosition;
  removalJustification?: string;
  settingRequest?: ISaveDataResponse;
}

export type { IRequestPositions };
