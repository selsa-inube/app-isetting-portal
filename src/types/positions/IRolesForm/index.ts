import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IOptionRolesInitialiceEntry } from "../assisted/IOptionRolesInitialiceEntry";

interface IRolesForm {
  entries: IFormEntry[];
  onReset: () => void;
  onButtonClick: () => void;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  options: IOptionRolesInitialiceEntry[];
  readOnly?: boolean;
  editDataOption?: boolean;
}

export type { IRolesForm };
