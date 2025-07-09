import { IEntry } from "@ptypes/table/IEntry";

interface ICancel {
  data: IEntry;
  setEntryCanceled: (id: string | number) => void;
}

export type { ICancel };
