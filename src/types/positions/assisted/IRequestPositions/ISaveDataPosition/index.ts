import { IPositionsByRole } from "../../IOptionInitialiceEntryApp";

interface ISaveDataPosition {
  positionName: string;
  descriptionUse: string;
  positionByRole: IPositionsByRole[];
  modifyJustification?: string;
  positionId  ?: string;
}
export type { ISaveDataPosition };
