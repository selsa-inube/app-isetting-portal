import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

interface IBusinessEntityForm {
  entries: IFormEntry[];
  setSelectedToggle: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  onButtonClick: () => void;
  onReset: () => void;
  editDataOption?: boolean;
  withFilter?: boolean;
}
export type { IBusinessEntityForm };
