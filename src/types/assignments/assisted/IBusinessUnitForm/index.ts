import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

interface IBusinessUnitForm {
  entries: IBusinessEntry[];
  onButtonClick: () => void;
  onPreviousStep: () => void;
  setSelectedToggle: React.Dispatch<React.SetStateAction<IBusinessEntry[]>>;
  editDataOption?: boolean;
}

export type { IBusinessUnitForm };
