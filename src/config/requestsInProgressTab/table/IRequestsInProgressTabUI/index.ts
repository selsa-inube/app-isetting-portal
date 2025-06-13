import { IEntry } from "@ptypes/design/table/IEntry";

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
