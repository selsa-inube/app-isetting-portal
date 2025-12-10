import { IEntry } from "@ptypes/design/table/IEntry";
import { IAction } from "@ptypes/table/IAction";

import { ITitle } from "@ptypes/table/ITitle";

interface IRequestInProgressTabUI {
  searchService: string;
  handleSearchService: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titles: ITitle[];
  loading: boolean;
  entries: IEntry[];
  columnWidths: number[];
  actions: IAction[];
}

export type { IRequestInProgressTabUI };
