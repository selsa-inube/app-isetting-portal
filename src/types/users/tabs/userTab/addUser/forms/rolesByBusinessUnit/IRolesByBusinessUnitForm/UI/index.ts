import { IBusinessUnitField } from "../../IBusinessUnitField";

interface IRolesByBusinessUnitFormUI {
  businessUnits: Record<string, IBusinessUnitField>;
  setSelectedChange: (name: string, value: string) => void;
  onNextPage: () => void;
  onReset: () => void;

  buttonDisabledState: boolean;
}
export type { IRolesByBusinessUnitFormUI };
