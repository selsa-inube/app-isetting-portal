import { IEntry } from "@ptypes/table/IEntry";

interface IDelete {
  data: IEntry;
  setEntryDeleted: (id: string | number) => void;
}

export type { IDelete };
