import { IBusinessUnitField } from "../IBusinessUnitField";

interface IRolesByBusinessUnitForm {
  businessUnits: Record<string, IBusinessUnitField>;
  setSelectedChange: (name: string, value: string) => void;
  onNextPage: () => void;
  onReset: () => void;
  editDataOption?: boolean;
}
export type { IRolesByBusinessUnitForm };
