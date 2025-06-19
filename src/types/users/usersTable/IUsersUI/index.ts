import { IEntry } from "@ptypes/design/table/IEntry";

interface IUsersUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  searchPosition: string;
  loading: boolean;
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  entries: IEntry[];
  columnWidths: number[];
  catalogName?: string;
}

export type { IUsersUI };
