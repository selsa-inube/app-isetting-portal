import { IRolesByUnitEntry } from "../IRolesByUnitEntry";

interface IRolesByBusinessUnitForm {
  entries: IRolesByUnitEntry[];
  loading: boolean;
  setRolesSelected: React.Dispatch<React.SetStateAction<IRolesByUnitEntry[]>>;
  onPreviousStep: () => void;
  onButtonClick: () => void;
  editDataOption?: boolean;
}

export type { IRolesByBusinessUnitForm };
