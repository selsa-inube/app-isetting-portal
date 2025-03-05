import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { ActionRenderer } from "@design/table/actionRenderer";
import { IEntrys } from "@design/templates/assignmentForm/types";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

interface IActions {
  id: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IActions) => React.ReactNode;
}

interface IActionsTable {
  id: string;
  content: (entry: IEntrys) => React.ReactNode;
  mobilePriority?: boolean;
  actionName?: string;
  onClick?: (entry: IEntrys) => void;
}
interface IPositions {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IBusinessUnitsPortalStaffId[];
  loading: boolean;
  smallScreen: boolean;
  label: (typeof PrivilegeOptionsConfig)[number] | undefined;
  ShowAction: ReturnType<typeof ActionRenderer>["ShowAction"];
  handleToggleMenuInvitation: () => void;
  ShowActionTitle: ReturnType<typeof ActionRenderer>["ShowActionTitle"];
  filteredData: IBusinessUnitsPortalStaffId[];
  handleStartPage: () => void;
  showMenu: boolean;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleEndPage: () => void;
  handleCloseMenuInvitation: () => void;
  firstEntryInPage: number;
  lastEntryInPage: number;
  paginatedData: IBusinessUnitsPortalStaffId[];
}

export type { IActions, IAction, IPositions, IActionsTable };
