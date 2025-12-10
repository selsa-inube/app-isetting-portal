import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

interface IUseBusinessunitForm {
  entries: IBusinessEntry[];
  setSelectedToggle: React.Dispatch<React.SetStateAction<IBusinessEntry[]>>;
  editDataOption?: boolean;
}

export type { IUseBusinessunitForm };
