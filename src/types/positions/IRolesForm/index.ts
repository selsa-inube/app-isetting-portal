import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IOptionInitialiceEntryApp } from "@src/types/forms/verificationForm/IOptionInitialiceEntryApp";

interface IRolesForm {
  entries: IFormEntry[];
  withFilter: boolean;
  onReset: () => void;
  onButtonClick: () => void;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  options: IOptionInitialiceEntryApp[];
  readOnly?: boolean;
  editDataOption?: boolean;
}

export type { IRolesForm };
