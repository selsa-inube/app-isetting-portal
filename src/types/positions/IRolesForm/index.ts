import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";

interface IRolesForm {
  entries: IFormEntry[];
  withFilter: boolean;
  onReset: () => void;
  onButtonClick: () => void;
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  options: IOptionInitialiceEntryApp[];
  readOnly?: boolean;
  editDataOption?: boolean;
}

export type { IRolesForm };
