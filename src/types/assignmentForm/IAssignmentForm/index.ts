import { IOptionInitialiceEntryApp } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";
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
