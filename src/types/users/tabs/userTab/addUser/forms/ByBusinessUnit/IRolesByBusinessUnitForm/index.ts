import { IRolesByBusinessUnit } from "@ptypes/assignments/IRolesByBusinessUnit";

interface IRolesByBusinessUnitForm {
  businessUnits: Record<string, IRolesByBusinessUnit>;
  setSelectedChange: (name: string, value: string) => void;
  onNextPage: () => void;
  onReset: () => void;
  editDataOption?: boolean;
}
export type { IRolesByBusinessUnitForm };
