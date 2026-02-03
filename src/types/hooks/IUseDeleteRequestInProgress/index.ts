import { IEntry } from "@ptypes/design/table/IEntry";

interface IUseDeleteRequestInProgress {
  data: IEntry;
  setEntryDeleted: (value: string | number) => void;
}

export type { IUseDeleteRequestInProgress };
