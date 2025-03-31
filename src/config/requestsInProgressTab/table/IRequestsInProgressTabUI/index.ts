import { IEntry } from "@design/table/types";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchrequestProgress: string;
  setEntryDeleted: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  widthFirstColumn: number;
  smallScreen: boolean;
}

export type { IRequestsInProgressTabUI };
