import { IEntry } from "@ptypes/table/IEntry";

interface IUsersUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  searchPosition: string;
  loading: boolean;
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  entries: IEntry[];
  widthFirstColumn: number;
  data?: IEntry;
  catalogName?: string;
}

export type { IUsersUI };
