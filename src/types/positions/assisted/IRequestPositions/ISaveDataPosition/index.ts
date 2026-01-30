import { IPositionsByRole } from "../../IOptionInitialiceEntryApp";

interface ISaveDataPosition {
  positionName: string;
  descriptionUse: string;
  positionsByRole: IPositionsByRole[];
  businessManagerCode: string;
  businessUnitCode: string;
  modifyJustification?: string;
  positionId?: string;
}
export type { ISaveDataPosition };
