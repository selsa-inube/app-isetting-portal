import { IEntry } from "@ptypes/table/IEntry";

interface IUseDeleteRequestInProgress {
  data: IEntry;
  setEntryDeleted: (value: string | number) => void;
}

export type { IUseDeleteRequestInProgress };
