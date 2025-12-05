import { IRolesByBusinessUnit } from "@ptypes/assignments/IRolesByBusinessUnit";

interface IRolesByBusinessUnitFormUI {
  businessUnits: Record<string, IRolesByBusinessUnit>;
  setSelectedChange: (name: string, value: string) => void;
  onNextPage: () => void;
  onReset: () => void;

  buttonDisabledState: boolean;
}
export type { IRolesByBusinessUnitFormUI };
