import { IEntrys } from "@design/templates/assignmentForm/types";
import { IActions } from "@pages/positions/tabs/positionsTabs/types";

interface IUsersUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  searchPosition: string;
  loading: boolean;
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  entries: IEntrys[];
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  data?: IActions;
  catalogName?: string;
}

export type { IUsersUI };
