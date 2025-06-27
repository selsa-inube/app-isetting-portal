import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { IFormEntry } from "../IFormEntry";

interface IAssignmentForm {
  handleChange: (entries: IFormEntry[]) => void;
  entries: IFormEntry[];
  title: string;
  setSelectedToggle: React.Dispatch<
    React.SetStateAction<IFormEntry[] | undefined>
  >;
  readOnly?: boolean;
  setChangedData?: (changeData: IFormEntry[]) => void;
  changeData?: IFormEntry[];
  options: IOptionInitialiceEntryApp[];
}

export type { IAssignmentForm };
