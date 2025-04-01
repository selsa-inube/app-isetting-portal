import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { ActionRenderer } from "@design/table/actionRenderer";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

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

export type { IPositions };
