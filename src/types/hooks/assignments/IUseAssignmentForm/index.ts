import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { ILabels } from "../filter/ILabel";

interface IUseAssignmentForm {
  entries: IFormEntry[];
  setSelectedToggle: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  editDataOption: boolean;
  filters?: ILabels;
}

export type { IUseAssignmentForm };
