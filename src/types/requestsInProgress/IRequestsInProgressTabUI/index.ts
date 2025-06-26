import { IEntry } from "@ptypes/design/table/IEntry";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchRequestProgress: string;
  smallScreen: boolean;
  columnWidths: number[];
  pageLength: number;
  setEntryCanceled: (value: string | number) => void;
  onSearchRequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IRequestsInProgressTabUI };
