import { IPositionByBusinessUnit } from "../../IRoleByBusinessUnit";

interface IPositionsByBusinessUnitFormUI {
  businessUnits: Record<string, IPositionByBusinessUnit>;
  setSelectedChange: (name: string, value: string) => void;
  onNextPage: () => void;
  onReset: () => void;
  buttonDisabledState: boolean;
}
export type { IPositionsByBusinessUnitFormUI };
