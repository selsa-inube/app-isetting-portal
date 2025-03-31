import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { ActionRenderer } from "@design/table/actionRenderer";
import { IEntry } from "@design/table/types";

import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IEntry) => React.ReactNode;
}

interface IActionsTable {
  id: string;
  content: (entry: IEntry) => React.ReactNode;
  mobilePriority?: boolean;
  actionName?: string;
  onClick?: (entry: IEntry) => void;
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

export type { IAction, IPositions, IActionsTable };
