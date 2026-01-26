import { IPositionsByRole } from "../../IOptionInitialiceEntryApp";

interface ISaveDataPosition {
  positionName: string;
  descriptionUse: string;
  positionsByRole: IPositionsByRole[];
  modifyJustification?: string;
  positionId  ?: string;
}
export type { ISaveDataPosition };
