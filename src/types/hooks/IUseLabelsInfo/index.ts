import { ILabelsInfo } from "@ptypes/positions/details/ILabelsInfo";
import { IPosition } from "@ptypes/positions/assisted/IPosition";

interface IUseLabelsInfo {
  labels: ILabelsInfo["labels"];
  infoData: IPosition;
  hasLabels: boolean;
}

export type { IUseLabelsInfo };
