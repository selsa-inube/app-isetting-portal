import { IEntry } from "@ptypes/design/table/IEntry";

interface IAssigmentsTabUI {
  entries: IEntry[];
  loading: boolean;
  searchAssingments: string;
  smallScreen: boolean;
  columnWidths: number[];
  pageLength: number;
  emptyDataMessage: string;
  setEntryDeleted: (id: string | number) => void;
  onSearchAssingments: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IAssigmentsTabUI };
