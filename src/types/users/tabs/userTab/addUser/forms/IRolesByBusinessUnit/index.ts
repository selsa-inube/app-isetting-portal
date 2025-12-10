import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

interface IRolesByBusinessUnitProps {
  entries: IFormEntry[];
  setSelectedToggle: React.Dispatch<React.SetStateAction<IFormEntry[]>>;
  onButtonClick: () => void;
  onReset: () => void;
  editDataOption?: boolean;
  withFilter?: boolean;
}

export type { IRolesByBusinessUnitProps };
