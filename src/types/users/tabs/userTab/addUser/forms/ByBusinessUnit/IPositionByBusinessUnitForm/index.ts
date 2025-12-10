import { IPositionByBusinessUnit } from "../IPositionByBusinessUnit";

interface IPositionsByBusinessUnitForm {
  businessUnits: Record<string, IPositionByBusinessUnit>;
  setSelectedChange: (name: string, value: string) => void;
  onNextPage: () => void;
  onReset: () => void;
  editDataOption?: boolean;
}
export type { IPositionsByBusinessUnitForm };
