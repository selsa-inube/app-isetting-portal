import { IEntry } from "@ptypes/design/table/IEntry";

interface IUserTabUI {
  handleSearchService: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchService: string;
  entries: IEntry[];
  loading: boolean;
  columnWidths: number[];
  setEntryDeleted: React.Dispatch<React.SetStateAction<string | number>>;
  smallScreen: boolean;
  direction: string;
  disabledButton: boolean;
  showInfoModal: boolean;
  handleToggleInfoModal: () => void;
  path: string;
}
export type { IUserTabUI };
