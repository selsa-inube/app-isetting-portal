import { IEntry } from "@ptypes/table/IEntry";
interface IDetails {
  data: IEntry;
  showModal: boolean;
  onToggleModal: () => void;
}

export type { IDetails };
