import { IAction } from "../IAction";
import { IEntry } from "../IEntry";
import { ITitle } from "../ITitle";

interface ITableUI {
  actions: IAction[];
  entriesLength: number;
  entries: IEntry[];
  filteredEntries: IEntry[];
  firstEntryInPage: number;
  loading: boolean;
  lastEntryInPage: number;
  pageLength: number;
  ellipsisCell: boolean;
  titles: ITitle[];
  withActionMobile: boolean;
  withGeneralizedTitle: boolean;
  mobileTitle?: string;
  widthPercentageTotalColumns?: number;
  tableLayout: "fixed" | "auto";
  columnWidths?: number[];
  goToEndPage: () => void;
  goToFirstPage: () => void;
  nextPage: () => void;
  prevPage: () => void;
  mediaActionOpen: boolean;
  numberActions: number;
  TitleColumns: ITitle[];
  emptyDataMessage?: string;
  withActionsTitles?: boolean;
}

export type { ITableUI };
